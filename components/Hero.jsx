"use client";

import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

// Placeholder KPI "ledger" entries — swap in your real numbers later.

const LEDGER_ENTRIES = [
  { label: "Attract The Right Audience" }, 
  { label: "Grow Your Following" },
  { label: "Maximize Ad Performance" },
  { label: "Respond Quickly" },
  { label: "Manage Client Relationships" }
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
      <div className="mx-auto grid max-w-6xl gap-14 px-6 text-center">
        {/* Left: headline + copy */}
        <div className="flex flex-col justify-center">
          <p className="font-mono font-bold text-xs uppercase tracking-[0.25em] text-brass-soft border-brass-soft border py-3 px-8 rounded-full w-max mx-auto ">
            STAGNANT GROWTH AND REVENUE? LET'S FIX THAT.
          </p>

          <h1 className="mt-6 font-display font-bold text-4xl leading-[1.08] text-paper sm:text-5xl lg:text-6xl">
            WE STRATEGIZE <span className="text-brass">PREDICTABLE</span> 
            <br />
            <span className="text-brass">GROWTH,</span> NOT JUST TRAFFIC.
          </h1>

          <p className="mt-6 mx-14 text-base leading-relaxed text-paper-dim sm:text-lg">
            We help entrepreneurs and business owners grow revenue predictably. Diagnose your scaling bottlenecks, then implement the right <span className="text-brass">strategy, campaigns, and systems</span> to fix them. 
            {/* We help entrepreneurs and business owners grow revenue predictably with full-stack digital marketing — strategy, campaigns, and systems built to scale.  */}
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-8">
            <a
              href="https://cal.com/carl-sobrepena-3fexby/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm bg-brass px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] text-ink transition-colors hover:bg-brass-soft"
            >
              Book a Clarity Call
            </a>
            <a
              href="#projects"
              className="font-mono rounded-sm text-xs uppercase tracking-[0.15em] border-2 border-brass-soft px-6 py-3 text-paper-dim transition-colors hover:text-paper hover:border-brass"
            >
              Check How We Work →
            </a>
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
              <span>{entry.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
