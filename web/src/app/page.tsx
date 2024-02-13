import { AlbumCard } from '@/components/album-card'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { api } from '@/lib/api'
import { cookies } from 'next/headers'

interface Album {
  id: string
  name: string
  artists: { name: string }[]
  images: {
    url: string
  }[]
}

export default async function Home() {
  const token = cookies().get('token')?.value
  const response = await api.get('/listen-now', {
    headers: { Authorization: 'Bearer ' + token },
  })

  const { albumsRecommendations }: { albumsRecommendations: Album[] } =
    response.data

  return (
    <main className="space-y-8">
      <section className="space-y-4">
        <h1 className="text-2xl font-bold">Listen Now</h1>
        <span className="text-muted-foreground">Top Albums for you.</span>
        <Separator orientation="horizontal" />
        <ScrollArea>
          <div className="flex w-max gap-4 pb-4">
            {albumsRecommendations.map((album) => (
              <AlbumCard key={album.id} album={album} />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </section>
      <section className="space-y-4">
        <h1 className="text-2xl font-bold">New From Friends</h1>
        <span className="text-muted-foreground">
          recent activity from friends.
        </span>
        <Separator orientation="horizontal" />
        <ScrollArea>
          <div className="flex w-max gap-4 pb-4">
            {/* {albumsRecommendations.map((album) => (
              <AlbumCard key={album.id} album={album} />
            ))} */}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </section>
      <section className="space-y-4">
        <h1 className="text-2xl font-bold">New Releases</h1>
        <span className="text-muted-foreground">recently added albums.</span>
        <Separator orientation="horizontal" />
        <ScrollArea>
          <div className="flex w-max gap-4 pb-4">
            {/* {albumsRecommendations.map((album) => (
              <AlbumCard key={album.id} album={album} />
            ))} */}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </section>
    </main>
  )
}
