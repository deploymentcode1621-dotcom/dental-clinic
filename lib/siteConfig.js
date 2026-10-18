// ============================================================================
// SITE CONFIGURATION
// ----------------------------------------------------------------------------
// Every value tagged "EDIT_ME" is a placeholder because it could not be
// verified from a public, scrapeable source. Replace these with the clinic's
// real details — the rest of the site pulls from this single file, so you
// only need to edit it here.
// ============================================================================

export const siteConfig = {
  clinicName: "Dr. Munde's Dental World",
  tagline: "Gentle, modern dental care in the heart of Latur",
  city: "Latur, Maharashtra",

  // EDIT_ME — confirm the exact street address as shown on your Google
  // Business Profile / signage.
  address: {
    line1: "Narayan Nagar",
    line2: "Latur, Maharashtra 413512",
    full: "Narayan Nagar, Latur, Maharashtra 413512, India",
  },

  // EDIT_ME — replace with the clinic's real 10-digit mobile number.
  // Keep the +91 country code so the WhatsApp and tel: links work correctly.
  phone: {
    display: "+91 XXXXX XXXXX",
    tel: "+91 80555 99550",       // used for "Call now" links — digits only after +91
    whatsapp: "91 80555 99550",   // used for wa.me links — no + or spaces
  },

  // EDIT_ME
  email: "info@mundedentalworld.example",

  // EDIT_ME — match your actual opening days/hours
  hours: [
    { day: "Monday – Saturday", time: "10:00 AM – 2:00 PM & 5:00 PM – 9:00 PM" },
    { day: "Sunday", time: "By appointment only" },
  ],

  // EDIT_ME — swap in the real profile links or remove any you don't use
  social: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    google: "https://g.page/",
  },

  // Used to build the embedded Google Map. Once you confirm the exact
  // address/pin, you can also paste a direct Google Maps share link here
  // instead of relying on the text search query.
  mapQuery: "Dr Munde's Dental World, Narayan Nagar, Latur, Maharashtra",

  doctors: [
    {
      name: "Dr. Munde", // EDIT_ME — full first name
      credentials: "BDS", // EDIT_ME — confirm degree(s), e.g. BDS, MDS (Speciality)
      role: "Chief Dental Surgeon",
      bio: "Leads the clinic's day-to-day patient care, focusing on preventive dentistry, restorations, and long-term oral health planning for families across Latur.", // EDIT_ME
      photo: "/images/doctor1.jpeg",
    },
    // EDIT_ME — add additional doctors/associates here, or remove this
    // second entry if the clinic has a single practitioner.
    {
      name: "Associate Dentist",
      credentials: "BDS",
      role: "Consulting Dentist",
      bio: "Supports specialised procedures including orthodontics and cosmetic dentistry, working closely with patients to plan comfortable treatment.",
      photo: "/images/doctor2.jpeg",
    },
  ],

  services: [
    {
      title: "General Check-ups & Cleaning",
      description:
        "Routine oral examinations, scaling, and polishing to catch problems early and keep your smile healthy.",
      icon: "tooth",
    },
    {
      title: "Root Canal Treatment",
      description:
        "Pain-relieving, single or multi-sitting root canal therapy using modern rotary instruments.",
      icon: "shield",
    },
    {
      title: "Cosmetic Dentistry",
      description:
        "Teeth whitening, veneers, and smile makeovers designed around your face and natural bite.",
      icon: "sparkle",
    },
    {
      title: "Braces & Orthodontics",
      description:
        "Metal, ceramic, and clear aligner options for children and adults to straighten teeth comfortably.",
      icon: "align",
    },
    {
      title: "Dental Implants",
      description:
        "Permanent, natural-looking replacements for missing teeth, planned with digital imaging.",
      icon: "implant",
    },
    {
      title: "Pediatric Dentistry",
      description:
        "Gentle, child-friendly care that builds healthy habits and calms first-visit nerves.",
      icon: "kid",
    },
    {
      title: "Extractions & Oral Surgery",
      description:
        "Simple and surgical extractions, including wisdom teeth, performed with minimal discomfort.",
      icon: "tool",
    },
    {
      title: "Dentures & Bridges",
      description:
        "Custom-fitted fixed and removable options to restore chewing comfort and a natural smile.",
      icon: "bridge",
    },
  ],

  // EDIT_ME — replace with real patient reviews once you have permission
  // to publish them (e.g. copied from your Google Business Profile).
  testimonials: [
    {
      name: "Patient, Latur",
      quote:
        "Very comfortable experience — the doctor explained every step before starting the treatment and there was almost no waiting time.",
      rating: 5,
    },
    {
      name: "Patient, Latur",
      quote:
        "Took my child for a check-up and the staff were patient and friendly the whole time. Clean clinic and fair pricing.",
      rating: 5,
    },
    {
      name: "Patient, Latur",
      quote:
        "Got my root canal done here — completely painless and the follow-up care was excellent.",
      rating: 5,
    },
  ],

  faqs: [
    {
      question: "Do I need an appointment, or can I walk in?",
      answer:
        "Appointments are recommended so we can plan enough time for your treatment, but we do our best to accommodate urgent walk-ins and dental emergencies.",
    },
    {
      question: "Is teeth whitening safe?",
      answer:
        "Yes — when done under professional supervision with the right concentration and duration, in-clinic whitening is safe for most adults. We'll check your oral health first to confirm you're a good candidate.",
    },
    {
      question: "How painful is a root canal treatment?",
      answer:
        "Modern root canal treatment is performed under local anaesthesia, so the procedure itself is virtually painless. Most patients feel mild sensitivity for a day or two afterward.",
    },
    {
      question: "At what age should my child first visit the dentist?",
      answer:
        "We recommend a first visit around the time the first tooth appears, or by their first birthday, so we can guide healthy habits from the start.",
    },
    {
      question: "Do you accept insurance or offer payment plans?",
      answer:
        "EDIT_ME — confirm your current insurance partners and whether instalment plans are available for treatments like implants or orthodontics.",
    },
    {
      question: "How do I book an appointment?",
      answer:
        "Tap the WhatsApp button on any page, call the clinic directly, or use the contact form — we'll confirm your slot the same day.",
    },
  ],
};
