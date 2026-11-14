import { ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { featuredProjects } from "@/data/projects";

export async function FeaturedProjects() {
  const t = await getTranslations("Projects");

  return (
    <section className="wrap py-16 md:py-20">
      <SectionHeading
        index="01"
        label={t("label")}
        title={t("title")}
        action={
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-fg"
          >
            {t("all")}
            <ArrowRight size={14} aria-hidden />
          </Link>
        }
      />

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}