import { e as escape_html, a as ensure_array_like, b as attr_class, c as clsx, d as attr } from './_@astro-renderers_DhOb6nU_.mjs';
import './server_C1vOnolk.mjs';
import { a as aboutPageContent } from './index_US5N2CrH.mjs';
import { I as InView } from './InView_56LALd20.mjs';

function AboutPage($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { locale = "en", copy: copyProp, currentFocus, toolkit } = $$props;
		const lang = locale === "gr" ? "gr" : "en";
		const pageCopy = copyProp ?? aboutPageContent[lang];
		const contactHref = lang === "gr" ? "/gr/contact" : "/contact";

		$$renderer.push(`<div class="relative overflow-hidden"><section class="relative pt-28 md:pt-32" aria-labelledby="about-page-title"><div class="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--accent)]/50 to-transparent"></div> <div class="section-shell">`);

		InView($$renderer, {
			children: ($$renderer) => {
				$$renderer.push(`<div class="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]"><div class="space-y-6"><p class="text-sm uppercase tracking-[0.35em] text-[color:var(--accent)]">${escape_html(pageCopy.eyebrow)}</p> <h1 id="about-page-title" class="max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">${escape_html(pageCopy.title)}</h1> <!--[-->`);

				const each_array = ensure_array_like(pageCopy.intro);

				for (let index = 0, $$length = each_array.length; index < $$length; index++) {
					let paragraph = each_array[index];

					$$renderer.push(`<p${attr_class(clsx(index === 0
						? "max-w-2xl text-lg leading-8 text-slate-300"
						: "max-w-2xl leading-7 text-slate-300"))}>${escape_html(paragraph)}</p>`);
				}

				$$renderer.push(`<!--]--></div> <aside class="about-profile-card mb-8"${attr('aria-label', pageCopy.profile.summary)}><div class="about-profile-photo mb-8" aria-hidden="true"><span>VM</span></div> <div class="mb-8 flex items-center gap-4"><div><p class="text-sm uppercase tracking-[0.25em] text-emerald-100/45">${escape_html(pageCopy.profile.role)}</p> <p class="mt-1 text-slate-200">${escape_html(pageCopy.profile.summary)}</p></div></div> <div class="space-y-4 border-t border-[color:var(--accent-weak)]/40 pt-6"><div class="flex items-center justify-between gap-4"><span class="text-sm text-emerald-100/45">${escape_html(pageCopy.profile.focusLabel)}</span> <span class="text-sm text-slate-100">${escape_html(pageCopy.profile.focus)}</span></div> <div class="flex items-center justify-between gap-4"><span class="text-sm text-emerald-100/45">${escape_html(pageCopy.profile.approachLabel)}</span> <span class="text-sm text-slate-100">${escape_html(pageCopy.profile.approach)}</span></div> <div class="flex items-center justify-between gap-4"><span class="text-sm text-emerald-100/45">${escape_html(pageCopy.profile.stackLabel)}</span> <span class="text-sm text-slate-100">${escape_html(pageCopy.profile.stack)}</span></div></div></aside></div>`);
			}});

		$$renderer.push(`<!----></div></section> <section class="about-section section-spacing" aria-labelledby="story-title"><div class="section-shell">`);

		InView($$renderer, {
			children: ($$renderer) => {
				$$renderer.push(`<div class="grid gap-8 border-y border-[color:var(--accent-weak)]/35 py-10 md:grid-cols-[0.35fr_1fr]"><p class="text-sm uppercase tracking-[0.3em] text-[color:var(--accent)]">${escape_html(pageCopy.story.eyebrow)}</p> <div class="space-y-5"><h2 id="story-title" class="text-2xl font-semibold md:text-3xl">${escape_html(pageCopy.story.title)}</h2> <!--[-->`);

				const each_array_1 = ensure_array_like(pageCopy.story.paragraphs);

				for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
					let paragraph = each_array_1[$$index_1];

					$$renderer.push(`<p class="leading-8 text-slate-300">${escape_html(paragraph)}</p>`);
				}

				$$renderer.push(`<!--]--></div></div>`);
			}});

		$$renderer.push(`<!----></div></section> <section class="about-section section-spacing" aria-labelledby="build-title"><div class="section-shell">`);

		InView($$renderer, {
			children: ($$renderer) => {
				$$renderer.push(`<div class="mb-8 max-w-3xl"><p class="text-sm uppercase tracking-[0.3em] text-[color:var(--accent)]">${escape_html(pageCopy.building.eyebrow)}</p> <h2 id="build-title" class="mt-3 text-2xl font-semibold md:text-3xl">${escape_html(pageCopy.building.title)}</h2> <p class="mt-4 leading-8 text-slate-300">${escape_html(pageCopy.building.intro)}</p></div> <div class="grid gap-5 md:grid-cols-2"><!--[-->`);

				const each_array_2 = ensure_array_like(pageCopy.building.cards);

				for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
					let card = each_array_2[$$index_2];

					$$renderer.push(`<article class="rounded-2xl border border-[color:var(--accent-weak)]/60 bg-[color:var(--surface)]/45 p-6 shadow-sm backdrop-blur-sm transition duration-200 hover:-translate-y-1 hover:border-[color:var(--accent)]/30 hover:bg-[color:var(--surface)]/72 hover:shadow-xl"><h3 class="text-lg font-semibold text-slate-50">${escape_html(card.title)}</h3> <p class="mt-3 leading-7 text-slate-300">${escape_html(card.text)}</p></article>`);
				}

				$$renderer.push(`<!--]--></div> <p class="mt-6 max-w-3xl leading-8 text-slate-300">${escape_html(pageCopy.building.note)}</p>`);
			}});

		$$renderer.push(`<!----></div></section> <section class="about-section section-spacing" aria-labelledby="work-title"><div class="section-shell">`);

		InView($$renderer, {
			children: ($$renderer) => {
				$$renderer.push(`<div class="grid gap-8 md:grid-cols-[0.35fr_1fr]"><p class="text-sm uppercase tracking-[0.3em] text-[color:var(--accent)]">${escape_html(pageCopy.work.eyebrow)}</p> <div class="space-y-5"><h2 id="work-title" class="text-2xl font-semibold md:text-3xl">${escape_html(pageCopy.work.title)}</h2> <p class="leading-8 text-slate-300">${escape_html(pageCopy.work.intro)}</p> <ul class="grid gap-3 sm:grid-cols-2"><!--[-->`);

				const each_array_3 = ensure_array_like(pageCopy.work.points);

				for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
					let point = each_array_3[$$index_3];

					$$renderer.push(`<li class="rounded-xl border border-[color:var(--accent-weak)]/55 bg-[color:var(--surface)]/45 px-4 py-3 text-sm text-slate-200 backdrop-blur-sm transition hover:border-[color:var(--accent)]/30 hover:bg-[color:var(--surface)]/65">${escape_html(point)}</li>`);
				}

				$$renderer.push(`<!--]--></ul> <p class="leading-8 text-slate-300">${escape_html(pageCopy.work.closing)}</p></div></div>`);
			}});

		$$renderer.push(`<!----></div></section> <section class="about-section section-spacing" aria-labelledby="focus-title"><div class="section-shell">`);

		InView($$renderer, {
			children: ($$renderer) => {
				$$renderer.push(`<div class="about-panel"><div class="grid gap-6 md:grid-cols-[0.35fr_1fr]"><div><p class="text-sm uppercase tracking-[0.3em] text-[color:var(--accent)]">${escape_html(pageCopy.focus.eyebrow)}</p> <h2 id="focus-title" class="mt-3 text-2xl font-semibold md:text-3xl">${escape_html(currentFocus?.title ?? pageCopy.focus.title)}</h2> <p class="mt-3 text-xs uppercase tracking-[0.2em] text-emerald-100/35">SSR content panel</p></div> <div class="space-y-4"><p class="leading-8 text-slate-300">${escape_html(currentFocus?.summary ?? pageCopy.focus.paragraphs[0])}</p> <ul class="grid gap-3 sm:grid-cols-2"><!--[-->`);

				const each_array_4 = ensure_array_like(currentFocus?.items ?? pageCopy.focus.paragraphs);

				for (let $$index_4 = 0, $$length = each_array_4.length; $$index_4 < $$length; $$index_4++) {
					let item = each_array_4[$$index_4];

					$$renderer.push(`<li class="rounded-xl border border-[color:var(--accent-weak)]/55 bg-[color:var(--surface)]/45 px-4 py-3 text-sm leading-6 text-slate-200 backdrop-blur-sm transition hover:border-[color:var(--accent)]/30 hover:bg-[color:var(--surface)]/65">${escape_html(item)}</li>`);
				}

				$$renderer.push(`<!--]--></ul> `);

				if (currentFocus) {
					$$renderer.push('<!--[-->');
					$$renderer.push(`<p class="text-xs uppercase tracking-[0.2em] text-emerald-100/35">Updated ${escape_html(currentFocus.updatedAt)}</p>`);
				} else {
					$$renderer.push('<!--[!-->');
				}

				$$renderer.push(`<!--]--></div></div></div>`);
			}});

		$$renderer.push(`<!----></div></section> <section class="about-section section-spacing" aria-labelledby="toolkit-title"><div class="section-shell">`);

		InView($$renderer, {
			children: ($$renderer) => {
				$$renderer.push(`<div class="grid gap-8 md:grid-cols-[0.35fr_1fr]"><div><p class="text-sm uppercase tracking-[0.3em] text-[color:var(--accent)]">Toolkit</p> <h2 id="toolkit-title" class="mt-3 text-2xl font-semibold md:text-3xl">${escape_html(toolkit?.title ?? "Stack")}</h2></div> <div class="space-y-4"><div class="flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-emerald-100/35"><span>SSR content panel</span> `);

				if (toolkit) {
					$$renderer.push('<!--[-->');
					$$renderer.push(`<span class="h-px flex-1 bg-[color:var(--accent-weak)]/30"></span> <span>Updated ${escape_html(toolkit.updatedAt)}</span>`);
				} else {
					$$renderer.push('<!--[!-->');
				}

				$$renderer.push(`<!--]--></div> <div class="flex flex-wrap gap-3"><!--[-->`);

				const each_array_5 = ensure_array_like(toolkit?.items ?? []);

				for (let $$index_5 = 0, $$length = each_array_5.length; $$index_5 < $$length; $$index_5++) {
					let item = each_array_5[$$index_5];

					$$renderer.push(`<span class="rounded-full border border-[color:var(--accent-weak)]/55 bg-[color:var(--surface)]/50 px-4 py-2 text-sm text-slate-200 transition hover:border-[color:var(--accent)]/30 hover:bg-[color:var(--accent)]/10 hover:text-white">${escape_html(item)}</span>`);
				}

				$$renderer.push(`<!--]--></div></div></div>`);
			}});

		$$renderer.push(`<!----></div></section> <section class="about-section section-spacing pb-24" aria-labelledby="beyond-title"><div class="section-shell">`);

		InView($$renderer, {
			children: ($$renderer) => {
				$$renderer.push(`<div class="space-y-10"><div class="grid gap-8 md:grid-cols-[0.35fr_1fr]"><p class="text-sm uppercase tracking-[0.3em] text-[color:var(--accent)]">${escape_html(pageCopy.beyond.eyebrow)}</p> <div><h2 id="beyond-title" class="text-2xl font-semibold md:text-3xl">${escape_html(pageCopy.beyond.title)}</h2> <p class="mt-4 leading-8 text-slate-300">${escape_html(pageCopy.beyond.text)}</p></div></div> <div class="about-panel bg-[color:var(--surface)]/65"><div class="flex flex-col gap-5 md:flex-row md:items-center md:justify-between"><div><p class="text-sm uppercase tracking-[0.3em] text-[color:var(--accent)]">${escape_html(pageCopy.cta.eyebrow)}</p> <p class="mt-3 max-w-2xl leading-8 text-slate-300">${escape_html(pageCopy.cta.text)}</p></div> <a${attr('href', contactHref)} class="inline-flex items-center justify-center rounded-full border border-[color:var(--accent-weak)] bg-white/5 px-6 py-3 text-sm font-medium text-white shadow-[var(--accent-glow)] transition hover:bg-[color:var(--accent-weak)] hover:shadow-[var(--accent-glow-hover)] focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]/60">${escape_html(pageCopy.cta.button)}</a></div></div></div>`);
			}});

		$$renderer.push(`<!----></div></section></div>`);
	});
}

export { AboutPage as A };
