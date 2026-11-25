# Personal Website

Kevin Nguyen's portfolio, live at [kevindream.me](https://kevindream.me).

Built with React 18, React Router and Vite. Plain CSS in a Swiss-grid style, light theme by default with a dark-mode toggle. Deployed to GitHub Pages.
Originally forked from [mldangelo/personal-site](https://github.com/mldangelo/personal-site) (MIT).

## Requirements

Node 22.12 or newer (see `.nvmrc`).

## Running locally

```bash
npm install
npm run dev        # http://localhost:5173
```

## Other commands

```bash
npm run lint       # ESLint
npm test           # Vitest route tests
npm run build      # production build into dist/
npm run preview    # serve dist/ locally
```

## Editing content

All content lives in `src/data/`:

- `profile.js`: name, role, intro, social links (the résumé is available on request, so there's no PDF link)
- `projects.js`: project cards (`featured: true` puts a project in the large card on the home page)
- `resume/`: positions, degrees, skills, courses
- `about.md`: the About page text

Images go in `public/images/`.

## Deploying

Pushing to `main` runs `.github/workflows/github-pages.yml`. It lints, tests and builds the site, then publishes
`dist/` to the `gh-pages` branch. In the repo settings, set **Pages → Source** to the `gh-pages` branch.
The custom domain is set in `public/CNAME`.
