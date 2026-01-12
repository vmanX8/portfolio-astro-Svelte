<script lang="ts">
    import SvgInline from "./SvgInline.svelte";

    type Props = {
        src: string;
        alt?: string;
        wrapperClass?: string;
        svgClass?: string;
    };

    let {
        src,
        alt,
        wrapperClass = "",
        svgClass = "",
    }: Props = $props();
</script>

<div class={`project-icon ${wrapperClass}`}>
    <SvgInline {src} {alt} className={svgClass} />
    <span class="icon-rotor" aria-hidden="true"></span>
</div>

<style>
    .project-icon {
        position: relative;
        overflow: visible;
        transition:
            box-shadow 200ms ease,
            transform 200ms ease;
    }

    .project-icon > :global(span) {
        position: relative;
        z-index: 1;
    }

    .project-icon .icon-rotor {
        position: absolute;
        inset: -6px;
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

        :global(.group:hover) .project-icon .icon-rotor {
            opacity: 1;
        }
    }
</style>
