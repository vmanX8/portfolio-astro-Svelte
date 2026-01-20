// @ts-check
import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte"
import tailwindcss from "@tailwindcss/vite";
import node from "@astrojs/node";

import vercel from "@astrojs/vercel";

export default defineConfig({
  integrations: [svelte()],
  output: "server",
  adapter: vercel(),
  devToolbar: {
    enabled: false,
  },

  i18n: {
    locales: ["en", "gr"],
    defaultLocale: "en",
  },

  vite: {
    plugins: [tailwindcss()],
  },
});