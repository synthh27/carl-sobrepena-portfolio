"use client"
import React, { useState } from "react";

const defaultModules = [
  {
    title: "Social Media Marketing",
    tag: "Foundation",
    description:
      "After this module, you'll know exactly what to post, when to post it, and how to turn followers into paying customers on any platform.",
  },
  {
    title: "Paid Ads — Meta, Google & TikTok",
    tag: "High Impact",
    description:
      "After this module, you'll launch, optimize, and scale ad campaigns that generate real ROI — without wasting budget on guesswork.",
  },
  {
    title: "Content Creation",
    tag: "Daily Skill",
    description:
      "After this module, you'll create content that stops the scroll, builds your brand, and drives action — no professional equipment needed.",
  },
  {
    title: "Email Marketing",
    tag: "Highest ROI",
    description:
      "After this module, you'll have a working email sequence that nurtures leads and turns subscribers into buyers — automatically.",
  },
  {
    title: "Website Creation",
    tag: "Essential",
    description:
      "After this module, you'll build conversion-optimized websites and landing pages from scratch — no developer, no agency, no excuses.",
  },
  {
    title: "Lead Magnets",
    tag: "List Builder",
    description:
      "After this module, you'll have a lead magnet live and collecting emails from your ideal audience — the fuel that powers everything else.",
  },
  {
    title: "Sales Funnels",
    tag: "Revenue Engine",
    description:
      "After this module, you'll have a complete funnel that turns cold traffic into booked calls and paying clients — on autopilot.",
  },
  {
    title: "SEO",
    tag: "Long Game",
    description:
      "After this module, you'll rank on Google for the exact terms your ideal clients are searching, driving free traffic for years.",
  },
];

export default function Card({
  modules = defaultModules,
  accentColor = "#008080",
  defaultActiveIndex = 0,
}) {
  // Only one module can be "highlighted" (expanded) at a time.
  // Clicking the active one again collapses it.
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);

  return (
    <div className="w-full min-h-screen px-4 py-16 sm:py-20">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 text-left">
        {modules.map((mod, i) => {
          const number = String(i + 1).padStart(2, "0");
          const isActive = activeIndex === i;
          return (
            <div
              key={mod.title}
              role="button"
              tabIndex={0}
              aria-pressed={isActive}
              onClick={() => setActiveIndex(isActive ? null : i)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActiveIndex(isActive ? null : i);
                }
              }}
              className="relative bg-stone-100 rounded-md p-6 sm:p-7 overflow-hidden cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-900"
              style={
                isActive
                  ? {
                      border: `2px solid ${accentColor}`,
                      boxShadow: `0 8px 24px -12px ${accentColor}60`,
                    }
                  : { border: "2px solid transparent" }
              }
            >
              {isActive && (
                <span
                  className="absolute -bottom-1 -right-1 w-7 h-7 rounded-tl-2xl"
                  style={{ background: accentColor }}
                  aria-hidden="true"
                />
              )}

              <div className="flex items-start gap-4 sm:gap-5">
                <span
                  className="text-4xl sm:text-5xl font-black leading-none shrink-0 select-none"
                  style={{ color: `${accentColor}35` }}
                >
                  {number}
                </span>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-bold text-paper text-base sm:text-lg leading-snug">
                      {mod.title}
                    </h3>
                    <span
                      className="shrink-0 text-[11px] sm:text-xs font-bold uppercase tracking-wide px-2.5 py-1 rounded-sm whitespace-nowrap"
                      style={{
                        background: `${accentColor}1F`,
                        color: accentColor,
                      }}
                    >
                      {mod.tag}
                    </span>
                  </div>

                  {/* Description only shows for the active (highlighted) card */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isActive ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
                      {mod.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}