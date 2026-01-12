// @ts-check
import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte"
import tailwindcss from "@tailwindcss/vite";
import node from "@astrojs/node";

export default defineConfig({
  integrations: [svelte()],
  output: "server",
  adapter: node({ mode: "standalone" }),
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
