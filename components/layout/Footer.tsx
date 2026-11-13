import { getTranslations } from "next-intl/server";
import { site } from "@/data/site";

const links = [
  { label: "GitHub", href: site.links.github },
  { label: "Telegram", href: site.links.telegram },
  { label: "LinkedIn", href: site.links.linkedin },
];

export async function Footer() {
  const t = await getTranslations("Footer");

  return (
    <footer className="mt-24 border-t border-line">
      <div className="wrap flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} {site.name}. {t("rights")}
        </p>
        <ul className="flex gap-6">
          {links.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted transition-colors hover:text-fg"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}