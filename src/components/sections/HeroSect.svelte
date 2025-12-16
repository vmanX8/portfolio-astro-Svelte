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

  setupI18n();
  const t = _;
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
          Left column: text + CTAs
        -------------------------------------------------------------------- -->
        <div class="space-y-6">
          <p
            class="text-sm uppercase tracking-[0.35em] text-[color:var(--accent)]"
          >
            {$t("hero.badge")}
          </p>

          <h1
            id="hero-title"
            class="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl"
          >
            {$t("hero.titleHi")}
            <span class="text-[color:var(--accent)]"> {$t("hero.name")}</span>.
            <br />
            <span class="text-slate-300">{$t("hero.role")}</span>
          </h1>

          <p class="max-w-xl text-slate-300">
            {$t("hero.tagline")}
          </p>

          <!-- CTA buttons -->
          <div class="flex flex-wrap gap-3 pt-2">
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
        </div>

        <!-- -------------------------------------------------------------------
          Right column: visual / avatar placeholder
        -------------------------------------------------------------------- -->
        <div class="flex justify-center md:justify-end">
          <div class="relative" aria-hidden="true">
            <!-- soft glow -->
            <div
              class="absolute -inset-8 rounded-full blur-3xl bg-[color:var(--accent)]/15"
            ></div>

            <!-- outer ring -->
            <div
              class="relative h-56 w-56 sm:h-64 sm:w-64 rounded-full p-[2px]
        bg-gradient-to-tr from-[color:var(--accent)]/60 via-[color:var(--accent-weak)] to-transparent"
            >
              <!-- inner container -->
              <div
                class="relative h-full w-full rounded-full bg-[color:var(--surface)] border border-white/10 overflow-hidden"
              >
                <!-- subtle pattern -->
                <div
                  class="absolute inset-0 opacity-30
            bg-[radial-gradient(circle_at_20%_20%,color-mix(in_oklab,var(--accent),transparent_60%),transparent_45%),radial-gradient(circle_at_80%_70%,color-mix(in_oklab,var(--accent),transparent_70%),transparent_55%)]"
                ></div>

                <!-- inner ring -->
                <div
                  class="absolute inset-3 rounded-full border border-white/10"
                ></div>

                <!-- initials badge -->
                <div class="absolute inset-0 grid place-items-center">
                  <div
                    class="grid place-items-center h-28 w-28 sm:h-32 sm:w-32 rounded-full
              bg-[color:var(--background)]/60 border border-white/10 shadow-xl"
                  >
                    <span
                      aria-hidden="true"
                      class="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100"
                    >
                      VM
                    </span>
                    <span
                      aria-hidden="true"
                      class="text-[10px] uppercase tracking-[0.35em] text-slate-300 -mt-1"
                    >
                      Frontend
                    </span>
                  </div>
                </div>

                <!-- small highlight dot -->
                <div
                  class="absolute top-10 right-12 h-2.5 w-2.5 rounded-full bg-[color:var(--accent)]/80
                 shadow-[var(--accent-glow-hover)]"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </InView>
  </div>
</section>
