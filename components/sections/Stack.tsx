import { getTranslations } from "next-intl/server";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { stackGroups } from "@/data/stack";

export async function Stack() {
  const t = await getTranslations("Stack");

  return (
    <section className="wrap py-16 md:py-20">
      <SectionHeading index="02" label={t("label")} title={t("title")} />

      <div className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {stackGroups.map(({ key, items }) => (
          <div key={key}>
            <h3 className="eyebrow">{t(`groups.${key}`)}</h3>
            <ul className="mt-4 border-t border-line">
              {items.map(({ name, note }) => (
                <li key={name} className="border-b border-line py-3">
                  <span className="text-sm">{name}</span>
                  {note && (
                    <span className="mt-1 block font-mono text-xs text-faint">
                      {note}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}