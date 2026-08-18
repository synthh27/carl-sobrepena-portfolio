import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Testimonials />
      <Contact />

      <footer className="border-t border-line bg-ink px-6 py-8 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 font-mono text-[11px] uppercase tracking-[0.1em] text-paper-dim sm:flex-row">
          <span>© {new Date().getFullYear()} Your Name. All rights reserved.</span>
          <span>Full-stack digital marketing</span>
        </div>
      </footer>
    </main>
  );
}
