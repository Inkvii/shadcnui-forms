import { ExtractRouteParams } from "@/library/router/types/ExtractRouteParams"
import Routes from "router/routes"
import DataContainer from "app/people/[id]/DataContainer"
import PersistentMessage from "@/library/feedback/PersistentMessage"

type Props = ExtractRouteParams<typeof Routes.people.detail>

export default async function PeoplePage(props: Props) {
  console.debug(`> Im hitting the endpoint`)
  const params = await props.params

  return (
    <main>
      <h1>Person {params.id} </h1>
      <h3>{new Date().toLocaleString()}</h3>

      <PersistentMessage hue={"primary"}>This is dynamic component</PersistentMessage>
      <DataContainer id={+params.id} />
    </main>
  )
}
export const dynamic = "force-dynamic"