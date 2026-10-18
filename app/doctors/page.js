import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import SitePhoto from "@/components/SitePhoto";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Doctors",
  description: `Meet the dental team at ${siteConfig.clinicName} in ${siteConfig.city}.`,
};

const slugify = (text) =>
  String(text)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const promises = [
  {
    title: "Clear explanations",
    text: "We show you what we see and explain every option before any treatment begins.",
  },
  {
    title: "Comfort comes first",
    text: "Gentle technique, patient pacing, and a pause whenever you need one.",
  },
  {
    title: "Honest treatment plans",
    text: "You get the timeline and the cost up front, and only the care you actually need.",
  },
];

/* Scoped styles: one orchestrated hero entrance, one photo reveal per doctor.
   Everything is disabled for people who prefer reduced motion. */
const css = `
@keyframes dw-rise {
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes dw-draw {
  from { transform: scaleX(0); }
  to   { transform: scaleX(1); }
}

@keyframes dw-float {
  0%, 100% { transform: translate3d(0, 0, 0); }
  50%      { transform: translate3d(0, -14px, 0); }
}

@keyframes dw-unveil {
  from { clip-path: inset(0 0 100% 0 round 1.5rem); transform: scale(1.06); }
  to   { clip-path: inset(0 0 0 0 round 1.5rem);    transform: scale(1); }
}

@keyframes dw-frame {
  from { opacity: 0; transform: translate(-22px, 22px); }
  to   { opacity: 1; transform: translate(0, 0); }
}

@keyframes dw-fade {
  from { opacity: 0; transform: translateY(18px); }
  to   { opacity: 1; transform: translateY(0); }
}

.dw-hero-item { animation: dw-rise .9s cubic-bezier(.2,.7,.2,1) both; }
.dw-hero-line { transform-origin: left; animation: dw-draw 1s .55s cubic-bezier(.2,.7,.2,1) both; }
.dw-blob      { animation: dw-float 9s ease-in-out infinite; }

.dw-photo  { animation: dw-unveil 1.1s .15s cubic-bezier(.2,.7,.2,1) both; }
.dw-frame  { animation: dw-frame .9s .45s cubic-bezier(.2,.7,.2,1) both; }
.dw-text   { animation: dw-fade .9s .3s cubic-bezier(.2,.7,.2,1) both; }
.dw-promise{ animation: dw-fade .8s cubic-bezier(.2,.7,.2,1) both; }

/* Modern browsers: tie the reveals to scrolling. */
@supports (animation-timeline: view()) {
  .dw-photo   { animation: dw-unveil linear both; animation-timeline: view(); animation-range: entry 5% entry 65%; }
  .dw-frame   { animation: dw-frame linear both;  animation-timeline: view(); animation-range: entry 20% entry 80%; }
  .dw-text    { animation: dw-fade linear both;   animation-timeline: view(); animation-range: entry 10% entry 50%; }
  .dw-promise { animation: dw-fade linear both;   animation-timeline: view(); animation-range: entry 0% entry 45%; }
}

.dw-photo-wrap img { transition: transform 1.2s cubic-bezier(.2,.7,.2,1); }
.dw-photo-wrap:hover img { transform: scale(1.04); }

@media (prefers-reduced-motion: reduce) {
  .dw-hero-item, .dw-hero-line, .dw-blob, .dw-photo, .dw-frame, .dw-text, .dw-promise {
    animation: none !important;
    clip-path: none !important;
    transform: none !important;
    opacity: 1 !important;
  }

  .dw-photo-wrap img { transition: none; }
  .dw-photo-wrap:hover img { transform: none; }
}
`;

