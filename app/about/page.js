import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import { ShieldIcon, SparkleIcon, ClockIcon } from "@/components/Icons";
import SitePhoto from "@/components/SitePhoto";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "About",
  description: `Meet the dentists, technology and care approach behind ${siteConfig.clinicName} in ${siteConfig.city}.`,
};

/* ------------------------------------------------------------------ */
/*  CONTENT — everything marked EDIT_ME must be replaced with real     */
/*  clinic information before the site goes live.                      */
/* ------------------------------------------------------------------ */

// EDIT_ME — use real numbers only. Delete any stat you can't stand behind.
const stats = [
  { value: "10+", label: "Years of practice" },
  { value: "5,000+", label: "Patients treated" },
  { value: "All ages", label: "Children to seniors" },
];


// Short trust points shown under the hero buttons (all match content further down the page).
const heroPoints = [
  "Patients of every age",
  "Clear cost before treatment",
  "Sterilised instruments, every visit",
];

const values = [
  {
    icon: ShieldIcon,
    title: "Careful, unhurried treatment",
    text: "We take the time to explain a diagnosis before recommending treatment, so you always know what's happening and why.",
  },
  {
    icon: SparkleIcon,
    title: "Modern equipment & hygiene",
    text: "Sterilisation protocols and up-to-date instruments are followed for every single patient, every single time.",
  },
  {
    icon: ClockIcon,
    title: "Respect for your time",
    text: "Appointments are scheduled to minimise waiting, with clear timelines for multi-visit treatments.",
  },
];

// EDIT_ME — the lead dentist's real name, degrees, experience and photo.
// Set `photo` to an image path (e.g. "/images/dr-name.jpg") once you have one;
// until then, the initials panel is shown instead of a broken image.
const dentist = {
  name: "Dr.Munde Sir",
  initials: "DR",
  role: "Principal Dentist",
  photo: null,
  bio: [
    "Write two short paragraphs here: what led you into dentistry, what you enjoy most about it, and the kind of patient experience you set out to create.",
    "Mention special interests such as root canal treatment, implants, smile design or paediatric dentistry so patients know when to ask for you.",
  ],
  credentials: [
    "BDS — University name, year",
    "MDS / postgraduate training — if applicable",
    "Registered with the State Dental Council — registration no.",
    "Member of the Indian Dental Association",
  ],
  philosophy:
    "Good dentistry starts with listening. A patient who understands their treatment is a patient who feels in control.",
};

// EDIT_ME — list only equipment and protocols the clinic really has.
const technology = [
  {
    title: "Digital X-rays",
    text: "Low-radiation imaging with results on screen in seconds, so we can show you exactly what we see.",
  },
  {
    title: "Intra-oral camera",
    text: "Close-up photos of your teeth so a small crack or cavity is easy to point out and understand.",
  },
  {
    title: "Rotary root canal instruments",
    text: "Faster, smoother canal cleaning that usually means fewer visits and less discomfort.",
  },
  {
    title: "Autoclave sterilisation",
    text: "Every reusable instrument is sterilised between patients, and single-use items are discarded after one use.",
  },
];

// This one is a genuine sequence, so numbering is meaningful.
const visitSteps = [
  {
    title: "Book your visit",
    text: "Call or book online and tell us what's bothering you. We'll find a time that suits your day.",
  },
  {
    title: "Consultation & check-up",
    text: "We look at your teeth and gums, take any X-rays needed, and ask about your medical history and goals.",
  },
  {
    title: "A clear plan, in plain words",
    text: "You get a diagnosis, the options available, the expected number of visits and the cost — before anything begins.",
  },
  {
    title: "Treatment & follow-up",
    text: "We treat at your pace, check in after complex procedures, and set a reminder for your next routine check-up.",
  },
];

// EDIT_ME — team members, or delete the section if the team changes often.
const team = [
  { name: "Dr. Associate Name", initials: "AD", role: "Associate Dentist", photo: null },
  { name: "Team Member Name", initials: "TM", role: "Dental Assistant", photo: null },
  { name: "Team Member Name", initials: "FD", role: "Front Desk & Scheduling", photo: null },
];

