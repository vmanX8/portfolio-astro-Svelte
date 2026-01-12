import { cubicIn, cubicOut } from "svelte/easing";
import type { TransitionConfig } from "svelte/transition";

/** Simple fade for overlays/backdrops. */
export function backdrop(
  node: Element,
  { delay = 0, duration = 160 } = {}
): TransitionConfig {
  const style = getComputedStyle(node);
  const targetOpacity = parseFloat(style.opacity) || 1;

  return {
    delay,
    duration,
    easing: cubicIn,
    css: (t: number) => `opacity: ${t * targetOpacity};`,
  };
}

/** Clip reveal with reduced-motion fallback. */
export function clipReveal(
  _node: Element,
  { delay = 0, duration = 260 } = {}
): TransitionConfig {
  if (typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return {
      delay,
      duration: 140,
      easing: cubicOut,
      css: (t: number) => `opacity: ${t}; transform: translateY(${(1 - t) * 6}px);`,
    };
  }

  return {
    delay,
    duration,
    easing: cubicOut,
    css: (t: number) => {
      const insetTop = (1 - t) * 100;
      const y = (1 - t) * 6;
      return `opacity: ${t}; clip-path: inset(${insetTop}% 0 0 0); transform: translateY(${y}px);`;
    },
  };
}
