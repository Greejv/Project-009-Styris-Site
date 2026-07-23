// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://styris.sk',
  output: 'server',
  adapter: vercel(),
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
