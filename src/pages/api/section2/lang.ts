/** About section API: /api/section2/lang?lang=en|gr */

import type { APIRoute } from "astro";
import { aboutContent } from "../../../lib/content/about";
import type { Locale } from "../../../lib/i18n/messages";

export const GET: APIRoute = async ({ request, currentLocale }) => {
  const url = new URL(request.url);
  const requested = url.searchParams.get("lang")?.toLowerCase();
  const lang =
    requested === "en" || requested === "gr"
      ? (requested as Locale)
      : ((currentLocale as Locale) || "en");

  const payload = {
    lang,
    title: aboutContent[lang].title,
    highlight: aboutContent[lang].highlight,
    paragraphs: aboutContent[lang].paragraphs,
  };

  return new Response(JSON.stringify(payload), {
    status: 200,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
};
