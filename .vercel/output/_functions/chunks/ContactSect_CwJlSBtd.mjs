import { e as escape_html, d as attr, b as attr_class, s as store_get, u as unsubscribe_stores, a as ensure_array_like } from './_@astro-renderers_DhOb6nU_.mjs';
import { b as $format, c as $locale } from './server_DSjHHNb4.mjs';
import { I as InView } from './InView_56LALd20.mjs';
import 'clsx';
import '@formatjs/intl-segmenter/polyfill.js';
/* empty css                         */
import { a as aboutContent } from './about_Dt06lbd7.mjs';
import { a as getFeaturedProjectsByLanguage, P as ProjectIcon } from './ProjectIcon_HFKTwUVd.mjs';

function Typewriter_1($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let {
			text = ""} = $$props;

		{
			$$renderer.push('<!--[!-->');
			$$renderer.push(`<span class="typewriter-fallback svelte-oy1d8s">${escape_html(text)}</span>`);
		}

		$$renderer.push(`<!--]-->`);
	});
}

function RotatingRing($$renderer, $$props) {
	let {
		sizeClass = "h-56 w-56 sm:h-64 sm:w-64",
		initials = "VM",
		subtitle = "Frontend",
		ariaLabel = "Avatar",
		showOrbit = true
	} = $$props;

	$$renderer.push(`<div class="relative grid place-items-center svelte-1fnfou9" aria-hidden="true"${attr('aria-label', ariaLabel)}><div class="absolute -inset-8 rounded-full blur-3xl bg-[color:var(--accent)]/15 rot-glow svelte-1fnfou9"></div> <div${attr_class(`relative ${sizeClass} rounded-full p-[2px] bg-gradient-to-tr from-[color:var(--accent)]/60 via-[color:var(--accent-weak)] to-transparent rot-ring`, 'svelte-1fnfou9')}><div class="relative h-full w-full rounded-full bg-[color:var(--surface)] border border-white/10 overflow-hidden svelte-1fnfou9"><div${attr_class(`absolute inset-0 opacity-30 rot-pattern bg-[radial-gradient(circle_at_20%_20%,color-mix(in_oklab,var(--accent),transparent_60%),transparent_45%),radial-gradient(circle_at_80%_70%,color-mix(in_oklab,var(--accent),transparent_70%),transparent_55%)]`, 'svelte-1fnfou9')}></div> <div class="absolute inset-3 rounded-full border border-white/10 svelte-1fnfou9"></div> <div class="absolute inset-0 grid place-items-center svelte-1fnfou9"><div class="flex flex-col items-center justify-center h-28 w-28 sm:h-32 sm:w-32 rounded-full bg-[color:var(--background)]/60 border border-white/10 shadow-xl text-center svelte-1fnfou9"><span aria-hidden="true" class="text-3xl sm:text-4xl font-bold tracking-tight text-teal-100 leading-none svelte-1fnfou9">${escape_html(initials)}</span> `);

	if (subtitle) {
		$$renderer.push('<!--[-->');
		$$renderer.push(`<span aria-hidden="true" class="text-[10px] uppercase tracking-[0.35em] text-teal-200 mt-1 block svelte-1fnfou9">${escape_html(subtitle)}</span>`);
	} else {
		$$renderer.push('<!--[!-->');
	}

	$$renderer.push(`<!--]--></div></div> `);

	if (showOrbit) {
		$$renderer.push('<!--[-->');
		$$renderer.push(`<div class="inner-highlight svelte-1fnfou9" aria-hidden="true"></div>`);
	} else {
		$$renderer.push('<!--[!-->');
	}

	$$renderer.push(`<!--]--></div></div></div>`);
}

function HeroSect($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		let { locale = "en" } = $$props;
		const t = $format;

		$$renderer.push(`<section id="home" class="pt-28 md:pt-32" aria-labelledby="hero-title"><div class="section-shell">`);

		InView($$renderer, {
			children: ($$renderer) => {
				$$renderer.push(`<div class="grid items-center gap-10 md:grid-cols-2"><div class="space-y-6 lg:min-h-[400px]"><p class="text-sm uppercase tracking-[0.35em] text-[color:var(--accent)]">${escape_html(store_get($$store_subs ??= {}, '$t', t)("hero.badge"))}</p> <h1 id="hero-title" class="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">`);

				Typewriter_1($$renderer, {
					text: store_get($$store_subs ??= {}, '$t', t)("hero.titleHi")});

				$$renderer.push(`<!----> <br/> `);

				{
					$$renderer.push('<!--[!-->');
				}

				$$renderer.push(`<!--]--> `);

				{
					$$renderer.push('<!--[!-->');
				}

				$$renderer.push(`<!--]--></h1> <p class="max-w-xl text-teal-100">`);

				{
					$$renderer.push('<!--[!-->');
				}

				$$renderer.push(`<!--]--></p> `);

				{
					$$renderer.push('<!--[!-->');
				}

				$$renderer.push(`<!--]--></div> <div class="flex justify-center md:justify-end">`);

				RotatingRing($$renderer, {
					initials: 'VM',
					subtitle: store_get($$store_subs ??= {}, '$t', t)("Frontend Engineer"),
					sizeClass: 'h-56 w-56 sm:h-64 sm:w-64'
				});

				$$renderer.push(`<!----></div></div>`);
			}});

		$$renderer.push(`<!----></div></section>`);

		if ($$store_subs) unsubscribe_stores($$store_subs);
	});
}

