import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi'

const NAV_LEFT  = ['Home', 'About', 'Skills', 'Projects']
const NAV_RIGHT = ['Experience', 'Apps', 'Contact']

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          {/* Brand */}
          <div className="footer__brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div className="navbar__logo" style={{ width: 34, height: 34, fontSize: 14 }}>A</div>
              <span style={{ fontWeight: 700, color: '#fff', fontSize: 15 }}>
                Arslan<span style={{ color: '#38bdf8' }}>.</span>
              </span>
            </div>
            <p>
              Flutter Developer building high-performance iOS &amp; Android apps
              and mobile-first digital products.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <div className="footer__nav-label">Navigate</div>
            <div className="footer__nav">
              {[...NAV_LEFT, ...NAV_RIGHT].map(label => (
                <a key={label} href={`#${label.toLowerCase()}`}>{label}</a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <div className="footer__connect-label">Connect</div>
            <div className="footer__socials">
              <a
                href="https://github.com/MArslan47"
                target="_blank"
                rel="noreferrer"
                className="footer__social"
                aria-label="GitHub"
              >
                <FiGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-arslan-4b9499317"
                target="_blank"
                rel="noreferrer"
                className="footer__social"
                aria-label="LinkedIn"
              >
                <FiLinkedin />
              </a>
              <a
                href="mailto:marslanch7@gmail.com"
                className="footer__social"
                aria-label="Email"
              >
                <FiMail />
              </a>
            </div>
            <button
              className="footer__back"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <FiArrowUp size={13} /> Back to top
            </button>
          </div>
        </div>

        <div className="footer__bottom">
          © {new Date().getFullYear()} M Arslan. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
