import { ArrowUpRightIcon } from "lucide-react"

import { MetaLabel } from "@/components/MetaLabel"
import { Reveal } from "@/components/Reveal"
import { Tag } from "@/components/Tag"

/** Secondary project card — everything visible at rest, links pinned to the bottom. */
function ProjectCard({ project }) {
  const { links } = project

  return (
    <Reveal
      as="article"
      className="flex min-w-0 flex-[1_1_380px] flex-col rounded-xl border border-hairline bg-card px-7 py-[26px] transition-colors hover:border-primary/40">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="min-w-0 font-heading text-[21px] font-semibold tracking-[-0.016em]">
          {project.title}
        </h3>
        {project.year ? (
          <MetaLabel className="flex-none text-[10.5px]">{project.year}</MetaLabel>
        ) : null}
      </div>

      <p className="mt-3 text-[15.5px] leading-[1.6] text-muted-foreground text-pretty">
        {project.summary}
      </p>

      <ul className="mt-5 flex flex-wrap gap-2" aria-label="Built with">
        {project.tags.map((tag) => (
          <li key={tag}>
            <Tag size="sm">{tag}</Tag>
          </li>
        ))}
      </ul>

      {links.live || links.code ? (
        <div className="mt-auto flex flex-wrap items-center gap-[22px] pt-6">
          {links.live ? (
            <a
              href={links.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-[14.5px] font-medium text-primary transition-colors hover:text-primary-hover">
              {links.liveLabel ?? "Live site"}
              <ArrowUpRightIcon aria-hidden="true" className="size-[13px]" />
            </a>
          ) : null}
          {links.code ? (
            <a
              href={links.code}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-[14.5px] text-muted-foreground transition-colors hover:text-foreground">
              Source
              <span className="sr-only"> for {project.title}</span>
            </a>
          ) : null}
        </div>
      ) : null}
    </Reveal>
  )
}

export { ProjectCard }
