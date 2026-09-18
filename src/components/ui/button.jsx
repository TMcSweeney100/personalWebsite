/* eslint-disable react-refresh/only-export-components */
import { cva } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex shrink-0 touch-manipulation items-center justify-center gap-2.5 whitespace-nowrap rounded-lg font-medium transition-[color,background-color,border-color,transform] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary-hover",
        outline:
          "border border-foreground/20 text-foreground hover:border-primary hover:bg-primary/6",
        ghost: "text-foreground hover:bg-foreground/7",
        icon: "text-muted-foreground hover:bg-foreground/6 hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-10 px-[18px] text-sm",
        default: "h-11 px-5 text-[14.5px]",
        lg: "h-12 px-6 text-[15px]",
        xl: "h-[50px] px-6 text-[15px]",
        icon: "size-11 focus-visible:outline-offset-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
