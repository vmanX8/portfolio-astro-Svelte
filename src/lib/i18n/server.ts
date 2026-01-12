/**
 * Server-side i18n helpers for Astro pages.
 */
import { messages, type Locale } from "./messages";

/**
 * tSeo - SEO strings for a locale, with English fallback.
 */
export function tSeo(locale: Locale) {
	return messages[locale]?.seo ?? messages.en.seo;
}

