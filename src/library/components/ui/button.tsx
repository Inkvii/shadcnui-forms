import * as React from "react"
import { Slot } from "@radix-ui/react-slot"

import { cn } from "@/library/lib/utils"
import type { ButtonHTMLAttributes } from "react"
import type { HueVariant } from "@/library/HueVariant"



//@tw
export const theme = {
  solid: ["bg-hue-700 text-hue-50"],
  outline: ["bg-background text-hue-700 border border-hue-700"],
  ghost: ["hover:bg-hue-100 hover:text-hue-600"],
  link: "text-hue-700 underline-offset-4 hover:underline"
}

export const defaultTheme = [
  "inline-flex items-center justify-center gap-2 cursor-pointer",
  "whitespace-nowrap rounded-md text-sm font-medium",
  "transition-colors",
  "focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2",
  "ring-offset-primary-50",
  "disabled:pointer-events-none disabled:opacity-50",
  "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
]
//@tw-end

//@tw
export const sizeTheme = {
  sm: "h-9 px-3",
  md: "h-10 px-4 py-2",
  lg: "h-11 px-8",
  icon: "h-10 w-10",
}
//@tw-end

export type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: keyof typeof theme
  hue: HueVariant,
  size?: keyof typeof sizeTheme
  asChild?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, Props>(
  ({ className, variant, hue, size = "md", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(defaultTheme, theme[variant], sizeTheme[size], hue, className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

// cva sucks
// ----------------------
// const buttonVariants = cva(
//   "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
//   {
//     variants: {
//       variant: {
//         default: "primary bg-hue-600 text-hue-50 hover:bg-hue-500",
//         destructive:
//           "danger bg-hue-600 text-hue-50 hover:bg-hue-500",
//         outline:
//           "border border-hue-600 text-hue-50 bg-background hover:bg-hue-200",
//         secondary:
//           "secondary text-hue-600 hover:bg-hue-500",
//         ghost: "hover:bg-accent hover:text-accent-foreground",
//         link: "text-primary underline-offset-4 hover:underline",
//       },
//       size: {
//         default: "h-10 px-4 py-2",
//         sm: "h-9 rounded-md px-3",
//         lg: "h-11 rounded-md px-8",
//         icon: "h-10 w-10",
//       },
//     },
//     defaultVariants: {
//       variant: "default",
//       size: "default",
//     },
//   }
// )