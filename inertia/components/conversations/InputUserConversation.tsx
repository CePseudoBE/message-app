import { useState } from 'react'

interface User {
  fullName: string
  email: string
}

interface Props {
  users: User[]
}

export default function InputUserConversation({ users }: Props) {
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredUsers, setFilteredUsers] = useState<User[]>(users)

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value.toLowerCase()
    setSearchTerm(searchValue)
    const filtered = users.filter((user) => user.fullName.toLowerCase().includes(searchValue))
    setFilteredUsers(filtered)
  }

  const handleUserClick = (fullName: string) => {
    console.log(`User clicked: ${fullName}`)
  }

  return (
    <div>
      <input type="text" placeholder="Search users..." value={searchTerm} onChange={handleSearch} />
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.email} onClick={() => handleUserClick(user.fullName)}>
            {user.fullName}
          </li>
        ))}
      </ul>
    </div>
  )
}
