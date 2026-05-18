'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Menu, X, Database } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-black/40 backdrop-blur-md border-b border-white/10 py-3'
            : 'py-5'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-lg bg-[var(--accent-glow)] border border-[var(--accent)]/30 flex items-center justify-center group-hover:border-[var(--accent)] transition-colors">
              <Database size={14} className="text-accent" style={{ color: 'var(--accent)' }} />
            </div>
            <span className="font-display font-700 text-sm tracking-wide" style={{ fontFamily: 'var(--font-syne)', fontWeight: 700 }}>
              Ayomikun<span style={{ color: 'var(--accent)' }}>.</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                className="hover-underline text-sm font-medium transition-colors"
                style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-dm-sans)' }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all border border-[var(--border)] hover:border-[var(--accent)]/50 hover:bg-[var(--accent-glow)]"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun size={15} style={{ color: 'var(--accent)' }} />
                ) : (
                  <Moon size={15} style={{ color: 'var(--accent)' }} />
                )}
              </button>
            )}

            <a
              href="/Ayomikun_Adaramola_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all border"
              style={{
                backgroundColor: 'var(--accent-glow)',
                borderColor: 'var(--accent)',
                color: 'var(--accent)',
                fontFamily: 'var(--font-dm-sans)',
              }}
            >
              Resume
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center border border-[var(--border)]"
            >
              {mobileOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[60px] left-0 right-0 z-40 md:hidden"
            style={{ background: 'var(--bg-primary)', borderBottom: '1px solid var(--border)' }}
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="py-3 px-3 rounded-lg text-sm font-medium transition-colors hover:bg-[var(--accent-glow)]"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="/Ayomikun_Adaramola_Resume.pdf"
                target="_blank"
                className="mt-2 py-3 px-3 rounded-lg text-sm font-medium text-center border"
                style={{ borderColor: 'var(--accent)', color: 'var(--accent)' }}
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
