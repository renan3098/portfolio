import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiArrowDown, FiGithub, FiLinkedin } from 'react-icons/fi'
import { useLanguage } from '../i18n/LanguageContext'
import { profile } from '../data/profile'

export default function Hero() {
  const { t } = useLanguage()
  const [showPhoto, setShowPhoto] = useState(true)

  return (
    <section id="top" className="stripes relative flex min-h-svh items-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-ink/40 to-ink" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col-reverse gap-10 px-4 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-muted"
          >
            {t.hero.greeting}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-2 text-5xl font-extrabold tracking-tight sm:text-7xl"
          >
            {profile.shortName}
            <span className="text-muted">.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 max-w-xl text-lg text-muted sm:text-xl"
          >
            {t.hero.role}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="rounded-full bg-paper px-6 py-3 font-semibold text-ink transition hover:bg-white/80"
            >
              {t.hero.cta}
            </a>
            <a
              href="#contact"
              className="rounded-full border border-line px-6 py-3 font-semibold transition hover:border-paper"
            >
              {t.hero.contact}
            </a>
            <div className="flex gap-2 text-2xl">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 text-muted hover:text-paper">
                <FiGithub />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 text-muted hover:text-paper">
                <FiLinkedin />
              </a>
            </div>
          </motion.div>
        </div>

        {showPhoto && (
          <motion.img
            src={profile.photo}
            alt={profile.name}
            onError={() => setShowPhoto(false)}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-36 w-36 shrink-0 rounded-full border-4 border-line object-cover shadow-2xl sm:h-44 sm:w-44 md:h-72 md:w-72"
          />
        )}
      </div>

      <motion.a
        href="#about"
        aria-label={t.nav.about}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-2xl text-muted"
      >
        <FiArrowDown />
      </motion.a>
    </section>
  )
}
