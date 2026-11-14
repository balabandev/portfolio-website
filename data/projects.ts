export type ProjectKind = "freelance" | "company" | "personal";

export type Project = {
  slug: string;
  name: string;
  url: string;
  kind?: ProjectKind;
  stack: string[];
  featured: boolean;
  image?: string;
};

export const projects: Project[] = [
  {
    slug: "eco-meister-haus",
    name: "Eco Meister Haus",
    url: "https://ecomeisterhaus.de",
    kind: "freelance",
    stack: ["HTML5", 
        "Tailwind CSS 4", 
        "JavaScript"
    ],
    featured: true,
  },
  {
    slug: "bee-voyage",
    name: "Bee Voyage",
    url: "https://bee-voyage.vercel.app",
    kind: "personal",
    stack: [
      "React 19",
      "Vite",
      "Tailwind CSS 4",
      "React Router",
      "i18next",
      "Vercel",
    ],
    featured: true,
  },
  {
    slug: "sidal-grup",
    name: "Sidal Grup",
    url: "https://www.sidalgrup.md",
    kind: "company",
    stack: ["HTML5", 
        "Tailwind CSS 4", 
        "JavaScript",
        "PHP",
        "Laravel 10"
    ],
    featured: true,
  },
  {
    slug: "elitgran",
    name: "Elitgran",
    url: "https://www.elitgran.md",
    kind: "company",
    stack: ["HTML5", 
        "Tailwind CSS 4", 
        "JavaScript",
        "PHP",
        "Laravel 10"
    ],
    featured: false,
  },
  {
    slug: "snake",
    name: "Snake",
    url: "https://snakegame-lyart-five.vercel.app",
    kind: "personal",
    stack: ["HTML5", 
        "CSS3", 
        "JavaScript"
    ],
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);