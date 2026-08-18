"use client";

import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

// Placeholder KPI "ledger" entries — swap in your real numbers later.
const LEDGER_ENTRIES = [
  { label: "Avg. new bookings / mo", value: "42+" },
  { label: "Client retention", value: "94%" },
  { label: "Avg. return on ad spend", value: "4.8×" },
  { label: "Avg. reply time", value: "< 2 hrs" },
  { label: "Active client accounts", value: "11" },
];

export default function Hero() {
  useEffect(() => {
    (async function initCal() {
      // "strategy-call" is the Cal.com event-type slug — replace with yours.
      const cal = await getCalApi({ namespace: "strategy-call" });
      cal("ui", {
        theme: "dark",
        styles: { branding: { brandColor: "#C7962E" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  const entries = [...LEDGER_ENTRIES, ...LEDGER_ENTRIES];

  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-line bg-ink pt-28 pb-0 sm:pt-32"
    >
      <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-8">
        {/* Left: headline + copy */}
        <div className="flex flex-col justify-center">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brass">
            Reservation No. 001 — Strategy Call
          </p>

          <h1 className="mt-6 font-display text-4xl leading-[1.08] text-paper sm:text-5xl lg:text-6xl">
            Full-stack growth,
            <br />
            run like a tight kitchen.
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-paper-dim sm:text-lg">
            I build acquisition systems for high-value service and F&amp;B
            businesses — the strategy, the campaigns, and the follow-up
            plumbing that turns interest into booked revenue. One operator,
            full stack, no hand-offs.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="rounded-sm bg-brass px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] text-ink transition-colors hover:bg-brass-soft"
            >
              Start a project
            </a>
            <a
              href="#projects"
              className="font-mono text-xs uppercase tracking-[0.15em] text-paper-dim transition-colors hover:text-paper"
            >
              See the case files →
            </a>
          </div>
        </div>

        {/* Right: Cal.com booking widget, framed like a reservation card */}
        <div className="flex items-center">
          <div className="w-full rounded-sm border border-line bg-ink-soft p-1.5 shadow-2xl shadow-black/30">
            <div className="flex items-center justify-between border-b border-line px-4 py-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper-dim">
                Book a Strategy Call
              </span>
              <span className="font-mono text-[11px] text-brass">30 min</span>
            </div>
            <Cal
              namespace="strategy-call"
              calLink="your-username/strategy-call"
              style={{ width: "100%", height: "480px", overflow: "scroll" }}
              config={{ layout: "month_view" }}
            />
          </div>
        </div>
      </div>

      {/* KPI ledger ticker */}
      <div className="ticker-track mt-16 overflow-hidden border-t border-line bg-ink-soft/60 py-4">
        <div className="flex w-max animate-marquee gap-10">
          {entries.map((entry, i) => (
            <div
              key={`${entry.label}-${i}`}
              className="flex items-center gap-3 whitespace-nowrap font-mono text-xs uppercase tracking-[0.12em] text-paper-dim"
            >
              <span className="entry-number text-brass">
                {String((i % LEDGER_ENTRIES.length) + 1).padStart(2, "0")}
              </span>
              <span>{entry.label}</span>
              <span className="text-paper">{entry.value}</span>
              <span className="mx-2 text-line">/</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
