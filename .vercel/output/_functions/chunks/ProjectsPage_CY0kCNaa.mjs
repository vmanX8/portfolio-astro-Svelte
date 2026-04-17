import { s as store_get, e as escape_html, a as ensure_array_like, d as attr, b as attr_class, u as unsubscribe_stores } from './_@astro-renderers_DhOb6nU_.mjs';
import { c as $locale, b as $format } from './server_DSjHHNb4.mjs';
import { g as getLatestProjectsByLanguage, P as ProjectIcon } from './ProjectIcon_HFKTwUVd.mjs';

function ProjectsPage($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		let { locale = "en" } = $$props;
		const t = $format;
		const lang = store_get($$store_subs ??= {}, '$localeStore', $locale) === "gr" ? "gr" : "en";
		const orderedProjects = getLatestProjectsByLanguage(lang);
		let currentIndex = 0;

		function getVisibleProjects() {
			if (!orderedProjects.length) return [];
			if (orderedProjects.length === 1) return [orderedProjects[0]];

			if (orderedProjects.length === 2) {
				const nextIndex = (currentIndex + 1) % orderedProjects.length;

				return [orderedProjects[currentIndex], orderedProjects[nextIndex]];
			}

			const prevIndex = (currentIndex - 1 + orderedProjects.length) % orderedProjects.length;
			const nextIndex = (currentIndex + 1) % orderedProjects.length;

			return [
				orderedProjects[prevIndex],
				orderedProjects[currentIndex],
				orderedProjects[nextIndex]
			];
		}

		const visibleProjects = getVisibleProjects();

		const activeProject = orderedProjects.length === 1
			? visibleProjects[0]
			: visibleProjects[Math.floor(visibleProjects.length / 2)] ?? null;

		$$renderer.push(`<section class="section-spacing" aria-labelledby="projects-page-title"><div class="section-shell"><header class="mb-8"><h1 id="projects-page-title" class="text-3xl md:text-4xl font-semibold">${escape_html(store_get($$store_subs ??= {}, '$t', t)("projectsSection.title"))}</h1> <p class="text-slate-300 mt-3 max-w-2xl">${escape_html(store_get($$store_subs ??= {}, '$t', t)("projectsSection.subtitle"))}</p></header> `);

		if (!orderedProjects.length) {
			$$renderer.push('<!--[-->');
			$$renderer.push(`<p class="text-slate-300">${escape_html(store_get($$store_subs ??= {}, '$t', t)("projectsSection.empty"))}</p>`);
		} else {
			$$renderer.push('<!--[!-->');
			$$renderer.push(`<div class="space-y-8"><div class="grid gap-5 md:grid-cols-3 items-stretch"><!--[-->`);

			const each_array = ensure_array_like(visibleProjects);

			for (let index = 0, $$length = each_array.length; index < $$length; index++) {
				let project = each_array[index];

				$$renderer.push(`<!---->`);

				{
					const isActive = project.id === activeProject?.id;

					$$renderer.push(`<button type="button"${attr('disabled', orderedProjects.length <= 1, true)}${attr('aria-disabled', orderedProjects.length <= 1)}${attr('aria-current', isActive ? "true" : undefined)}${attr('aria-label', `${project.title} - ${isActive
						? store_get($$store_subs ??= {}, '$t', t)("projectsSection.ctaView")
						: index === 0
							? store_get($$store_subs ??= {}, '$t', t)("projectsSection.previousProject")
							: store_get($$store_subs ??= {}, '$t', t)("projectsSection.nextProject")}`)}${attr_class(`rounded-3xl border p-5 transition-all duration-300 ease-out min-h-[20rem] h-full min-w-0 focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]/60 ${isActive
						? "border-[color:var(--accent)] bg-[color:var(--surface)]/95 shadow-[0_0_40px_rgba(16,185,129,0.38)] scale-105 cursor-pointer hover:-translate-y-1 hover:shadow-[0_0_54px_rgba(16,185,129,0.46)]"
						: "border-teal-800 bg-[color:var(--surface)]/45 opacity-60 cursor-pointer scale-95 grayscale hover:opacity-80 hover:grayscale-0 hover:border-[color:var(--accent-weak)]/60 hover:bg-[color:var(--surface)]/65 disabled:cursor-not-allowed disabled:opacity-40"}`)}><div class="flex flex-col gap-5 h-full"><div class="flex items-start gap-4">`);

					if (project.icon) {
						$$renderer.push('<!--[-->');

						ProjectIcon($$renderer, {
							src: project.icon,
							alt: `${project.title} icon`,
							wrapperClass: 'w-14 h-14 rounded-3xl bg-[color:var(--surface)]/20 flex items-center justify-center text-[color:var(--accent)]',
							svgClass: 'w-8 h-8'
						});
					} else {
						$$renderer.push('<!--[!-->');
						$$renderer.push(`<div class="w-14 h-14 rounded-3xl bg-slate-700/20"></div>`);
					}

					$$renderer.push(`<!--]--> <div><p class="text-xs uppercase tracking-[0.25em] text-slate-400">${escape_html(store_get($$store_subs ??= {}, '$t', t)("projectsSection.title"))}</p> <h2 class="text-xl font-semibold mt-2">${escape_html(project.title)}</h2></div></div> <p class="text-slate-300 leading-relaxed break-words">${escape_html(project.summary)}</p> <div class="flex flex-wrap gap-2"><!--[-->`);

					const each_array_1 = ensure_array_like(project.tech);

					for (let $$index = 0, $$length = each_array_1.length; $$index < $$length; $$index++) {
						let tech = each_array_1[$$index];

						$$renderer.push(`<span class="text-[11px] uppercase tracking-wide px-2 py-1 rounded-full bg-[color:var(--accent)]/10 border border-white/5 text-slate-200">${escape_html(tech)}</span>`);
					}

					$$renderer.push(`<!--]--></div></div></button>`);
				}

				$$renderer.push(`<!---->`);
			}

			$$renderer.push(`<!--]--></div> `);

			{
				$$renderer.push('<!--[!-->');
			}

			$$renderer.push(`<!--]--> <div class="flex flex-col gap-3 md:flex-row md:items-center md:justify-between"><div class="flex items-center gap-3"><button type="button" class="rounded-full border border-teal-800 bg-[color:var(--surface)]/60 px-4 py-2 text-sm text-slate-100 transition hover:border-[color:var(--accent)] focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]/60 disabled:cursor-not-allowed disabled:opacity-40"${attr('disabled', orderedProjects.length <= 1, true)}>← Previous</button> <button type="button" class="rounded-full border border-teal-800 bg-[color:var(--surface)]/60 px-4 py-2 text-sm text-slate-100 transition hover:border-[color:var(--accent)] focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]/60 disabled:cursor-not-allowed disabled:opacity-40"${attr('disabled', orderedProjects.length <= 1, true)}>Next →</button></div> <div class="flex flex-wrap justify-center gap-2"><!--[-->`);

			const each_array_3 = ensure_array_like(orderedProjects);

			for (let index = 0, $$length = each_array_3.length; index < $$length; index++) {
				each_array_3[index];

				$$renderer.push(`<button type="button"${attr_class(`h-2.5 w-2.5 rounded-full transition ${currentIndex === index ? "bg-[color:var(--accent)]" : "bg-slate-600/30"}`)}${attr('aria-label', `Go to project ${index + 1}`)}></button>`);
			}

			$$renderer.push(`<!--]--></div></div></div>`);
		}

		$$renderer.push(`<!--]--></div></section>`);

		if ($$store_subs) unsubscribe_stores($$store_subs);
	});
}

export { ProjectsPage as P };
