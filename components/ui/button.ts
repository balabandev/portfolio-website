import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary";

const base = "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-colors";

const variants: Record<Variant , string> = {
    primary: "bg-accent text-white hover:bg-accent/90",
    secondary: "border border-border bg-surface text-foreground hover:bg-surface-hover",
};

export function buttonStyles(variant: Variant = "primary", className?: string) {
    return cn(base, variants[variant], className);
}