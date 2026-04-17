/**
 * Public projects content API.
 */

import type { Locale } from "../../i18n/messages";
import { projectBaseList } from "./data";
import { projectTextByLanguage } from "./locales";
import type { Project, ProjectBase, ProjectText } from "./types";

export type { Project, ProjectBase, ProjectText } from "./types";

function emptyProjectText(id: string): ProjectText {
  return {
    title: id,
    summary: "",
    details: "",
  };
}

function mergeProject(baseProject: ProjectBase, text: ProjectText): Project {
  return {
    ...baseProject,
    ...text,
  };
}

function buildProjectsForLanguage(lang: Locale): Project[] {
  return projectBaseList.map((baseProject) => {
    const text =
      projectTextByLanguage[lang][baseProject.id] ??
      projectTextByLanguage.en[baseProject.id] ??
      emptyProjectText(baseProject.id);

    return mergeProject(baseProject, text);
  });
}

export const projectsByLanguage: Record<Locale, Project[]> = {
  en: buildProjectsForLanguage("en"),
  gr: buildProjectsForLanguage("gr"),
};

export function getProjectsByLanguage(lang: Locale): Project[] {
  return projectsByLanguage[lang];
}

export function getLatestProjectsByLanguage(lang: Locale): Project[] {
  return getProjectsByLanguage(lang).toReversed();
}

export function getFeaturedProjectsByLanguage(lang: Locale, limit = 3): Project[] {
  return getLatestProjectsByLanguage(lang).slice(0, limit);
}
