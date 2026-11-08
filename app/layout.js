
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { siteConfig } from "@/lib/siteConfig";

// Google Fonts
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

// Official Website URL
export const siteUrl = "https://www.drmundesdentalworld.com";

// Hospital Logo Path
const hospitalLogo = "/images/Logo-img.png";

// Website SEO Metadata
export const metadata = {
  metadataBase: new URL(siteUrl),

  // Hospital Logo for Google Search and Browser Tab
  icons: {
    icon: [
      {
        url: hospitalLogo,
        type: "image/png",
      },
    ],
    shortcut: hospitalLogo,
    apple: hospitalLogo,
  },

  // Website Title
  title: {
    default: `${siteConfig.clinicName} | Dentist in ${siteConfig.city}`,
    template: `%s | ${siteConfig.clinicName}`,
  },

  // Website Description
  description: `${siteConfig.tagline}. Book an appointment for check-ups, root canal, braces, implants, and cosmetic dentistry in ${siteConfig.city}.`,

  // SEO Keywords
  keywords: [
    "dentist in Latur",
    "dental clinic Latur",
    "root canal Latur",
    "braces Latur",
    "dental implants Latur",
    siteConfig.clinicName,
  ],

  // Open Graph Metadata
  openGraph: {
    title: `${siteConfig.clinicName} | Dentist in ${siteConfig.city}`,
    description: siteConfig.tagline,
    url: siteUrl,
    siteName: siteConfig.clinicName,
    images: [
      {
        url: "/images/og-cover.jpeg",
        width: 1200,
        height: 630,
        alt: siteConfig.clinicName,
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // Twitter Metadata
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.clinicName} | Dentist in ${siteConfig.city}`,
    description: siteConfig.tagline,
  },

  // Search Engine Crawling
  robots: {
    index: true,
    follow: true,
  },
};

// Root Layout
export default function RootLayout({ children }) {
  // Structured Data for Google
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Dentist",

    name: siteConfig.clinicName,

    image: `${siteUrl}/images/clinic-exterior.jpg`,

    logo: `${siteUrl}${hospitalLogo}`,

    telephone: siteConfig.phone.tel,

    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.line1,
      addressLocality: "Latur",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },

    openingHours: siteConfig.hours.map(
      (h) => `${h.day}: ${h.time}`
    ),

    url: siteUrl,
  };

  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${manrope.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />

        <Navbar />

        <main>{children}</main>

        <Footer />

        <WhatsAppButton />
      </body>
    </html>
  );
}
