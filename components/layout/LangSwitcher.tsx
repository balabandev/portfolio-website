"use client";

import clsx from "clsx";
import { useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const names: Record<string, string> = {
  en: "English",
  ro: "Română",
  ru: "Русский",
};

export function LangSwitcher({ className }: { className?: string }) {
  const current = useLocale();
  const pathname = usePathname();

  return (
    <div
      role="group"
      aria-label="Language"
      className={clsx("flex items-center gap-1", className)}
    >
      {routing.locales.map((locale) => {
        const active = locale === current;
        return (
          <Link
            key={locale}
            href={pathname}
            locale={locale}
            lang={locale}
            title={names[locale]}
            aria-current={active ? "true" : undefined}
            className={clsx(
              "rounded-sm px-2 py-1 font-mono text-xs uppercase transition-colors",
              active
                ? "bg-surface-2 text-fg"
                : "text-muted hover:text-fg"
            )}
          >
            {locale}
          </Link>
        );
      })}
    </div>
  );
}