'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { ArrowDown, ChevronRight, Sparkles } from 'lucide-react'
import { STATS } from '@/lib/constants'

/* Slides data — each slide is a hero state */
const SLIDES = [
  {
    tag: 'Modular Kitchens',
    headline: ['Spaces That', 'Tell Your', 'Story'],
    sub: 'Bespoke modular interiors crafted for the discerning home. Where precision engineering meets the poetry of design.',
    image: '/assets/images/hero-bg.jpg',
    // PUT: hero-bg.jpg — dark, moody luxury interior. Large living room or kitchen. 1920×1080px min.
    cta: 'Explore Our Work',
    ctaLink: '#portfolio',
  },
  {
    tag: 'Complete Home Interiors',
    headline: ['Every Room,', 'Perfectly', 'Considered'],
    sub: 'From the first sketch to the final panel — we design, manufacture, and install with obsessive attention to detail.',
    image: '/assets/images/hero-bg-2.jpg',
    // PUT: hero-bg-2.jpg — a stunning kitchen or bedroom interior. Different from hero-bg.jpg.
    cta: 'Start Your Project',
    ctaLink: '#contact',
  },
]

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const goToSlide = (index: number) => {
    if (isTransitioning || index === activeSlide) return
    setIsTransitioning(true)
    setTimeout(() => {
      setActiveSlide(index)
      setIsTransitioning(false)
    }, 400)
  }

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      goToSlide((activeSlide + 1) % SLIDES.length)
    }, 6000)
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [activeSlide])

  const slide = SLIDES[activeSlide]

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      className="relative min-h-screen flex flex-col justify-end overflow-hidden"
      aria-label="Hero — Sriyan Modulars"
    >
      {/* ── Background Images ── */}
      {SLIDES.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === activeSlide ? 1 : 0 }}
          aria-hidden="true"
        >
          <Image
            src={s.image}
            alt=""
            fill
            priority={i === 0}
            className="object-cover"
            sizes="100vw"
          />
        </div>
      ))}

      {/* ── Gradient Overlays ── */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: `
            linear-gradient(to top, rgba(2,2,2,0.97) 0%, rgba(2,2,2,0.7) 40%, rgba(2,2,2,0.2) 70%, rgba(2,2,2,0.4) 100%)
          `,
        }}
        aria-hidden="true"
      />
      {/* Left vignette for text legibility */}
      <div
        className="absolute inset-0 z-10 hidden lg:block"
        style={{ background: 'linear-gradient(to right, rgba(2,2,2,0.6) 0%, transparent 60%)' }}
        aria-hidden="true"
      />

      {/* ── Decorative vertical line ── */}
      <div
        className="absolute top-0 left-[var(--section-px)] z-20 hidden lg:block"
        aria-hidden="true"
        style={{
          width: '1px',
          height: '35vh',
          background: 'linear-gradient(180deg, transparent, rgba(171,130,48,0.5), transparent)',
        }}
      />

      {/* ── Slide number indicator ── */}
      <div
        className="absolute top-1/2 right-8 -translate-y-1/2 z-20 hidden lg:flex flex-col items-center gap-3"
        aria-hidden="true"
      >
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`transition-all duration-500 ${
              i === activeSlide
                ? 'w-px h-12 bg-gold'
                : 'w-px h-6 bg-ivory-muted/30 hover:bg-gold/50'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
        <span
          className="text-gold/50 mt-2"
          style={{ fontFamily: 'var(--font-accent)', fontSize: '0.6rem', letterSpacing: '0.2em', writingMode: 'vertical-rl' }}
        >
          {String(activeSlide + 1).padStart(2, '0')} / {String(SLIDES.length).padStart(2, '0')}
        </span>
      </div>

      {/* ── Main Content ── */}
      <div
        className="relative z-20 section-container pb-16 lg:pb-20"
        style={{ paddingTop: '10rem' }}
      >
        <div className="max-w-4xl">

          {/* Tag line */}
          <div
            key={`tag-${activeSlide}`}
            className="flex items-center gap-3 mb-6 hero-text-reveal"
            style={{ animationDelay: '0s' }}
          >
            <Sparkles size={12} className="text-gold" />
            <span className="label-accent">{slide.tag}</span>
            <div className="gold-line-h" />
          </div>

          {/* Main Headline */}
          <h1
            key={`h1-${activeSlide}`}
            className="display-hero mb-6 hero-text-reveal"
            style={{ animationDelay: '0.15s' }}
          >
            {slide.headline.map((line, i) => (
              <span key={i} className="block">
                {i === 1 ? (
                  <span className="gold-shimmer-text italic">{line}</span>
                ) : (
                  <span style={{ color: 'var(--ivory)' }}>{line}</span>
                )}
              </span>
            ))}
          </h1>

          {/* Subtext */}
          <p
            key={`sub-${activeSlide}`}
            className="body-lg max-w-xl mb-10 hero-text-reveal"
            style={{ animationDelay: '0.3s' }}
          >
            {slide.sub}
          </p>

          {/* CTAs */}
          <div
            key={`cta-${activeSlide}`}
            className="flex flex-wrap items-center gap-4 hero-text-reveal"
            style={{ animationDelay: '0.45s' }}
          >
            <button
              onClick={() => scrollToSection(slide.ctaLink)}
              className="btn-gold"
              aria-label={slide.cta}
            >
              <span>{slide.cta}</span>
              <ChevronRight size={14} />
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className="btn-outline"
              aria-label="Get a free quote"
            >
              <span>Get Free Quote</span>
            </button>
          </div>
        </div>

        {/* ── Stats Bar ── */}
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-px mt-16 lg:mt-20 border border-gold/15"
          style={{ background: 'rgba(171,130,48,0.15)' }}
          aria-label="Key statistics"
        >
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center py-6 px-4 text-center hero-text-reveal"
              style={{
                background: 'rgba(2,2,2,0.7)',
                backdropFilter: 'blur(10px)',
                animationDelay: `${0.55 + i * 0.1}s`,
              }}
            >
              <span
                className="text-gold-gradient font-display block mb-1"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                  fontWeight: 300,
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </span>
              <span
                className="label-accent"
                style={{ fontSize: '0.6rem', color: 'var(--ivory-muted)' }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <button
        onClick={() => scrollToSection('#services')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 group"
        aria-label="Scroll to services"
        style={{ animation: 'floatY 2.5s ease-in-out infinite' }}
      >
        <span className="label-accent opacity-50 group-hover:opacity-100 transition-opacity">
          Scroll
        </span>
        <ArrowDown size={16} className="text-gold opacity-50 group-hover:opacity-100 transition-opacity" />
      </button>
    </section>
  )
}