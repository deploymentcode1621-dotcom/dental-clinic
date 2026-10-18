import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { siteConfig } from "@/lib/siteConfig";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// EDIT_ME — replace with your live domain once deployed, used for canonical
// URLs, sitemap.xml and Open Graph tags.
export const siteUrl = "https://www.mundedentalworld.example";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteConfig.clinicName} | Dentist in ${siteConfig.city}`,
    template: `%s | ${siteConfig.clinicName}`,
  },
  description: `${siteConfig.tagline}. Book an appointment for check-ups, root canal, braces, implants, and cosmetic dentistry in ${siteConfig.city}.`,
  keywords: [
    "dentist in Latur",
    "dental clinic Latur",
    "root canal Latur",
    "braces Latur",
    "dental implants Latur",
    siteConfig.clinicName,
  ],
  openGraph: {
    title: `${siteConfig.clinicName} | Dentist in ${siteConfig.city}`,
    description: siteConfig.tagline,
    url: siteUrl,
    siteName: siteConfig.clinicName,
    images: [{ url: "/images/og-cover.jpeg", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.clinicName} | Dentist in ${siteConfig.city}`,
    description: siteConfig.tagline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: siteConfig.clinicName,
    image: `${siteUrl}/images/clinic-exterior.jpg`,
    telephone: siteConfig.phone.tel,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.line1,
      addressLocality: "Latur",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    openingHours: siteConfig.hours.map((h) => `${h.day}: ${h.time}`),
    url: siteUrl,
  };

  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${manrope.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
