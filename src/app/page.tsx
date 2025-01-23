import Routes from "router/routes"
import Header from "@/library/header/Header"
import { ButtonLink } from "@/library/button/ButtonLink"
import { urlTo } from "@/library/router/urlTo"

export default async function Home() {
  return (
    <main className={"px-page-default"}>
      <Header name={"Welcome page"} breadcrumbs={[]} />

      <ButtonLink url={urlTo({ route: Routes.people.list })} variant={"solid"}>
        Go to people list
      </ButtonLink>
    </main>
  )
}
