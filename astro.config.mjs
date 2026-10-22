// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const noindex = ['/privacy-policy', '/website-terms-of-use', '/transportation-terms-and-conditions'];

export default defineConfig({
  site: 'https://www.monctontaxi.com',
  trailingSlash: 'never',
  build: { format: 'directory' },
  integrations: [
    sitemap({ filter: (page) => !noindex.some((p) => page.replace(/\/$/, '').endsWith(p)) }),
  ],
  vite: { plugins: [tailwindcss()] },
});
