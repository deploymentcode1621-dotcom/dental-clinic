import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import SitePhoto from "@/components/SitePhoto";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Doctors",
  description: `Meet the dental team at ${siteConfig.clinicName} in ${siteConfig.city}.`,
};

/* ───────── CHANGE THIS to the file name of the hero image you saved in /public/images ───────── */
const HERO_IMAGE = "/images/doctors-hero.png";

const slugify = (text) =>
  String(text)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

/* ───────── Doctor data (from the clinic poster) ─────────
   Tip: you can move this array into lib/siteConfig.js as `doctors`
   and use `const doctors = siteConfig.doctors;` below instead. */
const doctors = [
  {
    name: "Dr. Abhay S. Munde",
    role: "Endodontist & Aesthetic Dentist",
    credentials: "BDS, MDS",
    speciality: "Single Sitting Root Canal Specialist",
    photo: "/images/doctor1.png",
    bio: "Dr. Abhay S. Munde is an Endodontist and Aesthetic Dentist, known for single sitting root canal treatment. He focuses on saving natural teeth and designing smiles that look natural.",
    about:
      "Dr. Abhay combines advanced endodontic skills with an eye for aesthetics. He believes every patient deserves a calm, pain-free experience and a clear understanding of their treatment.",
    focus: [
      "Single sitting root canal treatment",
      "Endodontics",
      "Aesthetic & smile design",
    ],
    approach:
      "Every treatment begins with a proper diagnosis and a clear explanation, so you know exactly what is being done and why.",
  },
  {
    name: "Dr. Balaji S. Munde",
    role: "Prosthodontist & Implantologist",
    credentials: "BDS, MDS",
    speciality: "Artificial teeth, crowns & dental implants",
    photo: "/images/doctor3.jpeg",
    bio: "Dr. Balaji S. Munde is a Prosthodontist and Implantologist, specialising in replacing missing teeth with comfortable, natural-looking solutions.",
    about:
      "Dr. Balaji focuses on restoring function and appearance for patients with missing or damaged teeth, using careful planning and precise technique.",
    focus: [
      "Dental implants",
      "Prosthodontics (crowns, bridges & dentures)",
      "Full mouth rehabilitation",
    ],
    approach:
      "Treatment plans are tailored to each patient, with honest guidance on options, timeline and cost before starting.",
  },
  {
    name: "Dr. Mohini A. Munde",
    role: "Dental Surgeon",
    credentials: "BDS",
    speciality: "General & preventive dentistry",
    photo: "/images/doctor2.jpeg",
    bio: "Dr. Mohini A. Munde is a Dental Surgeon who provides gentle, patient-friendly general dental care for the whole family.",
    about:
      "Dr. Mohini is dedicated to thoughtful, patient-focused care, with an emphasis on understanding each patient's needs and keeping every visit comfortable.",
    focus: [
      "General dental care",
      "Preventive dentistry & check-ups",
      "Fillings & scaling",
    ],
    approach:
      "Clear information, gentle technique and a pause whenever you need one, from consultation through follow-up.",
  },
  {
    name: "Dr. Archana B. Munde",
    role: "Dental Surgeon",
    credentials: "BDS",
    speciality: "General & preventive dentistry",
    photo: "/images/doctor4.jpeg",
    bio: "Dr. Archana B. Munde is a Dental Surgeon who is committed to comfortable, honest and practical dental care for patients of all ages.",
    about:
      "Dr. Archana focuses on helping patients maintain healthy teeth and gums through personalised and practical dental solutions.",
    focus: [
      "General dental care",
      "Gum care & oral hygiene",
      "Patient education",
    ],
    approach:
      "Every patient receives clear information about their dental condition and the available options, so decisions are always informed.",
  },
];

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

/* ───────── Small inline icons for the hero highlights ───────── */
const iconProps = {
  width: 28,
  height: 28,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
};

function SpecialistIcon() {
  return (
    <svg {...iconProps}>
      <circle cx="12" cy="7" r="3.5" />
      <path d="M5 21v-3a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v3" />
      <path d="M9.5 14.5v2.5a2.5 2.5 0 0 0 5 0v-2.5" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg {...iconProps}>
      <path d="M12 20.5s-8-4.9-8-11A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 8 2.5c0 6.1-8 11-8 11z" />
      <polyline points="5.5 12 9 12 10.5 9 13 15 14.5 12 18.5 12" />
    </svg>
  );
}

