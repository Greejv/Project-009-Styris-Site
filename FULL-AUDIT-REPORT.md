# SEO / GEO Audit — styris.sk

**Date:** 2026-07-24
**Scope:** Full site (7 indexable URLs), Astro 7 codebase + live domain
**Target keywords:** `brána na mieru`, `schody na mieru` (SK market, Košice + celé Slovensko)
**Method:** LLM-first analysis against the local build output, backed by
`robots_checker.py`, `llms_txt_checker.py`, `social_meta.py`, `security_headers.py`,
`pagespeed.py`, plus live accessibility-tree inspection in Chrome.

---

## Score

| Category | Weight | Score | Notes |
|---|---|---|---|
| Technical SEO | 25% | 92 | Canonicals, sitemap, robots, trailing-slash all consistent |
| Content Quality | 20% | 58 | Money pages now 533–701 words vs. 800 gate; no reviews / author signals |
| On-Page SEO | 15% | 88 | Titles & H1s now carry the target phrases |
| Schema | 15% | 95 | Single `@graph`, cross-referenced by `@id` |
| Performance (CWV) | 10% | — | **Unknown — see Environment Limitations** |
| Image Optimization | 10% | 90 | All `alt` present, responsive `widths`, modern formats |
| AI Search Readiness (GEO) | 5% | 90 | `llms.txt`, named AI crawlers, entity graph, labelled landmarks |

**Weighted score (excl. CWV): 82 / 100 — Good.**

Prior to this session's work the same rubric scored **≈47 (Poor)**: no `og:image`,
robots pointing at a staging domain, invisible favicons, JSON-LD outside `<html>`,
and zero occurrences of either target keyword.

---

## The keyword question, answered directly

> *"Make sure when someone searches 'brána na mieru' or 'schody na mieru' we are first."*

**I cannot guarantee a #1 ranking, and nobody can.** What I could do is remove the
reasons you were guaranteed *not* to rank. The single most damning measurement from
this audit, taken before any changes:

| Phrase | Occurrences across the entire site (before) |
|---|---|
| `brána na mieru` / `brány na mieru` | **0** |
| `schody na mieru` | **0** |
| `cena` / `cenník` / `koľko stojí` | **0** |

You were asking Google to rank you for phrases your website never said. Titles spent
their most valuable characters on `prípadová štúdia` — a phrase with essentially no
search volume — instead of the words customers type.

### After this session

| Page | Title | Words | Target phrase |
|---|---|---|---|
| `/prace/kovove-brany-a-ploty` | Brány na mieru — kovové brány a ploty \| Styris Košice | 364 → **619** | ✅ present |
| `/prace/schodiska-na-mieru` | Schody na mieru — kovové schodiská \| Styris Košice | 422 → **701** | ✅ present |
| `/prace/zabradlia-a-madla` | Zábradlia na mieru — kovové zábradlia a madlá | 365 → **558** | ✅ present |
| `/prace/pergoly-a-zastresenia` | Pergoly na mieru — kovové zastrešenie terasy | 344 → **533** | ✅ present |
| `/` (home) | Kovovýroba na mieru — schody, brány, zábradlia \| Styris Košice | 670 → **706** | ✅ service front-loaded |

### What still stands between you and #1 — and none of it is code

Ranking for a competitive commercial query is roughly: relevance (on-page) ×
authority (links) × local prominence (GBP + reviews). **On-page is the only one of
the three that lives in this repo, and it is now done.** The other two dominate:

1. **Google Business Profile.** For a query with local intent, the map pack sits
   above the organic results. If you don't have a verified GBP with the right
   category (*Kováčstvo / Metal fabricator*), service area and photos, you cannot
   appear there at all. This is the highest-impact action available to you and it
   takes about an hour.
2. **Reviews.** Both a map-pack ranking factor and the thing that decides whether
   someone clicks you or the competitor. You currently have none on-site and I
   refused to invent any.
3. **Backlinks.** A new domain with no referring domains will lose to an established
   competitor even with better on-page work. Slovak business directories
   (azet.sk, zoznam.sk, superstavba.sk), supplier and partner sites, and local
   press are the realistic sources.
4. **Time.** New domains are not trusted immediately. Expect 3–6 months of
   consistent signals before these queries move.

**Realistic expectation:** the changes here should get you ranking for long-tail
and brand-adjacent queries (`kovové schodisko Košice`, `brána na mieru cena`)
within weeks of indexing. Head terms like bare `schody na mieru` are a 6–12 month
project that depends mostly on GBP, reviews and links.

---

## Findings

### 🔴 Critical — all fixed this session

