import { ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { buttonStyles } from "@/components/ui/button";
import { Reveal } from "@/components/ui/Reveal";

const heroStack = ["React", "Next.js", "Node.js", "Laravel", "TALL"];

export async function Hero() {
  const t = await getTranslations("Hero");

  return (
    <section className="relative overflow-hidden">
      {/* Фон: сетка с маской и акцентное свечение */}
       <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgb(255_255_255/0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.04)_1px,transparent_1px)] bg-size-[48px_48px] mask-[radial-gradient(ellipse_at_center,black,transparent_70%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-72 w-160 max-w-full -translate-x-1/2 rounded-full bg-accent/20 blur-3xl"
      />

      <div className="container-page flex min-h-[calc(100svh-4rem)] flex-col justify-center py-20 sm:py-28">
        <Reveal>
          <p className="inline-flex items-center gap-2.5 rounded-full border border-border bg-surface px-3.5 py-1.5 font-mono text-xs text-muted">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
            </span>
            {t("status")}
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            {t.rich("title", {
              accent: (chunks) => (
                <span className="bg-linear-to-r from-accent to-violet-400 bg-clip-text text-transparent">
                  {chunks}
                </span>
              ),
            })}
          </h1>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted text-pretty">
            {t("subtitle")}
          </p>
        </Reveal>

        <Reveal delay={0.24} className="mt-9 flex flex-wrap gap-3">
          <Link href="/#projects" className={buttonStyles("primary")}>
            {t("ctaProjects")}
            <ArrowRight className="size-4" />
          </Link>
          <Link href="/#contact" className={buttonStyles("secondary")}>
            {t("ctaContact")}
          </Link>
        </Reveal>

        <Reveal
          delay={0.32}
          className="mt-14 flex flex-wrap items-center gap-x-4 gap-y-3"
        >
          <span className="font-mono text-xs text-muted">{t("experience")}</span>
          <span aria-hidden className="hidden h-4 w-px bg-border sm:block" />
          <ul className="flex flex-wrap gap-2">
            {heroStack.map((tech) => (
              <li
                key={tech}
                className="rounded-md border border-border bg-surface px-2.5 py-1 font-mono text-xs text-muted"
              >
                {tech}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}