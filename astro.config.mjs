// @ts-check
import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte"
import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel";

export default defineConfig({
  integrations: [svelte()],
  output: "static",
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