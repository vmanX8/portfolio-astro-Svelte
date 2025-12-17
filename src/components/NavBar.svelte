<script lang="ts">
  /**
   * NavBar Component
   *
   * This is the top navigation bar that appears on every page.
   * It handles:
   * - Desktop navigation menu
   * - Mobile hamburger menu (slide-out drawer)
   * - Language switching (EN/GR)
   * - Responsive design
   *
   * Key Features:
   * - Uses Astro's View Transitions for smooth page navigation
   * - Mobile menu slides in from the right
   * - Keyboard support (ESC key closes menu)
   * - Accessible (ARIA attributes, semantic HTML)
   */

  // Import the translation function and locale store from svelte-i18n
  // _ is the translation function, we rename it to 't' for clarity
  import { _, locale } from "svelte-i18n";

  // Import function to set up internationalization
  import { setupI18n } from "../lib/i18n/i18n";

  // Import the Locale type (either "en" or "gr")
  import type { Locale } from "../lib/i18n/messages";

  // Import Svelte lifecycle hook to clean up when component is destroyed
  import { onDestroy } from "svelte";

  // Import Astro's navigate function for smooth page transitions
  import { navigate } from "astro:transitions/client";

  // Initialize i18n system - detects language from URL and sets up translations
  setupI18n();

  // Create a shorthand for the translation function
  const t = _;

  // === STATE ===
  // Track whether the mobile menu is open or closed
  // This is a reactive variable - when it changes, the UI updates automatically
  let open = false;
  let currentLocale: Locale = "en";

  // Keep local copy of the current locale so links stay in the active language
  const unsubscribe = locale.subscribe((value) => {
    currentLocale = (value as Locale) ?? "en";
  });

  // === FUNCTIONS ===

  /**
   * setLang - Switch the website language
   *
   * How it works:
   * 1. Closes mobile menu if open
   * 2. Calculates the new URL with correct language prefix
   * 3. Uses Astro's navigate() to smoothly transition to new page
   *
   * Examples:
   * - If on "/about" and switch to Greek → navigate to "/gr/about"
   * - If on "/gr/projects" and switch to English → navigate to "/projects"
   *
   * @param l - The locale to switch to ("en" or "gr")
   */
  function setLang(l: Locale) {
    // Close mobile menu when language is selected
    open = false;

    // Get the current URL path (e.g., "/about" or "/gr/projects")
    const currentPath = window.location.pathname;

    // Remove any existing locale prefix (/en or /gr) from the path
    // Result: "/about" becomes "/about", "/gr/about" becomes "/about"
    const pathWithoutLocale = currentPath.replace(/^\/(en|gr)/, "") || "/";

    // Add the new locale prefix
    // English stays at root ("/about"), Greek gets /gr prefix ("/gr/about")
    const newPath =
      l === "en" ? pathWithoutLocale : `/${l}${pathWithoutLocale}`;

    // Navigate to the new URL using Astro's View Transitions
    // This provides a smooth fade animation instead of a hard page reload
    navigate(newPath);
  }

  /**
   * toggle - Open/close the mobile menu
   *
   * This function flips the 'open' state between true and false
   */
  function toggle() {
    open = !open;
  }

  /**
   * close - Close the mobile menu
   *
   * Called when:
   * - User clicks outside the menu (on backdrop)
   * - User clicks a menu link
   * - User presses ESC key
   */
  function close() {
    open = false;
  }

  /**
   * onKeyDown - Handle keyboard events
   *
   * Accessibility feature: allows users to close menu with ESC key
   * This is important for keyboard-only users
   *
   * @param e - The keyboard event
   */
  function onKeyDown(e: KeyboardEvent) {
    if (e.key === "Escape") close();
  }

  /**
   * localizedHref - build a link that preserves the current locale
   *
   * @param path - the base path (e.g., "/about")
   * @returns the path prefixed with /gr when in Greek mode
   */
  function localizedHref(path: string) {
    const prefix = currentLocale === "gr" ? "/gr" : "";
    if (path === "/") return prefix || "/";
    return `${prefix}${path}`;
  }

  // Set up global keyboard listener (only on client-side)
  // We check for 'window' because this code also runs on the server during build
  if (typeof window !== "undefined") {
    // Listen for all keyboard events on the window
    window.addEventListener("keydown", onKeyDown);

    // Clean up: remove the listener when component is destroyed
    // This prevents memory leaks
    onDestroy(() => window.removeEventListener("keydown", onKeyDown));
  }

  // Clean up the locale subscription when component is destroyed
  onDestroy(unsubscribe);
</script>

<nav
  class="bg-[color:var(--surface)]/90 backdrop-blur fixed w-full z-10 top-0 shadow-md border-b border-white/10"
