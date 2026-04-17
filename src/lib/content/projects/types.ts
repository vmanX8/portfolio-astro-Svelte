/**
 * Shared project content types.
 */

import type { Locale } from "../../i18n/messages";

export type Project = {
  id: string;
  title: string;
  summary: string;
  details: string;
  tech: string[];
  icon?: string;
  demoUrl?: string;
  repoUrl?: string;
};

export type ProjectBase = {
  id: string;
  tech: string[];
  icon?: string;
  demoUrl?: string;
  repoUrl?: string;
};

export type ProjectText = {
  title: string;
  summary: string;
  details: string;
};

export type LocalizedProjectText = Record<Locale, Record<string, ProjectText>>;
