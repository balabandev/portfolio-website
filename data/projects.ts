import type { Project } from "@/types/project";

export const PROJECTS: readonly Project[] = [
  {
    slug: "eco-meister-haus",
    kind: "client",
    title: "Eco Meister Haus",
    summary:
      "Сайт строительной компании (SIP-дома, Берлин и Бранденбург) с лид-формой и ИИ-консультантом.",
    stack: [], 
    highlights: [
      "Мультиязычность: DE / RO / EN / RU",
      "SEO: canonical, Open Graph, Twitter Cards",
      "Юридические страницы под немецкий рынок",
      "Встроенный ИИ-консультант по вопросам строительства",
    ],
    links: { demo: "https://ecomeisterhaus.de/" },
    featured: true,
  },
  {
    slug: "bee-voyage",
    kind: "personal",
    title: "Bee Voyage",
    summary: "", 
    stack: [],
    links: { demo: "https://bee-voyage.vercel.app/" },
    featured: true,
  },
  {
    slug: "snake",
    kind: "experiment",
    title: "Snake",
    summary: "Классическая игра в браузере со счётом и рекордом.",
    stack: [],
    links: { demo: "https://snakegame-lyart-five.vercel.app/" },
    featured: false,
  },
] as const;