import { e as escape_html, d as attr, s as store_get, u as unsubscribe_stores } from './_@astro-renderers_DhOb6nU_.mjs';
import { b as $format } from './server_C1vOnolk.mjs';

function TBD($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		let { locale = "en", homeHref = "/", pageKey = "about" } = $$props;
		const t = $format;

		$$renderer.push(`<section class="pt-28 md:pt-32 flex items-center justify-center min-h-[70vh] px-4"><div class="text-center space-y-3"><h1 class="text-3xl md:text-4xl font-bold">${escape_html(store_get($$store_subs ??= {}, '$t', t)(`pages.${pageKey}.title`))}</h1> <p class="text-teal-100">${escape_html(store_get($$store_subs ??= {}, '$t', t)("pages.notReady"))}</p> <a${attr('href', homeHref)} class="inline-block mt-2 text-[color:var(--accent)] hover:text-[color:var(--accent-glow-hover)] hover:font-semibold transition-colors">${escape_html(store_get($$store_subs ??= {}, '$t', t)("pages.backHome"))}</a></div></section>`);

		if ($$store_subs) unsubscribe_stores($$store_subs);
	});
}

export { TBD as T };
