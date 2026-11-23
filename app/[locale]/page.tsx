import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/sections/Hero";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Stack } from "@/components/sections/Stack";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import type { Metadata } from "next";
import { getTranslations} from "next-intl/server";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Meta" });

  return buildMetadata({ locale, description: t("description") });
}

type Props = { params: Promise<{ locale: string }> };

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <FeaturedProjects />
      <Stack />
      <About />
      <Experience />
    </>
  );
}