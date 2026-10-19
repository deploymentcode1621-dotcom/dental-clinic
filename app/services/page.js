import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import { ICONS } from "@/components/Icons";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Services",
  description:
    "Explore dental services at " +
    siteConfig.clinicName +
    ": check-ups, root canal, braces, implants, cosmetic dentistry, and more in " +
    siteConfig.city +
    ".",
};

// TODO: replace with your real numbers.
const quickStats = [
  { label: "Treatments offered", value: `${siteConfig.services.length}+` },
  { label: "Years combined experience", value: "15+" },
  { label: "Emergency slots", value: "Daily" },
  { label: "Painless-first approach", value: "100%" },
];

// Swap labels/icons for the concerns your patients actually ask about.
// Unknown icon keys safely fall back to the tooth icon.
const commonConcerns = [
  { label: "Toothache", icon: "tooth" },
  { label: "Sensitive teeth", icon: "shield" },
  { label: "Crooked smile", icon: "braces" },
  { label: "Missing tooth", icon: "implant" },
  { label: "Stained teeth", icon: "sparkle" },
  { label: "Kids' first visit", icon: "user" },
  { label: "Wisdom tooth pain", icon: "extraction" },
  { label: "Bad breath", icon: "shield" },
];

const whyUs = [
  {
    icon: "shield",
    title: "Sterile & safe",
    text: "Hospital-grade sterilisation and single-use essentials for every patient.",
  },
  {
    icon: "sparkle",
    title: "Modern technology",
    text: "Digital diagnostics and gentle techniques for faster, more comfortable care.",
  },
  {
    icon: "user",
    title: "Patient-first care",
    text: "Clear explanations, honest advice, and no pressure to book extras.",
  },
  {
    icon: "tooth",
    title: "Transparent pricing",
    text: "You know the estimate before treatment starts. No surprises at the counter.",
  },
];

const visitSteps = [
  {
    step: "01",
    title: "Tell us what's wrong",
    text: "Call, WhatsApp, or use the contact form to describe your concern.",
  },
  {
    step: "02",
    title: "We plan the visit",
    text: "We confirm a slot and let you know what to expect and roughly how long it will take.",
  },
  {
    step: "03",
    title: "Treatment & follow-up",
    text: "We walk you through the treatment as it happens and schedule any follow-up needed.",
  },
];

// TODO: edit these to match your clinic's real answers.
const faqs = [
  {
    q: "Is dental treatment painful?",
    a: "We use modern anaesthesia and gentle techniques, so most treatments are comfortable. If you feel anything at any point, just raise your hand and we pause.",
  },
  {
    q: "Do I need an appointment, or can I walk in?",
    a: "Appointments are recommended so you don't wait, but we keep daily slots open for dental emergencies.",
  },
  {
    q: "How do I know which treatment I need?",
    a: "Start with a check-up. We examine, explain your options in plain language, and you decide what's right for you.",
  },
  {
    q: "Can I get a cost estimate before treatment?",
    a: "Yes. We share an estimate after the examination, before any treatment begins.",
  },
];

