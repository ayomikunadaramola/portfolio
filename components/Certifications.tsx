'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, Clock } from 'lucide-react'

const certifications = [
  {
    title: 'ETL in Python and SQL',
    issuer: 'LinkedIn Learning',
    status: 'Completed • 2025',
    color: '#0A66C2',
    emoji: '🗄️',
    desc: 'Hands-on ETL workflows using Python, SQL, and modern data transformation practices.',
  },
  {
    title: 'Modernizing Data Lakes and Warehouses with GCP',
    issuer: 'Google Cloud',
    status: 'Completed • 2024',
    color: '#FBBC05',
    emoji: '🏗️',
    desc: 'Modernized enterprise data platforms using lakehouse architectures, BigQuery, and cloud-native storage systems.',
  },
  {
    title: 'AWS AI Practitioner Challenge',
    issuer: 'Udacity',
    status: 'Completed • 2026',
    color: '#FF9900',
    emoji: '🤖',
    desc: 'AI fundamentals, cloud AI services, and practical AI workflows on AWS.',
  },
  {
    title: 'Analyze Data Using AI with PartyRock',
    issuer: 'Udacity',
    status: 'Completed • 2026',
    color: '#7C3AED',
    emoji: '📊',
    desc: 'AI-assisted analytics and intelligent reporting using PartyRock tools.',
  },
  {
    title: 'ALX Data Science',
    issuer: 'ExploreAI Academy',
    status: 'Completed • 2024',
    color: '#00C2A8',
    emoji: '📊',
    desc: 'Developed foundations in analytics, Python programming, SQL, and applied data science workflows.',
  },
  {
    title: 'Building Batch Data Pipelines on Google Cloud',
    issuer: 'Google Cloud',
    status: 'Completed • 2024',
    color: '#4285F4',
    emoji: '☁️',
    desc: 'Designed scalable batch ETL pipelines on GCP using BigQuery, Cloud Storage, and orchestration best practices.',
  },
  {
    title: 'Serverless Data Processing with Dataflow',
    issuer: 'Google Cloud',
    status: 'Completed • 2024',
    color: '#34A853',
    emoji: '⚡',
    desc: 'Built scalable stream and batch processing workflows using Google Cloud Dataflow and Apache Beam.',
  },
  {
    title: 'Build and Optimize Data Warehouses with BigQuery',
    issuer: 'Google Cloud',
    status: 'Completed • 2024',
    color: '#4285F4',
    emoji: '🏛️',
    desc: 'Optimized analytical workloads and designed cloud-native warehouse architectures using BigQuery.',
  },
  {
    title: 'Build a Data Mesh with Dataplex',
    issuer: 'Google Cloud',
    status: 'Completed • 2024',
    color: '#EA4335',
    emoji: '🕸️',
    desc: 'Implemented modern decentralized data governance and lakehouse management using Dataplex.',
  },
  {
    title: 'Introduction to Data Engineering',
    issuer: 'IBM',
    status: 'Completed • 2023',
    color: '#0F62FE',
    emoji: '🛠️',
    desc: 'Covered core data engineering concepts including ETL, warehousing, orchestration, and data pipelines.',
  },
  {
    title: 'Learning SnowflakeDB',
    issuer: 'IBM',
    status: 'Completed • 2024',
    color: '#29B5E8',
    emoji: '❄️',
    desc: 'Explored Snowflake architecture, cloud warehousing, performance optimization, and secure data sharing.',
  },
  {
    title: 'Python for Data Engineering',
    issuer: 'IBM',
    status: 'Completed • 2024',
    color: '#FFD43B',
    emoji: '🐍',
    desc: 'Applied Python for ETL development, automation, data transformation, and scalable engineering workflows.',
  },
]

export default function Certifications() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="certifications" className="py-24 lg:py-24 relative" ref={ref}>
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
              <h3
  className="text-sm font-bold mb-1 leading-snug"
  style={{ fontFamily: 'var(--font-syne)', color: 'var(--text-primary)' }}
>
  {cert.title}
</h3>

<p
  className="text-xs mb-3"
  style={{ color: cert.color, fontFamily: 'var(--font-dm-sans)' }}
>
  {cert.issuer}
</p>

<p
  className="text-xs leading-relaxed"
  style={{ color: 'var(--text-muted)' }}
>
  {cert.desc}
</p>

</motion.div>
))}
</div>

<div className="mt-10 flex justify-center">
  <a
    href="https://www.linkedin.com/in/ayomikun-adaramola-/details/certifications/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center px-5 py-3 rounded-xl border border-cyan-400/30 hover:border-cyan-400 transition-all"
  >
    View All Certifications
  </a>
</div>
</div>
</section>
)
}


