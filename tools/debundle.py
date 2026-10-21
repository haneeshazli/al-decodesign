#!/usr/bin/env python3
"""Turn a design-tool HTML export into a static page plus real asset files.

The export ships every image, font, script and video as base64 inside one
HTML file, which a loader script unpacks into blob URLs at runtime. That
costs the visitor the whole bundle — 16 MB for the home page — before the
first paint, re-downloads the shared fonts and runtime on the second page,
and leaves the browser nothing to cache per asset.

This writes each asset out as a file instead and rewrites the template's
uuid references to point at it, so the page becomes ordinary HTML the
browser can stream, lazy-load and cache.

Each export mints fresh uuids, so assets are identified by content hash:
the logo, fonts and runtime that both pages carry are written once and both
pages point at the same path.

Usage:
    python3 tools/debundle.py index.html portfolio.html
"""

import base64
import gzip
import hashlib
import json
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

BLOCK = re.compile(r'^[ \t]*<script type="__bundler/(\w+)">[ \t]*$')

# Assets the template references by uuid rather than through
# window.__resources, so the export carries no path to reuse. Keyed by the
# first 16 hex of the content's sha256; names follow the img/ layout the
# window.__resources fallbacks already use.
NAMED = {
    "464b5615a4db7e1a": "img/logo.png",
    "0784b04e5dff1005": "video/hero.mp4",
    "73204c8128b5dd83": "img/home/hero-poster.jpg",
    "2ff0873b84c4dee2": "img/home/astana-bedroom.jpg",
    "f43f91bdcf7f174f": "img/home/brand-line.webp",
    "c3d133391b61c3ea": "img/home/kitchen-cabinet.jpg",
    "8fe7df74405f3c55": "vendor/dc-runtime.js",
    "8fda1b2a87e98efc": "vendor/al-design-system.js",
}

EXT = {"image/png": "png", "image/jpeg": "jpg", "image/webp": "webp",
       "video/mp4": "mp4", "font/woff2": "woff2",
       "text/javascript": "js", "application/javascript": "js"}


def read_bundle(path):
    """Pull the __bundler islands out of an export."""
    lines = open(path, encoding="utf-8").read().split("\n")
    out = {}
    for i, line in enumerate(lines):
        m = BLOCK.match(line)
        if m:
            out[m.group(1)] = json.loads(lines[i + 1])
    missing = {"manifest", "template"} - set(out)
    if missing:
        sys.exit("%s: not a bundled export (no %s)" % (path, ", ".join(sorted(missing))))
    if out.get("page_order"):
        sys.exit("%s: nested page bundles are not supported" % path)
    return out


def decode(entry):
    raw = base64.b64decode(entry["data"])
    return gzip.decompress(raw) if entry.get("compressed") else raw


def font_names(template, manifest):
    """Name each woff2 after the @font-face family that loads it.

    A family is split across several subset files, so number them in the
    order the stylesheet reaches them.
    """
    faces = re.findall(r"font-family:\s*'([^']+)'[^}]*?url\(\"([^\"]+)\"\)",
                       template, re.S)
    seen, counts, names = set(), {}, {}
    for family, uuid in faces:
        if uuid not in manifest or uuid in seen:
            continue
        seen.add(uuid)
        slug = re.sub(r"[^a-z0-9]+", "-", family.lower()).strip("-")
        counts[slug] = counts.get(slug, 0) + 1
        names[uuid] = "fonts/%s-%d.woff2" % (slug, counts[slug])
    return names


# Elements in the export's own <head> that belong to the page rather than to
# the loader: the SEO and social metadata, the icons, the structured data and
# the deep-link script. The loader's progress styles and its noscript notice
# describe unpacking that no longer happens, so they are dropped.
HEAD_KEEP = re.compile(
    r"""<title>.*?</title>
      | <meta\s[^>]*>
      | <link\s[^>]*>
      | <script(?:\s[^>]*)?>.*?</script>""",
    re.S | re.X | re.I)


def carry_head(wrapper):
    """Return the export head's own markup, minus the loader's machinery."""
    head = re.search(r"<head[^>]*>(.*?)</head>", wrapper, re.S | re.I)
    if not head:
        return ""
    kept = []
    for m in HEAD_KEEP.finditer(head.group(1)):
        tag = m.group(0)
        low = tag.lower()
        if "__bundler" in tag:
            continue
        # The template's own head already declares both of these.
        if low.startswith("<meta") and ("charset" in low or "viewport" in low):
            continue
        kept.append(tag.strip())
    return "\n".join(kept)


