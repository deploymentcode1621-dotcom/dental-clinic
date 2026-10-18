import { siteConfig } from "@/lib/siteConfig";
import { ICONS } from "@/components/Icons";
import PageHero from "@/components/PageHero";
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
  { label: "Same-day emergency slots", value: "Daily" },
];

// TODO: this is a starter list — swap the labels for concerns your
// patients actually ask about, and point `icon` at real keys from
// components/Icons.jsx if you want them to render precisely (unknown
// keys safely fall back to the tooth icon, so nothing breaks either way).
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

const visitSteps = [
  {
    step: "1",
    title: "Tell us what's wrong",
    text: "Call, WhatsApp, or use the contact form to describe your concern.",
  },
  {
    step: "2",
    title: "We plan the visit",
    text: "We confirm a slot and let you know what to expect and roughly how long it will take.",
  },
  {
    step: "3",
    title: "Treatment & follow-up",
    text: "We walk you through the treatment as it happens and schedule any follow-up needed.",
  },
];

export default function ServicesPage() {
  const services = siteConfig.services;

  // Optional `service.featured` flag lets you hand-pick the spotlight
  // treatments; falls back to the first three if none are flagged.
  const featured = (
    services.filter((s) => s.featured).length
      ? services.filter((s) => s.featured)
      : services
  ).slice(0, 3);

  // Optional `service.category` groups the full catalog into sections.
  // Anything without one lands under "General Care".
  const grouped = services.reduce((acc, s) => {
    const cat = s.category || "General Care";
    acc[cat] = acc[cat] || [];
    acc[cat].push(s);
    return acc;
  }, {});

  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Treatment for every part of your smile"
        description="From routine cleaning to complete smile makeovers, each treatment plan is built around your comfort, timeline, and budget."
      />

      {/* Quick stats strip */}
      <section className="border-b border-line bg-white">
        <div className="container-page grid gap-8 py-10 sm:grid-cols-3">
          {quickStats.map((s) => (
            <div key={s.label} className="flex flex-col">
              <span className="font-display text-3xl font-semibold text-ink">
                {s.value}
              </span>
              <span className="mt-1 text-xs text-muted">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured / signature treatments — bento layout */}
      <section className="py-16 md:py-20">
        <div className="container-page">
          <p className="text-sm font-medium text-brand">Most requested</p>
          <h2 className="font-display mt-2 text-3xl font-semibold text-ink">
            Signature treatments
          </h2>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {featured.map((service, i) => {
              const Icon = ICONS[service.icon] ?? ICONS.tooth;
              const isLead = i === 0;
              return (
                <div
                  key={service.title}
                  className={`group relative overflow-hidden rounded-3xl border border-line p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                    isLead
                      ? "bg-ink text-white lg:col-span-2 lg:row-span-1"
                      : "bg-white"
                  }`}
                >
                  <span className="absolute right-0 top-0 rounded-bl-2xl bg-amber px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-ink">
                    Popular
                  </span>
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full ${
                      isLead ? "bg-white/10" : "bg-surface-2"
                    }`}
                  >
                    <Icon
                      className={`h-6 w-6 ${
                        isLead ? "text-amber" : "text-brand"
                      }`}
                    />
                  </div>
                  <h3
                    className={`font-display mt-5 text-2xl font-semibold ${
                      isLead ? "text-white" : "text-ink"
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`mt-2.5 max-w-md text-[15px] leading-6 ${
                      isLead ? "text-white/70" : "text-muted"
                    }`}
                  >
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Common concerns — horizontal scroll-snap slider (no JS needed) */}
      <section className="border-y border-line bg-surface-2 py-14">
        <div className="container-page">
          <h2 className="font-display text-2xl font-semibold text-ink">
            Not sure what you need? Start with how you feel.
          </h2>
          <div
            className="mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {commonConcerns.map((c) => {
              const Icon = ICONS[c.icon] ?? ICONS.tooth;
              return (
                <div
                  key={c.label}
                  className="flex w-48 shrink-0 snap-start flex-col gap-3 rounded-2xl border border-line bg-white p-5"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-2">
                    <Icon className="h-5 w-5 text-brand" />
                  </div>
                  <span className="text-sm font-medium text-ink">
                    {c.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Full catalog, grouped by category */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-page space-y-14">
          <div>
            <p className="text-sm font-medium text-brand">Full catalog</p>
            <h2 className="font-display mt-2 text-3xl font-semibold text-ink">
              Every service we offer
            </h2>
          </div>

          {Object.entries(grouped).map(([category, items]) => (
            <div key={category} className="relative">
              <div className="mb-5 flex items-end justify-between">
                <h3 className="text-lg font-semibold text-ink">{category}</h3>
                <span className="hidden text-xs text-muted sm:block">
                  Scroll for more →
                </span>
              </div>

              {/* Edge fades so the slider reads as scrollable, not cut off */}
              <div className="pointer-events-none absolute inset-y-0 left-0 top-9 z-10 hidden w-10 bg-gradient-to-r from-white to-transparent sm:block" />
              <div className="pointer-events-none absolute inset-y-0 right-0 top-9 z-10 hidden w-10 bg-gradient-to-l from-white to-transparent sm:block" />

              <div
                className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 pt-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >
                {items.map((service) => {
                  const Icon = ICONS[service.icon] ?? ICONS.tooth;
                  return (
                    <div
                      key={service.title}
                      className="group relative w-72 shrink-0 snap-start overflow-hidden rounded-2xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:w-80"
                    >
                      <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-amber transition-transform duration-300 group-hover:scale-x-100" />
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-surface-2">
                        <Icon className="h-6 w-6 text-brand" />
                      </div>
                      <h4 className="font-display mt-5 text-xl font-semibold text-ink">
                        {service.title}
                      </h4>
                      <p className="mt-2.5 text-[15px] leading-6 text-muted">
                        {service.description}
                      </p>
                      {service.startingPrice && (
                        <p className="mt-4 text-sm font-medium text-brand">
                          Starting from {service.startingPrice}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-line bg-surface-2 py-16 md:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-medium text-brand">How it works</p>
            <h2 className="font-display mt-2 text-3xl font-semibold text-ink">
              Your visit, in three steps
            </h2>
          </div>
          <ol className="grid gap-6 sm:grid-cols-3">
            {visitSteps.map((item, i) => (
              <li
                key={item.step}
                className="relative rounded-2xl bg-white p-6"
              >
                {i < visitSteps.length - 1 && (
                  <span className="absolute -right-3 top-1/2 hidden h-px w-6 -translate-y-1/2 bg-line sm:block" />
                )}
                <span className="font-display text-2xl font-semibold text-brand">
                  {item.step}
                </span>
                <p className="mt-3 font-medium text-ink">{item.title}</p>
                <p className="mt-1.5 text-sm leading-6 text-muted">
                  {item.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CTASection />
    </>
  );
}