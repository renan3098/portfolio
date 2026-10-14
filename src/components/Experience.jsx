import { motion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'
import { experiences } from '../data/experiences'
import Section from './Section'

export default function Experience() {
  const { lang, t } = useLanguage()

  return (
    <Section id="experience" title={t.experience.title} subtitle={t.experience.subtitle}>
      <div className="grid gap-6 md:grid-cols-2">
        {experiences.map((e, i) => (
          <motion.article
            key={e.company}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="rounded-2xl border border-line bg-panel p-6 transition hover:border-muted"
          >
            <div className="flex flex-wrap items-start justify-between gap-2">
              <h3 className="text-xl font-bold">{e.company}</h3>
              <span
                className={`rounded-full px-3 py-1 font-mono text-xs ${
                  e.current ? 'bg-paper text-ink' : 'border border-line text-muted'
                }`}
              >
                {e.period[lang]}
              </span>
            </div>
            <p className="mt-1 font-medium text-muted">{e.role[lang]}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted">{e.description[lang]}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {e.tags.map((tag) => (
                <li key={tag} className="rounded-md bg-ink px-2 py-1 font-mono text-xs text-muted">
                  {tag}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}
