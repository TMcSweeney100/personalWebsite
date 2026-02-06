import { ChevronDownIcon, ExternalLinkIcon, GithubIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Tag } from "@/components/Tag"

function ProjectCard({ project }) {
  return (
    <Card className="h-full transition-colors hover:border-primary/30 focus-within:border-primary/40">
      <CardHeader className="pb-4">
        <CardTitle className="text-base sm:text-lg">{project.title}</CardTitle>
        <CardDescription className="text-pretty">
          {project.summary}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col gap-4">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>

        <details className="group rounded-lg border bg-muted/30 px-4 py-3 transition-colors hover:border-primary/20">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3 rounded-md text-sm font-medium outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50">
            <span>Details</span>
            <ChevronDownIcon className="size-4 text-muted-foreground transition-transform group-open:rotate-180" />
          </summary>

          <div className="mt-3 grid gap-4 text-sm">
            <div>
              <p className="text-xs font-semibold tracking-wide text-muted-foreground">
                Problem / Goal
              </p>
              <p className="mt-1 text-pretty">{project.details.problem}</p>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-wide text-muted-foreground">
                What I built
              </p>
              <p className="mt-1 text-pretty">{project.details.built}</p>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-wide text-muted-foreground">
                My contribution
              </p>
              <p className="mt-1 text-pretty">{project.details.contribution}</p>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-wide text-muted-foreground">
                Key features
              </p>
              <ul className="mt-1 list-disc space-y-1 pl-5">
                {project.details.features.map((feature) => (
                  <li key={feature} className="text-pretty">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-wide text-muted-foreground">
                Learnings
              </p>
              <p className="mt-1 text-pretty">{project.details.learnings}</p>
            </div>
          </div>
        </details>
      </CardContent>

      <CardFooter className="mt-auto flex-col gap-2 pt-2 sm:flex-row">
      <div>

        <Button asChild variant="outline" className="w-full">
          <a
            href={project.links.demo}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open live demo for ${project.title}`}>
            <ExternalLinkIcon />
            Live Demo
          </a>
        </Button>
      </div>
      <div>

        <Button asChild variant="outline" className="w-full">
          <a
            href={project.links.code}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open source code for ${project.title}`}>
            <GithubIcon />
            Code
          </a>
        </Button>
      </div>
      </CardFooter>
    </Card>
  )
}

export { ProjectCard }
