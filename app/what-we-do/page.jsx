'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatWeDo from '../components/WhatWeDo';
import Technology from '../components/Technology';
import CtaBanner from '../components/CtaBanner';
import { Sparkles, ArrowRight, Laptop, Globe, Palette, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import Link from 'next/link';

export default function WhatWeDoPage() {
  return (
    <main style={{ minHeight: '100vh', position: 'relative' }}>
      <Header />

      {/* Hero Header for What We Do */}
      <section
        style={{
          paddingTop: '160px',
          paddingBottom: '60px',
          position: 'relative',
          textAlign: 'center',
        }}
      >
        <div className="container" style={{ maxWidth: '850px' }}>
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Digital Craft & Engineering</span>
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
            Capabilities Built For{' '}
            <span className="text-gradient">Real-World Utility</span>
          </h1>

          <p
            style={{
              fontSize: '1.2rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              marginBottom: '32px',
            }}
          >
            We don’t build technology for the sake of having it. Whether it is a full-stack SaaS product, a high-converting
            website, or a coherent brand design system—everything we create has a distinct reason to exist.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-primary btn-anim-arrow">
              <span>Start your project</span>
              <ArrowRight size={16} />
            </Link>
            <Link href="/how-we-work" className="btn btn-secondary">
              <span>See our 5-step process</span>
            </Link>
          </div>
        </div>
      </section>

      {/* The 3 Core Services Bento Matrix */}
      <WhatWeDo onOpenContact={() => {}} />

      {/* Deep-Dive Capabilities Breakdown */}
      <section className="section" style={{ paddingTop: '20px' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-tag">
              <Zap size={14} />
              <span>Full Spectrum Delivery</span>
            </div>
            <h2 className="section-title">
              How Each Pillar Drives Results
            </h2>
            <p className="section-description">
              Tailoring the methodology and stack to the exact problem, audience, and scale.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {/* Pillar 1 Detail */}
            <div className="glass-card" style={{ padding: '36px 30px' }}>
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'rgba(0, 245, 212, 0.12)',
                  color: 'var(--cyan-bright)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                }}
              >
                <Laptop size={24} />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff', marginBottom: '12px' }}>
                01. Digital Products
              </h3>
              <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
                We engineer scalable web applications, SaaS dashboards, and automated AI tools. From initial user story mapping to production deployment with robust telemetry and error monitoring.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.88rem', color: 'var(--text-primary)' }}>
                  <CheckCircle2 size={16} color="var(--cyan-bright)" />
                  <span>Interactive Dashboards & SaaS</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.88rem', color: 'var(--text-primary)' }}>
                  <CheckCircle2 size={16} color="var(--cyan-bright)" />
                  <span>MVP Validation & Rapid Prototyping</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.88rem', color: 'var(--text-primary)' }}>
                  <CheckCircle2 size={16} color="var(--cyan-bright)" />
                  <span>AI Agent & Workflow Integration</span>
                </li>
              </ul>
            </div>

            {/* Pillar 2 Detail */}
            <div className="glass-card" style={{ padding: '36px 30px' }}>
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'rgba(0, 210, 255, 0.12)',
                  color: 'var(--cyan-electric)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                }}
              >
                <Globe size={24} />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff', marginBottom: '12px' }}>
                02. Websites
              </h3>
              <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
                High-performance flagship websites built for speed, brand authority, and conversion. Powered by Next.js or tailored WordPress systems that give marketing teams total autonomy.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.88rem', color: 'var(--text-primary)' }}>
                  <CheckCircle2 size={16} color="var(--cyan-bright)" />
                  <span>Next.js App Router Architecture</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.88rem', color: 'var(--text-primary)' }}>
                  <CheckCircle2 size={16} color="var(--cyan-bright)" />
                  <span>Sub-second load times & Core Web Vitals</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.88rem', color: 'var(--text-primary)' }}>
                  <CheckCircle2 size={16} color="var(--cyan-bright)" />
                  <span>Headless CMS & Custom WordPress</span>
                </li>
              </ul>
            </div>

            {/* Pillar 3 Detail */}
            <div className="glass-card" style={{ padding: '36px 30px' }}>
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'rgba(0, 132, 255, 0.12)',
                  color: 'var(--azure-vibrant)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                }}
              >
                <Palette size={24} />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff', marginBottom: '12px' }}>
                03. Brand & Experience
              </h3>
              <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
                Good design makes complicated things feel simple. We craft coherent visual languages, Figma design systems, and user flows that establish trust and elevate brand prestige.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.88rem', color: 'var(--text-primary)' }}>
                  <CheckCircle2 size={16} color="var(--cyan-bright)" />
                  <span>Figma Design Systems & Tokens</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.88rem', color: 'var(--text-primary)' }}>
                  <CheckCircle2 size={16} color="var(--cyan-bright)" />
                  <span>User Journey Mapping & Testing</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.88rem', color: 'var(--text-primary)' }}>
                  <CheckCircle2 size={16} color="var(--cyan-bright)" />
                  <span>Visual Identity & Typography Standards</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <Technology />

      {/* Bottom CTA Banner */}
      <CtaBanner />

      <Footer />
    </main>
  );
}
