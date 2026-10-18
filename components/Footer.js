import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import { PhoneIcon, MapPinIcon, ClockIcon } from "./Icons";

const pages = [
  ["Home", "/"],
  ["Services", "/services"],
  ["About", "/about"],
  ["Doctors", "/doctors"],
  ["Testimonials", "/testimonials"],
  ["FAQ", "/faq"],
  ["Contact", "/contact"],
];

function SocialIcon({ platform }) {
  const paths = {
    facebook: (
      <path d="M13.5 9H15V6.5h-1.75C11.46 6.5 10.5 7.6 10.5 9.25V11H9v2.5h1.5V19h2.5v-5.5H15l.5-2.5h-2V9.5c0-.35.15-.5.5-.5Z" />
    ),
    instagram: (
      <>
        <rect x="5" y="5" width="14" height="14" rx="4" />
        <circle cx="12" cy="12" r="3.2" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="16.1" cy="7.9" r="0.9" />
      </>
    ),
    google: (
      <path d="M19.6 12.23c0-.63-.06-1.25-.17-1.84H12v3.48h4.26a3.64 3.64 0 0 1-1.58 2.4v1.98h2.55c1.5-1.38 2.37-3.42 2.37-6.02Z" />
    ),
  };

  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      {paths[platform]}
    </svg>
  );
}

export default function Footer() {
  const socials = [
    { key: "facebook", href: siteConfig.social.facebook },
    { key: "instagram", href: siteConfig.social.instagram },
    { key: "google", href: siteConfig.social.google },
  ].filter((s) => s.href);

  return (
    <footer className="relative overflow-hidden bg-ink text-white/90">
      {/* Seam against the CTA section above: a brighter accent line plus a
          faint dark overlay, so the footer reads as its own section instead
          of blending straight into the CTA band above it. */}
      <div
        aria-hidden="true"
        className="h-px w-full bg-gradient-to-r from-transparent via-amber/80 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-black/10"
      />
      {/* Soft glow accents for depth, kept subtle so text stays legible */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 h-64 w-64 rounded-full bg-amber/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 left-0 h-64 w-64 rounded-full bg-brand/10 blur-3xl"
      />

      <div className="container-page relative grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="font-display text-2xl font-semibold text-white">
            {siteConfig.clinicName}
          </p>
          <p className="mt-4 max-w-sm text-[15px] leading-7 text-white/55">
            {siteConfig.tagline}. Serving families across {siteConfig.city} with
            modern, comfortable dental care.
          </p>

          <a
            href={`tel:${siteConfig.phone.tel}`}
            className="mt-7 inline-flex items-center rounded-full bg-amber px-5 py-2.5 text-sm font-medium text-ink shadow-lg shadow-amber/20 transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90"
          >
            Call to book a visit
          </a>

          {socials.length > 0 && (
            <div className="mt-8 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.key}
                  href={s.href}
                  aria-label={s.key}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/60 transition-all duration-300 hover:-translate-y-0.5 hover:border-amber hover:text-amber"
                >
                  <SocialIcon platform={s.key} />
                </a>
              ))}
            </div>
          )}
        </div>

        <div className="md:col-span-3">
          <p className="text-sm font-medium uppercase tracking-wide text-white/50">
            Pages
          </p>
          <ul className="mt-5 space-y-3 text-sm">
            {pages.map(([label, href]) => (
              <li key={href}>
                <Link
                  href={href}
                  className="group inline-flex items-center text-white/65 transition-colors duration-300 hover:text-white"
                >
                  <span className="relative">
                    {label}
                    <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-amber transition-all duration-300 group-hover:w-full" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="text-sm font-medium uppercase tracking-wide text-white/50">
            Visit us
          </p>
          <ul className="mt-5 space-y-4 text-sm text-white/65">
            <li className="flex gap-3">
              <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-amber" />
              <span>
                {siteConfig.address.line1}, {siteConfig.address.line2}
              </span>
            </li>
            <li className="flex gap-3">
              <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-amber" />
              <a
                href={`tel:${siteConfig.phone.tel}`}
                className="transition-colors duration-300 hover:text-white"
              >
                {siteConfig.phone.display}
              </a>
            </li>
            <li className="flex gap-3">
              <ClockIcon className="mt-0.5 h-4 w-4 shrink-0 text-amber" />
              <span className="space-y-1">
                {siteConfig.hours.map((h) => (
                  <span key={h.day} className="block">
                    {h.day}: {h.time}
                  </span>
                ))}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.clinicName}. All rights
            reserved.
          </p>
          <p className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span>{siteConfig.city}, Maharashtra</span>
            <span className="hidden text-white/20 md:inline">|</span>
            <span>
              Designed &amp; Developed by{" "}
              <a
                href="https://codewinxitsolution.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-white/60 transition-colors duration-300 hover:text-amber"
              >
                CODEWINX IT SOLUTION
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}