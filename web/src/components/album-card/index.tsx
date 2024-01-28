import Image from 'next/image'

export function AlbumCard() {
  return (
    <div className={`bg-muted p-4 rounded-md space-y-4 w-[200px]`}>
      <Image
        className="rounded-sm w-full"
        src="https://i.scdn.co/image/ab67616d0000b273d9194aa18fa4c9362b47464f"
        alt="album"
        width={200}
        height={200}
      />
      <div className="space-y-2">
        <strong className="block">My beatiful dark twisted fantasy</strong>
        <span className="text-muted-foreground">Kanye West</span>
      </div>
    </div>
  )
}
