'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const techStack = [
  { name: 'Python', category: 'Language', emoji: '🐍', color: '#3B82F6' },
  { name: 'SQL', category: 'Language', emoji: '🗃️', color: '#F59E0B' },
  { name: 'Apache Spark', category: 'Processing', emoji: '⚡', color: '#E16A00' },
  { name: 'AWS', category: 'Cloud', emoji: '☁️', color: '#FF9900' },
  { name: 'GCP', category: 'Cloud', emoji: '🌐', color: '#4285F4' },
  { name: 'Snowflake', category: 'Warehouse', emoji: '❄️', color: '#29B5E8' },
  { name: 'BigQuery', category: 'Warehouse', emoji: '📊', color: '#4285F4' },
  { name: 'Airflow', category: 'Orchestration', emoji: '🌊', color: '#017CEE' },
  { name: 'Docker', category: 'DevOps', emoji: '🐳', color: '#2496ED' },
  { name: 'Mage AI', category: 'Orchestration', emoji: '🔮', color: '#7C3AED' },
  { name: 'PostgreSQL', category: 'Database', emoji: '🐘', color: '#336791' },
  { name: 'MySQL', category: 'Database', emoji: '🗄️', color: '#F29111' },
  { name: 'Looker Studio', category: 'BI', emoji: '📈', color: '#4285F4' },
  { name: 'Power BI', category: 'BI', emoji: '📉', color: '#F2C811' },
  { name: 'Scala', category: 'Language', emoji: '♾️', color: '#DC322F' },
  { name: 'dbt', category: 'Transform', emoji: '🔄', color: '#FF694A' },
]

export default function TechStack() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-20 relative overflow-hidden bg-grid" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-label">Tech Stack</span>
          <h2 className="text-3xl lg:text-4xl font-bold mt-3 mb-3"
            style={{ fontFamily: 'var(--font-syne)', color: 'var(--text-primary)' }}>
            Tools of the Trade
          </h2>
          <p className="text-base max-w-lg mx-auto" style={{ color: 'var(--text-secondary)' }}>
            The modern data engineering ecosystem I navigate daily to build reliable, scalable data solutions.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-3 justify-center">
          {techStack.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              whileHover={{ y: -4, scale: 1.04 }}
              className="glass-card rounded-xl px-4 py-3 flex items-center gap-3 cursor-default transition-all group"
              style={{ minWidth: '140px' }}
            >
              <span className="text-xl" role="img" aria-label={tech.name}>{tech.emoji}</span>
              <div>
                <div className="text-sm font-semibold leading-tight"
                  style={{ fontFamily: 'var(--font-syne)', color: 'var(--text-primary)' }}>
                  {tech.name}
                </div>
                <div className="text-xs" style={{ color: tech.color, fontFamily: 'var(--font-jetbrains)' }}>
                  {tech.category}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