def plan(bundle, assets):
    """Map every uuid in this export to the path its asset is served at.

    `assets` carries hash -> path across exports, so a file both pages ship
    keeps the path the first export gave it.
    """
    manifest, template = bundle["manifest"], bundle["template"]
    # A window.__resources lookup carries the path the design already
    # expects: ((window.__resources||{}).r0||'img/home/seruni.webp')
    fallback = dict(re.findall(r"__resources\|\|\{\}\)\.(\w+)\|\|'([^']*)'", template))
    by_id = {e["uuid"]: e["id"] for e in bundle.get("ext_resources", [])}
    fonts = font_names(template, manifest)

    paths, data = {}, {}
    for uuid, entry in manifest.items():
        raw = decode(entry)
        digest = hashlib.sha256(raw).hexdigest()[:16]
        data[uuid] = raw
        if digest in assets:
            paths[uuid] = assets[digest]
            continue
        rid = by_id.get(uuid, "")
        if digest in NAMED:
            path = NAMED[digest]
        elif rid in fallback:
            path = fallback[rid]
        elif rid.startswith("http"):
            # React and friends: keep them local so the page needs no CDN.
            path = "vendor/" + rid.rsplit("/", 1)[-1]
        elif uuid in fonts:
            path = fonts[uuid]
        else:
            kind = "img" if entry["mime"].startswith("image/") else "vendor"
            path = "%s/%s.%s" % (kind, digest[:10], EXT.get(entry["mime"], "bin"))
        paths[uuid] = assets[digest] = path
    return paths, data


def write_assets(paths, data, written):
    for uuid, path in paths.items():
        if path in written:
            continue
        written[path] = len(data[uuid])
        dest = os.path.join(ROOT, path)
        os.makedirs(os.path.dirname(dest), exist_ok=True)
        with open(dest, "wb") as fh:
            fh.write(data[uuid])


# Hand-maintained files layered back on after extraction. They are kept out
# of vendor/, img/, fonts/ and video/ — everything this script writes — so
# that clearing those to rebuild from scratch cannot take them with it.
SITE_CSS = "css/site.css"
HERO_JS = "js/hero-video.js"


def hero_video(template):
    """Park the hero loop's URL in data-src so js/hero-video.js decides.

    Left as src, a 2 MB decorative background downloads on every phone
    before anything else on the page can finish.
    """
    def swap(m):
        tag = m.group(0)
        if "video/" not in tag:
            return tag
        tag = re.sub(r'\bsrc="', 'data-src="', tag, count=1)
        if "preload=" not in tag:
            tag = tag[:-1].rstrip() + ' preload="none">'
        return tag
    return re.sub(r"<video\b[^>]*>", swap, template, flags=re.I)


def dedupe_title(template, head_extra):
    """Keep one <title>: the export head's, which carries the tuned wording.

    Swapping the whole document used to throw the export head away, so the
    page rendered with the template's shorter helmet title and none of the
    SEO or social tags at all. Now that the head survives, its title and the
    helmet's would both be in the document.
    """
    if "<title" not in head_extra.lower():
        return template
    helmet = re.search(r"<helmet[^>]*>.*?</helmet>", template, re.S | re.I)
    if not helmet:
        return template
    stripped = re.sub(r"<title>.*?</title>\s*", "", helmet.group(0), count=1,
                      flags=re.S | re.I)
    return template[:helmet.start()] + stripped + template[helmet.end():]


def lazy_images(template):
    """Let below-the-fold photography wait its turn.

    The export marks most of its own images, but the ones it builds from data
    — the service tabs, the galleries — come through as src="{{ ... }}" with
    nothing set. All of them sit below the fold on a phone. Images with a
    literal src are left alone: that is the logo, which the fixed header
    needs straight away.
    """
    def swap(m):
        tag = m.group(0)
        if "decoding=" not in tag:
            tag = tag[:-1].rstrip() + ' decoding="async">'
        if "loading=" not in tag and "{{" in (m.group(1) or ""):
            tag = tag[:-1].rstrip() + ' loading="lazy">'
        return tag
    return re.sub(r'<img\b[^>]*?\bsrc="([^"]*)"[^>]*>', swap, template, flags=re.I)


