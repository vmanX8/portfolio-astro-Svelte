<script lang="ts">
  import { _, locale as localeStore } from "svelte-i18n";
  import { setupI18n } from "../../lib/i18n/i18n";
  import type { Locale } from "../../lib/i18n/messages";
  import { projectsByLanguage } from "../../lib/content/projects";
  import InView from "../ui/InView.svelte";
  import ProjectIcon from "../ui/ProjectIcon.svelte";

  type Props = {
    locale?: Locale;
  };

  let { locale = "en" }: Props = $props();

  $effect.pre(() => {
    setupI18n(locale);
  });
  const t = _;

  const lang = $derived(($localeStore === "gr" ? "gr" : "en") as "en" | "gr");
  const projects = $derived(projectsByLanguage[lang]);
  const latestProjects = $derived(projects.toReversed());
  const featuredProjects = $derived(latestProjects.slice(0, 3));
  const projectsHref = $derived(lang === "gr" ? "/gr/projects" : "/projects");

  function getProjectHref(projectId: string) {
    return `${projectsHref}?project=${encodeURIComponent(projectId)}`;
  }
</script>

<section id="projects" class="section-spacing" aria-labelledby="projects-title">
  <div class="section-shell">
    <InView>
      <header class="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 id="projects-title" class="text-2xl md:text-3xl font-semibold">
            {$t("projectsSection.title")}
          </h2>
          <p class="text-slate-300 mt-2 max-w-2xl">
            {$t("projectsSection.homeSubtitle")}
          </p>
        </div>

        <a
          href={projectsHref}
          class="cta-underline self-start text-sm font-medium text-[color:var(--accent)] focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]/60"
        >
          {$t("projectsSection.viewAll")} &rarr;
        </a>
      </header>

      {#if !projects.length}
        <p class="text-slate-300">{$t("projectsSection.empty")}</p>
      {:else}
        <div class="grid gap-6 grid-cols-6">
          {#each featuredProjects as p (p.id)}
            <a
              href={getProjectHref(p.id)}
              class="group text-left rounded-2xl border border-teal-800 bg-[color:var(--surface)]/40 p-5 h-full col-span-6 md:col-span-2 transition-all duration-200 ease-out backdrop-blur-sm shadow-sm hover:shadow-xl transform-gpu hover:-translate-y-1 hover:border-[color:var(--accent-weak)]/60 hover:bg-[color:var(--surface)]/70 focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]/60"
              aria-label={`${p.title} - ${$t("projectsSection.viewAll")}`}
            >
              <div class="flex items-start gap-4">
                {#if p.icon}
                  <ProjectIcon
                    src={p.icon}
                    alt={`${p.title} icon`}
                    wrapperClass="w-12 h-12 flex-shrink-0 rounded-lg bg-[color:var(--surface)]/20 flex items-center justify-center text-[color:var(--accent)]"
                    svgClass="w-8 h-8"
                  />
                {:else}
                  <ProjectIcon
                    src="/assets/projects/default.svg"
                    alt="default icon"
                    wrapperClass="w-12 h-12 flex-shrink-0 rounded-lg bg-[color:var(--surface)]/20 flex items-center justify-center text-[color:var(--accent)]"
                    svgClass="w-8 h-8"
                  />
                {/if}

                <div class="flex-1">
                  <h3
                    class="text-lg font-semibold mb-2 group-hover:text-[color:var(--accent)] transition-transform duration-200 ease-out group-hover:scale-105 inline-block"
                  >
                    {p.title}
                  </h3>

                  <p class="text-sm text-slate-300 mb-4 leading-relaxed">
                    {p.summary}
                  </p>

                  <div class="flex flex-wrap gap-2 mb-4">
                    {#each p.tech as tech}
                      <span
                        class="text-[11px] uppercase tracking-wide px-2 py-1 rounded-full bg-[color:var(--accent)]/10 border border-white/5 text-slate-200 transition-colors"
                      >
                        {tech}
                      </span>
                    {/each}
                  </div>

                  <div>
                    <span
                      class="cta-underline text-sm font-medium text-[color:var(--accent)] inline-flex items-center gap-2 transition-colors duration-200"
                    >
                      {$t("projectsSection.viewProjectPage")} &rarr;
                    </span>
                  </div>
                </div>
              </div>
            </a>
          {/each}
        </div>
      {/if}
    </InView>
  </div>
</section>
