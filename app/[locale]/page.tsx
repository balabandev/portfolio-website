import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/sections/Hero";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Stack } from "@/components/sections/Stack";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";

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