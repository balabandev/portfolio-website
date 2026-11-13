import { getTranslations, setRequestLocale } from "next-intl/server";
import { site } from "@/data/site";

type Props = { params: Promise<{ locale: string }> };

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Nav");

  return (
    <main className="wrap py-24">
      <p className="eyebrow">{locale}</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight">
        {site.name}
      </h1>
      <p className="mt-3 text-muted">
        {t("home")} · {t("projects")} · {t("contact")}
      </p>
    </main>
  );
}