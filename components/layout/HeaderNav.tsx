"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import { Link, usePathname } from "@/i18n/navigation";
import { LangSwitcher } from "./LangSwitcher";

type Item = { href: string; label: string };

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function HeaderNav({
  items,
  menuLabel,
}: {
  items: Item[];
  menuLabel: string;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Закрытие мобильного меню по Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="flex items-center gap-8">
      {/* Десктоп */}
      <nav aria-label="Main" className="hidden items-center gap-7 md:flex">
        {items.map(({ href, label }) => {
          const active = isActive(pathname, href);
          return (
            <Link
              key={href}
              href={href}
              aria-current={active ? "page" : undefined}
              className={clsx(
                "py-1 text-sm transition-colors",
                active
                  ? "text-fg underline decoration-accent decoration-2 underline-offset-8"
                  : "text-muted hover:text-fg"
              )}
            >
              {label}
            </Link>
          );
        })}
      </nav>
      <LangSwitcher className="hidden md:flex" />

      {/* Мобильная кнопка */}
      <button
        type="button"
        aria-label={menuLabel}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
        className="-mr-2 inline-flex size-10 items-center justify-center rounded-md text-muted transition-colors hover:text-fg md:hidden"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Мобильная панель */}
      {open && (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-16 border-b border-line bg-bg md:hidden"
        >
          <nav aria-label="Mobile" className="wrap py-2">
            {items.map(({ href, label }) => {
              const active = isActive(pathname, href);
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={clsx(
                    "flex items-center justify-between border-b border-line py-4 text-lg",
                    active ? "text-fg" : "text-muted"
                  )}
                >
                  {label}
                  {active && (
                    <span aria-hidden className="size-1.5 rounded-full bg-accent" />
                  )}
                </Link>
              );
            })}
            <LangSwitcher className="py-4" />
          </nav>
        </div>
      )}
    </div>
  );
}