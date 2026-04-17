import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate } from '../../chunks/astro/server_Cnzn1h4g.mjs';
import 'piccolore';
import { t as tSeo, g as getRelativeLocaleUrl, $ as $$BaseLayout, a as $$NavBarShell } from '../../chunks/server_DSjHHNb4.mjs';
import { T as TBD } from '../../chunks/TBD_BCFGS_-D.mjs';
export { r as renderers } from '../../chunks/_@astro-renderers_DhOb6nU_.mjs';

const $$Astro = createAstro();
const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  const lang = Astro2.currentLocale || "gr";
  const seo = tSeo(lang);
  const homeHref = getRelativeLocaleUrl(lang);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": seo.contactTitle, "description": seo.contactDescription, "lang": lang }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "NavBarShell", $$NavBarShell, {})} ${renderComponent($$result2, "TBD", TBD, { "client:load": true, "pageKey": "contact", "locale": lang, "homeHref": homeHref, "client:component-hydration": "load", "client:component-path": "C:/Downloads/Tutorial/mine/Portfolio-Astro-webeleven/Portfolio-Astro-Svelte-Tailwind/src/components/TBD.svelte", "client:component-export": "default" })} ` })}`;
}, "C:/Downloads/Tutorial/mine/Portfolio-Astro-webeleven/Portfolio-Astro-Svelte-Tailwind/src/pages/gr/contact.astro", void 0);

const $$file = "C:/Downloads/Tutorial/mine/Portfolio-Astro-webeleven/Portfolio-Astro-Svelte-Tailwind/src/pages/gr/contact.astro";
const $$url = "/gr/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Contact,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
