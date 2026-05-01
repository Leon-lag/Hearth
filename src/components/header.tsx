"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { brand } from "@/lib/brand";

const nav = [
  { href: "/", label: "Home", color: "bg-amber-700 hover:bg-amber-800" },
  { href: "/menu", label: "Menu", color: "bg-orange-600 hover:bg-orange-700" },
  { href: "/reviews", label: "Reviews", color: "bg-stone-600 hover:bg-stone-700" },
  { href: "/contact", label: "Contact", color: "bg-rose-700 hover:bg-rose-800" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur dark:bg-neutral-950/90">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-black tracking-tight"
        >
          <span
            aria-hidden
            className="inline-flex h-8 w-8 items-center justify-center text-2xl"
          >
            🔥
          </span>
          <span className="text-amber-800 dark:text-amber-300">
            {brand.name}
          </span>
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                  active
                    ? `${item.color} text-white`
                    : "text-foreground/80 hover:bg-amber-50 dark:hover:bg-neutral-800"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href={brand.reserveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 hidden rounded-full bg-amber-600 px-4 py-1.5 text-sm font-semibold text-white hover:bg-amber-700 transition-colors sm:inline-flex"
          >
            Reserve
          </a>
        </nav>
      </div>
      <div className="h-1 bg-gradient-to-r from-amber-600 via-orange-400 to-rose-500" />
    </header>
  );
}
