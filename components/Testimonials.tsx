'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      "I am delighted to recommend Adaramola Ayomikun, an exceptional Data Engineer at Eagles Consulting. He possesses strong hands-on experience in Python and SQL, and consistently demonstrates excellent problem-solving abilities, analytical thinking, and attention to detail. Ayomikun is hardworking, reliable, and committed to excellence. I highly recommend him for global opportunities in Data Engineering and analytics.",
    author: "Michael Adeyeye",
    role: "BI Consultant • Eagles' Consulting",
    initials: "MA",
  }
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
              className="glass-card rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300"
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
