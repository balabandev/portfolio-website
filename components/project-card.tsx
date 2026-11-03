import type { Project } from "@/types/project";

export function ProjectCard({ project }: { project: Project }) {
  const { title, summary, stack, links } = project;

  return (
    <article className="flex flex-col gap-3 rounded-xl border border-neutral-200 p-5 transition hover:border-neutral-400 dark:border-neutral-800 dark:hover:border-neutral-600">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-sm text-neutral-600 dark:text-neutral-400">{summary}</p>

      <ul className="flex flex-wrap gap-2" aria-label="Технологии">
        {stack.map((tech) => (
          <li key={tech} className="rounded-md bg-neutral-100 px-2 py-1 text-xs dark:bg-neutral-800">
            {tech}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex gap-4 text-sm">
        {links.demo && (
          <a href={links.demo} target="_blank" rel="noopener noreferrer" className="underline">
            Demo
          </a>
        )}
        {links.repo && (
          <a href={links.repo} target="_blank" rel="noopener noreferrer" className="underline">
            Code
          </a>
        )}
      </div>
    </article>
  );
}