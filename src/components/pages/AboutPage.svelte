<script lang="ts">
  import { setupI18n } from "../../lib/i18n/i18n";
  import type { Locale } from "../../lib/i18n/messages";
  import { aboutPageContent } from "../../lib/content/about";
  import InView from "../ui/InView.svelte";

  type Props = {
    locale?: Locale;
  };

  type CurrentFocusPayload = {
    title: string;
    summary: string;
    items: string[];
    updatedAt: string;
    lang: Locale;
  };

  type ToolkitPayload = {
    title: string;
    items: string[];
    updatedAt: string;
    lang: Locale;
  };

  let { locale = "en" }: Props = $props();
  let currentFocus = $state<CurrentFocusPayload | null>(null);
  let currentFocusLoading = $state(true);
  let currentFocusError = $state(false);
  let currentFocusAbortController: AbortController | null = null;
  let toolkit = $state<ToolkitPayload | null>(null);
  let toolkitLoading = $state(true);
  let toolkitError = $state(false);
  let toolkitAbortController: AbortController | null = null;

  $effect.pre(() => {
    setupI18n(locale);
  });

  const toolkitFallback = [
    "React",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "SCSS",
    "Bootstrap",
    "Vite",
    "React Router",
    "GSAP",
    "jQuery",
    "Node.js",
    "Express",
    "PostgreSQL",
    "REST APIs",
    "JWT",
    "Git",
  ];

  const lang = $derived(locale === "gr" ? "gr" : "en");
  const copy = $derived(aboutPageContent[lang]);
  const contactHref = $derived(lang === "gr" ? "/gr/contact" : "/contact");

  $effect(() => {
    currentFocusAbortController?.abort();
    currentFocusAbortController = new AbortController();
    currentFocusLoading = true;
    currentFocusError = false;

    async function loadCurrentFocus() {
      try {
        const res = await fetch(`/api/about/current?lang=${lang}`, {
          signal: currentFocusAbortController?.signal,
          headers: {
            "Cache-Control": "no-store",
          },
          credentials: "same-origin",
        });

        if (!res.ok) throw new Error("Failed to load current focus");

        currentFocus = (await res.json()) as CurrentFocusPayload;
      } catch (error) {
        if (error instanceof Error && error.name === "AbortError") return;
        currentFocus = null;
        currentFocusError = true;
      } finally {
        currentFocusLoading = false;
      }
    }

    void loadCurrentFocus();

    return () => {
      currentFocusAbortController?.abort();
    };
  });

  $effect(() => {
    toolkitAbortController?.abort();
    toolkitAbortController = new AbortController();
    toolkitLoading = true;
    toolkitError = false;

    async function loadToolkit() {
      try {
        const res = await fetch(`/api/about/toolkit?lang=${lang}`, {
          signal: toolkitAbortController?.signal,
          headers: {
            "Cache-Control": "no-store",
          },
          credentials: "same-origin",
        });

        if (!res.ok) throw new Error("Failed to load toolkit");

        toolkit = (await res.json()) as ToolkitPayload;
      } catch (error) {
        if (error instanceof Error && error.name === "AbortError") return;
        toolkit = null;
        toolkitError = true;
      } finally {
        toolkitLoading = false;
      }
    }

    void loadToolkit();

    return () => {
      toolkitAbortController?.abort();
    };
  });
</script>