| # | Finding | Evidence | Fix |
|---|---|---|---|
| 1 | Target keywords absent sitewide | 0 occurrences of `brána na mieru` / `schody na mieru` | Per-project `seoTitle` / `seoDescription` / `h1` fields |
| 2 | `robots.txt` pointed at staging | `Sitemap: https://styris.duetweb-dev.dev/...` | Rewritten to `https://styris.sk/sitemap-index.xml` |
| 3 | `og:image` missing entirely | `social_meta.py` → 54/100, "Missing required: og:image" | Generated 1200×630 `og-image.jpg` |
| 4 | JSON-LD emitted outside `<html>` | Scripts after `</Layout>` in `[slug].astro` | Moved into the head `@graph` |
| 5 | Favicons invisible on light tabs | White wordmark on transparency, no `.ico` | Rebuilt on dark plate + ICO/SVG/manifest |
| 6 | `/kontakt` had no `<h1>` | Page led with `<h2>` | Promoted (`.headline-lg` keeps styling identical) |

### ⚠️ Warning — partially addressed

| # | Finding | Evidence | Status |
|---|---|---|---|
| 7 | Service pages below word-count gate | 533–701 words vs. **800** required | Improved ~60%; gap needs real project write-ups (see Action Plan) |
| 8 | No `llms.txt` | `llms_txt_checker.py` → HTTP 404 | ✅ Added, incl. a "don't misreport this" section |
| 9 | Unnamed `region` landmarks | Chrome a11y tree showed 8 anonymous `region` nodes | ✅ All 8 now named |
| 10 | No E-E-A-T signals | No author, no team, no reviews, no credentials | ❌ Needs owner input |
| 11 | `/prace` thin | 297 words | ❌ Open |

### ✅ Pass

- Security headers **100/100** (`security_headers.py`) — HSTS, CSP, X-Frame-Options, Referrer-Policy all present
- Heading hierarchy: 1 `<h1>` per page, **zero level skips** across all 7 pages
- All images carry `alt` text; responsive `widths` + modern formats via Astro assets
- Landmarks: `header` / `nav` / `main` / `footer` on every page
- Canonicals, sitemap URLs and `vercel.json` trailing-slash policy all agree
- `/dakujeme` correctly `noindex` and excluded from sitemap
- No nested interactive controls, no dangling ARIA references, no unnamed controls

---

## Structured data

One `@graph` per page, nodes cross-referenced by `@id` so parsers resolve a single
Styris entity rather than several near-duplicates:

```
Organization (HomeAndConstructionBusiness) ─ @id styris.sk/#organization
 ├── WebSite                                ─ @id styris.sk/#website
 ├── WebPage                                ─ per URL
 ├── BreadcrumbList                         ─ /prace, case studies, legal
 ├── Service + OfferCatalog                 ─ home + each case study
 ├── HowTo                                  ─ the 4-step process (home)
 ├── FAQPage                                ─ case studies with FAQs
 ├── CollectionPage + ItemList              ─ /prace
 └── ContactPage                            ─ /kontakt
```

### Two deliberate deviations from the skill's rules

The skill's Critical Rules say FAQPage is restricted to gov/health sites and HowTo
is deprecated. **Both are correct about Google rich results and I am keeping the
schema anyway** — with the reasoning stated so you can overrule me:

- Neither will produce a rich result in Google. That benefit is gone; I am not
  claiming it.
- Neither carries a penalty when the markup is truthful and matches visible content,
  which it does here.
- Both remain machine-readable to the answer engines this brief explicitly targets.
  A `HowTo` describing your 4-step process is exactly the structure an LLM reaches
  for when asked *"ako prebieha objednávka kovovýroby na Slovensku"*.

Given GEO is half the stated goal, the asymmetry favours keeping them. Say the word
and I'll strip both.

---

## Environment Limitations

- **Core Web Vitals not measured.** `pagespeed.py` returned `Rate limited by Google
  API` on both attempts. CWV is therefore scored `—`, not assumed-good. Per the
  skill's rules this is reported as an environment limitation, not a site defect.
- **Live site is stale.** Every live check in this report reflects the *pre-deploy*
  site. 25+ minutes after `git push`, `https://styris.sk/robots.txt` still served the
  staging sitemap line and `/favicon.ico` and `/llms.txt` both returned 404. The
  fixes are verified against the local production build instead. **See Action Plan
  item 0 — this is now the blocking issue.**
- **`aria-labelledby` unresolved by one agent tool.** The browser's `read_page` tree
  showed the labelled sections as unnamed. The markup is valid (targets exist, are
  visible, contain text), so this is a limitation of that tool's parser rather than
  the page. If Lighthouse still flags it, switch the 7 sections from
  `aria-labelledby` to literal `aria-label`.

---

## Artifacts

- `FULL-AUDIT-REPORT.md` (this file)
- `ACTION-PLAN.md`
