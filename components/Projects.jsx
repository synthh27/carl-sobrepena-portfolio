import Image from "next/image";

// Placeholder project data — replace with real case studies later.
const PROJECTS = [
  {
    id: "01",
    client: "The Gilded Table",
    category: "Fine Dining Group",
    blurb:
      "Rebuilt reservation funnel and local SEO, lifting direct bookings and cutting third-party platform fees.",
    tags: ["SEO", "Reservations", "Paid Social"],
    seed: "gilded-table",
  },
  {
    id: "02",
    client: "Vantage Legal Partners",
    category: "Professional Services",
    blurb:
      "Designed an intake-to-consult pipeline with automated follow-up, shortening average response time.",
    tags: ["CRM", "Automation", "Paid Search"],
    seed: "vantage-legal",
  },
  {
    id: "03",
    client: "Marbella & Co.",
    category: "Boutique Hospitality",
    blurb:
      "Launched a multi-location content and email system to drive repeat bookings across three properties.",
    tags: ["Email", "Content", "Brand"],
    seed: "marbella-co",
  },
  {
    id: "04",
    client: "North Ridge Dental",
    category: "Local Service Business",
    blurb:
      "Built a local-service acquisition funnel pairing paid search with a review and referral engine.",
    tags: ["Local SEO", "Paid Search", "Reviews"],
    seed: "north-ridge",
  },
  {
    id: "05",
    client: "Solstice Wellness Studio",
    category: "Membership / Wellness",
    blurb:
      "Stood up a membership funnel and lifecycle email flows to improve trial-to-member conversion.",
    tags: ["Lifecycle Email", "Landing Pages", "Analytics"],
    seed: "solstice-wellness",
  },
  {
    id: "06",
    client: "Almacen Coffee Roasters",
    category: "Multi-Location F&B",
    blurb:
      "Rolled out a unified local-marketing system across five locations from a single content calendar.",
    tags: ["Local SEO", "Social", "Systems"],
    seed: "almacen-coffee",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="border-b border-line bg-ink py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-brass">
          Case Files
        </p>
        <h2 className="mt-4 max-w-xl font-display text-3xl text-paper sm:text-4xl">
          Selected work, on the record.
        </h2>

        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col bg-ink transition-colors hover:bg-ink-soft"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={`https://picsum.photos/seed/${project.seed}/640/480`}
                  alt={`${project.client} — placeholder project image`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover grayscale transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between">
                  <span className="entry-number font-mono text-xs text-brass">
                    Case No. {project.id}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-paper-dim">
                    {project.category}
                  </span>
                </div>

                <h3 className="mt-3 font-display text-xl text-paper">
                  {project.client}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-paper-dim">
                  {project.blurb}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-sm border border-line px-2 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-paper-dim"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="#"
                  className="mt-6 font-mono text-xs uppercase tracking-[0.15em] text-brass transition-colors hover:text-brass-soft"
                >
                  View case →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
