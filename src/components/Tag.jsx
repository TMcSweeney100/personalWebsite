import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

function Tag({ className, ...props }) {
  return (
    <Badge
      variant="secondary"
      className={cn("rounded-md px-2 py-0.5 font-medium", className)}
      {...props}
    />
  )
}

export { Tag }

