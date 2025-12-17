<script lang="ts">
  /**
   * HeroSect (Home - Section 1)
   * - 2 CTAs that jump to sections (projects/contact)
   * - i18n-aware (EN/GR) via svelte-i18n
   * - InView wrapper for scroll animation
   */

  import { _ } from "svelte-i18n";
  import { setupI18n } from "../../lib/i18n/i18n";
  import InView from "../ui/InView.svelte";
  import Typewriter from "../ui/Typewriter.svelte";
  import RotatingRing from "../ui/RotatingRing.svelte";
  import { fade } from "svelte/transition";

  setupI18n();
  const t = _;
  let nameStarted = false;
  let roleStarted = false;
  let taglineStarted = false;
  let showCTAs = false;
</script>

<!-- =========================================================================
  Section wrapper (Home - Section 1)
============================================================================= -->
<section id="home" class="pt-28 md:pt-32" aria-labelledby="hero-title">
  <div class="mx-auto max-w-5xl px-4">
    <!-- Scroll animation wrapper -->
    <InView>
      <div class="grid items-center gap-10 md:grid-cols-2">
        <!-- -------------------------------------------------------------------
          Left column: text + CTAs (typed)
        -------------------------------------------------------------------- -->
        <div class="space-y-6 lg:min-h-[600px]">
          <p
            class="text-sm uppercase tracking-[0.35em] text-[color:var(--accent)]"
          >
            {$t("hero.badge")}
          </p>

          <h1
            id="hero-title"
            class="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl"
          >
            <!-- base title typed -->
            <Typewriter
              text={$t("hero.titleHi")}
              speed={35}
              startDelay={5}
              on:done={() => (nameStarted = true)}
            />
            <br />

            <!-- name typed in accent color -->
            {#if nameStarted}
              <span class="text-[color:var(--accent)]">
                <Typewriter
                  text={$t("hero.name")}
                  speed={35}
                  startDelay={10}
                  on:done={() => (roleStarted = true)}
                />
              </span>
              <br />
            {/if}

            <!-- role typed after name -->
            {#if roleStarted}
              <span class="text-teal-100">
                <Typewriter
                  text={$t("hero.role")}
                  speed={34}
                  startDelay={80}
                  on:done={() => (taglineStarted = true)}
                />
              </span>
            {/if}
          </h1>

          <!-- tagline typed, then CTAs appear -->
          <p class="max-w-xl text-teal-100">
            {#if taglineStarted}
              <Typewriter
                text={$t("hero.tagline")}
                speed={28}
                startDelay={60}
                on:done={() => (showCTAs = true)}
              />
            {/if}
          </p>

          <!-- CTA buttons (reveal after typing completes) -->
          {#if showCTAs}
            <div class="flex flex-wrap gap-3 pt-2" transition:fade>
              <a
                href="#projects"
                class="rounded-full border border-[color:var(--accent-weak)] px-5 py-2.5 text-sm font-medium text-white bg-white/5 hover:bg-[color:var(--accent-weak)] focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]/60 shadow-[var(--accent-glow)] hover:shadow-[var(--accent-glow-hover)] transition-shadow duration-200"
                aria-label={$t("hero.ctaProjects")}
              >
                {$t("hero.ctaProjects")}
              </a>

              <a
                href="#contact"
                class="rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium text-white bg-transparent hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]/60 transition"
                aria-label={$t("hero.ctaContact")}
              >
                {$t("hero.ctaContact")}
              </a>
            </div>
          {/if}
        </div>

        <!-- -------------------------------------------------------------------
          Right column: visual / avatar placeholder
        -------------------------------------------------------------------- -->
        <div class="flex justify-center md:justify-end">
          <RotatingRing
            initials="VM"
            subtitle={$t("Frontend Engineer")}
            sizeClass="h-56 w-56 sm:h-64 sm:w-64"
          />
        </div>
      </div>
    </InView>
  </div>
</section>

<style>
  /* Rotating visuals moved to `src/components/ui/RotatingRing.svelte` */
</style>
