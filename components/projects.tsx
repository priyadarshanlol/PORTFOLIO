import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { Reveal } from "@/components/retro/reveal"
import { SectionHeader } from "@/components/retro/section-header"
import { cn } from "@/lib/utils"

const projects = [
  {
    title: "Calibay — AI Resume Analyzer",
    href: "https://calibay-prototype-rh0e2g3w0-pavantejap737-techs-projects.vercel.app",
    status: "Live prototype",
    blurb:
      "AI-powered skill-gap analysis and resume optimization platform for Indian college students. Freemium + B2B institutional model (Free / ₹199 per month / ₹50 per student per year).",
    tags: ["Python", "React", "FastAPI", "Claude AI"],
    image: "/proj-calibay.png",
  },
  {
    title: "IoT Fire Detection System",
    status: "Hardware build",
    blurb:
      "Smart fire and smoke detection built on Arduino with flame sensors and real-time Bluetooth alerts to keep spaces safe.",
    tags: ["Arduino", "C", "IoT", "Bluetooth"],
    image: "/proj-iot.png",
  },
  {
    title: "2D Graphics Editor (C)",
    href: "https://github.com/priyadarshanlol/ACP-.git",
    status: "Source on GitHub",
    blurb:
      "A terminal-based graphics editor using pointers and dynamic shapes — a canvas grid with full CRUD operations on shapes.",
    tags: ["C", "Pointer Arithmetic", "Terminal UI"],
    image: "/proj-editor.png",
  },
]

type Project = (typeof projects)[number] & { href?: string }

function ProjectBody({ project, index }: { project: Project; index: number }) {
  return (
    <>
      <div className="flex items-center justify-between border-b border-[var(--line)] px-5 py-3">
        <span className="label-mono text-beige/80">File {String(index + 1).padStart(3, "0")}</span>
        <span className="label-mono flex items-center gap-2 text-[0.6rem] text-cream/80">
          <span
            aria-hidden="true"
            className={cn("size-1.5 rounded-full", project.href ? "bg-amber" : "bg-beige/50")}
          />
          {project.status}
        </span>
      </div>

      {/* Viewscreen */}
      <div className="p-3">
        <div className="relative overflow-hidden rounded-[0.3rem] border border-beige/40 bg-cream">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={`${project.title} project illustration`}
            width={520}
            height={400}
            className="h-48 w-full object-cover saturate-[0.7] sepia-[0.12] transition-[filter] duration-500 group-hover:saturate-100 group-hover:sepia-0"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 shadow-[inset_0_0_40px_rgb(16_24_39/0.35)]"
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col px-5 pb-5 pt-2">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-heading text-xl font-medium leading-snug text-paper transition-colors duration-300 group-hover:text-white">
            {project.title}
          </h3>
          {project.href && (
            <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded border border-[var(--line-strong)] text-cream transition-colors duration-300 group-hover:border-amber group-hover:bg-amber group-hover:text-navy">
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </span>
          )}
        </div>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-cream/70">{project.blurb}</p>
        <ul className="mt-5 flex flex-wrap gap-1.5 border-t border-[var(--line)] pt-4">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-[3px] bg-sci/25 px-2 py-1 font-mono text-[0.68rem] text-[#a9c8ec]"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export function Projects() {
  return (
    <section id="projects" className="px-4 py-24 md:px-6">
      <Reveal className="mx-auto max-w-6xl">
        <SectionHeader
          index="03"
          label="Stuff I've made"
          title="Featured projects"
          aside="A mix of design, code, and the occasional robot. Always something new in the works."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {(projects as Project[]).map((project, index) =>
            project.href ? (
              <a
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title}`}
                className="group panel panel-ticks panel-interactive flex flex-col overflow-hidden"
              >
                <ProjectBody project={project} index={index} />
              </a>
            ) : (
              <article
                key={project.title}
                className="group panel panel-ticks flex flex-col overflow-hidden"
              >
                <ProjectBody project={project} index={index} />
              </article>
            ),
          )}
        </div>
      </Reveal>
    </section>
  )
}
