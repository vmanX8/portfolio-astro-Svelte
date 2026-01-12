/** Navigation link metadata for the header. */
export type NavLink = {
  path: string;
  labelKey: string;
};

/** Shared nav links for desktop and mobile. */
export const navLinks: NavLink[] = [
  { path: "/", labelKey: "nav.home" },
  { path: "/about", labelKey: "nav.about" },
  { path: "/projects", labelKey: "nav.projects" },
  { path: "/contact", labelKey: "nav.contact" },
];

/** Normalize a pathname for comparisons. */
export function normalizePath(pathname: string): string {
  if (!pathname) return "/";
  const withLeading = pathname.startsWith("/") ? pathname : `/${pathname}`;
  if (withLeading === "/") return "/";
  return withLeading.replace(/\/+$/, "");
}
