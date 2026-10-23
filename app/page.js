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

/* ---------- small hero-only icons ---------- */

function ArrowIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor"
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

function ToothOutline({ className = "" }) {
  return (
    <svg viewBox="0 0 48 56" fill="none" stroke="currentColor" strokeWidth="1.6"
      strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M24 8c-4-4-14-5-17 3-2 6 1 11 3 17 1 6 2 18 7 18 4 0 3-12 7-12s3 12 7 12c5 0 6-12 7-18 2-6 5-11 3-17-3-8-13-7-17-3z" />
    </svg>
  );
}

function Sparkle({ className = "", style }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style} aria-hidden="true">
      <path d="M12 0c.7 6.2 5.8 11.3 12 12-6.2.7-11.3 5.8-12 12-.7-6.2-5.8-11.3-12-12C6.2 11.3 11.3 6.2 12 0z" />
    </svg>
  );
}

function HeartIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor"
      strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 20s-7-4.6-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.4-7 10-7 10z" />
    </svg>
  );
}

function DoctorIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor"
      strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 20c0-3.9 3.1-7 7-7s7 3.1 7 7" />
      <path d="M10 15.5v2.2a2 2 0 0 0 4 0v-2.2" />
    </svg>
  );
}

/* Rising "fresh water" bubbles — left %, size px, delay s, duration s */
const BUBBLES = [
  { left: "6%", size: 14, delay: 0, dur: 16 },
  { left: "14%", size: 26, delay: 4, dur: 22 },
  { left: "27%", size: 10, delay: 8, dur: 14 },
  { left: "38%", size: 20, delay: 2, dur: 19 },
  { left: "49%", size: 12, delay: 11, dur: 15 },
  { left: "58%", size: 30, delay: 6, dur: 24 },
  { left: "69%", size: 16, delay: 1, dur: 18 },
  { left: "78%", size: 10, delay: 9, dur: 13 },
  { left: "87%", size: 22, delay: 5, dur: 21 },
  { left: "94%", size: 14, delay: 12, dur: 17 },
];

