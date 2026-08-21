import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero__inner">

        {/* Left — Text */}
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

        {/* Right — Code window */}
        <div className="hero__code-wrap">
          <div className="code-window">
            <div className="code-bar">
              <span className="code-dot code-dot--red" />
              <span className="code-dot code-dot--yellow" />
              <span className="code-dot code-dot--green" />
              <span className="code-filename">~/portfolio/profile.dart</span>
            </div>
            <div className="code-body">
              <span className="code-line">
                <span className="c-keyword">final</span>{' '}
                <span className="c-variable">developer</span>{' '}
                <span className="c-op">=</span>{' '}
                <span className="c-type">Developer</span>
                <span className="c-punc">{'({'}</span>
              </span>
              <span className="code-line code-indent">
                <span className="c-prop">name</span>
                <span className="c-punc">: </span>
                <span className="c-string">"M Arslan"</span>
                <span className="c-punc">,</span>
              </span>
              <span className="code-line code-indent">
                <span className="c-prop">role</span>
                <span className="c-punc">: </span>
                <span className="c-string">"Flutter Developer"</span>
                <span className="c-punc">,</span>
              </span>
              <span className="code-line code-indent">
                <span className="c-prop">stack</span>
                <span className="c-punc">: [</span>
                <span className="c-string">"Flutter"</span>
                <span className="c-punc">, </span>
                <span className="c-string">"Firebase"</span>
                <span className="c-punc">, </span>
                <span className="c-string">"Dart"</span>
                <span className="c-punc">],</span>
              </span>
              <span className="code-line code-indent">
                <span className="c-prop">years</span>
                <span className="c-punc">: </span>
                <span className="c-number">2.5</span>
                <span className="c-punc">,</span>
              </span>
              <span className="code-line code-indent">
                <span className="c-prop">focus</span>
                <span className="c-punc">: </span>
                <span className="c-string">"Mobile Apps"</span>
                <span className="c-punc">,</span>
              </span>
              <span className="code-line">
                <span className="c-punc">{'})'}</span>
                <span className="c-punc">;</span>
              </span>
              <span className="code-line">&nbsp;</span>
              <span className="code-line">
                <span className="c-keyword">await</span>{' '}
                <span className="c-variable">developer</span>
                <span className="c-punc">.</span>
                <span className="c-function">launch</span>
                <span className="c-punc">(</span>
                <span className="c-string">"your next big idea"</span>
                <span className="c-punc">);</span>
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
