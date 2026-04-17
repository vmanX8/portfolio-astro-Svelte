import type { APIRoute } from "astro";
import {
  currentFocusByLanguage,
  type CurrentFocus,
} from "../../../lib/content/about/currentFocus";
import type { Locale } from "../../../lib/i18n/messages";

export type CurrentFocusPayload = CurrentFocus & {
  lang: Locale;
};

export const GET: APIRoute = async ({ request, currentLocale }) => {
  const url = new URL(request.url);
  const requested = url.searchParams.get("lang")?.toLowerCase();
  const lang =
    requested === "en" || requested === "gr"
      ? (requested as Locale)
      : ((currentLocale as Locale) || "en");

  const payload: CurrentFocusPayload = {
    lang,
    ...currentFocusByLanguage[lang],
  };

  return new Response(JSON.stringify(payload), {
    status: 200,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
};
