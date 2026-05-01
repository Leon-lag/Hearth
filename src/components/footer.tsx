import Link from "next/link";
import { brand } from "@/lib/brand";

export function Footer() {
  return (
    <footer className="mt-24">
      <div className="h-1 bg-gradient-to-r from-rose-500 via-orange-400 to-amber-600" />
      <div className="bg-stone-50/50 py-10 text-sm text-foreground/70 dark:bg-neutral-900/50">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-6 px-4 sm:flex-row sm:px-6">
          <div>
            <div className="flex items-center gap-2 text-base font-black tracking-tight text-amber-800 dark:text-amber-300">
              <span
                aria-hidden
                className="inline-flex h-6 w-6 items-center justify-center text-lg"
              >
                🔥
              </span>
              {brand.name}
            </div>
            <p className="mt-2 max-w-sm">{brand.shortDescription}</p>
            <p className="mt-2">{brand.address}</p>
            <p>
              <a
                href={`tel:${brand.phone.replace(/[^\d+]/g, "")}`}
                className="text-amber-700 hover:underline dark:text-amber-400"
              >
                {brand.phone}
              </a>
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <Link href="/menu" className="text-orange-700 hover:underline dark:text-orange-400">
              Menu
            </Link>
            <Link href="/reviews" className="text-stone-700 hover:underline dark:text-stone-400">
              Reviews
            </Link>
            <Link href="/contact" className="text-rose-700 hover:underline dark:text-rose-400">
              Contact
            </Link>
            <a
              href={brand.reserveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-700 hover:underline dark:text-amber-400"
            >
              Reserve a Table
            </a>
          </div>
          <div className="text-xs opacity-70">
            &copy; {brand.year} {brand.name}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
