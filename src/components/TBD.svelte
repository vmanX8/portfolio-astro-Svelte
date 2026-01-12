<script lang="ts">
  import { _ } from "svelte-i18n";
  import { setupI18n } from "../lib/i18n/i18n";
  import type { Locale } from "../lib/i18n/messages";

  type Props = {
    locale?: Locale;
    homeHref?: string;
    pageKey?: "about" | "projects" | "contact";
  };

  let { locale = "en", homeHref = "/", pageKey = "about" }: Props = $props();

  $effect.pre(() => {
    setupI18n(locale);
  });
  const t = _;
</script>

<section
  class="pt-28 md:pt-32 flex items-center justify-center min-h-[70vh] px-4"
>
  <div class="text-center space-y-3">
    <h1 class="text-3xl md:text-4xl font-bold">
      {$t(`pages.${pageKey}.title`)}
    </h1>
    <p class="text-teal-100">
      {$t("pages.notReady")}
    </p>
    <a
      href={homeHref}
      class="inline-block mt-2 text-[color:var(--accent)] hover:text-[color:var(--accent-glow-hover)] hover:font-semibold transition-colors"
    >
      {$t("pages.backHome")}
    </a>
  </div>
</section>
