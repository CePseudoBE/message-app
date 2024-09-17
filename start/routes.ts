/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import AuthController from '#controllers/auth_controller'
import ConversationsController from '#controllers/conversations_controller'
import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'
router.on('/').renderInertia('home', { version: 6 })

router
  .group(() => {
    router.post('', [AuthController, 'login'])
    router.get('', [AuthController, 'show'])
  })
  .prefix('login')
  .use(middleware.guest())

router
  .group(() => {
    router.post('', [AuthController, 'register'])
    router.get('', [AuthController, 'index'])
  })
  .prefix('register')
  .use(middleware.guest())

router
  .group(() => {
    router.get('', [ConversationsController, 'index']).use(middleware.auth())
  })
  .prefix('conversations')
