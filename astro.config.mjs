import { defineConfig } from 'astro/config'
import robotsTxt from "astro-robots-txt"
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel'

// https://astro.build/config
export default defineConfig({
  integrations: [robotsTxt()],
  site: 'https://porfolio-dev-drab.vercel.app/',
  output: "server",
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()]
  }
})