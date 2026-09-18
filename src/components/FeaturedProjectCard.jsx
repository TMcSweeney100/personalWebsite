import { ArrowUpRightIcon, GithubIcon } from "lucide-react"

import { Reveal } from "@/components/Reveal"
import { Tag } from "@/components/Tag"
import { Button } from "@/components/ui/button"

function BrowserChrome({ url }) {
  return (
    <div
      aria-hidden="true"
      className="flex items-center gap-2 border-b border-hairline-faint bg-background px-4 py-3">
      <span className="size-[9px] rounded-full bg-foreground/18" />
      <span className="size-[9px] rounded-full bg-foreground/18" />
      <span className="size-[9px] rounded-full bg-foreground/18" />
      <span className="ml-2.5 max-w-[280px] flex-1 truncate rounded-[5px] bg-foreground/6 px-3 py-[5px] font-mono text-[11px] text-muted-foreground">
        {url}
      </span>
    </div>
  )
}

function Screenshot({ screenshot }) {
  if (screenshot) {
    return (
      <img
        src={screenshot.src}
        alt={screenshot.alt}
        width={screenshot.width}
        height={screenshot.height}
        loading="lazy"
        className="block aspect-[1984/600] min-h-[220px] w-full object-cover"
      />
    )
  }
  return (
    <div className="screenshot-placeholder flex aspect-[1984/600] min-h-[220px] items-center justify-center p-4">
      <p className="font-mono text-xs tracking-[0.1em] text-muted-foreground uppercase">
        Screenshot coming soon
      </p>
    </div>
  )
}

function FeaturedProjectCard({ project }) {
  const { links } = project

  return (
    <Reveal
      as="article"
      className="overflow-hidden rounded-[14px] border border-hairline bg-card transition-colors hover:border-primary/45">
      <BrowserChrome url={project.displayUrl} />
      <Screenshot screenshot={project.screenshot} />

      <div className="px-[clamp(20px,3vw,30px)] pt-[clamp(22px,3vw,28px)] pb-[30px]">
        <div className="flex flex-wrap items-start justify-between gap-5">
          <div className="min-w-0">
            <h3 className="font-heading text-[clamp(24px,3.2vw,30px)] leading-[1.12] font-semibold tracking-[-0.022em]">
              {project.title}
            </h3>
            <p className="mt-3 max-w-[60ch] text-[16.5px] leading-[1.65] text-muted-foreground text-pretty">
              {project.summary}
            </p>
          </div>
          {project.live ? (
            <span className="inline-flex flex-none items-center gap-2 rounded-full border border-primary/40 px-3 py-1.5 font-mono text-[10.5px] tracking-[0.14em] text-primary uppercase">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-primary motion-safe:animate-pulse-dot" />
              Live
            </span>
          ) : null}
        </div>

        <ul className="mt-[22px] flex flex-wrap gap-2" aria-label="Built with">
          {project.tags.map((tag) => (
            <li key={tag}>
              <Tag>{tag}</Tag>
            </li>
          ))}
        </ul>

        <div className="mt-[26px] flex flex-wrap items-center gap-3 border-t border-hairline-soft pt-6">
          {links.live ? (
            <Button asChild>
              <a href={links.live} target="_blank" rel="noreferrer">
                {links.liveLabel ?? "Open live site"}
                <ArrowUpRightIcon aria-hidden="true" className="size-3.5" />
              </a>
            </Button>
          ) : null}
          {links.code ? (
            <Button asChild variant="outline" className="border-foreground/18 px-[18px]">
              <a href={links.code} target="_blank" rel="noreferrer">
                <GithubIcon aria-hidden="true" className="size-[15px]" />
                View source
              </a>
            </Button>
          ) : null}
        </div>
      </div>
    </Reveal>
  )
}

export { FeaturedProjectCard }
