"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { siteConfig } from "@/lib/siteConfig";
import { PhoneIcon } from "./Icons";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/doctors", label: "Doctors" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

// Set to false if your logo image already contains the clinic name,
// so the name isn't shown twice.
const SHOW_NAME_TEXT = true;

// File lives at public/images/Logo.jpeg and is served from /images/Logo.jpeg.
// The name is case-sensitive on Linux hosts such as Vercel.
function LogoMark() {
  return (
    <Image
      src="/images/Logo.png"
      alt={`${siteConfig.clinicName} logo`}
      width={160}
      height={48}
      priority
      className="h-10 w-auto shrink-0 rounded-lg object-contain"
    />
  );
}

function NavLink({ href, label, onClick }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="group relative whitespace-nowrap py-2 text-sm text-ink/80 transition-colors hover:text-ink"
    >
      {label}
      <span className="absolute inset-x-0 -bottom-0.5 h-[2px] origin-left scale-x-0 bg-brand transition-transform duration-200 group-hover:scale-x-100" />
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-4 py-2 xl:h-18 xl:py-3">
        {/* Logo */}
        <Link
          href="/"
          className="flex min-w-0 items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <LogoMark />
          {SHOW_NAME_TEXT && (
            <span className="flex min-w-0 flex-col leading-tight">
              <span className="font-display truncate text-base font-semibold text-ink sm:text-lg">
                {siteConfig.clinicName}
              </span>
              <span className="truncate text-[10px] uppercase tracking-wide text-muted">
                {siteConfig.city}
              </span>
            </span>
          )}
        </Link>

        {/* Desktop nav — only from xl up, so nothing has to fight for space below that */}
        <nav className="hidden items-center gap-6 xl:flex">
          {links.map((link) => (
            <NavLink key={link.href} href={link.href} label={link.label} />
          ))}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <a
            href={`tel:${siteConfig.phone.tel}`}
            className="flex items-center gap-2 whitespace-nowrap rounded-full border border-line px-4 py-2 text-sm font-medium text-brand-dark transition-colors hover:border-brand/40 hover:bg-surface-2"
          >
            <PhoneIcon className="h-4 w-4 shrink-0" />
            {siteConfig.phone.display}
          </a>
          <Link
            href="/contact"
            className="whitespace-nowrap rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-md"
          >
            Book a visit
          </Link>
        </div>

        {/* Compact call button — visible between mobile and xl, so there's
            still a one-tap call action even while the full nav is hidden */}
        <a
          href={`tel:${siteConfig.phone.tel}`}
          aria-label={`Call ${siteConfig.phone.display}`}
          className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line text-brand-dark transition-colors hover:bg-surface-2 sm:flex xl:hidden"
        >
          <PhoneIcon className="h-4 w-4" />
        </a>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line text-ink transition-colors hover:bg-surface-2 xl:hidden"
        >
          <span className="sr-only">Menu</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          >
            {open ? (
              <path d="M5 5l10 10M15 5L5 15" />
            ) : (
              <path d="M3 5h14M3 10h14M3 15h14" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-white xl:hidden">
          <nav className="container-page flex flex-col py-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-line/70 py-3 text-[15px] text-ink last:border-0"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 mb-2 flex flex-col gap-2.5">
              <a
                href={`tel:${siteConfig.phone.tel}`}
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-medium text-brand-dark"
              >
                <PhoneIcon className="h-4 w-4" /> Call {siteConfig.phone.display}
              </a>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center rounded-full bg-brand px-5 py-3 text-sm font-medium text-white"
              >
                Book a visit
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}