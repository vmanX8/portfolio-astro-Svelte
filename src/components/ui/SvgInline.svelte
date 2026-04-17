<script lang="ts">
    type Props = {
        src: string;
        alt?: string;
        className?: string;
    };

    let { src, alt, className = "" }: Props = $props();

    const svgCache = new Map<string, string | null>();
    const loadPromises = new Map<string, Promise<string | null>>();

    let svg = $state<string | null>(null);
    let error = $state(false);
    const isClient = typeof window !== "undefined";
    function normalizeSvg(raw: string) {
        raw = raw.replace(/<\?xml.*?\?>\s*/i, "");

        raw = raw.replace(
            /fill\s*=\s*("|')(?!none)(.*?)\1/gi,
            'fill="currentColor"',
        );

        raw = raw.replace(
            /stroke\s*=\s*("|')(?!none)(.*?)\1/gi,
            'stroke="currentColor"',
        );

        raw = raw.replace(/style=("|')(.*?)\1/gi, (match, quote, style) => {
            const updatedStyle = style
                .replace(/fill\s*:\s*[^;]+;?/gi, "fill:currentColor;")
                .replace(/stroke\s*:\s*[^;]+;?/gi, "stroke:currentColor;");
            return `style=${quote}${updatedStyle}${quote}`;
        });

        const widthMatch = raw.match(/\swidth=("|')(.*?)("|')/i);
        const heightMatch = raw.match(/\sheight=("|')(.*?)("|')/i);
        const widthVal = widthMatch ? parseFloat(widthMatch[2]) : NaN;
        const heightVal = heightMatch ? parseFloat(heightMatch[2]) : NaN;

        raw = raw.replace(/\swidth=("|')(.*?)("|')/gi, "");
        raw = raw.replace(/\sheight=("|')(.*?)("|')/gi, "");

        if (!/viewBox=/i.test(raw) && !isNaN(widthVal) && !isNaN(heightVal)) {
            raw = raw.replace(
                /<svg(\s|>)/i,
                `<svg viewBox="0 0 ${widthVal} ${heightVal}"$1`,
            );
        }

        raw = raw.replace(
            /<svg/gi,
            '<svg focusable="false" preserveAspectRatio="xMidYMid meet"',
        );

        return raw;
    }

    function getCachedSvg(source: string) {
        if (svgCache.has(source)) return svgCache.get(source) ?? null;
        return null;
    }

    async function fetchSvg(source: string, signal: AbortSignal) {
        if (svgCache.has(source)) return svgCache.get(source) ?? null;
        if (loadPromises.has(source)) return await loadPromises.get(source)!;

        const loadPromise = (async () => {
            try {
                let requestedSrc = source;

                const match = requestedSrc.match(/\/assets\/projects\/(.+)$/i);
                if (match) {
                    const normalized = `/assets/projects/${match[1].replace(/^(?:en|gr)\//i, "")}`;
                    if (normalized !== requestedSrc) {
                        requestedSrc = normalized;
                    }
                }

                let res = await fetch(requestedSrc, {
                    cache: "force-cache",
                    signal,
                });
                if (!res.ok) {
                    const m = requestedSrc.match(
                        /\/assets\/projects\/(?:en|gr)\/(.+)$/i,
                    );
                    if (m) {
                        const fallback = `/assets/projects/${m[1]}`;
                        res = await fetch(fallback, {
                            cache: "force-cache",
                            signal,
                        });
                    }
                }

                if (!res.ok) {
                    return null;
                }

                const text = await res.text();
                return normalizeSvg(text);
            } catch {
                return null;
            }
        })();

        loadPromises.set(source, loadPromise);
        const result = await loadPromise;
        svgCache.set(source, result);
        return result;
    }

    $effect(() => {
        if (!isClient) return;

        let cancelled = false;
        const controller = new AbortController();
        const { signal } = controller;

        const cachedSvg = getCachedSvg(src);
        if (cachedSvg !== null || svgCache.has(src)) {
            svg = cachedSvg;
            error = cachedSvg === null;
            return;
        }

        svg = null;
        error = false;

        const load = async () => {
            const result = (await fetchSvg(src, signal)) ?? null;
            if (cancelled) return;
            svg = result;
            error = result === null;
            if (result === null) {
                console.error("SvgInline: could not load", src);
            }
        };

        void load();

        return () => {
            cancelled = true;
            controller.abort();
        };
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
    span :global(svg) {
        width: 100%;
        height: 100%;
        display: block;
    }
</style>
