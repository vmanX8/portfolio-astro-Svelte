/**
 * Shared, language-independent project data.
 */

import type { ProjectBase } from "./projectTypes";

export const projectBaseList: ProjectBase[] = [
  {
    id: "portfolio",
    tech: ["Astro", "Svelte", "Tailwind", "TypeScript"],
    icon: "/assets/projects/portfolio.svg",
    repoUrl: "https://github.com/vmanX8/portfolio-astro-Svelte",
  },
  {
    id: "snakes-ladders",
    tech: ["React", "TypeScript"],
    icon: "/assets/projects/snakes-ladders.svg",
    demoUrl: "https://snakes-n-ladders-rose.vercel.app/",
    repoUrl: "https://github.com/vmanX8/snakesNladders",
  },
  {
    id: "weather-app",
    tech: ["React", "TypeScript", "OpenWeather API"],
    icon: "/assets/projects/weather-app.svg",
    demoUrl: "https://weather-app-six-nu-73.vercel.app/",
    repoUrl: "https://github.com/vmanX8/weather-app",
  },
  {
    id: "motion-crm",
    tech: ["React", "TypeScript", "Tailwind CSS", "GSAP", "React Router", "jQuery"],
    icon: "/assets/projects/crm.svg",
    demoUrl: "https://motion-crm.vercel.app/",
    repoUrl: "https://github.com/vmanX8/motion-crm",
  },
  {
    id: "movie-app",
    tech: ["Node.js", "Express", "PostgreSQL", "JWT", "REST APIs"],
    icon: "/assets/projects/moviedb.svg",
    repoUrl: "https://github.com/vmanX8/movie-app-learning",
  },
];
