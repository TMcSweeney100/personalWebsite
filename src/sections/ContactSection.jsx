import { MailIcon } from "lucide-react"

import { CvLink } from "@/components/CvLink"
import { HairlineCell, HairlineGrid } from "@/components/HairlineGrid"
import { MetaLabel } from "@/components/MetaLabel"
import { Reveal } from "@/components/Reveal"
import { Section } from "@/components/Section"
import { Button } from "@/components/ui/button"
import { profile } from "@/data/profile"

const detailLinkClass =
  "mt-[7px] inline-block text-[15.5px] text-foreground transition-colors hover:text-primary"

function ContactSection() {
  const { contact, links } = profile

  return (
    <Section id="contact" className="pb-[clamp(56px,8vw,88px)]">
      <Reveal className="mt-[clamp(52px,7vw,72px)] rounded-[14px] border border-hairline bg-card px-[clamp(24px,4vw,44px)] py-[clamp(36px,5vw,52px)]">
        <div className="flex flex-wrap items-end justify-between gap-[clamp(28px,5vw,56px)]">
          <div className="min-w-0 flex-[1_1_420px]">
            <MetaLabel className="tracking-[0.16em]">Contact</MetaLabel>
            <h2 className="mt-4 max-w-[26ch] font-heading text-[clamp(28px,4vw,40px)] leading-[1.1] font-semibold tracking-[-0.026em] text-balance">
              {contact.heading}
            </h2>
            <p className="mt-4 max-w-[50ch] text-[16.5px] leading-[1.65] text-muted-foreground text-pretty">
              {contact.blurb}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button asChild size="xl" className="hover:-translate-y-px">
              <a href={`mailto:${contact.email}`}>
                <MailIcon aria-hidden="true" />
                Email me
              </a>
            </Button>
            <CvLink size="xl" arrow className="px-[22px]" />
          </div>
        </div>

        <HairlineGrid className="-mx-5 mt-[clamp(32px,4vw,44px)] bg-hairline-soft">
          <HairlineCell className="flex-[1_1_220px] bg-card px-5 py-[18px]">
            <MetaLabel as="p" className="text-[10.5px]">
              Email
            </MetaLabel>
            <a href={`mailto:${contact.email}`} className={detailLinkClass}>
              {contact.email}
            </a>
          </HairlineCell>
          <HairlineCell className="flex-[1_1_160px] bg-card px-5 py-[18px]">
            <MetaLabel as="p" className="text-[10.5px]">
              GitHub
            </MetaLabel>
            <a href={links.github} target="_blank" rel="noreferrer" className={detailLinkClass}>
              {links.githubHandle}
            </a>
          </HairlineCell>
          <HairlineCell className="flex-[1_1_160px] bg-card px-5 py-[18px]">
            <MetaLabel as="p" className="text-[10.5px]">
              LinkedIn
            </MetaLabel>
            <a href={links.linkedin} target="_blank" rel="noreferrer" className={detailLinkClass}>
              {links.linkedinHandle}
            </a>
          </HairlineCell>
        </HairlineGrid>
      </Reveal>
    </Section>
  )
}

export { ContactSection }
