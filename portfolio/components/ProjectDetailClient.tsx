'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Github, ExternalLink, Zap, Target, Wrench, TrendingUp, Lightbulb, ArrowRight, type LucideIcon } from 'lucide-react'
import { Project, projects } from '@/lib/projects'
import { getDiagram } from './PipelineDiagram'
import Navbar from './Navbar'
import Footer from './Footer'

interface Props {
  project: Project
}

function SectionCard({
  icon: Icon,
  title,
  color,
  children,
  delay = 0,
}: {
  icon: LucideIcon
  title: string
  color: string
  children: React.ReactNode
  delay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="glass-card rounded-2xl p-6"
    >
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center"
          style={{ background: `${color}18`, border: `1px solid ${color}30` }}
        >
          <Icon size={16} style={{ color }} />
        </div>
        <h2
          className="text-base font-bold"
          style={{ fontFamily: 'var(--font-syne)', color: 'var(--text-primary)' }}
        >
          {title}
        </h2>
      </div>
      {children}
    </motion.div>
  )
}

export default function ProjectDetailClient({ project }: Props) {
  const currentIndex = projects.findIndex((p) => p.slug === project.slug)
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null

  const futureImprovements: Record<string, string[]> = {
    'youtube-data-analysis': [
      'Add Apache Kafka for real-time streaming of trending data as it changes',
      'Implement dbt models on top of Athena for cleaner analytics layers',
      'Build a Looker Studio dashboard auto-refreshed via Athena scheduled queries',
      'Add data quality checks with Great Expectations before Glue ETL runs',
    ],
    'uber-data-analytics': [
      'Migrate batch ingestion to Pub/Sub for real-time streaming capabilities',
      'Add dbt transformation layer on top of BigQuery for modular SQL models',
      'Implement data lineage tracking using OpenLineage and Marquez',
      'Extend Looker Studio dashboard with driver performance and pricing analytics',
    ],
    'realtime-aws-snowflake': [
      'Add anomaly detection on weather metrics using AWS SageMaker',
      'Implement dead-letter queues for failed Lambda events to prevent data loss',
      'Expand to multiple weather regions with fan-out Lambda architecture',
      'Add Snowflake Dynamic Tables for zero-copy materialised views',
    ],
    'fitness-tracker-spark': [
      'Migrate to Databricks for managed Spark with MLflow model tracking',
      'Add real-time streaming layer using Spark Structured Streaming',
      'Build recommendation engine for personalised fitness programs',
      'Deploy as a Spark job on EMR with auto-scaling cluster policies',
    ],
    'water-sql-analysis': [
      'Migrate to dbt project structure for version-controlled SQL transformations',
      'Build a Power BI dashboard connecting directly to MySQL for live reporting',
      'Add geospatial analysis layer using PostGIS for regional water mapping',
      'Implement data freshness SLAs and alerting for operational monitoring',
    ],
    'who-water-analysis-2020': [
      'Automate data ingestion from WHO/UNICEF JMP API when available',
      'Build interactive Tableau dashboard for public SDG 6 tracking',
      'Apply time-series forecasting to project future SDG 6 attainment rates',
      'Extend to sanitation and hygiene dimensions of the JMP data model',
    ],
    'enhancing-drinking-water-data': [
      'Automate annual data refresh with Python web scraping pipeline',
      'Build a Looker Studio dashboard for real-time SDG 6 progress tracking',
      'Add statistical regression modelling to identify key improvement drivers',
      'Integrate with UN Sustainable Development Goals API for live benchmarks',
    ],
  }

  const keyDecisions: Record<string, string[]> = {
    'youtube-data-analysis': [
      'Chose AWS Glue over custom Spark jobs to reduce infrastructure overhead',
      'Used S3 as a data lake layer (raw → cleaned → analytics) for clear lineage',
      'Serverless Lambda for transformation avoids idle compute costs',
      'Athena for ad-hoc querying eliminates need for a dedicated compute cluster',
    ],
    'uber-data-analytics': [
      'Star-schema design in BigQuery for optimised analytical query performance',
      'Mage AI chosen over Airflow for simpler local development and deployment',
      'Partitioned BigQuery tables by pickup_date to reduce query scan costs',
      'Looker Studio as BI layer for zero-cost visualisation on GCP',
    ],
    'realtime-aws-snowflake': [
      'DynamoDB Streams as event trigger avoids polling overhead entirely',
      'Snowpipe for continuous auto-loading decouples ingestion from warehousing',
      'S3 staging layer between DynamoDB and Snowflake enables replay and auditing',
      'Lambda scheduled at 10-minute intervals balances API rate limits vs freshness',
    ],
    'fitness-tracker-spark': [
      'Scala over PySpark for performance-critical distributed transformations',
      'Docker for reproducible local Spark environments without cluster setup',
      'DataFrames over RDDs for Spark Catalyst optimiser query planning benefits',
      'Aggregation pushdowns to Spark SQL engine to minimise data shuffling',
    ],
    'water-sql-analysis': [
      'CTEs over nested subqueries for readability and execution plan clarity',
      'Window functions for ranked comparisons without self-joins',
      'Indexed source classification columns to speed up GROUP BY aggregations',
      'Modular query design allows individual steps to be tested in isolation',
    ],
    default: [
      'Prioritised data accuracy and reliability over processing speed',
      'Built modular, reusable components for long-term maintainability',
      'Applied documentation and naming conventions from the start',
    ],
  }

  const decisions =
    keyDecisions[project.slug] || keyDecisions['default']
  const improvements =
    futureImprovements[project.slug] || futureImprovements['water-sql-analysis']

  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh' }}>
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-12 relative overflow-hidden bg-grid">
        <div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-10 pointer-events-none"
          style={{ background: 'radial-gradient(circle, var(--accent), transparent)' }}
        />
        <div className="max-w-5xl mx-auto px-6">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm transition-colors hover:text-[var(--accent)]"
              style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-dm-sans)' }}
            >
              <ArrowLeft size={15} />
              Back to Projects
            </Link>
          </motion.div>

          {/* Badges */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center gap-3 mb-5"
          >
            <span className="tech-tag">{project.category}</span>
            <span className="tech-tag">{project.year}</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5"
            style={{ fontFamily: 'var(--font-syne)', color: 'var(--text-primary)' }}
          >
            {project.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base leading-relaxed max-w-2xl mb-8"
            style={{ color: 'var(--text-secondary)' }}
          >
            {project.description}
          </motion.p>

          {/* Link buttons */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-wrap gap-3"
          >
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold border transition-all hover:bg-[var(--accent-glow)] hover:border-[var(--accent)]"
                style={{
                  borderColor: 'var(--border)',
                  color: 'var(--text-secondary)',
                  fontFamily: 'var(--font-dm-sans)',
                }}
              >
                <Github size={15} />
                View on GitHub
              </a>
            )}
            {project.live && project.live !== '#' && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all"
                style={{
                  background: 'var(--accent)',
                  color: 'var(--bg-primary)',
                  fontFamily: 'var(--font-dm-sans)',
                }}
              >
                <ExternalLink size={15} />
                Live Project
              </a>
            )}
          </motion.div>
        </div>
      </section>

      {/* Architecture diagram */}
      <section className="py-10" style={{ background: 'var(--bg-secondary)' }}>
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p
              className="section-label mb-4"
              style={{ fontFamily: 'var(--font-jetbrains)' }}
            >
              Architecture / Data Flow
            </p>
            <div
              className="glass-card rounded-2xl p-6 overflow-hidden"
              style={{ border: '1px solid var(--border)' }}
            >
              {getDiagram(project.diagramType)}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main content grid */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-6">
          {/* Problem */}
          <SectionCard icon={Target} title="Problem Statement" color="#F87171" delay={0.1}>
            <p
              className="text-sm leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              {project.problem}
            </p>
          </SectionCard>

          {/* Solution */}
          <SectionCard icon={Zap} title="Engineering Solution" color="#00F5D4" delay={0.15}>
            <p
              className="text-sm leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              {project.solution}
            </p>
          </SectionCard>

          {/* Technologies */}
          <SectionCard icon={Wrench} title="Technologies Used" color="#60A5FA" delay={0.2}>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span key={tool} className="tech-tag">
                  {tool}
                </span>
              ))}
            </div>
          </SectionCard>

          {/* Business impact */}
          <SectionCard icon={TrendingUp} title="Business Impact" color="#34D399" delay={0.25}>
            <div
              className="rounded-xl p-4 mb-0"
              style={{
                background: 'rgba(52,211,153,0.06)',
                border: '1px solid rgba(52,211,153,0.2)',
              }}
            >
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                {project.impact}
              </p>
            </div>
          </SectionCard>
        </div>
      </section>

      {/* Key engineering decisions */}
      <section className="pb-8" style={{ background: 'var(--bg-secondary)' }}>
        <div className="max-w-5xl mx-auto px-6 py-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{
                  background: 'rgba(167,139,250,0.15)',
                  border: '1px solid rgba(167,139,250,0.3)',
                }}
              >
                <Lightbulb size={16} style={{ color: '#A78BFA' }} />
              </div>
              <h2
                className="text-base font-bold"
                style={{ fontFamily: 'var(--font-syne)', color: 'var(--text-primary)' }}
              >
                Key Engineering Decisions
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {decisions.map((d, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35 + i * 0.07 }}
                  className="flex items-start gap-3 glass-card rounded-xl p-4"
                >
                  <span
                    className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: '#A78BFA' }}
                  />
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {d}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Future improvements */}
      <section className="py-10">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="section-label mb-4">Future Improvements</p>
            <div className="glass-card rounded-2xl p-6">
              <ul className="space-y-3">
                {improvements.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.45 + i * 0.06 }}
                    className="flex items-start gap-3 text-sm"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    <span
                      className="mt-2 w-1 h-1 rounded-full flex-shrink-0"
                      style={{ background: 'var(--accent)' }}
                    />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Prev / Next navigation */}
      <section
        className="py-10 border-t"
        style={{ borderColor: 'var(--border)', background: 'var(--bg-secondary)' }}
      >
        <div className="max-w-5xl mx-auto px-6">
          <p className="section-label mb-6">More Projects</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {prevProject ? (
              <Link
                href={`/projects/${prevProject.slug}`}
                className="glass-card rounded-2xl p-5 group flex items-center gap-4 hover:border-[var(--accent)]/30 transition-all"
              >
                <ArrowLeft
                  size={18}
                  style={{ color: 'var(--text-muted)' }}
                  className="group-hover:text-[var(--accent)] transition-colors flex-shrink-0"
                />
                <div>
                  <p
                    className="text-xs mb-1"
                    style={{
                      color: 'var(--text-muted)',
                      fontFamily: 'var(--font-jetbrains)',
                    }}
                  >
                    Previous
                  </p>
                  <p
                    className="text-sm font-semibold group-hover:text-[var(--accent)] transition-colors leading-snug"
                    style={{ fontFamily: 'var(--font-syne)', color: 'var(--text-primary)' }}
                  >
                    {prevProject.title}
                  </p>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {nextProject ? (
              <Link
                href={`/projects/${nextProject.slug}`}
                className="glass-card rounded-2xl p-5 group flex items-center justify-end gap-4 text-right hover:border-[var(--accent)]/30 transition-all"
              >
                <div>
                  <p
                    className="text-xs mb-1"
                    style={{
                      color: 'var(--text-muted)',
                      fontFamily: 'var(--font-jetbrains)',
                    }}
                  >
                    Next
                  </p>
                  <p
                    className="text-sm font-semibold group-hover:text-[var(--accent)] transition-colors leading-snug"
                    style={{ fontFamily: 'var(--font-syne)', color: 'var(--text-primary)' }}
                  >
                    {nextProject.title}
                  </p>
                </div>
                <ArrowRight
                  size={18}
                  style={{ color: 'var(--text-muted)' }}
                  className="group-hover:text-[var(--accent)] transition-colors flex-shrink-0"
                />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
