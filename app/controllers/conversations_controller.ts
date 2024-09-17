import ConversationRepository from '#services/conversation_repository_service'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'

@inject()
export default class ConversationsController {
  constructor(private conversation_repository: ConversationRepository) {}

  index({ inertia }: HttpContext) {
    return inertia.render('messages')
  }

  create({ request }: HttpContext) {
    //TODO create conv
    const conversation = this.conversation_repository.create(request)
  }
}
