import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate } from '../chunks/astro/server_Cnzn1h4g.mjs';
import 'piccolore';
import { t as tSeo, $ as $$BaseLayout, a as $$NavBarShell } from '../chunks/server_DSjHHNb4.mjs';
import { A as AboutPage } from '../chunks/AboutPage_C8DrGZTs.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_DhOb6nU_.mjs';

const $$Astro = createAstro();
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  const lang = Astro2.currentLocale || "en";
  const seo = tSeo(lang);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": seo.aboutTitle, "description": seo.aboutDescription, "lang": lang }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "NavBarShell", $$NavBarShell, {})} ${renderComponent($$result2, "AboutPage", AboutPage, { "client:load": true, "locale": lang, "client:component-hydration": "load", "client:component-path": "C:/Downloads/Tutorial/mine/Portfolio-Astro-webeleven/Portfolio-Astro-Svelte-Tailwind/src/components/pages/AboutPage.svelte", "client:component-export": "default" })} ` })}`;
}, "C:/Downloads/Tutorial/mine/Portfolio-Astro-webeleven/Portfolio-Astro-Svelte-Tailwind/src/pages/about.astro", void 0);

const $$file = "C:/Downloads/Tutorial/mine/Portfolio-Astro-webeleven/Portfolio-Astro-Svelte-Tailwind/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$About,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
