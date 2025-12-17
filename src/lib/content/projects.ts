/**
 * Projects Content (Section 3 Data)
 *
 * @file Provides project data in a maintainable shape: a shared `baseProjects`
 * (non-translatable fields like `demoUrl`, `repoUrl`, `tech`, `id`) plus a
 * `localized` map containing translatable text per locale (`title`, `summary`,
 * `details`). The final `projectsByLanguage` export composes these together.
 *
 * Usage:
 * - Import `projectsByLanguage` and select by locale (e.g. `projectsByLanguage['en']`).
 *
 * - To add a project safely:
 *   1) Add a new entry to `baseProjects` with a stable `id`, `tech[]`, and any
 *      shared URLs. Keep `id` lowercase and hyphenated (e.g. `my-project`).
 *   2) Add localized texts under `localized.<locale>.<id>` with `title`,
 *      `summary`, and `details`.
 *   2b) Add a shared `icon` path to `baseProjects` when you have an SVG to show.
 *      Place SVGs under `public/assets/projects/` using the project `id` (e.g.
 *      `/assets/projects/<id>.svg`).
 *   3) The `projectsByLanguage` composer will merge them; run the dev server or
 *      `pnpm/npm run dev` and the TypeScript compiler will catch shape errors.
 * - Prefer keeping non-translatable data in `baseProjects` to avoid duplication.
 * - If you need to add or remove locales, update `localized` and ensure mappings
 *   for the new locale include every project's `id`.
 *
 * Design notes:
 * - Single source of truth for shared fields reduces accidental data drift.
 * - Localized texts are intentionally kept separate for easy translation work.
 */

import type { Locale } from "../i18n/messages";

// === TYPE DEFINITION ===

export type Project = {
  id: string;
  title: string;
  summary: string;
  details: string;
  tech: string[];
  /** URL path to an SVG icon (served from `public/`) - localized per locale */
  icon?: string;
  demoUrl?: string;
  repoUrl?: string;
};

// Shared (non-localized) project fields
type ProjectBase = {
  id: string;
  tech: string[];
  /** Shared SVG path for the project icon (served from `public/assets/projects/<id>.svg`) */
  icon?: string;
  demoUrl?: string;
  repoUrl?: string;
};

// Localized text for a project
type LocalizedText = {
  title: string;
  summary: string;
  details: string;
};

// === SHARED BASE PROJECTS ===
const baseProjects: ProjectBase[] = [
  {
    id: "portfolio",
    tech: ["Astro", "Svelte", "Tailwind", "TypeScript"],
    icon: "/assets/projects/portfolio.svg",
    repoUrl: "https://github.com/vmanX8/Portfolio-Astro-Svelte-Tailwind",
  },
  {
    id: "snakes-ladders",
    tech: ["React", "TypeScript"],
    icon: "/assets/projects/snakes-ladders.svg",
    demoUrl: "https://snakes-n-ladders-rose.vercel.app/",
    repoUrl: "https://github.com/vmanX8/snakesNladders",
  },
  {
    id: "weather-app",
    tech: ["React", "TypeScript", "OpenWeather API"],
    icon: "/assets/projects/weather-app.svg",
    demoUrl: "https://weather-app-six-nu-73.vercel.app/",
    repoUrl: "https://github.com/vmanX8/weather-app",
  },
];

// === LOCALIZED TEXTS ===
const localized: Record<Locale, Record<string, LocalizedText>> = {
  en: {
    "portfolio": {
      title: "Portfolio Website",
      summary: "My personal portfolio built with Astro and Svelte.",
      details:
        "This project focuses on performance, clean structure and responsive UI. Astro is used for page rendering and Svelte for interactive components.",
    },
    "snakes-ladders": {
      title: "Snakes & Ladders Game",
      summary: "Classic board game rebuilt in React with a playful modern UI.",
      details:
        "A modern take on the classic Snakes & Ladders game, built with React and TypeScript. Focused on clean component structure, smooth interactions, and a fun UI.",
    },
    "weather-app": {
      title: "Weather App",
      summary: "Live weather dashboard built with React and the OpenWeather API.",
      details:
        "A responsive weather dashboard built with React and TypeScript, using the OpenWeather API to fetch live conditions. Includes search, basic error handling, and a clean data-driven UI.",
    },
  },

  gr: {
    "portfolio": {
      title: "Portfolio Website",
      summary: "Το προσωπικό μου portfolio με Astro και Svelte.",
      details:
        "Το project δίνει έμφαση στην απόδοση, στη σωστή δομή και στο responsive UI. Το Astro χρησιμοποιείται για τις σελίδες και το Svelte για διαδραστικά στοιχεία.",
    },
    "snakes-ladders": {
      title: "Snakes & Ladders Game",
      summary: "Το κλασικό επιτραπέζιο παιχνίδι σε React εφαρμογή με μοντέρνο και playful UI.",
      details:
        "Μια σύγχρονη εκδοχή του Snakes & Ladders, φτιαγμένη με React και TypeScript. Έμφαση σε καθαρή δομή components, ομαλές αλληλεπιδράσεις και ευχάριστο UI.",
    },
    "weather-app": {
      title: "Weather App",
      summary: "Live weather dashboard σε React με το OpenWeather API.",
      details:
        "Responsive weather dashboard με React και TypeScript που χρησιμοποιεί το OpenWeather API για live δεδομένα. Περιλαμβάνει αναζήτηση, βασικό χειρισμό σφαλμάτων και καθαρό data-driven UI.",
    },
  },
};

// === COMPOSE FINAL PROJECTS ===
export const projectsByLanguage: Record<Locale, Project[]> = {
  en: baseProjects.map((b) => ({
    ...b,
    ...(localized.en[b.id] ?? {
      title: b.id,
      summary: "",
      details: "",
    }),
  })),
  gr: baseProjects.map((b) => ({
    ...b,
    ...(localized.gr[b.id] ?? localized.en[b.id] ?? { title: b.id, summary: "", details: "" }),
  })),
};