// EDIT_ME — replace with REAL patient feedback (with permission).
// Do not publish invented reviews. Empty this array to hide the section.
const testimonials = [
  {
    quote: "Replace with a real patient comment about their experience at the clinic.",
    name: "Patient name",
    detail: "Treatment received",
  },
  {
    quote: "Replace with a second real patient comment — short and specific works best.",
    name: "Patient name",
    detail: "Treatment received",
  },
  {
    quote: "Replace with a third real patient comment.",
    name: "Patient name",
    detail: "Treatment received",
  },
];

const faqs = [
  {
    q: "Is a root canal painful?",
    a: "With modern anaesthesia the procedure itself should feel similar to having a filling. Some mild tenderness afterwards is normal and usually settles within a few days.",
  },
  {
    q: "How often should I get a dental check-up?",
    a: "Most people do well with a check-up and cleaning every six months. If you have gum disease or other ongoing problems, we may suggest more frequent visits.",
  },
  {
    q: "At what age should my child first see a dentist?",
    a: "Around their first birthday, or when the first tooth appears. Early visits are short and mostly about getting comfortable.",
  },
  {
    q: "What should I do in a dental emergency?",
    a: "For severe pain, swelling, or a knocked-out tooth, call the clinic right away. If a tooth has come out whole, keep it moist in milk and bring it with you.",
  },
  {
    q: "Will I know the cost before treatment starts?",
    a: "Yes. We explain the plan and estimated cost first, and you decide whether to go ahead.",
  },
];

/* ------------------------------------------------------------------ */
/*  Small local icons                                                  */
/* ------------------------------------------------------------------ */

const CheckIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 shrink-0 text-brand" aria-hidden="true">
    <path d="M4 10.5l3.5 3.5L16 5.5" />
  </svg>
);

const QuoteIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 text-brand/30" aria-hidden="true">
    <path d="M9.5 6C6.5 7 4.5 9.6 4.5 13v5h6v-6h-3c0-2 1-3.3 2.6-4L9.5 6zm9 0c-3 1-5 3.6-5 7v5h6v-6h-3c0-2 1-3.3 2.6-4L18.5 6z" />
  </svg>
);

const PlusIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-5 w-5 shrink-0 text-brand transition-transform group-open:rotate-45" aria-hidden="true">
    <path d="M10 4v12M4 10h12" />
  </svg>
);

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-surface-2">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-brand/10 blur-3xl"
        />
        <div className="container-page relative grid gap-14 py-14 md:py-20 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Text */}
          <div>
            <nav aria-label="Breadcrumb" className="text-sm text-muted">
              <Link href="/" className="hover:text-brand">
                Home
              </Link>
              <span className="mx-2" aria-hidden="true">/</span>
              <span className="text-ink">About</span>
            </nav>

            <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-1.5 text-sm font-medium text-brand">
              <SparkleIcon className="h-4 w-4" />
              About {siteConfig.clinicName}
            </span>

            <h1 className="font-display mt-5 text-4xl font-semibold leading-[1.1] text-ink md:text-5xl">
              Gentle, modern dentistry for every smile in {siteConfig.city}
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-muted md:text-lg md:leading-8">
              A dental clinic built for {siteConfig.city} — combining modern
              dentistry with the kind of care you'd want for your own family.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                Book an appointment
              </Link>
              <a
                href="#story"
                className="rounded-full border border-line bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:border-brand hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                Read our story
              </a>
            </div>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {heroPoints.map((point) => (
                <li key={point} className="flex items-center gap-2.5 text-sm text-ink">
                  <CheckIcon />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Photo composition */}
          <div className="relative mx-auto w-full max-w-xl pb-6 lg:max-w-none">
            <div
              aria-hidden="true"
              className="absolute -right-4 -top-4 h-full w-full rounded-3xl bg-brand/10 sm:-right-6 sm:-top-6"
            />
            <SitePhoto
              src="/images/clinic-interior.png"
              alt={`Inside ${siteConfig.clinicName}`}
              className="relative h-[340px] sm:h-[440px] lg:h-[500px]"
            />

            <div className="absolute -bottom-2 left-3 flex max-w-[15rem] items-start gap-3 rounded-2xl border border-line bg-white p-4 shadow-lg sm:-left-6 sm:bottom-10">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface-2">
                <ShieldIcon className="h-5 w-5 text-brand" />
              </span>
              <div>
                <p className="text-sm font-semibold text-ink">Careful, unhurried</p>
                <p className="mt-0.5 text-xs leading-5 text-muted">
                  Every diagnosis explained before treatment.
                </p>
              </div>
            </div>

            <div className="absolute right-3 top-4 hidden max-w-[14rem] items-start gap-3 rounded-2xl border border-line bg-white p-4 shadow-lg sm:flex sm:-right-4 sm:top-10">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface-2">
                <ClockIcon className="h-5 w-5 text-brand" />
              </span>
              <div>
                <p className="text-sm font-semibold text-ink">Minimal waiting</p>
                <p className="mt-0.5 text-xs leading-5 text-muted">
                  Appointments scheduled around your day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story + numbers */}
      <section id="story" className="scroll-mt-20 py-16 md:py-20">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <SitePhoto
            src="/images/Waitingroom.avif"
            alt="Comfortable waiting area at the clinic"
            className="h-80 lg:h-[420px]"
          />
          <div>
            <p className="text-sm font-medium text-brand">Our story</p>
            <h2 className="font-display mt-2 text-3xl font-semibold text-ink">
              Dentistry that puts the patient first
            </h2>
            {/* EDIT_ME — replace with the clinic's real founding story,
                year established, and any specialisations. */}
            <p className="mt-4 text-[15px] leading-7 text-muted">
              {siteConfig.clinicName} was started with a simple goal: make
              dental visits something people don't dread. That means clear
              communication, gentle handling, and equipment that keeps
              procedures as quick and comfortable as possible — whether
              you're in for a routine clean-up or a more involved procedure
              like a root canal or implant.
            </p>
            <p className="mt-4 text-[15px] leading-7 text-muted">
              We treat patients of every age, from a child's first check-up
              to complete smile restorations for adults, and we're based
              right in {siteConfig.address.line1}, {siteConfig.city}.
            </p>

            <dl className="mt-8 grid grid-cols-3 divide-x divide-line rounded-2xl border border-line bg-white">
              {stats.map((s) => (
                <div key={s.label} className="px-4 py-5 text-center">
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="font-display text-2xl font-semibold text-brand md:text-3xl">
                    {s.value}
                  </dd>
                  <p className="mt-1 text-xs leading-5 text-muted">{s.label}</p>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Mission strip */}
      <section className="border-y border-line bg-white py-16 md:py-20">
        <div className="container-page">
          <p className="text-sm font-medium text-brand">What guides us</p>
          <h2 className="font-display mt-2 text-3xl font-semibold text-ink">
            Our approach to care
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl bg-surface-2 p-6">
                <v.icon className="h-6 w-6 text-brand" />
                <h3 className="font-display mt-4 text-lg font-semibold text-ink">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the dentist */}
      <section className="py-16 md:py-20">
        <div className="container-page grid gap-12 lg:grid-cols-5 lg:items-start">
          <div className="lg:col-span-2">
            {dentist.photo ? (
              <SitePhoto
                src={dentist.photo}
                alt={dentist.name}
                className="h-96 lg:h-[460px]"
              />
            ) : (
              <div
                className="flex h-96 items-center justify-center rounded-2xl bg-surface-2 lg:h-[460px]"
                role="img"
                aria-label={dentist.name}
              >
                <span className="font-display text-7xl font-semibold text-brand/40">
                  {dentist.initials}
                </span>
              </div>
            )}
          </div>

          <div className="lg:col-span-3">
            <p className="text-sm font-medium text-brand">Meet your dentist</p>
            <h2 className="font-display mt-2 text-3xl font-semibold text-ink">
              {dentist.name}
            </h2>
            <p className="mt-1 text-sm text-muted">{dentist.role}</p>

            {dentist.bio.map((p) => (
              <p key={p} className="mt-4 text-[15px] leading-7 text-muted">
                {p}
              </p>
            ))}

            <blockquote className="mt-6 border-l-2 border-brand pl-5 text-lg leading-8 text-ink">
              {dentist.philosophy}
            </blockquote>

            <h3 className="font-display mt-8 text-lg font-semibold text-ink">
              Qualifications & memberships
            </h3>
            <ul className="mt-3 space-y-2.5">
              {dentist.credentials.map((c) => (
                <li key={c} className="flex items-start gap-3 text-sm leading-6 text-muted">
                  <CheckIcon />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Technology & hygiene */}
      <section className="border-y border-line bg-white py-16 md:py-20">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-medium text-brand">Technology & safety</p>
            <h2 className="font-display mt-2 text-3xl font-semibold text-ink">
              Better tools mean shorter, gentler visits
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-7 text-muted">
              We invest in equipment that improves accuracy and comfort, and
              we're strict about infection control — because you should never
              have to wonder how clean your instruments are.
            </p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {technology.map((t) => (
              <li key={t.title} className="rounded-2xl border border-line bg-surface-2 p-5">
                <CheckIcon />
                <h3 className="font-display mt-3 text-base font-semibold text-ink">
                  {t.title}
                </h3>
                <p className="mt-1.5 text-sm leading-6 text-muted">{t.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* First visit */}
      <section className="py-16 md:py-20">
        <div className="container-page">
          <p className="text-sm font-medium text-brand">Your first visit</p>
          <h2 className="font-display mt-2 text-3xl font-semibold text-ink">
            What to expect, step by step
          </h2>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {visitSteps.map((s, i) => (
              <li key={s.title} className="relative rounded-2xl border border-line bg-white p-6">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-sm font-semibold text-white">
                  {i + 1}
                </span>
                <h3 className="font-display mt-4 text-base font-semibold text-ink">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Team */}
      {team.length > 0 && (
        <section className="border-y border-line bg-white py-16 md:py-20">
          <div className="container-page">
            <p className="text-sm font-medium text-brand">Our team</p>
            <h2 className="font-display mt-2 text-3xl font-semibold text-ink">
              The people who'll look after you
            </h2>
            <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {team.map((m) => (
                <li key={m.name + m.role} className="flex items-center gap-4 rounded-2xl bg-surface-2 p-5">
                  {m.photo ? (
                    <SitePhoto src={m.photo} alt={m.name} className="h-16 w-16 shrink-0 rounded-full" />
                  ) : (
                    <span
                      className="font-display flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white text-lg font-semibold text-brand"
                      aria-hidden="true"
                    >
                      {m.initials}
                    </span>
                  )}
                  <div>
                    <p className="font-display text-base font-semibold text-ink">{m.name}</p>
                    <p className="text-sm text-muted">{m.role}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Testimonials */}
      {testimonials.length > 0 && (
        <section className="py-16 md:py-20">
          <div className="container-page">
            <p className="text-sm font-medium text-brand">Patient feedback</p>
            <h2 className="font-display mt-2 text-3xl font-semibold text-ink">
              What our patients say
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {testimonials.map((t, i) => (
                <figure key={i} className="flex flex-col rounded-2xl border border-line bg-white p-6">
                  <QuoteIcon />
                  <blockquote className="mt-3 flex-1 text-[15px] leading-7 text-ink">
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-5 border-t border-line pt-4">
                    <p className="text-sm font-medium text-ink">{t.name}</p>
                    <p className="text-xs text-muted">{t.detail}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="border-y border-line bg-white py-16 md:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-3">
          <div>
            <p className="text-sm font-medium text-brand">Common questions</p>
            <h2 className="font-display mt-2 text-3xl font-semibold text-ink">
              Before you visit
            </h2>
            <p className="mt-4 text-[15px] leading-7 text-muted">
              Can't find your answer? Ask us when you call or drop in — we're
              happy to talk through any concern.
            </p>
          </div>
          <div className="divide-y divide-line rounded-2xl border border-line lg:col-span-2">
            {faqs.map((f) => (
              <details key={f.q} className="group px-5 py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-medium text-ink [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <PlusIcon />
                </summary>
                <p className="mt-3 pr-8 text-sm leading-6 text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Hours + location */}
      <section className="py-16 md:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-medium text-brand">Clinic hours</p>
            <h2 className="font-display mt-2 text-3xl font-semibold text-ink">
              When you can find us
            </h2>
            <ul className="mt-6 divide-y divide-line rounded-2xl border border-line bg-white">
              {siteConfig.hours.map((h) => (
                <li key={h.day} className="flex items-center justify-between px-5 py-4 text-sm">
                  <span className="font-medium text-ink">{h.day}</span>
                  <span className="text-muted">{h.time}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-2xl bg-surface-2 p-5">
              <p className="text-sm font-medium text-ink">Find the clinic</p>
              <p className="mt-1 text-sm leading-6 text-muted">
                {siteConfig.clinicName}, {siteConfig.address.line1},{" "}
                {siteConfig.city}
              </p>
            </div>
          </div>
          <SitePhoto
            src="/images/clinic-interior.png"
            alt={`Inside ${siteConfig.clinicName}`}
            className="h-64 lg:h-full"
          />
        </div>
      </section>

      <CTASection />
    </>
  );
}