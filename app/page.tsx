import { redirect } from "next/navigation"

/** Add your relevant code here for the issue to reproduce */
async function action() {
  "use server"
  redirect("/redirect_route")
}

export default function Home() {
  return <form action={action}>
    <button type="submit">submit</button>
  </form>
}
