import { FiBriefcase, FiMapPin, FiCalendar } from 'react-icons/fi'
import { handleTiltMove, handleTiltLeave } from '../utils/tilt'

const EXPERIENCES = [
  {
    role: 'Flutter Developer',
    company: 'SLYK Design Studio',
    period: 'Dec 2024 – Present',
    location: 'Onsite',
    badge: 'Current Role',
    bullets: [
      'Started as Intermediate Flutter Developer, promoted to Senior, then Team Lead.',
      'Led two projects and currently managing one ongoing project.',
      'Built apps across e-commerce, fintech, children-focused, and women-specific domains.',
      'Delivered two high-quality projects under senior supervision before promotion.',
      'Architected scalable Flutter solutions with clean architecture patterns.',
      'Collaborated closely with design and backend teams in agile sprints.',
    ],
  },
  {
    role: 'Flutter Developer',
    company: 'Alright Tech Pvt Ltd',
    period: 'Oct 2023 – Nov 2024',
    location: 'Onsite',
    badge: null,
    bullets: [
      'Joined as Flutter Intern — worked on UI design, state management, and app architecture.',
      'Promoted to Junior Flutter Developer after strong early performance.',
      'Collaborated with senior developers on three projects and contributed to a web application.',
      'Completed Final Year Project — selected in Top 10 at university house-job display event.',
      'Built e-commerce solutions and various small to medium-scale applications.',
      'Gained solid experience in Firebase, REST APIs, and GetX state management.',
    ],
  },
  {
    role: 'Intern',
    company: 'State Life Insurance Corporation of Pakistan',
    period: 'Jul 2023 – Sep 2023',
    location: 'Onsite',
    badge: null,
    bullets: [
      'Completed a 3-month internship focused on MS Word and Excel.',
      'Learned application writing, documentation handling, and data entry tasks.',
      'Gained practical office experience and improved administrative skills.',
      'Developed strong communication and professional skills.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="experience__header">
          <div className="section-badge">Experience</div>
          <h2 className="section-heading">Where I've shipped.</h2>
          <p className="section-sub">A snapshot of recent work and impact.</p>
        </div>

        <div className="experience__timeline">
          {EXPERIENCES.map(({ role, company, period, location, badge, bullets }) => (
            <div key={company} className="exp-entry">
              <div className="exp-entry__track">
                <div className="exp-entry__dot">
                  <FiBriefcase size={18} />
                </div>
                <div className="exp-entry__line" />
              </div>

              <div
                className="exp-card tilt-card"
                onMouseMove={handleTiltMove}
                onMouseLeave={handleTiltLeave}
              >
                <div className="exp-card__top">
                  <div className="exp-card__role">
                    {role}{' '}
                    <span className="exp-card__company">@ {company}</span>
                  </div>
                  {badge && <span className="exp-card__badge">{badge}</span>}
                </div>

                <div className="exp-card__meta">
                  <span><FiCalendar size={13} /> {period}</span>
                  <span><FiMapPin size={13} /> {location}</span>
                </div>

                <ul className="exp-card__bullets">
                  {bullets.map((b, i) => (
                    <li key={i} className="exp-card__bullet">{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
