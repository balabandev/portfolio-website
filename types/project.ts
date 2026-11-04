export type ProjectKind = "client" | "personal" | "experiment";

export interface Project {
  slug: string;
  kind: ProjectKind;
  title: string;
  summary: string;
  role?: string;
  stack: readonly string[];
  highlights?: readonly string[];
  links: {
    demo?: string;
    repo?: string;
  };
  featured: boolean;
}