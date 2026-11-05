import Link from "next/link";
import { SITE } from "@/lib/site";
import { Container } from "./container";
import { NavLink } from "./nav-link";

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-background/80 backdrop-blur">
      <Container className="flex h-14 items-center justify-between">
        <Link href="/" className="font-semibold">
          {SITE.name}
        </Link>
        <nav aria-label="Основная навигация" className="flex gap-6">
          {SITE.nav.map(({ href, label }) => (
            <NavLink key={href} href={href}>
              {label}
            </NavLink>
          ))}
        </nav>
      </Container>
    </header>
  );
}