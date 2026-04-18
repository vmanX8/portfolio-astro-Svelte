// @ts-check
import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte"
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel";

export default defineConfig({
  integrations: [svelte(), tailwind()],
  output: "hybrid",
  adapter: vercel(),
  devToolbar: {
    enabled: false,
  },

  i18n: {
    locales: ["en", "gr"],
    defaultLocale: "en",
  },
});