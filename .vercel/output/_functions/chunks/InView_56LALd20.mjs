import { b as attr_class } from './_@astro-renderers_DhOb6nU_.mjs';

Promise.resolve();

function InView($$renderer, $$props) {
	let { once = true, threshold = 0.5, rootMargin = "0px", children } = $$props;

	$$renderer.push(`<div${attr_class(`transition duration-700 ease-out will-change-transform
    ${"opacity-0 translate-y-6"}`)}>`);

	children?.($$renderer);
	$$renderer.push(`<!----></div>`);
}

export { InView as I };
