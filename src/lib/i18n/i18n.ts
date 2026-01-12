/**
 * Client-side i18n setup for svelte-i18n.
 */
import { addMessages, init, locale } from "svelte-i18n";
import { messages, type Locale } from "./messages";

let initialized = false;

function bootstrapI18n(initialLocale: Locale) {
  if (initialized) return;
  addMessages("en", messages.en);
  addMessages("gr", messages.gr);
  init({
    fallbackLocale: "en",
    initialLocale,
  });
  initialized = true;
}

bootstrapI18n("en");

export function setupI18n(currentLocale: Locale = "en") {
  const activeLocale = currentLocale ?? "en";
  if (!initialized) {
    bootstrapI18n(activeLocale);
  } else {
    locale.set(activeLocale);
  }
}
