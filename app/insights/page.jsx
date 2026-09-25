'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Insights from '../components/Insights';
import CtaBanner from '../components/CtaBanner';
import Modals from '../components/Modals';
import { Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function InsightsPage() {
  const [selectedInsight, setSelectedInsight] = useState(null);

  return (
    <main style={{ minHeight: '100vh', position: 'relative' }}>
      <Header />

      {/* Hero Header for Insights */}
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
            <span>Articles & Reflections</span>
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
            Thoughts on Building{' '}
            <span className="text-gradient">Useful Technology</span>
          </h1>

          <p
            style={{
              fontSize: '1.2rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              marginBottom: '32px',
            }}
          >
            Reflections from 5+ years of digital product design, international collaborations,
            and pragmatic engineering. No fluff—just real lessons learned.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-primary btn-anim-arrow">
              <span>Have a question? Ask us</span>
              <ArrowRight size={16} />
            </Link>
            <Link href="/how-we-work" className="btn btn-secondary">
              <span>Explore our approach</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <Insights onSelectInsight={(item) => setSelectedInsight(item)} />

      {/* Bottom CTA Banner */}
      <CtaBanner />

      <Footer />

      {/* Article Reader Modal */}
      <Modals
        selectedInsight={selectedInsight}
        onCloseInsight={() => setSelectedInsight(null)}
      />
    </main>
  );
}
