import { ArrowDownIcon, MailIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Section } from "@/components/Section"
import { Tag } from "@/components/Tag"
import { profile } from "@/data/profile"

function HeroSection() {
  return (
    <Section
      id="top"
      className="py-16 sm:py-24"
      containerClassName="grid items-start gap-10 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="space-y-6">
        <div className="space-y-3">
          <p className="text-sm font-medium text-muted-foreground">
            {profile.heroKicker}
          </p>
          <h1 className="text-pretty text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            {profile.name} - {profile.role}
          </h1>
          <p className="max-w-prose text-pretty text-base text-muted-foreground sm:text-lg">
            {profile.valueProposition}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {profile.highlights.map((highlight) => (
            <Tag key={highlight} className="bg-muted text-foreground">
              {highlight}
            </Tag>
          ))}
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild className="sm:w-auto">
            <a href="#projects">
              <ArrowDownIcon />
              View Projects
            </a>
          </Button>
          <Button asChild variant="outline" className="sm:w-auto">
            <a href="#contact">
              <MailIcon />
              Contact
            </a>
          </Button>
        </div>
      </div>

      <div className="rounded-2xl border bg-muted/30 p-6">
        <h2 className="text-base font-semibold tracking-tight">
          {profile.snapshot.title}
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          {profile.snapshot.description}
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm">
          {profile.snapshot.bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </Section>
  )
}

export { HeroSection }
