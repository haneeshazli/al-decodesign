# A.L Decodesign

Website for **A.L Decodesign** — interior design and renovation in Dengkil, Selangor.

The site is a single self-contained `index.html`: all images, fonts, scripts and the
hero video are embedded in the file, so it needs no build step and no external assets.

## Deployments

| Host | URL |
| --- | --- |
| GitHub Pages | https://haneeshazli.github.io/al-decodesign/ |
| Vercel | https://al-decodesign.vercel.app |

GitHub Pages serves the `main` branch root. Vercel deploys the repository root
as a static site; pushes to `main` trigger a new Vercel deployment once the
Git integration is connected in the Vercel dashboard.

## Local preview

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000
