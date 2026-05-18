'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Github, Star, GitFork, Code2 } from 'lucide-react'

const repositories = [
  {
    name: 'DE-PROJECTS',
    desc: 'Collection of end-to-end data engineering projects: YouTube analytics, Uber pipeline, Fitness tracker, Real-time AWS.',
    stars: 12,
    forks: 5,
    lang: 'Python',
    langColor: '#3B82F6',
    href: 'https://github.com/ayomikunadaramola/DE-PROJECTS',
  },
  {
    name: 'Sql_Projects',
    desc: 'SQL-based data analysis projects including integrated water management analysis with advanced query techniques.',
    stars: 8,
    forks: 3,
    lang: 'SQL',
    langColor: '#F59E0B',
    href: 'https://github.com/ayomikunadaramola/Sql_Projects',
  },
]

const contributions = Array.from({ length: 52 }, (_, weekIdx) =>
  Array.from({ length: 7 }, (_, dayIdx) => {
    const rand = Math.random()
    if (rand < 0.35) return 0
    if (rand < 0.55) return 1
    if (rand < 0.75) return 2
    if (rand < 0.88) return 3
    return 4
  })
)

function ContributionGraph() {
  const levels = [
    'transparent',
    'rgba(0,245,212,0.2)',
    'rgba(0,245,212,0.4)',
    'rgba(0,245,212,0.65)',
    'var(--accent)',
  ]

  return (
    <div className="overflow-x-auto">
      <div className="flex gap-[3px] min-w-[600px]">
        {contributions.map((week, wi) => (
          <div key={wi} className="flex flex-col gap-[3px]">
            {week.map((level, di) => (
              <motion.div
                key={di}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: (wi * 7 + di) * 0.001 }}
                className="w-3 h-3 rounded-sm"
                style={{ background: levels[level] }}
                title={`Level ${level}`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function GitHubStats() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-24 lg:py-28 relative" ref={ref}
      style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center gap-4 mb-4"
        >
          <span className="section-label">Open Source</span>
          <div className="h-px flex-1 max-w-24" style={{ background: 'var(--accent)' }} />
        </motion.div>

        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-4xl font-bold"
            style={{ fontFamily: 'var(--font-syne)', color: 'var(--text-primary)' }}
          >
            GitHub Activity
          </motion.h2>

          <motion.a
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            href="https://github.com/ayomikunadaramola"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm border transition-all hover:bg-[var(--accent-glow)]"
            style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }}
          >
            <Github size={15} />
            @Stephen-delAyo
          </motion.a>
        </div>

        {/* Contribution graph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="glass-card rounded-2xl p-6 mb-8"
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-semibold" style={{ fontFamily: 'var(--font-syne)', color: 'var(--text-secondary)' }}>
              Contribution Activity
            </span>
            <span className="text-xs" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-jetbrains)' }}>
              last 12 months
            </span>
          </div>
          <ContributionGraph />
          <div className="flex items-center gap-2 mt-3 justify-end">
            <span className="text-xs" style={{ color: 'var(--text-muted)' }}>Less</span>
            {['transparent', 'rgba(0,245,212,0.2)', 'rgba(0,245,212,0.4)', 'rgba(0,245,212,0.65)', 'var(--accent)'].map((c, i) => (
              <div key={i} className="w-3 h-3 rounded-sm" style={{ background: c, border: '1px solid var(--border)' }} />
            ))}
            <span className="text-xs" style={{ color: 'var(--text-muted)' }}>More</span>
          </div>
        </motion.div>

        {/* Repos */}
        <div className="grid md:grid-cols-2 gap-5">
          {repositories.map((repo, i) => (
            <motion.a
              key={repo.name}
              href={repo.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="glass-card rounded-2xl p-5 block hover:border-[var(--accent)]/40 transition-all group"
            >
              <div className="flex items-start gap-3 mb-3">
                <Code2 size={16} style={{ color: 'var(--accent)' }} className="mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-bold text-sm group-hover:text-[var(--accent)] transition-colors"
                    style={{ fontFamily: 'var(--font-syne)', color: 'var(--text-primary)' }}>
                    {repo.name}
                  </div>
                  <p className="text-xs mt-1 leading-snug" style={{ color: 'var(--text-secondary)' }}>
                    {repo.desc}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-xs" style={{ color: 'var(--text-muted)' }}>
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: repo.langColor }} />
                  {repo.lang}
                </span>
                <span className="flex items-center gap-1"><Star size={11} /> {repo.stars}</span>
                <span className="flex items-center gap-1"><GitFork size={11} /> {repo.forks}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
