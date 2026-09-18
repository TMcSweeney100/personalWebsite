import { SiteFooter } from "@/components/SiteFooter"
import { SiteHeader } from "@/components/SiteHeader"
import { AboutSection } from "@/sections/AboutSection"
import { ContactSection } from "@/sections/ContactSection"
import { ExperienceSection } from "@/sections/ExperienceSection"
import { HeroSection } from "@/sections/HeroSection"
import { ProjectsSection } from "@/sections/ProjectsSection"

function App() {
  return (
    <div className="min-h-dvh overflow-x-clip bg-background text-foreground">
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <SiteHeader />

      <main id="main">
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      <SiteFooter />
    </div>
  )
}

export default App
