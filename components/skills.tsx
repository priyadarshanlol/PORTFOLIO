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

function Bar({ name, level }: { name: string; level: number }) {
  return (
    <li>
      <div className="flex items-center justify-between gap-3">
        <span className="text-sm font-semibold">{name}</span>
        <span className="font-heading text-sm font-extrabold text-primary">{level}%</span>
      </div>
      <div className="mt-1.5 h-3 w-full overflow-hidden rounded-full border-2 border-foreground bg-background">
        <div
          className="h-full rounded-full bg-primary"
          style={{ width: `${level}%` }}
          role="progressbar"
          aria-valuenow={level}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={name}
        />
      </div>
    </li>
  )
}

export function Skills() {
  return (
    <section id="skills" className="bg-muted px-4 py-20 md:px-6">
      <div className="mx-auto max-w-6xl">
        <p className="font-heading text-sm font-bold uppercase tracking-widest text-primary">
          My toolkit
        </p>
        <h2 className="mt-2 font-heading text-4xl font-extrabold md:text-5xl">
          Things I&apos;m good at (and getting better)
        </h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border-2 border-foreground glass-panel p-6 shadow-[5px_5px_0_0_var(--foreground)]">
            <span className="inline-block rounded-full border-2 border-foreground bg-secondary px-4 py-1 font-heading font-extrabold">
              Technical
            </span>
            <ul className="mt-6 space-y-4">
              {technical.map((s) => (
                <Bar key={s.name} {...s} />
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border-2 border-foreground glass-panel p-6 shadow-[5px_5px_0_0_var(--foreground)]">
            <span className="inline-block rounded-full border-2 border-foreground bg-accent px-4 py-1 font-heading font-extrabold text-accent-foreground">
              Tools & Platforms
            </span>
            <ul className="mt-6 space-y-4">
              {tools.map((s) => (
                <Bar key={s.name} {...s} />
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 rounded-3xl border-2 border-foreground glass-panel p-6 shadow-[5px_5px_0_0_var(--foreground)]">
          <span className="inline-block rounded-full border-2 border-foreground bg-primary px-4 py-1 font-heading font-extrabold text-primary-foreground">
            Soft Skills
          </span>
          <ul className="mt-5 flex flex-wrap gap-2">
            {soft.map((skill) => (
              <li
                key={skill}
                className="rounded-full border-2 border-foreground bg-background px-3 py-1.5 text-sm font-semibold"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
