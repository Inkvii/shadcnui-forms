"use client"

import { type SubmitHandler, useForm } from "react-hook-form"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/library/ui/form"
import { Input } from "@/library/ui/input"
import { z } from "zod"
import { addYears } from "date-fns"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/library/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/library/ui/select"
import { Switch } from "@/library/ui/switch"
import { DatePicker } from "@/library/datepicker/DatePicker"

const animals = ["Cat", "Owl", "Toad"] as const

const formSchema = z.object({
  username: z.string().min(2, "Too short").max(50, "We dont need your titles"),
  password: z
    .string({
      description: "Check your length",
    })
    .min(3, "Hacked in seconds")
    .min(5, "Hacked in hours")
    .min(8, "Hacked in days")
    .min(10, "Almost there")
    .max(20, "Too long"),
  dateOfBirth: z.date().min(addYears(new Date(), -18), "Not adult yet, go away"),
  acceptTerms: z.boolean().refine((val) => val, { message: "You cant continue without accepting terms" }),
  favouriteAnimal: z.enum(animals, {
    message: "Hogwarts accepts only these animals",
  }),
})

type FormSchema = z.infer<typeof formSchema>

export function FormContainer() {
  const form = useForm<FormSchema>({
    mode: "onBlur",
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
      favouriteAnimal: undefined,
      dateOfBirth: new Date(),
      acceptTerms: false,
    },
  })

  const onSubmit: SubmitHandler<FormSchema> = async (data) => {
    alert(JSON.stringify(data, null, 2))
  }

  return (
    <div className={"w-1/2 mx-auto p-8 bg-white rounded-lg shadow"}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className={"flex flex-col gap-4"}>
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>Not suspicious at all</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input {...field} type={"password"} />
                </FormControl>
                <FormDescription>Insert password</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="dateOfBirth"
            render={({ field }) => (
              <FormItem className={"flex flex-col gap-1"}>
                <FormLabel>Date of birth</FormLabel>
                <DatePicker value={field.value} onChange={field.onChange} />
                <FormDescription>Your date of birth is used to calculate your age.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="favouriteAnimal"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Favourite animal</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a verified email to display" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {Object.values(animals).map((animal) => {
                      return (
                        <SelectItem key={animal} value={animal}>
                          {animal}
                        </SelectItem>
                      )
                    })}
                  </SelectContent>
                </Select>
                <FormDescription>You must pick one</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="acceptTerms"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <FormLabel className="text-base">Accept terms and conditions</FormLabel>
                  <FormDescription>
                    By accepting, you are hereby obliged to pay 10k € over the next 10 years
                  </FormDescription>
                  <FormMessage />
                </div>
                <FormControl>
                  <Switch checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type={"submit"}>Sign your soul away</Button>
        </form>
      </Form>
    </div>
  )
}
