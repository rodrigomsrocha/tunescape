import { Waveform } from '@phosphor-icons/react/dist/ssr'
import { cookies } from 'next/headers'
import Link from 'next/link'
import { NavDropdown } from '../nav-dropdown'
import { SignInButton } from '../signin-button'
import { Button } from '../ui/button'
import { UserDropdown } from '../user-dropdown'

export function Header() {
  const isAuthenticated = cookies().has('token')

  return (
    <header className="max-w-5xl mx-auto p-4 flex items-center justify-between">
      <div className="flex items-center">
        <NavDropdown />
        <div className="flex gap-5 items-center">
          <Waveform color="#facc15" size={48} />
          <h1 className="font-alt text-3xl hidden sm:block">Tunescape</h1>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <nav className="sm:flex items-center hidden">
          <Button variant="link">
            <Link href="/playlists">Albums</Link>
          </Button>
          <Button variant="link">
            <Link href="/playlists">Playlists</Link>
          </Button>
          <Button variant="link">
            <Link href="/playlists">Activity</Link>
          </Button>
        </nav>
        {isAuthenticated ? <UserDropdown /> : <SignInButton />}
      </div>
    </header>
  )
}
