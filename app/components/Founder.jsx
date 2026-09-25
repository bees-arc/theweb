'use client';

import Link from 'next/link';
import { Sparkles, ArrowRight, Quote } from 'lucide-react';

export default function Founder({ onOpenFounderModal }) {
  return (
    <section id="founder" className="section" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="n8n-badge">
            <Sparkles size={13} />
            <span>Leadership & Vision</span>
          </div>
          <h2 className="section-title">
            The Founder's Story
          </h2>
          <p className="section-description">
            “Technology should be useful. Not built just because we can, but because it genuinely solves something for people.”
          </p>
        </div>

        {/* Founder Card with n8n Spark Card styling */}
        <div
          className="card-n8n-spark"
          style={{
            maxWidth: '1000px',
            margin: '0 auto',
            padding: '48px 40px',
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
                background: 'linear-gradient(135deg, rgba(0, 245, 212, 0.25) 0%, rgba(0, 132, 255, 0.35) 100%)',
                border: '3px solid var(--brand-cyan-neon)',
                boxShadow: '0 0 35px rgba(0, 210, 255, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
                position: 'relative',
              }}
            >
              <div
                style={{
                  fontSize: '2.6rem',
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
                color: '#FFFFFF',
                marginBottom: '4px',
              }}
            >
              Founder & Technologist
            </h3>
            <div
              style={{
                fontSize: '0.85rem',
                color: 'var(--brand-cyan-neon)',
                fontWeight: 700,
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
                  color: '#FFFFFF',
                  background: 'rgba(255, 255, 255, 0.05)',
                  padding: '6px 12px',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                🏆 Imagine Cup SEA Champion
              </div>
              <div
                style={{
                  fontSize: '0.78rem',
                  color: '#FFFFFF',
                  background: 'rgba(255, 255, 255, 0.05)',
                  padding: '6px 12px',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
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
                color: 'var(--brand-cyan-neon)',
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
                color: '#FFFFFF',
                lineHeight: 1.45,
                marginBottom: '18px',
              }}
            >
              “It was a turning point: technology became less about what could be built, and more about what could be solved.”
            </p>

            <p
              style={{
                fontSize: '0.96rem',
                color: 'var(--color-heading-secondary)',
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
                fontSize: '0.96rem',
                color: 'var(--color-heading-secondary)',
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
                  borderRadius: 'var(--radius-full)',
                }}
              >
                <span className="btn-label">Read Full Founder Story</span>
                <span className="btn-icon">
                  <ArrowRight size={15} />
                </span>
              </button>

              <Link
                href="/contact"
                className="btn btn-secondary"
                style={{
                  padding: '12px 22px',
                  borderRadius: 'var(--radius-full)',
                }}
              >
                <span>Let's talk</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
