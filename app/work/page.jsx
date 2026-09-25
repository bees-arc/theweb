'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FeaturedWork from '../components/FeaturedWork';
import Testimonials from '../components/Testimonials';
import CtaBanner from '../components/CtaBanner';
import Modals from '../components/Modals';
import { Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function WorkPage() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  return (
    <main style={{ minHeight: '100vh', position: 'relative' }}>
      <Header />

      {/* Hero Header for Work */}
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
            <span>Case Studies & Track Record</span>
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
            Built With Purpose,{' '}
            <span className="text-gradient">Proven With Impact</span>
          </h1>

          <p
            style={{
              fontSize: '1.2rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              marginBottom: '32px',
            }}
          >
            From Microsoft Imagine Cup World Finalist recognition to delivering 90+ international digital design
            systems for Norwegian enterprises, our work proves that pragmatic technology solves real problems.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-primary btn-anim-arrow">
              <span>Discuss a new project</span>
              <ArrowRight size={16} />
            </Link>
            <Link href="/about" className="btn btn-secondary">
              <span>Read the agency story</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Work & Case Studies */}
      <FeaturedWork onSelectCaseStudy={(study) => setSelectedCaseStudy(study)} />

      {/* Client Testimonials */}
      <Testimonials />

      {/* Bottom CTA Banner */}
      <CtaBanner />

      <Footer />

      {/* Case Study Details Modal */}
      <Modals
        selectedCaseStudy={selectedCaseStudy}
        onCloseCaseStudy={() => setSelectedCaseStudy(null)}
      />
    </main>
  );
}
