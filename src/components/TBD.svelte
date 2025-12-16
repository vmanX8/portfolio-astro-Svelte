<script lang="ts">
  import { _ } from "svelte-i18n";
  import { setupI18n } from "../lib/i18n/i18n";
  import { language, toLocalizedPath } from "../lib/languageStore";

  setupI18n();
  const t = _;

  export let pageKey: "about" | "projects" | "contact" = "about";

  // Localized "back home" link
  $: homeHref = toLocalizedPath("/", $language);
</script>

<section
  class="pt-28 md:pt-32 flex items-center justify-center min-h-[70vh] px-4"
>
  <div class="text-center space-y-3">
    <h1 class="text-3xl md:text-4xl font-bold">
      {$t(`pages.${pageKey}.title`)}
    </h1>
    <p class="text-slate-300">
      {$t("pages.notReady")}
    </p>
    <a href={homeHref} class="inline-block mt-2 text-sky-300 hover:underline">
      {$t("pages.backHome")}
    </a>
  </div>
</section>
