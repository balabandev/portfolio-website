import clsx from "clsx";
import { Link } from "@/i18n/navigation";

type Variant = "primary" | "secondary";

const base =
  "inline-flex h-11 items-center justify-center gap-2 rounded-md px-5 text-sm font-medium transition-colors";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-accent-fg hover:bg-accent-hover",
  secondary: "border border-line-strong text-fg hover:bg-surface-2",
};

type Props = {
  href: string;
  variant?: Variant;
  external?: boolean;
  className?: string;
  children: React.ReactNode;
};

export function ButtonLink({
  href,
  variant = "primary",
  external,
  className,
  children,
}: Props) {
  const classes = clsx(base, variants[variant], className);

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}