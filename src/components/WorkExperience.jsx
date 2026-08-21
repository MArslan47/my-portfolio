import React from 'react'

export default function WorkExperience() {
  return (
    <section className="work-experience" id="work">
      <h2 className="section-title">Work Experience</h2>
      <div className="work-grid">
        <div className="work-image">
          <img src="/assets/work-experience.png" alt="Work experience snapshot (add your image at /src/assets/work-experience.png)" />
        </div>
        <div className="work-list">
          <h3>Flutter Developer — SLYK Design Studio</h3>
          <p>Dec 2024 - Mar 2026 — Led projects across e-commerce, fintech and children-focused applications. Promoted from Intermediate to Senior and Team Lead.</p>

          <h3>Flutter Developer — Alright Tech Pvt Ltd</h3>
          <p>Feb 2024 - Nov 2024 — Started as intern, progressed to Junior Flutter Developer, worked on UI design, state management and core app architecture.</p>

          <h3>Intern — State Life Insurance Corporation of Pakistan</h3>
          <p>Jul 2023 – Sep 2023 — Completed a 3-month internship focused on documentation, MS Word and Excel, and administrative skills.</p>
        </div>
      </div>
    </section>
  )
}
