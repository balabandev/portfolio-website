import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { site } from "@/data/site";
import { HeaderNav } from "./HeaderNav";

export async function Header() {
  const t = await getTranslations("Nav");

  const items = [
    { href: "/", label: t("home") },
    { href: "/projects", label: t("projects") },
    { href: "/contact", label: t("contact") },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg">
      <div className="wrap flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2.5 font-medium tracking-tight"
        >
          <span aria-hidden className="size-2 rounded-[1px] bg-accent" />
          {site.name}
        </Link>
        <HeaderNav items={items} menuLabel={t("menu")} />
      </div>
    </header>
  );
}