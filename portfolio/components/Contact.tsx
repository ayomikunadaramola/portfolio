'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Github, Linkedin, Mail, MessageSquare, Send, MapPin } from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'done'>('idle')
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    await new Promise(r => setTimeout(r, 1500))
    setStatus('done')
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'ayomikunaj@gmail.com', href: 'mailto:ayomikunaj@gmail.com' },
    { icon: Linkedin, label: 'LinkedIn', value: 'ayomikun-adaramola', href: 'https://www.linkedin.com/in/ayomikun-adaramola-' },
    { icon: Github, label: 'GitHub', value: 'Stephen-delAyo', href: 'https://github.com/Stephen-delAyo' },
    { icon: MapPin, label: 'Location', value: 'Lagos, Nigeria', href: '#' },
  ]

  return (
    <section id="contact" className="py-24 lg:py-32 relative" ref={ref}
      style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center gap-4 mb-4"
        >
          <span className="section-label">Contact</span>
          <div className="h-px flex-1 max-w-24" style={{ background: 'var(--accent)' }} />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4"
              style={{ fontFamily: 'var(--font-syne)', color: 'var(--text-primary)' }}>
              Let's Build Something
              <br /><span style={{ color: 'var(--accent)' }}>Together.</span>
            </h2>
            <p className="text-base mb-8 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              I'm open to full-time data engineering roles, freelance data pipeline projects, and
              consulting engagements. Whether you need to build a data warehouse from scratch, optimize
              existing pipelines, or migrate to the cloud — let's talk.
            </p>

            <div className="space-y-4 mb-10">
              {contactInfo.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -15 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  className="flex items-center gap-4 p-4 rounded-xl border transition-all hover:border-[var(--accent)]/40 hover:bg-[var(--accent-glow)] group"
                  style={{ borderColor: 'var(--border)' }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors"
                    style={{ background: 'var(--accent-glow)' }}>
                    <item.icon size={16} style={{ color: 'var(--accent)' }} />
                  </div>
                  <div>
                    <div className="text-xs mb-0.5" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-jetbrains)' }}>
                      {item.label}
                    </div>
                    <div className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                      {item.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="flex items-start gap-3 p-4 rounded-xl"
              style={{ background: 'var(--accent-glow)', border: '1px solid rgba(0,245,212,0.2)' }}
            >
              <MessageSquare size={16} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--accent)' }} />
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                <span className="font-semibold" style={{ color: 'var(--accent)' }}>Available for hire.</span>{' '}
                Reach out via email or LinkedIn for faster response. Currently exploring roles in Lagos and remote positions.
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <div className="glass-card rounded-2xl p-8">
              {status === 'done' ? (
                <div className="text-center py-12">
                  <div className="text-4xl mb-4">✅</div>
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-syne)', color: 'var(--text-primary)' }}>
                    Message Sent!
                  </h3>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                    Thank you for reaching out. I'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-sm"
                    style={{ color: 'var(--accent)' }}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    {[
                      { field: 'name', label: 'Your Name', placeholder: 'Jane Smith', type: 'text' },
                      { field: 'email', label: 'Email Address', placeholder: 'jane@company.com', type: 'email' },
                    ].map(({ field, label, placeholder, type }) => (
                      <div key={field}>
                        <label className="block text-xs font-medium mb-2"
                          style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-jetbrains)' }}>
                          {label}
                        </label>
                        <input
                          type={type}
                          required
                          value={form[field as keyof typeof form]}
                          onChange={e => setForm(f => ({ ...f, [field]: e.target.value }))}
                          placeholder={placeholder}
                          className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all focus:border-[var(--accent)]"
                          style={{
                            background: 'var(--bg-secondary)',
                            border: '1px solid var(--border)',
                            color: 'var(--text-primary)',
                            fontFamily: 'var(--font-dm-sans)',
                          }}
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label className="block text-xs font-medium mb-2"
                      style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-jetbrains)' }}>
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      value={form.subject}
                      onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                      placeholder="Data Engineering Opportunity"
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all focus:border-[var(--accent)]"
                      style={{
                        background: 'var(--bg-secondary)',
                        border: '1px solid var(--border)',
                        color: 'var(--text-primary)',
                        fontFamily: 'var(--font-dm-sans)',
                      }}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium mb-2"
                      style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-jetbrains)' }}>
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      placeholder="Tell me about the project or role..."
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none transition-all focus:border-[var(--accent)]"
                      style={{
                        background: 'var(--bg-secondary)',
                        border: '1px solid var(--border)',
                        color: 'var(--text-primary)',
                        fontFamily: 'var(--font-dm-sans)',
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm transition-all disabled:opacity-60"
                    style={{
                      background: 'var(--accent)',
                      color: 'var(--bg-primary)',
                      fontFamily: 'var(--font-dm-sans)',
                    }}
                  >
                    {status === 'sending' ? (
                      <>
                        <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-4 h-4 border-2 border-current border-t-transparent rounded-full" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
