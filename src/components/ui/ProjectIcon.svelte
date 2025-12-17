<script lang="ts">
    /**
     * ProjectIcon
     *
     * Wrapper component that renders an inlined SVG with a subtle hover effect:
     * - small orbiting dot (slow) around the icon when the parent `.group` (card) is hovered
     * - subtle shadow on hover
     *
     * Props:
     * @param src - SVG path to inline (e.g. "/assets/projects/portfolio.svg")
     * @param alt - accessible label for the SVG (optional)
     * @param wrapperClass - classes applied to the outer wrapper (use for sizing/coloring)
     * @param svgClass - classes applied to the inlined SVG (size, etc.)
     */
    import SvgInline from "./SvgInline.svelte";
    export let src: string;
    export let alt: string | undefined;
    export let wrapperClass = "";
    export let svgClass = "";
</script>

<div class={`project-icon ${wrapperClass}`}>
    <SvgInline {src} {alt} className={svgClass} />
    <span class="icon-rotor" aria-hidden="true"></span>
</div>

<style>
    /* Localized styles for the orbiting dot & subtle hover shadow. The hover
     trigger is the parent `.group` class (cards use `.group`). */
    .project-icon {
        position: relative;
        overflow: visible;
        transition:
            box-shadow 200ms ease,
            transform 200ms ease;
    }

    /* Keep the inlined SVG visually above the rotor */
    .project-icon > :global(span) {
        position: relative;
        z-index: 1;
    }

    .project-icon .icon-rotor {
        position: absolute;
        inset: -6px; /* slightly outside the icon box so the dot orbits */
        border-radius: inherit;
        opacity: 0;
        transform-origin: center;
        pointer-events: none;
        transition: opacity 220ms ease;
        z-index: 0;
        box-sizing: content-box;
    }

    .project-icon .icon-rotor::before {
        content: "";
        position: absolute;
        left: 50%;
        top: 0;
        width: 6px;
        height: 6px;
        border-radius: 9999px;
        background: var(--accent);
        transform: translate(-50%, -50%);
        box-shadow: 0 4px 10px rgba(2, 6, 23, 0.12);
    }

    /* Hover behavior: subtle shadow & slow orbit when card (.group) is hovered */
    :global(.group:hover) .project-icon {
        box-shadow: 0 10px 24px rgba(2, 6, 23, 0.08);
    }

    :global(.group:hover) .project-icon .icon-rotor {
        opacity: 1;
        animation: icon-spin 4.5s linear infinite;
    }

    @keyframes icon-spin {
        to {
            transform: rotate(360deg);
        }
    }

    @media (prefers-reduced-motion: reduce) {
        :global(.group:hover) .project-icon .icon-rotor,
        .project-icon .icon-rotor::before {
            animation: none !important;
            transition: none !important;
        }

        /* Keep the dot visible but static for reduced-motion users */
        :global(.group:hover) .project-icon .icon-rotor {
            opacity: 1;
        }
    }
</style>
