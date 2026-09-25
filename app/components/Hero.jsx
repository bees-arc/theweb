'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles, CheckCircle2, ChevronRight, Compass, Layers, Cpu, RefreshCw } from 'lucide-react';

export default function Hero() {
  const [activeTab, setActiveTab] = useState(0);

  const workflowTabs = [
    {
      id: 0,
      title: 'Digital Products',
      subtitle: 'Build scalable web apps & intelligent SaaS',
      action: 'Turn complex logic into intuitive digital products',
      nodes: [
        { id: '1', title: 'User Need', type: 'Input', color: '#00F5D4', desc: 'Identify core pain points & user goals' },
        { id: '2', title: 'Architecture', type: 'Logic', color: '#00D2FF', desc: 'Map technical data flow & state' },
        { id: '3', title: 'Next.js App', type: 'Frontend', color: '#0084FF', desc: 'Reactive UI & server components' },
        { id: '4', title: 'AI Automation', type: 'Pipeline', color: '#00F5D4', desc: 'Autonomous background workflow' },
        { id: '5', title: 'Live Product', type: 'Deploy', color: '#10B981', desc: 'Delivered for daily human utility' },
      ],
      output: '99.9% Uptime · Sub-second Latency · High User Adoption',
    },
    {
      id: 1,
      title: 'Websites',
      subtitle: 'Fast, high-conversion brand flagships',
      action: 'Convert visitors with lightning speed & clarity',
      nodes: [
        { id: '1', title: 'Brand Message', type: 'Strategy', color: '#00F5D4', desc: 'Articulate unique value proposition' },
        { id: '2', title: 'Design System', type: 'Tokens', color: '#00D2FF', desc: 'Aesthetic modern typography & layout' },
        { id: '3', title: 'Jamstack Next.js', type: 'Build', color: '#0084FF', desc: 'Zero bloat, pure Core Web Vitals' },
        { id: '4', title: 'Headless CMS', type: 'Content', color: '#00F5D4', desc: 'Empower marketing team autonomy' },
        { id: '5', title: 'Global Launch', type: 'Edge', color: '#10B981', desc: 'Instant conversion-ready presence' },
      ],
      output: '100% Lighthouse Performance · SEO Optimized · High Conversion',
    },
    {
      id: 2,
      title: 'Brand & Experience',
      subtitle: 'Make complicated systems feel intuitive',
      action: 'Design interfaces where every element has a reason to exist',
      nodes: [
        { id: '1', title: 'User Research', type: 'Discovery', color: '#00F5D4', desc: 'Uncover psychological user motivations' },
        { id: '2', title: 'Figma System', type: 'Tokens', color: '#00D2FF', desc: 'Modular design system & component library' },
        { id: '3', title: 'Micro-Motion', type: 'Prototype', color: '#0084FF', desc: 'Delightful kinetic feedback on clicks' },
        { id: '4', title: 'Usability Audit', type: 'Validation', color: '#00F5D4', desc: 'Refine until zero cognitive friction remains' },
        { id: '5', title: 'Design Handoff', type: 'Handoff', color: '#10B981', desc: 'Seamless engineering alignment' },
      ],
      output: 'Eliminates Cognitive Friction · Builds Lasting User Trust',
    },
    {
      id: 3,
      title: 'How We Work',
      subtitle: 'From idea to something people can actually use',
      action: '01 Understand ➔ 02 Define ➔ 03 Design ➔ 04 Build ➔ 05 Improve',
      nodes: [
        { id: '1', title: '01 Understand', type: 'Research', color: '#00F5D4', desc: 'We learn about your business, users and goals' },
        { id: '2', title: '02 Define', type: 'Strategy', color: '#00D2FF', desc: 'We turn the problem into a clear direction' },
        { id: '3', title: '03 Design', type: 'Interface', color: '#0084FF', desc: 'We create the experience and visual system' },
        { id: '4', title: '04 Build', type: 'Engineering', color: '#00F5D4', desc: 'We turn design into a reliable digital product' },
        { id: '5', title: '05 Improve', type: 'Iteration', color: '#10B981', desc: 'We launch, learn and keep improving' },
      ],
      output: 'Predictable Timelines · Total Transparency · Continuous Value',
    },
  ];

  const currentWorkflow = workflowTabs[activeTab];

  return (
    <section className="hero-section" style={{ position: 'relative', paddingTop: 'clamp(100px, 14vw, 150px)', paddingBottom: '80px', overflow: 'hidden' }}>
      <div className="n8n-grid-bg" />

      {/* n8n Radial Glow Backlight */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(0, 210, 255, 0.18) 0%, rgba(0, 245, 212, 0.08) 45%, transparent 70%)',
          filter: 'blur(90px)',
          zIndex: -1,
          pointerEvents: 'none',
        }}
      />

      <div className="container">
        {/* ========================================================
            PART 1: TWO-COLUMN HERO MATCHING N8N.IO EXACTLY
           ======================================================== */}
        <div className="hero-main-grid">
          {/* Left Column: Headlines, Buttons, then Subtext */}
          <div style={{ gridColumn: 'span 7' }} className="hero-left-col">
            <h1
              style={{
                fontSize: 'clamp(2.8rem, 5.2vw, 4.4rem)',
                fontWeight: 800,
                lineHeight: 1.12,
                letterSpacing: '-0.035em',
                color: '#FFFFFF',
                marginBottom: '32px',
              }}
            >
              Technology should be useful. <br />
              <span className="text-gradient">
                From idea to something people can actually use.
              </span>
            </h1>

            {/* Dual CTA Buttons placed DIRECTLY below headline like n8n.io */}
            <div className="hero-cta-group">
              <Link
                href="/contact"
                className="hero-btn-main"
              >
                <span className="hero-btn-text-desktop">Have something in mind? Let's build it</span>
                <span className="hero-btn-text-mobile">Start your project</span>
                <ArrowRight size={16} />
              </Link>

              <Link
                href="/how-we-work#approach"
                className="hero-btn-sub"
              >
                Theweb Approach
              </Link>
            </div>

            {/* Description Paragraph PLACED BELOW BUTTONS exactly like n8n */}
            <p
              style={{
                fontSize: '1.08rem',
                color: 'var(--color-heading-secondary)',
                lineHeight: 1.7,
                maxWidth: '600px',
              }}
            >
              We turn rough sketches, ambitious ideas, and complex business problems into intuitive digital products,
              modern high-performance websites, and lasting brand experiences. Every step of reasoning, traceable on the canvas.
            </p>
          </div>

          {/* Right Column: 3D Glowing Glass TW Monogram (Seamlessly Blended into Hero) */}
          <div
            style={{
              gridColumn: 'span 5',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}
            className="hero-right-col"
          >
            {/* Ambient cyan/azure glow behind the monogram */}
            <div
              style={{
                position: 'absolute',
                width: '420px',
                height: '420px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(0, 245, 212, 0.18) 0%, rgba(0, 132, 255, 0.09) 45%, transparent 70%)',
                filter: 'blur(60px)',
                pointerEvents: 'none',
                zIndex: 0,
              }}
            />

            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '460px',
                aspectRatio: '1/1',
                zIndex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                animation: 'floatSlow 7s ease-in-out infinite',
              }}
            >
              <Image
                src="/hero-logo-transparent.webp"
                alt="Theweb 3D Monogram Motif"
                fill
                sizes="(max-width: 768px) 100vw, 460px"
                style={{
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 0 35px rgba(0, 245, 212, 0.35)) drop-shadow(0 20px 45px rgba(0, 0, 0, 0.7))',
                }}
                priority
              />
            </div>
          </div>
        </div>

        {/* ========================================================
            PART 2: CLIENT / SOCIAL PROOF RIBBON MATCHING N8N.IO
           ======================================================== */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '24px 0',
            marginBottom: '72px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px',
          }}
        >
          <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', fontWeight: 600, maxWidth: '220px' }}>
            Purposeful technology & digital products trusted across:
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '36px',
              flexWrap: 'wrap',
            }}
          >
            <span style={{ fontSize: '1.05rem', fontWeight: 800, color: 'rgba(255, 255, 255, 0.7)', letterSpacing: '0.04em' }}>
              MICROSOFT IMAGINE CUP
            </span>
            <span style={{ fontSize: '1.05rem', fontWeight: 800, color: 'rgba(255, 255, 255, 0.7)', letterSpacing: '0.04em' }}>
              NORWEGIAN ENTERPRISES
            </span>
            <span style={{ fontSize: '1.05rem', fontWeight: 800, color: 'rgba(255, 255, 255, 0.7)', letterSpacing: '0.04em' }}>
              GLOBAL CLIENT NETWORK
            </span>
            <span style={{ fontSize: '1.05rem', fontWeight: 800, color: 'rgba(255, 255, 255, 0.7)', letterSpacing: '0.04em' }}>
              NEXT.JS PLATFORMS
            </span>
          </div>
        </div>

        {/* ========================================================
            PART 3: N8N.IO WORKFLOW VIEWER WITH VERTICAL TABS
           ======================================================== */}
        <div className="card-n8n-spark hero-viewer-card">
          <div className="hero-viewer-grid">
            {/* Left Column: Vertical Tabs with Red/Cyan Accent Indicator */}
            <div className="viewer-tabs-col">
              {workflowTabs.map((tab, idx) => {
                const isActive = activeTab === idx;
                return (
                  <div
                    key={tab.id}
                    onClick={() => setActiveTab(idx)}
                    className={`viewer-tab-item ${isActive ? 'active' : ''}`}
                  >
                    <div style={{ fontSize: '1.1rem', fontWeight: 800, color: isActive ? '#FFFFFF' : 'var(--color-heading-secondary)', marginBottom: '4px' }}>
                      <strong>{tab.title}</strong> can
                    </div>
                    <div style={{ fontSize: '0.84rem', color: isActive ? 'var(--brand-cyan-electric)' : 'var(--color-text-muted)' }}>
                      {tab.subtitle}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Column: Node Canvas Simulator */}
            <div className="viewer-canvas-col">
              {/* Canvas Action Bar */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                  paddingBottom: '14px',
                  marginBottom: '20px',
                }}
              >
                <div style={{ fontSize: '0.84rem', fontWeight: 600, color: 'var(--color-heading-primary)' }}>
                  Interactive Workflow: <span style={{ color: 'var(--brand-cyan-neon)' }}>{currentWorkflow.action}</span>
                </div>
                <span
                  style={{
                    fontSize: '0.74rem',
                    background: 'rgba(0, 245, 212, 0.1)',
                    color: 'var(--brand-cyan-neon)',
                    padding: '3px 10px',
                    borderRadius: 'var(--radius-full)',
                    fontWeight: 700,
                  }}
                >
                  Live Canvas
                </span>
              </div>

              {/* Node Sequence */}
              <div className="workflow-nodes-grid">
                {currentWorkflow.nodes.map((node) => (
                  <div
                    key={node.id}
                    style={{
                      background: 'rgba(14, 22, 42, 0.9)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      borderRadius: '10px',
                      padding: '14px 12px',
                      position: 'relative',
                      boxShadow: '0 8px 20px -8px rgba(0, 0, 0, 0.7)',
                    }}
                  >
                    {/* Left port */}
                    <div
                      style={{
                        position: 'absolute',
                        left: '-5px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: '#090e1a',
                        border: `2px solid ${node.color}`,
                      }}
                    />
                    {/* Right port */}
                    <div
                      style={{
                        position: 'absolute',
                        right: '-5px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: '#090e1a',
                        border: `2px solid ${node.color}`,
                      }}
                    />

                    <div style={{ fontSize: '0.68rem', color: node.color, fontWeight: 700, marginBottom: '4px', textTransform: 'uppercase' }}>
                      {node.type}
                    </div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '4px' }}>
                      {node.title}
                    </div>
                    <div style={{ fontSize: '0.74rem', color: 'var(--color-heading-secondary)', lineHeight: 1.35 }}>
                      {node.desc}
                    </div>
                  </div>
                ))}
              </div>

              {/* Output status bar */}
              <div
                style={{
                  padding: '12px 16px',
                  background: 'rgba(0, 210, 255, 0.06)',
                  border: '1px solid rgba(0, 210, 255, 0.2)',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '8px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: '#fff', fontWeight: 600 }}>
                  <CheckCircle2 size={15} color="var(--brand-cyan-neon)" />
                  <span>{currentWorkflow.output}</span>
                </div>
                <Link
                  href="/how-we-work"
                  style={{
                    fontSize: '0.8rem',
                    color: 'var(--brand-cyan-neon)',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  <span>Explore 5-step process</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
