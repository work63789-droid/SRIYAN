'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X, Phone } from 'lucide-react'
import { NAV_LINKS, CONTACT_INFO } from '@/lib/constants'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Track active section for nav highlight
  useEffect(() => {
    const sections = NAV_LINKS.map((l) => l.href.replace('#', ''))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-500
          ${scrolled ? 'nav-scrolled py-3' : 'py-5 bg-transparent border-b border-transparent'}
        `}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="section-container flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            aria-label="Sriyan Modulars — Home"
          >
            <div className="relative w-12 h-12 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/assets/images/logo.png"
                alt="Sriyan Modulars Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <span
                className="block font-accent text-sm font-600 tracking-widest text-gold leading-none"
                style={{ fontFamily: 'var(--font-accent)' }}
              >
                SRIYAN
              </span>
              <span
                className="block text-xs tracking-[0.3em] text-ivory-muted leading-none mt-0.5"
                style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem' }}
              >
                MODULARS
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex items-center gap-8" role="list">
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.replace('#', '')
              const isActive = activeSection === sectionId
              return (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className={`
                      relative text-xs tracking-[0.15em] uppercase transition-colors duration-300
                      ${isActive ? 'text-gold' : 'text-ivory-muted hover:text-ivory'}
                    `}
                    style={{ fontFamily: 'var(--font-accent)', fontSize: '0.68rem' }}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.label}
                    {/* Active underline */}
                    <span
                      className={`
                        absolute -bottom-1 left-0 h-px bg-gold transition-all duration-300
                        ${isActive ? 'w-full' : 'w-0'}
                      `}
                    />
                  </button>
                </li>
              )
            })}
          </ul>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            {/* Phone CTA (desktop) */}
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="hidden md:flex items-center gap-2 btn-gold text-xs"
              aria-label={`Call us at ${CONTACT_INFO.phone}`}
            >
              <Phone size={13} />
              <span>Free Consultation</span>
            </a>

            {/* Hamburger (mobile/tablet) */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden flex items-center justify-center w-10 h-10 border border-gold/30 text-gold hover:border-gold transition-colors duration-200"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        className={`
          fixed inset-0 z-40 lg:hidden transition-all duration-500
          ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
        aria-hidden={!menuOpen}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
          onClick={() => setMenuOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`
            absolute top-0 right-0 h-full w-80 max-w-[90vw]
            bg-black-card border-l border-gold/20
            flex flex-col pt-24 pb-10 px-8
            transition-transform duration-500 ease-out
            ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
          `}
          style={{ background: 'var(--black-card)' }}
        >
          {/* Ornament */}
          <div className="ornament-line mb-8">
            <div className="ornament-diamond" />
          </div>

          <nav aria-label="Mobile navigation">
            <ul className="flex flex-col gap-6" role="list">
              {NAV_LINKS.map((link, i) => (
                <li key={link.href} style={{ animationDelay: `${i * 0.07}s` }}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="group flex items-center gap-3 text-left w-full"
                  >
                    <span
                      className="text-gold/40 group-hover:text-gold transition-colors duration-200"
                      style={{ fontFamily: 'var(--font-accent)', fontSize: '0.6rem' }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span
                      className="text-ivory-dim group-hover:text-gold transition-colors duration-200 tracking-wider"
                      style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem' }}
                    >
                      {link.label}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Bottom CTA */}
          <div className="mt-auto">
            <div className="ornament-line mb-6">
              <div className="ornament-diamond" />
            </div>
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="btn-gold w-full justify-center"
              onClick={() => setMenuOpen(false)}
            >
              <Phone size={14} />
              <span>Free Consultation</span>
            </a>
            <p className="text-center text-ivory-muted mt-3" style={{ fontSize: '0.7rem' }}>
              {CONTACT_INFO.hours}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}