function AboutSect($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { locale = "en" } = $$props;
		let data = aboutContent.en;

		$$renderer.push(`<section id="about" class="section-spacing" aria-labelledby="about-title"><div class="section-shell">`);

		InView($$renderer, {
			children: ($$renderer) => {
				$$renderer.push(`<div class="section-panel"><h2 id="about-title" class="text-2xl md:text-3xl font-bold mb-6">${escape_html(data.title)}</h2> <p id="about-highlight" class="text-sm text-teal-100 font-medium italic mb-6">${escape_html(data.highlight)}</p> <div class="space-y-4 leading-relaxed"><!--[-->`);

				const each_array = ensure_array_like(data.paragraphs);

				for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
					let p = each_array[$$index];

					$$renderer.push(`<p>${escape_html(p)}</p>`);
				}

				$$renderer.push(`<!--]--></div> `);

				{
					$$renderer.push('<!--[-->');
					$$renderer.push(`<p class="mt-6 text-sm text-teal-200">Loading...</p>`);
				}

				$$renderer.push(`<!--]--></div>`);
			}});

		$$renderer.push(`<!----></div></section>`);
	});
}

function ProjectsSect($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		let { locale = "en" } = $$props;
		const t = $format;
		const lang = store_get($$store_subs ??= {}, '$localeStore', $locale) === "gr" ? "gr" : "en";
		const featuredProjects = getFeaturedProjectsByLanguage(lang);
		const projectsHref = lang === "gr" ? "/gr/projects" : "/projects";

		function getProjectHref(projectId) {
			return `${projectsHref}?project=${encodeURIComponent(projectId)}`;
		}

		$$renderer.push(`<section id="projects" class="section-spacing" aria-labelledby="projects-title"><div class="section-shell">`);

		InView($$renderer, {
			children: ($$renderer) => {
				$$renderer.push(`<header class="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"><div><h2 id="projects-title" class="text-2xl md:text-3xl font-semibold">${escape_html(store_get($$store_subs ??= {}, '$t', t)("projectsSection.title"))}</h2> <p class="text-slate-300 mt-2 max-w-2xl">${escape_html(store_get($$store_subs ??= {}, '$t', t)("projectsSection.homeSubtitle"))}</p></div> <a${attr('href', projectsHref)} class="cta-underline self-start text-sm font-medium text-[color:var(--accent)] focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]/60">${escape_html(store_get($$store_subs ??= {}, '$t', t)("projectsSection.viewAll"))} →</a></header> `);

				if (!featuredProjects.length) {
					$$renderer.push('<!--[-->');
					$$renderer.push(`<p class="text-slate-300">${escape_html(store_get($$store_subs ??= {}, '$t', t)("projectsSection.empty"))}</p>`);
				} else {
					$$renderer.push('<!--[!-->');
					$$renderer.push(`<div class="grid gap-6 grid-cols-6"><!--[-->`);

					const each_array = ensure_array_like(featuredProjects);

					for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
						let p = each_array[$$index_1];

						$$renderer.push(`<a${attr('href', getProjectHref(p.id))} class="group text-left rounded-2xl border border-teal-800 bg-[color:var(--surface)]/40 p-5 h-full col-span-6 md:col-span-2 transition-all duration-200 ease-out backdrop-blur-sm shadow-sm hover:shadow-xl transform-gpu hover:-translate-y-1 hover:border-[color:var(--accent-weak)]/60 hover:bg-[color:var(--surface)]/70 focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]/60"${attr('aria-label', `${p.title} - ${store_get($$store_subs ??= {}, '$t', t)("projectsSection.viewAll")}`)}><div class="flex items-start gap-4">`);

						if (p.icon) {
							$$renderer.push('<!--[-->');

							ProjectIcon($$renderer, {
								src: p.icon,
								alt: `${p.title} icon`,
								wrapperClass: 'w-12 h-12 flex-shrink-0 rounded-lg bg-[color:var(--surface)]/20 flex items-center justify-center text-[color:var(--accent)]',
								svgClass: 'w-8 h-8'
							});
						} else {
							$$renderer.push('<!--[!-->');

							ProjectIcon($$renderer, {
								src: '/assets/projects/default.svg',
								alt: 'default icon',
								wrapperClass: 'w-12 h-12 flex-shrink-0 rounded-lg bg-[color:var(--surface)]/20 flex items-center justify-center text-[color:var(--accent)]',
								svgClass: 'w-8 h-8'
							});
						}

						$$renderer.push(`<!--]--> <div class="flex-1"><h3 class="text-lg font-semibold mb-2 group-hover:text-[color:var(--accent)] transition-transform duration-200 ease-out group-hover:scale-105 inline-block">${escape_html(p.title)}</h3> <p class="text-sm text-slate-300 mb-4 leading-relaxed">${escape_html(p.summary)}</p> <div class="flex flex-wrap gap-2 mb-4"><!--[-->`);

						const each_array_1 = ensure_array_like(p.tech);

						for (let $$index = 0, $$length = each_array_1.length; $$index < $$length; $$index++) {
							let tech = each_array_1[$$index];

							$$renderer.push(`<span class="text-[11px] uppercase tracking-wide px-2 py-1 rounded-full bg-[color:var(--accent)]/10 border border-white/5 text-slate-200 transition-colors">${escape_html(tech)}</span>`);
						}

						$$renderer.push(`<!--]--></div> <div><span class="cta-underline text-sm font-medium text-[color:var(--accent)] inline-flex items-center gap-2 transition-colors duration-200">${escape_html(store_get($$store_subs ??= {}, '$t', t)("projectsSection.viewProjectPage"))} →</span></div></div></div></a>`);
					}

					$$renderer.push(`<!--]--></div>`);
				}

				$$renderer.push(`<!--]-->`);
			}});

		$$renderer.push(`<!----></div></section>`);

		if ($$store_subs) unsubscribe_stores($$store_subs);
	});
}

