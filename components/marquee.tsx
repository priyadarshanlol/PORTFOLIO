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
    <div className="border-y-2 border-foreground bg-primary py-3 text-primary-foreground">
      <div className="flex overflow-hidden">
        <div className="animate-marquee flex shrink-0 items-center gap-6 whitespace-nowrap pr-6">
          {[...items, ...items].map((item, i) => (
            <span key={i} className="flex items-center gap-6 font-heading text-lg font-bold">
              {item}
              <span aria-hidden="true">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
