/**
 * i18n Server Utilities
 *
 * This file provides internationalization helpers for server-side code (Astro pages).
 *
 * Why separate from i18n.ts?
 * - i18n.ts uses svelte-i18n (client-side only)
 * - This file provides simple helpers for Astro (server-side)
 * - Astro pages need translations for SEO meta tags before sending HTML to browser
 *
 * Use this when:
 * - You're in an Astro .astro file (server-side)
 * - You need SEO translations (page titles, descriptions)
 * - You're setting up <head> tags
 *
 * Do NOT use this when:
 * - You're in a Svelte component (use svelte-i18n instead)
 * - You need reactive translations (use $t() instead)
 */

// Import translation messages and Locale type
import { messages, type Locale } from "./messages";

/**
 * tSeo - Get SEO translations for a given locale
 *
 * This is a simple helper function for Astro pages to get SEO translations.
 *
 * How it works:
 * 1. Takes a locale ("en" or "gr")
 * 2. Returns the seo object for that language
 * 3. Falls back to English if something goes wrong (safety net)
 *
 * The ?. (optional chaining) and ?? (nullish coalescing) operators
 * protect against errors if locale is invalid.
 *
 * Usage in Astro pages:
 * ```astro
 * ---
 * import { tSeo } from "../lib/i18n/server";
 * const lang = Astro.currentLocale || "en";
 * const seo = tSeo(lang);
 * ---
 * <title>{seo.homeTitle}</title>
 * <meta name="description" content={seo.homeDescription} />
 * ```
 *
 * @param locale - The language to get translations for ("en" or "gr")
 * @returns The SEO translations object with title, description, etc.
 */
export function tSeo(locale: Locale) {
	// Get SEO translations for the requested locale
	// If locale is invalid, fall back to English
	return messages[locale]?.seo ?? messages.en.seo;
}

