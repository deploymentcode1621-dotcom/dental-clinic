import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import { ICONS, PhoneIcon, ClockIcon, MapPinIcon } from "@/components/Icons";
import SitePhoto from "@/components/SitePhoto";
import CTASection from "@/components/CTASection";
import MapEmbed from "@/components/MapEmbed";

export const metadata = {
  title: "Home",
  description: `${siteConfig.tagline}. Modern dental care in ${siteConfig.city} — book your visit today.`,
};

function ChevronIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 16 16"
      width="14"
      height="14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M6 3l5 5-5 5" />
    </svg>
  );
}

export default function HomePage() {
  const featuredServices = siteConfig.services.slice(0, 6);

  // Quick-access treatments shown in the floating hero card.
  // Pulled live from siteConfig.services so it never drifts out of sync —
  // swap `.slice(0, 4)` for `.filter(s => s.featured)` once you add that flag.
  const quickLinks = siteConfig.services.slice(0, 4);

  // Real rating computed from your own testimonials data — not a stand-in
  // for your actual Google Business Profile rating. Swap this block for
  // your real Google rating + review count once you have it verified.
  const reviews = Array.isArray(siteConfig.testimonials)
    ? siteConfig.testimonials
    : [];
  const hasReviews = reviews.length > 0;
  const avgRating = hasReviews
    ? reviews.reduce((sum, t) => sum + (t?.rating || 0), 0) / reviews.length
    : 0;
  const reviewCount = reviews.length;

  return (
    <>
      {/* Hero — full-bleed photo with text overlaid via a gradient scrim,
          matching the reference layout. On mobile the photo becomes a
          normal block above the text instead of an overlay, since text
          over an image rarely stays readable at narrow widths. */}
      <section className="relative overflow-hidden border-b border-line">
        {/* Full-bleed photo — plain <img> instead of SitePhoto here, since
            this needs absolute inset-0 positioning that a fixed-height
            wrapper doesn't give us. Swap for next/image with `fill` if
            you want built-in optimization. */}
        <div className="absolute inset-0 hidden lg:block">
          <img
            src="/images/dratwork.jpg"
            alt="Patient smiling in the treatment chair"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface-2 via-surface-2/85 to-surface-2/10" />
        </div>

        <div className="container-page relative py-14 md:py-20 lg:py-28">
          <div className="max-w-xl lg:pr-10">
            <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-brand">
              <span className="h-px w-6 bg-brand/50" />
              Healthy teeth · Confident smiles · Lifelong care
            </p>

            <h1 className="font-display mt-4 text-[2.6rem] leading-[1.08] md:text-6xl font-semibold text-ink">
              A calmer visit to the dentist, right here in {siteConfig.city}.
            </h1>
            <p className="mt-5 max-w-md text-[17px] leading-7 text-muted">
              {siteConfig.clinicName} brings together modern equipment,
              unhurried explanations, and gentle care — for check-ups,
              root canals, braces, and full smile makeovers.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-medium text-white hover:bg-brand-dark transition-colors"
              >
                <ClockIcon className="h-4 w-4" /> Book an appointment
              </Link>
              <a
                href={`tel:${siteConfig.phone.tel}`}
                className="flex items-center gap-2 rounded-full border border-line bg-white/80 px-6 py-3.5 text-sm font-medium text-ink hover:border-brand hover:text-brand transition-colors"
              >
                <PhoneIcon className="h-4 w-4" /> Call now
              </a>
            </div>

            {/* Rating + quick stats — the rating/review count is computed
                live from siteConfig.testimonials below; TODO: replace
                "patients" and "years" with your real figures. */}
            <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-line/70 pt-6">
              {hasReviews && (
                <div>
                  <div className="flex items-center gap-1 text-amber">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        viewBox="0 0 20 20"
                        width="14"
                        height="14"
                        fill={i < Math.round(avgRating) ? "currentColor" : "none"}
                        stroke="currentColor"
                        strokeWidth="1"
                      >
                        <path d="M10 1.5l2.6 5.3 5.9.8-4.3 4.1 1 5.8L10 14.7l-5.2 2.8 1-5.8L1.5 7.6l5.9-.8z" />
                      </svg>
                    ))}
                  </div>
                  <p className="mt-1 text-xs text-muted">
                    {avgRating.toFixed(1)} rating · {reviewCount}+ reviews
                  </p>
                </div>
              )}
              <div>
                <p className="font-display text-lg font-semibold text-ink">
                  TODO+
                </p>
                <p className="text-xs text-muted">Happy patients</p>
              </div>
              <div>
                <p className="font-display text-lg font-semibold text-ink">
                  TODO+
                </p>
                <p className="text-xs text-muted">Years experience</p>
              </div>
            </div>

            {/* Amenity row — first few services as a compact icon list */}
            <div className="mt-6 flex flex-wrap gap-x-7 gap-y-3 border-t border-line/70 pt-6">
              {siteConfig.services.slice(0, 4).map((service) => {
                const Icon = ICONS[service.icon] ?? ICONS.tooth;
                return (
                  <div key={service.title} className="flex items-center gap-2">
                    <Icon className="h-4 w-4 text-brand" />
                    <span className="text-sm font-medium text-ink">
                      {service.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile/tablet photo — normal block, shown only below lg */}
          <div className="relative mt-10 lg:hidden">
            <SitePhoto
              src="/images/dratwork.jpg"
              alt="Patient smiling in the treatment chair"
              className="h-[320px] w-full rounded-3xl"
            />
          </div>
        </div>

        {/* Floating cards — anchored to the hero photo, desktop only */}
        <div className="pointer-events-none absolute inset-0 hidden lg:block">
          {/* Before / after card — single combined photo (already split
              before/after, so no need for two separate images or a
              second overlay line). Saved at /public/images/before-after-smile.jpeg */}
          <div className="pointer-events-auto absolute right-12 top-28 w-48 overflow-hidden rounded-2xl border border-line bg-white shadow-lg xl:right-20">
            <div className="relative h-28 w-full">
              <SitePhoto
                src="/images/before-after-smile.jpeg"
                alt="Before and after teeth whitening results"
                className="h-full w-full"
              />
              <span className="absolute bottom-1 left-1 rounded-full bg-ink/80 px-2 py-0.5 text-[10px] font-medium text-white">
                Before
              </span>
              <span className="absolute bottom-1 right-1 rounded-full bg-brand px-2 py-0.5 text-[10px] font-medium text-white">
                After
              </span>
            </div>
          </div>

          {/* Quick-treatments card */}
          <div className="pointer-events-auto absolute bottom-24 right-12 w-56 rounded-2xl border border-line bg-white p-2.5 shadow-lg xl:right-20">
            {quickLinks.map((service) => {
              const Icon = ICONS[service.icon] ?? ICONS.tooth;
              return (
                <Link
                  key={service.title}
                  href="/services"
                  className="group flex items-center gap-3 rounded-xl px-2 py-2 transition-colors hover:bg-surface-2"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-surface-2 group-hover:bg-white">
                    <Icon className="h-[18px] w-[18px] text-brand" />
                  </span>
                  <span className="flex-1 text-sm font-medium text-ink">
                    {service.title}
                  </span>
                  <ChevronIcon className="text-muted" />
                </Link>
              );
            })}
          </div>

          <p className="font-display absolute bottom-10 right-14 rotate-[-4deg] text-lg italic text-brand/70 xl:right-24">
            Your smile, our commitment ♥
          </p>
        </div>
      </section>


      {/* Trust strip */}
      <section className="border-b border-line bg-white">
        <div className="container-page grid grid-cols-1 gap-6 py-10 sm:grid-cols-3">
          <div className="flex gap-3">
            <ClockIcon className="h-5 w-5 shrink-0 text-brand mt-0.5" />
            <div>
              <p className="text-sm font-medium text-ink">Open six days a week</p>
              <p className="text-sm text-muted">{siteConfig.hours[0].time}</p>
            </div>
          </div>
          <div className="flex gap-3">
            <MapPinIcon className="h-5 w-5 shrink-0 text-brand mt-0.5" />
            <div>
              <p className="text-sm font-medium text-ink">Easy to find</p>
              <p className="text-sm text-muted">{siteConfig.address.line1}, {siteConfig.city}</p>
            </div>
          </div>
          <div className="flex gap-3">
            <PhoneIcon className="h-5 w-5 shrink-0 text-brand mt-0.5" />
            <div>
              <p className="text-sm font-medium text-ink">Quick to reach</p>
              <p className="text-sm text-muted">Call or WhatsApp for same-day queries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="py-16 md:py-20">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-brand">What we treat</p>
              <h2 className="font-display mt-2 text-3xl md:text-4xl font-semibold text-ink">
                Care for every stage of your smile
              </h2>
            </div>
            <Link href="/services" className="text-sm font-medium text-brand hover:text-brand-dark">
              View all services
            </Link>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service) => {
              const Icon = ICONS[service.icon] ?? ICONS.tooth;
              return (
                <div
                  key={service.title}
                  className="rounded-2xl border border-line bg-white p-6 transition-colors hover:border-brand/40"
                >
                  <Icon className="h-7 w-7 text-brand" />
                  <h3 className="font-display mt-4 text-lg font-semibold text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Doctors preview */}
      <section className="border-y border-line bg-white py-16 md:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-medium text-brand">Meet the team</p>
            <h2 className="font-display mt-2 text-3xl md:text-4xl font-semibold text-ink">
              Care you can put a face to
            </h2>
            <p className="mt-4 text-[15px] leading-7 text-muted">
              Every treatment plan is explained in plain language before we
              begin — no surprises, no rushed appointments.
            </p>
            <Link
              href="/doctors"
              className="mt-6 inline-flex items-center text-sm font-medium text-brand hover:text-brand-dark"
            >
              Meet the doctors
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {siteConfig.doctors.map((doctor) => (
              <div key={doctor.name} className="rounded-2xl border border-line p-5">
                <SitePhoto src={doctor.photo} alt={doctor.name} className="h-48" />
                <p className="font-display mt-4 text-lg font-semibold text-ink">
                  {doctor.name}, {doctor.credentials}
                </p>
                <p className="text-sm text-brand">{doctor.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial preview */}
      <section className="py-16 md:py-20">
        <div className="container-page">
          <p className="text-sm font-medium text-brand">Patient stories</p>
          <h2 className="font-display mt-2 text-3xl md:text-4xl font-semibold text-ink">
            What patients say after their visit
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {siteConfig.testimonials.map((t, i) => (
              <figure key={`home-testimonial-${i}`} className="rounded-2xl bg-surface-2 p-6">
                <blockquote className="text-[15px] leading-7 text-ink/80">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-4 text-sm font-medium text-ink">
                  {t.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-16 md:pb-20">
        <div className="container-page grid gap-8 lg:grid-cols-[1fr_1fr] items-center">
          <div>
            <p className="text-sm font-medium text-brand">Find us</p>
            <h2 className="font-display mt-2 text-3xl md:text-4xl font-semibold text-ink">
              Located in {siteConfig.address.line1}
            </h2>
            <p className="mt-4 text-[15px] leading-7 text-muted">
              {siteConfig.address.full}
            </p>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.mapQuery)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-brand hover:text-brand-dark"
            >
              <MapPinIcon className="h-4 w-4" /> Get directions
            </a>
          </div>
          <MapEmbed />
        </div>
      </section>

      <CTASection />
    </>
  );
}