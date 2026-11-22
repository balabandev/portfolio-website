import type { Metadata } from "next";
import { ArrowUpRight, Download } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { CopyButton } from "@/components/ui/CopyButton";
import { cvHref, site } from "@/data/site";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ContactPage" });

  return { title: t("label"), description: t("lead") };
}

const bare = (url: string) => url.replace(/^https?:\/\/(www\.)?/, "");

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("ContactPage");

  const channels = [
    {
      key: "email",
      label: "Email",
      value: site.links.email,
      href: `mailto:${site.links.email}`,
      external: false,
    },
    {
      key: "telegram",
      label: "Telegram",
      value: "@bxlxbxn",
      href: site.links.telegram,
      external: true,
    },
    {
      key: "github",
      label: "GitHub",
      value: bare(site.links.github),
      href: site.links.github,
      external: true,
    },
    {
      key: "linkedin",
      label: "LinkedIn",
      value: bare(site.links.linkedin),
      href: site.links.linkedin,
      external: true,
    },
  ];

  const details = [
    { label: t("locationLabel"), value: t("locationValue") },
    { label: t("availabilityLabel"), value: t("availabilityValue") },
  ];

  return (
    <section className="wrap pb-8 pt-16 md:pt-24">
      <div className="border-b border-line pb-10">
        <p className="eyebrow">
          <span className="text-accent">06</span> / {t("label")}
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          {t("title")}
        </h1>
        <p className="mt-5 max-w-xl text-pretty text-lg text-muted">
          {t("lead")}
        </p>
      </div>

      <div className="mt-4 grid gap-12 md:grid-cols-12">
        <ul className="md:col-span-7">
          {channels.map(({ key, label, value, href, external }) => (
            <li
              key={key}
              className="group flex items-center justify-between gap-4 border-b border-line"
            >
              <a
                href={href}
                {...(external && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
                className="flex min-w-0 flex-1 flex-col gap-1.5 py-6 sm:flex-row sm:items-baseline sm:gap-8"
              >
                <span className="eyebrow sm:w-24 sm:shrink-0">{label}</span>
                <span className="truncate text-lg tracking-tight transition-colors group-hover:text-accent sm:text-xl">
                  {value}
                </span>
              </a>

              {key === "email" ? (
                <CopyButton
                  text={value}
                  label={t("copy")}
                  doneLabel={t("copied")}
                />
              ) : (
                <ArrowUpRight
                  size={18}
                  aria-hidden
                  className="shrink-0 text-faint transition-colors group-hover:text-accent"
                />
              )}
            </li>
          ))}
        </ul>

        <aside className="md:col-span-4 md:col-start-9">
          <h2 className="eyebrow pt-6">{t("details")}</h2>
          <dl className="mt-4 border-t border-line">
            {details.map(({ label, value }) => (
              <div
                key={label}
                className="flex items-baseline justify-between gap-6 border-b border-line py-3.5"
              >
                <dt className="eyebrow shrink-0">{label}</dt>
                <dd className="text-right text-sm">{value}</dd>
              </div>
            ))}
          </dl>

          <a
            href={cvHref(locale)}
            download
            className="mt-6 inline-flex h-11 items-center gap-2 rounded-md border border-line-strong px-5 text-sm transition-colors hover:bg-surface-2"
          >
            <Download size={16} aria-hidden />
            {t("cv")}
            <span className="eyebrow !text-faint">PDF</span>
          </a>
        </aside>
      </div>
    </section>
  );
}