import { SiteNav } from "@/components/site-nav"
import { Hero } from "@/components/hero"
import { Marquee } from "@/components/marquee"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Education } from "@/components/education"
import { Experience } from "@/components/experience"
import { Achievements } from "@/components/achievements"
import { Contact } from "@/components/contact"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <SiteNav />
      <Hero />
      <Marquee />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Experience />
      <Achievements />
      <Contact />
    </main>
  )
}
