import { Briefcase, PenTool, Megaphone, BadgeCheck } from "lucide-react"

const roles = [
  {
    icon: Briefcase,
    role: "Founder & Builder — Calibay",
    period: "Jan 2025 – Present",
    body: "Solo-building an AI SaaS product end to end: product, design, ML, and go-to-market.",
  },
  {
    icon: PenTool,
    role: "Freelance Graphic Designer",
    period: "2023 – Present",
    body: "Brand kits and Canva templates sold via Gumroad and Etsy for clients and creators.",
  },
  {
    icon: Megaphone,
    role: "AI & Tech Content Creator",
    period: "Ongoing",
    body: "Building a LinkedIn personal brand for an AI-curious student audience.",
  },
]

const certs = [
  { name: "Python for Everybody", org: "Coursera · University of Michigan", date: "Jan 2024" },
  { name: "Machine Learning Fundamentals", org: "Google · Kaggle", date: "Mar 2024" },
  { name: "UI/UX Design Foundations", org: "Coursera · Google", date: "May 2024" },
  { name: "Internet of Things with Arduino", org: "NPTEL · IIT", date: "Aug 2024" },
  { name: "SQL for Data Science", org: "DataCamp", date: "Oct 2024" },
  { name: "Data Analysis with Python", org: "IBM · Coursera", date: "Dec 2024" },
]

export function Experience() {
  return (
    <section id="experience" className="px-4 py-20 md:px-6">
      <div className="mx-auto max-w-6xl">
        <p className="font-heading text-sm font-bold uppercase tracking-widest text-primary">
          What I do
        </p>
        <h2 className="mt-2 font-heading text-4xl font-extrabold md:text-5xl">
          Experience &amp; certifications
        </h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="space-y-5">
            {roles.map((r) => (
              <div
                key={r.role}
                className="flex gap-4 rounded-3xl border-2 border-foreground bg-card p-6 shadow-[5px_5px_0_0_var(--foreground)]"
              >
                <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl border-2 border-foreground bg-secondary">
                  <r.icon className="size-6" aria-hidden="true" />
                </span>
                <div>
                  <div className="flex flex-wrap items-center gap-x-3">
                    <h3 className="font-heading text-xl font-extrabold">{r.role}</h3>
                    <span className="text-sm font-bold text-primary">{r.period}</span>
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{r.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-3xl border-2 border-foreground bg-muted p-6 shadow-[5px_5px_0_0_var(--foreground)]">
            <span className="inline-block rounded-full border-2 border-foreground bg-accent px-4 py-1 font-heading font-extrabold text-accent-foreground">
              Certifications
            </span>
            <ul className="mt-5 space-y-3">
              {certs.map((c) => (
                <li
                  key={c.name}
                  className="flex items-start gap-3 rounded-2xl border-2 border-foreground bg-card p-4"
                >
                  <BadgeCheck className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                  <div className="flex-1">
                    <p className="font-heading font-extrabold leading-tight">{c.name}</p>
                    <p className="text-sm text-muted-foreground">{c.org}</p>
                  </div>
                  <span className="shrink-0 text-xs font-bold text-muted-foreground">{c.date}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
