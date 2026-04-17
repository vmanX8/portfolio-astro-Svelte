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
      "I am actively building projects to deepen my understanding of modern frontend and full-stack development.",
    items: [
      "React and TypeScript application architecture",
      "Reusable component systems for dashboards and workflows",
      "API-driven interfaces with clear loading, error, and success states",
      "Full-stack practice with Node.js, Express, PostgreSQL, and REST APIs",
    ],
    updatedAt: "2026-04-17",
  },
  gr: {
    title: "Τρέχουσα κατεύθυνση",
    summary:
      "Δουλεύω ενεργά πάνω σε projects για να εξελίσσω τις γνώσεις μου στο σύγχρονο frontend και στο full-stack development.",
    items: [
      "Αρχιτεκτονική εφαρμογών με React και TypeScript",
      "Reusable component systems για dashboards και workflows",
      "API-driven interfaces με καθαρά loading, error και success states",
      "Full-stack εξάσκηση με Node.js, Express, PostgreSQL και REST APIs",
    ],
    updatedAt: "2026-04-17",
  },
};
