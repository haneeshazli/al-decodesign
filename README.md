# A.L Decodesign

Website for **A.L Decodesign** — interior design and renovation in Dengkil, Selangor.

The site is two self-contained pages — `index.html` (home) and `portfolio.html`
— each with all its images, fonts and scripts embedded, so it needs no build
step and no external assets. The two link to each other by filename, which both
hosts serve as-is.

## Deployments

| Host | URL |
| --- | --- |
| GitHub Pages | https://haneeshazli.github.io/al-decodesign/ |
| Vercel | https://al-decodesign.vercel.app |

On Vercel `cleanUrls` serves the portfolio at `/portfolio`; `/portfolio.html`
redirects there. GitHub Pages serves `/portfolio.html` directly.

GitHub Pages serves the `main` branch root. Vercel deploys the repository root
as a static site; pushes to `main` trigger a new Vercel deployment once the
Git integration is connected in the Vercel dashboard.

## Local preview

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000
