import type { Metadata } from "next";
import { routing } from "@/i18n/routing";
import { site } from "@/data/site";

const vercelHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (vercelHost ? `https://${vercelHost}` : "http://localhost:3000")
).replace(/\/$/, "");

const ogLocales: Record<string, string> = {
  en: "en_US",
  ro: "ro_RO",
  ru: "ru_RU",
};

type Args = {
  locale: string;
  path?: string;
  title?: string;
  description: string;
};

export function buildMetadata({
  locale,
  path = "",
  title,
  description,
}: Args): Metadata {
  const languages: Record<string, string> = Object.fromEntries(
    routing.locales.map((l) => [l, `/${l}${path}`])
  );
  languages["x-default"] = `/${routing.defaultLocale}${path}`;

  return {
    ...(title && { title }),
    description,
    alternates: { canonical: `/${locale}${path}`, languages },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: ogLocales[locale],
      url: `/${locale}${path}`,
      title: title ? `${title} — ${site.name}` : site.name,
      description,
    },
  };
}