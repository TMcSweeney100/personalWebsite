import { FeaturedProjectCard } from "@/components/FeaturedProjectCard"
import { ProjectCard } from "@/components/ProjectCard"
import { Reveal } from "@/components/Reveal"
import { Section, SectionHeader } from "@/components/Section"
import { projects } from "@/data/projects"

function ProjectsSection() {
  const featured = projects.find((project) => project.featured)
  const others = projects.filter((project) => project !== featured)

  return (
    <Section id="work">
      {featured ? (
        <>
          <SectionHeader title="Featured project" />
          <FeaturedProjectCard project={featured} />
        </>
      ) : null}

      {others.length > 0 ? (
        <>
          <Reveal className="mt-[clamp(40px,5vw,56px)] pb-[22px]">
            <h2 className="font-mono text-[11px] font-normal tracking-[0.16em] text-muted-foreground uppercase">
              Also built
            </h2>
          </Reveal>
          <div className="flex flex-wrap gap-5">
            {others.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </>
      ) : null}
    </Section>
  )
}

export { ProjectsSection }
