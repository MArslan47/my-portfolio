import { useState, useEffect } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'

const NAV_LINKS = [
  { label: 'Home',       href: '#home' },
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Apps',       href: '#apps' },
  { label: 'Contact',    href: '#contact' },
]

export default function Navbar() {
  const [active, setActive]     = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { threshold: 0.25, rootMargin: '-10% 0px -60% 0px' }
    )
    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <a href="#home" className="navbar__brand" onClick={closeMenu}>
          <div className="navbar__logo">A</div>
          <span className="navbar__name">
            Muhammad Arslan<span className="brand-dot">.</span>
          </span>
        </a>

        <div className="navbar__links">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className={`navbar__link${active === href.slice(1) ? ' navbar__link--active' : ''}`}
            >
              {label}
            </a>
          ))}
        </div>

        <div className="navbar__actions">
          <a href="/resume.html" className="btn btn--outline btn--sm" target="_blank" rel="noreferrer">
            Resume
          </a>
          <a href="#contact" className="btn btn--primary btn--sm">Hire Me</a>
        </div>

        <button
          className="navbar__hamburger"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX size={22} /> : <HiMenu size={22} />}
        </button>
      </div>

      <div className={`navbar__mobile${menuOpen ? ' open' : ''}`}>
        {NAV_LINKS.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className={`navbar__mobile-link${active === href.slice(1) ? ' navbar__mobile-link--active' : ''}`}
            onClick={closeMenu}
          >
            {label}
          </a>
        ))}
        <div className="navbar__mobile-actions">
          <a href="/resume.html" className="btn btn--outline btn--sm" target="_blank" rel="noreferrer">Resume</a>
          <a href="#contact" className="btn btn--primary btn--sm" onClick={closeMenu}>Hire Me</a>
        </div>
      </div>
    </nav>
  )
}
