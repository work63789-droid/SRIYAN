import type { Metadata, Viewport } from 'next'
import './globals.css'

/* ── SEO Metadata ── */
export const metadata: Metadata = {
  metadataBase: new URL('https://sriyanmodulars.com'),

  title: {
    default: 'Sriyan Modulars — Smart Spaces, Stylish Living | Hubballi',
    template: '%s | Sriyan Modulars',
  },
  description:
    'Premium modular interiors in Hubballi-Dharwad. Sriyan Modulars crafts bespoke kitchens, wardrobes, living rooms & complete home interiors. Smart spaces, stylish living.',

  keywords: [
    'modular kitchen Hubballi',
    'interior design Hubballi',
    'modular wardrobes Dharwad',
    'home interiors Hubballi',
    'Sriyan Modulars',
    'modular furniture Karnataka',
    'luxury interiors Hubballi',
    'kitchen design Hubballi',
    'bedroom interiors',
    'complete home interiors',
  ],

  authors: [{ name: 'Sriyan Modulars', url: 'https://sriyanmodulars.com' }],
  creator: 'Sriyan Modulars',
  publisher: 'Sriyan Modulars',

  /* Open Graph */
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://sriyanmodulars.com',
    siteName: 'Sriyan Modulars',
    title: 'Sriyan Modulars — Smart Spaces, Stylish Living',
    description:
      'Bespoke modular interiors crafted for the discerning home. Kitchens, wardrobes, living spaces & more across Hubballi-Dharwad.',
    images: [
      {
        url: '/assets/images/og-image.jpg', // PUT: 1200×630 interior photo for social shares
        width: 1200,
        height: 630,
        alt: 'Sriyan Modulars — Luxury Modular Interiors',
      },
    ],
  },

  /* Twitter Card */
  twitter: {
    card: 'summary_large_image',
    title: 'Sriyan Modulars — Smart Spaces, Stylish Living',
    description: 'Premium modular interiors in Hubballi-Dharwad.',
    images: ['/assets/images/og-image.jpg'],
  },

  /* Robots */
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  /* Icons */
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },

  /* Verification (add real tokens when deploying) */
  verification: {
    google: 'YOUR_GOOGLE_SITE_VERIFICATION_TOKEN',
  },

  /* Canonical */
  alternates: {
    canonical: 'https://sriyanmodulars.com',
  },
}

export const viewport: Viewport = {
  themeColor: '#020202',
  width: 'device-width',
  initialScale: 1,
}

/* ── Structured Data (JSON-LD) ── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://sriyanmodulars.com',
  name: 'Sriyan Modulars',
  description: 'Premium modular interior design company in Hubballi-Dharwad, Karnataka.',
  url: 'https://sriyanmodulars.com',
  logo: 'https://sriyanmodulars.com/assets/images/logo.png',
  image: 'https://sriyanmodulars.com/assets/images/og-image.jpg',
  telephone: '+91-XXXXXXXXXX', // FILL: your phone number
  email: 'hello@sriyanmodulars.com', // FILL: your email
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'YOUR STREET ADDRESS', // FILL: your address
    addressLocality: 'Hubballi',
    addressRegion: 'Karnataka',
    postalCode: '580029',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 15.3647, // FILL: your exact lat
    longitude: 75.1240, // FILL: your exact lng
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '10:00',
      closes: '19:00',
    },
  ],
  priceRange: '₹₹₹',
  areaServed: ['Hubballi', 'Dharwad', 'Karnataka'],
  serviceType: [
    'Modular Kitchen',
    'Modular Wardrobe',
    'Living Room Interiors',
    'Bedroom Interiors',
    'Home Office Interiors',
    'Complete Home Interiors',
  ],
  sameAs: [
    'https://www.instagram.com/sriyanmodulars', // FILL: real handles
    'https://www.facebook.com/sriyanmodulars',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preconnects for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}