import axios from 'axios'
import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from '../lib/prisma'

export async function recommendationsRoutes(app: FastifyInstance) {
  app.addHook('preHandler', async (request) => {
    await request.jwtVerify()
  })

  app.get('/listen-now', async (request) => {
    // get top items
    const user = await prisma.user.findFirst({
      where: { id: request.user.sub },
    })

    const accessTokenResponse = await axios.post(
      'https://accounts.spotify.com/api/token',
      {
        grant_type: 'refresh_token',
        refresh_token: user?.refresh_token,
        client_id: process.env.CLIENT_ID,
      },
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Basic ${Buffer.from(`${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`).toString('base64')}`,
        },
      },
    )

    const { access_token, token_type } = accessTokenResponse.data

    const topUserResponse = await axios.get(
      'https://api.spotify.com/v1/me/top/tracks',
      {
        headers: {
          Authorization: `${token_type} ${access_token}`,
        },
      },
    )

    const topUserSchema = z.object({
      items: z.array(z.object({ id: z.string() })),
    })

    const topUserInfo = topUserSchema.parse(topUserResponse.data)

    const seed_tracks = topUserInfo.items
      .slice(0, 5)
      .map((item) => {
        return item.id
      })
      .join(',')

    const tracksRecommendationsResponse = await axios.get(
      'https://api.spotify.com/v1/recommendations',
      {
        params: {
          seed_tracks,
        },
        headers: {
          Authorization: `${token_type} ${access_token}`,
        },
      },
    )

    const tracksRecommendationsSchema = z.object({
      tracks: z.array(
        z.object({
          album: z.object({
            name: z.string(),
            artists: z.array(z.object({ name: z.string() })),
            id: z.string(),
            images: z.array(
              z.object({
                url: z.string(),
                width: z.number(),
                height: z.number(),
              }),
            ),
          }),
        }),
      ),
    })

    const tracksRecommendationsData = tracksRecommendationsSchema.parse(
      tracksRecommendationsResponse.data,
    )

    const albumsRecommendations = tracksRecommendationsData.tracks.map(
      (item) => {
        return {
          ...item.album,
          cover_url: item.album.images[0].url,
        }
      },
    )

    return { albumsRecommendations }
  })
}
