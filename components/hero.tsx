import Image from "next/image"
import { ArrowDown, MapPin, GraduationCap } from "lucide-react"

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
            Hi, I&apos;m Priyu — building with{" "}
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
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="animate-float rounded-[2rem] border-2 border-foreground bg-secondary p-3 shadow-[8px_8px_0_0_var(--foreground)]">
            <Image
              src="/priyu.png"
              alt="Portrait of Priyu standing on a city street at night"
              width={640}
              height={640}
              priority
              className="h-auto w-full rounded-[1.5rem] border-2 border-foreground bg-card object-cover"
            />
          </div>
          <span className="animate-wiggle absolute -bottom-4 -left-4 rounded-full border-2 border-foreground bg-card px-4 py-2 font-heading font-bold shadow-[3px_3px_0_0_var(--foreground)]">
            ✦ Future Innovator
          </span>
        </div>
      </div>
    </section>
  )
}
