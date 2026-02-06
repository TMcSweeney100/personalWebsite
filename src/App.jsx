
import "./App.css"

import { SiteFooter } from "@/components/SiteFooter"
import { SiteHeader } from "@/components/SiteHeader"
import { AboutSection } from "@/sections/AboutSection"
import { ContactSection } from "@/sections/ContactSection"
import { ExperienceSection } from "@/sections/ExperienceSection"
import { HeroSection } from "@/sections/HeroSection"
import { ProjectsSection } from "@/sections/ProjectsSection"
import { SkillsSection } from "@/sections/SkillsSection"

function App() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <SiteHeader />

      <main id="main" className="divide-y divide-border">
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      <SiteFooter />
    </div>
  )
}

export default App
