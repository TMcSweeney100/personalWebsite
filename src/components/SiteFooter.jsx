import { MetaLabel } from "@/components/MetaLabel"
import { Container } from "@/components/Section"
import { profile } from "@/data/profile"

function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-hairline-soft">
      <Container className="flex flex-wrap items-center justify-between gap-4 py-[26px]">
        <MetaLabel as="p" className="tracking-[0.1em]">
          © {year} {profile.name}
        </MetaLabel>
      </Container>
    </footer>
  )
}

export { SiteFooter }
