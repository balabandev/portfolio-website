import { getTranslations } from "next-intl/server";
import { SectionHeading } from "@/components/ui/SectionHeading";

const entries = [
  { key: "freelance", current: true },
  { key: "webit" },
  { key: "course" },
  { key: "start" },
] as const;

export async function Experience() {
  const t = await getTranslations("Experience");

  return (
    <section className="wrap py-16 md:py-20">
      <SectionHeading index="04" label={t("label")} title={t("title")} />

      <ol className="mt-4">
        {entries.map((entry) => {
          const { key } = entry;
          const isCurrent = "current" in entry && entry.current;

          return (
            <li
              key={key}
              className="grid gap-2 border-b border-line py-8 md:grid-cols-12 md:gap-8"
            >
              <p className="eyebrow flex items-center gap-2 md:col-span-3 md:pt-1.5">
                {isCurrent && (
                  <span aria-hidden className="size-1.5 rounded-full bg-ok" />
                )}
                {t(`items.${key}.period`)}
              </p>

              <div className="md:col-span-9">
                <h3 className="text-lg font-semibold tracking-tight">
                  {t(`items.${key}.role`)}
                </h3>
                {t.has(`items.${key}.org`) && (
                  <p className="mt-1 text-sm text-muted">
                    {t(`items.${key}.org`)}
                  </p>
                )}
                <p className="mt-3 max-w-2xl text-muted">
                  {t(`items.${key}.text`)}
                </p>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}