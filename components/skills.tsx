import { Reveal } from "@/components/retro/reveal"
import { SectionHeader } from "@/components/retro/section-header"
import { RadialGauge } from "@/components/retro/radial-gauge"
import { SegmentMeter } from "@/components/retro/segment-meter"

const technical = [
  { name: "UI/UX Design (Figma)", level: 80 },
  { name: "HTML / CSS / JavaScript", level: 75 },
  { name: "C Programming", level: 72 },
  { name: "Python", level: 70 },
  { name: "Data Analysis (Pandas, NumPy)", level: 60 },
  { name: "SQL", level: 60 },
  { name: "Machine Learning (scikit-learn)", level: 55 },
]

const tools = [
  { name: "Canva", level: 90 },
  { name: "VS Code / Replit", level: 85 },
  { name: "Figma", level: 82 },
  { name: "Git & GitHub", level: 68 },
  { name: "Make.com / n8n (AI Automation)", level: 55 },
]

const soft = [
  "Problem Solving",
  "Creative Thinking",
  "Communication",
  "Self-Learning",
  "Time Management",
  "Entrepreneurial Thinking",
]

function PanelHeader({ code, title, count }: { code: string; title: string; count: number }) {
  return (
    <div className="flex items-center justify-between border-b border-[var(--line)] pb-4">
      <div className="flex items-baseline gap-3">
        <span className="label-mono text-blue">{code}</span>
        <h3 className="font-heading text-lg font-medium text-paper">{title}</h3>
      </div>
      <span className="label-mono text-beige/70">{String(count).padStart(2, "0")} ch</span>
    </div>
  )
}

export function Skills() {
  return (
    <section id="skills" className="px-4 py-24 md:px-6">
      <Reveal className="mx-auto max-w-6xl">
        <SectionHeader
          index="02"
          label="My toolkit"
          title="Things I'm good at (and getting better)"
          aside="Self-assessed readings, recalibrated as I learn."
        />

        <div className="mt-14 grid gap-4 lg:grid-cols-[1.1fr_1fr]">
          <div className="panel panel-ticks p-6 md:p-7">
            <PanelHeader code="A" title="Technical" count={technical.length} />
            <ul className="mt-6 space-y-5">
              {technical.map((s, i) => (
                <SegmentMeter key={s.name} code={`A${i + 1}`} {...s} />
              ))}
            </ul>
          </div>

          <div className="panel panel-ticks p-6 md:p-7">
            <PanelHeader code="B" title="Tools & Platforms" count={tools.length} />
            <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3">
              {tools.map((s) => (
                <RadialGauge key={s.name} {...s} />
              ))}
            </div>
          </div>
        </div>

        <div className="panel mt-4 flex flex-col gap-4 p-6 md:flex-row md:items-center md:p-7">
          <div className="flex items-baseline gap-3 md:w-56 md:shrink-0">
            <span className="label-mono text-blue">C</span>
            <h3 className="font-heading text-lg font-medium text-paper">Soft Skills</h3>
          </div>
          <ul className="flex flex-wrap gap-2">
            {soft.map((skill) => (
              <li
                key={skill}
                className="flex items-center gap-2 rounded border border-[var(--line-strong)] px-3 py-1.5 font-mono text-xs text-cream"
              >
                <span aria-hidden="true" className="size-1.5 rounded-full bg-blue" />
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  )
}