def preloads(template, resources):
    """Start the render-critical fetches at parse time.

    Without this the browser cannot know about React until dc-runtime.js has
    downloaded and run, so the chain to first paint is three requests deep.
    """
    out = []
    for url, path in sorted(resources.items()):
        if url.startswith("http") and path.endswith(".js"):
            out.append('<link rel="preload" as="script" href="%s">' % path)
    for m in re.finditer(r'<script src="(vendor/[^"]+)"', template):
        out.append('<link rel="preload" as="script" href="%s">' % m.group(1))
    # Only the latin subsets are ever fetched for an English/Malay page; the
    # rest are held back by their unicode-range. Restrict this to the body
    # and display families — the script face is one decorative line, and a
    # preload the page does not use soon is wasted bandwidth.
    wanted = set()
    for var in ("--font-display", "--font-sans"):
        m = re.search(re.escape(var) + r':\s*"([^"]+)"', template)
        if m:
            wanted.add(m.group(1))
    for m in re.finditer(r'/\*\s*latin\s*\*/\s*@font-face\s*\{(.*?)\}',
                         template, re.S):
        body = m.group(1)
        fam = re.search(r"font-family:\s*'([^']+)'", body)
        url = re.search(r'url\("([^"]+)"\)', body)
        if url and fam and fam.group(1) in wanted:
            out.append('<link rel="preload" as="font" type="font/woff2" '
                       'crossorigin href="%s">' % url.group(1))
    poster = re.search(r'<video\b[^>]*\bposter="([^"]+)"', template, re.I)
    if poster:
        out.append('<link rel="preload" as="image" fetchpriority="high" '
                   'href="%s">' % poster.group(1))
    # dict.fromkeys keeps first-seen order while dropping repeats.
    return list(dict.fromkeys(out))


def build_page(bundle, paths, head_extra):
    template = bundle["template"]
    # Longest first so no uuid can be a prefix of another's replacement.
    for uuid in sorted(paths, key=len, reverse=True):
        template = template.replace(uuid, paths[uuid])

    # Blob URLs needed SRI stripped; real files are same-origin, so the
    # attributes are redundant. Keep the export's behaviour.
    template = re.sub(r'\s+integrity="[^"]*"', "", template, flags=re.I)
    template = re.sub(r'\s+crossorigin="[^"]*"', "", template, flags=re.I)

    # The loader used to publish this map; the runtime reads it to resolve
    # React, which the template has no fallback for.
    resources = {by_id: paths[uuid]
                 for uuid, by_id in ((e["uuid"], e["id"])
                                     for e in bundle.get("ext_resources", []))
                 if uuid in paths}
    script = ("<script>window.__resources = "
              + json.dumps(resources, sort_keys=True).replace("</", "<\\/")
              + ";</" + "script>")
    template = hero_video(template)
    template = lazy_images(template)
    template = dedupe_title(template, head_extra)

    tail = preloads(template, resources)
    tail.append('<link rel="stylesheet" href="%s">' % SITE_CSS)
    tail.append('<script src="%s" defer></' % HERO_JS + 'script>')

    head = re.search(r"<head[^>]*>", template, re.I)
    if head:
        at = head.end()
        template = (template[:at] + "\n" + script + "\n"
                    + "\n".join(tail) + "\n" + head_extra + template[at:])
    return template


def main(argv):
    if not argv:
        sys.exit(__doc__)
    assets, written = {}, {}
    for name in argv:
        src = os.path.join(ROOT, name)
        before = os.path.getsize(src)
        bundle = read_bundle(src)
        head_extra = carry_head(open(src, encoding="utf-8").read())
        paths, data = plan(bundle, assets)
        write_assets(paths, data, written)
        page = build_page(bundle, paths, head_extra)
        with open(src, "w", encoding="utf-8") as fh:
            fh.write(page)
        print("%-16s %7.2f MB bundled -> %6.1f KB of HTML"
              % (name, before / 1e6, len(page.encode("utf-8")) / 1024))
    print("%d assets written, %.2f MB total"
          % (len(written), sum(written.values()) / 1e6))


if __name__ == "__main__":
    main(sys.argv[1:])
