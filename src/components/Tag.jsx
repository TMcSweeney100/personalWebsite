import { cn } from "@/lib/utils"

/** Outlined pill for tech tags. `size="sm"` is the secondary-card variant. */
function Tag({ className, size = "md", ...props }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-foreground/18 text-foreground",
        size === "sm" ? "px-[11px] py-1 text-xs" : "px-3 py-1 text-[12.5px]",
        className
      )}
      {...props}
    />
  )
}

export { Tag }
