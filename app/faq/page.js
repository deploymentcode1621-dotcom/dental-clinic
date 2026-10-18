import { siteConfig } from "@/lib/siteConfig";
import PageHero from "@/components/PageHero";
import FaqAccordion from "@/components/FaqAccordion";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "FAQ",
  description: `Answers to common questions about visiting ${siteConfig.clinicName} in ${siteConfig.city}.`,
};

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: siteConfig.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero
        eyebrow="FAQ"
        title="Common questions"
        description="Can't find what you're looking for? Send us a message from the contact page."
      />

      <section className="py-16 md:py-20">
        <div className="container-page max-w-2xl">
          <FaqAccordion items={siteConfig.faqs} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
