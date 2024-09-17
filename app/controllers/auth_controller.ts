import User from '#models/user'
import UserRepository from '#services/user_repository_service'
import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'

@inject()
export default class AuthController {
  constructor(private userRepository: UserRepository) {}

  async login({ request, response, auth }: HttpContext) {
    const { email, password } = request.only(['email', 'password'])
    const user = await User.verifyCredentials(email, password)
    await auth.use('web').login(user)
    return response.redirect('/dashboard')
  }

  async register({ request, response, auth }: HttpContext) {
    const { email, password, fullName } = request.only(['email', 'password', 'fullName'])
    try {
      const user = await this.userRepository.create({ email, password, fullName })
      await auth.use('web').login(user)
      return response.redirect('/dashboard')
    } catch (e) {
      return response.badRequest(e.message)
    }
  }

  index({ inertia, auth, response }: HttpContext) {
    console.log(auth.isAuthenticated)
    if (auth.isAuthenticated) {
      return response.redirect('/messages')
    }
    return inertia.render('register')
  }
}
