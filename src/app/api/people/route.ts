import fs from "fs"
import path from "path"
import { NextRequest, NextResponse } from "next/server"
import { Person } from "components/Person"

export async function GET(request: NextRequest) {
  const cacheOption = request.cache
  console.log("----------------- CACHE MISS -------- Cache type: " + cacheOption)

  const searchParams = request.nextUrl.searchParams
  const id = searchParams.get("id") ?? "1"

  try {
    const response = fs.readFileSync(path.join(process.cwd(), "public", "people.json"), "utf-8")
    const data = JSON.parse(response) as Person[]
    return new NextResponse(JSON.stringify(data[+id - 1], null, 2), { status: 200 })
  } catch (err) {
    console.log(err)
    return new NextResponse("Could not return result", { status: 400 })
  }
}