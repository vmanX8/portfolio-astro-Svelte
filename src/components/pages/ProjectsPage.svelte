<script lang="ts">
    import { _, locale as localeStore } from "svelte-i18n";
    import { setupI18n } from "../../lib/i18n/i18n";
    import type { Locale } from "../../lib/i18n/messages";
    import {
        projectsByLanguage,
        type Project,
    } from "../../lib/content/projects";
    import ProjectIcon from "../ui/ProjectIcon.svelte";
    import { fade } from "svelte/transition";

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
    const orderedProjects = $derived(projects.toReversed());

    let currentIndex = $state(0);
    let selectedProject = $state<Project | null>(null);
    let initialProjectApplied = $state(false);

    function getVisibleProjects() {
        if (!orderedProjects.length) return [] as Project[];
        if (orderedProjects.length === 1) return [orderedProjects[0]];
        if (orderedProjects.length === 2) {
            const nextIndex = (currentIndex + 1) % orderedProjects.length;
            return [orderedProjects[currentIndex], orderedProjects[nextIndex]];
        }

        const prevIndex =
            (currentIndex - 1 + orderedProjects.length) %
            orderedProjects.length;
        const nextIndex = (currentIndex + 1) % orderedProjects.length;
        return [
            orderedProjects[prevIndex],
            orderedProjects[currentIndex],
            orderedProjects[nextIndex],
        ];
    }

    function prevProject() {
        if (!orderedProjects.length) return;
        currentIndex =
            (currentIndex - 1 + orderedProjects.length) %
            orderedProjects.length;
    }

    function nextProject() {
        if (!orderedProjects.length) return;
        currentIndex = (currentIndex + 1) % orderedProjects.length;
    }

    function openProject(project: Project) {
        selectedProject = project;
    }

    function handleProjectClick(project: Project, index: number) {
        if (project.id === activeProject?.id) {
            openProject(project);
            return;
        }

        if (visibleProjects.length < 3) {
            return;
        }

        if (index === 0) {
            prevProject();
            return;
        }

        if (index === 2) {
            nextProject();
        }
    }

    function closeProject() {
        selectedProject = null;
    }

    function onKeyDown(e: KeyboardEvent) {
        if (e.key === "Escape") {
            closeProject();
        }
    }

    const visibleProjects = $derived(getVisibleProjects());
    const activeProject = $derived(
        orderedProjects.length === 1
            ? visibleProjects[0]
            : visibleProjects[Math.floor(visibleProjects.length / 2)] ?? null,
    );

    $effect(() => {
        if (!orderedProjects.length) {
            currentIndex = 0;
            return;
        }

        if (currentIndex >= orderedProjects.length) {
            currentIndex = 0;
        }
    });

    $effect(() => {
        if (
            initialProjectApplied ||
            typeof window === "undefined" ||
            !orderedProjects.length
        ) {
            return;
        }

        const projectId = new URLSearchParams(window.location.search).get(
            "project",
        );
        const projectIndex = orderedProjects.findIndex(
            (project) => project.id === projectId,
        );

        if (projectIndex >= 0) {
            currentIndex = projectIndex;
        }

        initialProjectApplied = true;
    });
</script>

<svelte:window onkeydown={onKeyDown} />

