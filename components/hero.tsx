import { ArrowDown, MapPin, GraduationCap, Sparkles, Braces, Orbit } from "lucide-react"
import { GithubIcon, LinkedinIcon, GmailIcon } from "@/components/brand-icons"

const profileLinks = [
  { icon: GithubIcon, label: "GitHub", href: "https://github.com/priyadarshanlol" },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/priyadarshan-v",
  },
  { icon: GmailIcon, label: "Email", href: "mailto:priyadarshanv21@gmail.com" },
]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-4 py-16 md:px-6 md:py-24">
      {/* playful floating stickers */}
      <span className="absolute left-6 top-10 hidden rotate-12 rounded-2xl border-2 border-foreground bg-secondary px-3 py-1 font-heading text-sm font-bold shadow-[3px_3px_0_0_var(--foreground)] md:block">
        Hello!
      </span>
      <span className="absolute right-10 top-24 hidden -rotate-6 rounded-2xl border-2 border-foreground bg-accent px-3 py-1 font-heading text-sm font-bold text-accent-foreground shadow-[3px_3px_0_0_var(--foreground)] lg:block">
        Building Calibay
      </span>

      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-card px-3 py-1 text-sm font-bold">
            <span className="size-2 rounded-full bg-primary" />
            Engineering Student · AI Enthusiast
          </span>

          <h1 className="mt-5 text-balance font-heading text-5xl font-extrabold leading-[0.95] tracking-tight md:text-7xl">
            Hi, I&apos;m Priyadarshan — building with{" "}
            <span className="text-primary">AI</span>, designing with{" "}
            <span className="text-accent">intent</span>.
          </h1>

          <p className="mt-6 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
            A Computer Science (AI &amp; Data Science) student at Reva University,
            Bangalore. I live at the intersection of artificial intelligence,
            entrepreneurship, and design — currently building Calibay, an AI resume
            and skill-gap platform for Indian college students.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-primary px-6 py-3 font-bold text-primary-foreground shadow-[4px_4px_0_0_var(--foreground)] transition-transform hover:-translate-y-0.5"
            >
              See my work <ArrowDown className="size-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-card px-6 py-3 font-bold transition-transform hover:-translate-y-0.5"
            >
              Let&apos;s connect
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-5 text-sm font-semibold text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="size-4 text-primary" /> Bangalore, India
            </span>
            <span className="inline-flex items-center gap-1.5">
              <GraduationCap className="size-4 text-accent" /> Reva University
            </span>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {profileLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                aria-label={link.label}
                className="flex size-11 items-center justify-center rounded-full border-2 border-foreground bg-card text-foreground shadow-[3px_3px_0_0_var(--foreground)] transition-transform hover:-translate-y-0.5"
              >
                <link.icon className="size-5" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-foreground/15 bg-card p-6 shadow-2xl shadow-black/20 md:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,color-mix(in_oklab,var(--primary)_24%,transparent),transparent_34%),linear-gradient(135deg,transparent_45%,color-mix(in_oklab,var(--accent)_12%,transparent))]" />
            <div className="relative flex h-full flex-col justify-between">
              <div className="flex items-center justify-between text-muted-foreground">
                <span className="font-mono text-xs tracking-[0.24em]">PD / 2026</span>
                <Orbit className="size-5 text-primary" aria-hidden="true" />
              </div>
              <div>
                <div className="mb-6 flex items-center gap-3 text-primary">
                  <Sparkles className="size-5" aria-hidden="true" />
                  <span className="text-xs font-bold uppercase tracking-[0.3em]">Selected signal</span>
                </div>
                <p className="font-heading text-5xl font-bold leading-[0.92] tracking-tight md:text-6xl">
                  Ideas into <span className="text-primary">impact.</span>
                </p>
                <div className="mt-8 flex items-center gap-3 font-mono text-xs text-muted-foreground">
                  <Braces className="size-4 text-accent" aria-hidden="true" />
                  <span>ai / product / systems</span>
                </div>
              </div>
            </div>
          </div>
          <span className="absolute -bottom-4 -right-3 rounded-full border border-primary/50 bg-primary px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-lg shadow-primary/20">
            Building in public
          </span>
        </div>
      </div>
    </section>
  )
}
