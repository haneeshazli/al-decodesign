#!/usr/bin/env python3
"""Shrink the assets debundle.py wrote, without changing their paths.

The export's JPEGs are already compressed about as far as they go — re-encoding
them costs quality and saves nothing, so they are left alone. Its WebPs and its
hero video are not, and both are large enough to dominate what a phone on
mobile data has to pull down.

Runs after debundle.py and is safe to re-run: each file is only rewritten when
the new encode is actually smaller.

Usage:
    python3 tools/optimize.py
"""

import glob
import io
import os
import shutil
import subprocess
import sys
import tempfile

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# The export saves WebP at a quality far above what these photographs need;
# 80 is indistinguishable against the original at the sizes they render.
WEBP_QUALITY = 80

# The hero loop plays behind a dark scrim at saturate(.35), so it carries far
# more bitrate than it can show. CRF 28 holds up frame-for-frame against the
# 3.1 Mbps original.
VIDEO_CRF = "28"
VIDEO = "video/hero.mp4"


# Re-encoding an already-encoded file shaves a few percent off every time,
# and each pass is another round of generation loss. Requiring a real saving
# means a second run over optimized assets leaves them alone.
MIN_GAIN = 0.25


def saved(path, data):
    """Replace path with data when that is meaningfully smaller.

    Returns the bytes saved, or 0 when the file was left as it was.
    """
    old = os.path.getsize(path)
    if len(data) > old * (1 - MIN_GAIN):
        return 0
    with open(path, "wb") as fh:
        fh.write(data)
    return old - len(data)


def optimize_webp():
    try:
        from PIL import Image
    except ImportError:
        print("  skipped: Pillow is not installed")
        return 0
    total = 0
    for path in sorted(glob.glob(os.path.join(ROOT, "img/**/*.webp"), recursive=True)):
        with Image.open(path) as im:
            buf = io.BytesIO()
            im.save(buf, "WEBP", quality=WEBP_QUALITY, method=6)
        gain = saved(path, buf.getvalue())
        if gain:
            print("  %-36s -%6.0f KB" % (os.path.relpath(path, ROOT), gain / 1024))
        total += gain
    return total


def optimize_video():
    path = os.path.join(ROOT, VIDEO)
    if not os.path.exists(path):
        return 0
    if not shutil.which("ffmpeg"):
        print("  skipped: ffmpeg is not installed")
        return 0
    tmp = tempfile.NamedTemporaryFile(suffix=".mp4", delete=False)
    tmp.close()
    cmd = ["ffmpeg", "-v", "error", "-y", "-i", path,
           "-an",                      # the loop is muted; drop any audio
           "-c:v", "libx264", "-preset", "slower", "-crf", VIDEO_CRF,
           "-pix_fmt", "yuv420p", "-profile:v", "high",
           "-movflags", "+faststart",  # let it start playing before it lands
           tmp.name]
    try:
        subprocess.run(cmd, check=True)
        with open(tmp.name, "rb") as fh:
            gain = saved(path, fh.read())
    finally:
        os.unlink(tmp.name)
    if gain:
        print("  %-36s -%6.0f KB" % (VIDEO, gain / 1024))
    return gain


def main():
    print("WebP:")
    total = optimize_webp()
    print("Video:")
    total += optimize_video()
    print("\nsaved %.2f MB" % (total / 1e6))
    return 0


if __name__ == "__main__":
    sys.exit(main())
