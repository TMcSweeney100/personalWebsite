import { useEffect, useRef, useState } from "react"

/** True when the page should skip the reveal animation and show content immediately. */
function shouldSkipReveal() {
  if (typeof window === "undefined") return true
  if (!("IntersectionObserver" in window)) return true
  return (
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  )
}

/**
 * Reveal-once on scroll. Returns a ref to attach and a `visible` flag.
 * Under `prefers-reduced-motion`, or when IntersectionObserver is missing, the element
 * starts visible so nothing is ever left hidden.
 */
export function useReveal() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(shouldSkipReveal)

  useEffect(() => {
    const el = ref.current
    if (!el || visible) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [visible])

  return { ref, visible }
}
