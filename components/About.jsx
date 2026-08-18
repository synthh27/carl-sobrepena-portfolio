import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="border-b border-line bg-ink py-24 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-8">
        <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-sm border border-line">
          <Image
            src="https://picsum.photos/seed/agency-portrait/800/1000"
            alt="Portrait placeholder — swap for a real headshot"
            fill
            sizes="(max-width: 1024px) 100vw, 400px"
            className="object-cover grayscale"
          />
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brass">
            About
          </p>
          <h2 className="mt-4 font-display text-3xl text-paper sm:text-4xl">
            The whole stack, in one person's hands.
          </h2>

          <div className="mt-6 space-y-4 text-base leading-relaxed text-paper-dim">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
            <p>
              Before going independent, I led growth for placeholder company
              names across hospitality and professional services — lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>

          <div className="mt-10 border-l-2 border-brass bg-ink-soft px-6 py-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-brass">
              Operating Principle
            </p>
            <p className="mt-2 font-display text-lg italic leading-snug text-paper">
              "Every channel earns its place on the menu, or it comes off."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
