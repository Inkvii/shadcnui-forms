"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"

import { cn } from "@/library/lib/utils"
import { theme, defaultTheme } from "@/library/ui/button"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3 neutral", className)}
      //@tw
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          defaultTheme, theme.ghost,
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell:
          "text-hue-800 rounded-md w-9 font-normal text-sm",
        row: "flex w-full mt-2",
        cell: cn("h-9 w-9 text-center text-sm p-0 relative",
          "rounded-lg overflow-hidden",
          "[&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-hue-50 [&:has([aria-selected])]:bg-hue-400",
          "first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md",
          "focus-within:relative focus-within:z-20"
        ),
        day: cn(
          theme.ghost,
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100"
        ),
        day_range_end: "day-range-end",
        day_selected:
          "bg-primary-600 text-primary-50 hover:bg-primary-600 hover:text-primary-50 focus:bg-primary-600 focus:text-primary-50",
        day_today: "bg-primary-500 text-white",
        day_outside:
          "day-outside text-hue-700 aria-selected:bg-hue-400/50 aria-selected:text-hue-700",
        day_disabled: "text-hue-700 opacity-50",
        day_range_middle:
          "aria-selected:bg-hue-400 aria-selected:text-hue-50",
        day_hidden: "invisible",
        ...classNames,
      }}
      //@tw-end
      components={{
        IconLeft: ({ className, ...props }) => (
          <ChevronLeft className={cn("h-4 w-4", className)} {...props} />
        ),
        IconRight: ({ className, ...props }) => (
          <ChevronRight className={cn("h-4 w-4", className)} {...props} />
        ),
      }}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

export { Calendar }
