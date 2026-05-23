import Image from 'next/image'
import Link from 'next/link'
import { Phone, Mail, MapPin, MedalIcon, MessageCircle, ArrowUpRight } from 'lucide-react'
import { NAV_LINKS, SERVICES, CONTACT_INFO } from '@/lib/constants'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: 'var(--black-soft)', borderTop: '1px solid rgba(171,130,48,0.2)' }}
      role="contentinfo"
      aria-label="Site footer"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        aria-hidden="true"
        style={{
          backgroundImage: `
            linear-gradient(rgba(171,130,48,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(171,130,48,1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Top gold gradient line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        aria-hidden="true"
        style={{ background: 'linear-gradient(90deg, transparent, var(--gold), rgba(171,130,48,0.4), transparent)' }}
      />

      {/* ── Pre-footer CTA band ── */}
      <div
        className="relative z-10"
        style={{ borderBottom: '1px solid rgba(171,130,48,0.12)' }}
      >
        <div className="section-container py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                  color: 'var(--ivory)',
                  fontWeight: 300,
                  lineHeight: 1.2,
                }}
              >
                Ready to transform{' '}
                <span className="italic text-gold-gradient">your space?</span>
              </p>
              <p className="body-sm mt-2">Free consultation · No obligation · Expert guidance</p>
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href="#contact" className="btn-gold whitespace-nowrap">
                <span>Book Consultation</span>
                <ArrowUpRight size={14} />
              </a>
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline whitespace-nowrap"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle size={14} />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Footer Grid ── */}
      <div className="relative z-10 section-container py-14 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Col 1: Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" aria-label="Sriyan Modulars — Home" className="flex items-center gap-3 mb-5 group w-fit">
              <div className="relative w-12 h-12 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/assets/images/logo.png"
                  alt="Sriyan Modulars Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <span
                  className="block"
                  style={{ fontFamily: 'var(--font-accent)', fontSize: '0.8rem', letterSpacing: '0.3em', color: 'var(--gold)', lineHeight: 1 }}
                >
                  SRIYAN
                </span>
                <span
                  className="block"
                  style={{ fontFamily: 'var(--font-body)', fontSize: '0.6rem', letterSpacing: '0.35em', color: 'var(--ivory-muted)', lineHeight: 1, marginTop: '2px' }}
                >
                  MODULARS
                </span>
              </div>
            </Link>

            <p className="body-sm mb-5" style={{ lineHeight: 1.85, maxWidth: '240px' }}>
              Bespoke modular interiors crafted with precision and passion. Serving Hubballi-Dharwad and beyond.
            </p>

            {/* Tagline */}
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-5" style={{ background: 'var(--gold)' }} aria-hidden="true" />
              <span
                style={{
                  fontFamily: 'var(--font-accent)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.2em',
                  color: 'var(--gold)',
                  textTransform: 'uppercase',
                }}
              >
                Smart Spaces, Stylish Living
              </span>
            </div>

            {/* Social icons */}
            <div className="flex gap-2" role="list" aria-label="Social media links">
              {[
                { icon: MedalIcon, href: CONTACT_INFO.instagram, label: 'Instagram' },
                { icon: MedalIcon,  href: CONTACT_INFO.facebook,  label: 'Facebook' },
                { icon: MessageCircle, href: `https://wa.me/${CONTACT_INFO.whatsapp}`, label: 'WhatsApp' },
              ].map(({ icon: Icon, href, label }) => (
                <li key={label} style={{ listStyle: 'none' }}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex items-center justify-center w-9 h-9 transition-all duration-300 hover:bg-gold hover:border-gold group"
                    style={{ border: 'var(--border-gold)', color: 'var(--gold)' }}
                  >
                    <Icon size={14} className="group-hover:text-black transition-colors duration-200" />
                  </a>
                </li>
              ))}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <nav aria-label="Quick navigation links">
            <p
              className="mb-5"
              style={{
                fontFamily: 'var(--font-accent)',
                fontSize: '0.65rem',
                letterSpacing: '0.2em',
                color: 'var(--gold)',
                textTransform: 'uppercase',
              }}
            >
              Navigate
            </p>
            <ul className="flex flex-col gap-3" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 transition-colors duration-200 hover:text-gold"
                    style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--ivory-muted)' }}
                  >
                    <span
                      className="h-px transition-all duration-300 group-hover:w-4"
                      style={{ width: '8px', background: 'var(--gold)' }}
                      aria-hidden="true"
                    />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Col 3: Services */}
          <nav aria-label="Services links">
            <p
              className="mb-5"
              style={{
                fontFamily: 'var(--font-accent)',
                fontSize: '0.65rem',
                letterSpacing: '0.2em',
                color: 'var(--gold)',
                textTransform: 'uppercase',
              }}
            >
              Our Services
            </p>
            <ul className="flex flex-col gap-3" role="list">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    className="group flex items-center gap-2 transition-colors duration-200 hover:text-gold"
                    style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--ivory-muted)' }}
                    aria-label={service.title}
                  >
                    <span
                      className="h-px transition-all duration-300 group-hover:w-4"
                      style={{ width: '8px', background: 'var(--gold)' }}
                      aria-hidden="true"
                    />
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Col 4: Contact Info */}
          <address style={{ fontStyle: 'normal' }} aria-label="Contact information">
            <p
              className="mb-5"
              style={{
                fontFamily: 'var(--font-accent)',
                fontSize: '0.65rem',
                letterSpacing: '0.2em',
                color: 'var(--gold)',
                textTransform: 'uppercase',
              }}
            >
              Find Us
            </p>
            <ul className="flex flex-col gap-4" role="list">
              {[
                { icon: Phone,  label: 'Phone',   value: CONTACT_INFO.phone,   href: `tel:${CONTACT_INFO.phone}` },
                { icon: Mail,   label: 'Email',   value: CONTACT_INFO.email,   href: `mailto:${CONTACT_INFO.email}` },
                { icon: MapPin, label: 'Address', value: CONTACT_INFO.address, href: CONTACT_INFO.mapLink },
                { icon: null,   label: 'Hours',   value: CONTACT_INFO.hours,   href: undefined },
              ].map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex gap-3 items-start">
                  {Icon && (
                    <Icon
                      size={14}
                      className="text-gold flex-shrink-0 mt-0.5"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  )}
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="hover:text-gold transition-colors duration-200"
                      style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: 'var(--ivory-muted)', lineHeight: 1.6 }}
                    >
                      {value}
                    </a>
                  ) : (
                    <p
                      style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: 'var(--ivory-muted)', lineHeight: 1.6 }}
                    >
                      {value}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </address>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div
        className="relative z-10"
        style={{ borderTop: '1px solid rgba(171,130,48,0.1)' }}
      >
        <div className="section-container py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p
              style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--ivory-muted)' }}
            >
              © {year} Sriyan Modulars. All rights reserved.
            </p>

            {/* Ornament center */}
            <div className="flex items-center gap-2" aria-hidden="true">
              <div className="h-px w-8" style={{ background: 'rgba(171,130,48,0.3)' }} />
              <div className="ornament-diamond" style={{ width: '4px', height: '4px' }} />
              <div className="h-px w-8" style={{ background: 'rgba(171,130,48,0.3)' }} />
            </div>

            <p
              style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--ivory-muted)' }}
            >
              Smart Spaces, Stylish Living
            </p>
          </div>
        </div>
      </div>

      {/* Sticky WhatsApp float button */}
      <a
        href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Hi%2C%20I%20want%20to%20know%20more%20about%20your%20interior%20services.`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
        style={{
          background: '#25D366',
          boxShadow: '0 4px 24px rgba(37,211,102,0.4)',
        }}
        aria-label="Chat with us on WhatsApp"
      >
        <MessageCircle size={24} color="#fff" strokeWidth={2} />
      </a>
    </footer>
  )
}