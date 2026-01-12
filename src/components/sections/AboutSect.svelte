<script lang="ts">
  import { setupI18n } from "../../lib/i18n/i18n";
  import InView from "../ui/InView.svelte";
  import type { Locale } from "../../lib/i18n/messages";
  import { aboutContent } from "../../lib/content/about";

  type Props = {
    locale?: Locale;
  };

  let { locale = "en" }: Props = $props();

  $effect.pre(() => {
    setupI18n(locale);
  });

  type AboutSectionData = {
    title: string;
    highlight: string;
    paragraphs: readonly string[];
  };

  let data = $state<AboutSectionData>(aboutContent.en);
  let loading = $state(true);
  let error = $state<string | null>(null);
  let abortController: AbortController | null = null;

  async function loadAbout(lang: Locale) {
    loading = true;
    error = null;
    abortController?.abort();
    abortController = new AbortController();

    const url = `/api/section2/lang?lang=${lang}`;

    try {
      const res = await fetch(url, {
        signal: abortController.signal,
        headers: {
          "Cache-Control": "no-store",
        },
        credentials: "same-origin",
      });

      if (!res.ok) throw new Error("Failed to load About section from API");

      const json = (await res.json()) as {
        title: string;
        highlight?: string;
        paragraphs: readonly string[];
      };

      data = {
        title: json.title,
        highlight: json.highlight ?? aboutContent[lang].highlight,
        paragraphs: json.paragraphs,
      };
    } catch (e) {
      if (e instanceof Error && e.name !== "AbortError") {
        data = aboutContent[lang];
        error = e.message;
      }
    } finally {
      loading = false;
    }
  }

  $effect(() => {
    if (!locale) return;
    void loadAbout(locale);
  });

  $effect(() => {
    return () => {
      abortController?.abort();
    };
  });
</script>

<section id="about" class="section-spacing" aria-labelledby="about-title">
  <div class="section-shell">
    <InView>
      <div class="section-panel">
        <h2 id="about-title" class="text-2xl md:text-3xl font-bold mb-6">
          {data.title}
        </h2>
        <p
          id="about-highlight"
          class="text-sm text-teal-100 font-medium italic mb-6"
        >
          {data.highlight}
        </p>
        <div class="space-y-4 leading-relaxed">
          {#each data.paragraphs as p}
            <p>{p}</p>
          {/each}
        </div>

        {#if loading}
          <p class="mt-6 text-sm text-teal-200">Loading...</p>
        {:else if error}
          <p class="mt-6 text-sm text-amber-400">(Fallback) {error}</p>
        {/if}
      </div>
    </InView>
  </div>
</section>
