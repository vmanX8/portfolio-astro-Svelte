/**
 * Localized project copy by locale.
 */

import type { LocalizedProjectText } from "./types";

export const projectTextByLanguage: LocalizedProjectText = {
  en: {
    "portfolio": {
      title: "Portfolio Website",
      summary: "Modern, responsive portfolio built with Astro, Svelte, and Tailwind CSS.",
      details:
        "A modular portfolio application built with Astro, Svelte, TypeScript, and Tailwind CSS. It features multilingual support (EN/GR), scroll-based animations, and SEO-friendly structure. The About section consumes data from an Astro API route that simulates backend-driven content, demonstrating API integration in a static front-end context.",
    },
    "react-portfolio": {
      title: "Personal Portfolio - React SPA",
      summary:
        "My first GitHub portfolio project, built as a React SPA with TypeScript, Vite, and Tailwind CSS.",
      details:
        "A modern, responsive personal portfolio built as a single-page application (SPA) with React, TypeScript, and Vite to showcase my front-end development skills, UI design sense, and deployment workflow. It includes a clean layout, smooth navigation, sections for projects, skills, and contact information, plus deployment on Vercel with a GitHub-based CI/CD workflow. The project focuses on mobile-friendly design, interactive components, smooth animations, and a minimal UX centered around developer identity.",
    },
    "snakes-ladders": {
      title: "Snakes & Ladders Game",
      summary: "Classic board game rebuilt in React with a playful modern UI.",
      details:
        "A modern take on the classic Snakes & Ladders game, built with React and TypeScript. Focused on clean component structure, smooth interactions, and a fun UI.",
    },
    "weather-app": {
      title: "Weather App",
      summary: "Live weather dashboard built with React and the OpenWeather API.",
      details:
        "A responsive weather dashboard built with React and TypeScript, using the OpenWeather API to fetch live conditions. Includes search, basic error handling, and a clean data-driven UI.",
    },
    "motion-crm": {
      title: "Client Management Dashboard",
      summary:
        "React SPA prototype built with TypeScript, Tailwind CSS, GSAP, and a jQuery widget.",
      details:
        "A frontend CRM dashboard prototype built with React, TypeScript, and Tailwind CSS, designed to simulate real-world product behavior rather than static UI. The SPA architecture includes routed views, responsive layouts, and reusable components. It features client management flows with searchable tables, lazy-loaded detail views, editable records, and granular loading, error, and saving states. Focused on async data flows, list/detail separation, and smooth GSAP animations for page transitions, drawer interactions, and feedback states. An isolated jQuery widget demonstrates legacy integration without affecting the modern architecture.",
    },
    "movie-app": {
      title: "Movie App",
      summary:
        "Full-stack movie application with Node.js, Express, PostgreSQL, JWT, and REST APIs.",
      details:
        "A full-stack movie application built to explore backend fundamentals and API-driven development. Includes user authentication with JWT, RESTful API design, and CRUD operations for managing movie data. Uses PostgreSQL for persistence and Express.js for server-side logic, with a focus on asynchronous operations and structured data handling. The backend is ready while the frontend is under development, with a React frontend repo planned to complete the full-stack showcase.",
    },
    "hotel-service": {
      title: "Hotel Reservation App",
      summary:
        "Java hotel booking app focused on clean OOP structure, reservation logic, UML, and SQL.",
      details:
        "A Java hotel reservation application built around clean object-oriented design and practical booking flows. It models rooms, customers, and reservations as domain entities, with a service layer for booking, cancellation, availability checks, and search operations. The app includes validation for dates, room availability, and booking conflicts, and uses enums, UUIDs, Java collections, streams, Optional, and LocalDate for safer data handling. UML diagrams and a basic SQL schema support the application structure and document the domain model.",
    },
  },

gr: {
  "portfolio": {
    title: "Portfolio Website",
    summary: "Σύγχρονο και responsive portfolio με Astro, Svelte και Tailwind CSS.",
    details:
      "Portfolio εφαρμογή υλοποιημένη με Astro, Svelte, TypeScript και Tailwind CSS. Υποστηρίζει πολλαπλές γλώσσες (EN/GR), animations και SEO-friendly δομή. Το section About αντλεί δεδομένα από Astro API route που προσομοιώνει backend, αναδεικνύοντας την ενσωμάτωση API σε ένα στατικό front-end περιβάλλον.",
  },

  "react-portfolio": {
    title: "Personal Portfolio - React SPA",
    summary:
      "Το πρώτο μου portfolio project στο GitHub, υλοποιημένο ως React SPA με TypeScript, Vite και Tailwind CSS.",
    details:
      "Σύγχρονο και responsive προσωπικό portfolio, υλοποιημένο ως single-page application (SPA) με React, TypeScript και Vite, με στόχο να παρουσιάσει τις frontend δεξιότητές μου, την αισθητική μου στο UI design και τη διαδικασία deployment. Περιλαμβάνει καθαρό layout, ομαλή πλοήγηση, sections για projects, skills και στοιχεία επικοινωνίας, καθώς και deployment στο Vercel με GitHub-based CI/CD workflow. Το project εστιάζει σε mobile-friendly σχεδιασμό, interactive components, smooth animations και minimal UX γύρω από την developer ταυτότητα.",
  },

  "snakes-ladders": {
    title: "Snakes & Ladders Game",
    summary: "Το κλασικό επιτραπέζιο παιχνίδι σε React εφαρμογή με μοντέρνο και παιχνιδιάρικο UI.",
    details:
      "Μια σύγχρονη εκδοχή του Snakes & Ladders, υλοποιημένη με React και TypeScript. Έμφαση δόθηκε στην καθαρή δομή των components, στις ομαλές αλληλεπιδράσεις και σε ένα ευχάριστο, παιχνιδιάρικο UI.",
  },

  "weather-app": {
    title: "Weather App",
    summary: "Weather dashboard σε React με live δεδομένα από το OpenWeather API.",
    details:
      "Responsive weather dashboard υλοποιημένο με React και TypeScript, που αντλεί live δεδομένα από το OpenWeather API. Περιλαμβάνει αναζήτηση πόλης, βασικό χειρισμό σφαλμάτων και καθαρό, data-driven UI.",
  },

  "motion-crm": {
    title: "Client Management Dashboard",
    summary:
      "React SPA με TypeScript, Tailwind CSS, GSAP και ένα απομονωμένο jQuery widget.",
    details:
      "Prototype CRM dashboard στο frontend, υλοποιημένο με React, TypeScript και Tailwind CSS, με στόχο να προσεγγίσει τη συμπεριφορά ενός πραγματικού προϊόντος και όχι απλώς ενός στατικού UI. Η SPA αρχιτεκτονική περιλαμβάνει routing, responsive layout και επαναχρησιμοποιήσιμα components. Υποστηρίζει ροές διαχείρισης πελατών με searchable πίνακες, lazy-loaded λεπτομέρειες και επεξεργάσιμα δεδομένα, με ξεχωριστή διαχείριση loading, error και saving states. Δίνεται έμφαση σε async data flows, διαχωρισμό λίστας και λεπτομερειών, καθώς και σε στοχευμένα GSAP animations για transitions και feedback. Ένα απομονωμένο jQuery widget δείχνει πώς μπορούν να ενσωματωθούν legacy patterns χωρίς να επηρεάζεται η σύγχρονη αρχιτεκτονική.",
  },

  "movie-app": {
    title: "Movie App",
    summary:
      "Full-stack εφαρμογή ταινιών με Node.js, Express, PostgreSQL, JWT και REST APIs.",
    details:
      "Full-stack εφαρμογή ταινιών που δημιουργήθηκε για εξάσκηση σε backend fundamentals και ανάπτυξη με APIs. Περιλαμβάνει authentication με JWT, σχεδίαση RESTful API και CRUD λειτουργίες για διαχείριση δεδομένων. Χρησιμοποιεί PostgreSQL για αποθήκευση και Express.js για server-side λογική, με έμφαση σε ασύγχρονες ροές και δομημένη διαχείριση δεδομένων. Το backend είναι ολοκληρωμένο, ενώ το frontend βρίσκεται σε εξέλιξη με στόχο την υλοποίηση σε React.",
  },

  "hotel-service": {
    title: "Hotel Reservation App",
    summary:
      "Java εφαρμογή κρατήσεων ξενοδοχείου με καθαρή OOP δομή, reservation logic, UML και SQL.",
    details:
      "Java εφαρμογή κρατήσεων ξενοδοχείου, σχεδιασμένη γύρω από καθαρή αντικειμενοστραφή δομή και πρακτικές ροές booking. Μοντελοποιεί δωμάτια, πελάτες και κρατήσεις ως domain entities, με service layer για δημιουργία κρατήσεων, ακυρώσεις, ελέγχους διαθεσιμότητας και αναζητήσεις. Περιλαμβάνει validation για ημερομηνίες, διαθεσιμότητα δωματίων και συγκρούσεις κρατήσεων, ενώ αξιοποιεί enums, UUIDs, Java collections, streams, Optional και LocalDate για πιο ασφαλή διαχείριση δεδομένων. UML διαγράμματα και ένα βασικό SQL schema υποστηρίζουν τη δομή της εφαρμογής και τεκμηριώνουν το domain model.",
  },
}
};
