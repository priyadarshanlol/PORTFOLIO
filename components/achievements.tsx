import { Rocket, Timer, Award, Code2, TrendingUp } from "lucide-react"

const wins = [
  {
    icon: Rocket,
    year: "Ignite",
    title: "Ignite Milestone 1 — Calibay",
    body: "Pitched Calibay at a college startup competition and cleared the first milestone.",
  },
  {
    icon: Timer,
    year: "24 hrs",
    title: "Internal Hackathon",
    body: "Built a working IoT fire-detection prototype in 24 hours with my team.",
  },
  {
    icon: Award,
    year: "6+",
    title: "Six+ Certifications, Self-driven",
    body: "Completed 6+ industry certifications in Python, ML, UI/UX, IoT, SQL, and data analysis — independently.",
  },
  {
    icon: Code2,
    year: "Lab",
    title: "Top Performer — Advanced C Lab",
    body: "Recognized as a top performer in the Advanced C Programming lab.",
  },
  {
    icon: TrendingUp,
    year: "Year 1",
    title: "Shipping a B2B SaaS as a first-year",
    body: "Solo-building and growing Calibay while still in my first year of university.",
  },
]

export function Achievements() {
  return (
    <section id="achievements" className="bg-muted px-4 py-20 md:px-6">
      <div className="mx-auto max-w-6xl">
        <p className="font-heading text-sm font-bold uppercase tracking-widest text-primary">
          Little wins
        </p>
        <h2 className="mt-2 font-heading text-4xl font-extrabold md:text-5xl">
          Highlights &amp; reflections
        </h2>

        <ol className="mt-12 space-y-5">
          {wins.map((win) => (
            <li
              key={win.title}
              className="flex flex-col gap-4 rounded-3xl border-2 border-foreground glass-panel p-6 shadow-[5px_5px_0_0_var(--foreground)] sm:flex-row sm:items-center"
            >
              <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl border-2 border-foreground bg-secondary">
                <win.icon className="size-6" aria-hidden="true" />
              </span>
              <div className="flex-1">
                <h3 className="font-heading text-xl font-extrabold">{win.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{win.body}</p>
              </div>
              <span className="self-start rounded-full border-2 border-foreground bg-accent px-3 py-1 text-sm font-bold text-accent-foreground sm:self-center">
                {win.year}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
