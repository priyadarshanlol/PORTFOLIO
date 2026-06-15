import { BrainCircuit, Code2, Rocket, Target } from "lucide-react"

const facts = [
  {
    icon: BrainCircuit,
    title: "AI is my playground",
    body: "From scikit-learn models to AI automation, I love turning ideas into intelligent products.",
    color: "bg-secondary",
  },
  {
    icon: Code2,
    title: "I build, ship, repeat",
    body: "Python, web, and design tools — I'd rather build the thing than just talk about it.",
    color: "bg-accent",
  },
  {
    icon: Rocket,
    title: "Founder mindset",
    body: "Solo-building Calibay, an AI SaaS for students, with a freemium + B2B model.",
    color: "bg-primary text-primary-foreground",
  },
  {
    icon: Target,
    title: "Disciplined & driven",
    body: "Consistent daily training and a relentless focus on shipping meaningful AI products.",
    color: "bg-card",
  },
]

export function About() {
  return (
    <section id="about" className="px-4 py-20 md:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-heading text-sm font-bold uppercase tracking-widest text-primary">
              A little about me
            </p>
            <h2 className="mt-2 max-w-xl text-balance font-heading text-4xl font-extrabold leading-tight md:text-5xl">
              I&apos;m a builder at the intersection of AI, design, and
              entrepreneurship.
            </h2>
          </div>
          <p className="max-w-xs text-pretty text-muted-foreground">
            Driven by curiosity and the goal of shipping products that matter.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((fact) => (
            <div
              key={fact.title}
              className={`rounded-3xl border-2 border-foreground p-6 shadow-[5px_5px_0_0_var(--foreground)] transition-transform hover:-translate-y-1 ${fact.color}`}
            >
              <span className="flex size-12 items-center justify-center rounded-2xl border-2 border-foreground bg-background text-foreground">
                <fact.icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-heading text-xl font-extrabold">{fact.title}</h3>
              <p className="mt-2 text-sm leading-relaxed opacity-90">{fact.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <div className="rounded-3xl border-2 border-foreground bg-card p-7 shadow-[5px_5px_0_0_var(--foreground)]">
            <h3 className="font-heading text-2xl font-extrabold">My story</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              I&apos;m a Computer Science (AI &amp; Data Science) student at Reva
              University, Bangalore, driven by the intersection of Artificial
              Intelligence, Entrepreneurship, and Design. I taught myself Python,
              UI/UX design, and AI fundamentals — and now I&apos;m building
              Calibay, an AI-powered resume and skill-gap analysis platform for
              Indian college students. I train daily and am laser-focused on
              reaching financial independence through meaningful products.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
