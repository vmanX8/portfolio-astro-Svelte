<script lang="ts">
    import { onMount } from "svelte";

    /**
     * SvgInline.svelte
     *
     * Lightweight client-side SVG inliner that:
     * - fetches an external SVG file (from `/assets/...`) on the client,
     * - inlines the SVG markup into the DOM so CSS `color` can be used to theme it,
     * - normalizes common attributes (fill/stroke -> currentColor),
     * - removes width/height and adds a viewBox when possible so the SVG scales responsively,
     * - preserves accessibility attributes (role / aria-label when `alt` is provided),
     * - fails gracefully with a small fallback icon and logs errors to the console.
     *
     * Usage:
     * <SvgInline src="/assets/projects/portfolio.svg" alt="Portfolio logo" className="w-6 h-6" />
     *
     * Notes for developers:
     * - Assets are expected to live under `/assets/...` (this component will normalize
     *   accidental locale segments like `en/` or `gr/` out of `/assets/projects/...`).
     * - Fetch happens onMount (client-only). This keeps server rendering fast and avoids
     *   inlining at build-time. If you want build-time inlining, consider converting SVGs to
     *   Svelte components instead.
     * - Caching: fetch uses `{ cache: "force-cache" }` to benefit from static asset caching.
     *
     * Props:
     * @param src - Path or URL to the SVG asset (string). Required.
     * @param alt - Optional accessible name; when set, the inlined SVG will have role="img" and aria-label set.
     * @param className - Optional CSS class applied to the wrapping element (useful for sizing).
     */

    /** @type {string} Path to the SVG file to inline (client only). */
    export let src: string;
    /** @type {(string|undefined)} Accessible label for the SVG (applies role/aria-label). */
    export let alt: string | undefined;
    /** @type {string} CSS class(es) to apply to the outer wrapper (size control etc). */
    export let className = "";

    let svg: string | null = null;
    let error = false;
    const isClient = typeof window !== "undefined";
    /**
     * normalizeSvg
     * Sanitize and normalize raw SVG markup so it is themeable and responsive.
     *
     * Transformations performed:
     * - strip XML declaration
     * - replace fill="..." (except fill="none") with fill="currentColor"
     * - replace stroke="..." with stroke="currentColor"
     * - capture & remove width/height, add viewBox if absent (based on width/height)
     * - ensure `focusable="false"` and `preserveAspectRatio` are set
     *
     * @param raw - raw SVG markup returned from fetch
     * @returns normalized SVG string ready for insertion into the DOM
     * @internal
     */
    function normalizeSvg(raw: string) {
        // Remove XML declaration if present
        raw = raw.replace(/<\?xml.*?\?>\s*/i, "");

        // Replace fill="..." unless fill="none" -> fill: currentColor
        raw = raw.replace(
            /fill=("|')(?!none)(.*?)("|')/gi,
            'fill="currentColor"',
        );

        // Replace stroke="..." -> stroke: currentColor
        raw = raw.replace(/stroke=("|')(.*?)("|')/gi, 'stroke="currentColor"');

        // Capture width/height if present (some SVGs lack viewBox) so we can
        // generate a viewBox if needed, then remove the attributes to keep SVG responsive
        const widthMatch = raw.match(/\swidth=("|')(.*?)("|')/i);
        const heightMatch = raw.match(/\sheight=("|')(.*?)("|')/i);
        const widthVal = widthMatch ? parseFloat(widthMatch[2]) : NaN;
        const heightVal = heightMatch ? parseFloat(heightMatch[2]) : NaN;

        raw = raw.replace(/\swidth=("|')(.*?)("|')/gi, "");
        raw = raw.replace(/\sheight=("|')(.*?)("|')/gi, "");

        // If SVG doesn't have a viewBox but we captured width/height, add a viewBox
        if (!/viewBox=/i.test(raw) && !isNaN(widthVal) && !isNaN(heightVal)) {
            raw = raw.replace(
                /<svg(\s|>)/i,
                `<svg viewBox="0 0 ${widthVal} ${heightVal}"$1`,
            );
        }

        // Make sure svg has role/preserveAspect and is focusable false
        raw = raw.replace(
            /<svg/gi,
            '<svg focusable="false" preserveAspectRatio="xMidYMid meet"',
        );

        return raw;
    }

    onMount(async () => {
        if (!isClient) return;

        try {
            // Ensure the path is under `/assets/projects/...` and remove any
            // accidental locale segment (e.g. `en/` or `gr/`) so we always
            // request `/assets/projects/<id>.svg`.
            const match = src.match(/\/assets\/projects\/(.+)$/i);
            if (match) {
                const normalized = `/assets/projects/${match[1].replace(/^(?:en|gr)\//i, "")}`;
                if (normalized !== src) {
                    console.warn(
                        `SvgInline: normalized icon path ${src} -> ${normalized}`,
                    );
                    src = normalized;
                }
            }

            let res = await fetch(src, { cache: "force-cache" });
            if (!res.ok) {
                // Attempt a fallback for previously-used localized paths
                // e.g. `/assets/projects/en/portfolio.svg` → `/assets/projects/portfolio.svg`
                const m = src.match(/\/assets\/projects\/(?:en|gr)\/(.+)$/i);
                if (m) {
                    const fallback = `/assets/projects/${m[1]}`;
                    try {
                        res = await fetch(fallback, { cache: "force-cache" });
                        if (res.ok) {
                            const text = await res.text();
                            svg = normalizeSvg(text);
                            return;
                        }
                    } catch (e) {
                        // fall through to throw below
                    }
                }

                throw new Error("Failed to load SVG");
            }

            const text = await res.text();
            svg = normalizeSvg(text);
        } catch (e) {
            error = true;
            console.error("SvgInline: could not load", src, e);
        }
    });
</script>

{#if svg}
    <span
        class={className}
        role={alt ? "img" : undefined}
        aria-label={alt}
        aria-hidden={alt ? undefined : "true"}
    >
        {@html svg}
    </span>
{:else if !error}
    <span class={className} aria-hidden="true">
        <!-- simple visual placeholder while SVG loads -->
        <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="none"
            aria-hidden="true"
        >
            <rect
                width="24"
                height="24"
                rx="4"
                fill="currentColor"
                opacity="0.08"
            />
        </svg>
    </span>
{:else}
    <span class={className} aria-hidden="true">
        <!-- fallback icon (small circle) -->
        <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="none"
            aria-hidden="true"
        >
            <circle cx="12" cy="12" r="6" fill="currentColor" />
        </svg>
    </span>
{/if}

<style>
    /* Make sure inlined SVG scales with parent box */
    span :global(svg) {
        width: 100%;
        height: 100%;
        display: block;
    }
</style>
