'use client'

import { Github, Linkedin, Mail, Database } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="py-12 border-t" style={{ borderColor: 'var(--border)', background: 'var(--bg-primary)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center"
                style={{ background: 'var(--accent-glow)', border: '1px solid var(--accent)' }}>
                <Database size={13} style={{ color: 'var(--accent)' }} />
              </div>
              <span className="font-bold text-sm" style={{ fontFamily: 'var(--font-syne)', color: 'var(--text-primary)' }}>
                Ayomikun<span style={{ color: 'var(--accent)' }}>.</span>
              </span>
            </div>
            <p className="text-xs" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-jetbrains)' }}>
              Turning raw data into reliable business intelligence.
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap gap-6 justify-center">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' }) }}
                className="text-xs transition-colors hover:text-[var(--accent)]"
                style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-dm-sans)' }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {[
              { icon: Github, href: 'https://github.com/Stephen-delAyo', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/ayomikun-adaramola-', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:ayomikunaj@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-8 h-8 rounded-lg flex items-center justify-center border transition-all hover:border-[var(--accent)] hover:bg-[var(--accent-glow)]"
                style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }}
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t text-center" style={{ borderColor: 'var(--border)' }}>
          <p className="text-xs" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-jetbrains)' }}>
            © {year} Ayomikun Adaramola · Data Engineer · Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