const slugify = (s) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function ServicesPage() {
  const services = siteConfig.services;

  // Optional `service.featured` flag hand-picks the spotlight treatments;
  // falls back to the first three if none are flagged.
  const featured = (
    services.filter((s) => s.featured).length
      ? services.filter((s) => s.featured)
      : services
  ).slice(0, 3);

  // Optional `service.category` groups the catalog into sections.
  const grouped = services.reduce((acc, s) => {
    const cat = s.category || "General Care";
    acc[cat] = acc[cat] || [];
    acc[cat].push(s);
    return acc;
  }, {});
  const categories = Object.keys(grouped);

  return (
    <>
      {/* ───────────── HERO (split layout) ───────────── */}
      <section className="relative isolate overflow-hidden bg-ink">
        <Image
          src="/images/services-hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover"
        />
        {/* Dark overlay keeps the text readable on any image */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/85 via-ink/65 to-ink/30" />

        <div className="container-page py-20 md:py-28 lg:py-32">
          <p className="text-sm font-medium uppercase tracking-wide text-amber">
            Services
          </p>
          <h1 className="font-display mt-3 max-w-3xl text-4xl font-semibold leading-tight text-white md:text-5xl">
            Treatment for every part of your smile
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/80 md:text-lg">
            From routine cleaning to complete smile makeovers, each treatment
            plan is built around your comfort, timeline, and budget.
          </p>
        </div>
      </section> 

      {/* ───────────── STATS STRIP ───────────── */}
      <section className="relative z-10 -mt-px border-y border-line bg-white">
        <div className="container-page grid grid-cols-2 gap-y-8 py-10 lg:grid-cols-4 lg:divide-x lg:divide-line">
          {quickStats.map((s) => (
            <div key={s.label} className="flex flex-col lg:px-8 lg:first:pl-0">
              <span className="font-display text-3xl font-semibold text-ink md:text-4xl">
                {s.value}
              </span>
              <span className="mt-1 text-xs text-muted md:text-sm">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ───────────── SIGNATURE TREATMENTS ───────────── */}
      <section className="bg-white py-16 md:py-24">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-brand">Most requested</p>
            <h2 className="font-display mt-2 text-3xl font-semibold text-ink md:text-4xl">
              Signature treatments
            </h2>
            <p className="mt-3 text-muted">
              The treatments our patients trust us with the most.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {featured.map((service, i) => {
              const Icon = ICONS[service.icon] ?? ICONS.tooth;
              const isLead = i === 0;
              return (
                <article
                  key={service.title}
                  className={`group relative flex flex-col overflow-hidden rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                    isLead
                      ? "border-ink bg-ink text-white lg:row-span-1"
                      : "border-line bg-surface-2"
                  }`}
                >
                  <span
                    className={`font-display absolute right-6 top-4 text-6xl font-semibold ${
                      isLead ? "text-white/10" : "text-ink/5"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                      isLead ? "bg-white/10" : "bg-white"
                    }`}
                  >
                    <Icon
                      className={`h-7 w-7 ${
                        isLead ? "text-amber" : "text-brand"
                      }`}
                    />
                  </div>

                  <h3
                    className={`font-display mt-6 text-2xl font-semibold ${
                      isLead ? "text-white" : "text-ink"
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`mt-3 flex-1 text-[15px] leading-7 ${
                      isLead ? "text-white/70" : "text-muted"
                    }`}
                  >
                    {service.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between">
                    {service.startingPrice ? (
                      <span
                        className={`text-sm font-medium ${
                          isLead ? "text-amber" : "text-brand"
                        }`}
                      >
                        From {service.startingPrice}
                      </span>
                    ) : (
                      <span />
                    )}
                    <Link
                      href="/contact"
                      className={`inline-flex items-center gap-1 text-sm font-medium transition-all group-hover:gap-2 ${
                        isLead ? "text-white" : "text-ink"
                      }`}
                    >
                      Book now <span aria-hidden>→</span>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────────── FIND BY CONCERN ───────────── */}
      <section className="border-y border-line bg-surface-2 py-16 md:py-20">
        <div className="container-page">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-medium text-brand">Not sure?</p>
              <h2 className="font-display mt-2 text-3xl font-semibold text-ink">
                Start with how you feel
              </h2>
            </div>
            <p className="max-w-md text-sm text-muted">
              Pick the closest concern and we'll guide you to the right
              treatment.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {commonConcerns.map((c) => {
              const Icon = ICONS[c.icon] ?? ICONS.tooth;
              return (
                <Link
                  key={c.label}
                  href="/contact"
                  className="group flex items-center gap-3 rounded-2xl border border-line bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand hover:shadow-md"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface-2 transition-colors group-hover:bg-brand">
                    <Icon className="h-5 w-5 text-brand transition-colors group-hover:text-white" />
                  </span>
                  <span className="text-sm font-medium text-ink">
                    {c.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────────── FULL CATALOG ───────────── */}
      <section id="catalog" className="bg-white py-16 md:py-24">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-brand">Full catalog</p>
            <h2 className="font-display mt-2 text-3xl font-semibold text-ink md:text-4xl">
              Every service we offer
            </h2>
          </div>

          {/* Category quick-jump pills */}
          {categories.length > 1 && (
            <nav
              aria-label="Service categories"
              className="mt-8 flex flex-wrap gap-2"
            >
              {categories.map((cat) => (
                <a
                  key={cat}
                  href={`#${slugify(cat)}`}
                  className="rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-ink transition hover:border-brand hover:bg-brand hover:text-white"
                >
                  {cat}
                </a>
              ))}
            </nav>
          )}

          <div className="mt-12 space-y-16">
            {Object.entries(grouped).map(([category, items]) => (
              <div key={category} id={slugify(category)} className="scroll-mt-28">
                <div className="mb-6 flex items-center gap-4">
                  <h3 className="font-display text-2xl font-semibold text-ink">
                    {category}
                  </h3>
                  <span className="h-px flex-1 bg-line" />
                  <span className="rounded-full bg-surface-2 px-3 py-1 text-xs text-muted">
                    {items.length} {items.length === 1 ? "service" : "services"}
                  </span>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((service) => {
                    const Icon = ICONS[service.icon] ?? ICONS.tooth;
                    return (
                      <article
                        key={service.title}
                        className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg"
                      >
                        <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-amber transition-transform duration-300 group-hover:scale-x-100" />

                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface-2 transition-colors duration-300 group-hover:bg-brand">
                          <Icon className="h-6 w-6 text-brand transition-colors duration-300 group-hover:text-white" />
                        </div>

                        <h4 className="font-display mt-5 text-xl font-semibold text-ink">
                          {service.title}
                        </h4>
                        <p className="mt-2.5 flex-1 text-[15px] leading-6 text-muted">
                          {service.description}
                        </p>

                        <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
                          {service.startingPrice ? (
                            <span className="text-sm font-medium text-brand">
                              From {service.startingPrice}
                            </span>
                          ) : (
                            <span className="text-xs text-muted">
                              Ask for a quote
                            </span>
                          )}
                          <Link
                            href="/contact"
                            className="inline-flex items-center gap-1 text-sm font-medium text-ink transition-all group-hover:gap-2 group-hover:text-brand"
                          >
                            Enquire <span aria-hidden>→</span>
                          </Link>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── WHY CHOOSE US ───────────── */}
      <section className="bg-ink py-16 text-white md:py-24">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-amber">Why choose us</p>
            <h2 className="font-display mt-2 text-3xl font-semibold md:text-4xl">
              Care you can feel confident about
            </h2>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((item) => {
              const Icon = ICONS[item.icon] ?? ICONS.tooth;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10">
                    <Icon className="h-5 w-5 text-amber" />
                  </div>
                  <h3 className="font-display mt-5 text-lg font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-white/70">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────────── HOW IT WORKS ───────────── */}
      <section className="bg-white py-16 md:py-24">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium text-brand">How it works</p>
            <h2 className="font-display mt-2 text-3xl font-semibold text-ink md:text-4xl">
              Your visit, in three simple steps
            </h2>
          </div>

          <ol className="relative mt-12 grid gap-8 md:grid-cols-3">
            {/* connecting line (desktop) */}
            <span className="absolute left-[16%] right-[16%] top-7 hidden h-px bg-line md:block" />
            {visitSteps.map((item) => (
              <li key={item.step} className="relative text-center">
                <span className="font-display relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand text-lg font-semibold text-white shadow-lg ring-8 ring-white">
                  {item.step}
                </span>
                <h3 className="font-display mt-5 text-xl font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-muted">
                  {item.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ───────────── FAQ ───────────── */}
      <section className="border-t border-line bg-surface-2 py-16 md:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="text-sm font-medium text-brand">FAQ</p>
            <h2 className="font-display mt-2 text-3xl font-semibold text-ink md:text-4xl">
              Questions patients often ask
            </h2>
            <p className="mt-3 text-muted">
              Can't find your answer? Call or WhatsApp us — we're happy to help.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-full bg-brand px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              Contact us
            </Link>
          </div>

          <div className="space-y-3">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl border border-line bg-white p-5 open:shadow-md"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-medium text-ink [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-surface-2 text-brand transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-6 text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}