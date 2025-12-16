/**
 * Translation messages (i18n).
 */
export type Locale = "en" | "gr";

export const messages = {
  en: {
    seo: {
      homeTitle: "Vangelis Manouhos - Portfolio",
      homeDescription:
        "Welcome to my portfolio built with Astro, Svelte, and Tailwind. Fast, responsive, and SEO-friendly.",
      aboutTitle: "About - Vangelis Manouhos",
      aboutDescription: "About page (coming soon).",
      projectsTitle: "Projects - Vangelis Manouhos",
      projectsDescription: "Projects page (coming soon).",
      contactTitle: "Contact - Vangelis Manouhos",
      contactDescription: "Contact page (coming soon).",
    },
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      contact: "Contact",
      language: "Language",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    pages: {
      notReady: "This page is not ready yet.",
      backHome: "Back to Home",
      about: { title: "About" },
      projects: { title: "Projects" },
      contact: { title: "Contact" },
    },
    footer: {
      name: "My Portfolio",
      rights: "All rights reserved.",
      home: "Home",
      about: "About",
      projects: "Projects",
      contact: "Contact",
    },
  },
  gr: {
		seo: {
			homeTitle: "Βαγγέλης Μανούχος – Portfolio",
			homeDescription:
				"Καλώς ήλθατε στο Portfolio μου. Σχεδιάστηκε με Astro + Svelte + Tailwind. Γρήγορο, responsive και φιλικό στο SEO.",

			aboutTitle: "Σχετικά – Βαγγέλης Μανούχος",
			aboutDescription: "Σελίδα Σχετικά (σύντομα κοντά σας).",

			projectsTitle: "Projects – Βαγγέλης Μανούχος",
			projectsDescription: "Σελίδα Projects (σύντομα κοντά σας).",

			contactTitle: "Επικοινωνία – Βαγγέλης Μανούχος",
			contactDescription: "Σελίδα Επικοινωνία (σύντομα κοντά σας).",
		},
		nav: {
			home: "Αρχική",
			about: "Σχετικά",
			projects: "Projects",
			contact: "Επικοινωνία",
			language: "Γλώσσα",
			openMenu: "Άνοιγμα μενού",
			closeMenu: "Κλείσιμο μενού",
		},

		pages: {
			notReady: "Η σελίδα δεν είναι έτοιμη ακόμα.",
			backHome: "Πίσω στην Αρχική",
			about: { title: "Σχετικά" },
			projects: { title: "Projects" },
			contact: { title: "Επικοινωνία" },
		},

		footer: {
			name: "Το Portfolio μου",
			rights: "Με επιφύλαξη παντός δικαιώματος.",
			home: "Αρχική",
			about: "Σχετικά",
			projects: "Projects",
			contact: "Επικοινωνία",
		},
  },
} as const;