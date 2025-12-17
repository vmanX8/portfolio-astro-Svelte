/**
 * Translation messages (i18n).
 */
export type Locale = "en" | "gr";

export const messages = {
  en: {
    seo: {
      homeTitle: "My Portfolio",
      homeDescription:
        "Welcome to my portfolio built with Astro, Svelte, and Tailwind. Fast, responsive, and SEO-friendly.",
      aboutTitle: "About me",
      aboutDescription: "About page (coming soon).",
      projectsTitle: "My Projects",
      projectsDescription: "Projects page (coming soon).",
      contactTitle: "Contact",
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

		hero: {
			badge: "Portfolio",
			titleHi: "Hi, I'm",
			name: "Vangelis",
			role: "Frontend Engineer",
			tagline:
				"“Design is not decoration, it’s the way your website speaks before a single word is read.”",
			ctaProjects: "See my work", 
			ctaContact: "Let’s build something",
		},
  },
  gr: {
		seo: {
			homeTitle: "Το Portfolio μου",
			homeDescription:
				"Καλώς ήλθατε στο Portfolio μου. Σχεδιάστηκε με Astro + Svelte + Tailwind. Γρήγορο, responsive και φιλικό στο SEO.",

			aboutTitle: "Σχετικά με εμένα",
			aboutDescription: "Σελίδα Σχετικά (σύντομα κοντά σας).",

			projectsTitle: "Τα Projects μου",
			projectsDescription: "Σελίδα Projects (σύντομα κοντά σας).",

			contactTitle: "Επικοινωνία",
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

    hero: {
			badge: "Portfolio",
			titleHi: "Γειά σας, με λένε",
			name: "Βαγγέλη",
			role: "Και είμαι Frontend Engineer",
			tagline:
				"«Το design χωρίς στρατηγική είναι απλά διακόσμηση, με στρατηγική είναι ο τρόπος που το site μας μιλά πριν διαβαστεί έστω μία λέξη.»",
			ctaProjects: "Projects",
			ctaContact: "Επικοινωνήστε μαζί μου",
		},
  },
} as const;