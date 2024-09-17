import Conversation from '#models/conversation'
import { inject } from '@adonisjs/core'
import MessageRepository from './message_repository_service.js'
import UserRepository from './user_repository_service.js'

interface ConversationDto {
  usersId: number[]
  senderId: number
  messageContent: string
}

@inject()
export default class ConversationRepository {
  constructor(
    private message_repository: MessageRepository,
    private user_repository: UserRepository
  ) {}

  async create({ usersId, senderId, messageContent }: ConversationDto) {
    const uid = crypto.randomUUID()
    const users = await this.user_repository.getMany(usersId)

    if (!users) {
      return null
    }

    const conversation = await Conversation.create({ id: uid })
    const userIds = users.map((user) => user.id)
    await conversation.related('users').attach(userIds)

    const message = await this.message_repository.create({
      conversationId: conversation.id,
      content: messageContent,
      userId: senderId,
    })

    await conversation.related('messages').save(message)

    if (conversation) {
      return conversation
    } else {
      throw Error("Impossible de créer l'utilisateur")
    }
  }
}
