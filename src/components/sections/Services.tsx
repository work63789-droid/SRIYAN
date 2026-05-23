'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { SERVICES } from '@/lib/constants'

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null)
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  /* Scroll reveal */
  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    if (!els) return
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('revealed') }),
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ paddingTop: 'var(--section-py)', paddingBottom: 'var(--section-py)', background: 'var(--black-soft)' }}
      aria-labelledby="services-heading"
    >
      {/* Background grid texture */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: `
            linear-gradient(rgba(171,130,48,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(171,130,48,1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Top gold line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(171,130,48,0.4), transparent)' }}
        aria-hidden="true"
      />

      <div className="section-container relative z-10">

        {/* ── Section Header ── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 lg:mb-20">
          <div>
            <div className="flex items-center gap-3 mb-4 reveal">
              <div className="ornament-diamond" />
              <span className="label-accent">What We Craft</span>
              <div className="gold-line-h" />
            </div>

            <h2
              id="services-heading"
              className="display-xl reveal delay-1"
            >
              <span style={{ color: 'var(--ivory)' }}>Interiors Built</span>
              <br />
              <span className="italic text-gold-gradient">Around You</span>
            </h2>
          </div>

          <p className="body-lg max-w-sm reveal delay-2 lg:text-right" style={{ lineHeight: 1.9 }}>
            Six specialisations. One obsessive commitment to craft. Every space we touch is designed from first principles — never templated, always yours.
          </p>
        </div>

        {/* ── Services Grid ── */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px"
          style={{ background: 'rgba(171,130,48,0.12)' }}
          role="list"
          aria-label="Our services"
        >
          {SERVICES.map((service, i) => {
            const isHovered = hoveredId === service.id
            const isWide = i === 0 || i === 5
            const delay = `${i * 0.08}s`

            return (
              <article
                key={service.id}
                role="listitem"
                className={`
                  reveal group relative overflow-hidden cursor-pointer
                  ${isWide ? 'lg:col-span-2' : ''}
                `}
                style={{
                  background: 'var(--black-card)',
                  transitionDelay: delay,
                  minHeight: isWide ? '360px' : '320px',
                }}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                aria-label={service.title}
              >
                {/* Background Image — always visible, brightens on hover */}
                <div
                  className="absolute inset-0 transition-opacity duration-700"
                  style={{ opacity: isHovered ? 1 : 0.35 }}
                  aria-hidden="true"
                >
                  <Image
                    src={service.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Overlay: heavier at rest so text stays readable, lighter on hover */}
                  <div
                    className="absolute inset-0 transition-all duration-700"
                    style={{
                      background: isHovered
                        ? 'linear-gradient(135deg, rgba(2,2,2,0.82) 0%, rgba(2,2,2,0.48) 100%)'
                        : 'linear-gradient(135deg, rgba(2,2,2,0.78) 0%, rgba(2,2,2,0.65) 100%)',
                    }}
                  />
                </div>

                {/* Gold tint overlay — fades out on hover (image takes over) */}
                <div
                  className="absolute inset-0 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, rgba(171,130,48,0.08) 0%, transparent 70%)',
                    opacity: isHovered ? 0 : 1,
                  }}
                  aria-hidden="true"
                />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-between p-8 lg:p-10">
                  {/* Top: number + arrow */}
                  <div className="flex items-start justify-between">
                    <span
                      className="transition-colors duration-300"
                      style={{
                        fontFamily: 'var(--font-accent)',
                        fontSize: '0.65rem',
                        letterSpacing: '0.2em',
                        color: isHovered ? 'var(--gold)' : 'rgba(171,130,48,0.55)',
                      }}
                    >
                      {service.tag}
                    </span>
                    <div
                      className={`
                        flex items-center justify-center w-9 h-9 border transition-all duration-300
                        ${isHovered
                          ? 'border-gold bg-gold text-black rotate-0 scale-100'
                          : 'border-gold/30 text-gold/0 -rotate-45 scale-75'
                        }
                      `}
                    >
                      <ArrowUpRight size={16} />
                    </div>
                  </div>

                  {/* Bottom: title + desc */}
                  <div>
                    <p
                      className="mb-2 transition-colors duration-300"
                      style={{
                        fontFamily: 'var(--font-accent)',
                        fontSize: '0.6rem',
                        letterSpacing: '0.18em',
                        color: isHovered ? 'var(--gold)' : 'rgba(171,130,48,0.6)',
                        textTransform: 'uppercase',
                      }}
                    >
                      {service.subtitle}
                    </p>
                    <h3
                      className="display-md mb-3 transition-colors duration-300"
                      style={{ color: isHovered ? 'var(--ivory)' : 'var(--ivory-dim)' }}
                    >
                      {service.title}
                    </h3>
                    <p
                      className="body-sm transition-all duration-300 overflow-hidden"
                      style={{
                        maxHeight: isHovered ? '80px' : '0px',
                        opacity: isHovered ? 1 : 0,
                        color: 'var(--ivory-dim)',
                      }}
                    >
                      {service.description}
                    </p>

                    {/* Bottom border line */}
                    <div
                      className="mt-5 h-px transition-all duration-500"
                      style={{
                        background: 'var(--gold)',
                        width: isHovered ? '100%' : '30px',
                      }}
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        {/* ── Bottom CTA ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mt-12 pt-10 reveal" style={{ borderTop: 'var(--border-gold)' }}>
          <p className="body-sm text-center sm:text-left">
            Not sure what you need? Our designers will guide you through the possibilities — at zero cost.
          </p>
          <a href="#contact" className="btn-gold whitespace-nowrap">
            <span>Book a Free Consult</span>
            <ArrowUpRight size={14} />
          </a>
        </div>

      </div>
    </section>
  )
}