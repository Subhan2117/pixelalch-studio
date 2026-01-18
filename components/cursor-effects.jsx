"use client"

import { useEffect, useRef, useState } from "react"

const TRAIL_COUNT = 6

export function CursorEffects() {
  const [cursor, setCursor] = useState({ x: 0, y: 0, visible: false })
  const [trail, setTrail] = useState([])
  const frameRef = useRef(null)
  const counterRef = useRef(0)
  const lastPosRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) {
      return
    }

    const handleMove = (event) => {
      lastPosRef.current = { x: event.clientX, y: event.clientY }

      if (frameRef.current) {
        return
      }

      frameRef.current = requestAnimationFrame(() => {
        const { x, y } = lastPosRef.current
        setCursor({ x, y, visible: true })
        setTrail((prev) => [
          { x, y, id: counterRef.current++ },
          ...prev,
        ].slice(0, TRAIL_COUNT))
        frameRef.current = null
      })
    }

    window.addEventListener("mousemove", handleMove)

    return () => {
      window.removeEventListener("mousemove", handleMove)
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }
    }
  }, [])

  return (
    <div className="cursor-effects" aria-hidden="true">
      <div
        className={`cursor-halo ${cursor.visible ? "is-visible" : ""}`}
        style={{ transform: `translate(${cursor.x}px, ${cursor.y}px)` }}
      />
      {trail.map((point, index) => (
        <span
          key={point.id}
          className="cursor-shard"
          style={{
            transform: `translate(${point.x}px, ${point.y}px) rotate(45deg) scale(${1 - index * 0.08})`,
            opacity: Math.max(0, 0.35 - index * 0.05),
          }}
        />
      ))}
    </div>
  )
}
