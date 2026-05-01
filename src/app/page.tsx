import Link from "next/link";
import { brand } from "@/lib/brand";
import { StarRating } from "@/components/star-rating";
import { ReviewCard } from "@/components/review-card";
import { reviews, reviewHighlights } from "@/lib/reviews";
import { menuCategories } from "@/lib/menu";

const menuCardColors = [
  "border-amber-300/60 dark:border-amber-800/60",
  "border-orange-300/60 dark:border-orange-800/60",
  "border-stone-300/60 dark:border-stone-700/60",
];

const menuHeadingColors = [
  "text-amber-700 dark:text-amber-400",
  "text-orange-700 dark:text-orange-400",
  "text-stone-700 dark:text-stone-400",
];

const highlightColors = [
  "bg-amber-50 text-amber-800 dark:bg-amber-950/40 dark:text-amber-200",
  "bg-orange-50 text-orange-800 dark:bg-orange-950/40 dark:text-orange-200",
  "bg-stone-100 text-stone-800 dark:bg-stone-900/40 dark:text-stone-200",
  "bg-rose-50 text-rose-800 dark:bg-rose-950/40 dark:text-rose-200",
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-amber-200/40 dark:border-amber-900/30">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,rgba(217,119,6,0.10),transparent_50%),radial-gradient(ellipse_at_top_right,rgba(194,65,12,0.08),transparent_50%),radial-gradient(ellipse_at_bottom,rgba(120,53,15,0.06),transparent_50%)]" />
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-20 sm:px-6 sm:py-28">
          <div className="flex flex-wrap items-center gap-3 text-sm text-foreground/60">
            <span className="rounded-full bg-gradient-to-r from-amber-100 to-orange-100 px-3 py-1 text-xs font-semibold text-amber-700 dark:from-amber-900/40 dark:to-orange-900/40 dark:text-amber-300">
              Restaurant
            </span>
            <span>{brand.priceRange}</span>
            <span>&middot;</span>
            <span className="flex items-center gap-1">
              <StarRating rating={brand.rating} size="sm" />
              <span className="font-semibold text-foreground">
                {brand.rating}
              </span>
              <span>({brand.reviewCount})</span>
            </span>
          </div>
          <h1 className="max-w-3xl text-4xl font-black leading-[1.05] tracking-tight sm:text-6xl">
            <span className="text-amber-700 dark:text-amber-400">Hearth </span>
            <span className="text-orange-600 dark:text-orange-400">on </span>
            <span className="text-stone-700 dark:text-stone-400">25th</span>
          </h1>
          <p className="max-w-xl text-base text-foreground/70 sm:text-lg">
            {brand.shortDescription}
          </p>
          <div className="flex flex-wrap items-center gap-2 text-sm text-foreground/60">
            {brand.services.map((s, i) => {
              const colors = [
                "border-amber-300/60 text-amber-700 dark:border-amber-700/60 dark:text-amber-300",
                "border-orange-300/60 text-orange-700 dark:border-orange-700/60 dark:text-orange-300",
                "border-stone-300/60 text-stone-700 dark:border-stone-700/60 dark:text-stone-300",
              ];
              return (
                <span
                  key={s}
                  className={`rounded-full border px-3 py-1 font-medium ${colors[i % colors.length]}`}
                >
                  {s}
                </span>
              );
            })}
          </div>

          {/* Owner Update */}
          <div className="max-w-xl rounded-xl border border-amber-200/60 bg-amber-50/50 p-4 dark:border-amber-800/40 dark:bg-amber-950/20">
            <p className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              From the owner &middot; {brand.ownerUpdateDate}
            </p>
            <p className="mt-1 text-sm text-foreground/80">
              {brand.ownerUpdate}
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={brand.reserveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-full bg-amber-600 px-7 text-sm font-semibold uppercase tracking-wider text-white hover:bg-amber-700 transition-colors"
            >
              Reserve a Table
            </a>
            <Link
              href="/menu"
              className="inline-flex h-12 items-center justify-center rounded-full bg-orange-600 px-7 text-sm font-semibold uppercase tracking-wider text-white hover:bg-orange-700 transition-colors"
            >
              View Menu
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-full bg-stone-600 px-7 text-sm font-semibold uppercase tracking-wider text-white hover:bg-stone-700 transition-colors"
            >
              Get Directions
            </Link>
            <a
              href={`tel:${brand.phone.replace(/[^\d+]/g, "")}`}
              className="inline-flex h-12 items-center justify-center rounded-full bg-rose-600 px-7 text-sm font-semibold uppercase tracking-wider text-white hover:bg-rose-700 transition-colors"
            >
              Call Us
            </a>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <InfoCard
            color="text-amber-600 dark:text-amber-400"
            borderColor="border-amber-200/60 dark:border-amber-900/40"
            icon={
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            }
            title="Location"
            body={brand.address}
          />
          <InfoCard
            color="text-orange-600 dark:text-orange-400"
            borderColor="border-orange-200/60 dark:border-orange-900/40"
            icon={
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
            title="Hours"
            body={brand.hours}
          />
          <InfoCard
            color="text-stone-600 dark:text-stone-400"
            borderColor="border-stone-300/60 dark:border-stone-700/40"
            icon={
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            }
            title="Phone"
            body={brand.phone}
          />
        </div>
      </section>

      {/* Menu Preview */}
      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Menu Highlights
          </h2>
          <Link
            href="/menu"
            className="text-sm font-semibold uppercase tracking-wider text-amber-600 hover:underline dark:text-amber-400"
          >
            Full menu &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {menuCategories.slice(0, 3).map((category, i) => (
            <div
              key={category.name}
              className={`rounded-2xl border p-5 ${menuCardColors[i % menuCardColors.length]}`}
            >
              <h3 className={`text-lg font-bold ${menuHeadingColors[i % menuHeadingColors.length]}`}>
                {category.name}
              </h3>
              <ul className="mt-3 space-y-2">
                {category.items.map((item) => (
                  <li key={item.name}>
                    <p className="font-medium text-sm">{item.name}</p>
                    <p className="text-xs text-foreground/60 leading-relaxed">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Reserve CTA */}
      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <div className="rounded-2xl border border-amber-300/60 bg-gradient-to-r from-amber-50 to-orange-50 p-8 text-center dark:border-amber-800/40 dark:from-amber-950/30 dark:to-orange-950/30">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Reserve Your Table
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-foreground/60">
            Plan your next dining experience at Hearth on 25th. Book online through LibroReserve.
          </p>
          <a
            href={brand.reserveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex h-12 items-center justify-center rounded-full bg-amber-600 px-8 text-sm font-semibold uppercase tracking-wider text-white hover:bg-amber-700 transition-colors"
          >
            Find a Table
          </a>
        </div>
      </section>

      {/* Review Highlights */}
      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              What People Say
            </h2>
            <div className="mt-2 flex items-center gap-2">
              <StarRating rating={brand.rating} />
              <span className="text-lg font-bold">{brand.rating}</span>
              <span className="text-foreground/60">
                ({brand.reviewCount} reviews)
              </span>
            </div>
          </div>
          <Link
            href="/reviews"
            className="text-sm font-semibold uppercase tracking-wider text-stone-700 hover:underline dark:text-stone-400"
          >
            All reviews &rarr;
          </Link>
        </div>

        <div className="mb-8 flex flex-wrap gap-3">
          {reviewHighlights.map((h, i) => (
            <span
              key={h}
              className={`rounded-full px-4 py-2 text-sm ${highlightColors[i % highlightColors.length]}`}
            >
              &ldquo;{h}&rdquo;
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </section>

      {/* People Also Search For */}
      <section className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6">
        <h2 className="mb-6 text-xl font-bold tracking-tight">
          People Also Search For
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {[
            { name: "Table Twenty Five", rating: 4.7, reviews: 872, type: "Restaurant" },
            { name: "Rovali\u2019s Ristorante Italiano", rating: 4.5, reviews: 2019, type: "Italian" },
            { name: "Stellas on 25th", rating: 4.4, reviews: 1467, type: "Italian" },
            { name: "La Ferrovia Italian Ristorante", rating: 4.2, reviews: 1091, type: "Italian" },
            { name: "Union Grill", rating: 4.3, reviews: 2189, type: "American" },
          ].map((place) => (
            <div
              key={place.name}
              className="rounded-xl border border-stone-200/60 p-4 dark:border-stone-700/40"
            >
              <p className="font-semibold text-sm">{place.name}</p>
              <div className="mt-1 flex items-center gap-1 text-xs text-foreground/60">
                <span className="font-bold text-foreground">{place.rating}</span>
                <span>({place.reviews.toLocaleString()})</span>
              </div>
              <p className="mt-1 text-xs text-foreground/50">{place.type}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function InfoCard({
  icon,
  title,
  body,
  color,
  borderColor,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
  color: string;
  borderColor: string;
}) {
  return (
    <div className={`flex items-start gap-4 rounded-2xl border p-5 ${borderColor}`}>
      <div className={color}>{icon}</div>
      <div>
        <h3 className="text-base font-semibold">{title}</h3>
        <p className="mt-1 text-sm text-foreground/70">{body}</p>
      </div>
    </div>
  );
}
