<script lang="ts">
  import { setupI18n } from "../../lib/i18n/i18n";
  import type { Locale } from "../../lib/i18n/messages";
  import type { ContactCopy, ContactLinks } from "../../lib/content/contact";

  type Props = {
    locale?: Locale;
    copy: ContactCopy;
    links: ContactLinks;
  };

  let { locale = "en", copy, links }: Props = $props();

  $effect.pre(() => {
    setupI18n(locale);
  });

  const emailHref = $derived(`mailto:${links.email}`);

  function onSubmit(e: SubmitEvent) {
    e.preventDefault();

    const form = e.currentTarget as HTMLFormElement;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const body = [
      name ? `Name: ${name}` : "",
      email ? `Email: ${email}` : "",
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    const params = new URLSearchParams({
      subject: subject || "Portfolio contact",
      body,
    });

    window.location.href = `${emailHref}?${params.toString()}`;
  }
</script>

<section
  class="relative pt-28 pb-24 md:pt-32 md:pb-32"
  aria-labelledby="contact-page-title"
>
  <div class="section-shell">
    <div class="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
      <div class="lg:sticky lg:top-28">
        <p class="text-sm uppercase tracking-[0.32em] text-[color:var(--accent)]">
          {copy.email}
        </p>
        <h1
          id="contact-page-title"
          class="mt-4 text-3xl font-semibold leading-tight md:text-5xl"
        >
          {copy.pageTitle}
        </h1>
        <p class="mt-5 text-lg text-teal-100 leading-relaxed">
          {copy.pageSubtitle}
        </p>
        <p class="mt-4 text-slate-300 leading-relaxed">
          {copy.pageIntro}
        </p>

        <div class="mt-8 space-y-4">
          <h2 class="text-base font-semibold text-slate-100">
            {copy.methodsTitle}
          </h2>

          <div class="space-y-3">
            <a
              href={emailHref}
              class="block rounded-2xl border border-teal-800 bg-[color:var(--surface)]/55 p-4 transition hover:border-[color:var(--accent-weak)]/70 hover:bg-[color:var(--surface)]/80 focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]/60"
            >
              <span class="block text-xs uppercase tracking-[0.22em] text-slate-400">
                {copy.email}
              </span>
              <span class="mt-2 block break-words text-sm text-slate-100">
                {links.email}
              </span>
            </a>

            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
              class="block rounded-2xl border border-teal-800 bg-[color:var(--surface)]/55 p-4 transition hover:border-[color:var(--accent-weak)]/70 hover:bg-[color:var(--surface)]/80 focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]/60"
            >
              <span class="block text-xs uppercase tracking-[0.22em] text-slate-400">
                {copy.github}
              </span>
              <span class="mt-2 block text-sm text-slate-100">github.com/vmanX8</span>
            </a>

            <a
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
              class="block rounded-2xl border border-teal-800 bg-[color:var(--surface)]/55 p-4 transition hover:border-[color:var(--accent-weak)]/70 hover:bg-[color:var(--surface)]/80 focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]/60"
            >
              <span class="block text-xs uppercase tracking-[0.22em] text-slate-400">
                {copy.linkedin}
              </span>
              <span class="mt-2 block text-sm text-slate-100">Vangelis Manouhos</span>
            </a>
          </div>
        </div>
      </div>

      <div class="section-panel">
        <div class="mb-8">
          <h2 class="text-2xl font-semibold">{copy.formTitle}</h2>
          <p class="mt-3 text-sm text-slate-400">{copy.formNote}</p>
        </div>

        <form class="grid gap-4 md:grid-cols-2" onsubmit={onSubmit}>
          <div>
            <label for="contact-name" class="block text-sm mb-2">
              {copy.nameLabel}
            </label>
            <input
              id="contact-name"
              class="w-full rounded-xl border border-teal-800 bg-[color:var(--surface)] px-4 py-3 placeholder:text-teal-700 focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]/60"
              type="text"
              name="name"
              autocomplete="name"
              placeholder={copy.namePlaceholder}
            />
          </div>

          <div>
            <label for="contact-email" class="block text-sm mb-2">
              {copy.emailLabel}
            </label>
            <input
              id="contact-email"
              class="w-full rounded-xl border border-teal-800 bg-[color:var(--surface)] px-4 py-3 placeholder:text-teal-700 focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]/60"
              type="email"
              name="email"
              autocomplete="email"
              placeholder={copy.emailPlaceholder}
            />
          </div>

          <div class="md:col-span-2">
            <label for="contact-subject" class="block text-sm mb-2">
              {copy.subjectLabel}
            </label>
            <input
              id="contact-subject"
              class="w-full rounded-xl border border-teal-800 bg-[color:var(--surface)] px-4 py-3 placeholder:text-teal-700 focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]/60"
              type="text"
              name="subject"
              autocomplete="off"
              placeholder={copy.subjectPlaceholder}
            />
          </div>

          <div class="md:col-span-2">
            <label for="contact-message" class="block text-sm mb-2">
              {copy.messageLabel}
            </label>
            <textarea
              id="contact-message"
              class="min-h-[170px] w-full rounded-xl border border-teal-800 bg-[color:var(--surface)] px-4 py-3 placeholder:text-teal-500 focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]/60"
              name="message"
              placeholder={copy.messagePlaceholder}
            ></textarea>
          </div>

          <div class="md:col-span-2 flex justify-end pt-2">
            <button
              type="submit"
              class="modal-cta demo inline-flex items-center justify-center border border-[color:var(--accent-weak)] px-6 py-3 text-sm text-[color:var(--accent)] focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]/60"
            >
              {copy.submit}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
