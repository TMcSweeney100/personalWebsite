import { cn } from "@/lib/utils"

/**
 * Gap-as-rule grid: the wrapper is painted hairline colour, the cells are painted the
 * surface colour, and the 1px gap between them is the rule. Cells should set their
 * own surface background and padding; wrap the grid in a negative horizontal margin
 * equal to the cell padding so the outer edges align with the container.
 */
function HairlineGrid({ className, ...props }) {
  return <div className={cn("flex flex-wrap gap-px bg-hairline", className)} {...props} />
}

function HairlineCell({ className, ...props }) {
  return <div className={cn("min-w-0", className)} {...props} />
}

export { HairlineGrid, HairlineCell }
