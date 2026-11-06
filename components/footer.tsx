import { SITE } from "@/lib/site";
import { Container } from "./container";
import { ExternalLink } from "./external-link";

export function Footer() {
  return (
    <footer className="border-t border-border py-8 text-sm text-muted">
      <Container className="flex flex-col justify-between gap-4 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {SITE.name}
        </p>
        <ul className="flex gap-5">
          <li>
            <ExternalLink href={SITE.github} className="hover:text-foreground">GitHub</ExternalLink>
          </li>
          <li>
            <ExternalLink href={SITE.telegram} className="hover:text-foreground">Telegram</ExternalLink>
          </li>
          <li>
            <a href={`mailto:${SITE.email}`} className="hover:text-foreground">Email</a>
          </li>
        </ul>
      </Container>
    </footer>
  );
}