"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";

export function LanguageSwitcher() {
  const current = useLocale();
  const pathname = usePathname();
  const t = useTranslations("Nav");

  return (
    <div
      role="group"
      aria-label={t("language")}
      className="flex items-center rounded-lg border border-border bg-surface p-0.5 font-mono text-xs"
    >
      {routing.locales.map((locale) => {
        const active = locale === current;

        return (
          <Link
            key={locale}
            href={pathname}
            locale={locale}
            lang={locale}
            hrefLang={locale}
            aria-current={active ? "true" : undefined}
            className={cn(
              "rounded-md px-2 py-1 uppercase transition-colors",
              active
                ? "bg-accent-soft text-accent"
                : "text-muted hover:text-foreground",
            )}
          >
            {locale}
          </Link>
        );
      })}
    </div>
  );
}