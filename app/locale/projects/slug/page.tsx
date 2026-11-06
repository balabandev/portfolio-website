import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { ExternalLink } from "@/components/external-link";
import { getCaseStudyProjects, getProject } from "@/data/projects";

export const dynamicParams = false;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getCaseStudyProjects().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project?.caseStudy) return {};

  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/projects/${slug}` },
    openGraph: { type: "article", title: project.title, description: project.summary },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project?.caseStudy) notFound();

  const { title, summary, role, stack, highlights, image, links, caseStudy } = project;

  const sections = [
    { title: "Задача", body: caseStudy.problem },
    { title: "Решение", body: caseStudy.solution },
    { title: "Результат", body: caseStudy.result },
  ].flatMap(({ title, body }) => (body ? [{ title, body }] : []));

  return (
    <Container className="max-w-3xl py-16">
      <Link href="/projects" className="text-sm text-muted hover:text-foreground">
        ← Все проекты
      </Link>

      <h1 className="mt-6 text-4xl font-bold tracking-tight">{title}</h1>
      {summary && <p className="mt-4 text-lg text-muted">{summary}</p>}
      {role && <p className="mt-2 text-sm text-muted">Роль: {role}</p>}

      <div className="mt-6 flex gap-4 text-sm">
        {links.demo && (
          <ExternalLink href={links.demo} className="text-accent underline-offset-4 hover:underline">
            Открыть сайт ↗
          </ExternalLink>
        )}
        {links.repo && (
          <ExternalLink href={links.repo} className="text-accent underline-offset-4 hover:underline">
            Код ↗
          </ExternalLink>
        )}
      </div>

      {image && (
        <Image
          {...image}
          priority
          sizes="(min-width: 768px) 768px, 100vw"
          className="mt-10 rounded-xl border border-border"
        />
      )}

      {stack.length > 0 && (
        <ul className="mt-8 flex flex-wrap gap-2" aria-label="Технологии">
          {stack.map((tech) => (
            <li key={tech} className="rounded-md border border-border px-2.5 py-1 text-sm text-muted">
              {tech}
            </li>
          ))}
        </ul>
      )}

      {highlights && highlights.length > 0 && (
        <ul className="mt-8 list-disc space-y-2 pl-5">
          {highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}

      {sections.map(({ title, body }) => (
        <section key={title} className="mt-12">
          <h2 className="mb-3 text-2xl font-semibold tracking-tight">{title}</h2>
          <p className="leading-relaxed">{body}</p>
        </section>
      ))}
    </Container>
  );
}