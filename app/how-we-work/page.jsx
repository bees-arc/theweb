'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import HowWeWork from '../components/HowWeWork';
import ThewebApproach from '../components/ThewebApproach';
import CtaBanner from '../components/CtaBanner';
import { Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function HowWeWorkPage() {
  return (
    <main style={{ minHeight: '100vh', position: 'relative' }}>
      <Header />

      {/* Hero Header for How We Work */}
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
            <span>Process & Methodology</span>
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
            From Idea to Something{' '}
            <span className="text-gradient">People Actually Use</span>
          </h1>

          <p
            style={{
              fontSize: '1.2rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              marginBottom: '32px',
            }}
          >
            There is no single way to build something. We stay flexible, curious, and disciplined—combining rigorous user empathy with rapid technical execution.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-primary btn-anim-arrow">
              <span>Start Phase 01: Understand</span>
              <ArrowRight size={16} />
            </Link>
            <Link href="/work" className="btn btn-secondary">
              <span>See past project deliverables</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 5-Step Process */}
      <HowWeWork onOpenContact={() => {}} />

      {/* Theweb Approach Philosophy */}
      <ThewebApproach />

      {/* Bottom CTA Banner */}
      <CtaBanner />

      <Footer />
    </main>
  );
}
