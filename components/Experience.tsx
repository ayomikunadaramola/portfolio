'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const experiences = [
  {
    title: 'Senior Data Engineer',
    company: '10Alytics',
    period: '2026 – Present',
    type: 'Full-time',
    highlights: [
      'Processed 500K+ daily banking transactions through production-grade streaming pipelines.',
      'Reduced pipeline latency to under 5 minutes with automated schema evolution.',
      'Developed high-availability Python-based internal APIs and data services with async processing and robust error handling, maintaining 99.7% system uptime.',
      'Implemented automated monitoring, anomaly detection, and data quality validation processes that improved reliability across upstream event streams.',
      'Collaborated with cross-functional engineering teams to improve platform observability, operational efficiency, and compliance readiness.',
      'Mentored aspiring data engineers on ETL design, cloud infrastructure, orchestration, and production engineering best practices.',
    ],
    tools: ['Python', 'Airflow', 'PostgreSQL', 'AWS', 'Snowflake', 'Docker', 'Kafka', 'FastAPI', 'Git'],
  },
  {
    title: 'Data Engineer Associate',
    company: 'Eagles Consulting',
    period: '2025 – present',
    type: 'Remote',
    highlights: [
      'Designed and automated cloud-based ETL workflows that reduced manual operational workload by 30+ hours weekly.',
      'Built billing and cost-monitoring systems to track service performance, operational usage, and reporting metrics across multiple business units.',
      'Developed analytical dashboards and operational reports using SQL, Python, and BI tools to improve management visibility into business performance.',
      'Implemented structured data validation and monitoring pipelines that improved reporting accuracy and data reliability.',
      'Collaborated with technical and non-technical stakeholders to deliver scalable, data-driven solutions aligned with operational and strategic goals.',
      'Optimized reporting workflows and query performance, improving reporting turnaround time by 25–30%.',
    ],
    tools: ['SQL', 'Python', 'BigQuery', 'Looker Studio', 'ETL Pipelines', 'Workflow Automation'],
  },
  {
    title: 'Data Engineer',
    company: 'Evince Nigeria Limited',
    period: '2023 – 2024',
    type: 'Hybrid',
    highlights: [
      'Built and maintained scalable ETL pipelines for customer analytics, revenue tracking, and operational reporting using Python and SQL.',
      'Automated ingestion, transformation, and storage workflows to support faster business intelligence and operational decision-making.',
      'Optimized database performance and query execution, reducing query runtime by 50% through indexing, tuning, and query optimization.',
      'Applied analytics and machine learning techniques to analyze customer behavior and purchasing patterns, supporting conversion optimization initiatives.',
      'Developed reporting workflows and dashboard datasets that improved reporting speed, consistency, and accessibility across teams.',
      'Collaborated with business stakeholders to deliver actionable insights on customer trends, revenue drivers, and operational performance metrics.',
    ],
    tools: ['Python', 'SQL', 'ETL Pipelines', 'Data Analytics', 'Data Processing', 'Data Modelling'],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="py-24 lg:py-32 relative" ref={ref}
      style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center gap-4 mb-4"
        >
          <span className="section-label">Experience</span>
          <div className="h-px flex-1 max-w-24" style={{ background: 'var(--accent)' }} />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-3xl lg:text-4xl font-bold mb-12"
          style={{ fontFamily: 'var(--font-syne)', color: 'var(--text-primary)' }}
        >
          Professional Journey
        </motion.h2>

        <div className="max-w-4xl">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15 }}
              className="relative pl-10 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              {i < experiences.length - 1 && (
                <div className="absolute left-[7px] top-6 bottom-0 w-px"
                  style={{ background: 'linear-gradient(to bottom, var(--accent), transparent)' }} />
              )}

              {/* Dot */}
              <div className="absolute left-0 top-1 w-4 h-4 rounded-full border-2 flex items-center justify-center"
                style={{ borderColor: 'var(--accent)', background: 'var(--bg-primary)' }}>
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
              </div>

              <div className="glass-card rounded-2xl p-6">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-lg font-bold mb-1"
                      style={{ fontFamily: 'var(--font-syne)', color: 'var(--text-primary)' }}>
                      {exp.title}
                    </h3>
                    <p className="text-sm font-medium" style={{ color: 'var(--accent)' }}>
                      {exp.company}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="tech-tag mb-1 inline-block">{exp.period}</div>
                    <br />
                    <span className="text-xs" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-jetbrains)' }}>
                      {exp.type}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2 mb-5">
                  {exp.highlights.map((h, hi) => (
                    <li key={hi} className="flex items-start gap-2.5 text-sm"
                      style={{ color: 'var(--text-secondary)' }}>
                      <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'var(--accent)' }} />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tools.map(tool => (
                    <span key={tool} className="tech-tag">{tool}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
