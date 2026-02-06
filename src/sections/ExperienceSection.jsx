import { Section } from "@/components/Section"
import { profile } from "@/data/profile"

function ExperienceSection() {
  return (
    <Section id="experience">
      <div className="mb-8 space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Experience
        </h2>
        <p className="max-w-prose text-pretty text-muted-foreground">
          Keep bullets outcome-oriented (scope, impact, tech). (Placeholders
          below)
        </p>
      </div>

      <ol className="relative space-y-8 border-l pl-6">
        {profile.experience.map((item) => (
          <li key={`${item.company}-${item.role}`} className="relative">
            <span className="absolute -left-[9px] top-1.5 size-4 rounded-full border bg-background" />
            <div className="space-y-1">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="font-semibold tracking-tight">{item.company}</h3>
                <p className="text-sm text-muted-foreground">{item.role}</p>
              </div>
              <p className="text-sm text-muted-foreground">{item.dates}</p>
            </div>

            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="text-pretty">
                  {bullet}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  )
}

export { ExperienceSection }

