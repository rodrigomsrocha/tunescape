import { AlbumCard } from '@/components/album-card'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'

export default function Home() {
  return (
    <main className="space-y-8">
      <section className="space-y-4">
        <h1 className="text-2xl font-bold">Listen Now</h1>
        <span className="text-muted-foreground">Top Albums for you.</span>
        <Separator orientation="horizontal" />
        <ScrollArea>
          <div className="flex w-max gap-4 pb-4">
            <AlbumCard />
            <AlbumCard />
            <AlbumCard />
            <AlbumCard />
            <AlbumCard />
            <AlbumCard />
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
            <AlbumCard />
            <AlbumCard />
            <AlbumCard />
            <AlbumCard />
            <AlbumCard />
            <AlbumCard />
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
            <AlbumCard />
            <AlbumCard />
            <AlbumCard />
            <AlbumCard />
            <AlbumCard />
            <AlbumCard />
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </section>
    </main>
  )
}
