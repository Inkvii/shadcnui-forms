import { Person } from "components/Person"

export type Props = {
  id: number
}

const fn = async (id: string) => {
  console.debug(`> caching start for person id=${id}`)
  const response = await fetch(`http://localhost:3000/api/people?id=${id}`)
  console.debug("response status ", response.status)
  const body = (await response.json()) as Person
  console.debug("Body: ", body)
  return body
}

export default async function DataContainer(props: Props) {
  const data = await fn(props.id.toString())

  return <pre>{JSON.stringify(data, null, 2)}</pre>
}
