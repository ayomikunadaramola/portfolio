'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote: "Ayomikun built our entire data pipeline infrastructure from scratch. The ETL workflows he designed reduced our data processing time by over 60% and finally gave us reliable reporting we could trust.",
    author: 'Senior Engineering Manager',
    role: 'FinTech Startup',
    initials: 'SE',
  },
  {
    quote: "What impressed me most was his ability to understand the business problem first, then engineer the right data solution. The BigQuery data warehouse he delivered became the single source of truth for our analytics team.",
    author: 'Head of Data & Analytics',
    role: 'E-commerce Platform',
    initials: 'HD',
  },
  {
    quote: "Ayomikun's real-time data pipeline project was exactly what we needed. He architected a clean, event-driven solution on AWS that handled our streaming data reliably. Professional, detail-oriented, and highly skilled.",
    author: 'CTO',
    role: 'SaaS Company',
    initials: 'CT',
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-24 lg:py-28 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center gap-4 mb-4"
        >
          <span className="section-label">Testimonials</span>
          <div className="h-px flex-1 max-w-24" style={{ background: 'var(--accent)' }} />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-3xl lg:text-4xl font-bold mb-12"
          style={{ fontFamily: 'var(--font-syne)', color: 'var(--text-primary)' }}
        >
          What People Say
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="glass-card rounded-2xl p-6 flex flex-col"
            >
              <Quote size={24} className="mb-4 opacity-40" style={{ color: 'var(--accent)' }} />

              <p className="text-sm leading-relaxed flex-1 mb-6" style={{ color: 'var(--text-secondary)' }}>
                "{t.quote}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm"
                  style={{ background: 'var(--accent-glow)', color: 'var(--accent)', fontFamily: 'var(--font-syne)' }}>
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold" style={{ fontFamily: 'var(--font-syne)', color: 'var(--text-primary)' }}>
                    {t.author}
                  </div>
                  <div className="text-xs" style={{ color: 'var(--text-muted)' }}>{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
