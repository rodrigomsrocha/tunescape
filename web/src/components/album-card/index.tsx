import Image from 'next/image'

interface AlbumCardProps {
  album: {
    id: string
    name: string
    artists: { name: string }[]
    images: {
      url: string
    }[]
  }
}

export function AlbumCard({ album }: AlbumCardProps) {
  return (
    <div className="bg-muted p-4 rounded-md space-y-4 w-[200px]">
      <Image
        className="rounded-sm w-full"
        src={album.images[0].url}
        alt="album"
        width={200}
        height={200}
      />
      <div className="space-y-2">
        <strong className="block">{album.name}</strong>
        <span className="text-muted-foreground line-clamp-1">
          {album.artists.map((artist) => artist.name).join(', ')}
        </span>
      </div>
    </div>
  )
}
