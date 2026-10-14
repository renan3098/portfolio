import { motion } from 'framer-motion'
import { FiGithub } from 'react-icons/fi'
import { useLanguage } from '../i18n/LanguageContext'
import { projects } from '../data/projects'
import Section from './Section'

export default function Projects() {
  const { lang, t } = useLanguage()

  return (
    <Section id="projects" title={t.projects.title} subtitle={t.projects.subtitle}>
      <ol className="relative">
        {/* Linha vertical da timeline: à esquerda no mobile, centralizada no desktop */}
        <div className="absolute top-0 bottom-0 left-3 w-px bg-line md:left-1/2" aria-hidden />

        {projects.map((p, i) => {
          const right = i % 2 === 1
          return (
            <motion.li
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="relative mb-14 pl-12 last:mb-0 md:grid md:grid-cols-2 md:gap-16 md:pl-0"
            >
              <span
                className="absolute top-2 left-3 z-10 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full border-2 border-paper bg-ink md:left-1/2"
                aria-hidden
              />

              <div className={`mb-3 md:mb-0 md:pt-0.5 ${right ? 'md:order-2' : 'md:text-right'}`}>
                <span className="font-mono text-sm text-muted">{p.year}</span>
              </div>

              <article
                className={`group overflow-hidden rounded-2xl border border-line bg-panel transition hover:border-muted ${
                  right ? 'md:order-1' : ''
                }`}
              >
                <div className="aspect-video overflow-hidden border-b border-line bg-ink">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold">{p.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{p.description[lang]}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {p.tech.map((tech) => (
                      <li key={tech} className="rounded-md bg-ink px-2 py-1 font-mono text-xs text-muted">
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold hover:underline"
                  >
                    <FiGithub /> {t.projects.repo}
                  </a>
                </div>
              </article>
            </motion.li>
          )
        })}
      </ol>
    </Section>
  )
}
