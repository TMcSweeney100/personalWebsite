import { CvLink } from "@/components/CvLink"
import { HairlineCell, HairlineGrid } from "@/components/HairlineGrid"
import { MetaLabel } from "@/components/MetaLabel"
import { Section } from "@/components/Section"
import { Button } from "@/components/ui/button"
import { profile } from "@/data/profile"

function SkillsStrip() {
  return (
    <HairlineGrid className="-mx-[18px] mt-[34px]">
      {profile.skills.map((skill) => (
        <HairlineCell key={skill.label} className="flex-[1_1_200px] bg-background px-[18px] py-4">
          <MetaLabel as="p" className="text-[10.5px]">
            {skill.label}
          </MetaLabel>
          <p className="mt-[7px] text-[15px] leading-normal">
            {skill.value}
            <span className="block text-[13.5px] text-muted-foreground">{skill.sub}</span>
          </p>
        </HairlineCell>
      ))}
    </HairlineGrid>
  )
}

function CurrentlyPanel() {
  const { currently, education, contact } = profile

  return (
    <aside
      aria-label="Currently"
      className="min-w-0 flex-[1_1_380px] rounded-xl border border-hairline bg-card px-[30px] py-7">
      <div className="flex items-center justify-between gap-4 border-b border-hairline-soft pb-[18px]">
        <MetaLabel className="tracking-[0.16em]">Currently</MetaLabel>
        <span aria-hidden="true" className="size-[7px] rounded-full bg-primary motion-safe:animate-pulse-dot" />
      </div>

      <div className="flex gap-4 pt-[22px] pb-5">
        <span aria-hidden="true" className="mt-[7px] size-[9px] flex-none rounded-full bg-primary" />
        <div className="min-w-0">
          <p className="font-heading text-[19px] font-semibold tracking-[-0.012em]">
            {currently.company}
          </p>
          <p className="mt-[5px] text-[15px]">{currently.role}</p>
          <MetaLabel as="p" className="mt-[5px] text-[11.5px] tracking-[0.06em]">
            {currently.dates}
          </MetaLabel>
        </div>
      </div>

      <div className="border-t border-hairline-soft py-5">
        <MetaLabel as="p" className="mb-4 tracking-[0.16em]">
          Education
        </MetaLabel>
        {education.map((entry) => (
          <div key={entry.degree} className="flex gap-4">
            {/* Hollow dot = past; solid accent dot = current. */}
            <span
              aria-hidden="true"
              className="mt-[7px] size-[9px] flex-none rounded-full border-[1.5px] border-foreground/35"
            />
            <div className="min-w-0">
              <p className="text-[15.5px] font-medium">{entry.degree}</p>
              <p className="mt-[3px] text-sm text-muted-foreground">
                {entry.institution} · {entry.grade}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-4 border-t border-hairline-soft pt-5">
        <MetaLabel className="text-[10.5px]">{contact.location}</MetaLabel>
        <span aria-hidden="true" className="h-3 w-px bg-foreground/20" />
        <MetaLabel
          as="a"
          href="#contact"
          className="text-[10.5px] transition-colors hover:text-primary">
          {contact.email}
        </MetaLabel>
      </div>
    </aside>
  )
}

function HeroSection() {
  return (
    <Section
      id="top"
      className="pt-[clamp(48px,7vw,76px)]"
      containerClassName="flex flex-wrap items-start gap-[clamp(32px,5vw,56px)]">
      <div className="min-w-0 flex-[1_1_460px]">
        <p className="inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.14em] text-primary">
          <span aria-hidden="true" className="size-[7px] rounded-full bg-primary" />
          {profile.eyebrow}
        </p>

        <h1 className="mt-[22px] font-heading text-[clamp(38px,6.2vw,60px)] leading-[1.04] font-semibold tracking-[-0.03em] text-balance">
          {profile.nameNoBreak}
        </h1>

        <p className="mt-[22px] max-w-[44ch] text-[clamp(17px,2vw,19px)] leading-[1.6] text-pretty">
          {profile.lede}
        </p>

        <SkillsStrip />

        <div className="mt-8 flex flex-wrap items-center gap-3.5">
          <Button asChild size="lg" className="hover:-translate-y-px">
            <a href="#work">View projects</a>
          </Button>
          <CvLink variant="ghost" size="lg" arrow className="px-5" />
        </div>
      </div>

      <CurrentlyPanel />
    </Section>
  )
}

export { HeroSection }
