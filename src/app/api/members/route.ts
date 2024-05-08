import { type Member } from "@/types/members"

export async function GET() {
  const res = await fetch(
    "https://front-end-code-challenge.stephenbuilds.workers.dev/"
  )
  const { users } = await res.json()
  const members: Member[] = Object.entries(users).map(([id, user]: any) => ({
    id,
    image: user.photo,
    role: user.role,
    firstName: user.first,
    lastName: user.last,
    admin: false,
  }))

  return Response.json({ members })
}
