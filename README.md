# Dr. Munde's Dental World — Website

A Next.js 16 (App Router) + Tailwind CSS v4 website for the dental clinic,
built with SEO metadata, a WhatsApp click-to-chat button, and an embedded
Google Map.

## Why some content is a placeholder

The Justdial listing you linked blocks automated/bot access, and public
search results only surfaced a **different** "Dr. Munde's" clinic (in
Panvel, Navi Mumbai) — not your Narayan Nagar, Latur location. Rather than
invent facts about a real business, every unverifiable detail is clearly
marked `EDIT_ME` in **`lib/siteConfig.js`**. That one file feeds the whole
site, so updating it there updates every page.

Also, real photography for the clinic couldn't be sourced (can't scrape the
listing; using unrelated stock photos on a live business site would be
misleading and a licensing risk). Instead, every photo and the homepage
video are custom-generated placeholder graphics (branded gradients with a
"Sample photo / Sample video" label baked in), so the site looks and feels
complete — see "Adding real photos & video" below for how to swap them out.

## What to edit before publishing

Open `lib/siteConfig.js` and fill in:

- [ ] `phone.display`, `phone.tel`, `phone.whatsapp` — real clinic number (powers Call, WhatsApp, and the JSON-LD structured data)
- [ ] `address` — exact street address for the Google Map and footer
- [ ] `email` — for the contact form
- [ ] `hours` — real opening hours
- [ ] `social` — real Facebook/Instagram/Google Business links
- [ ] `doctors` — full names, degrees, and bios
- [ ] `testimonials` — replace with real reviews once you have permission to publish them (e.g. copy from Google Business Profile)
- [ ] `faqs` — the insurance/payment-plan answer is marked `EDIT_ME`

Also update `siteUrl` in `app/layout.js` once you have a real domain (used
for SEO canonical links, Open Graph tags, and `sitemap.xml`).

## Adding real photos & video

Every photo is a plain `<SitePhoto src="..." />` component (see
`components/SitePhoto.js`), and the homepage clip is a plain `<video>` tag.
Two ways to swap in the real thing:

**Easiest — same filename:** just overwrite the file in `public/images/` or
`public/videos/` with your real photo/video, keeping the exact same
filename. No code changes needed. Current filenames:

```
public/images/
  clinic-exterior.jpg    Home hero, JSON-LD/schema image, video poster
  treatment-room.jpg     Home hero
  doctor-at-work.jpg     Home hero
  clinic-interior.jpg    About page
  waiting-area.jpg       About page
  doctor-1.jpg           Doctor #1 (Home + Doctors page)
  doctor-2.jpg           Doctor #2 (Home + Doctors page)
  og-cover.jpg           Social share preview image (1200×630)
public/videos/
  clinic-intro.mp4       Home page "Take a look inside" section
```

**Or — new filename:** add your file anywhere under `public/`, then update
the relevant `src="/images/..."` (or the `doctor.photo` path in
`lib/siteConfig.js` for doctor photos) to point at it.

Recommended real-image sizes: hero/interior shots ~1200×800px landscape,
doctor portraits ~800×900px portrait, `og-cover.jpg` exactly 1200×630px.

## Running locally

```bash
npm install
npm run dev
```

Visit http://localhost:3000. The first `npm run dev` or `npm run build` run
needs internet access once, to download the Google Fonts (Fraunces &
Manrope) used in `app/layout.js`.

## Building for production / deploying

```bash
npm run build
npm run start
```

This is a standard Next.js app, so it deploys as-is to Vercel, Netlify, or
any Node hosting. No environment variables or database are required.

## Structure

```
app/
  layout.js          Global shell: fonts, <head> metadata, JSON-LD, nav/footer
  page.js            Home
  services/page.js   Services
  about/page.js      About
  doctors/page.js    Doctors
  testimonials/page.js
  faq/page.js
  contact/page.js
  sitemap.js         Auto-generated sitemap.xml
  robots.js          Auto-generated robots.txt
components/          Navbar, Footer, WhatsAppButton, MapEmbed, ContactForm, etc.
lib/siteConfig.js    All editable business content — start here
```

## Notes on the contact form

There's no backend wired up, so submitting the form opens the visitor's
email app with a pre-filled message (via `mailto:`). If you'd like it to
submit directly to an inbox or a service like Formspree/Resend instead, that
requires either a small API route or a third-party form endpoint — happy to
wire that up if you want it.