function ContactSect($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		let { locale = "en" } = $$props;
		const t = $format;

		$$renderer.push(`<section id="contact" class="section-spacing pb-24" aria-labelledby="contact-title"><div class="section-shell">`);

		InView($$renderer, {
			children: ($$renderer) => {
				$$renderer.push(`<div class="section-panel"><h2 id="contact-title" class="text-2xl md:text-3xl font-semibold">${escape_html(store_get($$store_subs ??= {}, '$t', t)("contactSection.title"))}</h2> <p class="text-sm text-teal-100 font-medium italic mb-6 mt-6">${escape_html(store_get($$store_subs ??= {}, '$t', t)("contactSection.subtitle"))} <span class="ml-1 text-sm text-slate-400 not-italic font-normal">(UI only - no backend connected)</span></p> <form class="mt-8 grid gap-4 md:grid-cols-2"><div class="md:col-span-1"><label for="contact-name" class="block text-sm mb-2">${escape_html(store_get($$store_subs ??= {}, '$t', t)("contactSection.nameLabel"))}</label> <input id="contact-name" class="form-control" type="text" name="name" autocomplete="name"${attr('placeholder', store_get($$store_subs ??= {}, '$t', t)("contactSection.namePlaceholder"))}/></div> <div class="md:col-span-1"><label for="contact-email" class="block text-sm mb-2">${escape_html(store_get($$store_subs ??= {}, '$t', t)("contactSection.emailLabel"))}</label> <input id="contact-email" class="form-control" type="email" name="email" autocomplete="email"${attr('placeholder', store_get($$store_subs ??= {}, '$t', t)("contactSection.emailPlaceholder"))}/></div> <div class="md:col-span-2"><label for="contact-subject" class="block text-sm mb-2">${escape_html(store_get($$store_subs ??= {}, '$t', t)("contactSection.subjectLabel"))}</label> <input id="contact-subject" class="form-control" type="text" name="subject" autocomplete="off"${attr('placeholder', store_get($$store_subs ??= {}, '$t', t)("contactSection.subjectPlaceholder"))}/></div> <div class="md:col-span-2"><label for="contact-message" class="block text-sm mb-2">${escape_html(store_get($$store_subs ??= {}, '$t', t)("contactSection.messageLabel"))}</label> <textarea id="contact-message" class="form-control form-textarea" name="message"${attr('placeholder', store_get($$store_subs ??= {}, '$t', t)("contactSection.messagePlaceholder"))}></textarea></div> <div class="md:col-span-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-2"><p class="text-sm text-teal-300"></p> <button type="submit" class="rounded-full border border-[color:var(--accent-weak)] px-6 py-3 text-sm font-medium text-white bg-white/5 hover:bg-[color:var(--accent-weak)] focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]/60 transition">${escape_html(store_get($$store_subs ??= {}, '$t', t)("contactSection.submit"))}</button></div></form></div>`);
			}});

		$$renderer.push(`<!----></div></section>`);

		if ($$store_subs) unsubscribe_stores($$store_subs);
	});
}

export { AboutSect as A, ContactSect as C, HeroSect as H, ProjectsSect as P };
