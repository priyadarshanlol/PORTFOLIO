import { GraduationCap } from "lucide-react"

const education = [
  {
    period: "2025 — 2029",
    title: "B.E. Computer Science — AI & Data Science",
    org: "Reva University, Bangalore",
    detail:
      "Currently in Semester II, building a strong foundation in AI, data structures, and systems programming while shipping real products.",
    current: true,
  },
  {
    period: "2023 — 2024",
    title: "Self-Taught Gap Year",
    org: "Independent Study",
    detail:
      "Taught myself Python, UI/UX design, Canva, and AI fundamentals — earning 6+ certifications and starting to build products.",
    current: false,
  },
  {
    period: "Until 2023",
    title: "Class XII — PCM + Computer Science",
    org: "Higher Secondary",
    detail:
      "Specialized in Physics, Chemistry, Mathematics and Computer Science, sparking an early obsession with code and machines.",
    current: false,
  },
]

export function Education() {
  return (
    <section id="education" className="px-4 py-20 md:px-6">
      <div className="mx-auto max-w-6xl">
        <p className="font-heading text-sm font-bold uppercase tracking-widest text-primary">
          My journey
        </p>
        <h2 className="mt-2 font-heading text-4xl font-extrabold md:text-5xl">
          Education
        </h2>

        <ol className="mt-12 space-y-5">
          {education.map((item) => (
            <li
              key={item.title}
              className="flex flex-col gap-4 rounded-3xl border-2 border-foreground bg-card p-6 shadow-[5px_5px_0_0_var(--foreground)] sm:flex-row sm:items-start"
            >
              <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl border-2 border-foreground bg-secondary">
                <GraduationCap className="size-6" aria-hidden="true" />
              </span>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border-2 border-foreground bg-background px-3 py-1 text-xs font-bold text-primary">
                    {item.period}
                  </span>
                  {item.current && (
                    <span className="rounded-full border-2 border-foreground bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                      Current
                    </span>
                  )}
                </div>
                <h3 className="mt-3 font-heading text-xl font-extrabold">{item.title}</h3>
                <p className="mt-0.5 text-sm font-bold text-muted-foreground">{item.org}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
