# Portfolio Website (Astro + Svelte + Tailwind)

This repo contains a bilingual portfolio site built with Astro, Svelte, and Tailwind CSS. It favors a clean content structure, SEO-friendly pages, and small, focused UI components.

---

## Quick Overview

- Framework: Astro (static?first with islands)
- UI: Svelte components for interactive parts
- Styling: Tailwind CSS + CSS variables
- Languages: English and Greek via Astro i18n + `svelte-i18n`
- Static assets: `public/` (e.g. `public/assets/projects/`)

---

## Project Layout

src/
- components/
  - sections/ `HeroSect`, `AboutSect`, `ProjectsSect`, `ContactSect`
  - ui/ reusable pieces (`InView.svelte`, `SvgInline.svelte`, `ProjectIcon.svelte`, `modalFx.ts`)
- layouts/ `BaseLayout.astro` (SEO, head tags, view transitions)
- lib/
  - i18n/ `i18n.ts`, `messages.ts`, `server.ts`
  - content/ `about.ts`, `projects.ts`
- pages/ Astro pages (`/`, `/about`, `/projects`, `/contact`) + API endpoints

public/
- assets/ SVG icons, favicons, manifest

---

## Key Components

### `SvgInline.svelte`
- Fetches SVGs client?side and inlines them so `currentColor` styling works.
- Normalizes SVG markup (fill/stroke, viewBox) for consistent scaling.
- Falls back to a minimal SVG if an asset fails to load.

### `ProjectIcon.svelte`
- Wraps `SvgInline` with hover styling and a subtle orbit animation.
- Respects reduced?motion settings.

### `modalFx.ts`
- Shared transitions for overlays and modals (`backdrop`, `clipReveal`).
- Includes a reduced?motion fallback.

### `projects.ts`
- Defines a shared base project list and localized text per language.
- To add a project:
  1. Add a base entry (id, icon, links, tech)
  2. Add localized strings (EN/GR)
  3. Drop the icon into `public/assets/projects/<id>.svg`

---

## UI Effects

- Scroll?in reveal (IntersectionObserver): `src/components/ui/InView.svelte`
- Modal transitions: `src/components/ui/modalFx.ts`
- Project card hover and CTA underline: `src/components/sections/ProjectsSect.svelte`
- Icon hover orbit: `src/components/ui/ProjectIcon.svelte`
- SVG theming and responsive sizing: `src/components/ui/SvgInline.svelte`
- View transitions: `src/layouts/BaseLayout.astro`
- Nav active state + language toggle styles: `src/components/NavBar.svelte`