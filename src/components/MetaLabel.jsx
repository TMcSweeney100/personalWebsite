import { cn } from "@/lib/utils"

/**
 * Small uppercase JetBrains Mono label — eyebrows, dates, field labels, footer.
 * Uppercasing is done in CSS so the source text stays readable to screen readers.
 */
function MetaLabel({ as = "span", className, ...props }) {
  const Comp = as
  return (
    <Comp
      className={cn(
        "font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

export { MetaLabel }
