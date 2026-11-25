import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://fallcar.com.br',
  output: 'static',
  build: { inlineStylesheets: 'always' },
  compressHTML: true
});
