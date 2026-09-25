'use client';

import { Sparkles, Globe, Heart, Shield, Award, Users } from 'lucide-react';

export default function Partners() {
  const partners = [
    {
      name: 'Babette & International Network',
      role: 'International Mentor & Strategic Partner',
      tag: 'Naming & Origin of “Theweb”',
      description:
        'The partnership began as an internship and grew into a long-term international collaboration, opening doors to global client work. The very name “Theweb” originated here.',
      badge: 'Origin Partner',
    },
    {
      name: 'Microsoft Imagine Cup',
      role: 'Global Technology Competition',
      tag: 'Southeast Asia Champion & World Finalist',
      description:
        'Recognized with Habarala for turning technology into real-world problem-solving tools, validating our product design methodology on the global stage.',
      badge: 'Global Finalist',
    },
    {
      name: 'Norwegian Enterprise Network',
      role: 'Commercial & Digital Ecosystems',
      tag: '90+ Cross-Industry Projects',
      description:
        'Partnering with businesses across Norway to deliver robust websites, UX design systems, and digital transformations from Sri Lanka with Nordic precision.',
      badge: '90+ Deliveries',
    },
    {
      name: 'Creative Tech Communities',
      role: 'Hackathons, Universities & Open Source',
      tag: 'Community Roots (Since 2019)',
      description:
        'Active collaboration with student innovators, developer workshops, and tech communities where the journey of exploration originally began.',
      badge: 'Community Roots',
    },
  ];

  return (
    <section id="partners" className="section" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Collaboration & Global Trust</span>
          </div>
          <h2 className="section-title">
            PARTNERS
          </h2>
          <p className="section-description">
            Strong relationships build enduring digital products. We work with mentors, global enterprises,
            and innovation ecosystems across Sri Lanka, Norway, and beyond.
          </p>
        </div>

        {/* Partners Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}
        >
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '32px 28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '16px',
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.74rem',
                      fontWeight: 700,
                      color: 'var(--cyan-bright)',
                      background: 'rgba(0, 245, 212, 0.1)',
                      border: '1px solid rgba(0, 245, 212, 0.25)',
                      padding: '4px 10px',
                      borderRadius: 'var(--radius-full)',
                    }}
                  >
                    {partner.badge}
                  </span>
                  <Globe size={18} color="var(--text-muted)" />
                </div>

                <h3
                  style={{
                    fontSize: '1.35rem',
                    fontWeight: 800,
                    color: 'var(--text-white)',
                    marginBottom: '6px',
                  }}
                >
                  {partner.name}
                </h3>

                <div
                  style={{
                    fontSize: '0.86rem',
                    fontWeight: 600,
                    color: 'var(--cyan-electric)',
                    marginBottom: '14px',
                  }}
                >
                  {partner.tag}
                </div>

                <p
                  style={{
                    fontSize: '0.9rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                  }}
                >
                  {partner.description}
                </p>
              </div>

              <div
                style={{
                  marginTop: '20px',
                  paddingTop: '16px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                  fontSize: '0.8rem',
                  color: 'var(--text-muted)',
                }}
              >
                {partner.role}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
