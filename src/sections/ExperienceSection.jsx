import { MetaLabel } from "@/components/MetaLabel"
import { Reveal } from "@/components/Reveal"
import { Section, SectionHeader } from "@/components/Section"
import { profile } from "@/data/profile"
import { cn } from "@/lib/utils"

function ExperienceEntry({ entry, isLast }) {
  return (
    <Reveal
      as="article"
      className={cn(
        "flex flex-wrap gap-[clamp(20px,4vw,48px)] border-t border-hairline py-[26px]",
        isLast && "border-b"
      )}>
      <div className="min-w-0 flex-[1_1_220px]">
        {/* Accent date = current role. That colour switch is the only "current" marker here. */}
        <MetaLabel
          as="p"
          className={cn("tracking-[0.1em]", entry.current && "text-primary")}>
          {entry.dates}
        </MetaLabel>
        <p className="mt-2.5 font-heading text-xl font-semibold tracking-[-0.014em]">
          {entry.company}
        </p>
        <p className="mt-[5px] text-[14.5px] text-muted-foreground">{entry.location}</p>
      </div>

      <div className="min-w-0 flex-[1_1_440px]">
        <h3 className="font-heading text-[17px] font-semibold tracking-[-0.01em]">{entry.role}</h3>
        {entry.summary ? (
          <p className="mt-2.5 max-w-[62ch] text-base leading-[1.65] text-muted-foreground text-pretty">
            {entry.summary}
          </p>
        ) : null}
        {entry.bullets.length > 0 ? (
          <ul className="mt-3 flex flex-col gap-2.5">
            {entry.bullets.map((bullet) => (
              <li
                key={bullet}
                className="flex max-w-[62ch] gap-3 text-base leading-[1.6] text-muted-foreground text-pretty">
                <span aria-hidden="true" className="mt-[9px] size-[5px] flex-none rounded-full bg-primary" />
                {bullet}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </Reveal>
  )
}

function ExperienceSection() {
  const entries = profile.experience

  return (
    <Section id="experience">
      <SectionHeader title="Experience" meta={profile.experienceRange} />
      {entries.map((entry, index) => (
        <ExperienceEntry
          key={`${entry.company}-${entry.role}`}
          entry={entry}
          isLast={index === entries.length - 1}
        />
      ))}
    </Section>
  )
}

export { ExperienceSection }
