# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Kevin Nguyen's portfolio site (kevindream.me): a React 18 + React Router 7 single-page app built with Vite and
deployed to GitHub Pages. Requires Node ≥ 22.12 (`.nvmrc`). On this machine Node 22 is a keg-only Homebrew install,
so prefix commands with `PATH=/opt/homebrew/opt/node@22/bin:$PATH` if `node -v` isn't 22.

## Commands

```bash
npm run dev                      # dev server, http://localhost:5173
npm run lint                     # ESLint 9 flat config (eslint.config.js)
npm test                         # Vitest + Testing Library (jsdom)
npx vitest run -t "projects"     # run a single test by name
npm run build                    # dist/, plus dist/404.html copy for SPA deep links on GitHub Pages
npm run preview                  # serve dist/
```

ESLint must stay on v9: `eslint-plugin-react` doesn't support v10 yet.

## Architecture

- `src/App.jsx` defines all routes, nested under `components/Layout.jsx` (sticky header, mobile menu,
  theme toggle, footer). `/downloadresume` is a legacy path that redirects to `/contact`.
- Content is data-driven. Edit `src/data/` rather than pages: `profile.js` (name, intro, socials; no résumé PDF, it's on request),
  `projects.js` (the `featured: true` entry renders as the large card on Home and Projects), `resume/*.js`,
  and `about.md`, which is imported with Vite's `?raw` and rendered by `react-markdown`.
- Styling is one file, `src/styles.css`, in a Swiss-grid style: paper background, ink type, 1px rules, square
  corners, one accent (`--accent`), and no gradients or shadows. Sections use a 12-column grid. Ruled cell grids
  (stats, projects, skills, courses, contact) draw their lines with a 1px `gap` over a `var(--line)` background.
  Light is the default theme (tokens on `:root`); `html[data-theme="dark"]` overrides them. The toggle in
  `Layout.jsx` saves the choice to `localStorage`, and an inline script in `index.html` applies it before first
  paint. Use `rgba(var(--ink), a)` for tints so they work in both themes. Fonts are Inter Tight and Geist Mono from
  Google Fonts, and `Layout.jsx` draws the faint 12-column background lines.
  Elements with class `reveal` start hidden and fade in when `useReveal` in `Layout.jsx` sees them scroll into
  view, so new sections need that class to animate.
- DeltaDesk's `learning` field in `projects.js` drives `components/LearningHub.jsx`, the course grid under the
  featured card. Course links are `https://deltadesks.com/blog/course/<slug>`; the catalog comes from
  `backend/data/blog/courses.json` in the tradelog repo.
- Each page renders exactly one element with `data-testid="heading"`. `src/test/App.test.jsx` asserts on it per
  route, so update that table when you change headings or add routes.
- Deploy: `.github/workflows/github-pages.yml` runs lint, test and build, then on pushes to `main` publishes `dist/`
  to the `gh-pages` branch. `public/CNAME` sets the custom domain.
- DeltaDesk's `screens` field drives `components/ProductTour.jsx`, the tabbed screenshot tour between the featured
  card and the course grid. Its images live in `public/images/projects/deltadesk/`.
- The DeltaDesk card image and tour screenshots come from the separate tradelog repo (`frontend/public/docs-images/`). Those
  screenshots use demo data only.
