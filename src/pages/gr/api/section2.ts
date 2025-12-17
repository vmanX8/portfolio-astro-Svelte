/**
 * API Route: About Section (Greek)
 *
 * This is the Greek version of the About section API endpoint.
 * URL: /gr/api/section2
 *
 * This file is identical to /api/section2.ts except for location.
 * Astro's i18n system automatically routes Greek requests here.
 *
 * Why duplicate the file?
 * - Astro's i18n routing requires locale-specific file structure
 * - Files in /gr/ folder are for Greek locale
 * - Files in root are for default (English) locale
 *
 * How routing works:
 * - User on English page (/about) → fetch("/api/section2") → This gets routed to /api/section2.ts
 * - User on Greek page (/gr/about) → fetch("/gr/api/section2") → This gets routed HERE
 *
 * The code is the same, just the fallback locale changes to "gr".
 */

import type { APIRoute } from "astro";
import { aboutContent } from "../../../lib/content/about";
import type { Locale } from "../../../lib/i18n/messages";

/**
 * GET - Handle GET requests to /gr/api/section2
 *
 * @param currentLocale - The locale from Astro's i18n system (should be "gr")
 * @returns JSON response with Greek About section content
 */
export const GET: APIRoute = async ({ currentLocale }) => {
	// Get current language from Astro's i18n system
	// For this Greek endpoint, it will be "gr"
	// We cast to our Locale type and provide "gr" as fallback
	const lang = (currentLocale as Locale) || "gr";

	// Build the response payload
	// Same structure as English endpoint
	const payload = {
		lang,
		title: aboutContent[lang].title,
		highlight: aboutContent[lang].highlight,
		paragraphs: aboutContent[lang].paragraphs,
	};

	// Return HTTP response with JSON data
	return new Response(JSON.stringify(payload), {
		status: 200,
		headers: {
			// UTF-8 encoding is especially important for Greek characters
			"Content-Type": "application/json; charset=utf-8",

			// Don't cache - we want fresh data when switching languages
			"Cache-Control": "no-store",
		},
	});
};
