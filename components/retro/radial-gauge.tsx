"use client"

import { useEffect, useState } from "react"
import { useInView } from "@/components/retro/use-in-view"

const SIZE = 112
const STROKE = 6
const R = (SIZE - STROKE) / 2 - 6
// 270° dial, open at the bottom like an analog meter.
const SWEEP = 0.75
const CIRC = 2 * Math.PI * R

function useCountUp(target: number, active: boolean, duration = 1200) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!active) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(target)
      return
    }
    let frame = 0
    const start = performance.now()
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      // easeInOutCubic: a mechanical spin-up and settle.
      const eased = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
      setValue(Math.round(target * eased))
      if (t < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [target, active, duration])
  return value
}

export function RadialGauge({ name, level }: { name: string; level: number }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.4)
  const value = useCountUp(level, inView)
  const track = CIRC * SWEEP
  const filled = track * (value / 100)
  const ticks = Array.from({ length: 11 }, (_, i) => i)

  return (
    <div
      ref={ref}
      className="flex flex-col items-center text-center"
      role="meter"
      aria-valuenow={level}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={name}
    >
      <div className="relative" style={{ width: SIZE, height: SIZE }}>
        <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className="size-full" aria-hidden="true">
          <g transform={`rotate(135 ${SIZE / 2} ${SIZE / 2})`}>
            <circle
              cx={SIZE / 2}
              cy={SIZE / 2}
              r={R}
              fill="none"
              stroke="rgb(183 173 152 / 0.14)"
              strokeWidth={STROKE}
              strokeDasharray={`${track} ${CIRC}`}
            />
            <circle
              cx={SIZE / 2}
              cy={SIZE / 2}
              r={R}
              fill="none"
              stroke="#367FCE"
              strokeWidth={STROKE}
              strokeDasharray={`${filled} ${CIRC}`}
            />
          </g>
          {ticks.map((i) => {
            const angle = ((135 + (270 * i) / 10) * Math.PI) / 180
            const r1 = R + STROKE / 2 + 2
            const r2 = r1 + (i % 5 === 0 ? 5 : 3)
            const c = SIZE / 2
            return (
              <line
                key={i}
                x1={c + r1 * Math.cos(angle)}
                y1={c + r1 * Math.sin(angle)}
                x2={c + r2 * Math.cos(angle)}
                y2={c + r2 * Math.sin(angle)}
                stroke="rgb(183 173 152 / 0.45)"
                strokeWidth={1}
              />
            )
          })}
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-mono text-2xl font-medium tabular-nums text-paper">{value}</span>
          <span className="label-mono -mt-0.5 text-[0.6rem] text-beige">pct</span>
        </div>
      </div>
      <span className="mt-2 max-w-[9rem] text-xs font-medium leading-snug text-cream">{name}</span>
    </div>
  )
}
