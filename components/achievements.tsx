import { Rocket, Timer, Award, Code2, TrendingUp } from "lucide-react"
import { Reveal } from "@/components/retro/reveal"
import { SectionHeader } from "@/components/retro/section-header"

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
    <section id="achievements" className="px-4 py-24 md:px-6">
      <Reveal className="mx-auto max-w-6xl">
        <SectionHeader index="05" label="Little wins" title="Highlights & reflections" />

        <div className="panel panel-ticks mt-14 overflow-hidden">
          <table className="w-full border-collapse text-left">
            <caption className="sr-only">Highlights and achievements</caption>
            <thead className="hidden border-b border-[var(--line)] md:table-header-group">
              <tr className="label-mono text-beige/70">
                <th scope="col" className="w-24 px-6 py-3 font-medium">Code</th>
                <th scope="col" className="px-6 py-3 font-medium">Record</th>
                <th scope="col" className="w-32 px-6 py-3 text-right font-medium">Reading</th>
              </tr>
            </thead>
            <tbody>
              {wins.map((win, i) => (
                <tr
                  key={win.title}
                  className="group flex flex-col gap-2 border-b border-[var(--line)] px-5 py-5 transition-colors duration-300 last:border-b-0 hover:bg-blue/[0.06] md:table-row md:p-0"
                >
                  <td className="flex items-center gap-3 md:table-cell md:px-6 md:py-5 md:align-top">
                    <span className="flex items-center gap-3">
                      <span className="font-mono text-xs text-beige/70 tabular-nums">
                        W-{String(i + 1).padStart(2, "0")}
                      </span>
                      <win.icon className="size-4 text-blue md:hidden" aria-hidden="true" />
                    </span>
                  </td>
                  <td className="md:px-6 md:py-5">
                    <div className="flex items-start gap-3">
                      <win.icon className="mt-1 hidden size-4 shrink-0 text-blue md:block" aria-hidden="true" />
                      <div>
                        <h3 className="font-heading text-lg font-medium leading-snug text-paper">{win.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-cream/70">{win.body}</p>
                      </div>
                    </div>
                  </td>
                  <td className="md:px-6 md:py-5 md:text-right md:align-top">
                    <span className="inline-block rounded-[3px] border border-gold/35 px-2.5 py-1 font-mono text-sm tabular-nums text-gold">
                      {win.year}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>
    </section>
  )
}
