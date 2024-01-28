import { createClient } from '@libsql/client'
import { drizzle } from 'drizzle-orm/libsql'
import * as schema from './schema'

export const client = createClient({
  url: 'libsql://tunescape-rodrigomsrocha.turso.io',
  authToken: process.env.TURSO_DB_TOKEN,
})

export const db = drizzle(client, { schema })
