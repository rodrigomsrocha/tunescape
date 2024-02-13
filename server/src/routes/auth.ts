import axios from 'axios'
import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from '../lib/prisma'

export async function authRoutes(app: FastifyInstance) {
  app.post('/register', async (request) => {
    const bodySchema = z.object({
      code: z.string(),
    })

    const { code } = bodySchema.parse(request.body)

    const accessTokenResponse = await axios.post(
      'https://accounts.spotify.com/api/token',
      {
        code,
        grant_type: 'authorization_code',
        redirect_uri: process.env.REDIRECT_URI,
      },
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Basic ${Buffer.from(`${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`).toString('base64')}`,
        },
      },
    )

    const { access_token, token_type, refresh_token } = accessTokenResponse.data

    const userResponse = await axios.get('https://api.spotify.com/v1/me', {
      headers: {
        Authorization: `${token_type} ${access_token}`,
      },
    })

    const userSchema = z.object({
      id: z.string(),
      display_name: z.string(),
      images: z.array(
        z.object({ url: z.string(), width: z.number(), height: z.number() }),
      ),
    })

    const userInfo = userSchema.parse(userResponse.data)
    const formattedUserInfo = {
      spotify_id: userInfo.id,
      display_name: userInfo.display_name,
      avatar_url: userInfo.images[0].url,
      refresh_token,
    }

    let user = await prisma.user.findFirst({
      where: { spotify_id: formattedUserInfo.spotify_id },
    })

    if (!user) {
      user = await prisma.user.create({ data: formattedUserInfo })
    }

    const token = app.jwt.sign(
      {
        name: user.display_name,
        avatarURL: user.avatar_url,
      },
      {
        sub: user.id,
        expiresIn: '30 days',
      },
    )

    return { token }
  })
}
