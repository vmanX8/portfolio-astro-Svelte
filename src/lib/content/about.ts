/**
 * About Content (Section 2 Data)
 *
 * This file contains the "About Me" section content in multiple languages.
 *
 * Purpose:
 * - Stores about section text (title + paragraphs)
 * - Separates content from code
 * - Supports multiple languages
 * - Provides single source of truth for this content
 *
 * Used by:
 * - AboutSect.svelte (displays on homepage)
 * - API routes /api/section2 and /gr/api/section2 (serves to frontend)
 *
 * Why both direct import AND API?
 * - Direct import: Used as fallback if API fails
 * - API route: Demonstrates server-client data flow pattern
 * - In a real app, this would come from a CMS or database
 */

// === TYPE DEFINITION ===

/**
 * Locale - The supported languages
 *
 * Must match the Locale type from messages.ts
 * TypeScript will error if we try to use unsupported languages
 */
export type Locale = "en" | "gr";

// === ABOUT CONTENT ===

/**
 * aboutContent - All about section text organized by language
 *
 * Each language has:
 * - title: Section heading
 * - highlight: Highlight text
 * - paragraphs: Array of paragraph strings
 *
 * The "as const" makes TypeScript treat this as read-only
 * This prevents accidental modifications and enables better type checking
 *
 * Usage:
 * ```typescript
 * const title = aboutContent["en"].title;
 * const paragraphs = aboutContent["gr"].paragraphs;
 * ```
 */
export const aboutContent = {
	// === ENGLISH CONTENT ===
	en: {
		title: "About me",
		highlight: "Turning ideas and design into meaningful web experiences.",
		paragraphs: [
			"I’m an Electronics Engineer who found his way into front-end development through design. What excites me about the web is the balance between logic and creativity — transforming visuals and mockups into interactive digital experiences.",

			"My background in photo and video editing shaped my eye for detail, aesthetics, and storytelling. Front-end development became the natural point where design meets code, allowing me to work on websites from concept to implementation with a focus on clarity and usability.",

			"Front-end is my main focus and passion, while full-stack knowledge helps me better understand how applications work as a whole. My goal is to build a strong portfolio of clean, intentional websites that feel intuitive and enjoyable to use, within collaborative and creative teams.",

			"I’m especially drawn to creative studio environments like Web Eleven, where website design and implementation go hand in hand. I thrive in collaborative teams and aim to grow through meaningful, real-world projects."
		]
	},

	// === GREEK CONTENT ===
	gr: {
		title: "Σχετικά με εμένα",
		highlight: "Μετατρέποντας ιδέες και design σε ουσιαστικές web εμπειρίες.",
		paragraphs: [
			"Είμαι Ηλεκτρονικός Μηχανικός που οδηγήθηκε στο front-end development μέσα από το design. Αυτό που με γοητεύει στο web είναι η ισορροπία ανάμεσα στη λογική και τη δημιουργικότητα — η μετατροπή ιδεών και mockups σε διαδραστικές ψηφιακές εμπειρίες.",

			"Η ενασχόλησή μου με το photo και video editing διαμόρφωσε τον τρόπο που προσεγγίζω την αισθητική, τη λεπτομέρεια και το storytelling. Το front-end αποτέλεσε το φυσικό σημείο όπου το design συναντά τον κώδικα, από το πρώτο mockup έως την τελική υλοποίηση.",

			"Το front-end είναι το βασικό μου αντικείμενο και πάθος, ενώ η γνώση του full stack με βοηθά να κατανοώ καλύτερα τη συνολική λειτουργία μιας εφαρμογής. Στόχος μου είναι να δημιουργώ καθαρές, ουσιαστικές ιστοσελίδες με έμφαση στην εμπειρία του χρήστη, μέσα σε δημιουργικά και συνεργατικά περιβάλλοντα.",

			"Με ελκύουν περιβάλλοντα δημιουργικού χαρακτήρα όπως η Web Eleven, όπου το website design και η υλοποίηση συνδυάζονται ουσιαστικά. Απολαμβάνω τη συνεργασία και τη συνεχή εξέλιξη μέσα από πραγματικά projects."
		]
	}
} as const;
