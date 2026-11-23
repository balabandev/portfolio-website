import { getTranslations } from "next-intl/server";
import { ButtonLink } from "@/components/ui/Button";

export default async function NotFound() {
  const t = await getTranslations("NotFound");

  return (
    <section className="wrap py-24 md:py-32">
      <p className="eyebrow">
        <span className="text-accent">404</span>
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
        {t("title")}
      </h1>
      <p className="mt-5 max-w-md text-lg text-muted">{t("text")}</p>
      <ButtonLink href="/" className="mt-10">
        {t("back")}
      </ButtonLink>
    </section>
  );
}