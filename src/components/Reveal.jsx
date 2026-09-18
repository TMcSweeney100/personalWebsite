import { useReveal } from "@/hooks/use-reveal"
import { cn } from "@/lib/utils"

/** Wrapper that fades/slides its content in once when scrolled into view. */
function Reveal({ as = "div", className, ...props }) {
  const Comp = as
  const { ref, visible } = useReveal()
  return (
    <Comp
      ref={ref}
      className={cn("reveal", visible && "is-visible", className)}
      {...props}
    />
  )
}

export { Reveal }
