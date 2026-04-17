import { a as aboutContent } from '../../../chunks/about_Dt06lbd7.mjs';
export { r as renderers } from '../../../chunks/_@astro-renderers_DhOb6nU_.mjs';

const GET = async ({ request, currentLocale }) => {
  const url = new URL(request.url);
  const requested = url.searchParams.get("lang")?.toLowerCase();
  const lang = requested === "en" || requested === "gr" ? requested : currentLocale || "en";
  const payload = {
    lang,
    title: aboutContent[lang].title,
    highlight: aboutContent[lang].highlight,
    paragraphs: aboutContent[lang].paragraphs
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
