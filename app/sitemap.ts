import type { MetadataRoute } from "next";
import { getCaseStudyProjects } from "@/data/projects";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = SITE.nav.map(({ href }) => ({
    url: href === "/" ? SITE.url : `${SITE.url}${href}`,
    changeFrequency: "monthly",
    priority: href === "/" ? 1 : 0.8,
  }));

  const cases: MetadataRoute.Sitemap = getCaseStudyProjects().map(({ slug }) => ({
    url: `${SITE.url}/projects/${slug}`,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...pages, ...cases];
}