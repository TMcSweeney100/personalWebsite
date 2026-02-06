import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Section } from "@/components/Section"
import { profile } from "@/data/profile"

function ContactSection() {
  return (
    <Section id="contact">
      <div className="mb-8 space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Contact
        </h2>
        <p className="max-w-prose text-pretty text-muted-foreground">
          Make it frictionless. One click to email, plus social links.
        </p>
      </div>

      <div className="grid gap-6 rounded-2xl border bg-muted/30 p-6 sm:p-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Email</p>
            <p className="font-medium">{profile.contact.email}</p>
          </div>

          <Button asChild size="lg" className="sm:w-auto">
            <a href={`mailto:${profile.contact.email}`}>
              <MailIcon />
              Email me
            </a>
          </Button>
        </div>

        <div className="grid gap-2 sm:grid-cols-2">
          <Button asChild variant="outline" size="lg">
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
              <LinkedinIcon />
              LinkedIn
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href={profile.links.github} target="_blank" rel="noreferrer">
              <GithubIcon />
              GitHub
            </a>
          </Button>
        </div>

        <p className="text-sm text-muted-foreground">
          {profile.contact.location} 
        </p>
      </div>
    </Section>
  )
}

export { ContactSection }

