export type Social = {
    id: "github" | "linkedin" | "telegram" | "email";
    label: string;
    href: string | null;
};

export const siteConfig = {
    name: "Artyom Balaban",
    email: "artyom.balaban@example.com"
};

const allSocials: Social[] = [
    { id: "github", label: "GitHub", href: "https://github.com/balabandev" },
    { id: "telegram", label: "Telegram", href: "https://t.me/bxlxbxn" },
    { id: "linkedin", label: "LinkedIn", href: null },
    { id: "email", label: "Email", href: `mailto:${siteConfig.email}` },
];

export const socials = allSocials.filter(
    (s): s is Social & { href : string } =>s.href !== null,
);

export const navItems = [
    { key: "projects", href: "/#projects" },
    { key: "stack", href: "/#stack" },
    { key: "about", href: "/#about" },
    { key: "experience", href: "/#experience" },
    { key: "services", href: "/#services" },
    { key: "contact", href: "/#contact" },
] as const;