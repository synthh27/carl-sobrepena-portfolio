"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowDown } from "lucide-react";
import Ledger from "./Ledger";

const QUOTES_ENTRIES = [
  {caption: "I am getting high lead traffic but customers don't actually buy..."},
  {caption: "I am posting more daily contents but my engagement is still low..."},
  {caption: "I revamped my website but my leads are still low..."},
  {caption: "I doubled my ad spend but my sales are still low..."},
];

export default function ProblemHook() {
  const [showArrow, setShowArrow] = useState(false);
  const sectionRef = useRef(null);
  const arrowRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show arrow when the section is still in view
        // but the next section is approaching (bottom 30% of viewport)
        setShowArrow(entry.isIntersecting && entry.boundingClientRect.bottom < window.innerHeight * 1.3);
      },
      { threshold: [0, 0.2, 0.5, 0.8, 1] }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section
        ref={sectionRef}  
        id="about"
        className="w-full lg:max-w-7xl lg:mx-auto border-b-2 border-b-paper border-t-2 border-t-paper px-8 pt-16 pb-8 sm:pt-28 sm:pb-16 sm:px-16">
        <div className="w-full mx-auto md:px-16 grid grid-cols-1 items-center md:text-center text-wrap">
          <div className="w-full flex flex-col gap-2 md:gap-2 text-center  tracking-wide">
            <h2 className="max-w-full font-display text-ink-soft text-md md:text-xl lg:text-4xl">
              Whether you're just <span className="text-brass-soft">starting or scaling</span> — customer behavior may look inconsistent, 
              <span className="block mt-1 text-2xl md:text-5xl">but it's never</span> 
              <span className="block max-w-full uppercase font-display text-brass-soft font-bold | text-5xl md:text-5xl lg:text-7xl">
                Random
              </span>
            </h2>
          </div>
          <Ledger />
        </div>
        <div className="w-full flex flex-col mt-8 md:px-16 gap-2 md:gap-2 items-center text-center tracking-wide">
          <h2 className="w-full max-w-7xl overflow-hidden font-display text-ink text-sm md:text-xl lg:text-2xl font-semibold uppercase">          
            And here's what<span className="block text-xl lg:text-5xl font-bold text-brass-soft">Most of our clients miss...</span>
          </h2>
        </div>

        {/* Arrow Down */}
        <div className="w-full flex justify-center mt-8">
          <ArrowDown
            ref={arrowRef}
            className={`w-8 h-8 lg:w-12 lg:h-12 text-brass-soft animate-bounce transition-opacity duration-500 ${
              showArrow ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </section>
    </>
  );
}