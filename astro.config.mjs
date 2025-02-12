import { defineConfig } from 'astro/config'

import robotsTxt from "astro-robots-txt"

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [robotsTxt()],
  site: 'https://porfolio.dev/',

  vite: {
    plugins: [tailwindcss()]
  }
})