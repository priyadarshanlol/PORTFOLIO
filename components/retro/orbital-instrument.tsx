/** Decorative orbital diagram: concentric rings, a slow radar sweep and three orbiting "disciplines". */
export function OrbitalInstrument() {
  const c = 200
  const ticks = Array.from({ length: 72 }, (_, i) => i)

  return (
    <svg viewBox="0 0 400 400" className="size-full" aria-hidden="true">
      <defs>
        <radialGradient id="core" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FF9D32" stopOpacity="0.9" />
          <stop offset="45%" stopColor="#FF9D32" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#FF9D32" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="sweep" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#367FCE" stopOpacity="0" />
          <stop offset="100%" stopColor="#367FCE" stopOpacity="0.28" />
        </linearGradient>
      </defs>

      {/* Outer dial with graduations */}
      <circle cx={c} cy={c} r={188} fill="none" stroke="rgb(183 173 152 / 0.22)" />
      <g className="spin-slower">
        {ticks.map((i) => {
          const a = (i * 5 * Math.PI) / 180
          const long = i % 6 === 0
          const r1 = 188
          const r2 = long ? 176 : 182
          return (
            <line
              key={i}
              x1={c + r1 * Math.cos(a)}
              y1={c + r1 * Math.sin(a)}
              x2={c + r2 * Math.cos(a)}
              y2={c + r2 * Math.sin(a)}
              stroke={long ? "rgb(232 224 204 / 0.5)" : "rgb(183 173 152 / 0.28)"}
            />
          )
        })}
      </g>

      {/* Crosshair */}
      <line x1={c} y1={20} x2={c} y2={380} stroke="rgb(183 173 152 / 0.1)" />
      <line x1={20} y1={c} x2={380} y2={c} stroke="rgb(183 173 152 / 0.1)" />

      {/* Radar sweep */}
      <g className="radar-sweep">
        <path d={`M ${c} ${c} L ${c + 150} ${c} A 150 150 0 0 0 ${c + 150 * Math.cos(-0.6)} ${c + 150 * Math.sin(-0.6)} Z`} fill="url(#sweep)" />
      </g>

      {/* Orbits */}
      <circle cx={c} cy={c} r={150} fill="none" stroke="rgb(54 127 206 / 0.45)" strokeDasharray="2 6" />
      <circle cx={c} cy={c} r={108} fill="none" stroke="rgb(183 173 152 / 0.22)" />
      <circle cx={c} cy={c} r={66} fill="none" stroke="rgb(54 127 206 / 0.35)" />

      {/* Orbiting bodies, each on its own slow ring */}
      <g className="spin-slow" style={{ transformOrigin: "200px 200px", transformBox: "view-box" }}>
        <circle cx={c + 150} cy={c} r={6} fill="#367FCE" />
        <circle cx={c + 150} cy={c} r={11} fill="none" stroke="#367FCE" strokeOpacity="0.5" />
      </g>
      <g className="spin-slower" style={{ transformOrigin: "200px 200px", transformBox: "view-box" }}>
        <circle cx={c - 76} cy={c - 76} r={4.5} fill="#E8E0CC" />
      </g>
      <g className="spin-slow" style={{ transformOrigin: "200px 200px", transformBox: "view-box", animationDuration: "34s" }}>
        <circle cx={c} cy={c + 66} r={4} fill="#E6B566" />
      </g>

      {/* Temporal core */}
      <circle cx={c} cy={c} r={40} fill="url(#core)" />
      <circle cx={c} cy={c} r={30} fill="none" stroke="#FF9D32" strokeOpacity="0.6" className="temporal-ripple" />
      <circle cx={c} cy={c} r={9} fill="#FF9D32" />
    </svg>
  )
}
