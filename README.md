# A.L Decodesign

Website for **A.L Decodesign** — interior design and renovation in Dengkil, Selangor.

The site is two pages — `index.html` (home) and `portfolio.html` — plus the
images, fonts, scripts and video they reference from `img/`, `fonts/`,
`vendor/`, `js/`, `css/` and `video/`. There is no build step to run before
deploying: what is in the repository is what is served. The two pages link to
each other by filename, which both hosts serve as-is.

## Where the pages come from

Both pages are exported from the design tool as a single self-contained HTML
file, with every asset base64'd into the document and unpacked into blob URLs
by a loader script at runtime. That form is convenient to hand around but slow
to visit: the home page export was 16.7 MB, and none of it could render until
all of it had arrived and been decoded.

`tools/debundle.py` converts an export into the deployed form — assets written
out as files, references rewritten to point at them — and `tools/optimize.py`
then shrinks the ones worth shrinking. After dropping a fresh export into the
repository, re-run both:

```bash
python3 tools/debundle.py index.html portfolio.html
python3 tools/optimize.py
```

Both rewrite in place and both are safe to re-run. `debundle.py` also links
back in the two hand-maintained files that live outside the export, so a
re-export does not lose them:

| File | What it is for |
| --- | --- |
| `css/site.css` | Mobile type, spacing and tap-target refinements |
| `js/hero-video.js` | Keeps the hero loop off phones and metered connections |

Everything under `img/`, `fonts/`, `vendor/` and `video/` is generated — edit
the design, not those files. `vendor/` holds the React build and the design
tool's own runtime, which is why the hand-maintained script sits in `js/`
instead: clearing the generated folders to rebuild from scratch should not be
able to take it with it.

## Deployments

| Host | URL |
| --- | --- |
| GitHub Pages | https://haneeshazli.github.io/al-decodesign/ |
| Vercel | https://al-decodesign.vercel.app |

On Vercel `cleanUrls` serves the portfolio at `/portfolio`; `/portfolio.html`
redirects there. GitHub Pages serves `/portfolio.html` directly. `vercel.json`
also sets cache lifetimes per asset folder; GitHub Pages ignores it and serves
its own defaults.

GitHub Pages serves the `main` branch root. Vercel deploys the repository root
as a static site; pushes to `main` trigger a new Vercel deployment once the
Git integration is connected in the Vercel dashboard.

## Local preview

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

Note that the pages render client-side, so the browser requests the few
template placeholders (`{{ s.img }}` and friends) that sit in the markup before
the runtime fills them in. Those 404s are harmless and were present in the
design tool's own preview.
