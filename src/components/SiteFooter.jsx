import { profile } from "@/data/profile"

function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>
          © {year} {profile.name}. {profile.footer.copyright}
        </p>
        <p>
          {profile.footer.note}{" "}
          <code className="rounded bg-muted px-1 py-0.5">
            {profile.footer.notePath}
          </code>
          .
        </p>
      </div>
    </footer>
  )
}

export { SiteFooter }
