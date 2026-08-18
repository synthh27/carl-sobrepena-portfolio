"use client";

import { useState } from "react";

const BUSINESS_TYPES = [
  "Restaurant / F&B",
  "Hospitality",
  "Professional Services",
  "Wellness / Membership",
  "Other",
];

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | submitting | sent

  function handleSubmit(e) {
    e.preventDefault();

    // Honeypot check — bots tend to fill every field.
    const form = e.target;
    if (form.company_website.value) return;

    setStatus("submitting");

    // TODO: wire this up to a real endpoint — e.g. an app/api/contact/route.js
    // that sends through Resend/SendGrid, or a service like Formspree.
    // For now this just simulates a submission so the UI is demo-able.
    setTimeout(() => setStatus("sent"), 600);
  }

  return (
    <section id="contact" className="bg-ink py-24 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-8">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brass">
            Contact
          </p>
          <h2 className="mt-4 font-display text-3xl text-paper sm:text-4xl">
            Request a seat at the table.
          </h2>
          <p className="mt-5 max-w-sm text-base leading-relaxed text-paper-dim">
            Tell me a little about your business and where growth is
            stalling. I read every inquiry myself and reply within two
            business days.
          </p>

          <dl className="mt-10 space-y-4 font-mono text-sm">
            <div className="flex items-center gap-3">
              <dt className="text-paper-dim">Email</dt>
              <dd className="text-paper">hello@your-domain.com</dd>
            </div>
            <div className="flex items-center gap-3">
              <dt className="text-paper-dim">Based in</dt>
              <dd className="text-paper">Your City, Your Country</dd>
            </div>
            <div className="flex items-center gap-3">
              <dt className="text-paper-dim">Elsewhere</dt>
              <dd className="text-paper">LinkedIn · Instagram · X</dd>
            </div>
          </dl>
        </div>

        <form
          onSubmit={handleSubmit}
          className="border border-line bg-ink-soft p-6 sm:p-8"
        >
          {/* Honeypot field — hidden from real users, visible to most bots */}
          <input
            type="text"
            name="company_website"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />

          <div className="grid gap-6 sm:grid-cols-2">
            <label className="flex flex-col gap-2">
              <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-paper-dim">
                Name
              </span>
              <input
                type="text"
                name="name"
                required
                className="border border-line bg-ink px-4 py-3 text-sm text-paper outline-none focus:border-brass"
                placeholder="Jane Doe"
              />
            </label>

            <label className="flex flex-col gap-2">
              <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-paper-dim">
                Email
              </span>
              <input
                type="email"
                name="email"
                required
                className="border border-line bg-ink px-4 py-3 text-sm text-paper outline-none focus:border-brass"
                placeholder="jane@business.com"
              />
            </label>
          </div>

          <label className="mt-6 flex flex-col gap-2">
            <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-paper-dim">
              Business type
            </span>
            <select
              name="business_type"
              required
              defaultValue=""
              className="border border-line bg-ink px-4 py-3 text-sm text-paper outline-none focus:border-brass"
            >
              <option value="" disabled>
                Select one
              </option>
              {BUSINESS_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </label>

          <label className="mt-6 flex flex-col gap-2">
            <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-paper-dim">
              Message
            </span>
            <textarea
              name="message"
              required
              rows={4}
              className="border border-line bg-ink px-4 py-3 text-sm text-paper outline-none focus:border-brass"
              placeholder="What's the biggest bottleneck in your growth right now?"
            />
          </label>

          <button
            type="submit"
            disabled={status !== "idle"}
            className="mt-8 w-full rounded-sm bg-brass px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] text-ink transition-colors hover:bg-brass-soft disabled:opacity-60"
          >
            {status === "sent" ? "Inquiry sent" : "Send inquiry"}
          </button>

          {status === "sent" && (
            <p className="mt-4 font-mono text-xs text-paper-dim">
              Thanks — this is a placeholder confirmation. Connect the form to
              a real endpoint before launch.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
