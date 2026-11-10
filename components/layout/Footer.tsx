import { ArrowUpRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { siteConfig, socials } from "@/data/site";

export async function Footer() {
  const t = await getTranslations("Footer");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="container-page flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <p className="text-sm text-muted">
            © {year} {siteConfig.name}. {t("rights")}
          </p>
          <p className="font-mono text-xs text-muted/70">{t("built")}</p>
        </div>

        <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
          {socials.map((social) => {
            const external = social.id !== "email";

            return (
              <li key={social.id}>
                <a
                  href={social.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-1 text-muted transition-colors hover:text-foreground"
                >
                  {social.label}
                  {external && <ArrowUpRight className="size-3.5" />}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}