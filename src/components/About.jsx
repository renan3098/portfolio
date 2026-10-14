import { motion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'
import { skills } from '../data/profile'
import Section from './Section'

export default function About() {
  const { t } = useLanguage()

  return (
    <Section id="about" title={t.about.title}>
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="space-y-5 text-lg leading-relaxed text-muted"
        >
          {t.about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-6"
        >
          <dl className="divide-y divide-line rounded-2xl border border-line bg-panel">
            {t.about.facts.map((f) => (
              <div key={f.label} className="px-5 py-4">
                <dt className="font-mono text-xs uppercase tracking-wider text-muted">{f.label}</dt>
                <dd className="mt-1 font-medium">{f.value}</dd>
              </div>
            ))}
          </dl>

          <div>
            <h3 className="mb-3 font-mono text-xs uppercase tracking-wider text-muted">{t.about.skills}</h3>
            <ul className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <li key={s} className="rounded-full border border-line px-3 py-1 text-sm">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
