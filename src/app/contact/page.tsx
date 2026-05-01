import type { Metadata } from "next";
import { brand } from "@/lib/brand";

export const metadata: Metadata = { title: "Contact & Location" };

const serviceColors = [
  "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
  "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
  "bg-stone-200 text-stone-700 dark:bg-stone-800/40 dark:text-stone-300",
];

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
        <span className="text-amber-700 dark:text-amber-400">Visit </span>
        <span className="text-orange-600 dark:text-orange-400">Us</span>
      </h1>
      <p className="mt-3 max-w-2xl text-foreground/60">
        We&apos;re located on historic 25th Street in downtown Ogden, UT.
        Reserve a table online or just walk in.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Map */}
        <div className="overflow-hidden rounded-2xl border-2 border-amber-300/60 dark:border-amber-800/40">
          <iframe
            title="Hearth on 25th location"
            src={brand.mapEmbedUrl}
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Details */}
        <div className="space-y-6">
          <Card
            title="Address"
            color="text-amber-600 dark:text-amber-400"
            borderColor="border-amber-200/60 dark:border-amber-900/40"
            icon={
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            }
          >
            <p>{brand.address}</p>
            <p className="mt-1 text-xs text-foreground/40">
              Plus code: {brand.plusCode}
            </p>
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(brand.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-amber-600 hover:underline dark:text-amber-400"
            >
              Get Directions
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </Card>

          <Card
            title="Phone"
            color="text-orange-600 dark:text-orange-400"
            borderColor="border-orange-200/60 dark:border-orange-900/40"
            icon={
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            }
          >
            <a
              href={`tel:${brand.phone.replace(/[^\d+]/g, "")}`}
              className="text-lg font-semibold text-orange-600 hover:underline dark:text-orange-400"
            >
              {brand.phone}
            </a>
          </Card>

          <Card
            title="Hours"
            color="text-stone-600 dark:text-stone-400"
            borderColor="border-stone-300/60 dark:border-stone-700/40"
            icon={
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
          >
            <p className="font-medium text-green-600 dark:text-green-400">
              {brand.hours}
            </p>
            <p className="mt-1 text-xs text-foreground/40">
              {brand.hoursConfirmed}
            </p>
          </Card>

          <Card
            title="Services"
            color="text-rose-600 dark:text-rose-400"
            borderColor="border-rose-200/60 dark:border-rose-900/40"
            icon={
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            }
          >
            <div className="flex flex-wrap gap-2">
              {brand.services.map((s, i) => (
                <span
                  key={s}
                  className={`rounded-full px-3 py-1 text-sm font-medium ${serviceColors[i % serviceColors.length]}`}
                >
                  {s}
                </span>
              ))}
            </div>
          </Card>

          <Card
            title="Price Range"
            color="text-amber-600 dark:text-amber-400"
            borderColor="border-amber-200/60 dark:border-amber-900/40"
            icon={
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
          >
            <p>
              <span className="text-lg font-bold text-amber-600 dark:text-amber-400">{brand.priceRange}</span>
              <span className="ml-2 text-sm text-foreground/50">
                per person &middot; Reported by {brand.priceReportedBy} people
              </span>
            </p>
          </Card>

          <Card
            title="Website"
            color="text-orange-600 dark:text-orange-400"
            borderColor="border-orange-200/60 dark:border-orange-900/40"
            icon={
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            }
          >
            <a
              href={brand.website}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-orange-600 hover:underline dark:text-orange-400"
            >
              hearth25.com
            </a>
          </Card>

          {/* Reserve a Table */}
          <div className="rounded-2xl border border-amber-300/60 bg-gradient-to-r from-amber-50 to-orange-50 p-6 text-center dark:border-amber-800/40 dark:from-amber-950/30 dark:to-orange-950/30">
            <h2 className="text-lg font-bold">Reserve a Table</h2>
            <p className="mt-1 text-sm text-foreground/60">Book through LibroReserve</p>
            <a
              href={brand.reserveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex h-10 items-center justify-center rounded-full bg-amber-600 px-6 text-sm font-semibold text-white hover:bg-amber-700 transition-colors"
            >
              Find a Table
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card({
  title,
  icon,
  children,
  color,
  borderColor,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  color: string;
  borderColor: string;
}) {
  return (
    <div className={`rounded-2xl border p-5 ${borderColor}`}>
      <div className={`flex items-center gap-2 mb-3 ${color}`}>
        {icon}
        <h2 className="font-semibold">{title}</h2>
      </div>
      <div className="text-sm text-foreground/80">{children}</div>
    </div>
  );
}
