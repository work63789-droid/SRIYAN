'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { ArrowUpRight, Plus } from 'lucide-react'
import { PORTFOLIO_ITEMS } from '@/lib/constants'

const FILTERS = ['All', 'Modular Kitchen', 'Complete 3BHK', 'Master Bedroom', 'Home Office']

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeFilter, setActiveFilter] = useState('All')
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    if (!els) return
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('revealed') }),
      { threshold: 0.08, rootMargin: '0px 0px -50px 0px' }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  const filtered =
    activeFilter === 'All'
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((p) => p.category === activeFilter)

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{
        paddingTop: 'var(--section-py)',
        paddingBottom: 'var(--section-py)',
        background: 'var(--black-soft)',
      }}
      aria-labelledby="portfolio-heading"
    >
      {/* Top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        aria-hidden="true"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(171,130,48,0.4), transparent)' }}
      />

      {/* Radial glow top-right */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        aria-hidden="true"
        style={{ background: 'radial-gradient(circle at top right, rgba(171,130,48,0.07) 0%, transparent 65%)' }}
      />

      <div className="section-container relative z-10">

        {/* ── Header ── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4 reveal">
              <div className="ornament-diamond" />
              <span className="label-accent">Our Work</span>
              <div className="gold-line-h" />
            </div>
            <h2 id="portfolio-heading" className="display-xl reveal delay-1">
              <span style={{ color: 'var(--ivory)' }}>Projects That</span>
              <br />
              <span className="italic text-gold-gradient">Define Us</span>
            </h2>
          </div>

          <p className="body-lg max-w-xs reveal delay-2 lg:text-right">
            Each project is a story — of a family, a dream, and the space that holds it all together.
          </p>
        </div>

        {/* ── Filter Pills ── */}
        <div
          className="flex flex-wrap gap-2 mb-10 reveal delay-2"
          role="group"
          aria-label="Filter projects by category"
        >
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`
                px-4 py-2 text-xs tracking-widest uppercase transition-all duration-300
                ${activeFilter === f
                  ? 'bg-gold text-black'
                  : 'border border-gold/20 text-ivory-muted hover:border-gold/50 hover:text-ivory'
                }
              `}
              style={{ fontFamily: 'var(--font-accent)', fontSize: '0.62rem' }}
              aria-pressed={activeFilter === f}
            >
              {f}
            </button>
          ))}
        </div>

        {/* ── Masonry-style Grid ── */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-px"
          style={{ background: 'rgba(171,130,48,0.1)' }}
          role="list"
          aria-label="Portfolio projects"
        >
          {filtered.map((item, i) => {
            const isTall = i % 3 === 0   // every 3rd item is taller
            const isHovered = hoveredId === item.id
            return (
              <article
                key={item.id}
                role="listitem"
                className="reveal img-hover-overlay relative overflow-hidden cursor-pointer group"
                style={{
                  transitionDelay: `${i * 0.08}s`,
                  minHeight: isTall ? '520px' : '360px',
                  background: 'var(--black-card)',
                }}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                aria-label={`${item.title} — ${item.category}`}
              >
                {/* Project image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                {/* Gradient always present at bottom */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: 'linear-gradient(to top, rgba(2,2,2,0.92) 0%, rgba(2,2,2,0.2) 50%, transparent 100%)' }}
                  aria-hidden="true"
                />

                {/* Hover full overlay */}
                <div
                  className="absolute inset-0 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, rgba(2,2,2,0.7) 0%, rgba(171,130,48,0.1) 100%)',
                    opacity: isHovered ? 1 : 0,
                  }}
                  aria-hidden="true"
                />

                {/* Top-right index */}
                <div
                  className="absolute top-5 right-5 z-10"
                  aria-hidden="true"
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-accent)',
                      fontSize: '0.6rem',
                      letterSpacing: '0.2em',
                      color: 'rgba(171,130,48,0.5)',
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Hover: plus icon */}
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 transition-all duration-400"
                  style={{
                    opacity: isHovered ? 1 : 0,
                    transform: `translate(-50%, -50%) scale(${isHovered ? 1 : 0.6})`,
                  }}
                  aria-hidden="true"
                >
                  <div
                    className="flex items-center justify-center w-14 h-14 rounded-full"
                    style={{ border: '1px solid rgba(171,130,48,0.6)', background: 'rgba(171,130,48,0.15)', backdropFilter: 'blur(8px)' }}
                  >
                    <Plus size={22} className="text-gold" />
                  </div>
                </div>

                {/* Bottom info */}
                <div className="absolute bottom-0 left-0 right-0 z-10 p-6 lg:p-8">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <span
                        className="block mb-1"
                        style={{
                          fontFamily: 'var(--font-accent)',
                          fontSize: '0.58rem',
                          letterSpacing: '0.2em',
                          color: 'var(--gold)',
                          textTransform: 'uppercase',
                        }}
                      >
                        {item.category}
                      </span>
                      <h3
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: 'clamp(1.2rem, 2vw, 1.6rem)',
                          fontWeight: 400,
                          color: 'var(--ivory)',
                          lineHeight: 1.2,
                        }}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="mt-1"
                        style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--ivory-muted)' }}
                      >
                        {item.location}
                      </p>
                    </div>

                    <div
                      className="flex items-center justify-center w-10 h-10 flex-shrink-0 transition-all duration-300"
                      style={{
                        border: `1px solid ${isHovered ? 'var(--gold)' : 'rgba(171,130,48,0.3)'}`,
                        background: isHovered ? 'var(--gold)' : 'transparent',
                        color: isHovered ? 'var(--black)' : 'var(--gold)',
                      }}
                      aria-hidden="true"
                    >
                      <ArrowUpRight size={16} />
                    </div>
                  </div>

                  {/* Animated bottom line */}
                  <div
                    className="mt-4 h-px transition-all duration-500"
                    style={{
                      background: 'var(--gold)',
                      width: isHovered ? '100%' : '0%',
                    }}
                    aria-hidden="true"
                  />
                </div>
              </article>
            )
          })}
        </div>

        {/* ── View All CTA ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mt-12 pt-10 reveal" style={{ borderTop: 'var(--border-gold)' }}>
          <div>
            <p
              style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', color: 'var(--ivory-dim)', fontStyle: 'italic' }}
            >
              Impressed? These are just highlights.
            </p>
            <p className="body-sm mt-1">Visit our showroom to see material samples and full project walkthroughs.</p>
          </div>
          <a href="#contact" className="btn-gold whitespace-nowrap">
            <span>Visit Our Showroom</span>
            <ArrowUpRight size={14} />
          </a>
        </div>

      </div>
    </section>
  )
}