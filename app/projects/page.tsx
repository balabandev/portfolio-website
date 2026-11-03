import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { PROJECTS } from "@/data/projects";

export const metadata: Metadata = {
  title: "Проекты",
  description: "Избранные работы: веб-приложения, API и инструменты.",
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="mb-8 text-3xl font-bold">Проекты</h1>
      <div className="grid gap-6 sm:grid-cols-2">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </main>
  );
}