'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight, ChevronDown, Menu, X, Trophy } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'What We Do', href: '/what-we-do', hasDropdown: true },
    { label: 'How We Work', href: '/how-we-work', hasDropdown: true },
    { label: 'Case Studies', href: '/work', hasDropdown: true },
    { label: 'About', href: '/about', hasDropdown: true },
    { label: 'Insights', href: '/insights', hasDropdown: false },
  ];

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100 }}>
      {/* Floating Navbar matching n8n.io rounded rectangular container */}
      <div className="container" style={{ padding: '16px 16px' }}>
        <header
          style={{
            maxWidth: '1220px',
            margin: '0 auto',
            borderRadius: '14px',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            background: scrolled
              ? 'rgba(10, 16, 30, 0.88)'
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
          {/* Logo with Cyan Icon and Pure White "TheWeb" Text */}
          <Link
            href="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              paddingLeft: '4px',
            }}
          >
            <div style={{ position: 'relative', height: '30px', width: '135px' }}>
              <Image
                src="/nav-logo-white.webp"
                alt="Theweb"
                fill
                sizes="135px"
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation Links with n8n Dropdown Caret */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '24px',
            }}
            className="desktop-nav"
          >
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
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.color = 'var(--color-heading-secondary)';
                  }}
                >
                  <span>{link.label}</span>
                  {link.hasDropdown && (
                    <ChevronDown size={14} color="var(--color-text-muted)" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action buttons matching n8n (Proof badge, Approach link, and Bright Orange/Cyan Button) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            {/* Award badge pill */}
            <div
              style={{
                display: 'none',
                alignItems: 'center',
                gap: '6px',
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '4px 12px',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.78rem',
                color: 'var(--color-heading-primary)',
                fontWeight: 600,
              }}
              className="award-pill"
            >
              <Trophy size={13} color="var(--brand-cyan-neon)" />
              <span>90+ Projects</span>
            </div>

            <Link
              href="/how-we-work#approach"
              style={{
                display: 'none',
                fontSize: '0.88rem',
                fontWeight: 500,
                color: 'var(--color-heading-secondary)',
                transition: 'color 0.2s',
              }}
              className="approach-link"
              onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-heading-secondary)')}
            >
              Approach
            </Link>

            {/* n8n Style Bright CTA Button */}
            <Link
              href="/contact"
              style={{
                background: 'var(--n8n-btn-primary)',
                color: '#06090F',
                fontWeight: 700,
                fontSize: '0.86rem',
                padding: '8px 18px',
                borderRadius: '8px',
                textDecoration: 'none',
                boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.4), 0 4px 14px rgba(0, 210, 255, 0.4)',
                transition: 'all 0.2s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <span>Let's build it</span>
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-toggle"
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#fff',
                padding: '6px',
                borderRadius: '6px',
                cursor: 'pointer',
                display: 'none',
              }}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </header>

        {/* Mobile Slide-Down Menu — iOS style */}
        {mobileMenuOpen && (
          <div
            style={{
              marginTop: '8px',
              background: 'rgba(8, 13, 26, 0.97)',
              border: '1px solid rgba(0, 210, 255, 0.2)',
              borderRadius: '16px',
              overflow: 'hidden',
              backdropFilter: 'blur(40px)',
              WebkitBackdropFilter: 'blur(40px)',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.85), 0 0 0 1px rgba(255,255,255,0.05) inset',
            }}
          >
            {/* Nav Links */}
            <div style={{ padding: '8px 0' }}>
              {navLinks.map((link, i) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: '1rem',
                    fontWeight: 500,
                    color: pathname === link.href ? 'var(--brand-cyan-neon)' : '#e2e8f0',
                    padding: '14px 20px',
                    borderBottom: i < navLinks.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                    textDecoration: 'none',
                    transition: 'background 0.15s',
                  }}
                >
                  <span>{link.label}</span>
                  {link.hasDropdown && (
                    <ChevronDown size={15} color="rgba(255,255,255,0.3)" style={{ transform: 'rotate(-90deg)' }} />
                  )}
                </Link>
              ))}
            </div>

            {/* CTA Block */}
            <div style={{ padding: '16px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  display: 'block',
                  background: 'linear-gradient(135deg, #00F5D4 0%, #00D2FF 50%, #0084FF 100%)',
                  color: '#040a14',
                  fontWeight: 800,
                  fontSize: '0.95rem',
                  textAlign: 'center',
                  padding: '14px',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  boxShadow: '0 8px 24px rgba(0, 210, 255, 0.35)',
                  letterSpacing: '-0.01em',
                }}
              >
                Have something in mind? Let's build it
              </Link>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @media (min-width: 960px) {
          .desktop-nav {
            display: flex !important;
          }
          .award-pill {
            display: flex !important;
          }
          .approach-link {
            display: inline-block !important;
          }
        }
        @media (max-width: 959px) {
          .mobile-toggle {
            display: flex !important;
          }
        }
      `}</style>
    </div>
  );
}
