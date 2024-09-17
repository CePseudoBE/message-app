import { Head, usePage } from '@inertiajs/react'

interface User {
  fullName: string
  email: string
}

interface PageProps {
  user: User
  [key: string]: unknown
}

export default function Messages() {
  const { user } = usePage<PageProps>().props

  return (
    <>
      <Head title="Messages" />
      <div>{user.fullName}</div>
    </>
  )
}
