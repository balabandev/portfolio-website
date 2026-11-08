export type ProjectType = "commercial" | "personal";

export type Project = {
    slug: string;
    title: string;
    year: number;
    featured: boolean;
    stack: string[];
    liveUrl?: string;
    repoUrl?: string;
    image: string;
};

export type StackCategory = {
    id: "frontend" | "backend" | "database" | "tools";
    items: string[];
};