import { useEffect, useState } from "react"

const THRESHOLDS = Array.from({ length: 21 }, (_, i) => i / 20)

/**
 * Tracks which of the given section ids currently shows the most pixels below the
 * sticky header. Returns that id, or null before anything has intersected.
 */
export function useActiveSection(ids, { headerHeight = 68 } = {}) {
  const [active, setActive] = useState(null)

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return

    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean)
    if (elements.length === 0) return

    const visibleHeights = new Map()

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visibleHeights.set(
            entry.target.id,
            entry.isIntersecting ? entry.intersectionRect.height : 0
          )
        }
        let best = null
        let bestHeight = 0
        for (const [id, height] of visibleHeights) {
          if (height > bestHeight) {
            best = id
            bestHeight = height
          }
        }
        setActive(best)
      },
      { rootMargin: `-${headerHeight}px 0px 0px 0px`, threshold: THRESHOLDS }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [ids, headerHeight])

  return active
}
