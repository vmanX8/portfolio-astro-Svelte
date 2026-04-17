export { r as renderers } from '../../../chunks/_@astro-renderers_DhOb6nU_.mjs';

const items = [
  "React",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "SCSS",
  "Bootstrap",
  "Vite",
  "React Router",
  "GSAP",
  "jQuery",
  "Node.js",
  "Express",
  "PostgreSQL",
  "REST APIs",
  "JWT",
  "Git",
  "Figma",
  "Canva"
];
const toolkitByLanguage = {
  en: {
    title: "Stack",
    items,
    updatedAt: "2026-04-17"
  },
  gr: {
    title: "Τεχνολογίες",
    items,
    updatedAt: "2026-04-17"
  }
};

const GET = async ({ request, currentLocale }) => {
  const url = new URL(request.url);
  const requested = url.searchParams.get("lang")?.toLowerCase();
  const lang = requested === "en" || requested === "gr" ? requested : currentLocale || "en";
  const payload = {
    lang,
    ...toolkitByLanguage[lang]
  };
  return new Response(JSON.stringify(payload), {
    status: 200,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store"
    }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
