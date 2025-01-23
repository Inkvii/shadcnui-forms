import { FormContainer } from "app/FormContainer"

export default async function Home() {
  return (
    <main className={"px-page-default bg-neutral-100 h-dvh"}>
      Hello there
      <FormContainer />
      <div className={"grid grid-cols-11 success gap-2 p-2 pt-24"} >
        <article className={"w-full h-8 bg-hue-50"} />
        <article className={"w-full h-8 bg-hue-100"} />
        <article className={"w-full h-8 bg-hue-200"} />
        <article className={"w-full h-8 bg-hue-300"} />
        <article className={"w-full h-8 bg-hue-400"} />
        <article className={"w-full h-8 bg-hue-500"} />
        <article className={"w-full h-8 bg-hue-600"} />
        <article className={"w-full h-8 bg-hue-700"} />
        <article className={"w-full h-8 bg-hue-800"} />
        <article className={"w-full h-8 bg-hue-900"} />
        <article className={"w-full h-8 bg-hue-950"} />
        <div>
          <p>Cascade</p>
          <article className={"w-40 h-8 bg-hue-400 border-2"} />
        </div>
      </div>

      <hr />

      <p>Outside</p>
      <article className={"w-40 h-8 bg-hue-400 border-2"} />
      <div className={"grid grid-cols-11 primary gap-2 p-2"}>
        <article className={"w-full h-8 bg-hue-50"} />
        <article className={"w-full h-8 bg-hue-100"} />
        <article className={"w-full h-8 bg-hue-200"} />
        <article className={"w-full h-8 bg-hue-300"} />
        <article className={"w-full h-8 bg-hue-400"} />
        <article className={"w-full h-8 bg-hue-500"} />
        <article className={"w-full h-8 bg-hue-600"} />
        <article className={"w-full h-8 bg-hue-700"} />
        <article className={"w-full h-8 bg-hue-800"} />
        <article className={"w-full h-8 bg-hue-900"} />
        <article className={"w-full h-8 bg-hue-950"} />
        <div>
          <p>Cascade</p>
          <article className={"w-40 h-8 bg-hue-400 border-2"} />
        </div>
      </div>

      <hr/>

      <p>Outside</p>
      <article className={"w-40 h-8 bg-hue-400 border-2"} />

      <hr/>

      <div className={"flex flex-col gap-4 p-8"}>
        <p className={"ring-2 ring-current ring-offset-4 ring-offset-secondary-600 w-fit rounded text-danger-600 font-bold px-4 py-2"}>Current color</p>
        <div className={"border-2 border-current text-center p-2 bg-current/20 text-secondary-800"}>
          Test
        </div>
      </div>
    </main>
  )
}
