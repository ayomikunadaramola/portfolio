'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, GitBranch, Cloud, Database, BarChart3, Settings } from 'lucide-react'

const skillCategories = [
  {
    icon: Code2,
    title: 'Programming',
    color: '#00F5D4',
    skills: [
      { name: 'Python', level: 92 },
      { name: 'SQL', level: 95 },
      { name: 'Scala', level: 72 },
    ],
  },
  {
    icon: GitBranch,
    title: 'Data Engineering',
    color: '#60A5FA',
    skills: [
      { name: 'Apache Spark', level: 85 },
      { name: 'Airflow', level: 82 },
      { name: 'ETL/ELT', level: 93 },
      { name: 'dbt', level: 78 },
      { name: 'Kafka', level: 70 },
    ],
  },
  {
    icon: Cloud,
    title: 'Cloud Platforms',
    color: '#A78BFA',
    skills: [
      { name: 'AWS', level: 88 },
      { name: 'GCP', level: 85 },
      { name: 'Azure', level: 65 },
    ],
  },
  {
    icon: Database,
    title: 'Databases & Warehouses',
    color: '#F59E0B',
    skills: [
      { name: 'BigQuery', level: 90 },
      { name: 'Snowflake', level: 85 },
      { name: 'PostgreSQL', level: 88 },
      { name: 'MySQL', level: 87 },
      { name: 'Redshift', level: 75 },
    ],
  },
  {
    icon: BarChart3,
    title: 'BI & Visualization',
    color: '#F472B6',
    skills: [
      { name: 'Looker Studio', level: 85 },
      { name: 'Power BI', level: 80 },
      { name: 'Tableau', level: 75 },
    ],
  },
  {
    icon: Settings,
    title: 'DevOps & Tools',
    color: '#34D399',
    skills: [
      { name: 'Docker', level: 82 },
      { name: 'Git', level: 90 },
      { name: 'Linux', level: 80 },
      { name: 'CI/CD', level: 75 },
    ],
  },
]

function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>{name}</span>
        <span className="text-xs font-mono" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-jetbrains)' }}>
          {level}%
        </span>
      </div>
      <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'var(--border)' }}>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: delay + 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full"
          style={{ background: color }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="py-24 lg:py-24 relative" ref={ref}
      style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-4"
        >
          <span className="section-label">Skills & Expertise</span>
          <div className="h-px flex-1 max-w-24" style={{ background: 'var(--accent)' }} />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl lg:text-4xl font-bold mb-3"
          style={{ fontFamily: 'var(--font-syne)', color: 'var(--text-primary)' }}
        >
          Technical Toolkit
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-base mb-12 max-w-xl"
          style={{ color: 'var(--text-secondary)' }}
        >
          The technologies I use to design, build, and scale data infrastructure that delivers business value.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIdx * 0.08 }}
              className="glass-card rounded-2xl p-6 hover:glow-accent transition-all group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: `${cat.color}18`, border: `1px solid ${cat.color}30` }}>
                  <cat.icon size={18} style={{ color: cat.color }} />
                </div>
                <h3 className="font-bold text-base"
                  style={{ fontFamily: 'var(--font-syne)', color: 'var(--text-primary)' }}>
                  {cat.title}
                </h3>
              </div>

              {cat.skills.map((skill, si) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={cat.color}
                  delay={catIdx * 0.08 + si * 0.06}
                />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
