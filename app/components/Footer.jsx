'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Globe, ShieldCheck, CheckCircle2, ChevronDown } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: '#04060b',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient background glow subtle accent */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '800px',
          height: '240px',
          background: 'radial-gradient(ellipse at 50% 0%, rgba(0, 245, 212, 0.06), transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: '80px', paddingBottom: '40px' }}>
        {/* Main Footer Links Grid - Exactly matching n8n 5-column layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '40px',
            marginBottom: '64px',
          }}
          className="footer-grid"
        >
          {/* Brand & Mission Column (Col 1-4) */}
          <div style={{ gridColumn: 'span 4' }} className="footer-brand-col">
            <Link
              href="/"
              style={{
                display: 'inline-block',
                position: 'relative',
                height: '34px',
                width: '150px',
                marginBottom: '20px',
              }}
            >
              <Image
                src="/nav-logo-white.webp"
                alt="Theweb"
                fill
                sizes="150px"
                style={{ objectFit: 'contain' }}
              />
            </Link>

            <p
              style={{
                fontSize: '0.92rem',
                color: '#94a3b8',
                lineHeight: 1.65,
                marginBottom: '24px',
                maxWidth: '340px',
              }}
            >
              We turn rough sketches, ambitious ideas, and complex business problems into intuitive digital products,
              modern websites, and lasting brand experiences.
            </p>

            {/* n8n-style Operational System Status Pill */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '0.8rem',
                  fontWeight: 500,
                  color: '#e2e8f0',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  padding: '6px 14px',
                  borderRadius: '9999px',
                  width: 'fit-content',
                }}
              >
                <span
                  style={{
                    width: '7px',
                    height: '7px',
                    borderRadius: '50%',
                    background: 'var(--cyan-bright)',
                    boxShadow: '0 0 10px var(--cyan-bright)',
                    display: 'inline-block',
                  }}
                />
                <span>Systems: 100% Operational</span>
              </div>

              {/* Global Reach Indicator */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '0.8rem',
                  color: '#64748b',
                }}
              >
                <Globe size={14} color="var(--cyan-bright)" />
                <span>Sri Lanka · Norway · Worldwide</span>
              </div>
            </div>
          </div>

          {/* Column 2: What We Do */}
          <div style={{ gridColumn: 'span 2' }} className="footer-links-col">
            <h4
              style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: '#ffffff',
                marginBottom: '20px',
              }}
            >
              What We Do
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', padding: 0, margin: 0 }}>
              <li>
                <Link href="/what-we-do" className="footer-link">
                  Digital Products
                </Link>
              </li>
              <li>
                <Link href="/what-we-do" className="footer-link">
                  Modern Websites
                </Link>
              </li>
              <li>
                <Link href="/what-we-do" className="footer-link">
                  Brand & Experience
                </Link>
              </li>
              <li>
                <Link href="/what-we-do" className="footer-link">
                  Next.js Web Apps
                </Link>
              </li>
              <li>
                <Link href="/what-we-do" className="footer-link">
                  AI & Workflow Systems
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: How We Work */}
          <div style={{ gridColumn: 'span 2' }} className="footer-links-col">
            <h4
              style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: '#ffffff',
                marginBottom: '20px',
              }}
            >
              How We Work
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', padding: 0, margin: 0 }}>
              <li>
                <Link href="/how-we-work" className="footer-link">
                  01 — Understand
                </Link>
              </li>
              <li>
                <Link href="/how-we-work" className="footer-link">
                  02 — Define
                </Link>
              </li>
              <li>
                <Link href="/how-we-work" className="footer-link">
                  03 — Design
                </Link>
              </li>
              <li>
                <Link href="/how-we-work" className="footer-link">
                  04 — Build
                </Link>
              </li>
              <li>
                <Link href="/how-we-work" className="footer-link">
                  05 — Improve
                </Link>
              </li>
              <li>
                <Link href="/how-we-work#approach" className="footer-link" style={{ color: 'var(--cyan-bright)' }}>
                  Theweb Approach →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Work & Proof */}
          <div style={{ gridColumn: 'span 2' }} className="footer-links-col">
            <h4
              style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: '#ffffff',
                marginBottom: '20px',
              }}
            >
              Work & Proof
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', padding: 0, margin: 0 }}>
              <li>
                <Link href="/work" className="footer-link">
                  Featured Projects
                </Link>
              </li>
              <li>
                <Link href="/work" className="footer-link">
                  Imagine Cup Finalist
                </Link>
              </li>
              <li>
                <Link href="/work" className="footer-link">
                  90+ Norwegian Deliveries
                </Link>
              </li>
              <li>
                <Link href="/work" className="footer-link">
                  Habarala Platform
                </Link>
              </li>
              <li>
                <Link href="/work" className="footer-link">
                  Client Case Studies
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Company */}
          <div style={{ gridColumn: 'span 2' }} className="footer-links-col">
            <h4
              style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: '#ffffff',
                marginBottom: '20px',
              }}
            >
              Company
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', padding: 0, margin: 0 }}>
              <li>
                <Link href="/about" className="footer-link">
                  Our Story (2019–Now)
                </Link>
              </li>
              <li>
                <Link href="/about#founder" className="footer-link">
                  Founder Journey
                </Link>
              </li>
              <li>
                <Link href="/insights" className="footer-link">
                  Insights & Notes
                </Link>
              </li>
              <li>
                <Link href="/about#partners" className="footer-link">
                  Global Network
                </Link>
              </li>
              <li>
                <Link href="/contact" className="footer-link" style={{ color: 'var(--cyan-bright)' }}>
                  Start a Project →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* ==========================================================
            BOTTOM BAR (Exact n8n.io layout)
           ========================================================== */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px',
          }}
          className="footer-bottom"
        >
          {/* Copyright & Legal links */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '24px',
              fontSize: '0.85rem',
              color: '#64748b',
            }}
          >
            <span>© {currentYear} Theweb Agency Inc. All rights reserved.</span>
            <span style={{ color: 'rgba(255, 255, 255, 0.15)' }}>•</span>
            <Link href="/privacy" className="footer-sublink">
              Privacy Policy
            </Link>
            <span style={{ color: 'rgba(255, 255, 255, 0.15)' }}>•</span>
            <Link href="/terms" className="footer-sublink">
              Terms of Service
            </Link>
            <span style={{ color: 'rgba(255, 255, 255, 0.15)' }}>•</span>
            <Link href="/security" className="footer-sublink">
              Security
            </Link>
          </div>

          {/* Social Icons (n8n rounded pill style) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
              aria-label="LinkedIn"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.78v8.37H6.46v-8.37M7.86 6.3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" />
              </svg>
            </a>

            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
              aria-label="Twitter/X"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
              aria-label="GitHub"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>

            <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
              aria-label="Discord"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer-link {
          font-size: 0.88rem;
          color: #94a3b8;
          text-decoration: none;
          transition: color 0.2s ease, transform 0.2s ease;
          display: inline-block;
        }
        .footer-link:hover {
          color: #ffffff;
          transform: translateX(2px);
        }
        .footer-sublink {
          color: #64748b;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .footer-sublink:hover {
          color: #cbd5e1;
        }
        .social-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #94a3b8;
          transition: all 0.2s ease;
        }
        .social-btn:hover {
          background: rgba(0, 245, 212, 0.1);
          border-color: rgba(0, 245, 212, 0.3);
          color: var(--cyan-bright);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 245, 212, 0.15);
        }

        @media (max-width: 1024px) {
          .footer-brand-col {
            grid-column: span 12 !important;
            margin-bottom: 20px;
          }
          .footer-links-col {
            grid-column: span 3 !important;
          }
        }
        @media (max-width: 768px) {
          .footer-links-col {
            grid-column: span 6 !important;
          }
          .footer-bottom {
            flex-direction: column;
            align-items: flex-start !important;
          }
        }
        @media (max-width: 480px) {
          .footer-links-col {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </footer>
  );
}
