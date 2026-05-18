'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, Github, ExternalLink } from 'lucide-react'
import { getFeaturedProjects, projects } from '@/lib/projects'
import { getDiagram } from './PipelineDiagram'

function ProjectCard({ project, index }: { project: ReturnType<typeof getFeaturedProjects>[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass-card rounded-2xl overflow-hidden group hover:border-[var(--accent)]/30 transition-all hover:-translate-y-1"
    >
      {/* Diagram preview */}
      <div className="relative p-5 pb-2 overflow-hidden"
        style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border)' }}>
        <div className="opacity-80 group-hover:opacity-100 transition-opacity">
          {getDiagram(project.diagramType)}
        </div>
        <div className="absolute top-3 right-3 flex items-center gap-2">
          <span className="tech-tag">{project.year}</span>
          <span className="tech-tag">{project.category}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-bold mb-2 group-hover:text-[var(--accent)] transition-colors"
          style={{ fontFamily: 'var(--font-syne)', color: 'var(--text-primary)' }}>
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>
          {project.shortDescription}
        </p>

        {/* Impact callout */}
        <div className="rounded-xl p-3 mb-5 text-sm"
          style={{ background: 'var(--accent-glow)', border: '1px solid rgba(0,245,212,0.15)' }}>
          <span className="font-semibold" style={{ color: 'var(--accent)', fontFamily: 'var(--font-dm-sans)' }}>
            Impact:{' '}
          </span>
          <span style={{ color: 'var(--text-secondary)' }}>{project.impact.slice(0, 120)}…</span>
        </div>

        {/* Tools */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tools.slice(0, 5).map(tool => (
            <span key={tool} className="tech-tag">{tool}</span>
          ))}
          {project.tools.length > 5 && (
            <span className="tech-tag">+{project.tools.length - 5}</span>
          )}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3">
          <Link
            href={`/projects/${project.slug}`}
            className="flex items-center gap-2 text-sm font-semibold transition-all hover:gap-3"
            style={{ color: 'var(--accent)', fontFamily: 'var(--font-dm-sans)' }}
          >
            View Details
            <ArrowRight size={14} />
          </Link>

          <div className="flex-1" />

          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg flex items-center justify-center border transition-all hover:border-[var(--accent)] hover:bg-[var(--accent-glow)]"
              style={{ borderColor: 'var(--border)', color: 'var(--text-muted)' }}>
              <Github size={14} />
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg flex items-center justify-center border transition-all hover:border-[var(--accent)] hover:bg-[var(--accent-glow)]"
              style={{ borderColor: 'var(--border)', color: 'var(--text-muted)' }}>
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const featured = getFeaturedProjects()

  return (
    <section id="projects" className="py-24 lg:py-32 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center gap-4 mb-4"
        >
          <span className="section-label">Featured Work</span>
          <div className="h-px flex-1 max-w-24" style={{ background: 'var(--accent)' }} />
        </motion.div>

        <div className="flex items-end justify-between mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-4xl font-bold"
            style={{ fontFamily: 'var(--font-syne)', color: 'var(--text-primary)' }}
          >
            Data Engineering
            <br />
            <span style={{ color: 'var(--accent)' }}>Projects</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <span className="text-sm hidden md:block" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-jetbrains)' }}>
              {projects.length} total projects
            </span>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {featured.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>

        {/* All projects link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="text-sm mb-4" style={{ color: 'var(--text-muted)' }}>
            Also featuring: {projects.filter(p => !p.featured).map(p => p.title).join(' · ')}
          </div>
          <a
            href="https://github.com/Stephen-delAyo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold border transition-all hover:bg-[var(--accent-glow)]"
            style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }}
          >
            <Github size={16} />
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
