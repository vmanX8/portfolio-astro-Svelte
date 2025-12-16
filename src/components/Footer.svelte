<script lang="ts">
  import { _ } from "svelte-i18n";
  import { setupI18n } from "../lib/i18n/i18n";

  setupI18n();
  const t = _;

  const year = new Date().getFullYear();
</script>

<footer class="border-t border-white/10 [color:var(--surface)]">
  <div
    class="max-w-5xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400"
  >
    <p>
      &copy; {year}
      {$t("footer.name")}. {$t("footer.rights")}
    </p>

    <div class="flex gap-4">
      <a href="/" class="hover:text-[color:var(--accent)] transition-colors">
        {$t("footer.home")}
      </a>
      <a
        href="/about"
        class="hover:text-[color:var(--accent)] transition-colors"
      >
        {$t("footer.about")}
      </a>
      <a
        href="/projects"
        class="hover:text-[color:var(--accent)] transition-colors"
      >
        {$t("footer.projects")}
      </a>
      <a
        href="/contact"
        class="hover:text-[color:var(--accent)] transition-colors"
      >
        {$t("footer.contact")}
      </a>
    </div>
  </div>
</footer>
