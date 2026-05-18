import Link from 'next/link'

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center gap-6 px-6 text-center"
      style={{ background: 'var(--bg-primary)' }}
    >
      {/* Glitch-style 404 */}
      <div className="relative">
        <p
          className="text-[120px] sm:text-[160px] font-bold leading-none select-none"
          style={{
            fontFamily: 'var(--font-syne)',
            color: 'transparent',
            WebkitTextStroke: '1px rgba(0,245,212,0.2)',
          }}
        >
          404
        </p>
        <p
          className="absolute inset-0 flex items-center justify-center text-[120px] sm:text-[160px] font-bold leading-none"
          style={{ fontFamily: 'var(--font-syne)', color: 'var(--accent)', opacity: 0.12 }}
        >
          404
        </p>
      </div>

      <div>
        <h1
          className="text-2xl font-bold mb-3"
          style={{ fontFamily: 'var(--font-syne)', color: 'var(--text-primary)' }}
        >
          Pipeline not found
        </h1>
        <p
          className="text-sm max-w-sm"
          style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-dm-sans)' }}
        >
          The data you're looking for doesn't exist at this endpoint. It may have been moved or the URL is incorrect.
        </p>
      </div>

      <div className="flex gap-4">
        <Link
          href="/"
          className="px-6 py-3 rounded-xl text-sm font-semibold transition-all"
          style={{
            background: 'var(--accent)',
            color: 'var(--bg-primary)',
            fontFamily: 'var(--font-dm-sans)',
          }}
        >
          Back to Home
        </Link>
        <Link
          href="/#projects"
          className="px-6 py-3 rounded-xl text-sm font-semibold border transition-all hover:bg-[var(--accent-glow)]"
          style={{
            borderColor: 'var(--border)',
            color: 'var(--text-secondary)',
            fontFamily: 'var(--font-dm-sans)',
          }}
        >
          View Projects
        </Link>
      </div>
    </div>
  )
}
