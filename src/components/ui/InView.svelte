<script lang="ts">
  import { inview } from "svelte-inview";
  import type { ObserverEventDetails, Options } from "svelte-inview";
  import type { Snippet } from "svelte";

  type Props = {
    once?: boolean;
    threshold?: Options["threshold"];
    rootMargin?: Options["rootMargin"];
    children?: Snippet;
  };

  let {
    once = true,
    threshold = 0.5,
    rootMargin = "0px",
    children,
  }: Props = $props();

  let shown = $state(false);

  const options = $derived({
    threshold,
    rootMargin,
    unobserveOnEnter: once,
  } as Options);

  const handleChange = (event: CustomEvent<ObserverEventDetails>) => {
    shown = event.detail.inView;
  };
</script>

<div
  use:inview={options}
  oninview_change={handleChange}
  class={`transition duration-700 ease-out will-change-transform
    ${shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
>
  {@render children?.()}
</div>
