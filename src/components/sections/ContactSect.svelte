<script lang="ts">
  import { setupI18n } from "../../lib/i18n/i18n";
  import type { Locale } from "../../lib/i18n/messages";
  import {
    contactCopy,
    contactLinks,
    type ContactCopy,
    type ContactLinks,
  } from "../../lib/content/contact";
  import InView from "../ui/InView.svelte";

  type Props = {
    locale?: Locale;
    copy?: ContactCopy;
    links?: ContactLinks;
    contactHref?: string;
  };

  let {
    locale = "en",
    copy: copyProp,
    links: linksProp,
    contactHref: contactHrefProp,
  }: Props = $props();

  $effect.pre(() => {
    setupI18n(locale);
  });

  const lang = $derived(locale === "gr" ? "gr" : "en");
  const copy = $derived(copyProp ?? contactCopy[lang]);
  const links = $derived(linksProp ?? contactLinks);
  const contactHref = $derived(
    contactHrefProp ?? (lang === "gr" ? "/gr/contact" : "/contact"),
  );
  const emailHref = $derived(`mailto:${links.email}`);
</script>

<section
  id="contact"
  class="section-spacing pb-24"
  aria-labelledby="contact-title"
>
  <div class="section-shell">
    <InView>
      <div>
        <div class="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div class="space-y-5">
            <h2 id="contact-title" class="max-w-2xl text-3xl font-semibold leading-tight md:text-4xl">
              {copy.homeTitle}
            </h2>

            <p class="max-w-xl leading-8 text-slate-300">
              {copy.homeSubtitle}
            </p>
          </div>

          <div class="flex flex-col items-center gap-4">
            <a
              href={contactHref}
              class="inline-flex w-fit items-center justify-center rounded-full border border-[color:var(--accent-weak)] bg-[color:var(--surface)]/55 px-5 py-2.5 text-sm font-medium text-white shadow-[var(--accent-glow)] transition hover:bg-[color:var(--accent)]/12 hover:shadow-[var(--accent-glow-hover)] focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]/60"
            >
              {copy.openContact}
            </a>

            <div class="flex items-center justify-center gap-3">
              <a
                href={emailHref}
                class="modal-cta inline-flex h-12 w-12 items-center justify-center border border-[color:var(--accent-weak)]/55 bg-[color:var(--surface)]/45 text-slate-200 transition hover:border-[color:var(--accent)]/30 hover:bg-[color:var(--surface)]/65 hover:text-[color:var(--accent)] focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]/60"
                aria-label={copy.email}
                title={copy.email}
              >
                <svg
                  aria-hidden="true"
                  class="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M4 6h16v12H4z" />
                  <path d="m4 7 8 6 8-6" />
                </svg>
              </a>

              <a
                href={links.github}
                target="_blank"
                rel="noreferrer"
                class="modal-cta inline-flex h-12 w-12 items-center justify-center border border-[color:var(--accent-weak)]/55 bg-[color:var(--surface)]/45 text-slate-200 transition hover:border-[color:var(--accent)]/30 hover:bg-[color:var(--surface)]/65 hover:text-[color:var(--accent)] focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]/60"
                aria-label={copy.github}
                title={copy.github}
              >
                <svg
                  aria-hidden="true"
                  class="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 2C6.48 2 2 6.58 2 12.22c0 4.52 2.86 8.35 6.84 9.7.5.1.68-.22.68-.49v-1.9c-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.56 2.36 1.11 2.93.85.09-.67.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.05 0-1.11.39-2.03 1.03-2.74-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.04A9.29 9.29 0 0 1 12 6.95c.85 0 1.7.12 2.5.34 1.9-1.32 2.74-1.04 2.74-1.04.55 1.4.2 2.44.1 2.7.64.71 1.03 1.63 1.03 2.74 0 3.92-2.34 4.79-4.57 5.04.36.32.68.95.68 1.92v2.78c0 .27.18.59.69.49A10.17 10.17 0 0 0 22 12.22C22 6.58 17.52 2 12 2Z"
                  />
                </svg>
              </a>

              <a
                href={links.linkedin}
                target="_blank"
                rel="noreferrer"
                class="modal-cta inline-flex h-12 w-12 items-center justify-center border border-[color:var(--accent-weak)]/55 bg-[color:var(--surface)]/45 text-slate-200 transition hover:border-[color:var(--accent)]/30 hover:bg-[color:var(--surface)]/65 hover:text-[color:var(--accent)] focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]/60"
                aria-label={copy.linkedin}
                title={copy.linkedin}
              >
                <span aria-hidden="true" class="text-base font-bold leading-none">
                  in
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </InView>
  </div>
</section>
