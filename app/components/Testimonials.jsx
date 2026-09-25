'use client';

import { Sparkles, Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Babette',
      title: 'International Mentor & Long-term Partner',
      handle: '@babette_intl',
      location: 'International Client Network',
      headline: 'The name “Theweb” came from Babette.',
      quote:
        'What started as an internship grew into a long-term professional relationship. The curiosity, discipline, and commitment to turning raw ideas into tangible products was clear from the start. That is why I suggested the name “Theweb”—an idea that has now grown into a remarkable international agency.',
    },
    {
      name: 'Norwegian Enterprise Collaborator',
      title: 'Digital Systems Director',
      handle: '@norway_enterprise',
      location: 'Oslo, Norway',
      headline: 'High-level digital craft across 90+ projects.',
      quote:
        'Across more than 90 projects, Theweb has consistently demonstrated that high-level digital craft knows no borders. Whether designing intuitive UX systems or shipping fast web products, their focus is always on what is actually useful for the end user.',
    },
    {
      name: 'Imagine Cup SEA Panel',
      title: 'Microsoft Imagine Cup Jury & Evaluation',
      handle: '@imaginecup_sea',
      location: 'Southeast Asia Region',
      headline: 'Technology became less about what could be built, and more about what could be solved.',
      quote:
        'Habarala proved that technology becomes truly transformative when it moves beyond what can merely be built to what can genuinely be solved. The combination of user-centered design, IoT telemetry, and practical empathy made it a standout World Finalist.',
    },
  ];

  return (
    <section id="testimonials" className="section" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="n8n-badge">
            <Sparkles size={13} />
            <span>Endorsements & Trust</span>
          </div>
          <h2 className="section-title">
            TESTIMONIALS
          </h2>
          <p className="section-description">
            What partners, mentors, and international collaborators say about building with Theweb.
          </p>
        </div>

        {/* Testimonials 3 Columns Grid matching n8n feedback-slide */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
          }}
        >
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="card-n8n-base"
              style={{
                padding: '36px 30px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                {/* 5 Stars */}
                <div style={{ display: 'flex', gap: '4px', marginBottom: '18px' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} fill="var(--brand-cyan-neon)" color="var(--brand-cyan-neon)" />
                  ))}
                </div>

                <h4
                  style={{
                    fontSize: '1.1rem',
                    fontWeight: 800,
                    color: '#FFFFFF',
                    lineHeight: 1.4,
                    marginBottom: '14px',
                  }}
                >
                  "{item.headline}"
                </h4>

                <p
                  style={{
                    fontSize: '0.94rem',
                    color: 'var(--color-heading-secondary)',
                    lineHeight: 1.65,
                    marginBottom: '28px',
                  }}
                >
                  {item.quote}
                </p>
              </div>

              {/* Author Info matching n8n author component */}
              <div
                style={{
                  paddingTop: '20px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                }}
              >
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, rgba(0, 245, 212, 0.25) 0%, rgba(0, 132, 255, 0.25) 100%)',
                    border: '1.5px solid var(--brand-cyan-neon)',
                    boxShadow: '0 0 15px rgba(0, 210, 255, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                    color: '#FFFFFF',
                    fontSize: '0.95rem',
                  }}
                >
                  {item.name.substring(0, 2)}
                </div>
                <div>
                  <h5 style={{ fontSize: '0.96rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '2px' }}>
                    {item.name}
                  </h5>
                  <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>
                    {item.title} · {item.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
