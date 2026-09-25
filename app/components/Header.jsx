'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight, Menu, X } from 'lucide-react';

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
    { label: 'What We Do', href: '/what-we-do' },
    { label: 'How We Work', href: '/how-we-work' },
    { label: 'Case Studies', href: '/work' },
    { label: 'About', href: '/about' },
    { label: 'Insights', href: '/insights' },
  ];

  return (
    <>
      {/* n8n-Style Floating Pill Navbar */}
      <header
        style={{
          position: 'fixed',
          top: '16px',
          left: '16px',
          right: '16px',
          zIndex: 100,
          margin: '0 auto',
          maxWidth: '1180px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '10px 20px',
            borderRadius: 'var(--radius-full)',
            background: scrolled
              ? 'rgba(10, 16, 30, 0.88)'
              : 'rgba(14, 22, 40, 0.72)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: scrolled
              ? '1px solid rgba(0, 210, 255, 0.28)'
              : '1px solid rgba(255, 255, 255, 0.12)',
            boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.15), 0 20px 40px -15px rgba(0, 0, 0, 0.7)',
            transition: 'all 0.3s ease',
          }}
        >
          {/* Logo with Cyan Icon and White "TheWeb" Text */}
          <Link
            href="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              paddingLeft: '6px',
            }}
          >
            <div style={{ position: 'relative', height: '32px', width: '138px' }}>
              <Image
                src="/nav-logo-white.webp"
                alt="Theweb"
                fill
                sizes="138px"
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation Links (n8n Pill style) */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '6px',
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
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? '#FFFFFF' : 'var(--color-heading-secondary)',
                    padding: '8px 16px',
                    borderRadius: 'var(--radius-full)',
                    background: isActive ? 'rgba(0, 210, 255, 0.12)' : 'transparent',
                    border: isActive ? '1px solid rgba(0, 210, 255, 0.3)' : '1px solid transparent',
                    boxShadow: isActive ? '0 0 15px rgba(0, 210, 255, 0.2)' : 'none',
                    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = '#FFFFFF';
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = 'var(--color-heading-secondary)';
                      e.currentTarget.style.background = 'transparent';
                    }
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action (n8n Pill Button) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Link
              href="/contact"
              className="btn btn-primary btn-anim-arrow"
              style={{
                padding: '8px 18px',
                fontSize: '0.85rem',
                borderRadius: 'var(--radius-full)',
              }}
            >
              <span className="btn-label">Let's build it</span>
              <span className="btn-icon">
                <ArrowRight size={14} />
              </span>
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-toggle"
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#fff',
                padding: '8px',
                borderRadius: 'var(--radius-full)',
                cursor: 'pointer',
                display: 'none',
              }}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            style={{
              marginTop: '10px',
              background: 'rgba(10, 16, 30, 0.95)',
              border: '1px solid rgba(0, 210, 255, 0.3)',
              borderRadius: 'var(--radius-xl)',
              padding: '24px 20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
              backdropFilter: 'blur(30px)',
              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.8)',
            }}
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    fontSize: '0.95rem',
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? 'var(--brand-cyan-neon)' : '#FFFFFF',
                    padding: '8px 12px',
                    borderRadius: 'var(--radius-sm)',
                    background: isActive ? 'rgba(0, 210, 255, 0.1)' : 'transparent',
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn btn-primary btn-anim-arrow"
              style={{
                marginTop: '6px',
                width: '100%',
                borderRadius: 'var(--radius-full)',
                padding: '12px',
              }}
            >
              <span className="btn-label">Have something in mind? Let's build it</span>
              <span className="btn-icon">
                <ArrowRight size={15} />
              </span>
            </Link>
          </div>
        )}
      </header>

      <style jsx>{`
        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
        }
        @media (max-width: 899px) {
          .mobile-toggle {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
}
