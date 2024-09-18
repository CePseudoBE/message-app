import ConversationRepository from '#services/conversation_repository_service'
import UserRepository from '#services/user_repository_service'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'

@inject()
export default class ConversationsController {
  constructor(
    private conversation_repository: ConversationRepository,
    private user_repository: UserRepository
  ) {}

  async index({ inertia, auth }: HttpContext) {
    const user = auth!.user

    const users = await this.user_repository.getAllUserButNotAuth(user!.id)

    return inertia.render('messages', { users })
  }

  create({ request }: HttpContext) {
    //TODO create conv
    //const conversation = this.conversation_repository.create(request)
  }
}
