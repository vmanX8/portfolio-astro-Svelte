/**
 * Translation messages (i18n).
 */
export type Locale = "en" | "gr";

export const messages = {
  en: {
    seo: {
      homeTitle: "VM | My Portfolio",
      homeDescription:
        "Welcome to my portfolio built with Astro, Svelte, and Tailwind. Fast, responsive, and SEO-friendly.",
		
      aboutTitle: "VM | About me",
      aboutDescription:
        "About Vangelis, a frontend engineer building clear, modern, and useful interfaces with an engineering mindset.",

      projectsTitle: "VM | My Projects",
      projectsDescription: "Projects page (coming soon).",

      contactTitle: "VM | Contact",
      contactDescription:
        "Contact Vangelis Manouhos for frontend roles, collaborations, freelance work, or web interface projects.",
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
      notReady: "Sorry, this page is not ready yet.",
      backHome: "Back to Home",
      about: { title: "About" },
      projects: { title: "Projects" },
      contact: { title: "Contact" },
    },
    footer: {
      name: "VM Portfolio",
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
        "“Good front-end is where engineering discipline meets human experience.”",
      ctaProjects: "See my work",
      ctaContact: "Let’s build something",
    },

    projectsSection: {
      title: "Projects",
      subtitle:
        "A selection of work. Click a card to see details.",
      homeSubtitle:
        "A quick preview of selected work. Open the projects page for the full carousel and details.",
      loading: "Loading projects…",
      loaded: "All projects are visible.",
      ctaView: "View details",
      viewAll: "View all projects",
      viewProjectPage: "Open projects page",
      previousProject: "Previous project",
      nextProject: "Next project",
      modalTitle: "Project details",
      close: "Close",
      tags: "Tech",
      links: "Links",
      liveDemo: "Live demo",
      sourceCode: "Source code",
      empty: "No projects to show yet.",
    },

    contactSection: {
      title: "Contact",
      subtitle:
        "Send me a message.",
      nameLabel: "Name",
      emailLabel: "Email",
      subjectLabel: "Subject",
      messageLabel: "Message",
      namePlaceholder: "Your name",
      emailPlaceholder: "you@example.com",
      subjectPlaceholder: "What is this about?",
      messagePlaceholder: "Write your message…",
      submit: "Send message",
    },
  },
  gr: {
		seo: {
			homeTitle: "ΒΜ | Το Portfolio μου",
			homeDescription:
				"Καλώς ήλθατε στο Portfolio μου. Σχεδιάστηκε με Astro + Svelte + Tailwind. Γρήγορο, responsive και φιλικό στο SEO.",

			aboutTitle: "ΒΜ | Σχετικά με εμένα",
			aboutDescription:
				"Σχετικά με τον Βαγγέλη, frontend engineer που χτίζει καθαρά, μοντέρνα και χρήσιμα interfaces με engineering mindset.",

			projectsTitle: "ΒΜ | Τα Projects μου",
			projectsDescription: "Σελίδα Projects (σύντομα κοντά σας).",

			contactTitle: "ΒΜ | Επικοινωνία",
			contactDescription:
				"Επικοινωνία με τον Vangelis Manouhos για frontend ρόλους, συνεργασίες, freelance δουλειά ή web interface projects.",
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
			notReady: "Λυπούμαστε, η σελίδα δεν είναι διαθέσιμη ακόμα.",
			backHome: "Πίσω στην Αρχική",
			about: { title: "Σχετικά" },
			projects: { title: "Projects" },
			contact: { title: "Επικοινωνία" },
		},

		footer: {
			name: "ΒΜ Portfolio",
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
			role: "Frontend Engineer",
			tagline:
				"«Το front-end είναι το σημείο όπου η τεχνολογία γίνεται εμπειρία.»",
			ctaProjects: "Η δουλειά μου",
			ctaContact: "Επικοινωνήστε μαζί μου",
		},

		projectsSection: {
			title: "Projects",
			subtitle:
				"Μερικά δείγματα δουλειάς. Πατήστε στην κάρτα για λεπτομέρειες.",
			homeSubtitle:
				"Γρήγορη προεπισκόπηση επιλεγμένων Projects. Ανοίξτε τη σελίδα Projects για το πλήρες carousel και τις λεπτομέρειες.",
			loading: "Φόρτωση Projects…",
			loaded: "Όλα τα Projects εμφανίστηκαν.",
			ctaView: "Λεπτομέρειες",
			viewAll: "Δείτε όλα τα Projects",
			viewProjectPage: "Άνοιγμα σελίδας Projects",
			previousProject: "Προηγούμενο Project",
			nextProject: "Επόμενο Project",
			modalTitle: "Περισσότερα για το Project",
			close: "Κλείσιμο",
			tags: "Τεχνολογίες",
			links: "Σύνδεσμοι",
			liveDemo: "Live demo",
			sourceCode: "Source code",
			empty: "Δεν υπάρχουν Projects ακόμη.",
		},

		contactSection: {
			title: "Επικοινωνία",
			subtitle:
				"Στείλτε μου μήνυμα.",
			nameLabel: "Όνομα",
			emailLabel: "Email",
			subjectLabel: "Θέμα",
			messageLabel: "Μήνυμα",
			namePlaceholder: "Το όνομά σας",
			emailPlaceholder: "you@example.com",
			subjectPlaceholder: "Με τι σχετίζεται;",
			messagePlaceholder: "Γράψτε το μήνυμά σας…",
			submit: "Αποστολή",
		},
		
  },
} as const;
