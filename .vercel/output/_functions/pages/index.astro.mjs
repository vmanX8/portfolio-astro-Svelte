import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate } from '../chunks/astro/server_Cnzn1h4g.mjs';
import 'piccolore';
import { t as tSeo, $ as $$BaseLayout, a as $$NavBarShell } from '../chunks/server_DSjHHNb4.mjs';
import { H as HeroSect, A as AboutSect, P as ProjectsSect, C as ContactSect } from '../chunks/ContactSect_CwJlSBtd.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_DhOb6nU_.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const lang = Astro2.currentLocale || "en";
  const seo = tSeo(lang);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": seo.homeTitle, "description": seo.homeDescription, "lang": lang }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "NavBarShell", $$NavBarShell, {})} ${renderComponent($$result2, "HeroSect", HeroSect, { "client:load": true, "locale": lang, "client:component-hydration": "load", "client:component-path": "C:/Downloads/Tutorial/mine/Portfolio-Astro-webeleven/Portfolio-Astro-Svelte-Tailwind/src/components/sections/HeroSect.svelte", "client:component-export": "default" })} ${renderComponent($$result2, "AboutSect", AboutSect, { "client:load": true, "locale": lang, "client:component-hydration": "load", "client:component-path": "C:/Downloads/Tutorial/mine/Portfolio-Astro-webeleven/Portfolio-Astro-Svelte-Tailwind/src/components/sections/AboutSect.svelte", "client:component-export": "default" })} ${renderComponent($$result2, "ProjectsSect", ProjectsSect, { "client:load": true, "locale": lang, "client:component-hydration": "load", "client:component-path": "C:/Downloads/Tutorial/mine/Portfolio-Astro-webeleven/Portfolio-Astro-Svelte-Tailwind/src/components/sections/ProjectsSect.svelte", "client:component-export": "default" })} ${renderComponent($$result2, "ContactSect", ContactSect, { "client:load": true, "locale": lang, "client:component-hydration": "load", "client:component-path": "C:/Downloads/Tutorial/mine/Portfolio-Astro-webeleven/Portfolio-Astro-Svelte-Tailwind/src/components/sections/ContactSect.svelte", "client:component-export": "default" })} ` })}`;
}, "C:/Downloads/Tutorial/mine/Portfolio-Astro-webeleven/Portfolio-Astro-Svelte-Tailwind/src/pages/index.astro", void 0);

const $$file = "C:/Downloads/Tutorial/mine/Portfolio-Astro-webeleven/Portfolio-Astro-Svelte-Tailwind/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
