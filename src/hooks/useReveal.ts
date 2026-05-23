'use client'

import { useEffect, useRef, RefObject } from 'react'

interface UseRevealOptions {
  threshold?: number
  rootMargin?: string
  once?: boolean
}

export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options: UseRevealOptions = {}
): any {
  const {
    threshold = 0.12,
    rootMargin = '0px 0px -60px 0px',
    once = true,
  } = options

  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            if (once) observer.unobserve(entry.target)
          } else if (!once) {
            entry.target.classList.remove('revealed')
          }
        })
      },
      { threshold, rootMargin }
    )

    // Observe root element and all children with reveal class
    const revealEls = el.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    if (el.classList.contains('reveal') || el.classList.contains('reveal-left') || el.classList.contains('reveal-right')) {
      observer.observe(el)
    }
    revealEls.forEach((child) => observer.observe(child))

    return () => observer.disconnect()
  }, [threshold, rootMargin, once])

  return ref
}