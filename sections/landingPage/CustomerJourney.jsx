"use client"
import React, { useState, useEffect, useRef } from "react";
import { Megaphone, SearchCheck, Brain, RefreshCw, ChevronDown } from "lucide-react";
 
// Same teal scale used in the funnel — lightest to darkest.
const stages = [
  {
    name: "Discovery",
    description: " It’s their first time seeing you. Establish trust and make a strong first impression. Solve you audience's pain-point-solution first before you talk about your product.",
    icon: Megaphone,
    color: "#03acac",
    points: [
      "Initial awareness of the brand and its offerings",
      "Social media ads, influencer collaborations",
      "Curiosity, brand recognition",
    ],
  },
  {
    name: "Exploration",
    description: "Before expecting sales, they must know and like you. This is the crucial part. If this part of the customer journey is broke, don't even expect any sales conversion.",
    icon: SearchCheck,
    color: "#008080",
    points: [
      "Delving deeper into products/services",
      "Website, video content, interactive demos",
      "Interest, understanding",
    ],
  },
  {
    name: "Decision",
    description: "Customers who buys later, buy never. They're just stalling time — they need the last push. Give them reason for urgency, stop them from procrastinating.",
    icon: Brain,
    color: "#006060",
    points: [
      "Making a purchase decision",
      "Targeted email campaigns, product trials",
      "Confidence, readiness to buy",
    ],
  },
  {
    name: "Post-Purchase",
    description: "First purchase is just the beginning. The real revenue comes from recurring customers. They are also the proof that your product and services are worth the time and money.",
    icon: RefreshCw,
    color: "#004040",
    points: [
      "Post-purchase experience and feedback",
      "Customer support, feedback surveys",
      "Satisfaction, loyalty",
    ],
  },
];
 
// Depth of the chevron's point (right) and notch (left), in pixels.
const TIP = 22;
const NOTCH = 22;
 
export default function CustomerJourney() {
  // Index of the one stage whose description is open. null = all closed.
  const [openIndex, setOpenIndex] = useState(0);
 
  // Timestamp (ms) up to which the automatic loop is paused, because a
  // user manually toggled a card. Ref, not state — read inside the
  // interval, never needs its own render.
  const pausedUntilRef = useRef(0);
 
  const toggle = (i) => {
    setOpenIndex((prev) => (prev === i ? null : i));
    pausedUntilRef.current = Date.now() + 15000;
  };
 
  // Every 5 seconds, close whichever card is open and open the next one —
  // a ripple that moves through the stages one at a time, always exactly
  // one open. Paused for 25 seconds after any manual toggle, then resumes
  // from wherever it left off.
  useEffect(() => {
    const interval = setInterval(() => {
      if (Date.now() >= pausedUntilRef.current) {
        setOpenIndex((prev) => (prev === null ? 0 : (prev + 1) % stages.length));
      }
    }, 5000);
    return () => clearInterval(interval);
  }, []);
 
  return (
    <div className="w-max-6xl min-h-screen w-full p-8 py-16 sm:py-28">
        <div className="flex flex-col max-w-4xl justify-center items-center gap-8 text-center mx-auto">
          <p className="font-mono text-sm lg:text-lg uppercase tracking-[0.25em] text-paper">
            No more <span className="text-brass">random assumptions.</span> You need a <span className="text-brass">new strategy.</span>
          </p>
 
          <h2 className=" max-w-full md:max-w-2xl font-display font-bold text-2xl md:text-3xl lg:text-4xl uppercase text-paper sm:text-4xl">
            Revenue and growth is <span className="text-brass">inconsistent,</span> but it was <span className="text-brass">never random</span>.
          </h2>
 
          <div className="text-center mb-10 sm:mb-14 gap-5 flex flex-col lg:flex-row items-start justify-center">
              {stages.map((stage, i) => {
              const Icon = stage.icon;
              const notch = i === 0 ? 0 : NOTCH;
              const isVisible = openIndex === i;
              return (
                  <div
                  key={stage.name}
                  className="w-full md:flex-1 flex flex-col md:max-w-2xl items-center my-2 md:mb-0 gap-6"
                  >
 
                      {/* Chevron label bar */}
                      <div
                          className={`w-full h-14 sm:h-16 flex items-center justify-center gap-4`}
                          style={{
                          background: stage.color,
                          clipPath: `polygon(0 0, calc(100% - ${TIP}px) 0, 100% 50%, calc(100% - ${TIP}px) 100%, 0 100%, ${notch}px 50%)`,
                          }}
                      >
                          <span className=" text-lg font-bold text-ink tracking-tight uppercase px-4 text-center">
                          {stage.name}
                          </span>
                      </div>
 
                      {/* Icon badge */}
                      <div
                          className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-transparent flex items-center justify-center shadow-md shrink-0 z-10 border-2 border-brass"
                      >
                          <Icon
                          className="w-6 h-6 sm:w-8 sm:h-8"
                          style={{ color: stage.color }}
                          strokeWidth={2}
                          />
                      </div>
 
                      {/* Toggle for description visibility */}
                      <button
                          type="button"
                          onClick={() => toggle(i)}
                          aria-expanded={isVisible}
                          aria-label={isVisible ? `Hide ${stage.name} description` : `Show ${stage.name} description`}
                          className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.15em] text-brass border border-brass/60 rounded-lg px-3 py-1 hover:bg-brass/10 transition-colors"
                      >
                          {isVisible ? "Hide" : "Show"}
                          <ChevronDown
                          className="w-3.5 h-3.5 transition-transform duration-300"
                          style={{ transform: isVisible ? "rotate(180deg)" : "rotate(0deg)" }}
                          strokeWidth={2}
                          />
                      </button>
 
                      {/* Description — animated collapse via grid-rows trick */}
                      <div
                          className="max-w-3xl w-full grid transition-[grid-template-rows] duration-300 ease-in-out px-4"
                          style={{ gridTemplateRows: isVisible ? "1fr" : "0fr" }}
                      >
                          <div className="overflow-hidden">
                              <p className="space-y-4 text-body text-md leading-relaxed text-paper-dim text-center">
                              {stage.description}
                              </p>
                          </div>
                      </div>
                  </div>
                  );
              })}
          </div>
        </div>
    </div>
  );
}