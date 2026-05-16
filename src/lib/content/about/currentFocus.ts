import type { Locale } from "../../i18n/messages";

export type CurrentFocus = {
  title: string;
  summary: string;
  items: string[];
  updatedAt: string;
};

export const currentFocusByLanguage: Record<Locale, CurrentFocus> = {
  en: {
    title: "Current focus",
    summary:
      "I am evolving the Java hotel reservation project into a complete full-stack application with a Spring Boot server, a real database, and a polished React frontend that presents the booking flow clearly and professionally.",
    items: [
      "Spring Boot backend with structured REST APIs for rooms, customers, reservations, availability, and cancellations",
      "Database design with relational tables, validation rules, and clean persistence for real booking scenarios",
      "React frontend focused on a polished hotel-style presentation, responsive UI, and clear user flows",
      "Employer-facing showcase with architecture diagrams, API documentation, and a complete end-to-end demo",
    ],
    updatedAt: "2026-05-16",
  },
  gr: {
    title: "Τρέχουσα κατεύθυνση",
    summary:
      "Αυτή την περίοδο εξελίσσω το Java hotel reservation project σε μια ολοκληρωμένη full-stack εφαρμογή, με Spring Boot server, πραγματική βάση δεδομένων και ένα προσεγμένο React frontend που παρουσιάζει καθαρά και επαγγελματικά τη ροή κρατήσεων.",
    items: [
      "Spring Boot backend με δομημένα REST APIs για δωμάτια, πελάτες, κρατήσεις, διαθεσιμότητα και ακυρώσεις",
      "Σχεδιασμός βάσης δεδομένων με relational tables, validation rules και καθαρή αποθήκευση για πραγματικά booking scenarios",
      "React frontend με έμφαση σε προσεγμένη hotel-style παρουσίαση, responsive UI και ξεκάθαρες ροές χρήστη",
      "Employer-facing showcase με architecture diagrams, API documentation και ολοκληρωμένο end-to-end demo",
    ],
    updatedAt: "2026-05-16",
  },
};