>
  <div class="max-w-5xl mx-auto flex items-center justify-between px-4 py-4">
    <a
      href={localizedHref("/")}
      class="text-white text-2xl font-semibold tracking-wide">Portfolio</a
    >

    <!-- Desktop menu -->
    <div class="hidden md:flex items-center gap-8">
      <ul class="flex items-center gap-8">
        <li>
          <a
            href={localizedHref("/")}
            class="text-white hover:text-[color:var(--accent)] transition-colors duration-150"
            >{$t("nav.home")}</a
          >
        </li>
        <li>
          <a
            href={localizedHref("/about")}
            class="text-white hover:text-[color:var(--accent)] transition-colors duration-150"
            >{$t("nav.about")}</a
          >
        </li>
        <li>
          <a
            href={localizedHref("/projects")}
            class="text-white hover:text-[color:var(--accent)] transition-colors duration-150"
            >{$t("nav.projects")}</a
          >
        </li>
        <li>
          <a
            href={localizedHref("/contact")}
            class="text-white hover:text-[color:var(--accent)] transition-colors duration-150"
            >{$t("nav.contact")}</a
          >
        </li>
      </ul>

      <div class="flex items-center gap-2">
        <span class="text-teal-100 text-sm">{$t("nav.language")}:</span>
        <button
          type="button"
          class="px-2 py-1 text-sm rounded border border-[color:var(--accent-weak)] text-white bg-white/5 hover:bg-[color:var(--accent-glow-hover)] hover:shadow-[var(--accent-glow-hover)] transition-shadow duration-200"
          on:click={() => setLang("en")}
        >
          EN
        </button>
        <button
          type="button"
          class="px-2 py-1 text-sm rounded border border-[color:var(--accent-weak)] text-white bg-white/5 hover:bg-[color:var(--accent-glow-hover)] hover:shadow-[var(--accent-glow-hover)] transition-shadow duration-200"
          on:click={() => setLang("gr")}
        >
          GR
        </button>
      </div>
    </div>

    <!-- Mobile hamburger -->
    <button
      type="button"
      class="md:hidden inline-flex items-center justify-center rounded border border-gray-600 p-2 text-white hover:bg-gray-700"
      aria-label={$t("nav.openMenu")}
      aria-expanded={open}
      on:click={toggle}
    >
      <!-- icon -->
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
    <!-- Backdrop -->
    <button
      type="button"
      class="fixed inset-0 bg-black/70 md:hidden z-40"
      on:click={close}
      aria-label={$t("nav.closeMenu")}
    >
      <span class="sr-only">
        {$t("nav.closeMenu")}
      </span>
    </button>

    <!-- Slide panel -->
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
          on:click={close}
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
          <li>
            <a
              href={localizedHref("/")}
              class="block rounded-lg px-3 py-2 text-white hover:bg-white/10"
              on:click={close}
            >
              {$t("nav.home")}
            </a>
          </li>
          <li>
            <a
              href={localizedHref("/about")}
              class="block rounded-lg px-3 py-2 text-white hover:bg-white/10"
              on:click={close}
            >
              {$t("nav.about")}
            </a>
          </li>
          <li>
            <a
              href={localizedHref("/projects")}
              class="block rounded-lg px-3 py-2 text-white hover:bg-white/10"
              on:click={close}
            >
              {$t("nav.projects")}
            </a>
          </li>
          <li>
            <a
              href={localizedHref("/contact")}
              class="block rounded-lg px-3 py-2 text-white hover:bg-white/10"
              on:click={close}
            >
              {$t("nav.contact")}
            </a>
          </li>
        </ul>

        <div class="mt-6 pt-6 border-t border-white/10">
          <p class="text-gray-300 text-sm mb-3">{$t("nav.language")}:</p>
          <div class="flex gap-2">
            <button
              type="button"
              class="flex-1 px-3 py-2 text-sm rounded border border-[color:var(--accent-weak)] text-white bg-white/5 hover:bg-[color:var(--accent-glow)] shadow-[var(--accent-glow)] hover:shadow-[var(--accent-glow-hover)] transition-shadow duration-200"
              on:click={() => setLang("en")}
            >
              EN
            </button>
            <button
              type="button"
              class="flex-1 px-3 py-2 text-sm rounded border border-[color:var(--accent-weak)] text-white bg-white/5 hover:bg-[color:var(--accent-glow)] shadow-[var(--accent-glow)] hover:shadow-[var(--accent-glow-hover)] transition-shadow duration-200"
              on:click={() => setLang("gr")}
            >
              GR
            </button>
          </div>
        </div>
      </div>
    </div>
  {/if}
</nav>