function ToothIcon() {
  return (
    <svg {...iconProps}>
      <path d="M7 4c-2.5 0-4 2-4 4.5 0 2 .8 3.5 1.5 5.5.8 2.3 1 5 2 6 .9.9 1.8-.3 2.3-2.3.4-1.7.7-3 1.7-3s1.3 1.3 1.7 3c.5 2 1.4 3.2 2.3 2.3 1-1 1.2-3.7 2-6 .7-2 1.5-3.5 1.5-5.5C21 6 19.5 4 17 4c-1.8 0-2.7.9-5 .9S8.8 4 7 4z" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3 20v-1.5A4.5 4.5 0 0 1 7.5 14h3A4.5 4.5 0 0 1 15 18.5V20" />
      <path d="M16 4.6a3.2 3.2 0 0 1 0 6.2" />
      <path d="M18 14.3a4.5 4.5 0 0 1 3 4.2V20" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
      <path d="M3.5 10h17M8 3v4M16 3v4" />
      <path d="M8 14h.01M12 14h.01M16 14h.01M8 17h.01M12 17h.01" />
    </svg>
  );
}

function SparkleTooth() {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 28 28"
      fill="none"
      stroke="#c99a3b"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 7C4.5 7 3 9 3 11.5c0 2 .8 3.5 1.5 5.5.8 2.3 1 5 2 6 .9.9 1.8-.3 2.3-2.3.4-1.7.7-3 1.7-3s1.3 1.3 1.7 3c.5 2 1.4 3.2 2.3 2.3 1-1 1.2-3.7 2-6 .7-2 1.5-3.5 1.5-5.5C21 9 19.5 7 17 7c-1.8 0-2.7.9-5 .9S8.8 7 7 7z" />
      <path d="M22 1.5v5M19.5 4h5" />
    </svg>
  );
}

