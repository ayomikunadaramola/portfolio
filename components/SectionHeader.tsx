'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface SectionHeaderProps {
  label: string
  title: string
  titleAccent?: string
  subtitle?: string
  center?: boolean
}

export default function SectionHeader({
  label,
  title,
  titleAccent,
  subtitle,
  center = false,
}: SectionHeaderProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <div ref={ref} className={center ? 'text-center' : ''}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className={`flex items-center gap-4 mb-4 ${center ? 'justify-center' : ''}`}
      >
        <span className="section-label">{label}</span>
        {!center && (
          <div className="h-px flex-1 max-w-24" style={{ background: 'var(--accent)' }} />
        )}
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.08 }}
        className="text-3xl lg:text-4xl font-bold mb-3"
        style={{ fontFamily: 'var(--font-syne)', color: 'var(--text-primary)' }}
      >
        {title}
        {titleAccent && (
          <>
            <br />
            <span style={{ color: 'var(--accent)' }}>{titleAccent}</span>
          </>
        )}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.14 }}
          className={`text-base max-w-xl ${center ? 'mx-auto' : ''}`}
          style={{ color: 'var(--text-secondary)' }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
