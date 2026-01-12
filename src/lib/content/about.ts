/**
 * About section copy by locale.
 */
export type Locale = "en" | "gr";

/** About section text by locale. */
export const aboutContent = {
	en: {
		title: "About me",
		highlight: "Front-end engineer with an engineering mindset, building modern, user-centered web interfaces.",
		paragraphs: [
			"Front-End Engineer in transition, with a strong engineering foundation and hands-on experience exploring React and modern web technologies. ",

			"Currently working as a Presales/Field Application Engineer, where I™??ve developed a sharp problem-solving mindset, a deep understanding of technical requirements, and the ability to translate user needs into practical solutions.",

			"I™??m actively building my skills in front-end development™??focusing on React, component design, UI/UX fundamentals, and clean, maintainable code. My background in Electrical & Electronic Engineering gives me a structured, analytical approach, while my customer-facing experience helps me think from the user™??s perspective."
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
