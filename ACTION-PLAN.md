# SEO / GEO Action Plan — styris.sk

Ordered by impact ÷ effort. Items marked **[owner]** cannot be done from the
codebase — they need you, and they are the ones that actually decide whether you
rank for `brána na mieru` and `schody na mieru`.

---

## 0. 🔴 BLOCKING — the site has not deployed

Nothing below matters until this is resolved. 25+ minutes after `git push`:

```
https://styris.sk/robots.txt   → still lists the staging sitemap
https://styris.sk/favicon.ico  → 404
https://styris.sk/llms.txt     → 404
```

Commit `b600749` is on `origin/main`, so the code is pushed. The break is between
GitHub and Vercel. Check, in order:

1. Vercel dashboard → the project's **Deployments** tab. Is there a build for
   `b600749`? Did it fail?
2. Is the Git integration connected to `Greejv/Project-009-Styris-Site`, and is
   the production branch set to `main`?
3. `vercel.json` sets `"alias": ["styris.sk"]`. If the project uses a
   promote-to-production flow, the build may have succeeded but never been aliased.

Verify with:

```bash
curl -s https://styris.sk/robots.txt | grep Sitemap
```

You want `https://styris.sk/sitemap-index.xml`. Until you see that, Google is still
being pointed at a staging domain.

---

## 1. 🔴 [owner] Google Business Profile — highest impact available

For `brána na mieru` and `schody na mieru` Google shows a **map pack above the
organic results**. Without a verified GBP you are structurally excluded from the
most valuable real estate on the page. No amount of code changes this.

- Claim/verify at [business.google.com](https://business.google.com)
- Primary category: **Kováčstvo** (*Metal fabricator*); secondary: *Zvárač*, *Výroba plotov*
- Set a **service area** (Košice + kraje you actually travel to) rather than a
  storefront address, since you work on-site
- Add 20+ real photos of finished work — GBP photo volume correlates strongly with
  map-pack position
- **Make the NAP match the site exactly.** Currently the schema publishes
  `Košická 18, 044 14 Čaňa` (from your privacy policy) while the UI says "Košice".
  If GBP says something different, the mismatch actively suppresses local ranking.
  Decide on one address and tell me — it is a one-line change in `src/data/site.ts`.

**Effort:** ~1 hour. **Impact:** larger than everything else on this list combined.

---

## 2. 🔴 [owner] Reviews

Both a ranking factor for the map pack and the deciding factor for the click.

- Ask your last ~20 customers for a Google review. A direct link from GBP converts
  far better than "search for us".
- Once you have real ones, they can go on-site with `Review` / `aggregateRating`
  schema, which is eligible for star rich results.
- **I deliberately did not add rating schema**, because fabricating reviews is both
  a manual-action risk and a lie. This stays empty until the reviews are real.

---

## 3. ⚠️ Close the content gap on money pages

Currently 533–701 words against an 800-word gate for service pages.

The honest way to close it is **not** more prose — it is real specifics only you have:

- 2–3 actual projects per category: what the customer wanted, the constraint
  (tight stairwell, sloped driveway, listed façade), what you did, how long it took.
  This is the E-E-A-T "Experience" signal Google weights most and the thing no
  competitor can copy.
- Photograph the same project at **zameranie → dielňa → montáž**. Process photos
  outperform beauty shots for trust.
- Each write-up is ~150 words and pushes the page over the gate while making it
  genuinely better.

Send me the raw notes and photos and I'll structure and mark them up.

---

## 4. ⚠️ Submit and monitor

Once item 0 is resolved:

1. **Google Search Console** — add the property, submit
   `https://styris.sk/sitemap-index.xml`, then use *URL Inspection → Request
   indexing* on `/`, `/prace/schodiska-na-mieru` and `/prace/kovove-brany-a-ploty`.
2. **Bing Webmaster Tools** — same sitemap. Bing feeds ChatGPT Search, so this is a
   GEO action as much as an SEO one.
3. **Facebook Sharing Debugger** — re-scrape the homepage to flush the cached
   preview that had no `og:image`.
4. Recheck rankings in ~4 weeks. Track `brána na mieru`, `schody na mieru`,
   `kovové schodisko Košice`, `pergola na mieru cena`.

---

## 5. ⚠️ Rich-result eligibility not yet claimed

| Schema | Status | Blocker |
|---|---|---|
| `Review` / `aggregateRating` | Not implemented | Needs real reviews (item 2) |
| `ImageObject` per project | Not implemented | Cheap win once project photos exist |
| `openingHours` | Omitted | Tell me your hours |
| `geo` coordinates | Omitted | Resolve the address question in item 1 first |
| `priceRange` | Omitted | Tell me a band (e.g. `€€`) if you want it |

Each was left out because I had no truthful value for it, consistent with the rest
of the site's copy rules.

---

## 6. ℹ️ Verify the agentic-browsing audit passes

The Lighthouse *Agent availability* failure you hit was 8 unnamed `region`
landmarks; all are now named. Re-run Lighthouse after deploy.

If it still flags the tree, the fallback is to swap `aria-labelledby` for literal
`aria-label` on the 7 sections — some parsers don't resolve ID references. The
files: `Hero`, `Services`, `Process`, `Visualization`, `Quality`, `Materials`,
`Contact` (`.astro` components) and the inline contact section in `pages/index.astro`.

---

## 7. ℹ️ Measure Core Web Vitals

Not measured this session — the PageSpeed API rate-limited on both attempts, and
the live site is stale anyway. After deploy:

```bash
python "C:/Users/Simon/.claude/skills/Agentic-SEO-Skill/scripts/pagespeed.py" https://styris.sk --strategy mobile
```

The code already does the right things (LCP image `eager` + `fetchpriority=high`,
third-party tags deferred to idle, `inlineStylesheets: auto`), so I expect this to
pass — but expecting is not measuring.

---

## Summary

| # | Action | Owner | Impact |
|---|---|---|---|
| 0 | Fix the Vercel deploy | You | 🔴 Blocking |
| 1 | Google Business Profile | You | 🔴 Highest |
| 2 | Collect reviews | You | 🔴 High |
| 3 | Real project write-ups + photos | You → me | ⚠️ High |
| 4 | GSC / Bing / FB submission | You | ⚠️ Medium |
| 5 | Review & image schema | Me, after 2–3 | ⚠️ Medium |
| 6 | Re-run Lighthouse agentic audit | You | ℹ️ Low |
| 7 | Measure CWV | Either | ℹ️ Low |

**On-page SEO is now done.** Items 1 and 2 are what decide the ranking, and both
are yours.
