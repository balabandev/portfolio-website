export type ProjectKind = "client" | "personal" | "experiment";

export interface ProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface CaseStudy {
  problem?: string;
  solution?: string;
  result?: string;
}

export interface Project {
  slug: string;
  kind: ProjectKind;
  title: string;
  summary: string;
  role?: string;
  stack: readonly string[];
  highlights?: readonly string[];
  image?: ProjectImage;
  caseStudy?: CaseStudy;
  links: {
    demo?: string;
    repo?: string;
  };
  featured: boolean;
}