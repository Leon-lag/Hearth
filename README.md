# Hearth on 25th

A static Next.js website for **Hearth on 25th**, a wood-fired restaurant on historic 25th Street in Ogden, UT.

## Features

- **Home** — Hero section, quick info, menu preview, reservation CTA, review highlights, and nearby restaurants
- **Menu** — Full menu with categories (Popular, Wood-Fired Mains, Pasta & Tacos, Starters, Chef's Tasting)
- **Reviews** — Rating breakdown, review highlights, popular tags, and featured Google reviews
- **Contact** — Embedded Google Map, address, phone, hours, services, price range, and website link
- **Reserve a Table** — Prominent links to LibroReserve throughout the site

## Tech Stack

- [Next.js](https://nextjs.org/) 16 (static export)
- [React](https://react.dev/) 19
- [Tailwind CSS](https://tailwindcss.com/) 4
- [TypeScript](https://www.typescriptlang.org/)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Outputs a static site to `./out` that can be served from any CDN.

## Data

- `src/lib/brand.ts` — Restaurant metadata (name, address, phone, hours, etc.)
- `src/lib/menu.ts` — Menu categories and items
- `src/lib/reviews.ts` — Featured reviews, highlights, and popular tags
