import type { Project } from "@/types/project";

export const PROJECTS: readonly Project[] = [
  {
    slug: "example-project",
    title: "Название проекта",
    summary: "Что делает и какую проблему решает. Одно-два предложения.",
    stack: ["Next.js", "TypeScript", "PostgreSQL"],
    links: { demo: "https://example.com", repo: "https://github.com/..." },
    featured: true,
  },
];