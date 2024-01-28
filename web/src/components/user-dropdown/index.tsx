import {
  CassetteTape,
  Notepad,
  Playlist,
  SignOut,
  User,
} from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'

export function UserDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64">
        <DropdownMenuLabel>
          <div className="flex items-center gap-4 py-1">
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col space-y-1">
              <strong className="text-sm leading-none">Rodrigo M.</strong>
              <span className="text-xs leading-none text-muted-foreground">
                rodrigomtc82@gmail.com
              </span>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup className="py-2 space-y-2">
          <DropdownMenuItem asChild>
            <Link className="flex items-center gap-2" href="/settings">
              <User className="h-5 w-5" />
              Profile
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link className="flex items-center gap-2" href="/settings">
              <CassetteTape className="h-5 w-5" />
              My Albums
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link className="flex items-center gap-2" href="/settings">
              <Notepad className="h-5 w-5" />
              Diary
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link className="flex items-center gap-2" href="/settings">
              <Playlist className="h-5 w-5" />
              My Playlists
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex items-center gap-2">
          <SignOut className="h-5 w-5 text-destructive" />
          <strong className="text-destructive">Log out</strong>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
