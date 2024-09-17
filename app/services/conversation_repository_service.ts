import Conversation from '#models/conversation'

export default class ConversationRepository {
  async create() {
    const uid = crypto.randomUUID()
    const conversation = await Conversation.create({ id: uid })

    if (conversation) {
      return conversation
    } else {
      throw Error("Impossible de créer l'utilisateur")
    }
  }
}
