import InputUserConversation from './InputUserConversation'

interface User {
  fullName: string
  email: string
}

interface Props {
  users: User[]
}

export default function NewConversation({ users }: Props) {
  return <InputUserConversation users={users} />
}
