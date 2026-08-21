import {
  FiNavigation, FiBookOpen, FiHeart, FiTool, FiCalendar, FiDollarSign,
} from 'react-icons/fi'
import { FaGooglePlay, FaApple } from 'react-icons/fa'

const LIVE_APPS = [
  {
    icon: <FiBookOpen />,
    title: 'Boost My Maths',
    desc: 'Gamified math learning app for UK school children with AI Math Gym, quizzes, and progress tracking.',
    playLink: 'https://play.google.com/store/apps/details?id=com.boostmymaths.app',
    iosLink: 'https://apps.apple.com/pk/app/boost-my-maths-practice-maths/id6749534776',
  },
  {
    icon: <FiHeart />,
    title: 'Midnight Mums Club',
    desc: 'Health & community support app for pregnant women and mothers with AI chatbot and emergency alerts.',
    playLink: 'https://play.google.com/store/apps/details?id=com.afinitiglobal.mums_club',
    iosLink: 'https://apps.apple.com/pk/app/midnight-mums-club/id6748643951',
  },
  {
    icon: <FiTool />,
    title: 'Theka Online',
    desc: 'On-demand local services app connecting customers with plumbers, electricians, and tradespeople in Pakistan.',
    playLink: 'https://play.google.com/store/apps/details?id=com.shaplogicians.theka_online',
    iosLink: null,
  },
  {
    icon: <FiCalendar />,
    title: 'Sand & Fun',
    desc: 'Event management app for Saudi Air Show 2025 with multi-role QR access, ticketing, and aircraft database.',
    playLink: 'https://play.google.com/store/apps/details?id=com.sandfun.SandFunApp&pcampaignid=web_share',
    iosLink: 'https://apps.apple.com/pk/app/general-aviation-airshow-2026/id6744918197',
  },
  {
    icon: <FiNavigation />,
    title: 'Taxara',
    desc: 'AI-powered accounting & tax app for UK businesses with HMRC MTD compliance, Stripe payments, and Tap to Pay.',
    playLink: 'https://play.google.com/store/apps/details?id=com.afiniti.taxara',
    iosLink: 'https://apps.apple.com/pk/app/taxara-bookkeeping/id6737125416',
  },
  {
    icon: <FiDollarSign />,
    title: 'MV Accountancy',
    desc: 'Finance transaction tracker & admin panel for UK accountancy — income/expense logging, Excel export, and Firebase backend.',
    playLink: 'https://play.google.com/store/apps/details?id=uk.co.mvaccountancy.client',
    iosLink: null,
  },
]

export default function Apps() {
  return (
    <section id="apps" className="apps">
      <div className="container">
        <div className="apps__header">
          <div className="section-badge">Live on App Stores</div>
          <h2 className="section-heading">Apps you can download now.</h2>
          <p className="section-sub">
            Production apps I've built — shipped, live, and used by real people.
          </p>
        </div>

        <div className="apps__grid">
          {LIVE_APPS.map(({ icon, title, desc, playLink, iosLink }) => (
            <div key={title} className="app-card">
              <div className="app-card__icon">{icon}</div>
              <div className="app-card__title">{title}</div>
              <p className="app-card__desc">{desc}</p>
              <div className="app-card__links">
                {playLink && (
                  <a
                    href={playLink}
                    target="_blank"
                    rel="noreferrer"
                    className="app-card__store-btn app-card__store-btn--android"
                  >
                    <FaGooglePlay size={13} />
                    Play Store
                  </a>
                )}
                {iosLink && (
                  <a
                    href={iosLink}
                    target="_blank"
                    rel="noreferrer"
                    className="app-card__store-btn app-card__store-btn--ios"
                  >
                    <FaApple size={14} />
                    App Store
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
