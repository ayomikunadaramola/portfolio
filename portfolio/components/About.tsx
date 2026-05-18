'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { Database, Cloud, GitBranch, BarChart3, Zap, Server } from 'lucide-react'

const highlights = [
  { icon: Database, label: 'ETL Pipelines', desc: 'End-to-end data transformation workflows' },
  { icon: Cloud, label: 'Cloud Platforms', desc: 'AWS, GCP, Azure data infrastructure' },
  { icon: Server, label: 'Data Warehousing', desc: 'BigQuery, Snowflake, Redshift modeling' },
  { icon: GitBranch, label: 'Pipeline Orchestration', desc: 'Airflow, Mage AI, event-driven systems' },
  { icon: BarChart3, label: 'Analytics Engineering', desc: 'dbt models, BI-ready data layers' },
  { icon: Zap, label: 'Big Data Solutions', desc: 'Spark, distributed processing at scale' },
]

const stats = [
  { value: '5+', label: 'Years Experience' },
  { value: '7+', label: 'Projects Delivered' },
  { value: '3', label: 'Cloud Platforms' },
  { value: '10+', label: 'Technologies' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-24 lg:py-32 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="section-label">About Me</span>
          <div className="h-px flex-1 max-w-24" style={{ background: 'var(--accent)' }} />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left column: Image + Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="relative mb-8">
              <div className="relative w-full aspect-[4/5] max-w-sm rounded-2xl overflow-hidden"
                style={{ border: '1px solid var(--border)' }}>
                <Image
                  src="/profile.jpg"
                  alt="Ayomikun Adaramola"
                  fill
                  className="object-cover object-top"
                />
                {/* Code overlay */}
                <div className="absolute bottom-0 inset-x-0 p-4"
                  style={{ background: 'linear-gradient(to top, var(--bg-primary), transparent)' }}>
                  <p className="text-xs font-mono" style={{ color: 'var(--accent)', fontFamily: 'var(--font-jetbrains)' }}>
                    {'> Building data systems that matter'}
                  </p>
                </div>
              </div>

              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-2xl -z-10 opacity-30"
                style={{ background: 'var(--accent-glow)', border: '1px solid var(--accent)' }} />
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="glass-card rounded-xl p-5"
                >
                  <div className="text-3xl font-bold mb-1"
                    style={{ fontFamily: 'var(--font-syne)', color: 'var(--accent)' }}>
                    {stat.value}
                  </div>
                  <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right column: Bio + Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-syne)', color: 'var(--text-primary)' }}>
              Engineering data systems
              <br />
              <span style={{ color: 'var(--accent)' }}>that power decisions.</span>
            </h2>

            <div className="space-y-4 mb-10">
              <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                I am a Data Engineer with over 5 years of experience designing, building, and optimizing data systems
                that transform raw data into reliable business insights. I specialize in building scalable data pipelines,
                ETL workflows, cloud-based data solutions, and analytics-ready data models.
              </p>
              <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                My toolkit spans Python, SQL, Airflow, Spark, BigQuery, Snowflake, AWS, and GCP. I help businesses
                move from scattered, messy data to clean, structured, and trustworthy data systems that support
                reporting, automation, and growth.
              </p>
              <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                My work sits at the intersection of engineering, analytics, and problem-solving — building the
                data foundation that helps organizations make smarter decisions.
              </p>
            </div>

            {/* Highlights grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  className="flex items-start gap-3 p-4 rounded-xl transition-all hover:bg-[var(--accent-glow)] group"
                  style={{ border: '1px solid var(--border)' }}
                >
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors group-hover:bg-[var(--accent)]"
                    style={{ background: 'var(--accent-glow)' }}>
                    <item.icon size={15} style={{ color: 'var(--accent)' }}
                      className="group-hover:text-[var(--bg-primary)] transition-colors" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold mb-0.5"
                      style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-syne)' }}>
                      {item.label}
                    </div>
                    <div className="text-xs leading-snug" style={{ color: 'var(--text-muted)' }}>
                      {item.desc}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
