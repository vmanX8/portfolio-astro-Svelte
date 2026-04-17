<script lang="ts">
  import { setupI18n } from "../../lib/i18n/i18n";
  import InView from "../ui/InView.svelte";
  import type { Locale } from "../../lib/i18n/messages";
  import { aboutContent } from "../../lib/content/about/index";

  type Props = {
    locale?: Locale;
    data?: AboutSectionData;
  };

  type AboutSectionData = {
    title: string;
    highlight: string;
    paragraphs: readonly string[];
  };

  let { locale = "en", data: dataProp }: Props = $props();

  $effect.pre(() => {
    setupI18n(locale);
  });

  const lang = $derived(locale === "gr" ? "gr" : "en");
  const data = $derived(dataProp ?? aboutContent[lang]);
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
      </div>
    </InView>
  </div>
</section>
