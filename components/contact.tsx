import { GithubIcon, LinkedinIcon, GmailIcon } from "@/components/brand-icons"

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
    <section id="contact" className="px-4 py-20 md:px-6">
      <div className="mx-auto max-w-4xl rounded-[2.5rem] border-2 border-foreground bg-primary p-8 text-primary-foreground shadow-[8px_8px_0_0_var(--foreground)] md:p-14">
        <p className="font-heading text-sm font-bold uppercase tracking-widest">
          Say hello
        </p>
        <h2 className="mt-3 text-balance font-heading text-4xl font-extrabold leading-tight md:text-6xl">
          Got a cool idea? Let&apos;s make something together.
        </h2>
        <p className="mt-5 max-w-lg text-pretty text-lg leading-relaxed opacity-90">
          I&apos;m always up for collaborating on projects, joining clubs, or just
          geeking out about design and tech. My inbox is open.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="mailto:priyadarshanv21@gmail.com"
            className="inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-card px-6 py-3 font-bold text-foreground shadow-[4px_4px_0_0_var(--foreground)] transition-transform hover:-translate-y-0.5"
          >
            <GmailIcon className="size-5" />
            priyadarshanv21@gmail.com
          </a>

          <div className="flex gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex size-12 items-center justify-center rounded-full border-2 border-foreground bg-secondary text-secondary-foreground transition-transform hover:-translate-y-0.5"
              >
                <social.icon className="size-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <footer className="mx-auto mt-12 max-w-6xl border-t-2 border-foreground pt-6 text-center text-sm font-semibold text-muted-foreground">
        Made with curiosity by Priyadarshan — {new Date().getFullYear()}
      </footer>
    </section>
  )
}
