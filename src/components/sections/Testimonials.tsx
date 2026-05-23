'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import { TESTIMONIALS } from '@/lib/constants'

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null)
  const [active, setActive] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  /* Reveal observer */
  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    if (!els) return
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('revealed') }),
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  const goTo = useCallback((index: number) => {
    if (isAnimating) return
    setIsAnimating(true)
    setTimeout(() => {
      setActive(index)
      setIsAnimating(false)
    }, 350)
  }, [isAnimating])

  const next = useCallback(() => goTo((active + 1) % TESTIMONIALS.length), [active, goTo])
  const prev = useCallback(() => goTo((active - 1 + TESTIMONIALS.length) % TESTIMONIALS.length), [active, goTo])

  /* Auto-advance */
  useEffect(() => {
    intervalRef.current = setInterval(next, 5500)
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [next])

  const t = TESTIMONIALS[active]

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{
        paddingTop: 'var(--section-py)',
        paddingBottom: 'var(--section-py)',
        background: 'var(--black-soft)',
      }}
      aria-labelledby="testimonials-heading"
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.018] pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: `radial-gradient(rgba(171,130,48,1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        aria-hidden="true"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(171,130,48,0.4), transparent)' }}
      />

      {/* Large decorative quote */}
      <div
        className="absolute top-16 left-1/2 -translate-x-1/2 pointer-events-none select-none"
        aria-hidden="true"
        style={{
          fontFamily: 'Georgia, serif',
          fontSize: '28rem',
          lineHeight: 1,
          color: 'rgba(171,130,48,0.025)',
          fontWeight: 700,
        }}
      >
        "
      </div>

      <div className="section-container relative z-10">

        {/* ── Header ── */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="flex items-center justify-center gap-3 mb-4 reveal">
            <div className="gold-line-h" style={{ background: 'linear-gradient(90deg, transparent, var(--gold))' }} />
            <div className="ornament-diamond" />
            <span className="label-accent">Client Stories</span>
            <div className="ornament-diamond" />
            <div className="gold-line-h" style={{ background: 'linear-gradient(90deg, var(--gold), transparent)' }} />
          </div>
          <h2 id="testimonials-heading" className="display-xl reveal delay-1">
            <span style={{ color: 'var(--ivory)' }}>Heard From</span>
            {' '}
            <span className="italic text-gold-gradient">Our Families</span>
          </h2>
        </div>

        {/* ── Main Carousel ── */}
        <div className="max-w-4xl mx-auto reveal delay-2">
          {/* Card */}
          <div
            className="relative p-10 lg:p-16 transition-all duration-350"
            style={{
              border: 'var(--border-gold)',
              background: 'var(--black-card)',
              opacity: isAnimating ? 0 : 1,
              transform: isAnimating ? 'translateY(12px)' : 'translateY(0)',
            }}
            role="blockquote"
            aria-live="polite"
            aria-label={`Testimonial from ${t.name}`}
          >
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-8 h-8 pointer-events-none" aria-hidden="true"
              style={{ borderTop: '1px solid var(--gold)', borderLeft: '1px solid var(--gold)' }} />
            <div className="absolute bottom-0 right-0 w-8 h-8 pointer-events-none" aria-hidden="true"
              style={{ borderBottom: '1px solid var(--gold)', borderRight: '1px solid var(--gold)' }} />

            {/* Quote icon */}
            <div className="flex justify-center mb-8" aria-hidden="true">
              <div
                className="flex items-center justify-center w-12 h-12"
                style={{ border: 'var(--border-gold)', background: 'rgba(171,130,48,0.08)' }}
              >
                <Quote size={20} className="text-gold" strokeWidth={1.5} />
              </div>
            </div>

            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6" aria-label={`${t.rating} out of 5 stars`}>
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} size={14} className="text-gold fill-current" aria-hidden="true" />
              ))}
            </div>

            {/* Quote text */}
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.15rem, 2.2vw, 1.5rem)',
                fontStyle: 'italic',
                fontWeight: 300,
                color: 'var(--ivory-dim)',
                lineHeight: 1.75,
                textAlign: 'center',
                marginBottom: '2.5rem',
              }}
            >
              "{t.text}"
            </p>

            {/* Divider */}
            <div className="ornament-line mb-6">
              <div className="ornament-diamond" />
            </div>

            {/* Author */}
            <div className="text-center">
              <p
                style={{
                  fontFamily: 'var(--font-accent)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.15em',
                  color: 'var(--ivory)',
                  textTransform: 'uppercase',
                  marginBottom: '0.3rem',
                }}
              >
                {t.name}
              </p>
              <p className="body-sm">{t.location} · {t.project}</p>
            </div>
          </div>

          {/* ── Navigation ── */}
          <div className="flex items-center justify-between mt-8">
            {/* Prev */}
            <button
              onClick={prev}
              className="flex items-center gap-2 group"
              aria-label="Previous testimonial"
            >
              <div
                className="flex items-center justify-center w-10 h-10 transition-all duration-300 group-hover:bg-gold group-hover:border-gold"
                style={{ border: 'var(--border-gold)', color: 'var(--gold)' }}
              >
                <ChevronLeft size={16} className="group-hover:text-black transition-colors duration-300" />
              </div>
              <span
                className="hidden sm:block text-ivory-muted group-hover:text-ivory transition-colors duration-200"
                style={{ fontFamily: 'var(--font-accent)', fontSize: '0.6rem', letterSpacing: '0.15em' }}
              >
                PREV
              </span>
            </button>

            {/* Dots */}
            <div className="flex items-center gap-3" role="tablist" aria-label="Testimonial navigation">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  role="tab"
                  aria-selected={i === active}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className="transition-all duration-300"
                  style={{
                    width: i === active ? '28px' : '6px',
                    height: '6px',
                    background: i === active ? 'var(--gold)' : 'rgba(171,130,48,0.25)',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                />
              ))}
            </div>

            {/* Next */}
            <button
              onClick={next}
              className="flex items-center gap-2 group"
              aria-label="Next testimonial"
            >
              <span
                className="hidden sm:block text-ivory-muted group-hover:text-ivory transition-colors duration-200"
                style={{ fontFamily: 'var(--font-accent)', fontSize: '0.6rem', letterSpacing: '0.15em' }}
              >
                NEXT
              </span>
              <div
                className="flex items-center justify-center w-10 h-10 transition-all duration-300 group-hover:bg-gold group-hover:border-gold"
                style={{ border: 'var(--border-gold)', color: 'var(--gold)' }}
              >
                <ChevronRight size={16} className="group-hover:text-black transition-colors duration-300" />
              </div>
            </button>
          </div>
        </div>

        {/* ── Mini trust band ── */}
        <div
          className="mt-16 lg:mt-20 grid grid-cols-2 md:grid-cols-4 gap-px reveal"
          style={{ background: 'rgba(171,130,48,0.1)' }}
          aria-label="Trust indicators"
        >
          {[
            { value: '500+', label: 'Happy Families' },
            { value: '4.9★', label: 'Average Rating' },
            { value: '98%', label: 'On-Time Delivery' },
            { value: '5yr',  label: 'Warranty Cover' },
          ].map((item, i) => (
            <div
              key={item.label}
              className="flex flex-col items-center justify-center py-7 px-4 text-center"
              style={{ background: 'var(--black-card)' }}
            >
              <span
                className="text-gold-gradient block mb-1"
                style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 300, lineHeight: 1 }}
              >
                {item.value}
              </span>
              <span className="label-accent" style={{ color: 'var(--ivory-muted)', fontSize: '0.58rem' }}>
                {item.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}