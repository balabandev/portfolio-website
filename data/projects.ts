import type { Project } from "@/types/project";

export const PROJECTS: readonly Project[] = [
  {
    slug: "eco-meister-haus",
    kind: "client",
    title: "Eco Meister Haus",
    summary:
      "Сайт строительной компании (SIP-дома, Берлин и Бранденбург) с ИИ-консультантом.",
    // role: "Full-stack разработка",   // ← заполните
    stack: ["HTML5", "CSS3", "JavaScript"], // ← заполните
    highlights: [
      "Мультиязычность: DE / RO / EN / RU",
      "SEO: canonical, Open Graph, Twitter Cards",
      "Юридические страницы под немецкий рынок",
      "Встроенный ИИ-консультант по вопросам строительства",
    ],
    // image: { src: "/projects/eco-meister-haus.webp", alt: "Главная страница Eco Meister Haus", width: 1600, height: 1000 },
    caseStudy: {
      // problem: "…",   // что нужно было бизнесу
      solution:
        "Многостраничный сайт на четырёх языках с SEO-разметкой, юридическими страницами под немецкий рынок и встроенным ИИ-консультантом по вопросам строительства.",
      // result: "…",    // метрики, отзыв, факты
    },
    links: { demo: "https://ecomeisterhaus.de/" },
    featured: true,
  },
  {
    slug: "bee-voyage",
    kind: "personal",
    title: "Bee Voyage",
    summary: "", // ← заполните
    stack: ["React", "Tailwind CSS"],
    links: { demo: "https://bee-voyage.vercel.app/" },
    featured: true,
  },
  {
    slug: "snake",
    kind: "experiment",
    title: "Snake",
    summary: "Классическая игра в браузере со счётом и рекордом.",
    stack: ["JavaScript", "HTML5", "CSS3"],
    links: { demo: "https://snakegame-lyart-five.vercel.app/" },
    featured: false,
  },
];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug);
}

export function getCaseStudyProjects(): Project[] {
  return PROJECTS.filter((project) => project.caseStudy);
}