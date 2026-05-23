export const NAV_LINKS = [
  { label: 'Services',     href: '#services' },
  { label: 'Portfolio',    href: '#portfolio' },
  { label: 'Our Process',  href: '#process' },
  { label: 'Why Us',       href: '#why-us' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact',      href: '#contact' },
]

export const SERVICES = [
  {
    id: 'kitchen',
    title: 'Modular Kitchens',
    subtitle: 'Engineered for the Art of Cooking',
    description:
      'From sleek handleless designs to rich wood-finish cabinetry — every kitchen we build is a perfect marriage of form and function.',
    image: '/assets/images/service-kitchen.jpg',
    // PUT: service-kitchen.jpg — a clean modular kitchen photo, preferably dark/warm tones
    tag: '01',
  },
  {
    id: 'wardrobe',
    title: 'Wardrobes & Walk-ins',
    subtitle: 'Your Personal Style Sanctuary',
    description:
      'Bespoke wardrobe systems with sliding doors, custom compartments, and refined finishes — built to hold your world in perfect order.',
    image: '/assets/images/service-wardrobe.jpg',
    // PUT: service-wardrobe.jpg — a luxurious wardrobe or walk-in closet photo
    tag: '02',
  },
  {
    id: 'living',
    title: 'Living Room Design',
    subtitle: 'Where Life Unfolds in Style',
    description:
      'TV units, entertainment walls, and curated living spaces that balance visual drama with everyday comfort.',
    image: '/assets/images/service-living.jpg',
    // PUT: service-living.jpg — a styled living room interior
    tag: '03',
  },
  {
    id: 'bedroom',
    title: 'Bedroom Interiors',
    subtitle: 'Restful · Refined · Personal',
    description:
      'Thoughtfully designed bedrooms with custom headboards, built-in storage, and lighting that transforms sleep into an experience.',
    image: '/assets/images/service-bedroom.jpg',
    // PUT: service-bedroom.jpg — a serene, well-designed bedroom
    tag: '04',
  },
  {
    id: 'bathroom',
    title: 'Bathroom Vanities',
    subtitle: 'Spa Moments, Every Morning',
    description:
      'Precision-crafted vanity units, mirror cabinets, and accessories that bring hotel-level luxury to your daily routine.',
    image: '/assets/images/service-bathroom.jpg',
    // PUT: service-bathroom.jpg — a modern bathroom vanity or interior
    tag: '05',
  },
  {
    id: 'office',
    title: 'Home Office & Study',
    subtitle: 'Designed for Deep Work',
    description:
      'Ergonomic yet elegant workspaces — custom desks, shelving systems, and acoustic panels for the home professional.',
    image: '/assets/images/service-office.jpg',
    // PUT: service-office.jpg — a neat home office or study room
    tag: '06',
  },
]

export const STATS = [
  { value: '500+', label: 'Projects Completed' },
  { value: '8+',   label: 'Years of Craft' },
  { value: '98%',  label: 'Client Satisfaction' },
  { value: '45',   label: 'Days Avg. Delivery' },
]

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Discovery Call',
    description: 'We begin with a detailed conversation about your vision, space, and lifestyle — understanding every nuance before we put pen to paper.',
  },
  {
    step: '02',
    title: '3D Design & Visualization',
    description: 'Our designers create photorealistic 3D renders so you can walk through your new space before a single panel is cut.',
  },
  {
    step: '03',
    title: 'Material Selection',
    description: 'Choose from our curated library of finishes, hardware, and materials — guided by experts with an eye for quality.',
  },
  {
    step: '04',
    title: 'Factory Precision',
    description: 'All modules are manufactured under controlled factory conditions using CNC machinery for millimeter-level accuracy.',
  },
  {
    step: '05',
    title: 'White-Glove Installation',
    description: 'Our skilled team installs your interiors with zero compromise — clean, punctual, and with respect for your home.',
  },
  {
    step: '06',
    title: 'Handover & Warranty',
    description: 'We walk you through every detail, answer every question, and back our work with a comprehensive warranty.',
  },
]

