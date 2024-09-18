import User from '#models/user'

interface UserDto {
  fullName: string | undefined
  email: string
  password: string
}

export default class UserRepository {
  async create({ fullName, email, password }: UserDto) {
    const user = await User.create({
      fullName,
      email,
      password,
    })

    if (user) {
      return user
    } else {
      throw Error("Impossible de créer l'utilisateur")
    }
  }

  async getMany(ids: number[]): Promise<User[] | null> {
    const users = await User.findManyBy('id', ids)

    if (users) {
      return users
    } else {
      return null
    }
  }

  async getAllUserButNotAuth(id: number): Promise<User[]> {
    const users = await User.query().whereNot('id', id)

    return users
  }
}
