import { derived, get, writable } from "svelte/store";
import type { Locale } from "./i18n/messages";

/**
 * Resolve the initial locale.
 *
 * Priority:
 * 1) localStorage (persisted user choice)
 * 2) URL prefix (/gr => gr)
 * 3) Default: en
 */
function resolveInitialLocale(): Locale {
  if (typeof window === "undefined") return "en";

  const stored = localStorage.getItem("lang");
  if (stored === "en" || stored === "gr") return stored;

  return window.location.pathname.startsWith("/gr") ? "gr" : "en";
}

/**
 * Writable store representing the current locale.
 *
 * - Initializes from localStorage or URL.
 * - Persists changes back to localStorage.
 */
export const language = writable<Locale>(resolveInitialLocale());

language.subscribe((value) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("lang", value);
  }
});

/**
 * Derived prefix for building localized URLs.
 * - en => ""
 * - gr => "/gr"
 */
export const localePrefix = derived(language, (lang) =>
  lang === "en" ? "" : `/${lang}`
);

/**
 * Build a localized absolute path for the given locale.
 *
 * @param path Absolute path starting with "/" (e.g. "/about")
 * @param lang Optional locale override; defaults to current `language` store
 */
export function toLocalizedPath(path: string, lang?: Locale): string {
  const target = lang ?? get(language);
  const normalized = path.startsWith("/") ? path : `/${path}`;

  if (target === "en") return normalized;
  if (normalized === "/") return "/gr";
  return `/gr${normalized}`;
}
