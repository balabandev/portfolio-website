export interface Project {
  slug: string;
  title: string;
  summary: string;
  stack: readonly string[];
  image?: string;
  links: {
    demo?: string;
    repo?: string;
  };
  featured: boolean;
}