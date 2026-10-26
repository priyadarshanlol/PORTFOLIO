import { Briefcase, PenTool, BadgeCheck } from "lucide-react"
import { Reveal } from "@/components/retro/reveal"
import { SectionHeader } from "@/components/retro/section-header"

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
    <section id="experience" className="px-4 py-24 md:px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeader index="04" label="What I do" title="Experience & certifications" />
        </Reveal>

        <div className="mt-14 grid items-start gap-4 lg:grid-cols-[1fr_1.15fr]">
          {/* Timeline */}
          <Reveal className="panel panel-ticks p-6 md:p-7">
            <div className="flex items-center justify-between border-b border-[var(--line)] pb-4">
              <h3 className="font-heading text-lg font-medium text-paper">Timeline</h3>
              <span className="label-mono text-beige/70">Present ← 2023</span>
            </div>
            <ol className="relative mt-7 space-y-9 pl-9">
              <span
                aria-hidden="true"
                className="timeline-line absolute bottom-2 left-[7px] top-2 w-px bg-gradient-to-b from-amber via-blue/60 to-[var(--line)]"
              />
              {roles.map((r, i) => (
                <li key={r.role} className="relative">
                  <span
                    aria-hidden="true"
                    className="timeline-marker absolute -left-9 top-1 size-[15px] rounded-full border-2"
                    style={{ transitionDelay: `${300 + i * 450}ms` }}
                  />
                  <p className="label-mono text-amber">{r.period}</p>
                  <div className="mt-2 flex items-center gap-3">
                    <r.icon className="size-4 shrink-0 text-blue" aria-hidden="true" />
                    <h4 className="font-heading text-lg font-medium leading-snug text-paper">{r.role}</h4>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-cream/70">{r.body}</p>
                </li>
              ))}
            </ol>
          </Reveal>

          {/* Certification records */}
          <Reveal className="panel-cream p-6 md:p-7">
            <div className="flex items-center justify-between border-b border-navy/20 pb-4">
              <h3 className="font-heading text-lg font-medium text-navy">Certifications</h3>
              <span className="label-mono text-navy/60">Records · {String(certs.length).padStart(2, "0")}</span>
            </div>
            <ul className="mt-5 space-y-5">
              {certs.map((c, i) => (
                <li key={c.name} className={i > 0 ? "border-t border-navy/15 pt-5" : ""}>
                  <div className="flex items-start gap-3">
                    <BadgeCheck className="mt-0.5 size-5 shrink-0 text-sci" aria-hidden="true" />
                    <div className="flex-1">
                      <p className="font-heading font-medium leading-snug text-navy">{c.name}</p>
                      <p className="text-sm text-navy/70">{c.org}</p>
                      <p className="label-mono mt-1.5 text-[0.62rem] text-navy/60">Issued {c.date}</p>
                    </div>
                  </div>
                  <img
                    src={c.image}
                    alt={`${c.name} certificate for Priyadarshan`}
                    loading="lazy"
                    className="mt-4 h-44 w-full rounded border border-navy/20 bg-white object-contain object-left"
                  />
                  <p className="mt-3 text-sm leading-relaxed text-navy/75">{c.description}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
