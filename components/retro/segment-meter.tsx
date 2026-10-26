"use client"

import { useInView } from "@/components/retro/use-in-view"
import { cn } from "@/lib/utils"

const SEGMENTS = 20

/** Linear readout made of discrete cells that light up in sequence. */
export function SegmentMeter({ name, level, code }: { name: string; level: number; code: string }) {
  const { ref, inView } = useInView<HTMLLIElement>(0.5)
  const lit = Math.round((level / 100) * SEGMENTS)

  return (
    <li ref={ref}>
      <div className="flex items-baseline justify-between gap-3">
        <span className="flex items-baseline gap-3">
          <span className="font-mono text-[0.65rem] text-beige/70">{code}</span>
          <span className="text-sm font-medium text-cream">{name}</span>
        </span>
        <span className="font-mono text-sm tabular-nums text-blue">{level}%</span>
      </div>
      <div
        className="mt-2 grid gap-[3px]"
        style={{ gridTemplateColumns: `repeat(${SEGMENTS}, minmax(0, 1fr))` }}
        role="meter"
        aria-valuenow={level}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={name}
      >
        {Array.from({ length: SEGMENTS }, (_, i) => (
          <span
            key={i}
            className={cn(
              "h-2.5 rounded-[1px] bg-[rgb(183_173_152/0.12)] transition-colors duration-300",
              inView && i < lit && "bg-blue",
              inView && i < lit && i === lit - 1 && "bg-[#a9c8ec]",
            )}
            style={{ transitionDelay: inView ? `${i * 35}ms` : "0ms" }}
          />
        ))}
      </div>
    </li>
  )
}
