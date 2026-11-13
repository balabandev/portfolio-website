import type { Metadata } from "next";
import { Manrope, JetBrains_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { site } from "@/data/site";
import "../globals.css";

const manrope = Manrope({
  subsets: ["latin", "latin-ext", "cyrillic"],
  variable: "--font-manrope",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin", "latin-ext", "cyrillic"],
  variable: "--font-jetbrains",
  display: "swap",
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: Pick<Props, "params">): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Meta" });

  return {
    title: {
      default: `${site.name} — ${t("title")}`,
      template: `%s — ${site.name}`,
    },
    description: t("description"),
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      className={`${manrope.variable} ${jetbrains.variable}`}
    >
      <body>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}