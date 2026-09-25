'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import CtaBanner from '../components/CtaBanner';
import { Sparkles, ArrowRight, MessageSquare, Mail, MapPin, Globe, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  return (
    <main style={{ minHeight: '100vh', position: 'relative' }}>
      <Header />

      {/* Hero Header for Contact */}
      <section
        style={{
          paddingTop: '160px',
          paddingBottom: '40px',
          position: 'relative',
          textAlign: 'center',
        }}
      >
        <div className="container" style={{ maxWidth: '850px' }}>
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Project Kickoff</span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(2.6rem, 5vw, 4rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              color: 'var(--text-white)',
              marginBottom: '20px',
              letterSpacing: '-0.03em',
            }}
          >
            Have Something in Mind? <br />
            <span className="text-gradient">Let's Build It.</span>
          </h1>

          <p
            style={{
              fontSize: '1.2rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              marginBottom: '24px',
            }}
          >
            Some projects start with a clear idea. Some start with a problem. Some start with a rough sketch,
            a conversation, or simply a question: <strong style={{ color: '#fff' }}>“Could this work?”</strong>
            <br />The approach stays flexible. Let's talk.
          </p>
        </div>
      </section>

      {/* Main Interactive Contact Section */}
      <CtaBanner />

      {/* Direct Communication Channels */}
      <section className="section" style={{ paddingTop: '20px', paddingBottom: '80px' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
            }}
          >
            <div className="glass-card" style={{ padding: '32px 28px' }}>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'rgba(0, 245, 212, 0.12)',
                  color: 'var(--cyan-bright)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px',
                }}
              >
                <Mail size={22} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>
                Direct Inquiries
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '16px' }}>
                Reach out directly for new engagements, RFPs, or strategic partnerships.
              </p>
              <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--cyan-bright)' }}>
                hello@theweb.agency
              </div>
            </div>

            <div className="glass-card" style={{ padding: '32px 28px' }}>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'rgba(0, 210, 255, 0.12)',
                  color: 'var(--cyan-electric)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px',
                }}
              >
                <Globe size={22} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>
                Global Collaboration
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '16px' }}>
                Operating seamlessly across time zones with European and international clients.
              </p>
              <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--cyan-electric)' }}>
                Sri Lanka (UTC+5:30) & Norway (UTC+1)
              </div>
            </div>

            <div className="glass-card" style={{ padding: '32px 28px' }}>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'rgba(0, 132, 255, 0.12)',
                  color: 'var(--azure-vibrant)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px',
                }}
              >
                <CheckCircle2 size={22} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>
                Turnaround Time
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '16px' }}>
                Every message is reviewed by our creative technologists. Expect a reply within 24 hours.
              </p>
              <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-white)' }}>
                24-Hour Response Guarantee
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
