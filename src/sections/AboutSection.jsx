import { MetaLabel } from "@/components/MetaLabel"
import { Reveal } from "@/components/Reveal"
import { Section, SectionHeader } from "@/components/Section"
import { profile } from "@/data/profile"

function AboutSection() {
  const { paragraphs, points } = profile.about

  return (
    <Section id="about">
      <SectionHeader title="About" />

      <div className="flex flex-wrap items-start gap-[clamp(32px,5vw,64px)] pb-2">
        <Reveal className="min-w-0 flex-[1_1_440px]">
          {paragraphs.map((paragraph, index) => (
            <p
              key={paragraph}
              className={
                index === 0
                  ? "max-w-[62ch] text-[clamp(16.5px,2vw,18px)] leading-[1.7] text-pretty"
                  : "mt-5 max-w-[62ch] text-[clamp(16.5px,2vw,18px)] leading-[1.7] text-muted-foreground text-pretty"
              }>
              {paragraph}
            </p>
          ))}
        </Reveal>

        <Reveal as="ol" className="min-w-0 flex-[1_1_300px] border-b border-hairline">
          {points.map((point, index) => (
            <li key={point} className="flex gap-4 border-t border-hairline py-3.5">
              <MetaLabel className="w-[26px] flex-none pt-1 text-[10.5px]" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </MetaLabel>
              <p className="text-[15.5px] leading-[1.55]">{point}</p>
            </li>
          ))}
        </Reveal>
      </div>
    </Section>
  )
}

export { AboutSection }
