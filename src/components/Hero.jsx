import { useEffect, useState } from 'react'
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi'
import { handleTiltMove, handleTiltLeave } from '../utils/tilt'
import arslanPic from '../assets/arslan-pic.jpeg'

const WELCOME_MESSAGES = [
  'Welcome to my portfolio 👋',
  "Let's build your next app",
  'Flutter Developer at work',
  'From idea to App Store 🚀',
]

function useTypewriter(messages, typingSpeed = 65, deletingSpeed = 35, pause = 1600) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = messages[index % messages.length]
    let timeout

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text === '') {
      setDeleting(false)
      setIndex(i => i + 1)
    } else {
      timeout = setTimeout(() => {
        setText(t => (deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1)))
      }, deleting ? deletingSpeed : typingSpeed)
    }

    return () => clearTimeout(timeout)
  }, [text, deleting, index, messages, typingSpeed, deletingSpeed, pause])

  return text
}

export default function Hero() {
  const typedText = useTypewriter(WELCOME_MESSAGES)

  return (
    <section id="home" className="hero">
      <div className="container hero__inner">

        <div className="hero__profile-row">
          {/* Left — Intro */}
          <div className="hero__content">
            <div className="hero__badge">
              <span className="badge__dot" />
              Available for new opportunities
            </div>

            <h1 className="hero__heading">
              Hi, I'm{' '}<span className="hero__name">M Arslan</span><br />
              Flutter &amp;{' '}
              <span className="hero__accent">Mobile App</span><br />
              <span className="hero__accent">Developer</span>
            </h1>

            <p className="hero__sub">
              I build high-performance iOS &amp; Android apps using Flutter —
              from polished UIs to Firebase backends, real-time features, and
              payment integrations.
            </p>

            <div className="hero__cta">
              <a href="#projects" className="btn btn--primary btn--lg">View Projects →</a>
              <a href="#contact" className="btn btn--ghost btn--lg">
                <FiMail size={15} /> Contact Me
              </a>
              <a
                href="https://github.com/MArslan47"
                target="_blank"
                rel="noreferrer"
                className="btn btn--icon"
                aria-label="GitHub"
              >
                <FiGithub size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-arslan-4b9499317"
                target="_blank"
                rel="noreferrer"
                className="btn btn--icon"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={18} />
              </a>
            </div>
          </div>

          {/* Right — Photo */}
          <div className="hero__avatar-float">
            <div
              className="hero__avatar-ring tilt-card"
              onMouseMove={handleTiltMove}
              onMouseLeave={handleTiltLeave}
            >
              <img src={arslanPic} alt="M Arslan" className="hero__avatar" />
            </div>
          </div>
        </div>

        {/* Welcome showcase */}
        <div className="hero__code-wrap">
          <div
            className="welcome-card tilt-card"
            onMouseMove={handleTiltMove}
            onMouseLeave={handleTiltLeave}
          >
            <span className="welcome-card__glow" />
            <span className="welcome-card__glow welcome-card__glow--2" />

            <div className="welcome-card__badge">
              <span className="welcome-card__wave">👋</span>
              Hey, glad you're here
            </div>

            <h3 className="welcome-card__typed">
              {typedText}
              <span className="welcome-card__cursor">|</span>
            </h3>

            <p className="welcome-card__caption">
              Building smooth, production-ready Flutter apps.
            </p>

            <div className="welcome-card__chips">
              <span className="welcome-card__chip">Flutter</span>
              <span className="welcome-card__chip">Firebase</span>
              <span className="welcome-card__chip">Dart</span>
              <span className="welcome-card__chip">GetX</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
