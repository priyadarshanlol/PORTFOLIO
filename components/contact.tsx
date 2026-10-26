import { ArrowUpRight } from "lucide-react"
import { GithubIcon, LinkedinIcon, GmailIcon } from "@/components/brand-icons"
import { Reveal } from "@/components/retro/reveal"

const socials = [
  { icon: GithubIcon, label: "GitHub", href: "https://github.com/priyadarshanlol" },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/priyadarshan-v",
  },
]

export function Contact() {
  return (
    <section id="contact" className="px-4 pb-10 pt-24 md:px-6">
      <Reveal className="panel panel-ticks relative mx-auto max-w-6xl overflow-hidden">
        {/* Concentric "transmission" rings anchored to the right edge */}
        <svg
          aria-hidden="true"
          viewBox="0 0 400 400"
          className="pointer-events-none absolute -right-40 top-1/2 hidden size-[520px] -translate-y-1/2 md:block"
        >
          {[60, 110, 160, 196].map((r, i) => (
            <circle
              key={r}
              cx="200"
              cy="200"
              r={r}
              fill="none"
              stroke={i === 0 ? "rgb(255 157 50 / 0.35)" : "rgb(54 127 206 / 0.22)"}
              strokeDasharray={i % 2 ? "2 6" : undefined}
            />
          ))}
          <circle cx="200" cy="200" r="60" fill="none" stroke="#FF9D32" strokeOpacity="0.5" className="temporal-ripple" />
          <circle cx="200" cy="200" r="6" fill="#FF9D32" />
        </svg>

        <div className="flex items-center justify-between border-b border-[var(--line)] px-6 py-3 md:px-12">
          <span className="label-mono flex items-center gap-2 text-beige">
            <span className="lamp" aria-hidden="true" /> Say hello · Channel open
          </span>
          <span className="label-mono hidden text-beige/70 sm:inline">§06</span>
        </div>

        <div className="relative px-6 py-12 md:px-12 md:py-16">
          <h2 className="max-w-2xl text-balance font-heading text-4xl font-medium leading-[1.05] tracking-tight text-paper md:text-6xl">
            Got a cool idea? Let&apos;s make something{" "}
            <span className="text-amber">together.</span>
          </h2>
          <p className="mt-6 max-w-lg text-pretty text-lg leading-relaxed text-cream/75">
            I&apos;m always up for collaborating on projects, joining clubs, or just
            geeking out about design and tech. My inbox is open.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a href="mailto:priyadarshanv21@gmail.com" className="btn btn-amber normal-case tracking-normal">
              <GmailIcon className="size-4" />
              priyadarshanv21@gmail.com
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="key size-[2.875rem]"
              >
                <social.icon className="size-5" />
              </a>
            ))}
          </div>
        </div>
      </Reveal>

      <footer className="mx-auto mt-10 flex max-w-6xl flex-col items-center justify-between gap-2 border-t border-[var(--line)] pt-6 text-beige/80 sm:flex-row">
        <span className="text-sm">Made with curiosity by Priyadarshan — {new Date().getFullYear()}</span>
        <span className="label-mono text-[0.6rem]">End of transmission</span>
      </footer>
    </section>
  )
}
