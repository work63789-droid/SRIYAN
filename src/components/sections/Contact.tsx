'use client'

import { useEffect, useRef, useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MedalIcon, MessageCircle } from 'lucide-react'
import { CONTACT_INFO } from '@/lib/constants'

type FormState = 'idle' | 'loading' | 'success' | 'error'

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const [formState, setFormState] = useState<FormState>('idle')
  const [form, setForm] = useState({
    name: '', phone: '', email: '', service: '', message: '',
  })

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('loading')
    // FILL: Replace with your actual form submission logic (e.g., Formspree, EmailJS, API route)
    await new Promise((r) => setTimeout(r, 1500)) // Simulated delay
    setFormState('success')
  }

  const inputClass = `
    w-full px-4 py-3 bg-transparent text-ivory placeholder-ivory-muted/50 outline-none transition-all duration-300
    border-b border-gold/20 focus:border-gold
  `
  const labelClass = `block mb-2 label-accent`

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{
        paddingTop: 'var(--section-py)',
        paddingBottom: 'var(--section-py)',
        background: 'var(--black)',
      }}
      aria-labelledby="contact-heading"
    >
      {/* Top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        aria-hidden="true"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(171,130,48,0.4), transparent)' }}
      />

      {/* Glow bottom-left */}
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] pointer-events-none"
        aria-hidden="true"
        style={{ background: 'radial-gradient(circle at bottom left, rgba(171,130,48,0.07) 0%, transparent 65%)' }}
      />

      <div className="section-container relative z-10">

        {/* ── Header ── */}
        <div className="text-center mb-14 lg:mb-16">
          <div className="flex items-center justify-center gap-3 mb-4 reveal">
            <div className="gold-line-h" style={{ background: 'linear-gradient(90deg, transparent, var(--gold))' }} />
            <div className="ornament-diamond" />
            <span className="label-accent">Get In Touch</span>
            <div className="ornament-diamond" />
            <div className="gold-line-h" style={{ background: 'linear-gradient(90deg, var(--gold), transparent)' }} />
          </div>
          <h2 id="contact-heading" className="display-xl reveal delay-1">
            <span style={{ color: 'var(--ivory)' }}>Let's Build</span>
            {' '}
            <span className="italic text-gold-gradient">Something</span>
            <br />
            <span style={{ color: 'var(--ivory)' }}>Beautiful</span>
          </h2>
          <p className="body-lg mt-4 max-w-md mx-auto reveal delay-2">
            Fill in the form and our design team will get back to you within 24 hours — no pressure, just possibilities.
          </p>
        </div>

        {/* ── Two-column: form + info ── */}
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-px" style={{ background: 'rgba(171,130,48,0.1)' }}>

          {/* ── Form Panel ── */}
          <div className="p-8 lg:p-12 reveal-left" style={{ background: 'var(--black-card)' }}>
            {formState === 'success' ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <div
                  className="flex items-center justify-center w-20 h-20 mb-6"
                  style={{ border: '1px solid var(--gold)', background: 'rgba(171,130,48,0.1)', animation: 'glowPulse 2s ease-in-out infinite' }}
                >
                  <CheckCircle size={32} className="text-gold" strokeWidth={1.5} />
                </div>
                <h3
                  style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--ivory)', marginBottom: '0.75rem' }}
                >
                  Message Received
                </h3>
                <p className="body-lg max-w-xs">
                  Thank you for reaching out. Our design team will contact you within 24 hours to schedule your free consultation.
                </p>
                <button
                  onClick={() => { setFormState('idle'); setForm({ name: '', phone: '', email: '', service: '', message: '' }) }}
                  className="btn-outline mt-8"
                >
                  <span>Send Another Message</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
                <p
                  className="mb-8"
                  style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: 'var(--ivory)', fontWeight: 400 }}
                >
                  Start Your Free Consultation
                </p>

                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className={labelClass}>Full Name *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={inputClass}
                      style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem' }}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className={labelClass}>Phone Number *</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className={inputClass}
                      style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem' }}
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className={labelClass}>Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={inputClass}
                    style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem' }}
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="service" className={labelClass}>Service Interested In</label>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className={inputClass}
                    style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', background: 'var(--black-card)', color: form.service ? 'var(--ivory)' : 'rgba(245,240,232,0.4)', cursor: 'pointer' }}
                  >
                    <option value="" disabled>Select a service</option>
                    <option value="kitchen">Modular Kitchen</option>
                    <option value="wardrobe">Wardrobes & Walk-ins</option>
                    <option value="living">Living Room Design</option>
                    <option value="bedroom">Bedroom Interiors</option>
                    <option value="bathroom">Bathroom Vanities</option>
                    <option value="office">Home Office & Study</option>
                    <option value="complete">Complete Home Interiors</option>
                  </select>
                </div>

                <div className="mb-8">
                  <label htmlFor="message" className={labelClass}>Tell Us About Your Project</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your space, requirements, budget range..."
                    className={inputClass}
                    style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', resize: 'none' }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={formState === 'loading'}
                  className="btn-gold w-full justify-center"
                  aria-label="Submit contact form"
                >
                  {formState === 'loading' ? (
                    <>
                      <span
                        className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full"
                        style={{ animation: 'rotateSlow 0.8s linear infinite' }}
                        aria-hidden="true"
                      />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={14} />
                    </>
                  )}
                </button>

                <p className="body-sm text-center mt-4">
                  We respond within 24 hours · No spam, ever
                </p>
              </form>
            )}
          </div>

          {/* ── Info Panel ── */}
          <div className="p-8 lg:p-12 flex flex-col gap-8 reveal-right" style={{ background: 'var(--black-soft)' }}>
            <div>
              <p
                style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: 'var(--ivory)', fontWeight: 400, marginBottom: '1.5rem' }}
              >
                Visit Our Showroom
              </p>
              <div className="flex flex-col gap-5">
                {[
                  {
                    icon: Phone,
                    label: 'Call Us',
                    value: CONTACT_INFO.phone,
                    href: `tel:${CONTACT_INFO.phone}`,
                  },
                  {
                    icon: Mail,
                    label: 'Email Us',
                    value: CONTACT_INFO.email,
                    href: `mailto:${CONTACT_INFO.email}`,
                  },
                  {
                    icon: MapPin,
                    label: 'Showroom',
                    value: CONTACT_INFO.address,
                    href: CONTACT_INFO.mapLink,
                  },
                  {
                    icon: Clock,
                    label: 'Working Hours',
                    value: CONTACT_INFO.hours,
                    href: undefined,
                  },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex gap-4 group">
                    <div
                      className="flex items-center justify-center w-10 h-10 flex-shrink-0 mt-0.5 transition-all duration-300 group-hover:border-gold"
                      style={{ border: 'var(--border-gold)', background: 'rgba(171,130,48,0.05)' }}
                    >
                      <Icon size={15} className="text-gold" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="label-accent mb-0.5" style={{ color: 'var(--ivory-muted)', fontSize: '0.58rem' }}>
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith('http') ? '_blank' : undefined}
                          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="body-sm hover:text-gold transition-colors duration-200"
                          style={{ color: 'var(--ivory-dim)' }}
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="body-sm" style={{ color: 'var(--ivory-dim)' }}>{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="ornament-line">
              <div className="ornament-diamond" />
            </div>

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Hi%2C%20I%20am%20interested%20in%20your%20interior%20design%20services.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 transition-all duration-300 group"
              style={{ border: 'var(--border-gold)', background: 'rgba(37,211,102,0.05)' }}
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle size={20} className="text-green-400 flex-shrink-0" />
              <div>
                <p
                  style={{ fontFamily: 'var(--font-accent)', fontSize: '0.65rem', letterSpacing: '0.15em', color: 'var(--ivory)', textTransform: 'uppercase' }}
                >
                  Chat on WhatsApp
                </p>
                <p className="body-sm mt-0.5">Get instant answers from our team</p>
              </div>
              <div className="ml-auto w-1 h-full flex-shrink-0 group-hover:h-6 transition-all duration-300" style={{ background: '#25D366', width: '2px' }} />
            </a>

            {/* Social links */}
            <div>
              <p className="label-accent mb-4" style={{ color: 'var(--ivory-muted)' }}>
                Follow Our Work
              </p>
              <div className="flex gap-3">
                {[
                  { icon: MedalIcon, href: CONTACT_INFO.instagram, label: 'Instagram' },
                  { icon: MedalIcon,  href: CONTACT_INFO.facebook,  label: 'Facebook' },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow us on ${label}`}
                    className="flex items-center justify-center w-10 h-10 transition-all duration-300 hover:bg-gold hover:border-gold group"
                    style={{ border: 'var(--border-gold)', color: 'var(--gold)' }}
                  >
                    <Icon size={16} className="group-hover:text-black transition-colors duration-200" />
                  </a>
                ))}
              </div>
            </div>

            {/* Map embed placeholder */}
            <a
              href={CONTACT_INFO.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block overflow-hidden group"
              style={{ height: '140px', border: 'var(--border-gold)', background: 'var(--black-card)' }}
              aria-label="View on Google Maps"
            >
              {/* FILL: replace with an actual <iframe> Google Maps embed for your showroom address */}
              <div className="flex flex-col items-center justify-center h-full gap-2">
                <MapPin size={24} className="text-gold" strokeWidth={1.5} />
                <p className="label-accent" style={{ color: 'var(--ivory-muted)' }}>View on Google Maps</p>
              </div>
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'rgba(171,130,48,0.06)' }}
                aria-hidden="true"
              />
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}