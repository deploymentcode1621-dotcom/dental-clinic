import { siteConfig } from "@/lib/siteConfig";
import { PhoneIcon, MapPinIcon, ClockIcon, WhatsAppIcon } from "@/components/Icons";
import PageHero from "@/components/PageHero";
import MapEmbed from "@/components/MapEmbed";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact",
  description: `Call, WhatsApp, or visit ${siteConfig.clinicName} in ${siteConfig.city}.`,
};

export default function ContactPage() {
  const waMessage = encodeURIComponent(`Hi ${siteConfig.clinicName}, I'd like to book a dental appointment.`);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's get your visit booked"
        description="Reach out however is easiest — WhatsApp usually gets the fastest reply."
      />

      <section className="py-16 md:py-20">
        <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5">
            <a
              href={`https://wa.me/${siteConfig.phone.whatsapp}?text=${waMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-line bg-white p-5 hover:border-brand/40 transition-colors"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366]">
                <WhatsAppIcon className="h-6 w-6" />
              </span>
              <span>
                <span className="block text-sm font-medium text-ink">Chat on WhatsApp</span>
                <span className="block text-sm text-muted">Fastest way to reach us</span>
              </span>
            </a>

            <a
              href={`tel:${siteConfig.phone.tel}`}
              className="flex items-center gap-4 rounded-2xl border border-line bg-white p-5 hover:border-brand/40 transition-colors"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand/10 text-brand">
                <PhoneIcon className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm font-medium text-ink">{siteConfig.phone.display}</span>
                <span className="block text-sm text-muted">Call the clinic directly</span>
              </span>
            </a>

            <div className="flex items-center gap-4 rounded-2xl border border-line bg-white p-5">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand/10 text-brand">
                <MapPinIcon className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm font-medium text-ink">{siteConfig.address.line1}</span>
                <span className="block text-sm text-muted">{siteConfig.address.line2}</span>
              </span>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-line bg-white p-5">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand/10 text-brand">
                <ClockIcon className="h-5 w-5" />
              </span>
              <span className="text-sm text-muted">
                {siteConfig.hours.map((h) => (
                  <span key={h.day} className="block">
                    <span className="font-medium text-ink">{h.day}:</span> {h.time}
                  </span>
                ))}
              </span>
            </div>
          </div>

          <div className="rounded-3xl border border-line bg-white p-7 md:p-8">
            <h2 className="font-display text-2xl font-semibold text-ink">Send a message</h2>
            <p className="mt-1.5 text-sm text-muted">
              We'll get back to you the same day during clinic hours.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>

        <div className="container-page mt-12">
          <MapEmbed height={420} />
        </div>
      </section>
    </>
  );
}
