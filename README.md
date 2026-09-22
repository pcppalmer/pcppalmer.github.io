# Patrick Palmer

A React + Vite personal landing page for patrickpalmer.xyz.

## Local development

Use Node.js 22.12 or newer.

```sh
npm ci
npm run dev
```

`npm run build` creates the static site in `dist/`. `npm run preview` previews that production build.

Project descriptions and links live in `src/main.jsx`; styles live in `src/style.css`. Project artwork is CSS, with no external image dependencies. Google Fonts has system fallbacks. Motion respects the visitor's reduced-motion preference.

## Publish on GitHub Pages

1. Push this branch to `pcppalmer/pcppalmer.github.io` and review the changes before merging into the default branch.
2. Set repository **Settings → Pages → Build and deployment → Source** to **GitHub Actions**.
3. Merge the branch. The included workflow builds and deploys the site. It also supports manual runs.
4. Keep the custom domain set to `patrickpalmer.xyz` and HTTPS enabled. `public/CNAME` is copied into the build; the original root `CNAME` is retained.

The workflow handles both `main` and `master`. The two project sites are separate deployments and are linked by their full URLs.
