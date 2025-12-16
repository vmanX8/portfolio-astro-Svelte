/**
 * i18n Setup (Client-Side Internationalization)
 *
 * This file sets up the svelte-i18n library for client-side translations.
 *
 * What is i18n?
 * - "i18n" stands for "internationalization" (18 letters between 'i' and 'n')
 * - It's the process of making apps work in multiple languages
 *
 * How it works:
 * 1. Detect language from URL (/ = English, /gr = Greek)
 * 2. Load translation messages for that language
 * 3. Initialize svelte-i18n with current language
 * 4. Components can now use $t("key") to get translated text
 *
 * When to call setupI18n():
 * - Every Svelte component that uses translations should call this
 * - It's safe to call multiple times (only initializes once)
 * - On subsequent calls, it just updates the language
 *
 * Integration with Astro:
 * - Astro handles routing (/gr/ for Greek pages)
 * - This file detects language from URL
 * - svelte-i18n handles UI text translations
 */

// Import functions from svelte-i18n library
import { addMessages, init, locale } from 'svelte-i18n';

// Import our translation messages and Locale type
import { messages, type Locale } from './messages';

// === STATE ===
// Track whether svelte-i18n has been initialized
// We only want to call init() once, then just update locale on navigation
let initialized = false;

// === HELPER FUNCTIONS ===

/**
 * getLocaleFromPath - Detect language from current URL
 *
 * How it works:
 * - Check if URL starts with /gr → Greek
 * - Otherwise → English (default)
 *
 * Examples:
 * - URL: "http://localhost:4321/" → "en"
 * - URL: "http://localhost:4321/about" → "en"
 * - URL: "http://localhost:4321/gr/" → "gr"
 * - URL: "http://localhost:4321/gr/about" → "gr"
 *
 * Why check for 'window'?
 * - This code runs both on server (during build) and client (in browser)
 * - window.location only exists in browser
 * - If on server, default to English
 *
 * @returns The detected locale ("en" or "gr")
 */
function getLocaleFromPath(): Locale {
  // Check if we're running in a browser (not server-side build)
  if (typeof window === 'undefined') return 'en';

  // Get current URL path (e.g., "/gr/about")
  const path = window.location.pathname;

  // Check if path starts with "/gr"
  // Examples: "/gr", "/gr/", "/gr/about" all return true
  return path.startsWith('/gr') ? 'gr' : 'en';
}

// === MAIN FUNCTION ===

/**
 * setupI18n - Initialize or update the i18n system
 *
 * Call this in every component that uses translations.
 * It's safe to call multiple times - it handles initialization correctly.
 *
 * First time called:
 * 1. Loads translation messages (English and Greek)
 * 2. Initializes svelte-i18n
 * 3. Sets current language based on URL
 *
 * Subsequent times called:
 * 1. Detects current language from URL
 * 2. Updates the locale store
 * 3. All subscribed components re-render with new language
 *
 * Why this approach?
 * - Astro handles routing and page navigation
 * - When user switches language, Astro navigates to new URL
 * - Components re-render and call setupI18n() again
 * - This function detects new language from URL and updates
 *
 * Usage in components:
 * ```svelte
 * <script>
 *   import { _ } from "svelte-i18n";
 *   import { setupI18n } from "../lib/i18n/i18n";
 *
 *   setupI18n();
 *   const t = _;
 *
 *   // Now you can use $t("key") in your template
 * </script>
 * ```
 */
export function setupI18n() {
  // Step 1: Detect current language from URL
  const currentLocale = getLocaleFromPath();

  // Step 2: Check if this is first time or subsequent call
  if (!initialized) {
    // === FIRST TIME INITIALIZATION ===

    // Load English translations into svelte-i18n
    // This makes them available when locale is "en"
    addMessages('en', messages.en);

    // Load Greek translations into svelte-i18n
    // This makes them available when locale is "gr"
    addMessages('gr', messages.gr);

    // Initialize svelte-i18n library
    init({
      // If a translation key is missing, fall back to English
      fallbackLocale: 'en',

      // Set the starting language based on URL
      initialLocale: currentLocale,
    });

    // Mark as initialized so we don't run this block again
    initialized = true;

  } else {
    // === ALREADY INITIALIZED - JUST UPDATE LANGUAGE ===

    // Update the locale store with current language from URL
    // This triggers reactivity in all components using $locale or $t()
    // All subscribed components will re-render with new language
    locale.set(currentLocale);
  }
}
