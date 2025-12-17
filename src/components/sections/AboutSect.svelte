<script lang="ts">
  /**
   * AboutSect Component (Home - Section 2: About Me)
   *
   * This component demonstrates an important pattern: fetching content from an API.
   *
   * What it does:
   * - Fetches "About Me" content from an Astro API endpoint
   * - Shows loading state while fetching
   * - Handles errors gracefully (falls back to local content)
   * - Re-fetches when language changes
   * - Prevents race conditions (cancels old requests)
   * - Animates in when scrolled into view
   *
   * Why fetch from API instead of importing directly?
   * - Demonstrates real-world pattern (server → client data flow)
   * - Shows how to handle async operations in Svelte
   * - Simulates what you'd do with a real backend/CMS
   *
   * Data Flow:
   * 1. User visits page
   * 2. Component mounts → subscribes to locale changes
   * 3. Locale detected → loadAbout() called
   * 4. API request sent to /api/section2 or /gr/api/section2
   * 5. Response received → UI updates with content
   * 6. If user switches language → repeat from step 3
   */

  // Import the locale store from svelte-i18n
  // This is a Svelte "store" - a reactive container for shared state
  // When locale changes, any component subscribed to it gets notified
  import { locale } from "svelte-i18n";

  // Import function to initialize i18n system
  import { setupI18n } from "../../lib/i18n/i18n";

  // Import wrapper component for scroll-in animations
  import InView from "../ui/InView.svelte";

  // Import the Locale type ("en" or "gr")
  import type { Locale } from "../../lib/i18n/messages";

  // Import local content as fallback (used if API fails)
  import { aboutContent } from "../../lib/content/about";

  // Import Svelte lifecycle hook for cleanup
  import { onDestroy } from "svelte";

  // Initialize i18n - detects language from URL
  setupI18n();

  // === TYPES ===
  // Define the shape of data this component works with
  // This helps TypeScript catch errors if data doesn't match expected format

  /**
   * AboutSectionData - The data structure for the About section
   *
   * @property title - Section heading (e.g., "About me")
   * @property paragraphs - Array of paragraph strings to display
   */
  type AboutSectionData = {
    title: string;
    highlight: string;
    paragraphs: readonly string[];
  };

  // === STATE ===
  // Component state - these variables are reactive (UI updates when they change)

  // The actual content to display (title + paragraphs)
  // Default to English content as initial fallback
  let data: AboutSectionData = aboutContent.en;

  // Track whether we're currently fetching from API
  let loading = true;

  // Store any error message that occurs during fetch
  let error: string | null = null;

  // Controller to cancel fetch requests
  // Important: prevents "race conditions" where old requests finish after new ones
  let abortController: AbortController | null = null;

  // === HELPER FUNCTIONS ===

  /**
   * toLocale - Convert svelte-i18n locale to our Locale type
   *
   * svelte-i18n stores locale as a string that could be null/undefined
   * We need to convert it to our strict "en" | "gr" type
   *
   * @param l - The locale from svelte-i18n (could be "en", "gr", "el", null, etc.)
   * @returns Either "en" or "gr" (defaults to "en" for safety)
   */
  function toLocale(l: string | null | undefined): Locale {
    // Convert to lowercase string (handle null/undefined)
    const localeStr = String(l ?? "en").toLowerCase();

    // Check if it's Greek (we accept "gr" or "el" as Greek language codes)
    // Otherwise default to English
    return localeStr === "gr" || localeStr === "el" ? "gr" : "en";
  }

  // === MAIN LOGIC ===

  /**
   * loadAbout - Fetch About section content from API
   *
   * This is an async function (returns a Promise)
   * It demonstrates several important concepts:
   * - Async/await for handling Promises
   * - Fetch API for HTTP requests
   * - AbortController for cancelling requests
   * - Error handling with try/catch
   * - State management (loading, error, data)
   *
   * @param lang - Which language to fetch ("en" or "gr")
   */
  async function loadAbout(lang: Locale) {
    // Set loading state (shows "Loading..." in UI)
    loading = true;

    // Clear any previous error
    error = null;

    // === PREVENT RACE CONDITIONS ===
    // If there's already a request in progress, cancel it
    // Why? User might switch languages quickly: EN → GR → EN
    // We only care about the latest request
    abortController?.abort();

    // Create new controller for this request
    abortController = new AbortController();

    // === BUILD API URL ===
    // Astro's i18n routing means Greek pages are under /gr/
    // So API endpoints are too: /api/section2 (EN) vs /gr/api/section2 (GR)
    const url = lang === "gr" ? "/gr/api/section2" : "/api/section2";

    try {
      // Make the HTTP request
      const res = await fetch(url, {
        // Pass the abort signal so we can cancel if needed
        signal: abortController.signal,

        // Don't cache - we want fresh data when language switches
        headers: {
          "Cache-Control": "no-store",
        },

        // Include cookies (not needed here, but good practice for auth)
        credentials: "same-origin",
      });

      // Check if request was successful (status 200-299)
      if (!res.ok) throw new Error("Failed to load About section from API");

      // Parse JSON response
      // API returns: { lang: "en", title: "...", highlight: "...", paragraphs: [...] }
      // We only need title and paragraphs
      const json = (await res.json()) as {
        title: string;
        highlight?: string;
        paragraphs: readonly string[];
      };

      // Update component state with fetched data
      // This triggers UI re-render
      data = {
        title: json.title,
        highlight: json.highlight ?? aboutContent[lang].highlight,
        paragraphs: json.paragraphs,
      };
    } catch (e) {
      // Something went wrong (network error, API down, etc.)

      // Check if error is from abort (user switched language)
      // If so, don't treat it as an error - it's expected
      if (e instanceof Error && e.name !== "AbortError") {
        // Real error occurred - use local fallback content
        data = aboutContent[lang];

        // Store error message to show user
        error = e.message;
      }
    } finally {
      // This runs whether try succeeded or catch caught an error
      // Hide loading state
      loading = false;
    }
  }

  // === REACTIVITY ===
  // Subscribe to locale changes from svelte-i18n
  // Whenever user switches language, this callback runs
  const unsubscribe = locale.subscribe((l) => {
    // l is the new locale value
    if (l) {
      // Convert to our Locale type
      const lang = toLocale(l);

      // Fetch content in new language
      // 'void' keyword means "we're not waiting for this Promise"
      // (it's an async function but we're not awaiting it here)
      void loadAbout(lang);
    }
  });

  // === CLEANUP ===
  // When component is destroyed (user navigates away), clean up
  onDestroy(() => {
    // Stop listening to locale changes (prevents memory leaks)
    unsubscribe();

    // Cancel any in-progress fetch request
    abortController?.abort();
  });
</script>

<!-- =========================================================================
  Section wrapper (Home - Section 2)
============================================================================= -->
<section id="about" class="pt-24 md:pt-28" aria-labelledby="about-title">
  <div class="mx-auto max-w-5xl px-4">
    <InView>
      <div
        class="rounded-2xl border border-teal-800 bg-teal-700/10 p-6 md:p-10"
      >
        <h2 id="about-title" class="text-2xl md:text-3xl font-bold mb-6">
          {data.title}
        </h2>
        <h1
          id="about-highlight"
          class="text-sm text-teal-100 font-medium italic mb-6"
        >
          {data.highlight}
        </h1>
        <div class="space-y-4 leading-relaxed">
          {#each data.paragraphs as p}
            <p>{p}</p>
          {/each}
        </div>

        {#if loading}
          <p class="mt-6 text-sm text-teal-200">Loading...</p>
        {:else if error}
          <p class="mt-6 text-sm text-amber-400">(Fallback) {error}</p>
        {/if}
      </div>
    </InView>
  </div>
</section>
