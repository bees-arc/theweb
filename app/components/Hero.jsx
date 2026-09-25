'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Compass, Layers, Cpu, RefreshCw, CheckCircle2, Play, Code2, Globe, Laptop, Palette } from 'lucide-react';

export default function Hero() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 0,
      title: 'Digital Products can',
      action: 'Turn complex logic into scalable web software',
      nodes: [
        { id: 'n1', title: 'User Problem', type: 'Trigger', badge: 'Input', color: '#00F5D4', desc: 'Identify core pain points & constraints' },
        { id: 'n2', title: 'UX Architecture', type: 'Design', badge: 'Wireframe', color: '#00D2FF', desc: 'Map frictionless user journeys' },
        { id: 'n3', title: 'Next.js App', type: 'Engineering', badge: 'React 18', color: '#0084FF', desc: 'Build reactive state & fast APIs' },
        { id: 'n4', title: 'Autonomous AI', type: 'Workflow', badge: 'Automation', color: '#00F5D4', desc: 'Integrate intelligent pipelines' },
        { id: 'n5', title: 'Live Product', type: 'Production', badge: 'Scale', color: '#10B981', desc: 'Deliver software people actually use' },
      ],
      output: '99.9% Uptime · Sub-second Latency · High User Adoption',
    },
    {
      id: 1,
      title: 'Websites can',
      action: 'Convert visitors with lightning speed & clarity',
      nodes: [
        { id: 'n1', title: 'Brand Story', type: 'Discovery', badge: 'Message', color: '#00F5D4', desc: 'Articulate unique value proposition' },
        { id: 'n2', title: 'Visual System', type: 'Design', badge: 'Tokens', color: '#00D2FF', desc: 'Craft aesthetic modern typography & layout' },
        { id: 'n3', title: 'Jamstack Next.js', type: 'Build', badge: 'SSR / SSG', color: '#0084FF', desc: 'Zero bloat, pure Core Web Vitals' },
        { id: 'n4', title: 'Headless CMS', type: 'Content', badge: 'WordPress', color: '#00F5D4', desc: 'Empower marketing team autonomy' },
        { id: 'n5', title: 'Global Launch', type: 'Deploy', badge: 'Edge CDN', color: '#10B981', desc: 'Instant conversion-ready presence' },
      ],
      output: '100% Lighthouse Performance · SEO Optimized · High Conversion',
    },
    {
      id: 2,
      title: 'Brand & UX can',
      action: 'Make complicated systems feel intuitive',
      nodes: [
        { id: 'n1', title: 'User Research', type: 'Discovery', badge: 'Interviews', color: '#00F5D4', desc: 'Uncover psychological user motivations' },
        { id: 'n2', title: 'Figma System', type: 'Tokens', badge: 'Components', color: '#00D2FF', desc: 'Modular design system & color palettes' },
        { id: 'n3', title: 'Micro-Interactions', type: 'Motion', badge: 'Prototype', color: '#0084FF', desc: 'Delightful kinetic feedback on clicks' },
        { id: 'n4', title: 'Usability Audit', type: 'Validation', badge: 'Testing', color: '#00F5D4', desc: 'Refine until zero friction remains' },
        { id: 'n5', title: 'Design Handoff', type: 'Delivery', badge: 'Code-Ready', color: '#10B981', desc: 'Seamless engineering alignment' },
      ],
      output: 'Eliminates Cognitive Friction · Builds Lasting User Trust',
    },
    {
      id: 3,
      title: 'How We Work can',
      action: 'Guide an idea to reality in 5 disciplined phases',
      nodes: [
        { id: 'n1', title: '01 Understand', type: 'Research', badge: 'Goals', color: '#00F5D4', desc: 'We learn about your business, users and goals' },
        { id: 'n2', title: '02 Define', type: 'Strategy', badge: 'Direction', color: '#00D2FF', desc: 'We turn the problem into a clear direction' },
        { id: 'n3', title: '03 Design', type: 'Interface', badge: 'Experience', color: '#0084FF', desc: 'We create the experience and visual system' },
        { id: 'n4', title: '04 Build', type: 'Engineering', badge: 'Reliable', color: '#00F5D4', desc: 'We turn design into a reliable digital product' },
        { id: 'n5', title: '05 Improve', type: 'Iteration', badge: 'Learn', color: '#10B981', desc: 'We launch, learn and keep improving' },
      ],
      output: 'Predictable Timelines · Total Transparency · Continuous Value',
    },
  ];

  const currentWorkflow = tabs[activeTab];

  return (
    <section
      style={{
        position: 'relative',
        paddingTop: '160px',
        paddingBottom: '90px',
        overflow: 'hidden',
      }}
    >
      <div className="n8n-grid-bg" />

      <div className="container">
        {/* Hero Top Copy matching n8n.io */}
        <div style={{ textAlign: 'center', maxWidth: '880px', margin: '0 auto 48px' }}>
          {/* n8n Eyebrow Pill */}
          <div className="n8n-badge">
            <span
              style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                background: 'var(--brand-cyan-neon)',
                boxShadow: '0 0 10px var(--brand-cyan-neon)',
              }}
            />
            <span>✦ THEWEB AGENCY · DIGITAL PRODUCT & UX STUDIO</span>
          </div>

          {/* Main Headline with n8n typography */}
          <h1
            style={{
              fontSize: 'clamp(2.6rem, 5.5vw, 4.4rem)',
              fontWeight: 800,
              lineHeight: 1.12,
              letterSpacing: '-0.035em',
              color: '#FFFFFF',
              marginBottom: '24px',
            }}
          >
            Technology should be useful.{' '}
            <span className="text-gradient" style={{ display: 'block' }}>
              From idea to something people can actually use.
            </span>
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.25rem)',
              color: 'var(--color-heading-secondary)',
              lineHeight: 1.65,
              maxWidth: '740px',
              margin: '0 auto 36px',
            }}
          >
            We turn rough sketches, ambitious ideas, and complex business problems into
            intuitive digital products, modern high-performance websites, and lasting brand experiences.
          </p>

          {/* Dual Action Buttons matching n8n */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              flexWrap: 'wrap',
            }}
          >
            <Link href="/contact" className="btn btn-primary btn-anim-arrow">
              <span className="btn-label">Have something in mind? Let's build it</span>
              <span className="btn-icon">
                <ArrowRight size={16} />
              </span>
            </Link>

            <Link href="/how-we-work" className="btn btn-secondary">
              <span>Theweb Approach</span>
            </Link>
          </div>
        </div>

        {/* n8n.io Feature-Tabs Header Switcher */}
        <div
          style={{
            maxWidth: '1100px',
            margin: '0 auto 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            flexWrap: 'wrap',
          }}
        >
          {tabs.map((tab, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(idx)}
                style={{
                  padding: '10px 20px',
                  borderRadius: 'var(--radius-full)',
                  border: isActive
                    ? '1px solid rgba(0, 245, 212, 0.5)'
                    : '1px solid rgba(255, 255, 255, 0.08)',
                  background: isActive
                    ? 'linear-gradient(180deg, rgba(0, 210, 255, 0.18) 0%, rgba(14, 22, 40, 0.6) 100%)'
                    : 'rgba(255, 255, 255, 0.03)',
                  color: isActive ? '#FFFFFF' : 'var(--color-heading-secondary)',
                  fontWeight: isActive ? 700 : 500,
                  fontSize: '0.88rem',
                  cursor: 'pointer',
                  boxShadow: isActive ? '0 0 20px rgba(0, 210, 255, 0.25)' : 'none',
                  transition: 'all 0.25s ease',
                }}
              >
                <strong style={{ color: isActive ? 'var(--brand-cyan-neon)' : 'inherit' }}>
                  {tab.title}
                </strong>
              </button>
            );
          })}
        </div>

        {/* n8n Interactive Visual Workflow Canvas */}
        <div
          className="card-n8n-spark"
          style={{
            maxWidth: '1100px',
            margin: '0 auto 48px',
            padding: '32px 28px',
            borderRadius: 'var(--radius-2xl)',
            overflow: 'hidden',
          }}
        >
          {/* Canvas Window Header bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              paddingBottom: '18px',
              marginBottom: '28px',
              flexWrap: 'wrap',
              gap: '12px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#EF4444' }} />
              <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#F59E0B' }} />
              <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#10B981' }} />
              <span
                style={{
                  fontSize: '0.84rem',
                  fontWeight: 600,
                  color: 'var(--color-heading-secondary)',
                  marginLeft: '10px',
                }}
              >
                Theweb Production Canvas — {currentWorkflow.action}
              </span>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.78rem',
                color: 'var(--brand-cyan-neon)',
                background: 'rgba(0, 245, 212, 0.1)',
                padding: '4px 12px',
                borderRadius: 'var(--radius-full)',
                fontWeight: 600,
                border: '1px solid rgba(0, 245, 212, 0.25)',
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: 'var(--brand-cyan-neon)',
                  boxShadow: '0 0 8px var(--brand-cyan-neon)',
                }}
              />
              <span>Live Workflow Traceable</span>
            </div>
          </div>

          {/* Workflow Connected Nodes */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(185px, 1fr))',
              gap: '16px',
              position: 'relative',
            }}
          >
            {currentWorkflow.nodes.map((node, i) => (
              <div
                key={node.id}
                style={{
                  background: 'rgba(11, 18, 34, 0.85)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: 'var(--radius-md)',
                  padding: '18px 16px',
                  position: 'relative',
                  boxShadow: '0 10px 25px -10px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.25s ease',
                }}
              >
                {/* Input port dot */}
                <div
                  style={{
                    position: 'absolute',
                    left: '-6px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    background: '#090e1a',
                    border: `2px solid ${node.color}`,
                    boxShadow: `0 0 6px ${node.color}`,
                  }}
                />

                {/* Output port dot */}
                <div
                  style={{
                    position: 'absolute',
                    right: '-6px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    background: '#090e1a',
                    border: `2px solid ${node.color}`,
                    boxShadow: `0 0 6px ${node.color}`,
                  }}
                />

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <span
                    className="mono"
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      color: node.color,
                      textTransform: 'uppercase',
                    }}
                  >
                    {node.type}
                  </span>
                  <span
                    style={{
                      fontSize: '0.68rem',
                      background: 'rgba(255, 255, 255, 0.06)',
                      padding: '2px 6px',
                      borderRadius: '4px',
                      color: 'var(--color-heading-secondary)',
                    }}
                  >
                    {node.badge}
                  </span>
                </div>

                <h4
                  style={{
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    marginBottom: '6px',
                  }}
                >
                  {node.title}
                </h4>

                <p
                  style={{
                    fontSize: '0.8rem',
                    color: 'var(--color-heading-secondary)',
                    lineHeight: 1.45,
                  }}
                >
                  {node.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Workflow Outcome Status Bar */}
          <div
            style={{
              marginTop: '24px',
              padding: '14px 20px',
              background: 'rgba(5, 9, 18, 0.7)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid rgba(0, 210, 255, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <CheckCircle2 size={16} color="var(--brand-cyan-neon)" />
              <span style={{ fontSize: '0.85rem', color: 'var(--color-heading-primary)', fontWeight: 600 }}>
                {currentWorkflow.output}
              </span>
            </div>
            <Link
              href="/how-we-work"
              style={{
                fontSize: '0.82rem',
                color: 'var(--brand-cyan-electric)',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <span>Explore our complete workflow</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>

        {/* n8n Achievement Cards Grid (Top 50 GitHub / 200k+ style) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '20px',
          }}
        >
          <div className="card-n8n-base" style={{ padding: '28px 24px' }}>
            <div className="text-gradient" style={{ fontSize: '2.5rem', fontWeight: 800, lineHeight: 1, marginBottom: '10px' }}>
              90+
            </div>
            <div style={{ fontSize: '1rem', fontWeight: 700, color: '#fff', marginBottom: '6px' }}>
              International Deliveries
            </div>
            <div style={{ fontSize: '0.86rem', color: 'var(--color-heading-secondary)', lineHeight: 1.5 }}>
              Digital products, UI systems & websites delivered for Norwegian businesses across diverse sectors.
            </div>
          </div>

          <div className="card-n8n-base" style={{ padding: '28px 24px' }}>
            <div className="text-gradient" style={{ fontSize: '2.5rem', fontWeight: 800, lineHeight: 1, marginBottom: '10px' }}>
              Imagine Cup
            </div>
            <div style={{ fontSize: '1rem', fontWeight: 700, color: '#fff', marginBottom: '6px' }}>
              SEA Champion & World Finalist
            </div>
            <div style={{ fontSize: '0.86rem', color: 'var(--color-heading-secondary)', lineHeight: 1.5 }}>
              Microsoft Imagine Cup recognition with Habarala — bringing design & technology to solve real problems.
            </div>
          </div>

          <div className="card-n8n-base" style={{ padding: '28px 24px' }}>
            <div className="text-gradient" style={{ fontSize: '2.5rem', fontWeight: 800, lineHeight: 1, marginBottom: '10px' }}>
              Since 2019
            </div>
            <div style={{ fontSize: '1rem', fontWeight: 700, color: '#fff', marginBottom: '6px' }}>
              Continuous Craft & Growth
            </div>
            <div style={{ fontSize: '0.86rem', color: 'var(--color-heading-secondary)', lineHeight: 1.5 }}>
              Evolving from university hackathons and creative communities into a full-service platform.
            </div>
          </div>

          <div className="card-n8n-base" style={{ padding: '28px 24px' }}>
            <div className="text-gradient" style={{ fontSize: '2.5rem', fontWeight: 800, lineHeight: 1, marginBottom: '10px' }}>
              Global
            </div>
            <div style={{ fontSize: '1rem', fontWeight: 700, color: '#fff', marginBottom: '6px' }}>
              Sri Lanka & Norway
            </div>
            <div style={{ fontSize: '0.86rem', color: 'var(--color-heading-secondary)', lineHeight: 1.5 }}>
              Cross-border partnership under Babette opening the door to international client work.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
