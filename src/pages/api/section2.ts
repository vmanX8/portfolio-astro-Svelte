/**
 * API Route: About Section (English)
 *
 * This is an Astro API endpoint that serves About section content.
 * URL: /api/section2
 *
 * What is an API endpoint?
 * - A URL that returns data (usually JSON) instead of HTML
 * - Called by frontend components using fetch()
 * - Runs on the server (or during build for static sites)
 *
 * Why create an API for static content?
 * - Demonstrates real-world pattern (server → client data flow)
 * - Shows how to handle async operations in Svelte
 * - Simulates what you'd do with a real backend/CMS/database
 * - Good practice for when you need dynamic data
 *
 * How it works:
 * 1. Frontend calls fetch("/api/section2")
 * 2. This GET function runs
 * 3. It looks up content for current language
 * 4. Returns JSON response
 * 5. Frontend receives data and displays it
 *
 * Language handling:
 * - English endpoint: /api/section2
 * - Greek endpoint: /gr/api/section2 (separate file)
 * - Astro's i18n system routes to correct endpoint based on URL
 */

import type { APIRoute } from "astro";
import { aboutContent } from "../../lib/content/about";
import type { Locale } from "../../lib/i18n/messages";

/**
 * GET - Handle GET requests to /api/section2
 *
 * Astro calls this function when someone requests /api/section2
 *
 * @param currentLocale - The locale from Astro's i18n system
 * @returns JSON response with About section content
 */
export const GET: APIRoute = async ({ currentLocale }) => {
	// Get current language from Astro's i18n system
	// currentLocale comes from the URL path
	// For this English endpoint, it will be "en"
	// We cast to our Locale type and provide fallback
	const lang = (currentLocale as Locale) || "en";

	// Build the response payload
	// We include the language so frontend knows what it received
	const payload = {
		lang,
		title: aboutContent[lang].title,
		highlight: aboutContent[lang].highlight,
		paragraphs: aboutContent[lang].paragraphs,
	};

	// Return HTTP response with JSON data
	return new Response(JSON.stringify(payload), {
		// HTTP 200 = Success
		status: 200,

		// Headers tell browser how to handle response
		headers: {
			// Tell browser this is JSON with UTF-8 encoding (supports Greek characters)
			"Content-Type": "application/json; charset=utf-8",

			// Don't cache this response
			// Important: when user switches language, we want fresh data
			"Cache-Control": "no-store",
		},
	});
};
