# Portfolio-Astro-Svelte-Tailwind
Personal portfolio website built as part of a technical assignment, using Astro as the main framework, Svelte for interactive components, Tailwind CSS for styling, and TypeScript with inline documentation.

## Features
- Responsive navigation bar with desktop links and mobile drawer.
- Locale-aware navigation (EN/GR) with persisted preference.
- Footer and placeholder pages use localized links for consistent navigation.

## Pages (preview)
- Home: landing hero with 4 upcoming sections (intro, about, projects spotlight, contact CTA).
- About: personal summary and background (TBD content).
- Projects: work portfolio listing (TBD content).
- Contact: ways to get in touch (TBD content).
- TBD - To Be Determined placeholder component renders on pages still under construction.

## Language persistence (EN/GR)
- The current language is stored client-side in `src/lib/languageStore.ts`. It loads the user's last choice from `localStorage`, falls back to the URL prefix (`/gr`), then defaults to English.
- Components build locale-aware links with `toLocalizedPath("/about")`, which prepends `/gr` when Greek is active. Use the Svelte store shorthand (`$language`) to recompute links when the user switches language.
- The NavBar and Footer use these helpers so navigation keeps the selected language across pages.