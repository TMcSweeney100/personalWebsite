import { GithubIcon, LinkedinIcon, MenuIcon } from "lucide-react"

import { CvLink } from "@/components/CvLink"
import { Container } from "@/components/Section"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { profile } from "@/data/profile"
import { useActiveSection } from "@/hooks/use-active-section"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Work", id: "work" },
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
]

// "top" is observed too so nothing is highlighted while the hero is in view.
const sectionIds = ["top", ...navItems.map((item) => item.id)]

function SocialLinks({ className }) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <Button asChild variant="icon" size="icon">
        <a href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
          <GithubIcon aria-hidden="true" className="size-[18px]" />
        </a>
      </Button>
      <Button asChild variant="icon" size="icon">
        <a
          href={profile.links.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn profile">
          <LinkedinIcon aria-hidden="true" className="size-[18px]" />
        </a>
      </Button>
    </div>
  )
}

function SiteHeader() {
  const active = useActiveSection(sectionIds)

  return (
    <header className="sticky top-0 z-50 border-b border-hairline-soft bg-background/86 backdrop-blur-[10px]">
      <Container className="flex h-[68px] items-center justify-between gap-5">
        <a
          href="#top"
          className="font-heading text-base font-semibold tracking-[-0.01em] text-foreground transition-colors hover:text-primary focus-visible:outline-offset-4">
          {profile.nameNoBreak}
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => {
            const isActive = active === item.id
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={isActive ? "location" : undefined}
                className={cn(
                  "font-mono text-[11px] uppercase tracking-[0.12em] transition-colors hover:text-foreground focus-visible:outline-offset-4",
                  isActive ? "text-foreground" : "text-muted-foreground"
                )}>
                {item.label}
              </a>
            )
          })}
        </nav>

        <div className="flex items-center gap-2.5">
          <SocialLinks className="hidden lg:flex" />
          <CvLink size="sm" className="focus-visible:outline-offset-2" />

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="icon" size="icon" className="md:hidden" aria-label="Open menu">
                <MenuIcon aria-hidden="true" className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] overscroll-contain border-hairline shadow-none">
              <SheetHeader className="border-b border-hairline-soft">
                <SheetTitle className="font-heading">{profile.nameNoBreak}</SheetTitle>
                <SheetDescription className="sr-only">Site navigation</SheetDescription>
              </SheetHeader>

              <nav aria-label="Mobile" className="flex flex-col px-4">
                {navItems.map((item) => (
                  <SheetClose asChild key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="border-b border-hairline-faint py-3.5 font-heading text-lg font-medium text-foreground transition-colors hover:text-primary">
                      {item.label}
                    </a>
                  </SheetClose>
                ))}
              </nav>

              <div className="flex flex-col gap-2 px-4">
                <Button asChild variant="outline">
                  <a href={profile.links.github} target="_blank" rel="noreferrer">
                    <GithubIcon aria-hidden="true" />
                    GitHub
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
                    <LinkedinIcon aria-hidden="true" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  )
}

export { SiteHeader }
