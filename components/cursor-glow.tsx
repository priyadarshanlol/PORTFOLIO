'use client'

import { useEffect, useRef } from 'react'

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null)
  const frameRef = useRef<number | null>(null)
  const pointerRef = useRef({ x: -240, y: -240 })

  useEffect(() => {
    const glow = glowRef.current
    if (!glow) return

    const updateGlow = () => {
      frameRef.current = null
      glow.style.transform = `translate3d(${pointerRef.current.x}px, ${pointerRef.current.y}px, 0)`
    }

    const handlePointerMove = (event: PointerEvent) => {
      pointerRef.current = { x: event.clientX, y: event.clientY }
      if (frameRef.current === null) {
        frameRef.current = window.requestAnimationFrame(updateGlow)
      }
    }

    const handlePointerLeave = () => {
      glow.style.opacity = '0'
    }

    const handlePointerEnter = () => {
      glow.style.opacity = '1'
    }

    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    document.documentElement.addEventListener('pointerleave', handlePointerLeave)
    document.documentElement.addEventListener('pointerenter', handlePointerEnter)

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      document.documentElement.removeEventListener('pointerleave', handlePointerLeave)
      document.documentElement.removeEventListener('pointerenter', handlePointerEnter)
      if (frameRef.current !== null) window.cancelAnimationFrame(frameRef.current)
    }
  }, [])

  return <div ref={glowRef} aria-hidden="true" className="cursor-glow" />
}
