"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

export function NavLink({ href, children} : { href: string; children: ReactNode}) {
    const pathname = usePathname();
    const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

    return (
        <link href={href} 
        aria-current={isActive ? "page" : undefined} 
        className={`relative text-sm font-medium transition-colors hover:text-primary-500 ${isActive ? "text-primary-500" : "text-zinc-700 dark:text-zinc-400"}`}>
            {children}
        </link>
    )
}