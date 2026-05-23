'use client'

import { useEffect, useRef } from 'react'
import {
  Award, Clock, Layers, Shield, Sparkles, Users,
  type LucideIcon,
} from 'lucide-react'
import { WHY_US } from '@/lib/constants'

/* Map string icon names → Lucide components */
const ICON_MAP: Record<string, LucideIcon> = {
  award: Award,
  clock: Clock,
  layers: Layers,
  shield: Shield,
  sparkles: Sparkles,
  users: Users,
}

export default function WhyUs() {
  const sectionRef = useRef<HTMLElement>(null)

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

  return (
    <section
      id="why-us"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{
        paddingTop: 'var(--section-py)',
        paddingBottom: 'var(--section-py)',
        background: 'var(--black)',
      }}
      aria-labelledby="why-us-heading"
    >
      {/* ── Decorative elements ── */}
      {/* Large rotated text watermark */}
      <div
        className="absolute -right-20 top-1/2 -translate-y-1/2 pointer-events-none select-none hidden xl:block"
        aria-hidden="true"
        style={{
          fontFamily: 'var(--font-accent)',
          fontSize: '12rem',
          fontWeight: 600,
          letterSpacing: '-0.05em',
          color: 'rgba(171,130,48,0.03)',
          writingMode: 'vertical-rl',
          textTransform: 'uppercase',
          lineHeight: 1,
        }}
      >
        SRIYAN
      </div>

      {/* Gold accent circle */}
      <div
        className="absolute -left-40 top-20 w-96 h-96 rounded-full pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(circle, rgba(171,130,48,0.08) 0%, transparent 70%)',
        }}
      />

      {/* Top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        aria-hidden="true"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(171,130,48,0.4), transparent)' }}
      />

      <div className="section-container relative z-10">

        {/* ── Two-column layout: left headline + right grid ── */}
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-16 xl:gap-24 items-start">

          {/* ── LEFT: Brand Statement ── */}
          <div className="lg:sticky lg:top-32">
            <div className="flex items-center gap-3 mb-5 reveal">
              <div className="ornament-diamond" />
              <span className="label-accent">Why Sriyan Modulars</span>
            </div>

            <h2
              id="why-us-heading"
              className="display-xl mb-8 reveal delay-1"
            >
              <span style={{ color: 'var(--ivory)' }}>Craft That</span>
              <br />
              <span className="italic text-gold-gradient">Speaks for</span>
              <br />
              <span style={{ color: 'var(--ivory)' }}>Itself</span>
            </h2>

            <div className="reveal delay-2" style={{ borderLeft: '2px solid var(--gold)', paddingLeft: '1.5rem', marginBottom: '2rem' }}>
              <p className="body-lg" style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontStyle: 'italic', color: 'var(--ivory-dim)', lineHeight: 1.8 }}>
                "We don't just fill rooms with furniture. We build spaces that reflect who you are — and who you want to become."
              </p>
              <p className="mt-3 label-accent" style={{ color: 'var(--ivory-muted)' }}>
                — Founding Philosophy
              </p>
            </div>

            <p className="body-lg mb-8 reveal delay-3">
              Sriyan Modulars was founded on a simple belief: that exceptional design should be accessible to every home in Hubballi-Dharwad — not just a privileged few. Eight years later, that belief drives every decision we make.
            </p>

            {/* Mini stats */}
            <div className="grid grid-cols-2 gap-4 reveal delay-4">
              {[
                { n: '500+', l: 'Homes Transformed' },
                { n: '8+',   l: 'Years of Excellence' },
              ].map((s) => (
                <div
                  key={s.l}
                  className="p-5 bracket-tl bracket-br relative"
                  style={{ border: 'var(--border-gold)' }}
                >
                  <span
                    className="text-gold-gradient block mb-1"
                    style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 300, lineHeight: 1 }}
                  >
                    {s.n}
                  </span>
                  <span className="label-accent" style={{ color: 'var(--ivory-muted)', fontSize: '0.58rem' }}>
                    {s.l}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: USP Cards Grid ── */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-px"
            style={{ background: 'rgba(171,130,48,0.1)' }}
            role="list"
            aria-label="Our advantages"
          >
            {WHY_US.map((item, i) => {
              const Icon = ICON_MAP[item.icon] ?? Sparkles
              return (
                <article
                  key={item.title}
                  role="listitem"
                  className="reveal group relative p-8 overflow-hidden"
                  style={{
                    background: 'var(--black-card)',
                    transitionDelay: `${i * 0.07}s`,
                  }}
                  aria-label={item.title}
                >
                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    aria-hidden="true"
                    style={{ background: 'linear-gradient(135deg, rgba(171,130,48,0.06) 0%, transparent 70%)' }}
                  />

                  {/* Corner accent on hover */}
                  <div
                    className="absolute top-0 left-0 w-0 group-hover:w-full h-px transition-all duration-500 pointer-events-none"
                    aria-hidden="true"
                    style={{ background: 'linear-gradient(90deg, var(--gold), transparent)' }}
                  />

                  {/* Icon */}
                  <div
                    className="flex items-center justify-center w-12 h-12 mb-5 relative"
                    style={{ border: 'var(--border-gold)' }}
                  >
                    <Icon
                      size={20}
                      className="text-gold group-hover:scale-110 transition-transform duration-300"
                      strokeWidth={1.5}
                    />
                    {/* rotating ring on hover */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      aria-hidden="true"
                      style={{
                        border: '1px solid rgba(171,130,48,0.4)',
                        animation: 'rotateSlow 4s linear infinite',
                        borderRadius: '2px',
                      }}
                    />
                  </div>

                  <h3
                    className="mb-3 transition-colors duration-300 group-hover:text-gold"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.3rem',
                      fontWeight: 400,
                      color: 'var(--ivory)',
                    }}
                  >
                    {item.title}
                  </h3>

                  <p className="body-sm" style={{ lineHeight: 1.8 }}>
                    {item.description}
                  </p>

                  {/* Bottom number */}
                  <div
                    className="mt-6 flex items-center gap-2"
                    aria-hidden="true"
                  >
                    <div
                      className="h-px flex-1 transition-all duration-500"
                      style={{ background: 'var(--gold)', width: '20px', maxWidth: '20px' }}
                    />
                    <span
                      style={{
                        fontFamily: 'var(--font-accent)',
                        fontSize: '0.58rem',
                        letterSpacing: '0.15em',
                        color: 'rgba(171,130,48,0.35)',
                      }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                </article>
              )
            })}
          </div>

        </div>

        {/* ── Brand Promise Banner ── */}
        <div
          className="mt-16 lg:mt-20 p-8 lg:p-12 relative overflow-hidden reveal"
          style={{ border: 'var(--border-gold)', background: 'rgba(171,130,48,0.03)' }}
        >
          {/* Diagonal gold line decoration */}
          <div
            className="absolute -top-px left-0 right-0 h-px pointer-events-none"
            aria-hidden="true"
            style={{ background: 'linear-gradient(90deg, var(--gold), rgba(171,130,48,0.3), transparent)' }}
          />
          <div
            className="absolute top-0 bottom-0 -right-px w-px pointer-events-none"
            aria-hidden="true"
            style={{ background: 'linear-gradient(180deg, var(--gold), transparent)' }}
          />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <p
                className="label-accent mb-3"
                style={{ color: 'var(--gold)' }}
              >
                Our Commitment to You
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
                  color: 'var(--ivory)',
                  lineHeight: 1.2,
                }}
              >
                If you're not{' '}
                <span className="italic text-gold-gradient">completely satisfied</span>
                , we make it right.
                <br />
                No arguments. No excuses.
              </p>
            </div>
            <a
              href="tel:+91XXXXXXXXXX"
              className="btn-gold whitespace-nowrap"
              aria-label="Call us now"
            >
              <span>Speak to a Designer</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}