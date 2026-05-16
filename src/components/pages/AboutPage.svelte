<script lang="ts">
  import { setupI18n } from "../../lib/i18n/i18n";
  import type { Locale } from "../../lib/i18n/messages";
  import {
    aboutPageContent,
    type AboutPageCopy,
  } from "../../lib/content/about/index";
  import type { CurrentFocus } from "../../lib/content/about/currentFocus";
  import type { Toolkit } from "../../lib/content/about/toolkit";
  import InView from "../ui/InView.svelte";

  type Props = {
    locale?: Locale;
    copy?: AboutPageCopy;
    currentFocus?: CurrentFocus;
    toolkit?: Toolkit;
    profileImage?: string;
  };

  let {
    locale = "en",
    copy: copyProp,
    currentFocus,
    toolkit,
    profileImage,
  }: Props = $props();

  $effect.pre(() => {
    setupI18n(locale);
  });

  const lang = $derived(locale === "gr" ? "gr" : "en");
  const pageCopy = $derived(copyProp ?? aboutPageContent[lang]);
  const contactHref = $derived(lang === "gr" ? "/gr/contact" : "/contact");
</script>

<div class="relative overflow-hidden">
  <section class="relative pt-28 md:pt-32" aria-labelledby="about-page-title">
    <div
      class="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--accent)]/50 to-transparent"
    ></div>

    <div class="section-shell">
      <InView initialShown>
        <div class="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div class="space-y-6">
            <p
              class="text-sm uppercase tracking-[0.35em] text-[color:var(--accent)]"
            >
              {pageCopy.eyebrow}
            </p>

            <h1
              id="about-page-title"
              class="max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl"
            >
              {pageCopy.title}
            </h1>

            {#each pageCopy.intro as paragraph, index}
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
            class="about-profile-card mb-8"
            aria-label={pageCopy.profile.summary}
          >
            <div class="about-profile-photo mb-8">
              <picture>
                <source
                  type="image/webp"
                  srcset="/images/profile-384.webp 384w, /images/profile-640.webp 640w"
                  sizes="(min-width: 1024px) 360px, calc(100vw - 4rem)"
                />
                <img
                  src={profileImage ?? "/images/profile-640.webp"}
                  alt="Vangelis Manouhos"
                  width="640"
                  height="640"
                  loading="eager"
                  fetchpriority="high"
                  decoding="async"
                  class="absolute inset-0 h-full w-full object-cover"
                />
              </picture>
            </div>

            <div class="mb-8 flex items-center gap-4">
              <div>
                <p
                  class="text-sm uppercase tracking-[0.25em] text-emerald-100/45"
                >
                  {pageCopy.profile.role}
                </p>
                <p class="mt-1 text-slate-200">{pageCopy.profile.summary}</p>
              </div>
            </div>

            <div
              class="space-y-4 border-t border-[color:var(--accent-weak)]/40 pt-6"
            >
              <div class="flex items-center justify-between gap-4">
                <span class="text-sm text-emerald-100/45">
                  {pageCopy.profile.focusLabel}
                </span>
                <span class="text-sm text-slate-100">
                  {pageCopy.profile.focus}
                </span>
              </div>
              <div class="flex items-center justify-between gap-4">
                <span class="text-sm text-emerald-100/45">
                  {pageCopy.profile.approachLabel}
                </span>
                <span class="text-sm text-slate-100">
                  {pageCopy.profile.approach}
                </span>
              </div>
              <div class="flex items-center justify-between gap-4">
                <span class="text-sm text-emerald-100/45">
                  {pageCopy.profile.stackLabel}
                </span>
                <span class="text-sm text-slate-100">
                  {pageCopy.profile.stack}
                </span>
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
        <div
          class="grid gap-8 border-y border-[color:var(--accent-weak)]/35 py-10 md:grid-cols-[0.35fr_1fr]"
        >
          <p
            class="text-sm uppercase tracking-[0.3em] text-[color:var(--accent)]"
          >
            {pageCopy.story.eyebrow}
          </p>

          <div class="space-y-5">
            <h2 id="story-title" class="text-2xl font-semibold md:text-3xl">
              {pageCopy.story.title}
            </h2>
            {#each pageCopy.story.paragraphs as paragraph}
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
          <p
            class="text-sm uppercase tracking-[0.3em] text-[color:var(--accent)]"
          >
            {pageCopy.building.eyebrow}
          </p>
          <h2 id="build-title" class="mt-3 text-2xl font-semibold md:text-3xl">
            {pageCopy.building.title}
          </h2>
          <p class="mt-4 leading-8 text-slate-300">{pageCopy.building.intro}</p>
        </div>

        <div class="grid gap-5 md:grid-cols-2">
          {#each pageCopy.building.cards as card}
            <article
              class="rounded-2xl border border-[color:var(--accent-weak)]/60 bg-[color:var(--surface)]/45 p-6 shadow-sm backdrop-blur-sm transition duration-200 hover:-translate-y-1 hover:border-[color:var(--accent)]/30 hover:bg-[color:var(--surface)]/72 hover:shadow-xl"
            >
              <h3 class="text-lg font-semibold text-slate-50">{card.title}</h3>
              <p class="mt-3 leading-7 text-slate-300">{card.text}</p>
            </article>
          {/each}
        </div>

        <p class="mt-6 max-w-3xl leading-8 text-slate-300">
          {pageCopy.building.note}
        </p>
      </InView>
    </div>
  </section>

  <section class="about-section section-spacing" aria-labelledby="work-title">
    <div class="section-shell">
      <InView>
        <div class="grid gap-8 md:grid-cols-[0.35fr_1fr]">
          <p
            class="text-sm uppercase tracking-[0.3em] text-[color:var(--accent)]"
          >
            {pageCopy.work.eyebrow}
          </p>

          <div class="space-y-5">
            <h2 id="work-title" class="text-2xl font-semibold md:text-3xl">
              {pageCopy.work.title}
            </h2>
            <p class="leading-8 text-slate-300">{pageCopy.work.intro}</p>
            <ul class="grid gap-3 sm:grid-cols-2">
              {#each pageCopy.work.points as point}
                <li
                  class="rounded-xl border border-[color:var(--accent-weak)]/55 bg-[color:var(--surface)]/45 px-4 py-3 text-sm text-slate-200 backdrop-blur-sm transition hover:border-[color:var(--accent)]/30 hover:bg-[color:var(--surface)]/65"
                >
                  {point}
                </li>
              {/each}
            </ul>
            <p class="leading-8 text-slate-300">{pageCopy.work.closing}</p>
          </div>
        </div>
      </InView>
    </div>
  </section>

  <section class="about-section section-spacing" aria-labelledby="focus-title">
    <div class="section-shell">
      <InView>
        <div class="about-panel">
          <div class="grid gap-6 md:grid-cols-[0.35fr_1fr]">
            <div>
              <p
                class="text-sm uppercase tracking-[0.3em] text-[color:var(--accent)]"
              >
                {pageCopy.focus.eyebrow}
              </p>
              <h2
                id="focus-title"
                class="mt-3 text-2xl font-semibold md:text-3xl"
              >
                {currentFocus?.title ?? pageCopy.focus.title}
              </h2>
              <p
                class="mt-3 text-xs uppercase tracking-[0.2em] text-emerald-100/35"
              >
                SSR content panel
              </p>
            </div>

            <div class="space-y-4">
              <p class="leading-8 text-slate-300">
                {currentFocus?.summary ?? pageCopy.focus.paragraphs[0]}
              </p>

              <ul class="grid gap-3 sm:grid-cols-2">
                {#each currentFocus?.items ?? pageCopy.focus.paragraphs as item}
                  <li
                    class="rounded-xl border border-[color:var(--accent-weak)]/55 bg-[color:var(--surface)]/45 px-4 py-3 text-sm leading-6 text-slate-200 backdrop-blur-sm transition hover:border-[color:var(--accent)]/30 hover:bg-[color:var(--surface)]/65"
                  >
                    {item}
                  </li>
                {/each}
              </ul>

              {#if currentFocus}
                <p
                  class="text-xs uppercase tracking-[0.2em] text-emerald-100/35"
                >
                  Updated {currentFocus.updatedAt}
                </p>
              {/if}
            </div>
          </div>
        </div>
      </InView>
    </div>
  </section>

  <section
    class="about-section section-spacing"
    aria-labelledby="toolkit-title"
  >
    <div class="section-shell">
      <InView>
        <div class="grid gap-8 md:grid-cols-[0.35fr_1fr]">
          <div>
            <p
              class="text-sm uppercase tracking-[0.3em] text-[color:var(--accent)]"
            >
              Toolkit
            </p>
            <h2
              id="toolkit-title"
              class="mt-3 text-2xl font-semibold md:text-3xl"
            >
              {toolkit?.title ?? "Stack"}
            </h2>
          </div>

          <div class="space-y-4">
            <div
              class="flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-emerald-100/35"
            >
              <span>SSR content panel</span>
              {#if toolkit}
                <span class="h-px flex-1 bg-[color:var(--accent-weak)]/30"
                ></span>
                <span>Updated {toolkit.updatedAt}</span>
              {/if}
            </div>

            <div class="flex flex-wrap gap-3">
              {#each toolkit?.items ?? [] as item}
                <span
                  class="rounded-full border border-[color:var(--accent-weak)]/55 bg-[color:var(--surface)]/50 px-4 py-2 text-sm text-slate-200 transition hover:border-[color:var(--accent)]/30 hover:bg-[color:var(--accent)]/10 hover:text-white"
                >
                  {item}
                </span>
              {/each}
            </div>
          </div>
        </div>
      </InView>
    </div>
  </section>

  <section
    class="about-section section-spacing pb-24"
    aria-labelledby="beyond-title"
  >
    <div class="section-shell">
      <InView>
        <div class="space-y-10">
          <div class="grid gap-8 md:grid-cols-[0.35fr_1fr]">
            <p
              class="text-sm uppercase tracking-[0.3em] text-[color:var(--accent)]"
            >
              {pageCopy.beyond.eyebrow}
            </p>

            <div>
              <h2 id="beyond-title" class="text-2xl font-semibold md:text-3xl">
                {pageCopy.beyond.title}
              </h2>
              <p class="mt-4 leading-8 text-slate-300">
                {pageCopy.beyond.text}
              </p>
            </div>
          </div>

          <div class="about-panel bg-[color:var(--surface)]/65">
            <div
              class="flex flex-col gap-5 md:flex-row md:items-center md:justify-between"
            >
              <div>
                <p
                  class="text-sm uppercase tracking-[0.3em] text-[color:var(--accent)]"
                >
                  {pageCopy.cta.eyebrow}
                </p>
                <p class="mt-3 max-w-2xl leading-8 text-slate-300">
                  {pageCopy.cta.text}
                </p>
              </div>

              <a
                href={contactHref}
                class="inline-flex items-center justify-center rounded-full border border-[color:var(--accent-weak)] bg-white/5 px-6 py-3 text-sm font-medium text-white shadow-[var(--accent-glow)] transition hover:bg-[color:var(--accent-weak)] hover:shadow-[var(--accent-glow-hover)] focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]/60"
              >
                {pageCopy.cta.button}
              </a>
            </div>
          </div>
        </div>
      </InView>
    </div>
  </section>
</div>
