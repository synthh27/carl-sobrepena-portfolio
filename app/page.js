import Hero from "@/sections/landingPage/Hero";
import ProblemHook from "@/sections/landingPage/ProblemHook";
import ContactBanner from "@/sections/landingPage/ContactBanner";
import Services from "@/sections/landingPage/Services";
import ProblemBanner from "@/sections/landingPage/ProblemBanner";
import ProfileSection from "@/sections/landingPage/ProfileSection";
import HowWeWork from "@/sections/landingPage/HowWeWork";
import FAQs from "@/sections/landingPage/FAQs";
import ScrollingDivider from "@/sections/landingPage/ScrollingDivider";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProblemHook />
      <ProblemBanner />
      <ProfileSection />
      <ScrollingDivider />
      <HowWeWork />
      <Services/>
      <FAQs />
      <ContactBanner />

      {/* <footer className="border-t border-line bg-ink px-6 py-8 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 font-mono text-[11px] uppercase tracking-[0.1em] text-paper-dim sm:flex-row">
          <span>© {new Date().getFullYear()} Carl Sobrepeña Digitals. All rights reserved.</span>
          <span>Brand and Digital Marketing Strategist</span>
        </div>
      </footer> */}
    </main>
  );
}
