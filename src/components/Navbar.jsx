import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import { useLanguage } from '../i18n/LanguageContext'

const sections = ['about', 'projects', 'experience', 'contact']

export default function Navbar() {
  const { lang, t, toggle } = useLanguage()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const langButton = (
    <button
      onClick={toggle}
      className="rounded-full border border-line px-3 py-1 font-mono text-xs transition hover:border-paper"
      aria-label={lang === 'pt' ? 'Switch to English' : 'Mudar para português'}
    >
      <span className={lang === 'pt' ? 'text-paper' : 'text-muted'}>PT</span>
      <span className="text-muted"> / </span>
      <span className={lang === 'en' ? 'text-paper' : 'text-muted'}>EN</span>
    </button>
  )

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled || open ? 'border-b border-line bg-ink/85 backdrop-blur' : ''
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="font-mono text-lg font-semibold">
          renan<span className="text-muted">.rocha</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {sections.map((s) => (
            <a key={s} href={`#${s}`} className="text-sm text-muted transition hover:text-paper">
              {t.nav[s]}
            </a>
          ))}
          {langButton}
        </div>

        <div className="flex items-center gap-3 md:hidden">
          {langButton}
          <button onClick={() => setOpen((o) => !o)} aria-label="Menu" className="p-1 text-2xl">
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 pb-4">
              {sections.map((s) => (
                <a
                  key={s}
                  href={`#${s}`}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-muted hover:bg-panel hover:text-paper"
                >
                  {t.nav[s]}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
