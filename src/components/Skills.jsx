import { SiFlutter, SiDart, SiFirebase, SiSupabase, SiStripe, SiGithub, SiPostman } from 'react-icons/si'
import { FiWifi, FiBell, FiSmartphone, FiCode, FiMap, FiCreditCard, FiLock, FiKey, FiMonitor, FiPackage } from 'react-icons/fi'

const CATEGORIES = [
  {
    title: 'Mobile Development',
    items: [
      { icon: <SiFlutter />,    label: 'Flutter' },
      { icon: <SiDart />,       label: 'Dart' },
      { icon: <FiSmartphone />, label: 'Android' },
      { icon: <FiSmartphone />, label: 'iOS' },
      { icon: <FiCode />,       label: 'GetX' },
      { icon: <FiPackage />,    label: 'Provider' },
    ],
  },
  {
    title: 'Backend & Data',
    items: [
      { icon: <SiFirebase />,   label: 'Firebase' },
      { icon: <SiSupabase />,   label: 'Supabase' },
      { icon: <FiWifi />,       label: 'REST APIs' },
      { icon: <FiMap />,        label: 'Google Maps' },
      { icon: <FiBell />,       label: 'Push Notifs' },
      { icon: <FiMonitor />,    label: 'WebView' },
    ],
  },
  {
    title: 'Payments & Auth',
    items: [
      { icon: <SiStripe />,     label: 'Stripe' },
      { icon: <FiCreditCard />, label: 'Stripe Connect' },
      { icon: <FiCreditCard />, label: 'PayTab' },
      { icon: <FiLock />,       label: 'Firebase Auth' },
      { icon: <FiKey />,        label: 'OTP Auth' },
      { icon: <FiCode />,       label: 'RBAC' },
    ],
  },
  {
    title: 'Tools & Platforms',
    items: [
      { icon: <SiGithub />,     label: 'GitHub' },
      { icon: <FiCode />,       label: 'Android Studio' },
      { icon: <FiMonitor />,    label: 'Xcode' },
      { icon: <SiPostman />,    label: 'Postman' },
      { icon: <FiPackage />,    label: 'Play Store' },
      { icon: <FiCode />,       label: 'VS Code' },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="skills__header">
          <div className="section-badge">Skills</div>
          <h2 className="section-heading">A toolbox for mobile &amp; cloud.</h2>
          <p className="section-sub">
            The technologies I reach for to build apps, integrate backends,
            and ship production-ready mobile products.
          </p>
        </div>

        <div className="skills__grid">
          {CATEGORIES.map(({ title, items }) => (
            <div key={title} className="skill-category">
              <div className="skill-category__head">
                <span className="skill-category__title">{title}</span>
                <span className="skill-category__count">{items.length}</span>
              </div>
              <div className="skill-items">
                {items.map(({ icon, label }) => (
                  <div key={label} className="skill-item">
                    {icon}
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
