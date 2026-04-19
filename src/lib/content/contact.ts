import type { Locale } from "../i18n/messages";

export type ContactLinks = {
  email: string;
  github: string;
  linkedin: string;
};

export type ContactCopy = {
  homeTitle: string;
  homeSubtitle: string;
  pageTitle: string;
  pageSubtitle: string;
  pageIntro: string;
  methodsTitle: string;
  formTitle: string;
  formNote: string;
  nameLabel: string;
  emailLabel: string;
  subjectLabel: string;
  messageLabel: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  subjectPlaceholder: string;
  messagePlaceholder: string;
  submit: string;
  openContact: string;
  copyEmail: string;
  email: string;
  github: string;
  linkedin: string;
};

export const contactLinks: ContactLinks = {
  email: "v.manouhos@gmail.com",
  github: "https://github.com/vmanX8",
  linkedin: "https://www.linkedin.com/in/vangelis-manouhos-3b0173127/",
} as const;

export const contactCopy: Record<Locale, ContactCopy> = {
  en: {
    homeTitle: "Let's connect",
    homeSubtitle:
      "Have a project, collaboration, or frontend role in mind? Reach me directly or open the contact page.",
    pageTitle: "Contact",
    pageSubtitle:
      "Want to build something together, talk about frontend work, or ask about availability?",
    pageIntro:
      "Send me a message with a few details and I will get back to you. I am open to frontend roles, freelance work, and collaborations around clear, modern web interfaces.",
    methodsTitle: "Other ways to reach me",
    formTitle: "Send a message",
    formNote: "This opens your email app with the message prepared.",
    nameLabel: "Name",
    emailLabel: "Email",
    subjectLabel: "Subject",
    messageLabel: "Message",
    namePlaceholder: "Your name",
    emailPlaceholder: "you@example.com",
    subjectPlaceholder: "What is this about?",
    messagePlaceholder: "Write your message...",
    submit: "Prepare email",
    openContact: "Open contact page",
    copyEmail: "Email me",
    email: "Email",
    github: "GitHub",
    linkedin: "LinkedIn",
  },
  gr: {
    homeTitle: "Ας συνδεθούμε",
    homeSubtitle:
      "Έχετε κάποιο project, συνεργασία ή frontend ρόλο στο μυαλό σας; Επικοινωνήστε άμεσα ή ανοίξτε τη σελίδα επικοινωνίας.",
    pageTitle: "Επικοινωνία",
    pageSubtitle:
      "Θέλετε να χτίσουμε κάτι μαζί, να μιλήσουμε για frontend δουλειά ή να ρωτήσετε για διαθεσιμότητα;",
    pageIntro:
      "Στείλτε μου ένα μήνυμα με λίγες λεπτομέρειες και θα απαντήσω. Είμαι ανοιχτός σε frontend ρόλους, freelance δουλειά και συνεργασίες γύρω από καθαρά, μοντέρνα web interfaces.",
    methodsTitle: "Άλλοι τρόποι επικοινωνίας",
    formTitle: "Στείλτε μήνυμα",
    formNote: "Ανοίγει την εφαρμογή email σας με έτοιμο το μήνυμα.",
    nameLabel: "Όνομα",
    emailLabel: "Email",
    subjectLabel: "Θέμα",
    messageLabel: "Μήνυμα",
    namePlaceholder: "Το όνομά σας",
    emailPlaceholder: "you@example.com",
    subjectPlaceholder: "Με τι σχετίζεται;",
    messagePlaceholder: "Γράψτε το μήνυμά σας...",
    submit: "Προετοιμασία email",
    openContact: "Άνοιγμα σελίδας επικοινωνίας",
    copyEmail: "Στείλτε email",
    email: "Email",
    github: "GitHub",
    linkedin: "LinkedIn",
  },
};
