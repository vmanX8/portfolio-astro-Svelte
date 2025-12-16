<script lang="ts">
  import { _ } from "svelte-i18n";
  import { setupI18n } from "../lib/i18n/i18n";
  import { language, toLocalizedPath } from "../lib/languageStore";

  setupI18n();
  const t = _;
  const year = new Date().getFullYear();

  // Localized hrefs recompute when the language store changes
  $: currentLang = $language;
  $: homeHref = toLocalizedPath("/", currentLang);
  $: aboutHref = toLocalizedPath("/about", currentLang);
  $: projectsHref = toLocalizedPath("/projects", currentLang);
  $: contactHref = toLocalizedPath("/contact", currentLang);
</script>

<footer class="border-t border-white/10 bg-[#130a27]">
  <div
    class="max-w-5xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-300"
  >
    <p>
      &copy; {year}
      {$t("footer.name")}. {$t("footer.rights")}
    </p>

    <div class="flex gap-4">
      <a href={homeHref} class="hover:text-sky-400 transition"
        >{$t("footer.home")}</a
      >
      <a href={aboutHref} class="hover:text-sky-400 transition"
        >{$t("footer.about")}</a
      >
      <a href={projectsHref} class="hover:text-sky-400 transition"
        >{$t("footer.projects")}</a
      >
      <a href={contactHref} class="hover:text-sky-400 transition"
        >{$t("footer.contact")}</a
      >
    </div>
  </div>
</footer>