export const WHY_US = [
  {
    icon: 'award',
    title: 'Uncompromising Quality',
    description: 'We use only BWR-grade plywood, soft-close hardware, and premium laminates that stand the test of time.',
  },
  {
    icon: 'clock',
    title: 'On-Time, Every Time',
    description: 'We understand that delays cost you. Our project managers ensure milestones are met without cutting corners.',
  },
  {
    icon: 'layers',
    title: 'End-to-End Service',
    description: 'From design consultation to final handover — one team, one point of contact, zero chaos.',
  },
  {
    icon: 'shield',
    title: '5-Year Warranty',
    description: 'Peace of mind baked in. Our warranty covers both material and workmanship for five full years.',
  },
  {
    icon: 'sparkles',
    title: 'Bespoke Design',
    description: 'No catalogue copies. Every design is conceived fresh, tailored precisely to your space and personality.',
  },
  {
    icon: 'users',
    title: 'Post-Install Support',
    description: 'Our relationship doesn\'t end at installation. We\'re available for adjustments, repairs, and advice long after.',
  },
]

export const TESTIMONIALS = [
  {
    name: 'Priya & Rajan Kulkarni',
    location: 'Hubballi',
    project: 'Complete 3BHK Interior',
    rating: 5,
    text: 'Sriyan Modulars turned our raw apartment into a home we\'re genuinely proud of. The attention to detail — down to the last handle — was extraordinary. We\'ve had countless guests ask for their number.',
  },
  {
    name: 'Suresh Patil',
    location: 'Dharwad',
    project: 'Modular Kitchen & Master Bedroom',
    rating: 5,
    text: 'I had very specific ideas and was worried no one would execute them right. Sriyan\'s team not only understood my vision — they made it better. The kitchen is a dream to cook in.',
  },
  {
    name: 'Ananya Desai',
    location: 'Hubballi',
    project: 'Home Office & Wardrobe',
    rating: 5,
    text: 'Professional, prompt, and genuinely talented. The wardrobe system they built for me has completely changed how I start my mornings. Worth every rupee.',
  },
  {
    name: 'Vikram & Meena Joshi',
    location: 'Hubballi',
    project: '2BHK Full Interior',
    rating: 5,
    text: 'We were on a tight timeline and budget and Sriyan\'s team delivered without compromising a single inch of quality. The 3D visualizations before execution gave us total confidence.',
  },
]

export const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: 'The Kulkarni Residence',
    category: 'Complete 3BHK',
    location: 'Vidyanagar, Hubballi',
    image: '/assets/images/portfolio-1.jpg',
    // PUT: portfolio-1.jpg — a stunning interior photo of a completed project
  },
  {
    id: 2,
    title: 'Contemporary Kitchen',
    category: 'Modular Kitchen',
    location: 'Keshwapur, Hubballi',
    image: '/assets/images/portfolio-2.jpg',
    // PUT: portfolio-2.jpg — a beautiful modular kitchen project
  },
  {
    id: 3,
    title: 'The Minimalist Suite',
    category: 'Master Bedroom',
    location: 'Dharwad',
    image: '/assets/images/portfolio-3.jpg',
    // PUT: portfolio-3.jpg — an elegant bedroom project
  },
  {
    id: 4,
    title: 'Executive Home Office',
    category: 'Home Office',
    location: 'Gokul Road, Hubballi',
    image: '/assets/images/portfolio-4.jpg',
    // PUT: portfolio-4.jpg — a refined home office project
  },
]

export const CONTACT_INFO = {
  phone: '+91-XXXXXXXXXX',   // FILL: your phone number
  email: 'hello@sriyanmodulars.com', // FILL: your email
  address: 'Your Showroom Address, Hubballi - 580029', // FILL: your address
  hours: 'Mon – Sat: 10:00 AM – 7:00 PM',
  mapLink: 'https://maps.google.com/?q=Sriyan+Modulars+Hubballi', // FILL: Google Maps link
  instagram: 'https://instagram.com/sriyanmodulars', // FILL
  facebook: 'https://facebook.com/sriyanmodulars',   // FILL
  whatsapp: '+91XXXXXXXXXX', // FILL: WhatsApp number (no spaces/dashes)
}