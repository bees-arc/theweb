'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AboutTheweb from '../components/AboutTheweb';
import Founder from '../components/Founder';
import Partners from '../components/Partners';
import Testimonials from '../components/Testimonials';
import CtaBanner from '../components/CtaBanner';
import Modals from '../components/Modals';
import { Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  const [founderModalOpen, setFounderModalOpen] = useState(false);

  return (
    <main style={{ minHeight: '100vh', position: 'relative' }}>
      <Header />

      {/* Hero Header for About */}
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
            <span>The Story & Team</span>
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
            The Name Had Existed{' '}
            <span className="text-gradient">Before The Company</span>
          </h1>

          <p
            style={{
              fontSize: '1.2rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              marginBottom: '32px',
            }}
          >
            The experience came before the business. The story came first. The company grew from it.
            Explore the journey from early university experiments to an international digital agency.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <button
              onClick={() => setFounderModalOpen(true)}
              className="btn btn-primary btn-anim-arrow"
            >
              <span>Read founder's narrative</span>
              <ArrowRight size={16} />
            </button>
            <Link href="/contact" className="btn btn-secondary">
              <span>Let's collaborate</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Complete Milestone Timeline */}
      <AboutTheweb />

      {/* Founder Section */}
      <Founder
        onOpenFounderModal={() => setFounderModalOpen(true)}
        onOpenContact={() => {}}
      />

      {/* Partners */}
      <Partners />

      {/* Testimonials */}
      <Testimonials />

      {/* Bottom CTA Banner */}
      <CtaBanner />

      <Footer />

      {/* Founder Narrative Modal */}
      <Modals
        founderOpen={founderModalOpen}
        onCloseFounder={() => setFounderModalOpen(false)}
      />
    </main>
  );
}
