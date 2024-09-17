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
    response.redirect('/conversations')
    return
  }

  async register({ request, response, auth }: HttpContext) {
    const { email, password, fullName } = request.only(['email', 'password', 'fullName'])
    try {
      const user = await this.userRepository.create({ email, password, fullName })
      await auth.use('web').login(user)
      response.redirect('/conversations')
      return
    } catch (e) {
      response.badRequest(e.message)
      return
    }
  }

  index({ inertia }: HttpContext) {
    inertia.render('register')
    return
  }

  show({ inertia }: HttpContext) {
    inertia.render('login')
    return
  }
}
