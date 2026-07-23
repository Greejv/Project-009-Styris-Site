// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://styris.duetweb-dev.dev',
  integrations: [sitemap()],
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
  image: {
    // Cap processing work; hero photos are large source files.
    responsiveStyles: true,
  },
  prefetch: {
    prefetchAll: false,
  },
});
