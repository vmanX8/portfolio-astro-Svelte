/**
 * About section copy by locale.
 */
import type { Locale } from "../../i18n/messages";

/** About section text by locale. */
export const aboutContent = {
	en: {
		title: "About me",
		highlight: "Front-end engineer with an engineering mindset, building modern, user-centered web interfaces.",
		paragraphs: [
			"Front-End Engineer in transition, with a strong engineering foundation and hands-on experience exploring React and modern web technologies. ",

			"Currently working as a Presales/Field Application Engineer, where I've developed a sharp problem-solving mindset, a deep understanding of technical requirements, and the ability to translate user needs into practical solutions.",

			"I'm actively building my skills in front-end development focusing on React, component design, UI/UX fundamentals, and clean, maintainable code. My background in Electrical & Electronic Engineering gives me a structured, analytical approach, while my customer-facing experience helps me think from the user's perspective."
		]
	},

	gr: {
		title: "Σχετικά με εμένα",
		highlight: "Front-end engineer με μηχανολογική νοοτροπία, που αναπτύσσει σύγχρονα, ανθρωποκεντρικά web interfaces.",
		paragraphs: [
			"Front-End Engineer σε μεταφατική φάση, με ισχυρό τεχνικό υπόβαθρο και πρακτική ενασχόλιση με την React βιβλιοθήκη και σύγχρονες τεχνολογίες web. ",

			"Αυτή την περίοδο εργάζομαι ως Presales / Field Application Engineer, όπου έχω αναπτύξει έντονη αναλυτική σκέψη, κατανόηση σύνθετων τεχνικών απαιτήσεων και την ικανότητα να μετατρέπω τις ανάγκες των χρηστών σε λειτουργικές και εφαρμόσιμες λύσεις. ",

			"Παράλληλα, εξελίσσω συστηματικά τις δεξιότητές μου στο front-end development, με έμφαση στην React, τον σχεδιασμό και την οργάνωση components, τις αρχές του UI/UX και τον καθαρό κώδικα. Το υπόβαθρό μου στην Ηλεκτρολογική & Ηλεκτρονική Μηχανική με βοηθά να προσεγγίζω τα προβλήματα με δομημένο τρόπο, ενώ η εμπειρία μου σε ρόλους με άμεση επαφή με τον πελάτη με ωθεί να σκέφτομαι πάντα με γνώμονα τον τελικό χρήστη."
		]
	}
} as const;

export type AboutPageCopy = {
    eyebrow: string;
    title: string;
    intro: string[];
    profile: {
      role: string;
      summary: string;
      focusLabel: string;
      focus: string;
      approachLabel: string;
      approach: string;
      stackLabel: string;
      stack: string;
    };
    story: {
      eyebrow: string;
      title: string;
      paragraphs: string[];
    };
    building: {
      eyebrow: string;
      title: string;
      intro: string;
      cards: { title: string; text: string }[];
      note: string;
    };
    work: {
      eyebrow: string;
      title: string;
      intro: string;
      points: string[];
      closing: string;
    };
    focus: {
      eyebrow: string;
      title: string;
      paragraphs: string[];
    };
    beyond: {
      eyebrow: string;
      title: string;
      text: string;
    };
    cta: {
      eyebrow: string;
      text: string;
      button: string;
    };
  };

