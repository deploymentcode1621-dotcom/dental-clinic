import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import { PhoneIcon } from "./Icons";

export default function CTASection() {
  const reviews = Array.isArray(siteConfig.testimonials)
    ? siteConfig.testimonials
    : [];
  const hasReviews = reviews.length > 0;
  const avg = hasReviews
    ? reviews.reduce((sum, t) => sum + (t?.rating || 0), 0) / reviews.length
    : 0;

  return (
    <section className="relative overflow-hidden bg-ink">
      {/* Soft glow accents — purely decorative, no layout impact */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-brand/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-amber/10 blur-3xl" />
      <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber/60 to-transparent" />

      <div className="container-page relative flex flex-col gap-10 py-16 md:py-20 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-lg">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-white/80">
            <span className="h-1.5 w-1.5 rounded-full bg-amber" />
            Same-day slots usually available
          </span>

          <h2 className="font-display mt-5 text-3xl font-semibold text-white md:text-4xl">
            Ready to fix that appointment you keep putting off?
          </h2>
          <p className="mt-3 text-white/60">
            A short call is all it takes. We'll find a time that works and
            explain the treatment before you arrive.
          </p>

          {hasReviews && (
            <div className="mt-6 flex items-center gap-3">
              <div className="flex -space-x-2">
                {reviews.slice(0, 4).map((t, i) => (
                  <span
                    key={`avatar-${i}`}
                    className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-ink bg-white/10 font-serif text-xs text-white"
                  >
                    {t?.name ? t.name.charAt(0) : "P"}
                  </span>
                ))}
              </div>
              <span className="text-xs text-white/50">
                {avg.toFixed(1)}/5 from {reviews.length}+ patients
                {siteConfig.city ? ` in ${siteConfig.city}` : ""}
              </span>
            </div>
          )}
        </div>

        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <a
            href={`tel:${siteConfig.phone?.tel || ""}`}
            className="flex items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
              <PhoneIcon className="h-3.5 w-3.5" />
            </span>
            {siteConfig.phone?.display || "Call us"}
          </a>
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 rounded-full bg-amber px-6 py-3.5 text-sm font-medium text-ink shadow-lg shadow-amber/20 transition-all hover:-translate-y-0.5 hover:brightness-95"
          >
            Book an appointment
            <svg
              viewBox="0 0 16 16"
              width="14"
              height="14"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}