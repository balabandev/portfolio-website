import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types/project";
import { ExternalLink } from "./external-link";

interface ProjectCardProps {
  project: Project;
  headingLevel?: "h2" | "h3";
}

export function ProjectCard({ project, headingLevel: Heading = "h3" }: ProjectCardProps) {
  const { slug, title, summary, stack, links, image, caseStudy } = project;

  return (
    <article className="flex flex-col gap-3 rounded-xl border border-border p-5 transition-colors hover:border-muted">
      {image && (
        <Image
          {...image}
          sizes="(min-width: 640px) 50vw, 100vw"
          className="mb-1 rounded-lg border border-border"
        />
      )}
      <Heading className="text-lg font-semibold">{title}</Heading>
      {summary && <p className="text-sm text-muted">{summary}</p>}

      {stack.length > 0 && (
        <ul className="flex flex-wrap gap-2" aria-label="Технологии">
          {stack.map((tech) => (
            <li key={tech} className="rounded-md border border-border px-2 py-1 text-xs text-muted">
              {tech}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-auto flex flex-wrap gap-x-4 gap-y-1 pt-2 text-sm">
        {caseStudy && (
          <Link href={`/projects/${slug}`} className="font-medium text-accent underline-offset-4 hover:underline">
            Читать кейс →
          </Link>
        )}
        {links.demo && (
          <ExternalLink href={links.demo} className="text-accent underline-offset-4 hover:underline">
            Demo
          </ExternalLink>
        )}
        {links.repo && (
          <ExternalLink href={links.repo} className="text-accent underline-offset-4 hover:underline">
            Code
          </ExternalLink>
        )}
      </div>
    </article>
  );
}