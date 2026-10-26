import { BrainCircuit, Code2, Rocket, Target } from "lucide-react"
import { Reveal } from "@/components/retro/reveal"
import { SectionHeader } from "@/components/retro/section-header"

const facts = [
  {
    icon: BrainCircuit,
    code: "MOD-01",
    title: "AI is my playground",
    body: "From scikit-learn models to AI automation, I love turning ideas into intelligent products.",
  },
  {
    icon: Code2,
    code: "MOD-02",
    title: "I build, ship, repeat",
    body: "Python, web, and design tools. I'd rather build the thing than just talk about it.",
  },
  {
    icon: Rocket,
    code: "MOD-03",
    title: "Founder mindset",
    body: "Solo-building Calibay, an AI SaaS for students, with a freemium + B2B model.",
    featured: true,
  },
  {
    icon: Target,
    code: "MOD-04",
    title: "Disciplined & driven",
    body: "Consistent daily training and a relentless focus on shipping meaningful AI products.",
  },
]

export function About() {
  return (
    <section id="about" className="px-4 py-24 md:px-6">
      <Reveal className="mx-auto max-w-6xl">
        <SectionHeader
          index="01"
          label="A little about me"
          title={
            <>
              I&apos;m a builder at the intersection of AI, design, and{" "}
              <span className="text-amber">entrepreneurship.</span>
            </>
          }
          aside="Driven by curiosity and the goal of shipping products that matter."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((fact) =>
            fact.featured ? (
              <article key={fact.title} className="panel-cream flex flex-col p-6">
                <div className="flex items-center justify-between">
                  <span className="flex size-11 items-center justify-center rounded-full border border-navy/30 text-sci">
                    <fact.icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="label-mono text-navy/60">{fact.code}</span>
                </div>
                <h3 className="mt-8 font-heading text-xl font-medium text-navy">{fact.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/75">{fact.body}</p>
                <span className="label-mono mt-auto flex items-center gap-2 pt-6 text-[0.6rem] text-navy/70">
                  <span className="lamp" aria-hidden="true" /> Active
                </span>
              </article>
            ) : (
              <article key={fact.title} className="panel panel-ticks panel-interactive flex flex-col p-6">
                <div className="flex items-center justify-between">
                  <span className="flex size-11 items-center justify-center rounded-full border border-[var(--line-strong)] text-blue">
                    <fact.icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="label-mono text-beige/70">{fact.code}</span>
                </div>
                <h3 className="mt-8 font-heading text-xl font-medium text-paper">{fact.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/70">{fact.body}</p>
              </article>
            ),
          )}
        </div>
      </Reveal>
    </section>
  )
}
