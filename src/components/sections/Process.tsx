'use client'

import { useEffect, useRef, useState } from 'react'
import { PROCESS_STEPS } from '@/lib/constants'

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeStep, setActiveStep] = useState(0)
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])

  /* Reveal observer */
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

  /* Active step tracker on scroll */
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = stepRefs.current.indexOf(e.target as HTMLDivElement)
            if (idx !== -1) setActiveStep(idx)
          }
        })
      },
      { rootMargin: '-30% 0px -60% 0px' }
    )
    stepRefs.current.forEach((el) => { if (el) io.observe(el) })
    return () => io.disconnect()
  }, [])

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{
        paddingTop: 'var(--section-py)',
        paddingBottom: 'var(--section-py)',
        background: 'var(--black)',
      }}
      aria-labelledby="process-heading"
    >
      {/* Decorative vertical gold line — full height center */}
      <div
        className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 pointer-events-none hidden lg:block"
        aria-hidden="true"
        style={{ background: 'linear-gradient(180deg, transparent, rgba(171,130,48,0.15) 20%, rgba(171,130,48,0.15) 80%, transparent)' }}
      />

      {/* Top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        aria-hidden="true"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(171,130,48,0.4), transparent)' }}
      />

      {/* Background watermark number */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none hidden xl:block overflow-hidden"
        aria-hidden="true"
        style={{
          fontFamily: 'var(--font-accent)',
          fontSize: '20rem',
          fontWeight: 700,
          color: 'rgba(171,130,48,0.025)',
          lineHeight: 1,
          letterSpacing: '-0.05em',
        }}
      >
        0{activeStep + 1}
      </div>

      <div className="section-container relative z-10">

        {/* ── Header ── */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-24">
          <div className="flex items-center justify-center gap-3 mb-4 reveal">
            <div className="gold-line-h" style={{ background: 'linear-gradient(90deg, transparent, var(--gold))' }} />
            <div className="ornament-diamond" />
            <span className="label-accent">How We Work</span>
            <div className="ornament-diamond" />
            <div className="gold-line-h" style={{ background: 'linear-gradient(90deg, var(--gold), transparent)' }} />
          </div>
          <h2 id="process-heading" className="display-xl mb-5 reveal delay-1">
            <span style={{ color: 'var(--ivory)' }}>From Vision</span>
            {' '}
            <span className="italic text-gold-gradient">to Reality</span>
          </h2>
          <p className="body-lg reveal delay-2">
            A refined, transparent process — so you always know what's happening, what's next, and what to expect.
          </p>
        </div>

        {/* ── Timeline ── */}
        <div className="relative max-w-5xl mx-auto">

          {/* Desktop: alternating left-right timeline */}
          <div className="hidden lg:block">
            {PROCESS_STEPS.map((step, i) => {
              const isLeft = i % 2 === 0
              const isActive = activeStep === i
              return (
                <div
                  key={step.step}
                  ref={(el) => { stepRefs.current[i] = el }}
                  className={`
                    flex items-center gap-0 mb-0
                    ${isLeft ? 'flex-row' : 'flex-row-reverse'}
                  `}
                  style={{ minHeight: '160px' }}
                >
                  {/* Content side */}
                  <div
                    className={`
                      flex-1 reveal
                      ${isLeft ? 'reveal-left pr-16 text-right' : 'reveal-right pl-16 text-left'}
                    `}
                    style={{ transitionDelay: `${i * 0.1}s` }}
                  >
                    <div
                      className={`inline-block p-6 lg:p-8 transition-all duration-500 ${
                        isActive ? 'border-gold' : 'border-gold/10'
                      }`}
                      style={{
                        border: `1px solid ${isActive ? 'rgba(171,130,48,0.5)' : 'rgba(171,130,48,0.1)'}`,
                        background: isActive ? 'rgba(171,130,48,0.04)' : 'transparent',
                      }}
                    >
                      <p
                        className="mb-2"
                        style={{
                          fontFamily: 'var(--font-accent)',
                          fontSize: '0.58rem',
                          letterSpacing: '0.2em',
                          color: 'var(--gold)',
                          textTransform: 'uppercase',
                        }}
                      >
                        Step {step.step}
                      </p>
                      <h3
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '1.4rem',
                          fontWeight: 400,
                          color: isActive ? 'var(--ivory)' : 'var(--ivory-dim)',
                          marginBottom: '0.5rem',
                          transition: 'color 0.4s',
                        }}
                      >
                        {step.title}
                      </h3>
                      <p className="body-sm" style={{ lineHeight: 1.8 }}>
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Center: node */}
                  <div className="flex flex-col items-center flex-shrink-0 relative z-10">
                    {/* Connecting line above */}
                    {i > 0 && (
                      <div
                        className="w-px transition-all duration-700"
                        style={{
                          height: '40px',
                          background: i <= activeStep
                            ? 'linear-gradient(180deg, var(--gold), rgba(171,130,48,0.3))'
                            : 'rgba(171,130,48,0.1)',
                        }}
                        aria-hidden="true"
                      />
                    )}

                    {/* Node circle */}
                    <div
                      className="flex items-center justify-center w-14 h-14 rounded-full transition-all duration-500 flex-shrink-0"
                      style={{
                        border: `1px solid ${isActive ? 'var(--gold)' : 'rgba(171,130,48,0.3)'}`,
                        background: isActive ? 'rgba(171,130,48,0.15)' : 'var(--black)',
                        boxShadow: isActive ? '0 0 30px rgba(171,130,48,0.3)' : 'none',
                      }}
                      aria-hidden="true"
                    >
                      <span
                        style={{
                          fontFamily: 'var(--font-accent)',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          color: isActive ? 'var(--gold-bright)' : 'rgba(171,130,48,0.4)',
                          letterSpacing: '0.05em',
                        }}
                      >
                        {step.step}
                      </span>
                    </div>

                    {/* Connecting line below */}
                    {i < PROCESS_STEPS.length - 1 && (
                      <div
                        className="w-px transition-all duration-700"
                        style={{
                          height: '40px',
                          background: i < activeStep
                            ? 'linear-gradient(180deg, rgba(171,130,48,0.3), var(--gold))'
                            : 'rgba(171,130,48,0.1)',
                        }}
                        aria-hidden="true"
                      />
                    )}
                  </div>

                  {/* Empty side */}
                  <div className="flex-1" />
                </div>
              )
            })}
          </div>

          {/* Mobile: vertical stack */}
          <div className="lg:hidden flex flex-col gap-0">
            {PROCESS_STEPS.map((step, i) => (
              <div key={step.step} className="flex gap-5 reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                {/* Left: line + node */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div
                    className="flex items-center justify-center w-11 h-11 rounded-full flex-shrink-0"
                    style={{ border: 'var(--border-gold)', background: 'rgba(171,130,48,0.08)' }}
                    aria-hidden="true"
                  >
                    <span
                      style={{ fontFamily: 'var(--font-accent)', fontSize: '0.65rem', color: 'var(--gold)', fontWeight: 600 }}
                    >
                      {step.step}
                    </span>
                  </div>
                  {i < PROCESS_STEPS.length - 1 && (
                    <div className="w-px flex-1 my-2" style={{ background: 'rgba(171,130,48,0.15)', minHeight: '32px' }} aria-hidden="true" />
                  )}
                </div>

                {/* Right: content */}
                <div className="pb-10 flex-1">
                  <p
                    className="mb-1"
                    style={{ fontFamily: 'var(--font-accent)', fontSize: '0.58rem', letterSpacing: '0.18em', color: 'var(--gold)', textTransform: 'uppercase' }}
                  >
                    Step {step.step}
                  </p>
                  <h3
                    style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 400, color: 'var(--ivory)', marginBottom: '0.4rem' }}
                  >
                    {step.title}
                  </h3>
                  <p className="body-sm" style={{ lineHeight: 1.8 }}>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom CTA ── */}
        <div className="text-center mt-16 reveal">
          <div className="ornament-line mb-8 max-w-xs mx-auto">
            <div className="ornament-diamond" />
          </div>
          <p
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', fontStyle: 'italic', color: 'var(--ivory-dim)', marginBottom: '1.5rem' }}
          >
            Ready to start your journey?
          </p>
          <a href="#contact" className="btn-gold">
            <span>Schedule a Free Consultation</span>
          </a>
        </div>

      </div>
    </section>
  )
}