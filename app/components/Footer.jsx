'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer({ onOpenContact }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ position: 'relative', overflow: 'hidden', background: '#05070d' }}>

      {/* ========================================================
          1. GLOWING HORIZON SECTION (N8N-STYLE WITH CYAN/AZURE)
         ======================================================== */}
      <div
        style={{
          position: 'relative',
          paddingTop: '100px',
          paddingBottom: '90px',
          textAlign: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Primary Horizon Glow */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '130%',
            height: '420px',
            background: 'radial-gradient(ellipse at 50% 100%, rgba(0, 210, 255, 0.50) 0%, rgba(0, 245, 212, 0.28) 28%, rgba(0, 132, 255, 0.14) 52%, transparent 72%)',
            pointerEvents: 'none',
            zIndex: 0,
            filter: 'blur(24px)',
          }}
        />
        {/* Bright Core Beam */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '700px',
            height: '140px',
            background: 'radial-gradient(ellipse at 50% 100%, rgba(0, 245, 212, 0.7) 0%, rgba(0, 210, 255, 0.4) 45%, transparent 70%)',
            pointerEvents: 'none',
            zIndex: 0,
            filter: 'blur(10px)',
          }}
        />

        {/* Sparkle Stars */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
          {[
            { top: '22%', left: '14%', delay: '0s' },
            { top: '38%', left: '28%', delay: '1.4s' },
            { top: '18%', left: '48%', delay: '2.6s' },
            { top: '30%', right: '26%', delay: '0.7s' },
            { top: '20%', right: '12%', delay: '1.9s' },
            { top: '45%', right: '40%', delay: '3.1s' },
          ].map((s, i) => (
            <span
              key={i}
              style={{
                position: 'absolute',
                top: s.top,
                left: s.left,
                right: s.right,
                width: '3px',
                height: '3px',
                background: '#ffffff',
                borderRadius: '50%',
                boxShadow: '0 0 6px #00F5D4, 0 0 14px #00D2FF',
                animation: `starPulse 3.5s ${s.delay} infinite ease-in-out`,
              }}
            />
          ))}
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <p
            style={{
              fontSize: 'clamp(1.05rem, 1.8vw, 1.3rem)',
              color: 'rgba(255, 255, 255, 0.88)',
              fontWeight: 500,
              letterSpacing: '-0.01em',
              marginBottom: '28px',
            }}
          >
            Join ambitious teams building digital products people can actually use.
          </p>

          <button
            onClick={onOpenContact}
            style={{
              background: 'linear-gradient(135deg, #00F5D4 0%, #00D2FF 50%, #0084FF 100%)',
              color: '#040711',
              fontWeight: 800,
              fontSize: '1.02rem',
              padding: '14px 34px',
              borderRadius: '12px',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 10px 30px rgba(0, 245, 212, 0.45), 0 0 50px rgba(0, 132, 255, 0.35)',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 16px 44px rgba(0, 245, 212, 0.65), 0 0 70px rgba(0, 132, 255, 0.5)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 245, 212, 0.45), 0 0 50px rgba(0, 132, 255, 0.35)';
            }}
          >
            Start building
          </button>
        </div>
      </div>

      {/* ========================================================
          2. CURVED DARK FOOTER CARD (EXACT N8N GEOMETRY)
         ======================================================== */}
      <div className="container" style={{ position: 'relative', zIndex: 2, paddingBottom: '0' }}>
        <div
          style={{
            background: '#0c1020',
            borderTopLeftRadius: '24px',
            borderTopRightRadius: '24px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderBottom: 'none',
            padding: '52px 52px 36px',
            boxShadow: '0 -20px 60px rgba(0,0,0,0.7)',
          }}
          className="footer-card"
        >
          {/* Main Grid: Brand Col + 3 Link Cols */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(12, 1fr)',
              gap: '40px',
              marginBottom: '44px',
            }}
            className="footer-main-grid"
          >
            {/* Brand Column */}
            <div style={{ gridColumn: 'span 3' }} className="footer-brand-col">
              <Link
                href="/"
                style={{
                  display: 'inline-block',
                  position: 'relative',
                  height: '30px',
                  width: '135px',
                  marginBottom: '14px',
                }}
              >
                <Image
                  src="/nav-logo-white.webp"
                  alt="Theweb"
                  fill
                  sizes="135px"
                  style={{ objectFit: 'contain' }}
                />
              </Link>

              <p
                style={{
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: 'rgba(255,255,255,0.8)',
                  marginBottom: '20px',
                  lineHeight: 1.5,
                }}
              >
                Technology should be useful.
              </p>

              {/* Social Icons Row — identical to n8n */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                {/* X / Twitter */}
                <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="soc-icon" aria-label="Twitter/X">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                {/* GitHub */}
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="soc-icon" aria-label="GitHub">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </a>
                {/* Discord */}
                <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="soc-icon" aria-label="Discord">
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                </a>
                {/* LinkedIn */}
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="soc-icon" aria-label="LinkedIn">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.78v8.37H6.46v-8.37M7.86 6.3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" />
                  </svg>
                </a>
                {/* YouTube */}
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="soc-icon" aria-label="YouTube">
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Link Columns Wrapper — 3 cols on desktop, responsive on mobile */}
            <div
              className="footer-links-cols"
              style={{ gridColumn: 'span 9', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}
            >
              {/* Link Col 1 */}
              <div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '13px' }}>
                  <li>
                    <button onClick={onOpenContact} className="fcol-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                      <span>Careers</span>
                      <span className="ftag">Hiring</span>
                    </button>
                  </li>
                  <li><button onClick={onOpenContact} className="fcol-link">Contact</button></li>
                  <li><Link href="/work" className="fcol-link">Case Studies</Link></li>
                  <li><Link href="/what-we-do" className="fcol-link">Digital Products</Link></li>
                  <li><Link href="/privacy" className="fcol-link">Legal</Link></li>
                  <li>
                    <Link href="/insights" className="fcol-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                      <span>In The Loop</span>
                      <span className="ftag" style={{ color: '#00F5D4', borderColor: 'rgba(0,245,212,0.35)', background: 'rgba(0,245,212,0.08)' }}>2026</span>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Link Col 2 */}
              <div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '13px' }}>
                  <li><Link href="/insights" className="fcol-link">Product Philosophy</Link></li>
                  <li><Link href="/work" className="fcol-link">Imagine Cup Finalist</Link></li>
                  <li><Link href="/work" className="fcol-link">90+ Norway Deliveries</Link></li>
                  <li><Link href="/what-we-do" className="fcol-link">Next.js & AI Systems</Link></li>
                  <li><Link href="/about" className="fcol-link">Company Story</Link></li>
                  <li><Link href="/how-we-work" className="fcol-link">Methodology 01–05</Link></li>
                </ul>
              </div>

              {/* Link Col 3 */}
              <div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '13px' }}>
                  <li><Link href="/about#partners" className="fcol-link">Partners</Link></li>
                  <li><Link href="/how-we-work#approach" className="fcol-link">Theweb Approach</Link></li>
                  <li><button onClick={onOpenContact} className="fcol-link">Hire an expert</button></li>
                  <li><Link href="/about" className="fcol-link">Brand guidelines</Link></li>
                  <li><Link href="/insights" className="fcol-link">Insights & Notes</Link></li>
                  <li><Link href="/what-we-do" className="fcol-link">Websites</Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* ========================================================
              BOTTOM BAR — Exact n8n.io layout
             ======================================================== */}
          <div
            style={{
              borderTop: '1px solid rgba(255,255,255,0.08)',
              paddingTop: '22px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '14px',
              fontSize: '0.84rem',
              color: '#4b5d73',
            }}
            className="footer-bottom"
          >
            {/* Left: Legal links */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              <Link href="/about" className="fbot-link">Imprint</Link>
              <span style={{ color: 'rgba(255,255,255,0.18)' }}>|</span>
              <Link href="/security" className="fbot-link">Security</Link>
              <span style={{ color: 'rgba(255,255,255,0.18)' }}>|</span>
              <Link href="/privacy" className="fbot-link">Privacy</Link>
              <span style={{ color: 'rgba(255,255,255,0.18)' }}>|</span>
              <Link href="/contact" className="fbot-link">Report a vulnerability</Link>
            </div>
            {/* Right: Copyright */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>© {currentYear} Theweb</span>
              <span style={{ color: 'rgba(255,255,255,0.18)' }}>|</span>
              <span>All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}
