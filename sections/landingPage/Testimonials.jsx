import Image from "next/image";

// Placeholder testimonials — swap in real client quotes later.
const TESTIMONIALS = [
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bookings were up within the first month and stayed up.",
    name: "A. Rivera",
    role: "Owner, The Gilded Table",
    seed: "rivera",
  },
  {
    quote:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — our intake process finally doesn't leak leads.",
    name: "J. Okafor",
    role: "Managing Partner, Vantage Legal Partners",
    seed: "okafor",
  },
  {
    quote:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. The kind of operator who actually ships.",
    name: "M. Duarte",
    role: "Director, Marbella & Co.",
    seed: "duarte",
  },
  {
    quote:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum — clear reporting, no fluff, real results.",
    name: "S. Whitfield",
    role: "Founder, Solstice Wellness Studio",
    seed: "whitfield",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="border-b border-line bg-ink-soft py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-brass">
          Guest Book
        </p>
        <h2 className="mt-4 max-w-xl font-display text-3xl text-paper sm:text-4xl">
          What clients write in the margins.
        </h2>

        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={t.name}
              className="flex gap-5 border-t border-line pt-6"
            >
              <span className="entry-number shrink-0 font-mono text-xs text-brass">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <blockquote className="font-display text-lg italic leading-snug text-paper">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-4 flex items-center gap-3">
                  <div className="relative h-9 w-9 overflow-hidden rounded-full border border-line">
                    <Image
                      src={`https://i.pravatar.cc/72?u=${t.seed}`}
                      alt={`${t.name} placeholder avatar`}
                      fill
                      sizes="36px"
                      className="object-cover grayscale"
                    />
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.1em] text-paper">
                      {t.name}
                    </p>
                    <p className="font-mono text-[11px] text-paper-dim">
                      {t.role}
                    </p>
                  </div>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
