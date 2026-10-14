import { motion } from 'framer-motion'

// Wrapper padrão das seções: título, subtítulo e animação de entrada.
export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          <span className="font-mono text-muted">#</span> {title}
        </h2>
        {subtitle && <p className="mt-3 text-muted">{subtitle}</p>}
        <div className="mt-5 h-1 w-16 rounded-full bg-paper" />
      </motion.div>
      {children}
    </section>
  )
}
