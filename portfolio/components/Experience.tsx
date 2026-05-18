'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const experiences = [
  {
    title: 'Data Engineer',
    company: 'Independent / Freelance',
    period: '2022 – Present',
    type: 'Full-time',
    highlights: [
      'Designed and deployed end-to-end data pipelines on AWS and GCP, ingesting and transforming 10+ GB datasets daily',
      'Built automated ETL workflows using Apache Airflow and Mage AI, reducing manual data processing time by 70%',
      'Modeled star-schema data warehouses in BigQuery and Snowflake for analytics teams across multiple clients',
      'Implemented real-time data streaming with AWS Lambda, DynamoDB Streams, and Snowpipe for near-zero latency pipelines',
      'Containerized data engineering workloads with Docker for reproducible, deployment-ready environments',
    ],
    tools: ['Python', 'AWS', 'GCP', 'BigQuery', 'Snowflake', 'Airflow', 'Docker'],
  },
  {
    title: 'Data Analyst / Junior Data Engineer',
    company: 'Analytics & Consulting',
    period: '2020 – 2022',
    type: 'Full-time',
    highlights: [
      'Developed and maintained complex SQL queries, CTEs, and stored procedures for data extraction and reporting',
      'Built interactive dashboards in Looker Studio and Power BI to surface KPIs for business stakeholders',
      'Automated data quality checks and reconciliation pipelines, reducing reporting errors by 40%',
      'Conducted large-scale data analysis on WHO/UNICEF datasets to support SDG monitoring initiatives',
      'Collaborated with cross-functional teams to define data requirements and build analytics-ready data models',
    ],
    tools: ['SQL', 'Python', 'Power BI', 'Looker Studio', 'MySQL', 'Google Sheets'],
  },
  {
    title: 'Data Analytics Trainee',
    company: 'Data Engineering Bootcamp',
    period: '2019 – 2020',
    type: 'Training Program',
    highlights: [
      'Completed intensive training in Python, SQL, cloud data engineering, and distributed computing fundamentals',
      'Built foundational ETL pipelines and data models as part of structured engineering curriculum',
      'Developed first Apache Spark project using Scala for distributed data processing at scale',
      'Gained hands-on experience with AWS services: S3, Glue, Athena, Lambda for cloud-native data workflows',
    ],
    tools: ['Python', 'SQL', 'Apache Spark', 'Scala', 'AWS', 'Linux'],
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
