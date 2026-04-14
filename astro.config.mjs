// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://royalwood-na.github.io',
  base: '/website',
  integrations: [mdx(), sitemap()],
});
