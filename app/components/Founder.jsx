'use client';

import { Sparkles, ArrowRight, Quote, Award, Globe, Code2 } from 'lucide-react';

export default function Founder({ onOpenFounderModal, onOpenContact }) {
  return (
    <section id="founder" className="section" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Leadership & Vision</span>
          </div>
          <h2 className="section-title">
            The Founder's Story
          </h2>
          <p className="section-description">
            “Technology should be useful. Not built just because we can, but because it genuinely solves something for people.”
          </p>
        </div>

        {/* Founder Card */}
        <div
          className="glass-card"
          style={{
            maxWidth: '980px',
            margin: '0 auto',
            padding: '48px 40px',
            background: 'linear-gradient(135deg, rgba(16, 27, 50, 0.85) 0%, rgba(8, 14, 28, 0.95) 100%)',
            border: '1px solid rgba(0, 210, 255, 0.3)',
            borderRadius: 'var(--radius-xl)',
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '36px',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Portrait & Credential Badges */}
          <div
            style={{
              gridColumn: 'span 4',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
            }}
            className="founder-avatar-col"
          >
            {/* Monogram Glow Avatar */}
            <div
              style={{
                width: '140px',
                height: '140px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(0, 245, 212, 0.2) 0%, rgba(0, 132, 255, 0.3) 100%)',
                border: '3px solid var(--cyan-bright)',
                boxShadow: '0 0 35px rgba(0, 210, 255, 0.35)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
                position: 'relative',
              }}
            >
              <div
                style={{
                  fontSize: '2.5rem',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  letterSpacing: '-0.02em',
                }}
              >
                TW
              </div>
            </div>

            <h3
              style={{
                fontSize: '1.45rem',
                fontWeight: 800,
                color: 'var(--text-white)',
                marginBottom: '4px',
              }}
            >
              Founder & Technologist
            </h3>
            <div
              style={{
                fontSize: '0.85rem',
                color: 'var(--cyan-bright)',
                fontWeight: 600,
                marginBottom: '16px',
              }}
            >
              Theweb Agency
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                width: '100%',
              }}
            >
              <div
                style={{
                  fontSize: '0.78rem',
                  color: 'var(--text-secondary)',
                  background: 'rgba(255, 255, 255, 0.04)',
                  padding: '6px 12px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                }}
              >
                🏆 Imagine Cup SEA Champion
              </div>
              <div
                style={{
                  fontSize: '0.78rem',
                  color: 'var(--text-secondary)',
                  background: 'rgba(255, 255, 255, 0.04)',
                  padding: '6px 12px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                }}
              >
                🇳🇴 90+ Norwegian Deliveries
              </div>
            </div>
          </div>

          {/* Right Column: Bio Preview + Read More CTA */}
          <div
            style={{
              gridColumn: 'span 8',
            }}
            className="founder-content-col"
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--cyan-bright)',
                marginBottom: '16px',
              }}
            >
              <Quote size={24} />
              <span style={{ fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Guiding Mindset
              </span>
            </div>

            <p
              style={{
                fontSize: '1.25rem',
                fontWeight: 700,
                color: 'var(--text-white)',
                lineHeight: 1.45,
                marginBottom: '18px',
              }}
            >
              “It was a turning point: technology became less about what could be built, and more about what could be solved.”
            </p>

            <p
              style={{
                fontSize: '0.98rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: '20px',
              }}
            >
              Theweb didn't begin with a corporate business plan. It grew organically from university experiments,
              hackathons, and international collaborations. Through an internship under Babette—who gave Theweb its name—and
              collaborating on over 90 digital design projects for Norwegian businesses, the vision crystallized into a global agency.
            </p>

            <p
              style={{
                fontSize: '0.98rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: '32px',
              }}
            >
              Today, that journey continues through Next.js web applications, digital products, UX, and AI automations.
              The tools change with every project, but the curiosity and dedication to pragmatic utility remain constant.
            </p>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                flexWrap: 'wrap',
              }}
            >
              <button
                onClick={onOpenFounderModal}
                className="btn btn-primary btn-anim-arrow"
                style={{
                  padding: '12px 24px',
                  fontSize: '0.92rem',
                  borderRadius: 'var(--radius-md)',
                }}
              >
                <span>Read Full Founder Story</span>
                <ArrowRight size={15} />
              </button>

              <button
                onClick={onOpenContact}
                className="btn btn-secondary"
                style={{
                  padding: '12px 22px',
                  fontSize: '0.92rem',
                  borderRadius: 'var(--radius-md)',
                }}
              >
                <span>Let's talk</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 860px) {
          .founder-avatar-col {
            grid-column: span 12 !important;
          }
          .founder-content-col {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </section>
  );
}
