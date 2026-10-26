import type { ReactNode } from "react"

/** Editorial section heading with a mono index code and a ruled instrument line. */
export function SectionHeader({
  index,
  label,
  title,
  aside,
}: {
  index: string
  label: string
  title: ReactNode
  aside?: ReactNode
}) {
  return (
    <header>
      <div className="flex items-center gap-4 text-beige">
        <span className="label-mono text-amber">§{index}</span>
        <span className="label-mono">{label}</span>
        <span aria-hidden="true" className="relative h-px flex-1 bg-[var(--line)]">
          <span className="absolute -top-1 left-0 h-2 w-px bg-[var(--line-strong)]" />
          <span className="absolute -top-1 left-1/3 h-2 w-px bg-[var(--line-strong)]" />
          <span className="absolute -top-1 left-2/3 h-2 w-px bg-[var(--line-strong)]" />
          <span className="absolute -top-1 right-0 h-2 w-px bg-[var(--line-strong)]" />
        </span>
      </div>
      <div className="mt-6 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <h2 className="max-w-3xl text-balance font-heading text-4xl font-medium leading-[1.05] tracking-tight text-paper md:text-[3.25rem]">
          {title}
        </h2>
        {aside && (
          <p className="max-w-xs text-pretty text-sm leading-relaxed text-muted-foreground md:text-right">
            {aside}
          </p>
        )}
      </div>
    </header>
  )
}
