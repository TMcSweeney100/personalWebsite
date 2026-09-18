import { MetaLabel } from "@/components/MetaLabel"
import { Reveal } from "@/components/Reveal"
import { cn } from "@/lib/utils"

/** The 1120px page container with fluid side gutters. */
function Container({ className, ...props }) {
  return (
    <div
      className={cn("mx-auto w-full max-w-[1120px] px-[clamp(20px,5vw,64px)]", className)}
      {...props}
    />
  )
}

/** A page section: anchor target (cleared of the sticky header) wrapping a Container. */
function Section({ id, className, containerClassName, children, ...props }) {
  return (
    <section id={id} className={cn("scroll-mt-[84px]", className)} {...props}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  )
}

/** Section opener: top hairline, heading left, optional mono label right. */
function SectionHeader({ title, meta, className }) {
  return (
    <Reveal
      className={cn(
        "mt-[clamp(52px,7vw,72px)] flex flex-wrap items-baseline justify-between gap-5 border-t border-hairline py-[26px]",
        className
      )}>
      <h2 className="font-heading text-[clamp(20px,2.6vw,24px)] font-semibold tracking-[-0.012em]">
        {title}
      </h2>
      {meta ? <MetaLabel>{meta}</MetaLabel> : null}
    </Reveal>
  )
}

export { Container, Section, SectionHeader }
