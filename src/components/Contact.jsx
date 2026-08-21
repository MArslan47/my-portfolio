import { useState } from 'react'
import { FiMail, FiGithub, FiLinkedin, FiMapPin, FiPhone, FiSend } from 'react-icons/fi'
import { handleTiltMove, handleTiltLeave } from '../utils/tilt'

const CONTACT_DETAILS = [
  { icon: <FiMail />,     label: 'EMAIL',    value: 'marslanch7@gmail.com' },
  { icon: <FiGithub />,   label: 'GITHUB',   value: '@MArslan47' },
  { icon: <FiLinkedin />, label: 'LINKEDIN', value: 'muhammad-arslan-4b9499317' },
  { icon: <FiMapPin />,   label: 'LOCATION', value: 'Faizabad, Islamabad, Pakistan' },
  { icon: <FiPhone />,    label: 'PHONE',    value: '+92 333-5534747' },
]

export default function Contact() {
  const [form, setForm]       = useState({ name: '', email: '', message: '' })
  const [sent, setSent]       = useState(false)
  const [loading, setLoading] = useState(false)

  const onChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const onSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 900))
    setSent(true)
    setLoading(false)
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact__header">
          <div className="section-badge">Get In Touch</div>
          <h2 className="section-heading">Let's build something great.</h2>
          <p className="section-sub">
            Have a project, role, or idea in mind? Drop a message — I usually reply within 24 hours.
          </p>
        </div>

        <div className="contact__grid">
          {/* Left — contact details */}
          <div>
            <div
              className="contact-info tilt-card"
              onMouseMove={handleTiltMove}
              onMouseLeave={handleTiltLeave}
            >
              <h3>Contact details</h3>
              {CONTACT_DETAILS.map(({ icon, label, value }) => (
                <div key={label} className="contact-detail">
                  <div className="contact-detail__icon">{icon}</div>
                  <div>
                    <div className="contact-detail__label">{label}</div>
                    <div className="contact-detail__value">{value}</div>
                  </div>
                </div>
              ))}
              <a
                href="https://wa.me/923335534747"
                target="_blank"
                rel="noreferrer"
                className="whatsapp-btn"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>

            <div
              className="contact-prefs tilt-card"
              onMouseMove={handleTiltMove}
              onMouseLeave={handleTiltLeave}
            >
              <h4>Working preferences</h4>
              <ul>
                <li>Open to remote, hybrid, and contract roles</li>
                <li>Available for freelance &amp; consulting</li>
                <li>Comfortable across time zones</li>
              </ul>
            </div>
          </div>

          {/* Right — form */}
          <div
            className="contact-form-card tilt-card"
            onMouseMove={handleTiltMove}
            onMouseLeave={handleTiltLeave}
          >
            {sent ? (
              <div className="form-success">
                ✓ Message sent! I'll get back to you within 24 hours.
              </div>
            ) : (
              <form onSubmit={onSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">
                      Your Name <span>*</span>
                    </label>
                    <input
                      className="form-input"
                      name="name"
                      placeholder="Jane Doe"
                      value={form.name}
                      onChange={onChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">
                      Email Address <span>*</span>
                    </label>
                    <input
                      className="form-input"
                      name="email"
                      type="email"
                      placeholder="jane@company.com"
                      value={form.email}
                      onChange={onChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">
                    Message <span>*</span>
                  </label>
                  <textarea
                    className="form-textarea"
                    name="message"
                    placeholder="Tell me a bit about your project or role..."
                    value={form.message}
                    onChange={onChange}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn--primary btn--lg"
                  disabled={loading}
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <FiSend size={15} />
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
