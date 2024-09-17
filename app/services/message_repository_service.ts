import Message from '#models/message'
import { Exception } from '@adonisjs/core/exceptions'

interface MessageDto {
  conversationId: string
  content: string
  userId: number
}

export default class MessageRepository {
  async create({ conversationId, content, userId }: MessageDto) {
    const message = await Message.create({ conversationId, content, userId })
    if (message) {
      return message
    } else {
      throw new Exception('Message non envoyé')
    }
  }
}
