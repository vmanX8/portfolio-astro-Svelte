/**
 * Describes a single navigation link shown in the site header.
 *
 * - `path` should be the base (unlocalized) route, e.g. `/about`.
 * - `labelKey` is the translation key used with `$t(labelKey)`.
 */
export type NavLink = {
  path: string;
  labelKey: string;
};

/**
 * List of navigation links used by both desktop and mobile menus.
 *
 * Keeping this in one place ensures both menus stay in sync.
 */
export const navLinks: NavLink[] = [
  { path: "/", labelKey: "nav.home" },
  { path: "/about", labelKey: "nav.about" },
  { path: "/projects", labelKey: "nav.projects" },
  { path: "/contact", labelKey: "nav.contact" },
];

/**
 * Remove any locale prefix from a pathname to get the base route.
 *
 * Examples:
 * - `/gr/about` -> `/about`
 * - `/about` -> `/about`
 * - `/` -> `/`
 */
export function stripLocaleFromPath(pathname: string): string {
  const cleaned = pathname.replace(/^\/(en|gr)/, "") || "/";
  return cleaned.startsWith("/") ? cleaned : `/${cleaned}`;
}

/**
 * Normalize a pathname for comparisons:
 * - Strips locale prefix
 * - Removes trailing slash (except for root)
 */
export function normalizePath(pathname: string): string {
  const base = stripLocaleFromPath(pathname);
  if (base === "/") return "/";
  return base.replace(/\/+$/, "");
}
