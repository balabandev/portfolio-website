import Link from "next/link";
import { Container } from "@/components/container";
import { ExternalLink } from "@/components/external-link";
import { ProjectCard } from "@/components/project-card";
import { PROJECTS } from "@/data/projects";
import { STACK } from "@/data/stack";
import { SITE } from "@/lib/site";

const featuredProjects = PROJECTS.filter((project) => project.featured);

export default function HomePage() {
  return (
    <>
      <section className="py-20 sm:py-28">
        <Container>
          {SITE.availableForWork && (
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs text-muted">
              <span className="size-2 rounded-full bg-green-500" aria-hidden />
              Открыт к предложениям
            </p>
          )}
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">{SITE.name}</h1>
          <p className="mt-2 text-xl text-muted sm:text-2xl">{SITE.role}</p>
          <p className="mt-6 max-w-2xl text-lg">{SITE.tagline}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="rounded-lg bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              Смотреть проекты
            </Link>
            <a
              href={`mailto:${SITE.email}`}
              className="rounded-lg border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-muted"
            >
              Написать мне
            </a>
          </div>
        </Container>
      </section>

      <section aria-labelledby="stack-title" className="border-t border-border py-16">
        <Container>
          <h2 id="stack-title" className="mb-8 text-2xl font-semibold tracking-tight">Стек</h2>
          <dl className="grid gap-6 sm:grid-cols-3">
            {STACK.map(({ group, items }) => (
              <div key={group}>
                <dt className="mb-2 text-sm text-muted">{group}</dt>
                <dd>{items.join(" · ")}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section aria-labelledby="featured-title" className="border-t border-border py-16">
        <Container>
          <div className="mb-8 flex items-baseline justify-between">
            <h2 id="featured-title" className="text-2xl font-semibold tracking-tight">Избранные проекты</h2>
            <Link href="/projects" className="text-sm text-accent underline-offset-4 hover:underline">
              Все проекты →
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </section>

      <section aria-labelledby="contact-title" className="border-t border-border py-16">
        <Container>
          <h2 id="contact-title" className="text-2xl font-semibold tracking-tight">Давайте работать вместе</h2>
          <p className="mt-3 max-w-xl text-muted">
            Ищу позицию в команде и беру фриланс-проекты. Напишите, что нужно сделать, и я отвечу в течение дня.
          </p>
          <p className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
            <a href={`mailto:${SITE.email}`} className="text-accent underline-offset-4 hover:underline">{SITE.email}</a>
            <ExternalLink href={SITE.telegram} className="text-accent underline-offset-4 hover:underline">Telegram</ExternalLink>
          </p>
        </Container>
      </section>
    </>
  );
}