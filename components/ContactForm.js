"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/siteConfig";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" });

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent(`Appointment request — ${form.name || "Website visitor"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nService interested in: ${form.service}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  }

  const inputClass =
    "w-full rounded-xl border border-line bg-white px-4 py-3 text-[15px] text-ink placeholder:text-muted/70 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink">
            Full name
          </label>
          <input
            id="name"
            required
            value={form.name}
            onChange={update("name")}
            placeholder="Your name"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-ink">
            Phone number
          </label>
          <input
            id="phone"
            required
            type="tel"
            value={form.phone}
            onChange={update("phone")}
            placeholder="10-digit mobile number"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-ink">
          Service you're interested in
        </label>
        <select
          id="service"
          value={form.service}
          onChange={update("service")}
          className={inputClass}
        >
          <option value="">Select a service (optional)</option>
          {siteConfig.services.map((s) => (
            <option key={s.title} value={s.title}>{s.title}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          value={form.message}
          onChange={update("message")}
          placeholder="Tell us what's bothering you, or your preferred date/time"
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-brand px-6 py-3.5 text-sm font-medium text-white hover:bg-brand-dark transition-colors sm:w-auto"
      >
        Send request
      </button>
      <p className="text-xs text-muted">
        This opens your email app with the details filled in. For a faster
        reply, use the WhatsApp button or call us directly.
      </p>
    </form>
  );
}
