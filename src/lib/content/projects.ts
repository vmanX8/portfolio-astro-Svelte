/**
 * Projects content split into shared fields and localized text.
 */

import type { Locale } from "../i18n/messages";

export type Project = {
  id: string;
  title: string;
  summary: string;
  details: string;
  tech: string[];
  /** SVG icon path under `public/assets/projects/`. */
  icon?: string;
  demoUrl?: string;
  repoUrl?: string;
};

type ProjectBase = {
  id: string;
  tech: string[];
  /** SVG icon path under `public/assets/projects/`. */
  icon?: string;
  demoUrl?: string;
  repoUrl?: string;
};

type LocalizedText = {
  title: string;
  summary: string;
  details: string;
};

const baseProjects: ProjectBase[] = [
  {
    id: "portfolio",
    tech: ["Astro", "Svelte", "Tailwind", "TypeScript"],
    icon: "/assets/projects/portfolio.svg",
    repoUrl: "https://github.com/vmanX8/portfolio-astro-Svelte",
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

const localized: Record<Locale, Record<string, LocalizedText>> = {
  en: {
    "portfolio": {
      title: "Portfolio Website",
      summary: "Modern, responsive portfolio built with Astro, Svelte, and Tailwind CSS.",
      details:
        "A modular portfolio application built with Astro, Svelte, TypeScript, and Tailwind CSS. It features multilingual support (EN/GR), scroll-based animations, and SEO-friendly structure. The About section consumes data from an Astro API route that simulates backend-driven content, demonstrating API integration in a static front-end context.",
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
      summary: "Σύγχρονο και responsive portfolio με Astro, Svelte και Tailwind CSS.",
      details:
        "Εφαρμογή υλοποιημένη με Astro, Svelte, TypeScript και Tailwind CSS. Υποστηρίζει πολλαπλές γλώσσες (EN/GR), animations και SEO-friendly δομή. Το section About αντλεί δεδομένα από Astro API route που προσομοιώνει το backend, αναδεικνύοντας την ενσωμάτωση API σε στατικό front-end περιβάλλον.",
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
