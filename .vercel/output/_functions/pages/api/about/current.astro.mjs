export { r as renderers } from '../../../chunks/_@astro-renderers_DhOb6nU_.mjs';

const currentFocusByLanguage = {
  en: {
    title: "Current focus",
    summary: "I am actively building projects to deepen my understanding of modern frontend and full-stack development.",
    items: [
      "React and TypeScript application architecture",
      "Reusable component systems for dashboards and workflows",
      "API-driven interfaces with clear loading, error, and success states",
      "Full-stack practice with Node.js, Express, PostgreSQL, and REST APIs"
    ],
    updatedAt: "2026-04-17"
  },
  gr: {
    title: "Τρέχουσα κατεύθυνση",
    summary: "Δουλεύω ενεργά πάνω σε projects για να εξελίσσω τις γνώσεις μου στο σύγχρονο frontend και στο full-stack development.",
    items: [
      "Αρχιτεκτονική εφαρμογών με React και TypeScript",
      "Reusable component systems για dashboards και workflows",
      "API-driven interfaces με καθαρά loading, error και success states",
      "Full-stack εξάσκηση με Node.js, Express, PostgreSQL και REST APIs"
    ],
    updatedAt: "2026-04-17"
  }
};

const GET = async ({ request, currentLocale }) => {
  const url = new URL(request.url);
  const requested = url.searchParams.get("lang")?.toLowerCase();
  const lang = requested === "en" || requested === "gr" ? requested : currentLocale || "en";
  const payload = {
    lang,
    ...currentFocusByLanguage[lang]
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
