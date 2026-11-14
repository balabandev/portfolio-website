import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Tag } from "@/components/ui/Tag";
import type { Project } from "@/data/projects";

export async function ProjectCard({ project }: { project: Project }) {
  const t = await getTranslations("Projects");
  const { slug, name, url, kind, stack, image } = project;

  const host = new URL(url).hostname.replace(/^www\./, "");
  const hasRole = t.has(`items.${slug}.role`);

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-lg border border-line bg-surface transition-colors hover:border-line-strong">
      <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-surface-2">
        {image ? (
          <Image
            src={image}
            alt=""
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="flex size-full items-center justify-center">
            <span className="font-mono text-sm text-faint">{host}</span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        {kind && <p className="eyebrow">{t(`kind.${kind}`)}</p>}

        <h3 className="mt-3 flex items-center justify-between gap-3 text-lg font-semibold tracking-tight">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("visit", { name })}
            className="after:absolute after:inset-0"
          >
            {name}
          </a>
          <ArrowUpRight
            size={18}
            aria-hidden
            className="shrink-0 text-faint transition-colors group-hover:text-accent"
          />
        </h3>

        <p className="mt-2 text-sm text-muted">{t(`items.${slug}.summary`)}</p>

        {hasRole && (
          <p className="mt-3 text-sm">
            <span className="text-faint">{t("roleLabel")}: </span>
            {t(`items.${slug}.role`)}
          </p>
        )}

        {stack.length > 0 && (
          <ul className="mt-auto flex flex-wrap gap-1.5 pt-5">
            {stack.map((item) => (
              <li key={item}>
                <Tag>{item}</Tag>
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}