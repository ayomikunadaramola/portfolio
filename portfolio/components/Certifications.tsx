'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, Clock } from 'lucide-react'

const certifications = [
  {
    title: 'AWS Certified Data Analytics – Specialty',
    issuer: 'Amazon Web Services',
    status: 'In Progress',
    color: '#FF9900',
    emoji: '☁️',
    desc: 'Advanced data analytics on AWS covering Kinesis, Redshift, Athena, Glue, and QuickSight.',
  },
  {
    title: 'Google Professional Data Engineer',
    issuer: 'Google Cloud',
    status: 'In Progress',
    color: '#4285F4',
    emoji: '🌐',
    desc: 'Cloud data engineering on GCP covering BigQuery, Dataflow, Pub/Sub, and Dataproc.',
  },
  {
    title: 'dbt Analytics Engineer Certification',
    issuer: 'dbt Labs',
    status: 'Planned',
    color: '#FF694A',
    emoji: '🔄',
    desc: 'Data transformation best practices using dbt for modern analytics engineering workflows.',
  },
  {
    title: 'Apache Spark Developer Certification',
    issuer: 'Databricks',
    status: 'Planned',
    color: '#E16A00',
    emoji: '⚡',
    desc: 'Distributed data processing with Apache Spark covering DataFrames, Spark SQL, and streaming.',
  },
  {
    title: 'Snowflake SnowPro Core Certification',
    issuer: 'Snowflake',
    status: 'Planned',
    color: '#29B5E8',
    emoji: '❄️',
    desc: 'Core competencies in Snowflake cloud data warehousing, data sharing, and performance optimization.',
  },
  {
    title: 'Airflow Fundamentals',
    issuer: 'Astronomer',
    status: 'Planned',
    color: '#017CEE',
    emoji: '🌊',
    desc: 'Pipeline orchestration with Apache Airflow, DAGs, operators, and scheduling best practices.',
  },
]

export default function Certifications() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="certifications" className="py-24 lg:py-28 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center gap-4 mb-4"
        >
          <span className="section-label">Certifications</span>
          <div className="h-px flex-1 max-w-24" style={{ background: 'var(--accent)' }} />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-3xl lg:text-4xl font-bold mb-3"
          style={{ fontFamily: 'var(--font-syne)', color: 'var(--text-primary)' }}
        >
          Learning & Credentials
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-sm mb-10"
          style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-jetbrains)' }}
        >
          Continuously investing in cloud and data engineering expertise
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.08 }}
              className="glass-card rounded-2xl p-5 group hover:border-[var(--accent)]/30 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                  style={{ background: `${cert.color}15`, border: `1px solid ${cert.color}30` }}>
                  {cert.emoji}
                </div>
                <div className="flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full"
                  style={{
                    background: cert.status === 'In Progress' ? 'rgba(52,211,153,0.1)' : 'var(--bg-secondary)',
                    color: cert.status === 'In Progress' ? '#34D399' : 'var(--text-muted)',
                    border: `1px solid ${cert.status === 'In Progress' ? 'rgba(52,211,153,0.3)' : 'var(--border)'}`,
                    fontFamily: 'var(--font-jetbrains)',
                  }}>
                  <Clock size={10} />
                  {cert.status}
                </div>
              </div>

              <h3 className="text-sm font-bold mb-1 leading-snug"
                style={{ fontFamily: 'var(--font-syne)', color: 'var(--text-primary)' }}>
                {cert.title}
              </h3>
              <p className="text-xs mb-3" style={{ color: cert.color, fontFamily: 'var(--font-dm-sans)' }}>
                {cert.issuer}
              </p>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                {cert.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
