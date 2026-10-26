"use client"

import { useEffect, useState } from "react"
import { Menu, X, ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Wins", href: "#achievements" },
  { label: "Say hi", href: "#contact" },
]

function useBangaloreClock() {
  const [time, setTime] = useState<string | null>(null)
  useEffect(() => {
    const format = () =>
      new Intl.DateTimeFormat("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZone: "Asia/Kolkata",
      }).format(new Date())
    setTime(format())
    const id = window.setInterval(() => setTime(format()), 1000)
    return () => window.clearInterval(id)
  }, [])
  return time
}

function useActiveSection() {
  const [active, setActive] = useState<string | null>(null)
  useEffect(() => {
    // #top is observed too so no link is highlighted while the hero is on screen.
    const sections = ["#top", ...links.map((l) => l.href)]
      .map((href) => document.querySelector<HTMLElement>(href))
      .filter((s): s is HTMLElement => s !== null)
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])
  return active
}

export function SiteNav() {
  const [open, setOpen] = useState(false)
  const time = useBangaloreClock()
  const active = useActiveSection()

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-navy/85 backdrop-blur-md">
      {/* System status strip */}
      <div className="hidden border-b border-[var(--line)] md:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-1.5 text-beige">
          <span className="label-mono flex items-center gap-2 text-[0.625rem]">
            <span className="lamp" aria-hidden="true" />
            System online · Building Calibay
          </span>
          <span className="label-mono text-[0.625rem]">
            BLR 12.97°N 77.59°E ·{" "}
            <span className="tabular-nums text-cream" suppressHydrationWarning>
              {time ?? "--:--:--"}
            </span>{" "}
            IST
          </span>
        </div>
      </div>

      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <a href="#top" className="group flex items-center gap-3">
          <span
            aria-hidden="true"
            className="relative flex size-8 items-center justify-center rounded-full border border-[var(--line-strong)] transition-colors group-hover:border-blue"
          >
            <span className="absolute inset-1.5 rounded-full border border-blue/60" />
            <span className="size-1.5 rounded-full bg-amber" />
          </span>
          <span className="font-heading text-lg font-medium tracking-tight text-paper">
            Priyadarshan
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link, i) => {
            const isActive = active === link.href
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isActive ? "location" : undefined}
                  className={cn(
                    "relative flex items-baseline gap-1.5 rounded px-3 py-2 text-sm text-cream/80 transition-colors duration-200 hover:text-paper",
                    isActive && "text-paper",
                  )}
                >
                  <span className={cn("font-mono text-[0.6rem] text-beige/60", isActive && "text-blue")}>
                    0{i + 1}
                  </span>
                  {link.label}
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute inset-x-3 -bottom-[13px] h-px origin-left scale-x-0 bg-blue transition-transform duration-300 ease-[var(--ease-mech)]",
                      isActive && "scale-x-100",
                    )}
                  />
                </a>
              </li>
            )
          })}
        </ul>

        <a href="#contact" className="btn btn-line hidden h-9 px-4 md:inline-flex">
          Get in touch <ArrowUpRight className="size-3.5" aria-hidden="true" />
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="key md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <ul
          id="mobile-menu"
          className="flex flex-col border-t border-[var(--line)] bg-navy px-4 py-2 md:hidden"
        >
          {links.map((link, i) => (
            <li key={link.href} className="border-b border-[var(--line)] last:border-b-0">
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-3 px-1 py-3 text-base text-cream hover:text-paper"
              >
                <span className="font-mono text-xs text-blue">0{i + 1}</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
