// @ts-check
import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte"
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  viewTransitions: true,
  integrations: [svelte()],
  i18n: { locales: ["en", "gr"], defaultLocale: "en" },
  vite: { plugins: [tailwindcss()] },
});