import { useState } from 'react'
import {
  FiNavigation, FiBookOpen, FiDollarSign, FiHeart,
  FiTool, FiCalendar, FiShoppingBag, FiExternalLink, FiFileText,
} from 'react-icons/fi'
import { handleTiltMove, handleTiltLeave } from '../utils/tilt'

const ALL_PROJECTS = [
  {
    icon: <FiNavigation />,
    category: 'Transport',
    title: 'Tullo',
    desc: 'Ride-hailing mobile application with driver & passenger apps, similar to InDrive and Uber.',
    bullets: [
      'Real-time location tracking and route drawing via Google Maps',
      'Instant Ride and Reservation Ride modules',
      'Stripe payments for passengers, Stripe Connect payouts for drivers',
    ],
    tags: ['Flutter', 'Firebase', 'Google Maps', 'Stripe', 'GetX'],
    link: null,
  },
  {
    icon: <FiBookOpen />,
    category: 'EdTech',
    title: 'Boost My Maths',
    desc: 'UK-based learning & gamified math app for children with AI-powered Math Gym.',
    bullets: [
      'Structured school years with levels, quizzes, and progress charts',
      'AI-generated math questions (easy, medium, hard)',
      'Games section and Snapchat-style avatar creator',
    ],
    tags: ['Flutter', 'Supabase', 'Firebase Analytics', 'AI'],
    link: 'https://play.google.com/store/apps/details?id=com.boostmymaths.app',
  },
  {
    icon: <FiDollarSign />,
    category: 'Fintech',
    title: 'MV Accountancy',
    desc: 'Finance transaction tracker app & admin panel for self-employed and lettings categories.',
    bullets: [
      'Secure client app with unique Client ID login and submission-only policy',
      'Admin panel with filtering by day, week, month, quarter, year',
      'Excel export of filtered transaction data',
    ],
    tags: ['Flutter', 'Firebase', 'Admin Panel', 'Excel'],
    link: null,
  },
  {
    icon: <FiHeart />,
    category: 'HealthTech',
    title: 'Midnight Mums Club',
    desc: 'Health, community & support app for pregnant women and mothers.',
    bullets: [
      'Baby tracking, guided meditations, and health insights',
      'Emergency Alert System and AI-powered chatbot',
      'In-app purchases and subscription plans',
    ],
    tags: ['Flutter', 'Firebase', 'GetX', 'AI Chatbot'],
    link: 'https://play.google.com/store/apps/details?id=com.afinitiglobal.mums_club',
  },
  {
    icon: <FiTool />,
    category: 'Services',
    title: 'Theka Online',
    desc: 'On-demand local services app connecting customers with tradespeople across Pakistan.',
    bullets: [
      'Real-time job notifications within 15km radius (inDrive model)',
      'Separate flows for customers and service providers',
      'Full Admin Panel to manage users and monitor activity',
    ],
    tags: ['Flutter', 'Firebase', 'Location', 'GetX'],
    link: 'https://play.google.com/store/apps/details?id=com.shaplogicians.theka_online',
  },
  {
    icon: <FiCalendar />,
    category: 'Events',
    title: 'Sand & Fun',
    desc: 'Comprehensive event-management app for the Saudi Air Show (Nov–Dec 2025).',
    bullets: [
      'Multi-role QR code access system (Visitor, VIP, Security, CEO)',
      'Interactive event map with WebView and full ticket booking',
      'QR scanner with aircraft database of 100+ planes',
    ],
    tags: ['Flutter', 'PayTabs', 'QR', 'WebView'],
    link: 'https://play.google.com/store/apps/details?id=com.sandfun.SandFunApp',
  },
  {
    icon: <FiFileText />,
    category: 'Fintech',
    title: 'Taxara',
    desc: 'AI-powered accounting & tax management app for UK self-employed individuals and small businesses.',
    bullets: [
      'AI bookkeeping: auto-categorises transactions, tracks income/expenses, generates charts',
      'HMRC-connected VAT module with Making Tax Digital (MTD) compliance & direct submission',
      'Stripe Tap to Pay, biometric login, PowerSync offline sync with Supabase backend',
    ],
    tags: ['Flutter', 'Supabase', 'Stripe', 'AI', 'HMRC', 'Firebase'],
    link: 'https://play.google.com/store/apps/details?id=com.afiniti.taxara',
  },
  {
    icon: <FiShoppingBag />,
    category: 'E-commerce',
    title: 'Gogesh',
    desc: 'Dual-app e-commerce & food service platform for restaurants and end-users.',
    bullets: [
      'Restaurant app: menu management and service availability',
      'User app: browse menus and place orders seamlessly',
      'PayTabs payment integration and real-time responsiveness',
    ],
    tags: ['Flutter', 'Firebase', 'PayTabs', 'GetX'],
    link: null,
  },
]

const FILTERS = ['All', 'Fintech', 'Transport', 'EdTech', 'HealthTech', 'Services', 'Events', 'E-commerce']

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')

  const visible = activeFilter === 'All'
    ? ALL_PROJECTS
    : ALL_PROJECTS.filter(p => p.category === activeFilter)

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="projects__header">
          <div className="section-badge">Featured Projects</div>
          <h2 className="section-heading">Selected work, real impact.</h2>
          <p className="section-sub">
            A curated set of mobile apps I've architected, built, or led across
            transport, edtech, fintech, healthcare, and more.
          </p>
        </div>

        <div className="projects__filters">
          {FILTERS.map(f => (
            <button
              key={f}
              className={`filter-btn${activeFilter === f ? ' filter-btn--active' : ''}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="projects__grid">
          {visible.map(({ icon, category, title, desc, bullets, tags, link }) => (
            <div
              key={title}
              className="project-card tilt-card"
              onMouseMove={handleTiltMove}
              onMouseLeave={handleTiltLeave}
            >
              <div className="project-card__top">
                <div className="project-card__icon">{icon}</div>
                <span className="project-card__cat">{category}</span>
              </div>

              <div className="project-card__title">
                {link ? (
                  <a href={link} target="_blank" rel="noreferrer">
                    {title} <FiExternalLink size={14} />
                  </a>
                ) : (
                  title
                )}
              </div>

              <p className="project-card__desc">{desc}</p>

              <ul className="project-card__bullets">
                {bullets.map((b, i) => (
                  <li key={i} className="project-card__bullet">{b}</li>
                ))}
              </ul>

              <div className="project-card__tags">
                {tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
