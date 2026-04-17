# Portfolio Website (Astro + Svelte + Tailwind)

This repo contains a bilingual portfolio site built with Astro, Svelte, and Tailwind CSS. It favors a clean content structure, SEO-friendly pages, API-backed content panels, and small, focused UI components.

---

## Quick Overview

- Framework: Astro (static-first with islands)
- UI: Svelte components for interactive parts
- Styling: Tailwind CSS + CSS variables
- Languages: English and Greek via Astro i18n + `svelte-i18n`
- Content: shared localized content modules + Astro API endpoints
- Static assets: `public/` (e.g. `public/assets/projects/`)

---

## Project Layout

src/
- components/
  - sections/ `HeroSect`, `AboutSect`, `ProjectsSect`, `ContactSect`
  - pages/ full page Svelte views (`AboutPage.svelte`, `ProjectsPage.svelte`)
  - ui/ reusable pieces (`InView.svelte`, `SvgInline.svelte`, `ProjectIcon.svelte`, `modalFx.ts`)
- layouts/ `BaseLayout.astro` (SEO, head tags, view transitions)
- lib/
  - i18n/ `i18n.ts`, `messages.ts`, `server.ts`
  - content/
    - about/ `index.ts`, `currentFocus.ts`, `toolkit.ts`
    - projects/ `index.ts`, `data.ts`, `locales.ts`, `types.ts`
- pages/ Astro pages (`/`, `/about`, `/projects`, `/contact`) + API endpoints (`/api/about/*`)

public/
- assets/ SVG icons, favicons, manifest

---

## Key Components

### `SvgInline.svelte`
- Fetches SVGs client-side and inlines them so `currentColor` styling works.
- Normalizes SVG markup (fill/stroke, viewBox) for consistent scaling.
- Falls back to a minimal SVG if an asset fails to load.

### `ProjectIcon.svelte`
- Wraps `SvgInline` with hover styling and a subtle orbit animation.
- Respects reduced-motion settings.

### `ProjectsSect.svelte`
- Shows the latest project previews on the index page.
- Links each preview to the exact matching carousel item on the projects page.
- Uses latest-first ordering based on the project list order.

### `ProjectsPage.svelte`
- Renders the projects carousel with three visible project cards.
- Keeps the middle card active with glow styling.
- Allows navigation by controls or by clicking the inactive left/right cards.
- Only the active middle card opens the project modal.
- Supports direct links with `?project=<id>`.

### `AboutPage.svelte`
- Renders the full bilingual About page.
- Uses localized copy with English eyebrow labels across both languages.
- Loads current focus and toolkit data from Astro API endpoints with local fallbacks.
- Includes the profile card, section dividers, and responsive editorial layout.

### `modalFx.ts`
- Shared transitions for overlays and modals (`backdrop`, `clipReveal`).
- Includes a reduced-motion fallback.

### `content/projects`
- Public project content API used by the project components.
- Builds localized project arrays from `projects/data.ts` and `projects/locales.ts`.
- Exposes helpers for latest-first and featured project lists.
- To add a project:
  1. Add a base entry in `src/lib/content/projects/data.ts` (id, icon, links, tech)
  2. Add localized strings in `src/lib/content/projects/locales.ts` (EN/GR)
  3. Drop the icon into `public/assets/projects/<id>.svg`

### About content APIs
- `/api/about/current?lang=en|gr` serves the current focus panel.
- `/api/about/toolkit?lang=en|gr` serves the toolkit stack.
- Source content lives in `src/lib/content/about/currentFocus.ts` and `src/lib/content/about/toolkit.ts`.
- The About page keeps local fallback content so the UI still renders if an API request fails.

---

## UI Effects

- Scroll-in reveal (IntersectionObserver): `src/components/ui/InView.svelte`
- Modal transitions: `src/components/ui/modalFx.ts`
- Project carousel glow, side-card navigation, and modal behavior: `src/components/pages/ProjectsPage.svelte`
- Project preview hover and CTA underline: `src/components/sections/ProjectsSect.svelte`
- Icon hover orbit: `src/components/ui/ProjectIcon.svelte`
- SVG theming and responsive sizing: `src/components/ui/SvgInline.svelte`
- Global grid/noise background and desktop mouse spotlight: `src/styles/global.css` + `src/layouts/BaseLayout.astro`
- View transitions and shared page shell: `src/layouts/BaseLayout.astro`
- Nav active state + language toggle styles: `src/components/NavBar.svelte`
