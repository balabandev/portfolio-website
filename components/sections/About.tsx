import { getTranslations } from "next-intl/server";
import { SectionHeading } from "@/components/ui/SectionHeading";

const points = ["clean", "current", "ai"] as const;

export async function About() {
  const t = await getTranslations("About");

  return (
    <section className="wrap py-16 md:py-20">
      <SectionHeading index="03" label={t("label")} title={t("title")} />

      <div className="mt-10 grid gap-12 md:grid-cols-12">
        <div className="space-y-5 text-lg text-muted md:col-span-7">
          <p>{t("p1")}</p>
          <p>{t("p2")}</p>
        </div>

        <div className="md:col-span-4 md:col-start-9">
          <h3 className="eyebrow">{t("how")}</h3>
          <ul className="mt-4 border-t border-line">
            {points.map((p) => (
              <li
                key={p}
                className="flex items-center gap-3 border-b border-line py-3 text-sm"
              >
                <span
                  aria-hidden
                  className="size-1.5 shrink-0 rounded-[1px] bg-accent"
                />
                {t(`points.${p}`)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}