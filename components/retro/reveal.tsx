"use client"

import type { ReactNode } from "react"
import { useInView } from "@/components/retro/use-in-view"
import { cn } from "@/lib/utils"

export function Reveal({
  children,
  className,
  as: Tag = "div",
}: {
  children: ReactNode
  className?: string
  as?: "div" | "ol" | "ul"
}) {
  const { ref, inView } = useInView<HTMLDivElement>(0.12)
  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Tag ref={ref as any} className={cn("reveal", inView && "is-visible", className)}>
      {children}
    </Tag>
  )
}
