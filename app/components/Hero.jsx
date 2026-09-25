'use client';

import { useState } from 'react';
import { ArrowRight, Sparkles, CheckCircle2, Layers, Cpu, Compass, Play, RefreshCw } from 'lucide-react';

export default function Hero({ onOpenContact }) {
  const [activeNode, setActiveNode] = useState(2); // 0 to 4

  const workflowSteps = [
    {
      id: 0,
      step: '01',
      title: 'Understand',
      desc: 'We learn about your business, users and goals.',
      icon: Compass,
      tag: 'Discovery & Research',
      detail: 'Stakeholder interviews, user empathy mapping, and identifying the true "why" before writing a line of code.',
    },
    {
      id: 1,
      step: '02',
      title: 'Define',
      desc: 'We turn the problem into a clear direction.',
      icon: Sparkles,
      tag: 'Strategy & Scope',
      detail: 'Formulating core user stories, technical architecture, and a focused product roadmap.',
    },
    {
      id: 2,
      step: '03',
      title: 'Design',
      desc: 'We create the experience, interface and visual system.',
      icon: Layers,
      tag: 'UX / UI & Design System',
      detail: 'Crafting responsive prototypes, accessible components, and a brand system that feels effortless to use.',
    },
    {
      id: 3,
      step: '04',
      title: 'Build',
      desc: 'We turn the design into a reliable digital product.',
      icon: Cpu,
      tag: 'Next.js, React & AI',
      detail: 'Engineering high-performance web applications, clean API integrations, and robust codebases.',
    },
    {
      id: 4,
      step: '05',
      title: 'Improve',
      desc: 'We launch, learn and keep improving.',
      icon: RefreshCw,
      tag: 'Telemetry & Evolution',
      detail: 'Analyzing user feedback in production, iterating on metrics, and continuous optimization.',
    },
  ];

  return (
    <section
      style={{
        position: 'relative',
        paddingTop: '160px',
        paddingBottom: '100px',
        overflow: 'hidden',
      }}
    >
      {/* Background Radial Glow */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '800px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(0, 210, 255, 0.16) 0%, rgba(0, 245, 212, 0.05) 45%, transparent 70%)',
          filter: 'blur(70px)',
          zIndex: -1,
          pointerEvents: 'none',
        }}
      />

      <div className="container">
        {/* Hero Top Copy */}
        <div style={{ textAlign: 'center', maxWidth: '880px', margin: '0 auto 48px' }}>
          {/* Eyebrow Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: 'var(--radius-full)',
              background: 'rgba(0, 210, 255, 0.08)',
              border: '1px solid rgba(0, 210, 255, 0.28)',
              boxShadow: '0 0 20px rgba(0, 210, 255, 0.15)',
              marginBottom: '28px',
            }}
          >
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: 'var(--cyan-bright)',
                boxShadow: '0 0 10px var(--cyan-bright)',
              }}
            />
            <span
              style={{
                fontSize: '0.82rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--cyan-bright)',
              }}
            >
              Theweb Agency · Digital Products & UX Studio
            </span>
          </div>

          {/* Main Headline */}
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 5.5vw, 4.4rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.035em',
              color: 'var(--text-white)',
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
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              maxWidth: '720px',
              margin: '0 auto 36px',
            }}
          >
            We turn rough sketches, ambitious ideas, and complex business problems into
            intuitive digital products, modern high-performance websites, and lasting brand experiences.
          </p>

          {/* Call to Actions */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              flexWrap: 'wrap',
            }}
          >
            <button
              onClick={onOpenContact}
              className="btn btn-primary btn-anim-arrow"
              style={{
                padding: '14px 28px',
                fontSize: '1rem',
                borderRadius: 'var(--radius-md)',
              }}
            >
              <span>Have something in mind? Let's build it</span>
              <ArrowRight size={18} />
            </button>
            <a
              href="#approach"
              className="btn btn-secondary"
              style={{
                padding: '14px 26px',
                fontSize: '1rem',
                borderRadius: 'var(--radius-md)',
              }}
            >
              <span>Theweb Approach</span>
            </a>
          </div>
        </div>

        {/* n8n-Style Interactive Workflow Canvas */}
        <div
          className="glass-card"
          style={{
            padding: '32px 24px',
            borderRadius: 'var(--radius-xl)',
            border: '1px solid rgba(0, 210, 255, 0.22)',
            background: 'linear-gradient(180deg, rgba(14, 23, 44, 0.85) 0%, rgba(8, 13, 25, 0.95) 100%)',
            boxShadow: '0 30px 60px -20px rgba(0, 0, 0, 0.8), 0 0 50px rgba(0, 210, 255, 0.1)',
            marginBottom: '40px',
          }}
        >
          {/* Canvas Header bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              paddingBottom: '20px',
              marginBottom: '28px',
              flexWrap: 'wrap',
              gap: '12px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#EF4444' }} />
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#F59E0B' }} />
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10B981' }} />
              <span
                style={{
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: 'var(--text-secondary)',
                  marginLeft: '8px',
                }}
              >
                Theweb Production Engine · Dynamic Product Canvas
              </span>
            </div>
            <div
              style={{
                fontSize: '0.8rem',
                color: 'var(--cyan-electric)',
                background: 'rgba(0, 210, 255, 0.1)',
                padding: '4px 12px',
                borderRadius: 'var(--radius-full)',
                fontWeight: 600,
              }}
            >
              Interactive: Click any stage to inspect
            </div>
          </div>

          {/* Connected Workflow Nodes */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '16px',
              position: 'relative',
            }}
          >
            {workflowSteps.map((node, index) => {
              const IconComp = node.icon;
              const isActive = activeNode === index;
              return (
                <div
                  key={node.id}
                  onClick={() => setActiveNode(index)}
                  style={{
                    background: isActive
                      ? 'linear-gradient(180deg, rgba(0, 210, 255, 0.18) 0%, rgba(14, 26, 50, 0.8) 100%)'
                      : 'rgba(17, 28, 52, 0.5)',
                    border: isActive
                      ? '1px solid rgba(0, 245, 212, 0.7)'
                      : '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: 'var(--radius-md)',
                    padding: '20px 18px',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    boxShadow: isActive
                      ? '0 0 25px rgba(0, 210, 255, 0.35), inset 0 1px 0 rgba(255,255,255,0.2)'
                      : 'none',
                    transform: isActive ? 'scale(1.02)' : 'scale(1)',
                    position: 'relative',
                  }}
                >
                  {/* Step pill */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '12px',
                    }}
                  >
                    <span
                      className="mono"
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        color: isActive ? 'var(--cyan-bright)' : 'var(--text-muted)',
                      }}
                    >
                      {node.step}
                    </span>
                    <div
                      style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '6px',
                        background: isActive ? 'var(--brand-gradient)' : 'rgba(255, 255, 255, 0.06)',
                        color: isActive ? '#050811' : 'var(--text-secondary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <IconComp size={15} />
                    </div>
                  </div>

                  <h3
                    style={{
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      color: isActive ? '#FFFFFF' : 'var(--text-primary)',
                      marginBottom: '6px',
                    }}
                  >
                    {node.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.85rem',
                      color: isActive ? '#D1DFEC' : 'var(--text-secondary)',
                      lineHeight: 1.45,
                    }}
                  >
                    {node.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Active Node Detail Inspector Bar */}
          <div
            style={{
              marginTop: '24px',
              padding: '16px 20px',
              background: 'rgba(5, 10, 20, 0.65)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid rgba(0, 210, 255, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span
                style={{
                  display: 'inline-block',
                  padding: '4px 10px',
                  background: 'var(--brand-gradient)',
                  color: '#050811',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                }}
              >
                ACTIVE INSPECTOR · {workflowSteps[activeNode].step} {workflowSteps[activeNode].title}
              </span>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                {workflowSteps[activeNode].detail}
              </span>
            </div>
            <a
              href="#how-we-work"
              style={{
                fontSize: '0.85rem',
                color: 'var(--cyan-electric)',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <span>View full process</span>
              <ArrowRight size={14} />
            </a>
          </div>
        </div>

        {/* n8n Style Social Proof & Achievement Metrics */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '16px',
          }}
        >
          <div className="glass-card" style={{ padding: '24px' }}>
            <div
              className="text-gradient"
              style={{ fontSize: '2.5rem', fontWeight: 800, lineHeight: 1, marginBottom: '8px' }}
            >
              90+
            </div>
            <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-white)', marginBottom: '4px' }}>
              International Projects
            </div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
              Delivered UX, digital systems & web products for Norwegian businesses and global teams.
            </div>
          </div>

          <div className="glass-card" style={{ padding: '24px' }}>
            <div
              className="text-gradient"
              style={{ fontSize: '2.5rem', fontWeight: 800, lineHeight: 1, marginBottom: '8px' }}
            >
              Imagine Cup
            </div>
            <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-white)', marginBottom: '4px' }}>
              SEA Champion & World Finalist
            </div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
              Microsoft Imagine Cup recognition with Habarala — bringing design & technology to solve real problems.
            </div>
          </div>

          <div className="glass-card" style={{ padding: '24px' }}>
            <div
              className="text-gradient"
              style={{ fontSize: '2.5rem', fontWeight: 800, lineHeight: 1, marginBottom: '8px' }}
            >
              Since 2019
            </div>
            <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-white)', marginBottom: '4px' }}>
              Curiosity & Digital Craft
            </div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
              Evolving from university hackathons and creative communities into a full-service platform.
            </div>
          </div>

          <div className="glass-card" style={{ padding: '24px' }}>
            <div
              className="text-gradient"
              style={{ fontSize: '2.5rem', fontWeight: 800, lineHeight: 1, marginBottom: '8px' }}
            >
              Global
            </div>
            <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-white)', marginBottom: '4px' }}>
              Sri Lanka & Norway
            </div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
              Cross-border collaboration opening doors to international digital execution and standards.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
