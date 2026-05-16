import type { Locale } from "../../i18n/messages";

export type Toolkit = {
  title: string;
  items: string[];
  updatedAt: string;
};

const items = [
  "React",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "SCSS",
  "Bootstrap",
  "Vite",
  "React Router",
  "GSAP",
  "jQuery",
  "Node.js",
  "Express",
  "PostgreSQL",
  "REST APIs",
  "JWT",
  "Java",
  "OOP",
  "UML",
  "SQL",
  "Git",
  "Figma",
  "Canva"
];

export const toolkitByLanguage: Record<Locale, Toolkit> = {
  en: {
    title: "Stack",
    items,
    updatedAt: "2026-05-16",
  },
  gr: {
    title: "Τεχνολογίες",
    items,
    updatedAt: "2026-05-16",
  },
};
