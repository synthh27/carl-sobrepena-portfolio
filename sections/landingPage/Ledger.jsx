"use client";
import { useEffect } from "react";
import QuoteBox from "@/components/QuoteBox";

const LEDGER_ENTRIES = [
  { label: "Strategized Customer Journey" }, 
  { label: "Optimized Funnel Design" },
  { label: "Automized Systems" },
  { label: "Responded Quickly" },
  { label: "Strategized Customer Journey" }, 
  { label: "Optimized Funnel Design" },
  { label: "Automized Systems" },
  { label: "Responded Quickly" },
];

const TOP_QUOTES = [
  {caption: "My leads are pouring in, but they're not converting into customers..."},
  {caption: "I'm posting content every day, but my engagement barely moves..."},
  {caption: "I redesigned my website, but lead volume hasn't changed..."},
  {caption: "I doubled my ad spend, but sales stayed flat..."},
  {caption: "I have a CRM, but I still lose track of who to follow up with..."},
];

const BOTTOM_QUOTES = [
  {caption: "I get bookings, but half of them turn into no-shows..."},
  {caption: "My competitors and I look the same online, and I don't know how to stand out..."},
  {caption: "I get first-time customers, but they rarely come back..."},
  {caption: "Business is great during peak season, but dead the moment it ends..."},
];


const Ledger = () => {

    const entries = [...LEDGER_ENTRIES, ...LEDGER_ENTRIES];
    return (
        <div 
            className="ticker-track overflow-hidden border-t border-line my-4 py-8 flex flex-col gap-12"
            style={{
                maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
            }}
            >
        <div className="flex w-max animate-marquee gap-10">
            {TOP_QUOTES.map((quote, i) => {
            return (
                <QuoteBox 
                key={quote.caption}
                index={i}
                quote={quote.caption}
                />
            )
            })}
        </div>
        <div className="flex w-max animate-marquee-reverse gap-10">
            {BOTTOM_QUOTES.map((quote, i) => {
            return (
                <QuoteBox 
                key={quote.caption}
                index={i}
                quote={quote.caption}
                />
            )
            })}
        </div>
        </div>
    );
}

export default Ledger