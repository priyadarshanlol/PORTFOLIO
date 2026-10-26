const items = [
  "Artificial Intelligence",
  "Machine Learning",
  "Python",
  "UI/UX Design",
  "Entrepreneurship",
  "Data Science",
  "Building Calibay",
  "Always learning",
]

export function Marquee() {
  return (
    <div className="relative border-y border-[var(--line)] bg-graphite/80 py-3 text-cream">
      <div className="flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
        <div className="animate-ticker flex shrink-0 items-center gap-8 whitespace-nowrap pr-8">
          {[...items, ...items].map((item, i) => (
            <span key={i} className="label-mono flex items-center gap-8 text-xs" aria-hidden={i >= items.length}>
              <span className="text-beige/60 tabular-nums">{String((i % items.length) + 1).padStart(2, "0")}</span>
              {item}
              <span aria-hidden="true" className="size-1 rounded-full bg-blue" />
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
