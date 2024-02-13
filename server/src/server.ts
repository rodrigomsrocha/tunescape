import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import 'dotenv/config'
import fastify from 'fastify'
import { authRoutes } from './routes/auth'
import { recommendationsRoutes } from './routes/recommendations'

const app = fastify()
app.register(cors, {
  origin: true,
})
app.register(jwt, {
  secret: process.env.JWT_SECRET as string,
})

app.register(authRoutes)
app.register(recommendationsRoutes)

app
  .listen({
    port: 3003,
  })
  .then(() => {
    console.log('🚀HTTP server running on http://localhost:3003')
  })
