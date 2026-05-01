import { StarRating } from "@/components/star-rating";
import type { Review } from "@/lib/reviews";

const avatarColors = [
  "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
  "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
  "bg-stone-200 text-stone-700 dark:bg-stone-800/60 dark:text-stone-300",
  "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300",
  "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300",
];

const borderColors = [
  "border-amber-200/60 dark:border-amber-900/40",
  "border-orange-200/60 dark:border-orange-900/40",
  "border-stone-300/60 dark:border-stone-700/40",
  "border-rose-200/60 dark:border-rose-900/40",
  "border-yellow-200/60 dark:border-yellow-800/40",
];

function hashIndex(str: string, len: number) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs(hash) % len;
}

export function ReviewCard({ review }: { review: Review }) {
  const initials = review.author
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  const colorIdx = hashIndex(review.author, avatarColors.length);

  return (
    <div className={`rounded-2xl border bg-white p-6 dark:bg-neutral-900 ${borderColors[colorIdx]}`}>
      <div className="flex items-start gap-3">
        <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold ${avatarColors[colorIdx]}`}>
          {initials}
        </div>
        <div className="min-w-0">
          <p className="font-semibold">{review.author}</p>
          <p className="text-xs text-foreground/50">
            {review.badge && (
              <span className="mr-1 text-amber-600 dark:text-amber-400">
                {review.badge} &middot;{" "}
              </span>
            )}
            {review.reviewCount}
            {review.photoCount ? ` \u00b7 ${review.photoCount}` : ""}
          </p>
        </div>
        <span className="ml-auto shrink-0 text-xs text-foreground/50">
          {review.timeAgo}
        </span>
      </div>
      <div className="mt-3">
        <StarRating rating={review.rating} size="sm" />
      </div>
      <p className="mt-3 text-sm leading-relaxed text-foreground/80">
        {review.text}
      </p>
    </div>
  );
}
