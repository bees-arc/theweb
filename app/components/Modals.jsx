'use client';

import { useState } from 'react';
import { X, CheckCircle2, ArrowRight, Award, Globe, Sparkles } from 'lucide-react';

export default function Modals({
  contactOpen,
  onCloseContact,
  founderOpen,
  onCloseFounder,
  selectedCaseStudy,
  onCloseCaseStudy,
  selectedInsight,
  onCloseInsight,
}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Digital Products',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  return (
    <>
      {/* 1. Project Kickoff Contact Modal */}
      {contactOpen && (
        <div className="modal-backdrop" onClick={onCloseContact}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={onCloseContact} aria-label="Close modal">
              <X size={18} />
            </button>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '30px 10px' }}>
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'var(--brand-gradient)',
                    color: '#050811',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                  }}
                >
                  <CheckCircle2 size={32} />
                </div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff', marginBottom: '10px' }}>
                  Let's Build It Together!
                </h3>
                <p style={{ fontSize: '0.98rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '28px' }}>
                  Thank you, <strong>{formData.name}</strong>. Your project inquiry has been received. We'll be in touch within 24 hours to schedule an initial discovery call.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onCloseContact();
                  }}
                  className="btn btn-primary"
                  style={{ padding: '10px 24px' }}
                >
                  Close
                </button>
              </div>
            ) : (
              <div>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '4px 12px',
                    borderRadius: 'var(--radius-full)',
                    background: 'rgba(0, 245, 212, 0.1)',
                    border: '1px solid rgba(0, 245, 212, 0.3)',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: 'var(--cyan-bright)',
                    textTransform: 'uppercase',
                    marginBottom: '16px',
                  }}
                >
                  <Sparkles size={12} />
                  <span>Start A Project</span>
                </div>

                <h3 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#fff', marginBottom: '8px', letterSpacing: '-0.02em' }}>
                  Have something in mind? <span className="text-gradient">Let's build it.</span>
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '24px' }}>
                  Tell us about your idea, problem, or project scope. We'll help clarify the direction and find the right way forward.
                </p>

                <form onSubmit={handleContactSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '6px' }}>
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        borderRadius: 'var(--radius-sm)',
                        color: '#fff',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '6px' }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="your.email@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        borderRadius: 'var(--radius-sm)',
                        color: '#fff',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '6px' }}>
                      Project Type
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        background: '#111b33',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        borderRadius: 'var(--radius-sm)',
                        color: '#fff',
                        outline: 'none',
                      }}
                    >
                      <option value="Digital Products">Digital Products (Web App / SaaS)</option>
                      <option value="Websites">Websites (Next.js / Headless / Brand)</option>
                      <option value="Brand & Experience">Brand & Experience (Design System / UX)</option>
                      <option value="AI & Automation">AI & Workflow Automation</option>
                      <option value="Other">Other / Rough Concept</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '6px' }}>
                      Project Description
                    </label>
                    <textarea
                      rows={3}
                      placeholder="What is the problem? Who is it for? What should it achieve?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        borderRadius: 'var(--radius-sm)',
                        color: '#fff',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-anim-arrow"
                    style={{ width: '100%', padding: '14px', marginTop: '6px' }}
                  >
                    <span>Send Project Inquiry</span>
                    <ArrowRight size={16} />
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 2. Full Founder Story Modal */}
      {founderOpen && (
        <div className="modal-backdrop" onClick={onCloseFounder}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '780px' }}>
            <button className="modal-close" onClick={onCloseFounder} aria-label="Close modal">
              <X size={18} />
            </button>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '4px 12px',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(0, 245, 212, 0.1)',
                border: '1px solid rgba(0, 245, 212, 0.3)',
                fontSize: '0.75rem',
                fontWeight: 700,
                color: 'var(--cyan-bright)',
                textTransform: 'uppercase',
                marginBottom: '16px',
              }}
            >
              <Award size={13} />
              <span>Full Narrative</span>
            </div>

            <h3 style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>
              The Founder's Journey: Technology Should Be Useful
            </h3>
            <div style={{ fontSize: '0.9rem', color: 'var(--cyan-electric)', fontWeight: 600, marginBottom: '24px' }}>
              From Student Experiments to 90+ International Deployments
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              <p>
                Theweb didn't begin with a corporate business plan. It grew from years of exploring design, technology and the possibilities that come from bringing the two together.
              </p>
              <p>
                <strong>2019 — Starting to explore:</strong> The journey began through university and community projects, experimenting with technology, design and digital media. From building small projects to getting involved in hackathons, workshops and creative communities, each experience opened up something new to explore.
              </p>
              <p>
                <strong>2021–2022 — Building with purpose:</strong> UX, product design and technology became a bigger part of the journey. Projects such as Habarala brought together design and technology to address real-world problems, eventually leading to the Microsoft Imagine Cup, where the project became a Southeast Asia Region Champion and World Finalist. It was a turning point: technology became less about what could be built and more about what could be solved.
              </p>
              <p>
                <strong>2022 — The first step beyond Sri Lanka:</strong> Another important chapter began with an internship under Babette. It was the first international work experience and the first opportunity to work closely with someone from another country, on real projects for international clients. What started as an internship grew into a long-term professional relationship. Babette became an important part of the journey, introducing new opportunities, supporting new ideas and helping open the door to a much bigger world of international work. And there was one small detail that would eventually become something much bigger: The name “Theweb” came from Babette. At the time, it was simply a name for an idea that was still taking shape.
              </p>
              <p>
                <strong>2022–2023 — Looking beyond Sri Lanka:</strong> That first international opportunity led to more. The work expanded into UX and digital design for Norwegian businesses, working across different industries, teams and projects. More than 90 projects brought new perspectives on design, collaboration and problem-solving, while showing what was possible from Sri Lanka while working with people around the world.
              </p>
              <p>
                <strong>2023 — Theweb Agency:</strong> After years of projects, experiments and learning, those experiences came together under one name: Theweb Agency was established. What started as an individual journey became a platform for working with businesses, building digital products and turning ideas into something real. The name had existed before the company. The experience came before the business. The story came first. The company grew from it.
              </p>
              <p style={{ color: '#fff', fontWeight: 600 }}>
                Today: The journey continues through websites, digital products, UX, technology, AI and everything in between. The tools continue to change. The projects continue to evolve. The people and places along the way continue to shape what comes next. But the original idea remains the same: Technology should be useful.
              </p>
            </div>

            <div style={{ marginTop: '30px', paddingTop: '20px', borderTop: '1px solid rgba(255, 255, 255, 0.08)', textAlign: 'right' }}>
              <button onClick={onCloseFounder} className="btn btn-secondary">
                Close Story
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 3. Case Study Details Modal */}
      {selectedCaseStudy && (
        <div className="modal-backdrop" onClick={onCloseCaseStudy}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '780px' }}>
            <button className="modal-close" onClick={onCloseCaseStudy} aria-label="Close modal">
              <X size={18} />
            </button>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '4px 12px',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(0, 245, 212, 0.1)',
                border: '1px solid rgba(0, 245, 212, 0.3)',
                fontSize: '0.75rem',
                fontWeight: 700,
                color: 'var(--cyan-bright)',
                textTransform: 'uppercase',
                marginBottom: '16px',
              }}
            >
              <span>{selectedCaseStudy.tag}</span>
            </div>

            <h3 style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>
              {selectedCaseStudy.title}
            </h3>
            <div style={{ fontSize: '0.9rem', color: 'var(--cyan-electric)', marginBottom: '24px' }}>
              {selectedCaseStudy.client} · {selectedCaseStudy.period}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: '6px' }}>The Challenge</h4>
                <p>{selectedCaseStudy.problem}</p>
              </div>

              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: '6px' }}>The Solution & Approach</h4>
                <p>{selectedCaseStudy.solution}</p>
              </div>

              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>Key Outcomes & Impact</h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {selectedCaseStudy.results.map((res, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-primary)' }}>
                      <CheckCircle2 size={16} color="var(--cyan-bright)" />
                      <span>{res}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>Technologies Deployed</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {selectedCaseStudy.techStack.map((tech, i) => (
                    <span
                      key={i}
                      style={{
                        padding: '4px 12px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: '0.82rem',
                        color: 'var(--cyan-electric)',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ marginTop: '30px', paddingTop: '20px', borderTop: '1px solid rgba(255, 255, 255, 0.08)', textAlign: 'right' }}>
              <button onClick={onCloseCaseStudy} className="btn btn-secondary">
                Close Case Study
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 4. Insight Reader Modal */}
      {selectedInsight && (
        <div className="modal-backdrop" onClick={onCloseInsight}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '780px' }}>
            <button className="modal-close" onClick={onCloseInsight} aria-label="Close modal">
              <X size={18} />
            </button>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '4px 12px',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(0, 245, 212, 0.1)',
                border: '1px solid rgba(0, 245, 212, 0.3)',
                fontSize: '0.75rem',
                fontWeight: 700,
                color: 'var(--cyan-bright)',
                textTransform: 'uppercase',
                marginBottom: '16px',
              }}
            >
              <span>{selectedInsight.tag}</span>
            </div>

            <h3 style={{ fontSize: '1.9rem', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>
              {selectedInsight.title}
            </h3>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '24px' }}>
              {selectedInsight.date} · {selectedInsight.readTime}
            </div>

            <div style={{ whiteSpace: 'pre-line', fontSize: '0.98rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              {selectedInsight.content}
            </div>

            <div style={{ marginTop: '30px', paddingTop: '20px', borderTop: '1px solid rgba(255, 255, 255, 0.08)', textAlign: 'right' }}>
              <button onClick={onCloseInsight} className="btn btn-secondary">
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
