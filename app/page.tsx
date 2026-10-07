import { SiteNav } from "@/components/site-nav"
import { Hero } from "@/components/hero"
import { Marquee } from "@/components/marquee"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Experience } from "@/components/experience"
import { Contact } from "@/components/contact"
import { CursorGlow } from "@/components/cursor-glow"

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-background">
      <CursorGlow />
      <div className="relative z-10">
        <SiteNav />
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </main>
  )
}
