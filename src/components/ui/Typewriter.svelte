<script lang="ts">
    import Typewriter from "svelte-typewriter";

    type Props = {
        text?: string;
        speed?: number;
        startDelay?: number;
        showCursor?: boolean;
        cursorFadeDelay?: number;
        onDone?: () => void;
    };

    let {
        text = "",
        speed = 40,
        startDelay = 0,
        showCursor = true,
        cursorFadeDelay = 1500,
        onDone,
    }: Props = $props();

    let cursorVisible = $state(false);
    let cursorTimer: ReturnType<typeof setTimeout> | null = null;
    const isBrowser = typeof window !== "undefined";
    let enabled = $state(false);

    $effect(() => {
        cursorVisible = showCursor;
        if (cursorTimer) {
            clearTimeout(cursorTimer);
            cursorTimer = null;
        }
    });

    $effect(() => {
        if (isBrowser) enabled = true;
    });

    const handleDone = () => {
        onDone?.();
        if (cursorFadeDelay > 0) {
            if (cursorTimer) clearTimeout(cursorTimer);
            cursorTimer = setTimeout(() => {
                cursorVisible = false;
            }, cursorFadeDelay);
        }
    };
</script>

{#if enabled}
    <Typewriter
        mode="concurrent"
        interval={speed}
        delay={startDelay}
        cursor={false}
        keepCursorOnFinish={true}
        on:done={handleDone}
        element="span"
        class="typewriter"
    >
        <span class="typewriter-text">{text}</span>
        {#if showCursor}
            <span
                class={`typewriter-cursor ${cursorVisible ? "visible" : ""}`}
                data-static
                aria-hidden="true"
                >|</span
            >
        {/if}
    </Typewriter>
{:else}
    <span class="typewriter-fallback">{text}</span>
{/if}

<style>
    :global(.typewriter) {
        white-space: pre-wrap;
    }

    :global(.typewriter-container) {
        display: inline;
        line-height: inherit;
    }

    :global(.typewriter-container p) {
        margin: 0;
        display: inline;
        line-height: inherit;
    }

    :global(.typewriter-container .typing) {
        display: inline;
        line-height: inherit;
    }

    :global(.typewriter-cursor) {
        display: inline-block;
        margin-left: 1px;
        line-height: 1;
        color: currentColor;
        opacity: 0;
    }

    :global(.typewriter-cursor.visible) {
        opacity: 1;
        animation: typewriter-blink 1s steps(2, start) infinite;
    }

    @keyframes typewriter-blink {
        0%,
        49% {
            opacity: 1;
        }
        50%,
        100% {
            opacity: 0;
        }
    }
</style>
