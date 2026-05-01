import type { Metadata } from "next";
import { brand } from "@/lib/brand";
import { reviews, reviewHighlights, popularTags } from "@/lib/reviews";
import { StarRating } from "@/components/star-rating";
import { ReviewCard } from "@/components/review-card";

export const metadata: Metadata = { title: "Reviews" };

const barColors = [
  "bg-green-500",
  "bg-teal-500",
  "bg-yellow-500",
  "bg-orange-500",
  "bg-red-500",
];

const highlightColors = [
  "bg-amber-50 text-amber-800 dark:bg-amber-950/40 dark:text-amber-200",
  "bg-orange-50 text-orange-800 dark:bg-orange-950/40 dark:text-orange-200",
  "bg-stone-100 text-stone-800 dark:bg-stone-900/40 dark:text-stone-200",
  "bg-rose-50 text-rose-800 dark:bg-rose-950/40 dark:text-rose-200",
];

const tagColors = [
  "border-amber-300/60 text-amber-700 dark:border-amber-700/60 dark:text-amber-300",
  "border-orange-300/60 text-orange-700 dark:border-orange-700/60 dark:text-orange-300",
  "border-stone-300/60 text-stone-700 dark:border-stone-700/60 dark:text-stone-300",
  "border-rose-300/60 text-rose-700 dark:border-rose-700/60 dark:text-rose-300",
];

export default function ReviewsPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
            <span className="text-amber-700 dark:text-amber-400">Customer </span>
            <span className="text-orange-700 dark:text-orange-400">Reviews</span>
          </h1>
          <div className="mt-3 flex items-center gap-3">
            <span className="text-4xl font-black text-amber-600 dark:text-amber-400">{brand.rating}</span>
            <div>
              <StarRating rating={brand.rating} size="lg" />
              <p className="mt-1 text-sm text-foreground/60">
                {brand.reviewCount} reviews
              </p>
            </div>
          </div>
        </div>
        <a
          href="https://search.google.com/local/writereview?placeid=ChIJk6YsiVsFU4cRHUZ8l9PtdkM"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 items-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-foreground shadow-md border border-gray-200 hover:shadow-lg transition-shadow dark:bg-neutral-800 dark:border-neutral-700"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          Review us on Google
        </a>
      </div>

      {/* Rating Distribution */}
      <div className="mt-8 rounded-2xl border border-amber-200/60 p-6 dark:border-amber-900/40">
        <h2 className="font-semibold mb-4">Rating Breakdown</h2>
        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((stars, i) => {
            const counts: Record<number, number> = { 5: 310, 4: 160, 3: 90, 2: 60, 1: 57 };
            const count = counts[stars] ?? 0;
            const pct = (count / brand.reviewCount) * 100;
            return (
              <div key={stars} className="flex items-center gap-3 text-sm">
                <span className="w-4 text-right font-medium">{stars}</span>
                <StarRating rating={stars} size="sm" />
                <div className="flex-1 h-2.5 rounded-full bg-gray-100 dark:bg-neutral-800 overflow-hidden">
                  <div
                    className={`h-full rounded-full ${barColors[i]}`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <span className="w-8 text-right text-foreground/50">{count}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Highlights */}
      <div className="mt-8">
        <h2 className="font-semibold mb-3">What People Love</h2>
        <div className="flex flex-wrap gap-3">
          {reviewHighlights.map((h, i) => (
            <span
              key={h}
              className={`rounded-full px-4 py-2 text-sm ${highlightColors[i % highlightColors.length]}`}
            >
              &ldquo;{h}&rdquo;
            </span>
          ))}
        </div>
      </div>

      {/* Popular Tags */}
      <div className="mt-6">
        <h2 className="font-semibold mb-3">Popular Mentions</h2>
        <div className="flex flex-wrap gap-2">
          {popularTags.map((tag, i) => (
            <span
              key={tag.label}
              className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-sm font-medium ${tagColors[i % tagColors.length]}`}
            >
              {tag.label}
              <span className="text-xs opacity-60">{tag.count}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Individual Reviews */}
      <div className="mt-10 space-y-6">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>

      {/* More Reviews CTA */}
      <div className="mt-10 text-center">
        <p className="text-foreground/50">
          More reviews ({brand.reviewCount - reviews.length}) available on Google
        </p>
      </div>
    </div>
  );
}
