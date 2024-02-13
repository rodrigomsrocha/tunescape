import { SpotifyLogo } from '@phosphor-icons/react/dist/ssr'
import { Button } from '../ui/button'

export function SignInButton() {
  return (
    <a
      href={`https://accounts.spotify.com/authorize?client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}&response_type=code&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URI}&scope=user-top-read`}
    >
      <Button>
        <SpotifyLogo size={20} className="mr-2" />
        Sign in with Spotify
      </Button>
    </a>
  )
}
