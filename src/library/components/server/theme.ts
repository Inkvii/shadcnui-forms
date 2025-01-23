"use server"
import { cookies } from "next/headers"

const themeKey = "theme"

export async function toggleTheme() {
  const cookieStore = await cookies()
  const theme = cookieStore.get(themeKey)

  cookieStore.set(themeKey, theme?.value === "dark" ? "light" : "dark", { maxAge: 34560000 })
}

export async function getTheme() {
  const cookieStore = await cookies()
  const theme = cookieStore.get(themeKey)

  console.debug(`> getTheme - ${theme?.value}`)

  return theme?.value ?? "light"
}
