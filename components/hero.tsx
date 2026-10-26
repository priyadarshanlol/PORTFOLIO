import { ArrowDown, MapPin, GraduationCap } from "lucide-react"
import { GithubIcon, LinkedinIcon, GmailIcon } from "@/components/brand-icons"
import { OrbitalInstrument } from "@/components/retro/orbital-instrument"

const profileLinks = [
  { icon: GithubIcon, label: "GitHub", href: "https://github.com/priyadarshanlol" },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/priyadarshan-v",
  },
  { icon: GmailIcon, label: "Email", href: "mailto:priyadarshanv21@gmail.com" },
]

const readouts = [
  { label: "Unit", value: "PD / 2026" },
  { label: "Field", value: "AI & Data Science" },
  { label: "Status", value: "Building Calibay" },
]

export function Hero() {
  return (
    <section id="top" className="relative px-4 pb-20 pt-14 md:px-6 md:pb-28 md:pt-20">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <p className="label-mono flex items-center gap-3 text-beige">
            <span className="lamp" aria-hidden="true" />
            Hello! · Engineering Student · AI Enthusiast
          </p>

          <h1 className="mt-7 text-balance font-heading text-5xl font-medium leading-[0.98] tracking-[-0.03em] text-paper sm:text-6xl md:text-7xl">
            Hi, I&apos;m Priyadarshan. Building with{" "}
            <span className="text-amber">AI</span>, designing with{" "}
            <span className="text-blue">intent</span>.
          </h1>

          <p className="mt-7 max-w-lg text-pretty text-lg leading-relaxed text-cream/75">
            A Computer Science (AI &amp; Data Science) student at Reva University,
            Bangalore. I live at the intersection of artificial intelligence,
            entrepreneurship, and design, currently building Calibay, an AI resume
            and skill-gap platform for Indian college students.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn btn-amber">
              See my work <ArrowDown className="size-4" aria-hidden="true" />
            </a>
            <a href="#contact" className="btn btn-line">
              Let&apos;s connect
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4 border-t border-[var(--line)] pt-6">
            <span className="inline-flex items-center gap-2 text-sm text-cream/75">
              <MapPin className="size-4 text-blue" aria-hidden="true" /> Bangalore, India
            </span>
            <span className="inline-flex items-center gap-2 text-sm text-cream/75">
              <GraduationCap className="size-4 text-blue" aria-hidden="true" /> Reva University
            </span>
            <div className="flex gap-2 sm:ml-auto">
              {profileLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  aria-label={link.label}
                  className="key"
                >
                  <link.icon className="size-[1.1rem]" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Instrument console */}
        <div className="panel panel-ticks relative mx-auto w-full max-w-md p-5 sm:p-6">
          <div className="flex items-center justify-between text-beige">
            <span className="label-mono">Selected signal</span>
            <span className="label-mono flex items-center gap-2">
              <span className="lamp lamp-blue" aria-hidden="true" />
              Building in public
            </span>
          </div>

          <div className="relative mx-auto mt-4 aspect-square w-full max-w-[340px]">
            <OrbitalInstrument />
            <span className="label-mono absolute left-1/2 top-0 -translate-x-1/2 bg-graphite px-1 text-[0.6rem] text-blue">AI</span>
            <span className="label-mono absolute right-0 top-1/2 -translate-y-1/2 bg-graphite px-1 text-[0.6rem] text-beige">Product</span>
            <span className="label-mono absolute bottom-0 left-1/2 -translate-x-1/2 bg-graphite px-1 text-[0.6rem] text-gold">
              Systems
            </span>
          </div>

          <p className="mt-4 font-heading text-3xl font-medium leading-tight tracking-tight text-paper">
            Ideas into <span className="text-amber">impact.</span>
          </p>
          <p className="mt-1 font-mono text-xs text-beige">ai / product / systems</p>

          <dl className="mt-5 grid grid-cols-3 border-t border-[var(--line)] pt-4">
            {readouts.map((r, i) => (
              <div key={r.label} className={i > 0 ? "border-l border-[var(--line)] pl-3" : ""}>
                <dt className="label-mono text-[0.6rem] text-beige/70">{r.label}</dt>
                <dd className="mt-1 font-mono text-xs leading-snug text-cream">{r.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
