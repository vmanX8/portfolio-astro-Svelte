<script lang="ts">
  import { _ } from "svelte-i18n";
  import { setupI18n } from "../lib/i18n/i18n";
  import type { Locale } from "../lib/i18n/messages";

  type Props = {
    locale?: Locale;
    links?: Array<{ href: string; labelKey: string }>;
  };

  let { locale = "en", links = [] }: Props = $props();

  $effect.pre(() => {
    setupI18n(locale);
  });
  const t = _;

  const year = new Date().getFullYear();
</script>

<footer class="border-t border-white/10 bg-[color:var(--surface)] text-white">
  <div
    class="max-w-5xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-teal-100"
  >
    <p>
      &copy; {year}
      {$t("footer.name")}. {$t("footer.rights")}
    </p>

    <div class="flex gap-4">
      {#each links as link}
        <a
          href={link.href}
          class="hover:text-[color:var(--accent)] transition-colors"
        >
          {$t(link.labelKey)}
        </a>
      {/each}
    </div>
  </div>
</footer>
