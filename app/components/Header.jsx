'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X, Trophy, ArrowRight } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'What We Do', href: '/what-we-do', hasDropdown: true },
    { label: 'How We Work', href: '/how-we-work', hasDropdown: true },
    { label: 'Case Studies', href: '/work', hasDropdown: true },
    { label: 'About', href: '/about', hasDropdown: true },
    { label: 'Insights', href: '/insights', hasDropdown: false },
  ];

  return (
    <>
      {/* ======================================================
          FIXED NAVBAR (always visible)
         ====================================================== */}
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200 }}>
        <div className="container" style={{ padding: '14px 16px' }}>
          <header
            style={{
              maxWidth: '1220px',
              margin: '0 auto',
              borderRadius: '14px',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              background: scrolled || mobileMenuOpen
                ? 'rgba(8, 13, 26, 0.96)'
                : 'rgba(12, 18, 36, 0.78)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              padding: '10px 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.12)',
              transition: 'all 0.3s ease',
            }}
          >
            {/* Logo */}
            <Link href="/" onClick={() => setMobileMenuOpen(false)} style={{ display: 'flex', alignItems: 'center', paddingLeft: '4px' }}>
              <div style={{ position: 'relative', height: '30px', width: '135px' }}>
                <Image src="/nav-logo-white.webp" alt="Theweb" fill sizes="135px" style={{ objectFit: 'contain' }} priority />
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav style={{ display: 'none', alignItems: 'center', gap: '24px' }} className="desktop-nav">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    style={{
                      fontSize: '0.88rem',
                      fontWeight: 500,
                      color: isActive ? '#FFFFFF' : 'var(--color-heading-secondary)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                    onMouseLeave={(e) => {
                      if (!isActive) e.currentTarget.style.color = 'var(--color-heading-secondary)';
                    }}
                  >
                    <span>{link.label}</span>
                    {link.hasDropdown && <ChevronDown size={14} color="var(--color-text-muted)" />}
                  </Link>
                );
              })}
            </nav>

            {/* Right Actions */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              {/* Award pill (desktop only) */}
              <div
                style={{ display: 'none', alignItems: 'center', gap: '6px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', padding: '4px 12px', borderRadius: 'var(--radius-sm)', fontSize: '0.78rem', color: 'var(--color-heading-primary)', fontWeight: 600 }}
                className="award-pill"
              >
                <Trophy size={13} color="var(--brand-cyan-neon)" />
                <span>90+ Projects</span>
              </div>

              {/* Desktop CTA */}
              <Link
                href="/contact"
                className="desktop-cta"
                style={{ background: 'var(--n8n-btn-primary)', color: '#06090F', fontWeight: 700, fontSize: '0.86rem', padding: '8px 18px', borderRadius: '8px', boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.4), 0 4px 14px rgba(0,210,255,0.4)', transition: 'all 0.2s ease', display: 'none', alignItems: 'center', gap: '6px' }}
              >
                <span>Let's build it</span>
              </Link>

              {/* Hamburger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="mobile-toggle"
                style={{ background: mobileMenuOpen ? 'rgba(0,245,212,0.12)' : 'rgba(255,255,255,0.08)', border: `1px solid ${mobileMenuOpen ? 'rgba(0,245,212,0.35)' : 'rgba(255,255,255,0.15)'}`, color: mobileMenuOpen ? 'var(--brand-cyan-neon)' : '#fff', padding: '7px', borderRadius: '8px', cursor: 'pointer', display: 'none', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s ease' }}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </header>
        </div>
      </div>

      {/* ======================================================
          FULL-SCREEN MOBILE MENU OVERLAY
         ====================================================== */}
      <div
        className="mobile-fullscreen-overlay"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 199,
          background: 'rgba(5, 8, 18, 0.98)',
          backdropFilter: 'blur(40px)',
          WebkitBackdropFilter: 'blur(40px)',
          display: 'flex',
          flexDirection: 'column',
          opacity: mobileMenuOpen ? 1 : 0,
          pointerEvents: mobileMenuOpen ? 'all' : 'none',
          transition: 'opacity 0.28s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        {/* Ambient glow */}
        <div style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '500px', height: '400px', background: 'radial-gradient(ellipse at 50% 100%, rgba(0,210,255,0.18) 0%, rgba(0,245,212,0.08) 40%, transparent 70%)', pointerEvents: 'none', filter: 'blur(30px)' }} />

        {/* Navigation Links — iOS Settings style */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '80px 32px 32px',
            gap: '4px',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {navLinks.map((link, i) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '18px 20px',
                  borderRadius: '16px',
                  background: isActive ? 'rgba(0,245,212,0.08)' : 'rgba(255,255,255,0.03)',
                  border: isActive ? '1px solid rgba(0,245,212,0.2)' : '1px solid rgba(255,255,255,0.05)',
                  fontSize: 'clamp(1.1rem, 4vw, 1.3rem)',
                  fontWeight: 600,
                  color: isActive ? '#00F5D4' : '#e2e8f0',
                  letterSpacing: '-0.01em',
                  transition: 'all 0.15s ease',
                  transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                  transitionDelay: mobileMenuOpen ? `${i * 40}ms` : '0ms',
                }}
              >
                <span>{link.label}</span>
                <ArrowRight size={18} color={isActive ? '#00F5D4' : 'rgba(255,255,255,0.25)'} />
              </Link>
            );
          })}

          {/* CTA Block */}
          <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                background: 'linear-gradient(135deg, #00F5D4 0%, #00D2FF 50%, #0084FF 100%)',
                color: '#040a14',
                fontWeight: 800,
                fontSize: '1rem',
                padding: '16px 24px',
                borderRadius: '16px',
                boxShadow: '0 12px 30px rgba(0,210,255,0.35)',
                letterSpacing: '-0.01em',
                transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                transition: 'transform 0.3s ease',
                transitionDelay: mobileMenuOpen ? `${navLinks.length * 40 + 40}ms` : '0ms',
              }}
            >
              <span>Let's build it</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        {/* Bottom tagline */}
        <div
          style={{
            padding: '24px 32px',
            textAlign: 'center',
            fontSize: '0.8rem',
            color: 'rgba(255,255,255,0.25)',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            position: 'relative',
            zIndex: 1,
          }}
        >
          Technology should be useful · Sri Lanka & Worldwide
        </div>
      </div>

    </>
  );
}
