

export type Props = {
  status: string | undefined
}
export default function HomeContainer(props: Props) {
  return <div>Home container
  <pre>{JSON.stringify(props)}</pre>
  </div>
}
