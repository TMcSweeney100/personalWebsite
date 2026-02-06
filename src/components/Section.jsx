import { cn } from "@/lib/utils"

function Section({
  id,
  children,
  className,
  containerClassName,
  ...props
}) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-24 py-14 sm:py-20", className)}
      {...props}>
      <div
        className={cn(
          "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8",
          containerClassName
        )}>
        {children}
      </div>
    </section>
  )
}

export { Section }
