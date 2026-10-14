import { useState } from 'react'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { useLanguage } from '../i18n/LanguageContext'
import { profile } from '../data/profile'
import Section from './Section'

const { VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY } = import.meta.env

const channels = [
  { label: 'E-mail', value: profile.email, href: `mailto:${profile.email}`, icon: FiMail },
  { label: 'WhatsApp', value: 'WhatsApp', href: `https://wa.me/${profile.whatsapp}`, icon: FaWhatsapp },
  { label: 'LinkedIn', value: 'renan-rocha-de-souza', href: profile.linkedin, icon: FiLinkedin },
  { label: 'GitHub', value: 'renan3098', href: profile.github, icon: FiGithub },
]

export default function Contact() {
  const { t } = useLanguage()
  const [status, setStatus] = useState('idle') // idle | success | error
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm()

  const onSubmit = async (data) => {
    setStatus('idle')
    try {
      await emailjs.send(
        VITE_EMAILJS_SERVICE_ID,
        VITE_EMAILJS_TEMPLATE_ID,
        { name: data.name, email: data.email, message: data.message },
        { publicKey: VITE_EMAILJS_PUBLIC_KEY },
      )
      setStatus('success')
      reset()
    } catch (err) {
      console.error('EmailJS:', err)
      setStatus('error')
    }
  }

  const inputClass =
    'w-full rounded-xl border border-line bg-ink px-4 py-3 outline-none transition placeholder:text-muted/60 focus:border-paper'

  return (
    <Section id="contact" title={t.contact.title} subtitle={t.contact.subtitle}>
      <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
        <ul className="grid gap-3 self-start sm:grid-cols-2 lg:grid-cols-1">
          {channels.map(({ label, value, href, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-line bg-panel p-4 transition hover:border-paper"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-paper text-xl text-ink">
                  <Icon />
                </span>
                <span className="min-w-0">
                  <span className="block font-semibold">{label}</span>
                  <span className="block truncate text-sm text-muted">{value}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>

        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="space-y-5 rounded-2xl border border-line bg-panel p-6"
        >
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium">{t.contact.name}</label>
            <input id="name" className={inputClass} {...register('name', { required: t.contact.required })} />
            {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>}
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium">{t.contact.email}</label>
            <input
              id="email"
              type="email"
              className={inputClass}
              {...register('email', {
                required: t.contact.required,
                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: t.contact.invalidEmail },
              })}
            />
            {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>}
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium">{t.contact.message}</label>
            <textarea
              id="message"
              rows={5}
              className={`${inputClass} resize-y`}
              {...register('message', {
                required: t.contact.required,
                minLength: { value: 10, message: t.contact.minMessage },
              })}
            />
            {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-full bg-paper px-6 py-3 font-semibold text-ink transition hover:bg-white/80 disabled:opacity-60"
          >
            {isSubmitting ? t.contact.sending : t.contact.send}
          </button>

          {status === 'success' && <p className="text-center text-sm text-green-400">{t.contact.success}</p>}
          {status === 'error' && <p className="text-center text-sm text-red-400">{t.contact.error}</p>}
        </motion.form>
      </div>
    </Section>
  )
}
