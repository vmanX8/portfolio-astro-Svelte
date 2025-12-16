<script lang="ts">
  import { onMount } from "svelte";

  export let once = true;

  let el: HTMLElement;
  let shown = false;

  onMount(() => {
    if (typeof window === "undefined") return;

    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          shown = true;
          if (once) io.disconnect();
        } else if (!once) {
          shown = false;
        }
      },
      { threshold: 0.5 },
    );

    io.observe(el);
    return () => io.disconnect();
  });
</script>

<div
  bind:this={el}
  class={`transition duration-700 ease-out will-change-transform
    ${shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
>
  <slot />
</div>
