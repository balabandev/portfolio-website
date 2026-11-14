import { ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { ButtonLink } from "@/components/ui/Button";

export async function Hero() {
  const t = await getTranslations("Hero");

  const spec = [
    { label: t("roleLabel"), value: t("roleValue") },
    { label: t("expLabel"), value: t("expValue") },
    { label: "Frontend", value: "HTML5, CSS3, JavaScript, React" },
    { label: "Backend", value: "Node.js, PHP, Laravel (TALL)" },
    { label: t("dbLabel"), value: "MongoDB, MySQL" },
  ];

  return (
    <section className="wrap pb-20 pt-16 md:pb-28 md:pt-24">
      <div className="grid gap-14 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-7">
          <p className="eyebrow flex items-center gap-2.5">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full rounded-full bg-ok opacity-60 motion-safe:animate-ping" />
              <span className="relative inline-flex size-2 rounded-full bg-ok" />
            </span>
            {t("status")}
          </p>

          <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            {t.rich("title", {
              accent: (chunks) => (
                <span className="text-accent">{chunks}</span>
              ),
            })}
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-lg text-muted">
            {t("lead")}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href="/projects">
              {t("projects")}
              <ArrowRight size={16} aria-hidden />
            </ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              {t("contact")}
            </ButtonLink>
          </div>
        </div>

        <dl className="self-end rounded-lg border border-line bg-surface md:col-span-5">
          {spec.map(({ label, value }) => (
            <div
              key={label}
              className="flex items-baseline justify-between gap-6 border-b border-line px-5 py-3.5 last:border-b-0"
            >
              <dt className="eyebrow shrink-0">{label}</dt>
              <dd className="text-right text-sm">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}