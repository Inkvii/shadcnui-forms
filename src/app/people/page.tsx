import Routes from "router/routes"
import { ButtonLink } from "@/library/button/ButtonLink"
import { urlTo } from "@/library/router/urlTo"
import PersistentMessage from "@/library/feedback/PersistentMessage"

export default function PeopleListPage() {
  return (
    <main className={"p-page-default"}>
      <PersistentMessage hue={"secondary"}>
        This is incrementally revalidated page (60 sec) ISR
        <div>
          <p className={"text-sm"}>Last updated at {new Date().toLocaleString()}</p>
        </div>
      </PersistentMessage>
      <div className={"flex flex-col gap-4 *:w-full *:min-w-full mx-auto w-1/2 p-8"}>
        <ButtonLink url={urlTo({ route: Routes.people.detail, pathParams: { id: 1 } })} variant={"solid"}>
          Link to 1
        </ButtonLink>
        <ButtonLink url={urlTo({ route: Routes.people.detail, pathParams: { id: 10 } })} variant={"solid"}>
          Link to 10
        </ButtonLink>
        <ButtonLink url={urlTo({ route: Routes.people.detail, pathParams: { id: 100 } })} variant={"solid"}>
          Link to 100
        </ButtonLink>
        <ButtonLink url={urlTo({ route: Routes.people.detail, pathParams: { id: 200 } })} variant={"solid"}>
          Link to 200
        </ButtonLink>
        <ButtonLink url={urlTo({ route: Routes.people.detail, pathParams: { id: 500 } })} variant={"solid"}>
          Link to 500
        </ButtonLink>
      </div>
    </main>
  )
}
