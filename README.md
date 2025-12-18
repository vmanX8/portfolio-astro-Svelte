# Portfolio Website (Astro + Svelte + Tailwind)

Developer-focused README for the repository. This file summarizes architecture, developer guidance, runtime behavior and a concise list of UI effects (with file locations) used across the project.

---

## Quick Overview

- Framework: **Astro** (static-first, islands architecture)
- UI: **Svelte** components (interactive islands)
- Styling: **Tailwind CSS** + CSS variables for theming
- Language support: **EN / GR** (Astro routes + `svelte-i18n`)
- Language-neutral static assets live under: `public/` (e.g. `public/assets/projects/`)

---

## Project layout (high level)

src/
- components/
  - sections/ `HeroSect`, `AboutSect`, `ProjectsSect`, `ContactSect`
  - ui/ reusable components: `InView.svelte`, `SvgInline.svelte`, `ProjectIcon.svelte`, `modalFx.ts`
- layouts/ `BaseLayout.astro` (SEO, head tags, view-transitions)
- lib/
  - i18n/ `i18n.ts`, `messages.ts`, `server.ts`
  - content/ `about.ts`, `projects.ts` (data source; `projects.ts` uses a shared `baseProjects` + localized text map)
- pages/ Astro pages (`/, /about, /projects, /contact`) and API endpoints (like `/api/section2`)

public/
- assets/ `projects/*.svg` (shared project icons), favicons, manifest

---

## Key Components & Developer Notes

### `SvgInline.svelte` (src/components/ui/SvgInline.svelte)
- Purpose: client-side fetch + inline of SVG assets so they can be themed via CSS `color`.
- Behavior:
  - Fetches the SVG on `onMount` (client-only) with `{ cache: "force-cache" }`.
  - Normalizes `fill` / `stroke` to `currentColor` and removes `width`/`height` where possible.
  - Adds `viewBox` based on width/height when missing so SVGs scale responsively.
  - Normalizes accidental localized paths like `/assets/projects/en/foo.svg` ™?? `/assets/projects/foo.svg`.
  - On failure, it logs the error and shows a small fallback SVG.
- Developer tips: Prefer adding icons to `public/assets/projects/<id>.svg` and reference that exact path from `src/lib/content/projects.ts` to avoid client-side fallbacks.

### `ProjectIcon.svelte` (src/components/ui/ProjectIcon.svelte)
- Purpose: wraps `SvgInline` and contains the icon hover effects (orbiting dot, hover shadow).
- Encapsulates CSS and respects `prefers-reduced-motion`.

### `modalFx.ts` (src/components/ui/modalFx.ts)
- Reusable transition functions used by modal components:
  - `backdrop` ™?? backdrop fade
  - `modal` ™?? subtle scale/translate/fade
  - `clipReveal` ™?? mask-wipe reveal used for the Projects modal (clip-path-based, reduced-motion-safe)

### `projects.ts` (src/lib/content/projects.ts)
- Data model: `baseProjects` (shared fields: `id`, `url`, `tech`, `icon`) + localized text map for `title`, `summary`, `details`.
- To add a project:
  1. Add an entry to `baseProjects` (include `id` and `icon` ™?? e.g. `/assets/projects/portfolio.svg`).
  2. Add localized strings (English + Greek) to the localized map in the same file.
  3. Add the SVG icon to `public/assets/projects/<id>.svg` and ensure it has a `viewBox` (or width/height so `SvgInline` can generate one).

---

## UI Effects & Where They Live

- Scroll-in entrance (IntersectionObserver) ™?? `src/components/ui/InView.svelte`
- Modal transitions: backdrop fade, modal scale/fade ™?? `src/components/ui/modalFx.ts`
- Modal mask-wipe / clip-reveal ™?? `clipReveal` in `modalFx.ts` (applied in `ProjectsSect.svelte`)
- CTA underline partial ™?? full on hover ™?? `ProjectsSect.svelte` (.cta-underline)
- Modal CTA morph: squarish ™?? circular on hover (`.modal-cta`) ™?? `ProjectsSect.svelte`
- Project card hover: subtle lift/translate + increased shadow ™?? `ProjectsSect.svelte` (card button styles)
- Icon hover: slow orbiting dot & soft shadow ™?? `src/components/ui/ProjectIcon.svelte`
- SVG theming & responsive viewBox correction ™?? `src/components/ui/SvgInline.svelte`
- Astro View Transitions for page navigation ™?? `src/layouts/BaseLayout.astro`
- Nav bar active states (deep green glow for active link + language toggle) ™?? `src/components/NavBar.svelte` + tokens in `src/styles/global.css`

---

## Run & Develop
- Install dependencies: `npm install`
- Start dev server: `npm run dev`
- Build: `npm run build`
- Tested with **npm 11.2.0** and **Node v23.7.0**

---

## Deployment
Build and host as static files (Netlify, Vercel, GitHub Pages etc):

```bash
npm run build

```

---
