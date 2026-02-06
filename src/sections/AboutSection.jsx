import { Section } from "@/components/Section"
import { profile } from "@/data/profile"

function AboutSection() {
  return (
    <Section id="about">
      <div className="mb-8 space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          About
        </h2>
        <p className="max-w-prose text-pretty text-muted-foreground">
          Keep this brief (3-5 sentences). Recruiters scan fast.
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-2">
        <div className="space-y-3">
          <p className="text-pretty">{profile.about}</p>
        </div>

        <div className="rounded-2xl border bg-muted/30 p-6">
          <h3 className="text-sm font-semibold tracking-tight">
            Strengths / what I'm good at
          </h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
            {profile.strengths.map((item) => (
              <li key={item} className="text-pretty">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}

export { AboutSection }
