import { Briefcase, PenTool, BadgeCheck } from "lucide-react"

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
]

const certs = [
  {
    name: "Instagram System Design Course: From Concept to Reality",
    org: "Scaler Topics",
    date: "24 Jun 2026",
    description:
      "Completed 13 video tutorials, 1 module, and 1 challenge on designing a large-scale system like Instagram.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-VV2DKRtuYJKHN5X0wwdwJgT3dVXClr.png",
  },
  {
    name: "Ignite Full — Entrepreneurship Program",
    org: "Wadhwani Foundation · Reva University",
    date: "12 Jun 2026",
    description:
      "Completed 42 hours of coursework covering ideation, business modeling, and financial planning as part of the Ignite entrepreneurship program.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3nYrkUWO1F1XZOYTK49GKDnkfdDKFB.png",
  },
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
                className="flex gap-4 rounded-3xl border-2 border-foreground glass-panel p-6 shadow-[5px_5px_0_0_var(--foreground)]"
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
                  className="rounded-2xl border-2 border-foreground glass-panel p-4"
                >
                  <div className="flex items-start gap-3">
                    <BadgeCheck className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                    <div className="flex-1">
                      <p className="font-heading font-extrabold leading-tight">{c.name}</p>
                      <p className="text-sm text-muted-foreground">{c.org}</p>
                      <p className="mt-1 text-xs font-bold text-muted-foreground">Issued {c.date}</p>
                    </div>
                  </div>
                  <img
                    src={c.image}
                    alt={`${c.name} certificate for Priyadarshan`}
                    className="mt-4 h-44 w-full rounded-xl border-2 border-foreground object-contain object-left bg-white"
                  />
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
