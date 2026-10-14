import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl justify-center px-4 py-8 text-sm text-muted sm:px-6">
        <p>© {new Date().getFullYear()} {profile.name}</p>
      </div>
    </footer>
  )
}
