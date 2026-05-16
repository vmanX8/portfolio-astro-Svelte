<script lang="ts">
  import { inview } from "svelte-inview";
  import type { ObserverEventDetails, Options } from "svelte-inview";
  import type { Snippet } from "svelte";

  type Props = {
    once?: boolean;
    threshold?: Options["threshold"];
    rootMargin?: Options["rootMargin"];
    initialShown?: boolean;
    children?: Snippet;
  };

  let {
    once = true,
    threshold = 0.15,
    rootMargin = "0px 0px -10% 0px",
    initialShown = false,
    children,
  }: Props = $props();

  let shown = $state(false);
  const visible = $derived(initialShown || shown);

  const options = $derived({
    threshold,
    rootMargin,
    unobserveOnEnter: once,
  } as Options);

  const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
    if (!once) {
      shown = detail.inView;
    }
  };

  const handleEnter = () => {
    shown = true;
  };
</script>

<div
  use:inview={options}
  oninview_change={handleChange}
  oninview_enter={handleEnter}
  class={`transition duration-700 ease-out will-change-transform
    ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
>
  {@render children?.()}
</div>
