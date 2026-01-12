<script lang="ts">
  import { _ } from "svelte-i18n";
  import { setupI18n } from "../../lib/i18n/i18n";
  import type { Locale } from "../../lib/i18n/messages";
  import InView from "../ui/InView.svelte";

  type Props = {
    locale?: Locale;
  };

  let { locale = "en" }: Props = $props();

  $effect.pre(() => {
    setupI18n(locale);
  });
  const t = _;

  function onSubmit(e: SubmitEvent) {
    e.preventDefault();
  }
</script>

<section
  id="contact"
  class="section-spacing pb-24"
  aria-labelledby="contact-title"
>
  <div class="section-shell">
    <InView>
      <div class="section-panel">
        <h2 id="contact-title" class="text-2xl md:text-3xl font-semibold">
          {$t("contactSection.title")}
        </h2>
        <p class="text-sm text-teal-100 font-medium italic mb-6 mt-6">
          {$t("contactSection.subtitle")}
          <span class="ml-1 text-sm text-slate-400 not-italic font-normal">
            (UI only - no backend connected)</span
          >
        </p>

        <form class="mt-8 grid gap-4 md:grid-cols-2" onsubmit={onSubmit}>
          <div class="md:col-span-1">
            <label for="contact-name" class="block text-sm mb-2">
              {$t("contactSection.nameLabel")}
            </label>
            <input
              id="contact-name"
              class="form-control"
              type="text"
              name="name"
              autocomplete="name"
              placeholder={$t("contactSection.namePlaceholder")}
            />
          </div>

          <div class="md:col-span-1">
            <label for="contact-email" class="block text-sm mb-2">
              {$t("contactSection.emailLabel")}
            </label>
            <input
              id="contact-email"
              class="form-control"
              type="email"
              name="email"
              autocomplete="email"
              placeholder={$t("contactSection.emailPlaceholder")}
            />
          </div>

          <div class="md:col-span-2">
            <label for="contact-subject" class="block text-sm mb-2">
              {$t("contactSection.subjectLabel")}
            </label>
            <input
              id="contact-subject"
              class="form-control"
              type="text"
              name="subject"
              autocomplete="off"
              placeholder={$t("contactSection.subjectPlaceholder")}
            />
          </div>

          <div class="md:col-span-2">
            <label for="contact-message" class="block text-sm mb-2">
              {$t("contactSection.messageLabel")}
            </label>
            <textarea
              id="contact-message"
              class="form-control form-textarea"
              name="message"
              placeholder={$t("contactSection.messagePlaceholder")}
            ></textarea>
          </div>

          <div
            class="md:col-span-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-2"
          >
            <p class="text-sm text-teal-300"></p>

            <button
              type="submit"
              class="rounded-full border border-[color:var(--accent-weak)] px-6 py-3 text-sm font-medium text-white bg-white/5 hover:bg-[color:var(--accent-weak)] focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]/60 transition"
            >
              {$t("contactSection.submit")}
            </button>
          </div>
        </form>
      </div>
    </InView>
  </div>
</section>
