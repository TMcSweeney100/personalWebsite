import { Section } from "@/components/Section"
import { Tag } from "@/components/Tag"
import { profile } from "@/data/profile"

function SkillGroup({ title, items }) {
  return (
    <div className="rounded-2xl border bg-card p-6">
      <h3 className="text-sm font-semibold tracking-tight">{title}</h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((skill) => (
          <Tag key={skill}>{skill}</Tag>
        ))}
      </div>
    </div>
  )
}

function SkillsSection() {
  const { frontend, backend, tools } = profile.skills

  return (
    <Section id="skills">
      <div className="mb-8 space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Skills
        </h2>
        <p className="max-w-prose text-pretty text-muted-foreground">
          Grouped for readability. Keep it scannable and relevant to your target
          roles.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <SkillGroup title="Frontend" items={frontend} />
        <SkillGroup title="Backend" items={backend} />
        <SkillGroup title="Tools / Practices" items={tools} />
      </div>
    </Section>
  )
}

export { SkillsSection }

