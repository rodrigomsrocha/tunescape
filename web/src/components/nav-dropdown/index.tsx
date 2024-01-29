import {
  CassetteTape,
  Lightning,
  List,
  Playlist,
} from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import { Button } from '../ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'

export function NavDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild={true}>
        <Button className="flex sm:hidden" variant="ghost" size="icon">
          <List size={24} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48">
        <DropdownMenuGroup className="py-2 space-y-2">
          <DropdownMenuItem asChild>
            <Link className="flex items-center gap-2" href="/settings">
              <CassetteTape className="h-5 w-5" />
              Albums
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link className="flex items-center gap-2" href="/settings">
              <Playlist className="h-5 w-5" />
              Playlists
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link className="flex items-center gap-2" href="/settings">
              <Lightning className="h-5 w-5" />
              Activity
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