export default function HomePage() {
  const featuredServices = siteConfig.services.slice(0, 6);

  // Real rating computed from your own testimonials data — swap for your
  // verified Google rating + review count once you have it.
  const reviews = Array.isArray(siteConfig.testimonials)
    ? siteConfig.testimonials
    : [];
  const hasReviews = reviews.length > 0;
  const avgRating = hasReviews
    ? reviews.reduce((sum, t) => sum + (t?.rating || 0), 0) / reviews.length
    : 0;
  const reviewCount = reviews.length;

  // Three highlight badges under the hero buttons
  const highlights = [
    { label: ["Modern", "Technology"], Icon: ICONS.tooth ?? ToothOutline },
    { label: ["Gentle", "Care"], Icon: HeartIcon },
    { label: ["Experienced", "Dentist"], Icon: DoctorIcon },
  ];

  return (
    <>
      {/* Hero background animations — kept local, no tailwind config change needed */}
      <style>{`
        @keyframes aurora-a { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(60px,40px) scale(1.15); } }
        @keyframes aurora-b { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(-70px,50px) scale(1.2); } }
        @keyframes aurora-c { 0%,100% { transform: translate(0,0) scale(1.05); } 50% { transform: translate(40px,-50px) scale(.9); } }
        @keyframes hero-bubble {
          0%   { transform: translateY(0) translateX(0); opacity: 0; }
          10%  { opacity: 1; }
          50%  { transform: translateY(-55vh) translateX(18px); }
          90%  { opacity: 1; }
          100% { transform: translateY(-115vh) translateX(-12px); opacity: 0; }
        }
        @keyframes hero-ring { 0% { transform: scale(.7); opacity: .55; } 100% { transform: scale(1.45); opacity: 0; } }
        @keyframes hero-pulse { 0%,100% { opacity: .55; transform: scale(1); } 50% { opacity: .9; transform: scale(1.06); } }
        @keyframes hero-float { 0%,100% { transform: translateY(0) rotate(0); } 50% { transform: translateY(-12px) rotate(5deg); } }
        @keyframes hero-twinkle { 0%,100% { opacity: .2; transform: scale(.7); } 50% { opacity: 1; transform: scale(1.2); } }
        @keyframes hero-rise { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes hero-shine { 0% { transform: translateX(-120%) skewX(-20deg); } 60%,100% { transform: translateX(320%) skewX(-20deg); } }
        .aurora-a { animation: aurora-a 18s ease-in-out infinite; }
        .aurora-b { animation: aurora-b 22s ease-in-out infinite; }
        .aurora-c { animation: aurora-c 26s ease-in-out infinite; }
        .hero-bubble { animation: hero-bubble linear infinite; }
        .hero-ring { animation: hero-ring 5s ease-out infinite; }
        .hero-pulse { animation: hero-pulse 6s ease-in-out infinite; }
        .hero-float { animation: hero-float 9s ease-in-out infinite; }
        .hero-twinkle { animation: hero-twinkle 3.6s ease-in-out infinite; }
        .hero-rise { animation: hero-rise .9s ease-out both; }
        .hero-shine::after {
          content: ""; position: absolute; inset: 0; width: 40%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,.45), transparent);
          animation: hero-shine 5s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .aurora-a,.aurora-b,.aurora-c,.hero-bubble,.hero-ring,.hero-pulse,.hero-float,.hero-twinkle,.hero-rise,.hero-shine::after { animation: none; }
        }
      `}</style>

      {/* ───────────── HERO ─────────────
          Photo path: /public/images/Hero-img.png → "/images/Hero-img.png"
          (change the extension below if yours is .jpg / .jpeg / .webp) */}
      <section className="relative isolate overflow-hidden bg-white">
        {/* ── Living background ── */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          {/* 1. clean base gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-white via-surface-2 to-white" />

          {/* 2. aurora — three big soft colour clouds drifting slowly */}
          <div
            className="aurora-a absolute -left-40 -top-40 h-[34rem] w-[34rem] rounded-full blur-3xl"
            style={{ background: "radial-gradient(circle, rgba(45,212,191,.30), transparent 65%)" }}
          />
          <div
            className="aurora-b absolute -right-32 top-0 h-[38rem] w-[38rem] rounded-full blur-3xl"
            style={{ background: "radial-gradient(circle, rgba(125,211,252,.38), transparent 65%)" }}
          />
          <div
            className="aurora-c absolute -bottom-52 left-1/3 h-[32rem] w-[32rem] rounded-full blur-3xl"
            style={{ background: "radial-gradient(circle, rgba(245,185,66,.22), transparent 65%)" }}
          />

          {/* 3. fine grid that fades out at the edges */}
          <div
            className="absolute inset-0 text-brand opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
              backgroundSize: "56px 56px",
              maskImage: "radial-gradient(ellipse 80% 70% at 60% 45%, black 20%, transparent 75%)",
              WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 60% 45%, black 20%, transparent 75%)",
            }}
          />

          {/* 4. rising bubbles (fresh / clean feeling) */}
          {BUBBLES.map((b, i) => (
            <span
              key={i}
              className="hero-bubble absolute top-full rounded-full"
              style={{
                left: b.left,
                width: b.size,
                height: b.size,
                animationDelay: `${b.delay}s`,
                animationDuration: `${b.dur}s`,
                border: "1px solid rgba(20,184,166,.28)",
                background:
                  "radial-gradient(circle at 30% 30%, rgba(255,255,255,.95), rgba(45,212,191,.12) 70%)",
                boxShadow: "inset 0 0 6px rgba(255,255,255,.8)",
              }}
            />
          ))}

          {/* 5. gold line art + floating tooth outlines + sparkles */}
          <svg
            viewBox="0 0 600 160"
            className="absolute bottom-0 left-0 hidden h-40 w-[40rem] text-amber/50 lg:block"
            fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"
          >
            <path d="M0 140 C 120 20, 260 20, 360 90 S 540 150, 600 110" />
          </svg>
          <ToothOutline className="hero-float absolute bottom-14 left-5 hidden h-20 w-16 text-amber/70 lg:block" />
          <ToothOutline className="hero-float absolute right-8 top-8 hidden h-14 w-12 text-amber/60 [animation-delay:2s] lg:block" />

          <Sparkle className="hero-twinkle absolute left-[7%] top-[20%] h-4 w-4 text-amber" />
          <Sparkle className="hero-twinkle absolute left-[45%] top-[10%] h-3 w-3 text-brand/60" style={{ animationDelay: "1s" }} />
          <Sparkle className="hero-twinkle absolute right-[5%] top-[50%] h-5 w-5 text-amber" style={{ animationDelay: ".6s" }} />
          <Sparkle className="hero-twinkle absolute bottom-[16%] left-[42%] h-3 w-3 text-amber/80" style={{ animationDelay: "1.8s" }} />

          {/* 6. soft fade into the next section */}
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white to-transparent" />
        </div>

        <div className="container-page relative grid items-center gap-12 py-10 md:py-14 lg:grid-cols-[1.05fr_1fr] lg:gap-8 lg:py-10">
          {/* ── Left: copy ── */}
          <div className="hero-rise max-w-xl">
            <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-wide text-brand">
              <span className="h-px w-8 bg-amber" />
              Healthy teeth · Confident smiles · Lifelong care
            </p>

            <h1 className="font-display mt-4 text-[2.4rem] font-semibold leading-[1.1] text-ink sm:text-5xl lg:text-[3.2rem]">
              A <span className="font-bold">calmer visit</span> to the dentist,
              right here in{" "}
              <span className="font-bold">{siteConfig.city}</span>.
            </h1>

            <p className="mt-5 max-w-md text-[17px] leading-7 text-muted">
              {siteConfig.clinicName} brings together modern equipment,
              unhurried explanations, and gentle care — for check-ups, root
              canals, braces, and full smile makeovers.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="hero-shine group relative flex items-center gap-2.5 overflow-hidden rounded-full bg-brand px-7 py-4 text-sm font-medium text-white shadow-lg shadow-brand/30 transition-all hover:-translate-y-0.5 hover:bg-brand-dark"
              >
                <ClockIcon className="h-4 w-4" />
                Book an Appointment
                <ArrowIcon className="transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={`tel:${siteConfig.phone.tel}`}
                className="flex items-center gap-2 rounded-full border border-brand/40 bg-white/80 px-7 py-4 text-sm font-medium text-ink backdrop-blur transition-all hover:-translate-y-0.5 hover:border-brand hover:text-brand"
              >
                <PhoneIcon className="h-4 w-4 text-brand" /> Call Now
              </a>
            </div>

            {/* Rating — computed from siteConfig.testimonials */}
            {hasReviews && (
              <div className="mt-5 flex items-center gap-3">
                <div className="flex items-center gap-0.5 text-amber">
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
                <p className="text-xs text-muted">
                  {avgRating.toFixed(1)} rating · {reviewCount}+ reviews
                </p>
              </div>
            )}

            {/* Highlight badges: icon circle + two-line label, divided */}
            <div className="mt-6 flex flex-wrap items-center gap-y-4">
              {highlights.map(({ label, Icon }, i) => (
                <div
                  key={label.join(" ")}
                  className={`flex items-center gap-3 pr-6 ${
                    i > 0 ? "border-l border-line pl-6" : ""
                  }`}
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-brand/40 bg-white/70 text-brand backdrop-blur">
                    <Icon className="h-[22px] w-[22px]" />
                  </span>
                  <span className="text-sm font-medium leading-5 text-ink">
                    {label[0]}
                    <br />
                    {label[1]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: framed photo ── */}
          <div className="hero-rise relative mx-auto w-full max-w-xl pb-14 pt-8 lg:max-w-none lg:pl-4 lg:pr-6">
            {/* Live glow + expanding "radar" rings behind the photo */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div
                className="hero-pulse absolute h-[85%] w-[85%] rounded-[3rem] blur-3xl"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(20,184,166,.45), rgba(125,211,252,.35) 55%, rgba(245,185,66,.3))",
                }}
              />
              <div className="hero-ring absolute h-[70%] w-[70%] rounded-full border border-brand/30" />
              <div className="hero-ring absolute h-[70%] w-[70%] rounded-full border border-brand/30 [animation-delay:1.7s]" />
              <div className="hero-ring absolute h-[70%] w-[70%] rounded-full border border-amber/40 [animation-delay:3.4s]" />
            </div>

            {/* Gold outline frame sitting slightly behind the photo */}
            <div
              aria-hidden="true"
              className="absolute bottom-[4.25rem] left-1 right-9 top-5 rounded-[2.5rem] rounded-bl-[5rem] border border-amber/60 lg:left-1 lg:right-9"
            />

            {/* Main photo with organic, uneven rounded corners */}
            <div className="relative ml-3 mr-6 aspect-[4/3.3] overflow-hidden rounded-[2.5rem] rounded-bl-[5rem] rounded-br-[3rem] bg-surface-2 shadow-2xl shadow-brand/20 ring-4 ring-white/80">
              <img
                src="/images/Hero-img.png"
                alt="Dentist treating a patient at Dr. Munde's Dental World"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Before / after card — overlaps the top-right corner */}
            <div className="absolute right-0 top-0 w-36 overflow-hidden rounded-2xl border-4 border-white bg-white shadow-xl sm:w-48 lg:right-1">
              <div className="relative h-20 w-full sm:h-24">
                <SitePhoto
                  src="/images/before-after-smile.jpeg"
                  alt="Before and after teeth whitening results"
                  className="h-full w-full"
                />
                <span className="absolute bottom-1 left-1 rounded-full bg-ink/80 px-2.5 py-0.5 text-[10px] font-medium text-white">
                  Before
                </span>
                <span className="absolute bottom-1 right-1 rounded-full bg-brand px-2.5 py-0.5 text-[10px] font-medium text-white">
                  After
                </span>
              </div>
            </div>

            {/* Script tagline */}
            <p className="font-display absolute bottom-1 right-10 -rotate-3 text-right text-lg italic leading-6 text-amber lg:right-16">
              Healthy Smiles
              <br />
              Brighter Lives
            </p>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-line bg-white">
        <div className="container-page grid grid-cols-1 gap-6 py-10 sm:grid-cols-3">
          <div className="flex gap-3">
            <ClockIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
            <div>
              <p className="text-sm font-medium text-ink">Your Services, Every Day</p>
              <p className="text-sm text-muted">{siteConfig.hours[0].time}</p>
            </div>
          </div>
          <div className="flex gap-3">
            <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
            <div>
              <p className="text-sm font-medium text-ink">Easy to find</p>
              <p className="text-sm text-muted">{siteConfig.address.line1}, {siteConfig.city}</p>
            </div>
          </div>
          <div className="flex gap-3">
            <PhoneIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
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
              <h2 className="font-display mt-2 text-3xl font-semibold text-ink md:text-4xl">
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
            <h2 className="font-display mt-2 text-3xl font-semibold text-ink md:text-4xl">
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
          <h2 className="font-display mt-2 text-3xl font-semibold text-ink md:text-4xl">
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
        <div className="container-page grid items-center gap-8 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-sm font-medium text-brand">Find us</p>
            <h2 className="font-display mt-2 text-3xl font-semibold text-ink md:text-4xl">
              Located in {siteConfig.address.line1}
            </h2>
            <p className="mt-4 text-[15px] leading-7 text-muted">
              {siteConfig.address.full}
            </p>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=Shivkamal+Silver+Arch%2C+Nandi+Stop%2C+Deshpande+Colony%2C+Latur%2C+Maharashtra+413512`}
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