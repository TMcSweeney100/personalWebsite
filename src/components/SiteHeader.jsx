import { GithubIcon, LinkedinIcon, MenuIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { profile } from "@/data/profile"

const navItems = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
]

function SiteHeader() {
  return (
    <header className="supports-[backdrop-filter]:bg-background/80 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-background focus:px-3 focus:py-2 focus:text-sm focus:shadow-sm">
        Skip to content
      </a>

      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <a href="#top" className="font-semibold tracking-tight">
          {profile.name}
        </a>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button asChild variant="outline">
            <a href={profile.links.cv} target="_blank" rel="noreferrer">
              View CV
            </a>
          </Button>

          <Button asChild variant="ghost" size="icon" aria-label="GitHub">
            <a href={profile.links.github} target="_blank" rel="noreferrer">
              <GithubIcon />
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon" aria-label="LinkedIn">
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
              <LinkedinIcon />
            </a>
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open menu">
                <MenuIcon />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[320px] sm:w-[360px]">
              <SheetHeader className="border-b">
                <SheetTitle>{profile.name}</SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-6 p-4">
                <nav className="flex flex-col gap-3" aria-label="Mobile">
                  {navItems.map((item) => (
                    <SheetClose asChild key={item.href}>
                      <a
                        href={item.href}
                        className="rounded-md px-2 py-2 text-sm font-medium text-foreground hover:bg-accent focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50">
                        {item.label}
                      </a>
                    </SheetClose>
                  ))}
                </nav>

                <div className="grid gap-2">
                  <Button asChild>
                    <a href={profile.links.cv} target="_blank" rel="noreferrer">
                      View CV
                    </a>
                  </Button>
                  <div className="grid grid-cols-2 gap-2">
                    <Button asChild variant="outline">
                      <a
                        href={profile.links.github}
                        target="_blank"
                        rel="noreferrer">
                        <GithubIcon />
                        GitHub
                      </a>
                    </Button>
                    <Button asChild variant="outline">
                      <a
                        href={profile.links.linkedin}
                        target="_blank"
                        rel="noreferrer">
                        <LinkedinIcon />
                        LinkedIn
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

export { SiteHeader }