const highlights = [
  { label: "Experienced Specialists", Icon: SpecialistIcon },
  { label: "Patient-First Care", Icon: HeartIcon },
  { label: "Modern Dental Treatment", Icon: ToothIcon },
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

@keyframes dw-bob {
  0%, 100% { transform: translate3d(0, 0, 0); }
  50%      { transform: translate3d(0, -8px, 0); }
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

@keyframes dw-pop {
  from { opacity: 0; transform: translateY(24px) scale(.94); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
}

.dw-hero-item { animation: dw-rise .9s cubic-bezier(.2,.7,.2,1) both; }
.dw-hero-line { transform-origin: left; animation: dw-draw 1s .55s cubic-bezier(.2,.7,.2,1) both; }
.dw-blob      { animation: dw-float 9s ease-in-out infinite; }
.dw-hero-img  { animation: dw-unveil 1.2s .25s cubic-bezier(.2,.7,.2,1) both; }
.dw-hero-card { animation: dw-pop .9s 1s cubic-bezier(.2,.7,.2,1) both; }
.dw-hero-card-inner { animation: dw-bob 6s 2s ease-in-out infinite; }

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
  .dw-hero-item, .dw-hero-line, .dw-blob, .dw-hero-img, .dw-hero-card, .dw-hero-card-inner,
  .dw-photo, .dw-frame, .dw-text, .dw-promise {
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
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />

      {/* ───────── Hero ───────── */}
      <section className="relative overflow-hidden border-b border-line bg-[#faf9f5]">
        {/* soft green background shapes */}
        <div
          aria-hidden="true"
          className="dw-blob pointer-events-none absolute -right-40 -top-32 h-[560px] w-[560px] rounded-full bg-[#e3ebe5] blur-2xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 -left-32 h-[420px] w-[420px] rounded-full bg-[#eaf0ec] blur-2xl"
        />

        {/* thin gold curve, bottom-left */}
        <svg
          aria-hidden="true"
          viewBox="0 0 200 200"
          className="pointer-events-none absolute -bottom-4 -left-4 hidden h-48 w-48 md:block"
          fill="none"
        >
          <path
            d="M0 70 C 60 90, 110 140, 130 200"
            stroke="#c99a3b"
            strokeWidth="1.2"
            opacity="0.6"
          />
        </svg>

        <div className="container-page relative grid items-center gap-12 py-8 md:py-10 lg:grid-cols-12 lg:gap-8">
          {/* Left: copy */}
          <div className="lg:col-span-5">
            <span
              className="dw-hero-item inline-flex items-center rounded-full bg-[#eaf0ec] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand"
              style={{ animationDelay: "0.05s" }}
            >
              Meet our dental team
            </span>

            <h1
              className="dw-hero-item font-display mt-4 text-4xl font-semibold leading-[1.05] text-brand md:text-5xl"
              style={{ animationDelay: "0.15s" }}
            >
              Expert hands.
              <br />
              Caring hearts.
            </h1>

            <span
              className="dw-hero-line mt-4 block h-[3px] w-20 rounded-full"
              style={{
                background: "linear-gradient(90deg, #c99a3b 0%, #c99a3b 50%, #0f4a3c 50%, #0f4a3c 100%)",
              }}
            />

            <p
              className="dw-hero-item mt-4 max-w-md text-sm leading-6 text-muted md:text-base md:leading-7"
              style={{ animationDelay: "0.35s" }}
            >
              Meet our experienced dental team, dedicated to comfortable care,
              clear guidance, and confident smiles.
            </p>

            {/* highlights */}
            <ul
              className="dw-hero-item mt-5 grid max-w-md grid-cols-3 divide-x divide-line"
              style={{ animationDelay: "0.5s" }}
            >
              {highlights.map(({ label, Icon }) => (
                <li
                  key={label}
                  className="flex flex-col items-center gap-1.5 px-2 text-center text-xs font-medium leading-4 text-ink first:pl-0 last:pr-0"
                >
                  <span className="text-brand">
                    <Icon />
                  </span>
                  {label}
                </li>
              ))}
            </ul>

            {/* buttons */}
            <div
              className="dw-hero-item mt-6 flex flex-wrap items-center gap-3"
              style={{ animationDelay: "0.65s" }}
            >
              <a
                href="#doctors-list"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                <UsersIcon />
                Meet Our Doctors
                <span aria-hidden="true">→</span>
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-brand bg-transparent px-5 py-2.5 text-sm font-semibold text-brand transition duration-300 hover:-translate-y-0.5 hover:bg-brand hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                <CalendarIcon />
                Book an Appointment
              </Link>
            </div>
          </div>

          {/* Right: team photo + floating review card */}
          <div className="relative lg:col-span-7 lg:pl-8">
            <div className="dw-hero-img relative h-[230px] overflow-hidden rounded-3xl border-2 border-brand bg-white shadow-xl sm:h-[290px] lg:h-[330px]">
              <SitePhoto
                src="/images/team.png"
                alt="The doctors of Dr. Munde's Dental World"
                className="h-full w-full"
              />
            </div>

            <div className="dw-hero-card absolute -bottom-4 right-2 sm:-right-2 lg:-right-4">
              <div className="dw-hero-card-inner flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl ring-1 ring-black/5">
                <SparkleTooth />
                <div>
                  <p className="text-sm font-medium leading-5 text-ink">
                    Your smile,
                    <br />
                    in expert hands
                  </p>
                  <p
                    className="mt-1 text-sm tracking-[0.15em] text-[#c99a3b]"
                    aria-label="Rated 5 out of 5 stars"
                  >
                    ★★★★★
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Doctor profiles (alternating layout) ───────── */}
      <section id="doctors-list" className="scroll-mt-20 py-16 md:py-24">
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

                  <p className="mt-1 text-sm text-muted">
                    {doctor.speciality}
                  </p>

                  <p className="mt-6 max-w-xl text-[15px] leading-7 text-muted md:text-base md:leading-8">
                    {doctor.bio}
                  </p>

                  <div className="mt-7 max-w-xl space-y-5">
                    <div>
                      <h3 className="font-display text-lg font-semibold text-ink">
                        About the Doctor
                      </h3>
                      <p className="mt-2 text-[15px] leading-7 text-muted">
                        {doctor.about}
                      </p>
                    </div>

                    <div>
                      <h3 className="font-display text-lg font-semibold text-ink">
                        Areas of Focus
                      </h3>
                      <ul className="mt-3 flex flex-wrap gap-2">
                        {doctor.focus.map((item) => (
                          <li
                            key={item}
                            className="rounded-full border border-line bg-white px-4 py-1.5 text-sm text-ink"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-display text-lg font-semibold text-ink">
                        Patient Care Approach
                      </h3>
                      <p className="mt-2 text-[15px] leading-7 text-muted">
                        {doctor.approach}
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

                    <a
                      href="tel:+918055599550"
                      className="inline-flex items-center rounded-full border border-brand px-6 py-3 text-sm font-semibold text-brand transition duration-300 hover:bg-brand hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                    >
                      Call 80555 99550
                    </a>

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
            Clinic: Dr. Munde&apos;s Dental World, Shivkamal Silver Arch, Nandi
            Stop, Ausa Road, Latur.
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