import cors from '@fastify/cors'
import 'dotenv/config'
import { migrate } from 'drizzle-orm/libsql/migrator'
import fastify from 'fastify'
import { db } from './db/connection'
import { authRoutes } from './routes/auth'

const app = fastify()
app.register(cors, {
  origin: true,
})

app.register(authRoutes)

app
  .listen({
    port: 3003,
  })
  .then(async () => {
    await migrate(db, {
      migrationsFolder: './drizzle',
    })
    console.log('🚀HTTP server running on http://localhost:3003')
  })
