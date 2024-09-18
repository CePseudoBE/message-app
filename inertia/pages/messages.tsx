import { Head, usePage } from '@inertiajs/react'
import NewConversation from '~/components/conversations/NewConversation'

interface User {
  fullName: string
  email: string
}

interface PageProps {
  user: User
  [key: string]: unknown
}

interface Props {
  users: User[]
}

export default function Messages({ users }: Props) {
  //const { user } = usePage<PageProps>().props

  return (
    <>
      <Head title="Messages" />
      <NewConversation users={users} />
    </>
  )
}
