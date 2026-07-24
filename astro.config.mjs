// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://styris.sk',
  output: 'server',
  // Matches vercel.json (`trailingSlash: false`) and the canonical tags, so the
  // sitemap can't advertise /kontakt/ while <link rel=canonical> says /kontakt.
  trailingSlash: 'never',
  adapter: vercel(),
  integrations: [
    sitemap({
      // Thank-you page is a post-submit dead end and is noindex'd in <head>;
      // keeping it out of the sitemap avoids sending a contradictory signal.
      filter: (page) => !page.includes('/dakujeme') && !page.includes('/api/'),
      i18n: {
        defaultLocale: 'sk',
        locales: { sk: 'sk-SK' },
      },
      changefreq: 'monthly',
      lastmod: new Date(),
      serialize(item) {
        const path = new URL(item.url).pathname.replace(/\/$/, '') || '/';
        if (path === '/') {
          item.priority = 1.0;
          item.changefreq = 'weekly';
        } else if (path === '/prace' || path === '/kontakt') {
          item.priority = 0.9;
        } else if (path.startsWith('/prace/')) {
          item.priority = 0.8;
        } else {
          // Legal pages: keep them indexable, just not competing for crawl budget.
          item.priority = 0.3;
          item.changefreq = 'yearly';
        }
        return item;
      },
    }),
  ],
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
  image: {
    // Cap processing work; hero photos are large source files.
    responsiveStyles: true,
  },
  prefetch: {
    // Warm internal pages on hover/focus so navigation feels instant, without
    // the bandwidth cost of prefetching everything on load.
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
});
