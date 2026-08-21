import { FiSmartphone, FiDatabase, FiCreditCard, FiLayers } from 'react-icons/fi'

const DOMAINS = [
  {
    icon: <FiSmartphone />,
    title: 'Mobile Apps',
    desc: 'Flutter & Dart — crafting smooth, pixel-perfect iOS and Android apps from a single codebase.',
  },
  {
    icon: <FiDatabase />,
    title: 'Firebase & Backend',
    desc: 'Firebase, Supabase, REST APIs — real-time databases, auth, and cloud functions.',
  },
  {
    icon: <FiCreditCard />,
    title: 'Payments',
    desc: 'Stripe, Stripe Connect, PayTab — end-to-end payment flows including driver payouts.',
  },
  {
    icon: <FiLayers />,
    title: 'Architecture',
    desc: 'GetX, Provider, clean architecture — scalable state management and maintainable codebases.',
  },
]

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about__header">
          <div className="section-badge">About Me</div>
          <h2 className="section-heading">Building apps people<br />actually use.</h2>
          <p className="section-sub">
            2.5+ years shipping Flutter apps across iOS and Android. I care about smooth UX,
            clean architecture, and mobile performance that holds up in production.
          </p>
        </div>

        <div className="about__grid">
          {/* Left — quick intro */}
          <div className="about__intro-card">
            <h3>A quick intro</h3>
            <p>
              I'm a <strong>Flutter Developer</strong> with <strong>2.5+ years</strong> of
              hands-on experience shipping <strong>10+ projects</strong>, including ride-hailing
              apps, EdTech platforms, fintech trackers, and healthcare apps live on the Play Store.
            </p>
            <p>
              My focus is clean app architecture, performant animations, and integrations that
              actually work — from Google Maps and real-time tracking to multi-role QR systems
              and AI-powered features.
            </p>
            <p>
              I work across the full mobile stack: UI design → state management → backend
              integration → Play Store deployment.
            </p>
            <div className="about__bullets">
              <span className="about__bullet">End-to-end ownership: UI → logic → deployment</span>
              <span className="about__bullet">Performance-first mindset (smooth 60fps, lazy loading)</span>
              <span className="about__bullet">Strong collaboration with design and backend teams</span>
              <span className="about__bullet">Comfortable across Flutter, Dart, Firebase ecosystems</span>
            </div>
          </div>

          {/* Right — domain cards */}
          <div className="about__domain-grid">
            {DOMAINS.map(({ icon, title, desc }) => (
              <div key={title} className="domain-card">
                <div className="domain-card__icon">{icon}</div>
                <h4>{title}</h4>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
