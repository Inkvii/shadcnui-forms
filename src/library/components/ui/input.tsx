import * as React from "react"

import { cn } from "@/library/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex px-4 py-2 h-10 w-full",
          "rounded-md border border-hue-400",
          "bg-background",
          "file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground",
          "placeholder:text-neutral-500",
          "focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2",
          "ring-offset-primary-50",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
