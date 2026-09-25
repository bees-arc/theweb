'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      style={{
        background: '#04070e',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        paddingTop: '80px',
        paddingBottom: '40px',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Main Footer Columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '40px',
            marginBottom: '60px',
          }}
        >
          {/* Brand Col */}
          <div style={{ gridColumn: 'span 4' }} className="footer-brand-col">
            <Link href="/" style={{ display: 'inline-block', position: 'relative', height: '36px', width: '155px', marginBottom: '20px' }}>
              <Image
                src="/nav-logo-white.webp"
                alt="Theweb"
                fill
                sizes="155px"
                style={{ objectFit: 'contain' }}
              />
            </Link>

            <p
              style={{
                fontSize: '1rem',
                fontWeight: 700,
                color: 'var(--text-white)',
                marginBottom: '8px',
              }}
            >
              Technology should be useful.
            </p>

            <p
              style={{
                fontSize: '0.88rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                marginBottom: '24px',
              }}
            >
              We partner with ambitious companies to build digital products, websites, and brand experiences that turn ideas into something people can actually use.
            </p>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.8rem',
                color: 'var(--cyan-bright)',
                background: 'rgba(0, 245, 212, 0.08)',
                border: '1px solid rgba(0, 245, 212, 0.25)',
                padding: '6px 14px',
                borderRadius: 'var(--radius-full)',
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: 'var(--cyan-bright)',
                  boxShadow: '0 0 8px var(--cyan-bright)',
                }}
              />
              <span>Available for new projects</span>
            </div>
          </div>

          {/* Col 1: What We Do */}
          <div style={{ gridColumn: 'span 2' }} className="footer-link-col">
            <div
              style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--text-white)',
                marginBottom: '18px',
              }}
            >
              What We Do
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>
                <Link href="/what-we-do" style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                  Digital Products
                </Link>
              </li>
              <li>
                <Link href="/what-we-do" style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                  Websites
                </Link>
              </li>
              <li>
                <Link href="/what-we-do" style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                  Brand & Experience
                </Link>
              </li>
              <li>
                <Link href="/what-we-do" style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                  Next.js & React Apps
                </Link>
              </li>
              <li>
                <Link href="/what-we-do" style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                  AI & Automations
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: How We Work */}
          <div style={{ gridColumn: 'span 2' }} className="footer-link-col">
            <div
              style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--text-white)',
                marginBottom: '18px',
              }}
            >
              How We Work
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>
                <Link href="/how-we-work" style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                  01 — Understand
                </Link>
              </li>
              <li>
                <Link href="/how-we-work" style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                  02 — Define
                </Link>
              </li>
              <li>
                <Link href="/how-we-work" style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                  03 — Design
                </Link>
              </li>
              <li>
                <Link href="/how-we-work" style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                  04 — Build
                </Link>
              </li>
              <li>
                <Link href="/how-we-work" style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                  05 — Improve
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: The Approach */}
          <div style={{ gridColumn: 'span 2' }} className="footer-link-col">
            <div
              style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--text-white)',
                marginBottom: '18px',
              }}
            >
              The Approach
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>
                <Link href="/how-we-work#approach" style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                  Start with the why
                </Link>
              </li>
              <li>
                <Link href="/how-we-work#approach" style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                  Explore before deciding
                </Link>
              </li>
              <li>
                <Link href="/how-we-work#approach" style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                  Make it understandable
                </Link>
              </li>
              <li>
                <Link href="/how-we-work#approach" style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                  Use the right tools
                </Link>
              </li>
              <li>
                <Link href="/how-we-work#approach" style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                  Build, learn, improve
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: About & Impact */}
          <div style={{ gridColumn: 'span 2' }} className="footer-link-col">
            <div
              style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--text-white)',
                marginBottom: '18px',
              }}
            >
              About & Trust
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>
                <Link href="/about" style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                  Agency Story (2019–Now)
                </Link>
              </li>
              <li>
                <Link href="/work" style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                  Imagine Cup Finalist
                </Link>
              </li>
              <li>
                <Link href="/about#partners" style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                  Babette & International
                </Link>
              </li>
              <li>
                <Link href="/work" style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                  90+ Norway Projects
                </Link>
              </li>
              <li>
                <Link href="/about#founder" style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                  Founder Journey
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Socials & Global Presence */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            paddingTop: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            <Globe size={15} color="var(--cyan-bright)" />
            <span>Sri Lanka · Norway · Serving Global Clients</span>
          </div>

          <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} Theweb Agency. All rights reserved.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }}
              aria-label="LinkedIn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.78v8.37H6.46v-8.37M7.86 6.3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" />
              </svg>
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }}
              aria-label="Twitter/X"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }}
              aria-label="GitHub"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 990px) {
          .footer-brand-col {
            grid-column: span 12 !important;
          }
          .footer-link-col {
            grid-column: span 6 !important;
          }
        }
        @media (max-width: 580px) {
          .footer-link-col {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </footer>
  );
}
