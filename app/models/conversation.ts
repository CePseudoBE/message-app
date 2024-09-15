import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, manyToMany } from '@adonisjs/lucid/orm'
import User from '#models/user'
import type { HasMany, ManyToMany } from '@adonisjs/lucid/types/relations'
import Message from '#models/message'

export default class Conversation extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @manyToMany(() => User)
  declare users: ManyToMany<typeof User>

  @hasMany(() => Message)
  declare messages: HasMany<typeof Message>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
