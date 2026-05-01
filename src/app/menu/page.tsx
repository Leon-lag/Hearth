import type { Metadata } from "next";
import { brand } from "@/lib/brand";
import { menuCategories } from "@/lib/menu";

export const metadata: Metadata = { title: "Menu" };

const categoryColors = [
  {
    heading: "text-amber-700 dark:text-amber-400",
    border: "border-amber-200/60 dark:border-amber-900/40",
    cardBorder: "border-amber-200/60 dark:border-amber-900/40 hover:border-amber-300 dark:hover:border-amber-700",
    price: "text-amber-600 dark:text-amber-400",
    badge: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
  },
  {
    heading: "text-orange-700 dark:text-orange-400",
    border: "border-orange-200/60 dark:border-orange-900/40",
    cardBorder: "border-orange-200/60 dark:border-orange-900/40 hover:border-orange-300 dark:hover:border-orange-700",
    price: "text-orange-600 dark:text-orange-400",
    badge: "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
  },
  {
    heading: "text-stone-700 dark:text-stone-400",
    border: "border-stone-300/60 dark:border-stone-700/40",
    cardBorder: "border-stone-300/60 dark:border-stone-700/40 hover:border-stone-400 dark:hover:border-stone-600",
    price: "text-stone-600 dark:text-stone-400",
    badge: "bg-stone-200 text-stone-700 dark:bg-stone-800/60 dark:text-stone-300",
  },
  {
    heading: "text-rose-700 dark:text-rose-400",
    border: "border-rose-200/60 dark:border-rose-900/40",
    cardBorder: "border-rose-200/60 dark:border-rose-900/40 hover:border-rose-300 dark:hover:border-rose-700",
    price: "text-rose-600 dark:text-rose-400",
    badge: "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300",
  },
  {
    heading: "text-yellow-700 dark:text-yellow-400",
    border: "border-yellow-200/60 dark:border-yellow-800/40",
    cardBorder: "border-yellow-200/60 dark:border-yellow-800/40 hover:border-yellow-300 dark:hover:border-yellow-600",
    price: "text-yellow-600 dark:text-yellow-400",
    badge: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300",
  },
];

export default function MenuPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
        <span className="text-amber-700 dark:text-amber-400">Our </span>
        <span className="text-orange-600 dark:text-orange-400">Menu</span>
      </h1>
      <p className="mt-3 max-w-2xl text-foreground/60">
        Locally sourced, wood-fired cuisine. From hearty mains to our celebrated
        chef&apos;s tasting menu. Prices range from {brand.priceRange} per person.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={brand.reserveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 items-center justify-center rounded-full bg-amber-600 px-6 text-sm font-semibold text-white hover:bg-amber-700 transition-colors"
        >
          Reserve a Table
        </a>
        <a
          href={brand.menuUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 items-center justify-center rounded-full border border-orange-300/60 px-6 text-sm font-semibold text-orange-700 hover:bg-orange-50 transition-colors dark:border-orange-700/60 dark:text-orange-400 dark:hover:bg-orange-950/20"
        >
          Full Menu on SinglePlatform
        </a>
      </div>

      <div className="mt-12 space-y-12">
        {menuCategories.map((category, i) => {
          const colors = categoryColors[i % categoryColors.length];
          return (
            <section key={category.name}>
              <h2 className={`mb-6 text-2xl font-bold border-b pb-3 ${colors.heading} ${colors.border}`}>
                {category.name}
              </h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className={`rounded-xl border p-5 transition-colors ${colors.cardBorder}`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold">{item.name}</h3>
                        {item.popular && (
                          <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${colors.badge}`}>
                            Popular
                          </span>
                        )}
                      </div>
                      {item.price && (
                        <span className={`shrink-0 text-sm font-bold ${colors.price}`}>
                          {item.price}
                        </span>
                      )}
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/60">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
