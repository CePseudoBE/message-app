import type { HttpContext } from '@adonisjs/core/http'

export default class ConversationsController {
  index({ inertia, auth }: HttpContext) {
    console.log(auth.user)
    return inertia.render('messages')
  }
}
