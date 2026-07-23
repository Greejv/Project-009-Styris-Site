# Styris — Web

Landing page for **Styris**, a custom metalwork studio (gates, staircases, railings,
pergolas) serving the Košice region of Slovakia. Built with [Astro](https://astro.build/)
as a fast, static, single-page site.

Implemented pixel-for-pixel from the Claude Design handoff in
`Styris-handoff/styris/project/Styris Landing Page.html`.

## Stack & decisions

- **Astro 7** — zero-JS-by-default static output; the only client JS is a small
  progressive-enhancement script (`src/scripts/main.ts`).
- **Self-hosted fonts** via `@fontsource` (Plus Jakarta Sans, Hanken Grotesk, DM Sans) —
  no third-party requests, no layout shift, better privacy.
- **Optimized images** via `astro:assets` — the multi-MB hero photos are served as
  responsive WebP (~30–100 KB per variant) with `srcset`/`sizes`.
- **Security headers + CSP** in `vercel.json` (immutable cache for `/_astro/*`, HSTS, CSP, X-Frame-Options, etc.).
- **SEO**: canonical URL, Open Graph, JSON-LD `LocalBusiness`, `robots.txt`, sitemap.
- **Accessibility**: labelled form controls, `aria` on nav toggle, and a
  `prefers-reduced-motion` fallback that disables animation without altering the layout.

## Structure

```
src/
  layouts/Layout.astro      # <head>, meta, fonts, global CSS
  components/               # Nav, Hero, SocialProof, Services, Process,
                            #   Quality, Materials, Contact, Footer
  pages/index.astro         # page composition
  scripts/main.ts           # nav scroll state, reveal-on-scroll, mobile menu,
                            #   smooth scroll, contact form handling
  styles/                   # global.css (design system) + fonts.css
  assets/                   # source images + logo (processed at build time)
public/                     # robots.txt, _headers, logo.png (favicon)
```

## Commands

```bash
npm install      # install dependencies
npm run dev      # local dev server at http://localhost:4321
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Notes

- The contact form currently validates and shows a client-side confirmation only.
  Wire the `submit` handler in `src/scripts/main.ts` to a real endpoint (e.g. a form
  service or serverless function) before launch.
- Service-card images are intentional placeholders, matching the handoff design.
  Drop real photos into `src/assets/images/` and swap the `.img-ph` blocks in
  `src/components/Services.astro` for `<Image>` components when available.
- Production domain is set to `https://styris.duetweb-dev.dev` in `astro.config.mjs`
  and `public/robots.txt`. Update both if the domain changes.

## Deploy to Vercel

Vercel auto-detects Astro. `vercel.json` in the repo root pins the build command,
output directory, security headers and cache-control for fingerprinted assets, so
the project is deploy-ready with no extra Vercel config.

- **Framework preset:** Astro (auto-detected)
- **Build command:** `npm run build` (from `vercel.json`)
- **Output directory:** `dist` (from `vercel.json`)
- **Install command:** `npm install`
- **Node version:** ≥ 20 (see `package.json`)

Point the domain `styris.duetweb-dev.dev` at the Vercel project. No environment
variables are required — the site is fully static.
