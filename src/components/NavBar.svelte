<script lang="ts">
  import { _ } from "svelte-i18n";
  import { setupI18n } from "../lib/i18n/i18n";
  import type { Locale } from "../lib/i18n/messages";
  import { navigate } from "astro:transitions/client";
  import { normalizePath } from "./ui/navLinks";

  type NavItem = { href: string; labelKey: string };

  type Props = {
    locale?: Locale;
    navItems?: NavItem[];
    languageSwitch?: { en: string; gr: string };
    homeHref?: string;
  };

  let {
    locale = "en",
    navItems = [],
    languageSwitch = { en: "/", gr: "/gr" },
    homeHref = "/",
  }: Props = $props();

  $effect.pre(() => {
    setupI18n(locale);
  });

  const t = _;
  let open = $state(false);
  let activePath = $state("/");
  const isBrowser = typeof window !== "undefined";

  function refreshActivePath() {
    if (typeof window === "undefined") return;
    activePath = normalizePath(window.location.pathname);
  }

  function isActiveLink(href: string) {
    return normalizePath(href) === activePath;
  }

  function setLang(l: Locale) {
    open = false;
    const target = l === "en" ? languageSwitch.en : languageSwitch.gr;
    navigate(target);
  }

  function toggle() {
    open = !open;
  }

  function close() {
    open = false;
  }

  function onKeyDown(e: KeyboardEvent) {
    if (e.key === "Escape") close();
  }

  $effect(() => {
    if (!isBrowser) return;
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  });

  $effect(() => {
    if (!isBrowser) return;

    const handleAfterSwap = () => refreshActivePath();
    const handlePageLoad = () => refreshActivePath();
    const handlePopState = () => refreshActivePath();

    refreshActivePath();
    window.addEventListener("astro:after-swap", handleAfterSwap);
    window.addEventListener("astro:page-load", handlePageLoad);
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("astro:after-swap", handleAfterSwap);
      window.removeEventListener("astro:page-load", handlePageLoad);
      window.removeEventListener("popstate", handlePopState);
    };
  });
</script>

<nav
  class="bg-[color:var(--surface)]/90 backdrop-blur fixed w-full z-10 top-0 shadow-md border-b border-white/10"
>
  <div class="max-w-5xl mx-auto flex items-center justify-between px-4 py-4">
    <a
      href={homeHref}
      class="text-white text-2xl font-semibold tracking-wide">Portfolio</a
    >

    <div class="hidden md:flex items-center gap-8">
      <ul class="flex items-center gap-8">
        {#each navItems as link}
          <li>
            <a
              href={link.href}
              class={`transition-colors duration-150 hover:text-[color:var(--accent)] ${
                isActiveLink(link.href) ? "nav-active font-semibold" : "text-white"
              }`}
              aria-current={isActiveLink(link.href) ? "page" : undefined}
            >
              {$t(link.labelKey)}
            </a>
          </li>
        {/each}
      </ul>

      <div class="flex items-center gap-2">
        <span class="text-teal-100 text-sm">{$t("nav.language")}:</span>
        <button
          type="button"
          class={`px-2 py-1 text-sm rounded border border-[color:var(--accent-weak)] transition-shadow duration-200 ${
            locale === "en"
              ? "lang-active"
              : "text-white bg-white/5 hover:bg-[color:var(--accent-glow-hover)] hover:shadow-[var(--accent-glow-hover)]"
          }`}
          onclick={() => setLang("en")}
          aria-pressed={locale === "en"}
        >
          EN
        </button>
        <button
          type="button"
          class={`px-2 py-1 text-sm rounded border border-[color:var(--accent-weak)] transition-shadow duration-200 ${
            locale === "gr"
              ? "lang-active"
              : "text-white bg-white/5 hover:bg-[color:var(--accent-glow-hover)] hover:shadow-[var(--accent-glow-hover)]"
          }`}
          onclick={() => setLang("gr")}
          aria-pressed={locale === "gr"}
        >
          GR
        </button>
      </div>
    </div>

    <button
      type="button"
      class="md:hidden inline-flex items-center justify-center rounded border border-gray-600 p-2 text-white hover:bg-gray-700"
      aria-label={$t("nav.openMenu")}
      aria-expanded={open}
      onclick={toggle}
    >
      <svg
        class="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
  </div>

  {#if open}
    <button
      type="button"
      class="fixed inset-0 bg-black/70 md:hidden z-40"
      onclick={close}
      aria-label={$t("nav.closeMenu")}
    >
      <span class="sr-only">
        {$t("nav.closeMenu")}
      </span>
    </button>

    <div
      class="fixed right-0 top-0 h-full w-[85%] max-w-sm md:hidden z-50
             bg-[color:var(--surface)]/95 backdrop-blur-md text-white border-l border-white/10 shadow-2xl"
    >
      <div
        class="flex items-center justify-between px-4 py-4 border-b border-white/10"
      >
        <span class="text-white font-semibold">Menu</span>
        <button
          type="button"
          class="rounded border border-gray-600 p-2 text-white hover:bg-white/10"
          aria-label={$t("nav.closeMenu")}
          onclick={close}
        >
          <svg
            class="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <div class="px-4 py-4 bg-[color:var(--background)]">
        <ul class="flex flex-col gap-2">
          {#each navItems as link}
            <li>
              <a
                href={link.href}
                class={`block rounded-lg px-3 py-2 hover:bg-white/10 ${
                  isActiveLink(link.href)
                    ? "nav-active-mobile font-semibold"
                    : "text-white"
                }`}
                aria-current={isActiveLink(link.href) ? "page" : undefined}
                onclick={close}
              >
                {$t(link.labelKey)}
              </a>
            </li>
          {/each}
        </ul>

        <div class="mt-6 pt-6 border-t border-white/10">
          <p class="text-gray-300 text-sm mb-3">{$t("nav.language")}:</p>
          <div class="flex gap-2">
            <button
              type="button"
              class={`flex-1 px-3 py-2 text-sm rounded border border-[color:var(--accent-weak)] transition-shadow duration-200 ${
                locale === "en"
                  ? "lang-active"
                  : "text-white bg-white/5 hover:bg-[color:var(--accent-glow)] shadow-[var(--accent-glow)] hover:shadow-[var(--accent-glow-hover)]"
              }`}
              onclick={() => setLang("en")}
              aria-pressed={locale === "en"}
            >
              EN
            </button>
            <button
              type="button"
              class={`flex-1 px-3 py-2 text-sm rounded border border-[color:var(--accent-weak)] transition-shadow duration-200 ${
                locale === "gr"
                  ? "lang-active"
                  : "text-white bg-white/5 hover:bg-[color:var(--accent-glow)] shadow-[var(--accent-glow)] hover:shadow-[var(--accent-glow-hover)]"
              }`}
              onclick={() => setLang("gr")}
              aria-pressed={locale === "gr"}
            >
              GR
            </button>
          </div>
        </div>
      </div>
    </div>
  {/if}
</nav>
