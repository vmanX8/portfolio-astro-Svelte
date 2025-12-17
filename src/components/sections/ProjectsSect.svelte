<script lang="ts">
  /**
   * ProjectsSect (Home - Section 3: Projects)
   * - Interactive cards + modal
   * - i18n-aware (EN/GR) via svelte-i18n
   * - InView wrapper for scroll animation
   */

  import { _, locale } from "svelte-i18n";
  import { setupI18n } from "../../lib/i18n/i18n";
  import { projectsByLanguage, type Project } from "../../lib/content/projects";
  import InView from "../ui/InView.svelte";
  import { modal, backdrop, clipReveal } from "../ui/modalFx";
  import SvgInline from "../ui/SvgInline.svelte";
  import ProjectIcon from "../ui/ProjectIcon.svelte";
  setupI18n();
  const t = _;

  // ---- State ---------------------------------------------------------------

  /** The currently selected project (opens modal). */
  let selected: Project | null = null;

  /**
   * Map svelte-i18n locale to our supported locales.
   * (Anything else as 'en' as a safe fallback.)
   */
  $: lang = ($locale === "gr" ? "gr" : "en") as "en" | "gr";

  /** Projects shown in the grid, based on current language. */
  $: projects = projectsByLanguage[lang];

  // ---- Actions -------------------------------------------------------------

  /** Opens the modal with the selected project. */
  function openProject(p: Project) {
    selected = p;
  }

  /** Closes the modal. */
  function close() {
    selected = null;
  }

  // ---- Accessibility helpers ----------------------------------------------
  function onKeyDown(e: KeyboardEvent) {
    if (e.key === "Escape") close();
  }
</script>

<svelte:window on:keydown={onKeyDown} />

<!-- =========================================================================
  Section wrapper (Home - Section 3)
============================================================================= -->
<section id="projects" class="pt-24 md:pt-28" aria-labelledby="projects-title">
  <div class="mx-auto max-w-5xl px-4">
    <!-- Scroll animation wrapper (extra points) -->
    <InView>
      <!-- -------------------------------------------------------------------
        Section header
      -------------------------------------------------------------------- -->
      <header class="mb-8">
        <h2 id="projects-title" class="text-2xl md:text-3xl font-semibold">
          {$t("projectsSection.title")}
        </h2>
        <p class="text-slate-300 mt-2">
          {$t("projectsSection.subtitle")}
        </p>
      </header>

      <!-- -------------------------------------------------------------------
        Projects grid (interactive cards)
      -------------------------------------------------------------------- -->
      {#if !projects.length}
        <p class="text-slate-300">{$t("projectsSection.empty")}</p>
      {:else}
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {#each projects as p (p.id)}
            <button
              type="button"
              class="group text-left rounded-2xl border border-teal-800 bg-[color:var(--surface)]/40 p-5 transition-all duration-200 ease-out backdrop-blur-sm shadow-sm hover:shadow-xl transform-gpu hover:-translate-y-1 hover:border-[color:var(--accent-weak)]/60 hover:bg-[color:var(--surface)]/70 focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]/60"
              on:click={() => openProject(p)}
              aria-label={`${p.title} — ${$t("projectsSection.ctaView")}`}
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
                      {$t("projectsSection.ctaView")} →
                    </span>
                  </div>
                </div>
              </div>
            </button>
          {/each}
        </div>
      {/if}
    </InView>
  </div>

  <!-- =========================================================================
    Modal (Project details)
  ============================================================================= -->
  {#if selected}
    <!-- Backdrop (click to close). sr-only text to avoid a11y warnings. -->
    <button
      type="button"
      class="fixed inset-0 bg-black/70 z-40 backdrop-blur-sm"
      on:click={close}
      aria-label={$t("projectsSection.close")}
      transition:backdrop
    >
      <span class="sr-only">{$t("projectsSection.close")}</span>
    </button>

    <!-- Dialog container -->
    <div class="fixed inset-0 z-50 flex items-center justify-center p-4">
      <!-- Dialog -->
      <div
        class="w-full max-w-xl rounded-2xl border border-white/10 bg-[color:var(--surface)] shadow-2xl ring-1 ring-black/30 overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-label={$t("projectsSection.modalTitle")}
        transition:clipReveal
      >
        <!-- Modal header -->
        <header
          class="px-5 py-4 border-b border-white/10 flex justify-between gap-4"
        >
          <div class="flex items-center gap-3">
            {#if selected.icon}
              <SvgInline
                src={selected.icon}
                alt={`${selected.title} icon`}
                className="w-10 h-10 rounded-md text-[color:var(--accent)]"
              />
            {/if}

            <div>
              <p class="text-xs uppercase tracking-[0.25em] text-slate-400">
                {$t("projectsSection.modalTitle")}
              </p>
              <h3 class="text-xl font-semibold mt-1">
                {selected.title}
              </h3>
            </div>
          </div>

          <button
            type="button"
            class="modal-cta icon p-1 text-white focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]/60"
            on:click={close}
            aria-label={$t("projectsSection.close")}
          >
            ✕
          </button>
        </header>

        <!-- Modal body -->
        <div class="px-5 py-5 space-y-5">
          <p class="text-slate-200 leading-relaxed">
            {selected.details}
          </p>

          <div>
            <p class="text-sm text-slate-400 mb-2">
              {$t("projectsSection.tags")}
            </p>
            <div class="flex flex-wrap gap-2">
              {#each selected.tech as tech}
                <span
                  class="text-[11px] uppercase tracking-wide px-2 py-1 rounded-full bg-[color:var(--surface)] text-slate-200"
                >
                  {tech}
                </span>
              {/each}
            </div>
          </div>

          <div>
            <p class="text-sm text-slate-400 mb-2">
              {$t("projectsSection.links")}
            </p>
            <div class="flex flex-wrap gap-3">
              {#if selected.demoUrl}
                <a
                  href={selected.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  class="modal-cta demo inline-flex items-center justify-center border border-[color:var(--accent-weak)] px-4 py-2 text-sm text-[color:var(--accent)] focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]/60"
                >
                  {$t("projectsSection.liveDemo")}
                </a>
              {/if}

              {#if selected.repoUrl}
                <a
                  href={selected.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  class="modal-cta inline-flex items-center justify-center border border-[color:var(--accent-weak)] px-4 py-2 text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]/60"
                >
                  {$t("projectsSection.sourceCode")}
                </a>
              {/if}
            </div>
          </div>
        </div>

        <!-- Modal footer -->
        <footer class="px-5 py-4 border-t border-white/10 flex justify-end">
          <button
            type="button"
            class="modal-cta px-4 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]/60"
            on:click={close}
          >
            {$t("projectsSection.close")}
          </button>
        </footer>
      </div>
    </div>
  {/if}
</section>

