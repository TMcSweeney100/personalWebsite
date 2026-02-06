import { Section } from "@/components/Section"
import { ProjectCard } from "@/components/ProjectCard"
import { projects } from "@/data/projects"

function ProjectsSection() {
  return (
    <Section id="projects">
      <div className="mb-8 space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Projects
        </h2>
        <p className="max-w-prose text-pretty text-muted-foreground">
          2-3 projects is usually enough. Keep summaries crisp and focus on
          impact. (Placeholders below)
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <p className="mt-6 text-sm text-muted-foreground">
        Edit these projects in{" "}
        <code className="rounded bg-muted px-1 py-0.5">src/data/projects.js</code>
        .
      </p>
    </Section>
  )
}

export { ProjectsSection }
