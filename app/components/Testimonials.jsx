'use client';

import { Sparkles, Quote, Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Babette',
      title: 'International Mentor & Long-term Partner',
      location: 'International Client Network',
      quote:
        'What started as an internship grew into a long-term professional relationship. The curiosity, discipline, and commitment to turning raw ideas into tangible products was clear from the start. That is why I suggested the name “Theweb”—an idea that has now grown into a remarkable international agency.',
      highlight: '“The name ‘Theweb’ came from Babette.”',
    },
    {
      name: 'Norwegian Enterprise Collaborator',
      title: 'Digital Systems Director',
      location: 'Oslo, Norway',
      quote:
        'Across more than 90 projects, Theweb has consistently demonstrated that high-level digital craft knows no borders. Whether designing intuitive UX systems or shipping fast web products, their focus is always on what is actually useful for the end user.',
      highlight: '“High-level digital craft across 90+ projects.”',
    },
    {
      name: 'Imagine Cup SEA Panel',
      title: 'Microsoft Imagine Cup Jury & Evaluation',
      location: 'Southeast Asia Region',
      quote:
        'Habarala proved that technology becomes truly transformative when it moves beyond what can merely be built to what can genuinely be solved. The combination of user-centered design, IoT telemetry, and practical empathy made it a standout World Finalist.',
      highlight: '“Technology became less about what could be built and more about what could be solved.”',
    },
  ];

  return (
    <section id="testimonials" className="section" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Endorsements & Trust</span>
          </div>
          <h2 className="section-title">
            TESTIMONIALS
          </h2>
          <p className="section-description">
            What partners, mentors, and international collaborators say about building with Theweb.
          </p>
        </div>

        {/* Testimonials 3 Columns Grid */}
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
              className="glass-card"
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
                    <Star key={i} size={15} fill="var(--cyan-bright)" color="var(--cyan-bright)" />
                  ))}
                </div>

                <div
                  style={{
                    fontSize: '0.86rem',
                    fontWeight: 700,
                    color: 'var(--cyan-bright)',
                    marginBottom: '14px',
                  }}
                >
                  {item.highlight}
                </div>

                <p
                  style={{
                    fontSize: '0.94rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.65,
                    fontStyle: 'italic',
                    marginBottom: '24px',
                  }}
                >
                  "{item.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div
                style={{
                  paddingTop: '18px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, rgba(0, 245, 212, 0.2) 0%, rgba(0, 132, 255, 0.2) 100%)',
                    border: '1px solid var(--border-accent)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    color: 'var(--text-white)',
                    fontSize: '0.9rem',
                  }}
                >
                  {item.name.substring(0, 2)}
                </div>
                <div>
                  <h4 style={{ fontSize: '0.96rem', fontWeight: 700, color: 'var(--text-white)' }}>
                    {item.name}
                  </h4>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
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
