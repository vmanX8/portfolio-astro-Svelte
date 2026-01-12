<script lang="ts">
    type Props = {
        src: string;
        alt?: string;
        className?: string;
    };

    let { src, alt, className = "" }: Props = $props();

    let svg = $state<string | null>(null);
    let error = $state(false);
    const isClient = typeof window !== "undefined";
    function normalizeSvg(raw: string) {
        raw = raw.replace(/<\?xml.*?\?>\s*/i, "");

        raw = raw.replace(
            /fill=("|')(?!none)(.*?)("|')/gi,
            'fill="currentColor"',
        );

        raw = raw.replace(/stroke=("|')(.*?)("|')/gi, 'stroke="currentColor"');

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

    $effect(() => {
        if (!isClient) return;

        let cancelled = false;
        const controller = new AbortController();
        const { signal } = controller;

        svg = null;
        error = false;

        const load = async () => {
            try {
                let requestedSrc = src;

                const match = requestedSrc.match(/\/assets\/projects\/(.+)$/i);
                if (match) {
                    const normalized = `/assets/projects/${match[1].replace(/^(?:en|gr)\//i, "")}`;
                    if (normalized !== requestedSrc) {
                        console.warn(
                            `SvgInline: normalized icon path ${requestedSrc} -> ${normalized}`,
                        );
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
                        try {
                            res = await fetch(fallback, {
                                cache: "force-cache",
                                signal,
                            });
                            if (res.ok) {
                                const text = await res.text();
                                if (!cancelled) svg = normalizeSvg(text);
                                return;
                            }
                        } catch (e) {
                            // fall through to throw below
                        }
                    }

                    throw new Error("Failed to load SVG");
                }

                const text = await res.text();
                if (!cancelled) svg = normalizeSvg(text);
            } catch (e) {
                if (cancelled) return;
                error = true;
                console.error("SvgInline: could not load", src, e);
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
