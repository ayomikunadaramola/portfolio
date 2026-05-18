import Link from 'next/link'

export default function ProjectNotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center gap-6 px-6 text-center"
      style={{ background: 'var(--bg-primary)' }}
    >
      <p
        className="text-xs tracking-widest uppercase"
        style={{ color: 'var(--accent)', fontFamily: 'var(--font-jetbrains)' }}
      >
        Project Not Found
      </p>
      <h1
        className="text-3xl font-bold"
        style={{ fontFamily: 'var(--font-syne)', color: 'var(--text-primary)' }}
      >
        This project doesn't exist
      </h1>
      <p
        className="text-sm max-w-sm"
        style={{ color: 'var(--text-secondary)' }}
      >
        The project you're looking for may have been removed or the slug is incorrect.
      </p>
      <Link
        href="/#projects"
        className="px-6 py-3 rounded-xl text-sm font-semibold"
        style={{
          background: 'var(--accent)',
          color: 'var(--bg-primary)',
          fontFamily: 'var(--font-dm-sans)',
        }}
      >
        ← Back to All Projects
      </Link>
    </div>
  )
}
