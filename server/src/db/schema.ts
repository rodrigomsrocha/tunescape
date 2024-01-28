import { sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const users = sqliteTable('users', {
  id: text('id').unique(),
  display_name: text('display_name'),
  avatar_url: text('avatar_url'),
})
