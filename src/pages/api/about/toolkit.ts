import type { APIRoute } from "astro";
import { toolkitByLanguage, type Toolkit } from "../../../lib/content/about/toolkit";
import type { Locale } from "../../../lib/i18n/messages";

export type ToolkitPayload = Toolkit & {
  lang: Locale;
};

export const GET: APIRoute = async ({ request, currentLocale }) => {
  const url = new URL(request.url);
  const requested = url.searchParams.get("lang")?.toLowerCase();
  const lang =
    requested === "en" || requested === "gr"
      ? (requested as Locale)
      : ((currentLocale as Locale) || "en");

  const payload: ToolkitPayload = {
    lang,
    ...toolkitByLanguage[lang],
  };

  return new Response(JSON.stringify(payload), {
    status: 200,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
};
