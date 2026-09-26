"use client"

import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "Calibay — AI Resume Analyzer",
    href: "https://calibay-prototype-rh0e2g3w0-pavantejap737-techs-projects.vercel.app",
    blurb:
      "AI-powered skill-gap analysis and resume optimization platform for Indian college students. Freemium + B2B institutional model (Free / ₹199 per month / ₹50 per student per year).",
    tags: ["Python", "React", "FastAPI", "Claude AI"],
    image: "/proj-calibay.png",
    tint: "bg-secondary",
  },
  {
    title: "IoT Fire Detection System",
    blurb:
      "Smart fire and smoke detection built on Arduino with flame sensors and real-time Bluetooth alerts to keep spaces safe.",
    tags: ["Arduino", "C", "IoT", "Bluetooth"],
    image: "/proj-iot.png",
    tint: "bg-primary",
  },
  {
    title: "2D Graphics Editor (C)",
    href: "https://github.com/priyadarshanlol/ACP-.git",
    blurb:
      "A terminal-based graphics editor using pointers and dynamic shapes — a canvas grid with full CRUD operations on shapes.",
    tags: ["C", "Pointer Arithmetic", "Terminal UI"],
    image: "/proj-editor.png",
    tint: "bg-secondary",
  },
]

export function Projects() {
  return (
    <section id="projects" className="px-4 py-20 md:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-heading text-sm font-bold uppercase tracking-widest text-primary">
              Stuff I&apos;ve made
            </p>
            <h2 className="mt-2 font-heading text-4xl font-extrabold md:text-5xl">
              Featured projects
            </h2>
          </div>
          <p className="max-w-xs text-pretty text-muted-foreground">
            A mix of design, code, and the occasional robot. Always something new
            in the works.
          </p>
        </div>

        <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              role={project.href ? "link" : undefined}
              tabIndex={project.href ? 0 : undefined}
              onClick={() => {
                if (project.href) window.open(project.href, "_blank", "noopener,noreferrer")
              }}
              onKeyDown={(event) => {
                if (project.href && (event.key === "Enter" || event.key === " ")) {
                  event.preventDefault()
                  window.open(project.href, "_blank", "noopener,noreferrer")
                }
              }}
              className={`group flex flex-col overflow-hidden rounded-3xl border-2 border-foreground bg-card shadow-[6px_6px_0_0_var(--foreground)] transition-transform hover:-translate-y-1.5 ${project.href ? "cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary" : ""}`}
            >
              <div className={`border-b-2 border-foreground p-4 ${project.tint}`}>
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={`${project.title} project illustration`}
                  width={520}
                  height={400}
                  className="h-44 w-full rounded-2xl border-2 border-foreground bg-card object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-heading text-2xl font-extrabold leading-tight transition-colors group-hover:text-primary">
                    {project.title}
                  </h3>
                  <span className="mt-1 flex size-8 shrink-0 items-center justify-center rounded-full border-2 border-foreground bg-background transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </span>
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.blurb}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border-2 border-foreground bg-background px-2.5 py-1 text-xs font-bold"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
