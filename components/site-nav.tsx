"use client"

import { useState } from "react"
import { Menu, X, Sparkles } from "lucide-react"

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Wins", href: "#achievements" },
  { label: "Say hi", href: "#contact" },
]

export function SiteNav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b-2 border-foreground bg-background/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <a href="#top" className="flex items-center gap-2 font-heading text-xl font-extrabold">
          <span className="flex size-9 items-center justify-center rounded-full border-2 border-foreground bg-primary text-primary-foreground">
            <Sparkles className="size-4" aria-hidden="true" />
          </span>
          Priyadarshan
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-3 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full border-2 border-foreground bg-accent px-4 py-2 text-sm font-bold text-accent-foreground shadow-[3px_3px_0_0_var(--foreground)] transition-transform hover:-translate-y-0.5 md:inline-block"
        >
          Get in touch
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex size-10 items-center justify-center rounded-full border-2 border-foreground bg-card md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t-2 border-foreground bg-background px-4 py-3 md:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-full px-3 py-2 text-base font-semibold hover:bg-secondary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