<div class="about-page relative overflow-hidden">
<section class="relative pt-28 md:pt-32" aria-labelledby="about-page-title">
  <div
    class="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--accent)]/50 to-transparent"
  ></div>

  <div class="section-shell">
    <InView>
      <div class="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div class="space-y-6">
          <p class="text-sm uppercase tracking-[0.35em] text-[color:var(--accent)]">
            {copy.eyebrow}
          </p>

          <h1
            id="about-page-title"
            class="max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl"
          >
            {copy.title}
          </h1>

          {#each copy.intro as paragraph, index}
            <p
              class={index === 0
                ? "max-w-2xl text-lg leading-8 text-slate-300"
                : "max-w-2xl leading-7 text-slate-300"}
            >
              {paragraph}
            </p>
          {/each}
        </div>

        <aside
          class="about-profile-card relative rounded-2xl border border-teal-800 bg-[color:var(--surface)]/55 p-6 shadow-2xl shadow-black/20 backdrop-blur-sm"
          aria-label={copy.profile.summary}
        >
          <div class="about-profile-photo mb-8" aria-hidden="true">
            <span>VM</span>
          </div>

          <div class="mb-8 flex items-center gap-4">
            <div>
              <p class="text-sm uppercase tracking-[0.25em] text-slate-400">
                {copy.profile.role}
              </p>
              <p class="mt-1 text-slate-200">{copy.profile.summary}</p>
            </div>
          </div>

          <div class="space-y-4 border-t border-white/10 pt-6">
            <div class="flex items-center justify-between gap-4">
              <span class="text-sm text-slate-400">{copy.profile.focusLabel}</span>
              <span class="text-sm text-slate-100">{copy.profile.focus}</span>
            </div>
            <div class="flex items-center justify-between gap-4">
              <span class="text-sm text-slate-400">{copy.profile.approachLabel}</span>
              <span class="text-sm text-slate-100">{copy.profile.approach}</span>
            </div>
            <div class="flex items-center justify-between gap-4">
              <span class="text-sm text-slate-400">{copy.profile.stackLabel}</span>
              <span class="text-sm text-slate-100">{copy.profile.stack}</span>
            </div>
          </div>
        </aside>
      </div>
    </InView>
  </div>
</section>

<section class="about-section section-spacing" aria-labelledby="story-title">
  <div class="section-shell">
    <InView>
      <div class="grid gap-8 border-y border-white/10 py-10 md:grid-cols-[0.35fr_1fr]">
        <p class="text-sm uppercase tracking-[0.3em] text-[color:var(--accent)]">
          {copy.story.eyebrow}
        </p>

        <div class="space-y-5">
          <h2 id="story-title" class="text-2xl font-semibold md:text-3xl">
            {copy.story.title}
          </h2>
          {#each copy.story.paragraphs as paragraph}
            <p class="leading-8 text-slate-300">{paragraph}</p>
          {/each}
        </div>
      </div>
    </InView>
  </div>
</section>

<section class="about-section section-spacing" aria-labelledby="build-title">
  <div class="section-shell">
    <InView>
      <div class="mb-8 max-w-3xl">
        <p class="text-sm uppercase tracking-[0.3em] text-[color:var(--accent)]">
          {copy.building.eyebrow}
        </p>
        <h2 id="build-title" class="mt-3 text-2xl font-semibold md:text-3xl">
          {copy.building.title}
        </h2>
        <p class="mt-4 leading-8 text-slate-300">{copy.building.intro}</p>
      </div>

      <div class="grid gap-5 md:grid-cols-2">
        {#each copy.building.cards as card}
          <article
            class="rounded-2xl border border-teal-800 bg-[color:var(--surface)]/45 p-6 shadow-sm backdrop-blur-sm transition duration-200 hover:-translate-y-1 hover:border-[color:var(--accent-weak)]/70 hover:bg-[color:var(--surface)]/70 hover:shadow-xl"
          >
            <h3 class="text-lg font-semibold text-slate-50">{card.title}</h3>
            <p class="mt-3 leading-7 text-slate-300">{card.text}</p>
          </article>
        {/each}
      </div>

      <p class="mt-6 max-w-3xl leading-8 text-slate-300">
        {copy.building.note}
      </p>
    </InView>
  </div>
</section>

<section class="about-section section-spacing" aria-labelledby="work-title">
  <div class="section-shell">
    <InView>
      <div class="grid gap-8 md:grid-cols-[0.35fr_1fr]">
        <p class="text-sm uppercase tracking-[0.3em] text-[color:var(--accent)]">
          {copy.work.eyebrow}
        </p>

        <div class="space-y-5">
          <h2 id="work-title" class="text-2xl font-semibold md:text-3xl">
            {copy.work.title}
          </h2>
          <p class="leading-8 text-slate-300">{copy.work.intro}</p>
          <ul class="grid gap-3 sm:grid-cols-2">
            {#each copy.work.points as point}
              <li
                class="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200"
              >
                {point}
              </li>
            {/each}
          </ul>
          <p class="leading-8 text-slate-300">{copy.work.closing}</p>
        </div>
      </div>
    </InView>
  </div>
</section>

<section class="about-section section-spacing" aria-labelledby="focus-title">
  <div class="section-shell">
    <InView>
      <div
        class="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8"
      >
        <div class="grid gap-6 md:grid-cols-[0.35fr_1fr]">
          <div>
            <p class="text-sm uppercase tracking-[0.3em] text-[color:var(--accent)]">
              {copy.focus.eyebrow}
            </p>
            <h2 id="focus-title" class="mt-3 text-2xl font-semibold md:text-3xl">
              {currentFocus?.title ?? copy.focus.title}
            </h2>
            <p class="mt-3 text-xs uppercase tracking-[0.2em] text-slate-500">
              API driven panel
            </p>
          </div>

          <div class="space-y-4">
            {#if currentFocusLoading}
              <p class="leading-8 text-slate-300">
                {lang === "gr"
                  ? "Φόρτωση τρέχοντος focus..."
                  : "Loading current focus..."}
              </p>
            {:else}
              <p class="leading-8 text-slate-300">
                {currentFocus?.summary ?? copy.focus.paragraphs[0]}
              </p>

              <ul class="grid gap-3 sm:grid-cols-2">
                {#each currentFocus?.items ?? copy.focus.paragraphs as item}
                  <li
                    class="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm leading-6 text-slate-200"
                  >
                    {item}
                  </li>
                {/each}
              </ul>

              {#if currentFocus}
                <p class="text-xs uppercase tracking-[0.2em] text-slate-500">
                  Updated {currentFocus.updatedAt}
                </p>
              {/if}

              {#if currentFocusError}
                <p class="text-sm text-amber-300">
                  {lang === "gr"
                    ? "Το API δεν ήταν διαθέσιμο, οπότε εμφανίζεται το τοπικό περιεχόμενο."
                    : "The API was unavailable, so the local fallback content is shown."}
                </p>
              {/if}
            {/if}
          </div>
        </div>
      </div>
    </InView>
  </div>
</section>

<section class="about-section section-spacing" aria-labelledby="toolkit-title">
  <div class="section-shell">
    <InView>
      <div class="grid gap-8 md:grid-cols-[0.35fr_1fr]">
        <div>
          <p class="text-sm uppercase tracking-[0.3em] text-[color:var(--accent)]">
            Toolkit
          </p>
          <h2 id="toolkit-title" class="mt-3 text-2xl font-semibold md:text-3xl">
            {toolkit?.title ?? "Stack"}
          </h2>
        </div>

        <div class="space-y-4">
          <div class="flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-slate-500">
            <span>API driven panel</span>
            {#if toolkit}
              <span class="h-px flex-1 bg-white/10"></span>
              <span>Updated {toolkit.updatedAt}</span>
            {/if}
          </div>

          {#if toolkitLoading}
            <p class="text-sm text-slate-400">Loading toolkit from API...</p>
          {/if}

          <div class="flex flex-wrap gap-3">
            {#each toolkit?.items ?? toolkitFallback as item}
              <span
                class="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-[color:var(--accent-weak)] hover:bg-[color:var(--accent)]/10 hover:text-white"
              >
                {item}
              </span>
            {/each}
          </div>

          {#if toolkitError}
            <p class="text-sm text-slate-500">
              {lang === "gr"
                ? "Το API δεν ήταν διαθέσιμο, οπότε εμφανίζεται το τοπικό fallback stack."
                : "The API was unavailable, so the local fallback stack is shown."}
            </p>
          {/if}
        </div>
      </div>
    </InView>
  </div>
</section>

<section class="about-section section-spacing pb-24" aria-labelledby="beyond-title">
  <div class="section-shell">
    <InView>
      <div class="space-y-10">
        <div class="grid gap-8 md:grid-cols-[0.35fr_1fr]">
          <p class="text-sm uppercase tracking-[0.3em] text-[color:var(--accent)]">
            {copy.beyond.eyebrow}
          </p>

          <div>
            <h2 id="beyond-title" class="text-2xl font-semibold md:text-3xl">
              {copy.beyond.title}
            </h2>
            <p class="mt-4 leading-8 text-slate-300">{copy.beyond.text}</p>
          </div>
        </div>

        <div
          class="rounded-2xl border border-[color:var(--accent-weak)] bg-[color:var(--surface)]/65 p-6 md:p-8"
        >
          <div class="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p class="text-sm uppercase tracking-[0.3em] text-[color:var(--accent)]">
                {copy.cta.eyebrow}
              </p>
              <p class="mt-3 max-w-2xl leading-8 text-slate-300">
                {copy.cta.text}
              </p>
            </div>

            <a
              href={contactHref}
              class="inline-flex items-center justify-center rounded-full border border-[color:var(--accent-weak)] bg-white/5 px-6 py-3 text-sm font-medium text-white shadow-[var(--accent-glow)] transition hover:bg-[color:var(--accent-weak)] hover:shadow-[var(--accent-glow-hover)] focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]/60"
            >
              {copy.cta.button}
            </a>
          </div>
        </div>
      </div>
    </InView>
  </div>
</section>
</div>

<style>
  .about-section::before {
    content: "";
    display: block;
    width: min(64rem, calc(100% - 2rem));
    height: 1px;
    margin: 0 auto;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(45, 212, 191, 0.08),
      rgba(45, 212, 191, 0.46),
      rgba(148, 163, 184, 0.16),
      transparent
    );
  }

  .about-profile-card {
    background:
      linear-gradient(145deg, rgba(15, 23, 42, 0.76), rgba(20, 184, 166, 0.08)),
      rgba(15, 23, 42, 0.54);
  }

  .about-profile-card::before {
    content: "";
    position: absolute;
    inset: 1px;
    pointer-events: none;
    border-radius: 1rem;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), transparent 42%);
  }

  .about-profile-photo {
    position: relative;
    display: grid;
    min-height: 15rem;
    place-items: end start;
    overflow: hidden;
    border-radius: 1rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background:
      radial-gradient(circle at 68% 22%, rgba(45, 212, 191, 0.3), transparent 30%),
      linear-gradient(145deg, rgba(226, 232, 240, 0.18), rgba(15, 23, 42, 0.9) 58%),
      linear-gradient(90deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0));
    filter: grayscale(1);
    box-shadow: inset 0 -70px 90px rgba(2, 6, 23, 0.72);
  }

  .about-profile-photo::before {
    content: "";
    position: absolute;
    right: 12%;
    bottom: -9%;
    width: 52%;
    aspect-ratio: 1;
    border-radius: 9999px 9999px 28% 28%;
    background:
      radial-gradient(circle at 50% 32%, rgba(226, 232, 240, 0.74), rgba(100, 116, 139, 0.34) 42%, transparent 43%),
      linear-gradient(rgba(148, 163, 184, 0.36), rgba(15, 23, 42, 0.88));
    opacity: 0.68;
  }

  .about-profile-photo::after {
    content: "";
    position: absolute;
    inset: 0;
    background:
      linear-gradient(120deg, rgba(255, 255, 255, 0.2), transparent 28%),
      repeating-linear-gradient(0deg, rgba(255, 255, 255, 0.03) 0 1px, transparent 1px 4px);
    opacity: 0.45;
  }

  .about-profile-photo span {
    position: relative;
    z-index: 1;
    padding: 1.25rem;
    color: rgba(255, 255, 255, 0.92);
    font-size: 2.6rem;
    font-weight: 700;
    line-height: 1;
  }

</style>

