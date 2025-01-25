"use client"

import * as React from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"

import { Button } from "@/library/ui/button"
import { cn } from "@/library/lib/utils"
import { Popover, PopoverContent, PopoverTrigger } from "@/library/ui/popover"
import { Calendar } from "@/library/ui/calendar"
import { FormControl } from "@/library/ui/form"
import type { SelectSingleEventHandler } from "react-day-picker"

type Props = {
  value: Date | undefined
  onChange: SelectSingleEventHandler
}

export function DatePicker(props: Props) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <FormControl>
          <Button
            hue={"neutral"}
            variant={"outline"}
            className={cn("w-[240px] pl-3 text-left font-normal border-neutral-400", !props.value && "text-neutral-400")}
          >
            {props.value ? format(props.value, "PPP") : <span>Pick a date</span>}
            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
          </Button>
        </FormControl>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={props.value}
          onSelect={props.onChange}
          disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