<section class="section-spacing" aria-labelledby="projects-page-title">
    <div class="section-shell">
        <header class="mb-8">
            <h1
                id="projects-page-title"
                class="text-3xl md:text-4xl font-semibold"
            >
                {$t("projectsSection.title")}
            </h1>
            <p class="text-slate-300 mt-3 max-w-2xl">
                {$t("projectsSection.subtitle")}
            </p>
        </header>

        {#if !projects.length}
            <p class="text-slate-300">{$t("projectsSection.empty")}</p>
        {:else}
            <div class="space-y-8">
                <div class="grid gap-5 md:grid-cols-3 items-stretch">
                    {#each visibleProjects as project, index (project.id)}
                        {#key project.id}
                            {@const isActive = project.id === activeProject?.id}
                            <button
                                type="button"
                                onclick={() =>
                                    handleProjectClick(project, index)}
                                disabled={orderedProjects.length <= 1}
                                aria-disabled={orderedProjects.length <= 1}
                                aria-current={isActive ? "true" : undefined}
                                aria-label={`${project.title} - ${isActive ? $t("projectsSection.ctaView") : index === 0 ? $t("projectsSection.previousProject") : $t("projectsSection.nextProject")}`}
                                class={`rounded-3xl border p-5 transition-all duration-300 ease-out min-h-[20rem] h-full min-w-0 focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]/60 ${isActive ? "border-[color:var(--accent)] bg-[color:var(--surface)]/95 shadow-[0_0_40px_rgba(16,185,129,0.38)] scale-105 cursor-pointer hover:-translate-y-1 hover:shadow-[0_0_54px_rgba(16,185,129,0.46)]" : "border-teal-800 bg-[color:var(--surface)]/45 opacity-60 cursor-pointer scale-95 grayscale hover:opacity-80 hover:grayscale-0 hover:border-[color:var(--accent-weak)]/60 hover:bg-[color:var(--surface)]/65 disabled:cursor-not-allowed disabled:opacity-40"}`}
                            >
                                <div class="flex flex-col gap-5 h-full">
                                    <div class="flex items-start gap-4">
                                        {#if project.icon}
                                            <ProjectIcon
                                                src={project.icon}
                                                alt={`${project.title} icon`}
                                                wrapperClass="w-14 h-14 rounded-3xl bg-[color:var(--surface)]/20 flex items-center justify-center text-[color:var(--accent)]"
                                                svgClass="w-8 h-8"
                                            />
                                        {:else}
                                            <div
                                                class="w-14 h-14 rounded-3xl bg-slate-700/20"
                                            ></div>
                                        {/if}

                                        <div>
                                            <p
                                                class="text-xs uppercase tracking-[0.25em] text-slate-400"
                                            >
                                                {$t("projectsSection.title")}
                                            </p>
                                            <h2
                                                class="text-xl font-semibold mt-2"
                                            >
                                                {project.title}
                                            </h2>
                                        </div>
                                    </div>

                                    <p
                                        class="text-slate-300 leading-relaxed break-words"
                                    >
                                        {project.summary}
                                    </p>

                                    <div class="flex flex-wrap gap-2">
                                        {#each project.tech as tech}
                                            <span
                                                class="text-[11px] uppercase tracking-wide px-2 py-1 rounded-full bg-[color:var(--accent)]/10 border border-white/5 text-slate-200"
                                            >
                                                {tech}
                                            </span>
                                        {/each}
                                    </div>
                                </div>
                            </button>
                        {/key}
                    {/each}
                </div>

                {#if selectedProject}
                    <button
                        type="button"
                        class="fixed inset-0 z-40 bg-black/70"
                        onclick={closeProject}
                        aria-label={$t("projectsSection.close")}
                    ></button>
                    <div
                        class="fixed inset-0 z-50 flex pointer-events-none items-center justify-center p-4"
                    >
                        <div
                            class="pointer-events-auto w-full max-w-3xl rounded-3xl border border-white/10 bg-[color:var(--surface)]/95 p-6 shadow-2xl ring-1 ring-black/30 overflow-hidden"
                            transition:fade={{ duration: 180 }}
                            role="dialog"
                            aria-modal="true"
                            aria-label={$t("projectsSection.modalTitle")}
                            tabindex="-1"
                        >
                            <div class="flex flex-col gap-4">
                                <div
                                    class="flex items-center justify-between gap-4"
                                >
                                    <div>
                                        <p
                                            class="text-xs uppercase tracking-[0.25em] text-slate-400"
                                        >
                                            {$t("projectsSection.modalTitle")}
                                        </p>
                                        <h2 class="text-2xl font-semibold mt-2">
                                            {selectedProject.title}
                                        </h2>
                                    </div>
                                    <button
                                        type="button"
                                        class="modal-cta icon p-2 text-white focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]/60"
                                        onclick={closeProject}
                                        aria-label={$t("projectsSection.close")}
                                    >
                                        &times;
                                    </button>
                                </div>

                                <p class="text-slate-200 leading-relaxed">
                                    {selectedProject.details}
                                </p>

                                <div class="flex flex-wrap gap-2">
                                    {#each selectedProject.tech as tech}
                                        <span
                                            class="text-[11px] uppercase tracking-wide px-2 py-1 rounded-full bg-[color:var(--accent)]/10 border border-white/5 text-slate-200"
                                        >
                                            {tech}
                                        </span>
                                    {/each}
                                </div>

                                <div class="flex flex-wrap gap-3 pt-4">
                                    {#if selectedProject.demoUrl}
                                        <a
                                            href={selectedProject.demoUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            class="modal-cta demo inline-flex items-center justify-center border border-[color:var(--accent-weak)] px-4 py-2 text-sm text-[color:var(--accent)] focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]/60"
                                        >
                                            {$t("projectsSection.liveDemo")}
                                        </a>
                                    {/if}

                                    {#if selectedProject.repoUrl}
                                        <a
                                            href={selectedProject.repoUrl}
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
                    </div>
                {/if}

                <div
                    class="flex flex-col gap-3 md:flex-row md:items-center md:justify-between"
                >
                    <div class="flex items-center gap-3">
                        <button
                            type="button"
                            class="rounded-full border border-teal-800 bg-[color:var(--surface)]/60 px-4 py-2 text-sm text-slate-100 transition hover:border-[color:var(--accent)] focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]/60 disabled:cursor-not-allowed disabled:opacity-40"
                            onclick={prevProject}
                            disabled={orderedProjects.length <= 1}
                        >
                            ← Previous
                        </button>
                        <button
                            type="button"
                            class="rounded-full border border-teal-800 bg-[color:var(--surface)]/60 px-4 py-2 text-sm text-slate-100 transition hover:border-[color:var(--accent)] focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]/60 disabled:cursor-not-allowed disabled:opacity-40"
                            onclick={nextProject}
                            disabled={orderedProjects.length <= 1}
                        >
                            Next →
                        </button>
                    </div>

                    <div class="flex flex-wrap justify-center gap-2">
                        {#each orderedProjects as _, index}
                            <button
                                type="button"
                                class={`h-2.5 w-2.5 rounded-full transition ${currentIndex === index ? "bg-[color:var(--accent)]" : "bg-slate-600/30"}`}
                                aria-label={`Go to project ${index + 1}`}
                                onclick={() => (currentIndex = index)}
                            ></button>
                        {/each}
                    </div>
                </div>
            </div>
        {/if}
    </div>
</section>
