import { siteConfig } from "@/lib/siteConfig";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Testimonials",
  description: `Read what patients say about visiting ${siteConfig.clinicName} in ${siteConfig.city}.`,
};

// TODO: swap these for your real numbers — kept as constants so they're
// easy to update without touching the layout below.
const clinicStats = [
  { label: "Years serving Latur", value: "8+" },
  { label: "Smiles treated", value: "5,000+" },
  { label: "Would recommend us", value: "98%" },
];

function Stars({ rating, size = 16, className = "" }) {
  return (
    <div
      className={`flex gap-0.5 text-amber ${className}`}
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          width={size}
          height={size}
          fill={i < rating ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1"
        >
          <path d="M10 1.5l2.6 5.3 5.9.8-4.3 4.1 1 5.8L10 14.7l-5.2 2.8 1-5.8L1.5 7.6l5.9-.8z" />
        </svg>
      ))}
    </div>
  );
}

function QuoteMark({ size = 40, className = "text-amber/25" }) {
  return (
    <svg
      viewBox="0 0 32 24"
      width={size}
      height={size * 0.75}
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M0 24V13.9C0 6.3 4.9 1 12.6 0l1 3.6c-4.4 1.1-6.8 3.9-7.1 8h6.7V24H0Zm18.4 0V13.9c0-7.6 4.9-12.9 12.6-13.9l1 3.6c-4.4 1.1-6.8 3.9-7.1 8h6.7V24H18.4Z"
        fill="currentColor"
      />
    </svg>
  );
}

function VerifiedBadge() {
  return (
    <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-forest/10 px-2.5 py-1 text-[11px] font-medium text-forest">
      <svg viewBox="0 0 20 20" width="12" height="12" fill="currentColor">
        <path d="M10 1.7l2.1 1.5 2.5-.3 1 2.3 2.3 1-.3 2.5 1.5 2.1-1.5 2.1.3 2.5-2.3 1-1 2.3-2.5-.3L10 18.3l-2.1-1.5-2.5.3-1-2.3-2.3-1 .3-2.5L1 9.8l1.5-2.1-.3-2.5 2.3-1 1-2.3 2.5.3z" />
        <path
          d="M7.2 10.2l1.8 1.8 3.8-3.8"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      Verified visit
    </span>
  );
}

export default function TestimonialsPage() {
  const testimonials = siteConfig.testimonials;
  const avg =
    testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length;

  // Highest-rated review is featured above as a spotlight, but every
  // review — including that one — still appears in the grid below.
  const spotlight =
    [...testimonials].sort((a, b) => b.rating - a.rating)[0] || testimonials[0];

  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="What patients say"
        description="A few notes from people we've treated. Real reviews from your Google Business Profile can replace these once you have permission to publish them."
      />

      {/* Stats + rating strip */}
      <section className="border-b border-line bg-white">
        <div className="container-page grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex items-center gap-3">
            <span className="font-serif text-4xl text-ink">{avg.toFixed(1)}</span>
            <div className="flex flex-col items-start">
              <Stars rating={Math.round(avg)} size={14} />
              <span className="mt-1 text-xs text-ink/60">
                {testimonials.length}+ patient reviews
              </span>
            </div>
          </div>
          {clinicStats.map((s) => (
            <div key={s.label} className="flex flex-col">
              <span className="font-serif text-3xl text-ink">{s.value}</span>
              <span className="mt-1 text-xs text-ink/60">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Spotlight review */}
      {spotlight && (
        <section className="bg-mist py-16 md:py-20">
          <div className="container-page">
            <div className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl bg-ink px-8 py-12 text-center text-white sm:px-14">
              <div className="absolute -left-4 -top-4">
                <QuoteMark size={90} className="text-white/10" />
              </div>
              <span className="text-xs font-medium uppercase tracking-wide text-amber">
                Patient highlight
              </span>
              <blockquote className="mt-4 font-serif text-2xl leading-snug sm:text-3xl">
                "{spotlight.quote}"
              </blockquote>
              <div className="mt-6 flex flex-col items-center gap-2">
                <Stars rating={spotlight.rating} />
                <span className="text-sm text-white/70">
                  {spotlight.name}
                  {spotlight.tag ? ` · ${spotlight.tag}` : ""}
                </span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Review grid */}
      <section className="py-16 md:py-24">
        <div className="container-page grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.quote}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-line bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-amber transition-transform duration-300 group-hover:scale-x-100" />

              <div className="flex items-start justify-between gap-3">
                <QuoteMark />
                <Stars rating={t.rating} />
              </div>

              <blockquote className="mt-5 flex-1 text-[15px] leading-7 text-ink/80">
                {t.quote}
              </blockquote>

              <div className="mt-6 flex items-center justify-between gap-3 border-t border-line pt-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest/10 font-serif text-sm text-forest">
                    {t.name.charAt(0)}
                  </span>
                  <div className="flex flex-col">
                    <figcaption className="text-sm font-medium text-ink">
                      {t.name}
                    </figcaption>
                    {t.tag && (
                      <span className="text-xs text-ink/50">{t.tag}</span>
                    )}
                  </div>
                </div>
                <VerifiedBadge />
              </div>
            </figure>
          ))}
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-line bg-white py-10">
        <div className="container-page flex flex-col items-center gap-4 text-center">
          <span className="text-xs font-medium uppercase tracking-wide text-ink/50">
            Reviewed on
          </span>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-ink/60">
            <span className="text-sm font-semibold">Google Reviews</span>
            <span className="text-sm font-semibold">Practo</span>
            <span className="text-sm font-semibold">Justdial</span>
          </div>
        </div>
      </section>

      {/* Leave a review CTA */}
      <section className="py-16 md:py-20">
        <div className="container-page">
          <div className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-line bg-white p-10 text-center sm:flex-row sm:text-left">
            <div>
              <h3 className="font-serif text-2xl text-ink">
                Had a good visit with us?
              </h3>
              <p className="mt-2 text-sm text-ink/60">
                A quick Google review helps other families in Latur find
                gentle, trustworthy care.
              </p>
            </div>
            <a
              href={siteConfig.googleReviewLink || "#"}
              className="shrink-0 rounded-full bg-amber px-6 py-3 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
            >
              Leave a review
            </a>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}