export const aboutPageContent: Record<Locale, AboutPageCopy> = {
    en: {
      eyebrow: "About",
      title: "Designing scalable frontend experiences with an engineering mindset",
      intro: [
        "I'm a Frontend Engineer with a background in Electrical & Electronic Engineering, focused on building modern, user-centered web applications using React and TypeScript.",
        "My path into development grew out of a technical, client-facing role in presales engineering. For several years, I analyzed requirements, worked with stakeholders, and translated complex technical needs into structured solutions. That experience still shapes how I approach frontend work today: with clarity, structure, and a strong focus on usability.",
      ],
      profile: {
        role: "Frontend Engineer",
        summary: "Engineering-minded UI builder",
        focusLabel: "Focus",
        focus: "Scalable product UI",
        approachLabel: "Approach",
        approach: "Systems + usability",
        stackLabel: "Stack",
        stack: "React + TypeScript",
      },
      story: {
        eyebrow: "Production experience",
        title: "From real-world systems to frontend architecture",
        paragraphs: [
          "Beyond personal projects, I've worked on a full-stack application used in production by a large number of users.",
          "The system was built to replace more than ten years of unstructured Excel-based financial data with a structured web application backed by a database. Working in a small team, I was primarily responsible for the frontend and contributed to the overall UI architecture and user experience.",
          "I designed and implemented the application's layout and component structure, including data tables, forms, filters, and search functionality. A big part of the work was building reusable components so the interface stayed consistent and maintainable as the system grew.",
          "The application supported real workflows such as client management and financial records. It included session-based authentication, asynchronous data flows, and export functionality for PDF and Excel using task polling, so the UI stayed responsive during long-running operations.",
          "That experience gave me a clearer understanding of how frontend applications behave in real production environments, especially when they need to work closely with backend systems and real users.",
        ],
      },
      building: {
        eyebrow: "Craft",
        title: "What I enjoy building",
        intro:
          "I'm particularly interested in interfaces that feel structured, intuitive, and close to real products, not just static demos.",
        cards: [
          {
            title: "Responsive interfaces",
            text: "Layouts that work smoothly across devices without losing clarity or hierarchy.",
          },
          {
            title: "Component-based systems",
            text: "Reusable UI structures that scale, stay consistent, and remain maintainable.",
          },
          {
            title: "Data-driven applications",
            text: "Dashboards, forms, search, filters, and workflows where usability really matters.",
          },
          {
            title: "Interactive UI",
            text: "Motion and interaction that support the experience instead of distracting from it.",
          },
        ],
        note:
          "Most of my projects follow a Single Page Application approach, with emphasis on clean state management, reusable components, and clear data flow.",
      },
      work: {
        eyebrow: "Process",
        title: "How I work",
        intro:
          "I approach frontend development as part of a complete system, not just the visual layer.",
        points: [
          "clean, readable, and maintainable code",
          "scalable component architecture",
          "proper handling of real states: loading, error, success, and async flows",
          "collaboration with backend and design",
        ],
        closing:
          "My engineering background and presales experience help me bridge business needs with technical implementation. I tend to think in systems rather than isolated features.",
      },
      focus: {
        eyebrow: "Current focus",
        title: "Current focus and projects",
        paragraphs: [
          "Alongside my professional experience, I actively build projects to deepen my understanding of modern frontend and full-stack development.",
          "The projects featured in this portfolio, including dashboards, API-driven apps, and interactive interfaces, were built to expand my skills across different technologies and real-world scenarios.",
        ],
      },
      beyond: {
        eyebrow: "Beyond code",
        title: "Design, visual communication, and interaction",
        text: "I also have a strong interest in design and visual communication, including graphic and video design. That naturally influences how I think about UI, layout, rhythm, and interaction. For me, frontend development is not only about functionality. It's about creating experiences that feel clear, thoughtful, and engaging.",
      },
      cta: {
        eyebrow: "Let's connect",
        text: "I'm currently focused on growing as a frontend engineer and contributing to real-world applications. If you're looking for someone who combines engineering thinking with a strong focus on frontend architecture and user experience, feel free to reach out.",
        button: "Contact me",
      },
    },
    gr: {
      eyebrow: "About",
      title: "Σχεδιάζω frontend εμπειρίες με δομή και καθαρή σκέψη",
      intro: [
        "Είμαι Frontend Engineer, απόφοιτος Ηλεκτρολογικής και Ηλεκτρονικής Μηχανικής και ασχολούμαι με τη δημιουργία σύγχρονων, διαδικτυακών εφαρμογών που δίνουν έμφαση στην εμπειρία χρήστη, κυρίως με React και TypeScript.",
        "Η πορεία μου προς το development ξεκίνησε μέσα από έναν τεχνικό ρόλο με άμεση επαφή με πελάτες, ως μηχανικός πωλήσεων. Για αρκετά χρόνια ανέλυα απαιτήσεις, συνεργαζόμουν με διαφορετικούς stakeholders και μετέφραζα σύνθετες ανάγκες σε πρακτικές λύσεις. Αυτή η εμπειρία επηρεάζει ακόμη τον τρόπο που δουλεύω στο frontend: με καθαρή δομή, ουσιαστική σκέψη και έμφαση στη χρηστικότητα.",
      ],
      profile: {
        role: "Frontend Engineer",
        summary: "UI builder με engineering mindset",
        focusLabel: "Focus",
        focus: "Scalable product UI",
        approachLabel: "Προσέγγιση",
        approach: "Systems + usability",
        stackLabel: "Stack",
        stack: "React + TypeScript",
      },
      story: {
        eyebrow: "Production experience",
        title: "Από πραγματικά συστήματα σε frontend αρχιτεκτονική",
        paragraphs: [
          "Πέρα από προσωπικά projects, έχω δουλέψει σε full-stack εφαρμογή που χρησιμοποιείται σε production από μεγάλο αριθμό χρηστών.",
          "Το σύστημα δημιουργήθηκε για να αντικαταστήσει πάνω από δέκα χρόνια αδόμητων οικονομικών δεδομένων σε Excel με μια οργανωμένη web εφαρμογή βασισμένη σε database. Δουλεύοντας σε μικρή ομάδα, είχα κυρίως την ευθύνη του frontend και συνέβαλα στη συνολική αρχιτεκτονική του UI και στην εμπειρία χρήστη.",
          "Σχεδίασα και υλοποίησα το layout και τη δομή των components, όπως πίνακες δεδομένων, φόρμες, φίλτρα και αναζήτηση. Έδωσα ιδιαίτερη έμφαση στα reusable components, ώστε το interface να παραμένει συνεπές και εύκολα διαχειρίσιμο όσο το σύστημα μεγάλωνε.",
          "Η εφαρμογή κάλυπτε πραγματικές ανάγκες, όπως διαχείριση πελατών και οικονομικών στοιχείων. Περιλάμβανε authentication με sessions, asynchronous data flows και δυνατότητα export σε PDF και Excel μέσω task polling, ώστε το UI να παραμένει responsive ακόμη και σε πιο απαιτητικές διεργασίες.",
          "Αυτή η εμπειρία μού έδωσε μια πιο ολοκληρωμένη εικόνα για το πώς λειτουργεί μια frontend εφαρμογή σε πραγματικό production περιβάλλον, ειδικά σε συνεργασία με backend συστήματα και πραγματικούς χρήστες.",
        ],
      },
      building: {
        eyebrow: "Craft",
        title: "Τι μου αρέσει να χτίζω",
        intro:
          "Με ενδιαφέρουν interfaces που είναι δομημένα, κατανοητά και κοντά σε πραγματικά προϊόντα, όχι απλώς demo εφαρμογές.",
        cards: [
          {
            title: "Responsive interfaces",
            text: "Layouts που λειτουργούν σωστά σε κάθε συσκευή, χωρίς να χάνουν καθαρότητα και ιεραρχία.",
          },
          {
            title: "Component-based systems",
            text: "Επαναχρησιμοποιήσιμες UI δομές που παραμένουν συνεπείς και κλιμακώνονται εύκολα.",
          },
          {
            title: "Data-driven applications",
            text: "Dashboards, φόρμες και workflows όπου η χρηστικότητα παίζει ουσιαστικό ρόλο.",
          },
          {
            title: "Interactive UI",
            text: "Αλληλεπιδράσεις και motion που υποστηρίζουν την εμπειρία, χωρίς να την επιβαρύνουν.",
          },
        ],
        note:
          "Τα περισσότερα projects μου ακολουθούν λογική Single Page Application, με έμφαση σε καθαρό state management, επαναχρησιμοποιήσιμα components και ξεκάθαρο data flow.",
      },
      work: {
        eyebrow: "Process",
        title: "Πώς δουλεύω",
        intro:
          "Βλέπω το frontend development ως μέρος ενός μεγαλύτερου συστήματος, όχι απλώς ως το οπτικό κομμάτι μιας εφαρμογής.",
        points: [
          "καθαρό και ευανάγνωστο κώδικα",
          "σωστή δομή και αρχιτεκτονική components",
          "διαχείριση πραγματικών καταστάσεων (loading, error, success, async flows)",
          "συνεργασία με backend και design",
        ],
        closing:
          "Το υπόβαθρο στη μηχανική και η εμπειρία μου στο presales με βοηθούν να γεφυρώνω τις ανάγκες του χρήστη και της επιχείρησης με την τεχνική υλοποίηση. Προσπαθώ να σκέφτομαι σε επίπεδο συστημάτων και όχι μόνο μεμονωμένων features.",
      },
      focus: {
        eyebrow: "Current focus",
        title: "Τρέχον focus",
        paragraphs: [
          "Παράλληλα με την επαγγελματική μου εμπειρία, δουλεύω ενεργά πάνω σε projects για να εξελίσσω τις γνώσεις μου στο σύγχρονο frontend και στο full-stack development.",
          "Τα projects του portfolio, όπως dashboards, API-driven εφαρμογές και interactive interfaces, έχουν δημιουργηθεί με στόχο να δοκιμάσω διαφορετικές τεχνολογίες και να προσεγγίσω πιο ρεαλιστικά σενάρια ανάπτυξης.",
        ],
      },
      beyond: {
        eyebrow: "Beyond code",
        title: "Πέρα από τον κώδικα",
        text: "Με ενδιαφέρει ιδιαίτερα το design και η οπτική επικοινωνία, μέσα από graphic και video design. Αυτό επηρεάζει φυσικά τον τρόπο που σκέφτομαι το UI, το layout και τη συνολική εμπειρία χρήστη. Για μένα, το frontend development δεν είναι μόνο λειτουργικότητα. Είναι η δημιουργία εμπειριών που είναι καθαρές, προσεγμένες και ευχάριστες στη χρήση.",
      },
      cta: {
        eyebrow: "Let's connect",
        text: "Αυτή την περίοδο εστιάζω στο να εξελίσσομαι ως frontend engineer και να συμμετέχω σε πραγματικές εφαρμογές. Αν ψάχνετε κάποιον που συνδυάζει engineering σκέψη με έμφαση στο frontend και το user experience, θα χαρώ να επικοινωνήσουμε.",
        button: "Επικοινωνία",
      },
    },
};


