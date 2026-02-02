import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  base: '/',
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {},
    },
  },
  build: {
    format: 'directory',
  },
  vite: {
    build: {
      cssMinify: true,
    },
  },
});
