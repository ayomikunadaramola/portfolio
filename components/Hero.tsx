'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Github, Linkedin, Mail, ArrowRight, Download, ChevronDown } from 'lucide-react'

const techBadges = ['Python', 'Apache Spark', 'BigQuery', 'Snowflake', 'Airflow', 'AWS', 'GCP', 'dbt']

export default function Hero() {
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-grid pt-24">
      {/* Ambient blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, var(--accent), transparent)' }} />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full opacity-8 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #3B82F6, transparent)' }} />

      {/* Floating data nodes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[
          { x: '15%', y: '20%', delay: 0 },
          { x: '82%', y: '15%', delay: 1.5 },
          { x: '75%', y: '70%', delay: 0.8 },
          { x: '10%', y: '75%', delay: 2 },
          { x: '50%', y: '10%', delay: 1.2 },
        ].map((dot, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full"
            style={{ left: dot.x, top: dot.y, background: 'var(--accent)', opacity: 0.4 }}
            animate={{ y: [-8, 8, -8], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 4 + i, delay: dot.delay, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="section-label">Available for opportunities</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] mb-6"
              style={{ fontFamily: 'var(--font-syne)', color: 'var(--text-primary)' }}
            >
              Ayomikun
              <br />
              <span style={{ color: 'var(--accent)' }}>Adaramola</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-8 h-px" style={{ background: 'var(--accent)' }} />
              <p className="text-base font-medium" style={{ color: 'var(--accent)', fontFamily: 'var(--font-dm-sans)' }}>
                Data Engineer
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl lg:text-2xl font-medium mb-4 leading-snug"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-syne)' }}
            >
              Building Scalable Cloud Data
              <br />Platforms & Analytics Solutions
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-base mb-8 leading-relaxed max-w-lg"
              style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-dm-sans)' }}
            >
              Turning raw data into reliable business intelligence.
              5+ years designing pipelines, ETL workflows, and cloud
              data warehouses that power smarter decisions.
            </motion.p>

            {/* Tech badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-2 mb-10"
            >
              {techBadges.map((t, i) => (
                <motion.span
                  key={t}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + i * 0.05 }}
                  className="tech-tag"
                >
                  {t}
                </motion.span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <button
                onClick={scrollToProjects}
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:gap-3"
                style={{
                  background: 'var(--accent)',
                  color: 'var(--bg-primary)',
                  fontFamily: 'var(--font-dm-sans)',
                }}
              >
                View Projects
                <ArrowRight size={16} />
              </button>

              <a
                href="/Ayomikun_ADARAMOLA_Data_Engineer_Resume.pdf"
                target="_blank"
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all border hover:bg-[var(--accent-glow)]"
                style={{
                  borderColor: 'var(--border)',
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-dm-sans)',
                }}
              >
                <Download size={16} />
                Download Resume
              </a>

              <button
                onClick={scrollToContact}
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:bg-[var(--accent-glow)]"
                style={{
                  color: 'var(--text-secondary)',
                  fontFamily: 'var(--font-dm-sans)',
                }}
              >
                Contact Me
              </button>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-4"
            >
              {[
                { icon: Github, href: 'https://github.com/ayomikunadaramola', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/ayomikun-adaramola-', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:ayomikunaj@gmail.com', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center border transition-all hover:border-[var(--accent)] hover:bg-[var(--accent-glow)]"
                  style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }}
                >
                  <Icon size={17} />
                </a>
              ))}
              <div className="h-px flex-1 max-w-16" style={{ background: 'var(--border)' }} />
              <span className="text-xs" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-jetbrains)' }}>
                Lagos, NG
              </span>
            </motion.div>
          </div>

          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-4 rounded-full opacity-20"
                style={{
                  background: `conic-gradient(from 0deg, var(--accent), transparent, var(--accent))`,
                }}
              />

              {/* Stats card - top right */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -top-4 -right-4 glass-card rounded-xl px-4 py-3 z-10 text-center min-w-[80px]"
              >
                <div className="text-2xl font-bold" style={{ fontFamily: 'var(--font-syne)', color: 'var(--accent)' }}>5+</div>
                <div className="text-xs" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-dm-sans)' }}>Years Exp.</div>
              </motion.div>

              {/* Stats card - bottom left */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="absolute -bottom-4 -left-4 glass-card rounded-xl px-4 py-3 z-10 text-center"
              >
                <div className="text-2xl font-bold" style={{ fontFamily: 'var(--font-syne)', color: 'var(--accent)' }}>7+</div>
                <div className="text-xs" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-dm-sans)' }}>Projects</div>
              </motion.div>

              {/* Image frame */}
              <div className="relative w-72 h-80 lg:w-80 lg:h-96 rounded-3xl overflow-hidden border border-cyan-500/20 shadow-2xl shadow-cyan-500/10"
                style={{ border: '1px solid var(--border)' }}>
                <Image
                  src="/profile.jpg"
                  alt="Ayomikun Adaramola - Data Engineer"
                  fill
                  className="object-cover object-center"
                  priority
                />
                {/* Accent overlay at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[var(--bg-primary)]/60 to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col items-center gap-2 mt-16 lg:mt-20"
        >
          <span className="text-xs tracking-widest uppercase" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-jetbrains)' }}>
            scroll
          </span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ChevronDown size={16} style={{ color: 'var(--accent)' }} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
