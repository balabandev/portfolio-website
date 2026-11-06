import type { Metadata } from "next";
import { Container } from "@/components/container";
import { ProjectCard } from "@/components/project-card";
import { PROJECTS } from "@/data/projects";

export const metadata: Metadata = {
  title: "Проекты",
  description: "Избранные работы: коммерческие сайты, веб-приложения и эксперименты.",
};

export default function ProjectsPage() {
  return (
    <Container className="py-16">
      <h1 className="mb-8 text-3xl font-bold tracking-tight">Проекты</h1>
      <div className="grid gap-6 sm:grid-cols-2">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.slug} project={project} headingLevel="h2" />
        ))}
      </div>
    </Container>
  );
}