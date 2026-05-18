export default function Loading() {
  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-6"
      style={{ background: 'var(--bg-primary)' }}
    >
      {/* Animated pipeline */}
      <svg width="200" height="60" viewBox="0 0 200 60">
        <defs>
          <linearGradient id="loadGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0" />
            <stop offset="50%" stopColor="var(--accent)" stopOpacity="1" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
            <animateTransform
              attributeName="gradientTransform"
              type="translate"
              from="-1 0"
              to="1 0"
              dur="1.4s"
              repeatCount="indefinite"
            />
          </linearGradient>
        </defs>

        {/* Pipeline track */}
        <line x1="20" y1="30" x2="180" y2="30" stroke="rgba(0,245,212,0.15)" strokeWidth="2" />

        {/* Flowing gradient overlay */}
        <line x1="20" y1="30" x2="180" y2="30" stroke="url(#loadGrad)" strokeWidth="2" />

        {/* Nodes */}
        {[20, 60, 100, 140, 180].map((cx, i) => (
          <g key={cx}>
            <circle cx={cx} cy={30} r={6} fill="var(--bg-primary)" stroke="rgba(0,245,212,0.25)" strokeWidth="1.5" />
            <circle cx={cx} cy={30} r={3} fill="var(--accent)" opacity="0.5">
              <animate
                attributeName="opacity"
                values="0.3;1;0.3"
                dur="1.4s"
                begin={`${i * 0.2}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="r"
                values="2;4;2"
                dur="1.4s"
                begin={`${i * 0.2}s`}
                repeatCount="indefinite"
              />
            </circle>
          </g>
        ))}
      </svg>

      {/* Brand */}
      <div className="flex flex-col items-center gap-2">
        <p
          className="text-xl font-bold"
          style={{ fontFamily: 'var(--font-syne)', color: 'var(--text-primary)' }}
        >
          Ayomikun<span style={{ color: 'var(--accent)' }}>.</span>
        </p>
        <p
          className="text-xs tracking-widest uppercase"
          style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-jetbrains)' }}
        >
          Loading pipeline…
        </p>
      </div>
    </div>
  )
}
