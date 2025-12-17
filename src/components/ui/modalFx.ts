import { cubicIn, cubicOut } from "svelte/easing";
import type { TransitionConfig } from "svelte/transition";

/**
 * modal - Reusable open/close transition for dialogs
 * - combines subtle vertical motion, scale and fade
 */
export function modal(
  node: Element,
  { delay = 0, duration = 240 } = {}
): TransitionConfig {
  const style = getComputedStyle(node);
  const targetOpacity = parseFloat(style.opacity) || 1;

  return {
    delay,
    duration,
    easing: cubicOut,
    css: (t: number) => {
      const eased = cubicOut(t);
      const opacity = eased * targetOpacity;
      const y = (1 - eased) * 10; // px
      const scale = 0.98 + eased * 0.02;
      return `opacity: ${opacity}; transform: translateY(${y}px) scale(${scale});`;
    },
  };
}

/**
 * backdrop - Simple fade for overlays/backdrops
 */
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

/**
 * clipReveal - Mask wipe effect (top-to-bottom) with small translate
 * Respects prefers-reduced-motion by falling back to a simple fade/slide
 */
export function clipReveal(
  node: Element,
  { delay = 0, duration = 260 } = {}
): TransitionConfig {
  // Respect user preference for reduced motion
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
      // animate clip-path inset from 100% -> 0% (reveals from top)
      const insetTop = (1 - t) * 100;
      const y = (1 - t) * 6; // small translate for depth
      return `opacity: ${t}; clip-path: inset(${insetTop}% 0 0 0); transform: translateY(${y}px);`;
    },
  };
}
