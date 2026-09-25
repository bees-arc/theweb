'use client';

import { useState } from 'react';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function CtaBanner() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Digital Products',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* n8n-Style Deep Cyan Ambient Glow Layer */}
      <div
        style={{
          position: 'absolute',
          bottom: '0',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '900px',
          height: '450px',
          background: 'radial-gradient(circle, rgba(0, 210, 255, 0.25) 0%, rgba(0, 245, 212, 0.12) 40%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
          zIndex: -1,
        }}
      />

      <div className="container">
        {/* n8n.io Preset Footer CTA Box */}
        <div
          className="card-n8n-spark"
          style={{
            padding: '56px 48px',
            borderRadius: 'var(--radius-2xl)',
          }}
        >
          <div className="cta-main-grid">
            {/* Left Column: Heading & Ethos */}
            <div style={{ gridColumn: 'span 6' }} className="cta-left-col">
              <div className="n8n-badge" style={{ marginBottom: '20px' }}>
                <Sparkles size={13} />
                <span>START YOUR PROJECT</span>
              </div>

              <h2
                style={{
                  fontSize: 'clamp(2.4rem, 4.2vw, 3.4rem)',
                  fontWeight: 800,
                  lineHeight: 1.15,
                  letterSpacing: '-0.03em',
                  color: '#FFFFFF',
                  marginBottom: '20px',
                }}
              >
                Have something in mind? <br />
                <span className="text-gradient">Let's build it.</span>
              </h2>

              <p
                style={{
                  fontSize: '1.05rem',
                  color: 'var(--color-heading-secondary)',
                  lineHeight: 1.65,
                  marginBottom: '32px',
                }}
              >
                Whether you have a clear idea, a specific problem, a rough sketch, or simply a question:
                <strong style={{ color: '#fff' }}> “Could this work?”</strong> — our approach stays flexible.
                Let's find the right way forward together.
              </p>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: '#FFFFFF' }}>
                  <CheckCircle2 size={16} color="var(--brand-cyan-neon)" />
                  <span>Direct collaboration with senior creative technologists</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: '#FFFFFF' }}>
                  <CheckCircle2 size={16} color="var(--brand-cyan-neon)" />
                  <span>No rigid dogma: WordPress, React, Next.js or custom AI</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: '#FFFFFF' }}>
                  <CheckCircle2 size={16} color="var(--brand-cyan-neon)" />
                  <span>From Sri Lanka to Norway & worldwide</span>
                </div>
              </div>
            </div>

            {/* Right Column: Direct Interactive Inquiry Form */}
            <div style={{ gridColumn: 'span 6' }} className="cta-right-col">
              {submitted ? (
                <div
                  style={{
                    background: 'rgba(0, 245, 212, 0.08)',
                    border: '1px solid rgba(0, 245, 212, 0.4)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '40px 32px',
                    textAlign: 'center',
                  }}
                >
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '50%',
                      background: 'var(--n8n-btn-primary)',
                      color: '#050811',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 20px',
                    }}
                  >
                    <CheckCircle2 size={30} />
                  </div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>
                    Message Received!
                  </h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--color-heading-secondary)', lineHeight: 1.6, marginBottom: '24px' }}>
                    Thank you, {formData.name}. We will review your project details and get back to you within 24 hours to schedule an initial discovery conversation.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn btn-secondary"
                    style={{ fontSize: '0.88rem', padding: '8px 20px', borderRadius: 'var(--radius-full)' }}
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  style={{
                    background: 'rgba(10, 17, 33, 0.85)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: 'var(--radius-xl)',
                    padding: '32px 28px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '18px',
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1)',
                  }}
                >
                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        color: 'var(--color-heading-secondary)',
                        marginBottom: '8px',
                      }}
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        borderRadius: 'var(--radius-sm)',
                        color: '#fff',
                        fontSize: '0.92rem',
                        outline: 'none',
                        transition: 'border-color 0.2s',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--brand-cyan-neon)')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.12)')}
                    />
                  </div>

                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        color: 'var(--color-heading-secondary)',
                        marginBottom: '8px',
                      }}
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        borderRadius: 'var(--radius-sm)',
                        color: '#fff',
                        fontSize: '0.92rem',
                        outline: 'none',
                        transition: 'border-color 0.2s',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--brand-cyan-neon)')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.12)')}
                    />
                  </div>

                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        color: 'var(--color-heading-secondary)',
                        marginBottom: '8px',
                      }}
                    >
                      Project Type
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        background: '#0e1628',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        borderRadius: 'var(--radius-sm)',
                        color: '#fff',
                        fontSize: '0.92rem',
                        outline: 'none',
                      }}
                    >
                      <option value="Digital Products">Digital Products (Web App / SaaS / Portal)</option>
                      <option value="Websites">Websites (Next.js / WordPress / Brand)</option>
                      <option value="Brand & Experience">Brand & Experience (UI/UX / Design System)</option>
                      <option value="AI & Automation">AI & Workflow Automation</option>
                      <option value="Other">Other / Rough Idea</option>
                    </select>
                  </div>

                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        color: 'var(--color-heading-secondary)',
                        marginBottom: '8px',
                      }}
                    >
                      Tell us about your project
                    </label>
                    <textarea
                      rows={3}
                      placeholder="What is the problem? Who is it for? What should it achieve?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        borderRadius: 'var(--radius-sm)',
                        color: '#fff',
                        fontSize: '0.92rem',
                        outline: 'none',
                        resize: 'vertical',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--brand-cyan-neon)')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.12)')}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-anim-arrow"
                    style={{
                      width: '100%',
                      padding: '14px',
                      fontSize: '0.96rem',
                      borderRadius: 'var(--radius-full)',
                      marginTop: '4px',
                    }}
                  >
                    <span className="btn-label">Let's build it</span>
                    <span className="btn-icon">
                      <ArrowRight size={16} />
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
