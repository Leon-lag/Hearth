export interface Review {
  id: number;
  author: string;
  reviewCount: string;
  photoCount?: string;
  timeAgo: string;
  rating: number;
  text: string;
  badge?: string;
}

export const reviews: Review[] = [
  {
    id: 1,
    author: "Robert MacFarland",
    reviewCount: "11 reviews",
    photoCount: "7 photos",
    timeAgo: "2 months ago",
    rating: 5,
    badge: "Local Guide",
    text: "This place is a great date night spot. The chef\u2019s tasting menu is a great deal at $65/person. All the little plates and experimental dishes keep things interesting and add up to a nice fine dining atmosphere.",
  },
  {
    id: 2,
    author: "Izabell DeVera",
    reviewCount: "3 reviews",
    photoCount: "3 photos",
    timeAgo: "6 months ago",
    rating: 5,
    text: "I went here for the first time for my anniversary and it was delicious. We definitely will be going back to try something new. We chose to do the chefs tasting and it was a great way to get a bit of everything!",
  },
  {
    id: 3,
    author: "Sara Montoya",
    reviewCount: "117 reviews",
    photoCount: "254 photos",
    timeAgo: "a year ago",
    rating: 5,
    badge: "Local Guide",
    text: "First time dining at Hearth. My sister wanted to try the restaurant because she was curious about the Chef Tasting (5 course) menu. We absolutely loved it. It was fun & exciting to try the five course menu. Tasty & flavorful.",
  },
];

export const reviewHighlights = [
  "The price matched the quality and creativity of the dishes though!",
  "Great food, moderate pricing, fantastic service and wonderful atmosphere.",
  "Tarts that had no business tasting like bacon, shrimp served swimming in yogurt?",
];

export const popularTags = [
  { label: "beef stroganoff", count: 9 },
  { label: "tasting menu", count: 31 },
  { label: "duck", count: 22 },
  { label: "charcuterie", count: 11 },
];
