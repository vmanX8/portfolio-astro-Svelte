<script lang="ts">
    type Props = {
        sizeClass?: string;
        initials?: string;
        subtitle?: string;
        ariaLabel?: string;
        showOrbit?: boolean;
    };

    let {
        sizeClass = "h-56 w-56 sm:h-64 sm:w-64",
        initials = "VM",
        subtitle = "Frontend",
        ariaLabel = "Avatar",
        showOrbit = true,
    }: Props = $props();
</script>

<div
    class="relative grid place-items-center"
    aria-hidden="true"
    aria-label={ariaLabel}
>
    <div
        class="absolute -inset-8 rounded-full blur-3xl bg-[color:var(--accent)]/15 rot-glow"
    ></div>

    <div
        class={`relative ${sizeClass} rounded-full p-[2px] bg-gradient-to-tr from-[color:var(--accent)]/60 via-[color:var(--accent-weak)] to-transparent rot-ring`}
    >
        <div
            class="relative h-full w-full rounded-full bg-[color:var(--surface)] border border-white/10 overflow-hidden"
        >
            <div
                class={`absolute inset-0 opacity-30 rot-pattern bg-[radial-gradient(circle_at_20%_20%,color-mix(in_oklab,var(--accent),transparent_60%),transparent_45%),radial-gradient(circle_at_80%_70%,color-mix(in_oklab,var(--accent),transparent_70%),transparent_55%)]`}
            ></div>

            <div
                class="absolute inset-3 rounded-full border border-white/10"
            ></div>

            <div class="absolute inset-0 grid place-items-center">
                <div
                    class="flex flex-col items-center justify-center h-28 w-28 sm:h-32 sm:w-32 rounded-full bg-[color:var(--background)]/60 border border-white/10 shadow-xl text-center"
                >
                    <span
                        aria-hidden="true"
                        class="text-3xl sm:text-4xl font-bold tracking-tight text-teal-100 leading-none"
                        >{initials}</span
                    >
                    {#if subtitle}
                        <span
                            aria-hidden="true"
                            class="text-[10px] uppercase tracking-[0.35em] text-teal-200 mt-1 block"
                            >{subtitle}</span
                        >
                    {/if}
                </div>
            </div>

            {#if showOrbit}
                <div class="inner-highlight" aria-hidden="true"></div>
            {/if}
        </div>
    </div>
</div>

<style>
    .rot-glow {
        animation: rot-glow 6s ease-in-out infinite;
    }

    .rot-ring {
        animation: rot-ring-spin 18s linear infinite;
    }

    .rot-pattern {
        animation: rot-pattern-spin 24s linear infinite reverse;
    }

    @keyframes rot-glow {
        0%,
        100% {
            opacity: 0.45;
        }
        50% {
            opacity: 0.75;
        }
    }

    @keyframes rot-ring-spin {
        to {
            transform: rotate(360deg);
        }
    }
    @keyframes rot-pattern-spin {
        to {
            transform: rotate(360deg);
        }
    }

    .inner-highlight {
        position: absolute;
        top: 2.4rem; /* slightly adjusted for visual balance */
        right: 2.9rem;
        height: 0.75rem;
        width: 0.75rem;
        border-radius: 9999px;
        background: rgb(130, 153, 142);
        box-shadow: 0 0 10px rgba(255, 255, 255, 0.9);
        transform-origin: center;
        animation: inner-highlight-pulse 2.2s ease-in-out infinite;
    }

    @keyframes inner-highlight-pulse {
        0% {
            transform: scale(1);
            box-shadow: 0 0 8px rgba(255, 255, 255, 0.6);
        }
        50% {
            transform: scale(1.08);
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.85);
        }
        100% {
            transform: scale(1);
            box-shadow: 0 0 8px rgba(255, 255, 255, 0.6);
        }
    }

    @media (prefers-reduced-motion: reduce) {
        .rot-ring,
        .rot-pattern,
        .rot-glow,
        .inner-highlight {
            animation: none !important;
            transform: none !important;
        }
    }
</style>