export default function DoctorsPage() {
  const doctors = siteConfig.doctors;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />

      {/* ───────── Hero ───────── */}
      <section className="relative overflow-hidden border-b border-line bg-[#eaf0ec]">
        <div
          aria-hidden="true"
          className="dw-blob pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brand/10 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="dw-blob pointer-events-none absolute -bottom-32 left-1/3 h-80 w-80 rounded-full bg-brand/10 blur-3xl"
          style={{ animationDelay: "-4s" }}
        />

        <div className="container-page relative py-16 md:py-24">
          <p
            className="dw-hero-item text-sm font-medium text-brand"
            style={{ animationDelay: "0.05s" }}
          >
            Our team
          </p>

          <h1
            className="dw-hero-item font-display mt-3 max-w-3xl text-4xl font-semibold leading-[1.08] text-ink md:text-6xl"
            style={{ animationDelay: "0.15s" }}
          >
            The people behind your smile
          </h1>

          <span className="dw-hero-line mt-6 block h-[3px] w-24 rounded-full bg-brand" />

          <p
            className="dw-hero-item mt-6 max-w-xl text-base leading-7 text-muted md:text-lg"
            style={{ animationDelay: "0.35s" }}
          >
            Qualified, approachable, and focused on getting your treatment right
            the first time.
          </p>

          {doctors.length > 1 && (
            <nav
              aria-label="Jump to a doctor"
              className="dw-hero-item mt-8 flex flex-wrap gap-3"
              style={{ animationDelay: "0.5s" }}
            >
              {doctors.map((doctor) => (
                <a
                  key={doctor.name}
                  href={`#${slugify(doctor.name)}`}
                  className="rounded-full border border-line bg-white px-5 py-2.5 text-sm font-medium text-ink transition duration-300 hover:-translate-y-0.5 hover:border-brand hover:bg-brand hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                >
                  {doctor.name}
                </a>
              ))}
            </nav>
          )}
        </div>
      </section>

      {/* ───────── Doctor profiles (alternating layout) ───────── */}
      <section className="py-16 md:py-24">
        <div className="container-page space-y-20 md:space-y-32">
          {doctors.map((doctor, index) => {
            const flip = index % 2 === 1;

            return (
              <article
                key={doctor.name}
                id={slugify(doctor.name)}
                className="grid scroll-mt-28 items-center gap-10 md:grid-cols-12 md:gap-14"
              >
                {/* Photo */}
                <div
                  className={`relative md:col-span-5 ${
                    flip ? "md:order-2 md:col-start-8" : ""
                  }`}
                >
                  <div
                    aria-hidden="true"
                    className={`dw-frame absolute inset-0 rounded-3xl border-2 border-brand/30 ${
                      flip
                        ? "translate-x-4 translate-y-4"
                        : "-translate-x-4 translate-y-4"
                    }`}
                  />

                  <div className="dw-photo dw-photo-wrap relative h-[380px] overflow-hidden rounded-3xl border border-line bg-white md:h-[500px]">
                    <SitePhoto
                      src={doctor.photo}
                      alt={doctor.name}
                      className="h-full w-full"
                    />
                  </div>
                </div>

                {/* Details */}
                <div
                  className={`dw-text md:col-span-7 ${
                    flip
                      ? "md:order-1 md:col-start-1 md:row-start-1 md:pr-6"
                      : "md:pl-6"
                  }`}
                >
                  <span className="inline-flex items-center rounded-full bg-[#eaf0ec] px-4 py-1.5 text-sm font-medium text-brand">
                    {doctor.role}
                  </span>

                  <h2 className="font-display mt-5 text-3xl font-semibold leading-tight text-ink md:text-5xl">
                    {doctor.name}
                  </h2>

                  <p className="mt-2 text-base font-medium text-brand">
                    {doctor.credentials}
                  </p>

                  <p className="mt-6 max-w-xl text-[15px] leading-7 text-muted md:text-base md:leading-8">
                    {doctor.bio}
                  </p>

                  {/* ───────── Added Doctor Content ───────── */}
                  <div className="mt-7 max-w-xl space-y-5">
                    <div>
                      <h3 className="font-display text-lg font-semibold text-ink">
                        About the Doctor
                      </h3>

                      <p className="mt-2 text-[15px] leading-7 text-muted">
                        Dedicated to providing thoughtful, patient-focused
                        dental care, with an emphasis on understanding each
                        patient&apos;s needs and creating a comfortable treatment
                        experience from consultation to follow-up.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-display text-lg font-semibold text-ink">
                        Areas of Focus
                      </h3>

                      <p className="mt-2 text-[15px] leading-7 text-muted">
                        Focused on preventive dental care, diagnosis, treatment
                        planning, and helping patients maintain healthy teeth
                        and gums through personalised and practical dental
                        solutions.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-display text-lg font-semibold text-ink">
                        Patient Care Approach
                      </h3>

                      <p className="mt-2 text-[15px] leading-7 text-muted">
                        Every patient is given clear information about their
                        dental condition and available treatment options. The
                        goal is to make every visit comfortable, transparent,
                        and focused on long-term oral health.
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <Link
                      href="/contact"
                      className="inline-flex items-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                    >
                      Book a visit
                    </Link>

                    <Link
                      href="/services"
                      className="text-sm font-medium text-ink underline decoration-line decoration-2 underline-offset-8 transition hover:decoration-brand"
                    >
                      See treatments
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="container-page mt-16">
          <p className="text-xs text-muted">
            Editing note: confirm each doctor&apos;s full name, degree(s), and
            registration details in <code>lib/siteConfig.js</code> before
            publishing.
          </p>
        </div>
      </section>

      {/* ───────── How we care ───────── */}
      <section className="border-y border-line bg-[#eaf0ec] py-16 md:py-20">
        <div className="container-page">
          <h2 className="font-display max-w-md text-3xl font-semibold leading-tight text-ink md:text-4xl">
            What you can expect from every doctor here
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {promises.map((item, i) => (
              <div
                key={item.title}
                className="dw-promise rounded-3xl border border-line bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-brand"
                style={{ animationDelay: `${i * 0.12}s` }}
              >
                <h3 className="font-display text-xl font-semibold text-ink">
                  {item.title}
                </h3>

                <p className="mt-3 text-[15px] leading-7 text-muted">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}