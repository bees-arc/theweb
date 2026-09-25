'use client';

import { useState } from 'react';
import { Sparkles, ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';

export default function HowWeWork({ onOpenContact }) {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'Understand',
      tagline: 'Discovery, Alignment & Empathy',
      short: 'We learn about your business, users and goals.',
      full: 'Before touching Figma or writing code, we dive deep into the context. We speak with stakeholders, analyze user behavior, understand existing bottlenecks, and articulate the true "why" behind the product.',
      deliverables: ['Stakeholder Discovery Sessions', 'User Persona & Journey Maps', 'Core Objective Definition', 'Competitive Context Audit'],
    },
    {
      num: '02',
      title: 'Define',
      tagline: 'Strategic Direction & Scope',
      short: 'We turn the problem into a clear direction.',
      full: 'Ambiguity kills momentum. We distill insights into a concrete product roadmap, functional specifications, information architecture, and technical feasibility blueprints.',
      deliverables: ['Product Scope & Feature Matrix', 'Information Architecture (IA)', 'Technical Stack Selection', 'Milestone & Delivery Roadmap'],
    },
    {
      num: '03',
      title: 'Design',
      tagline: 'Experience, Interface & Visual System',
      short: 'We create the experience, interface and visual system.',
      full: 'Good design makes complicated things feel natural. We create frictionless wireframes, interactive prototypes, and modular design systems that reflect your brand identity and delight users.',
      deliverables: ['High-Fidelity Wireframes', 'Interactive Figma Prototypes', 'Design System & Component Library', 'Usability Validation Sessions'],
    },
    {
      num: '04',
      title: 'Build',
      tagline: 'Engineering & Craft',
      short: 'We turn the design into a reliable digital product.',
      full: 'We translate finalized interfaces into clean, maintainable, lightning-fast codebases using modern technologies like Next.js, React, and smart AI integrations. Built to scale with confidence.',
      deliverables: ['Production Next.js / React Architecture', 'API Integrations & Backend Services', 'Cross-Device QA & Performance Tuning', 'Pre-Launch Staging & User Testing'],
    },
    {
      num: '05',
      title: 'Improve',
      tagline: 'Launch, Telemetry & Iteration',
      short: 'We launch, learn and keep improving.',
      full: 'The first version doesn\'t have to be perfect—it has to be useful. We launch smoothly, monitor real-world interactions, gather qualitative user feedback, and iterate rapidly to drive continuous value.',
      deliverables: ['Seamless Production Deployment', 'Analytics & Telemetry Monitoring', 'User Feedback Loops', 'Ongoing Feature Optimization'],
    },
  ];

  return (
    <section id="how-we-work" className="section" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Process & Delivery</span>
          </div>
          <h2 className="section-title">
            HOW WE WORK
          </h2>
          <p className="section-description">
            From idea to something people can actually use. A structured, transparent path from discovery to continuous improvement.
          </p>
        </div>

        {/* 5-Step Process Interactive Matrix */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '24px',
            alignItems: 'stretch',
          }}
        >
          {/* Left Column: Vertical Step Navigation */}
          <div
            style={{
              gridColumn: 'span 5',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}
            className="how-steps-nav"
          >
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <div
                  key={step.num}
                  onClick={() => setActiveStep(idx)}
                  className="glass-card"
                  style={{
                    padding: '20px 22px',
                    cursor: 'pointer',
                    background: isActive
                      ? 'linear-gradient(90deg, rgba(0, 210, 255, 0.16) 0%, rgba(14, 24, 46, 0.8) 100%)'
                      : 'rgba(12, 19, 35, 0.5)',
                    border: isActive
                      ? '1px solid rgba(0, 245, 212, 0.6)'
                      : '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    transition: 'all 0.25s ease',
                    boxShadow: isActive ? '0 0 20px rgba(0, 210, 255, 0.2)' : 'none',
                    transform: isActive ? 'translateX(6px)' : 'none',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <span
                      className="mono"
                      style={{
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        color: isActive ? 'var(--cyan-bright)' : 'var(--text-muted)',
                      }}
                    >
                      {step.num}
                    </span>
                    <div>
                      <h4
                        style={{
                          fontSize: '1.05rem',
                          fontWeight: 700,
                          color: isActive ? '#FFFFFF' : 'var(--text-primary)',
                          marginBottom: '2px',
                        }}
                      >
                        {step.title}
                      </h4>
                      <p
                        style={{
                          fontSize: '0.8rem',
                          color: isActive ? 'var(--text-secondary)' : 'var(--text-muted)',
                        }}
                      >
                        {step.short}
                      </p>
                    </div>
                  </div>
                  <ChevronRight
                    size={18}
                    color={isActive ? 'var(--cyan-bright)' : 'var(--text-muted)'}
                    style={{
                      transform: isActive ? 'translateX(2px)' : 'none',
                      transition: 'transform 0.2s ease',
                    }}
                  />
                </div>
              );
            })}
          </div>

          {/* Right Column: Active Step Deep Dive Card */}
          <div
            style={{
              gridColumn: 'span 7',
            }}
            className="how-steps-detail"
          >
            <div
              className="glass-card"
              style={{
                height: '100%',
                padding: '40px 36px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                background: 'linear-gradient(180deg, rgba(16, 27, 50, 0.9) 0%, rgba(9, 15, 29, 0.95) 100%)',
                border: '1px solid rgba(0, 210, 255, 0.35)',
                boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 210, 255, 0.15)',
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '20px',
                  }}
                >
                  <span
                    className="mono"
                    style={{
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: 'var(--cyan-bright)',
                      background: 'rgba(0, 245, 212, 0.1)',
                      padding: '4px 12px',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid rgba(0, 245, 212, 0.3)',
                    }}
                  >
                    PHASE {steps[activeStep].num}
                  </span>
                  <span
                    style={{
                      fontSize: '0.82rem',
                      color: 'var(--text-secondary)',
                      fontWeight: 600,
                    }}
                  >
                    {steps[activeStep].tagline}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: '2.2rem',
                    fontWeight: 800,
                    color: 'var(--text-white)',
                    marginBottom: '16px',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {steps[activeStep].num} — {steps[activeStep].title}
                </h3>

                <p
                  style={{
                    fontSize: '1.15rem',
                    fontWeight: 500,
                    color: 'var(--cyan-electric)',
                    marginBottom: '16px',
                    lineHeight: 1.5,
                  }}
                >
                  "{steps[activeStep].short}"
                </p>

                <p
                  style={{
                    fontSize: '0.98rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.7,
                    marginBottom: '32px',
                  }}
                >
                  {steps[activeStep].full}
                </p>

                {/* Key Deliverables */}
                <div>
                  <h5
                    style={{
                      fontSize: '0.8rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: 'var(--text-muted)',
                      fontWeight: 700,
                      marginBottom: '16px',
                    }}
                  >
                    Key Outcomes & Milestones
                  </h5>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                      gap: '12px',
                    }}
                  >
                    {steps[activeStep].deliverables.map((item, i) => (
                      <div
                        key={i}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          padding: '10px 14px',
                          background: 'rgba(255, 255, 255, 0.03)',
                          borderRadius: 'var(--radius-sm)',
                          border: '1px solid rgba(255, 255, 255, 0.06)',
                          fontSize: '0.88rem',
                          color: 'var(--text-primary)',
                        }}
                      >
                        <CheckCircle2 size={15} color="var(--cyan-bright)" style={{ flexShrink: 0 }} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Quick CTA */}
              <div
                style={{
                  marginTop: '36px',
                  paddingTop: '24px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '12px',
                }}
              >
                <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                  Step {activeStep + 1} of 5 in our delivery lifecycle
                </div>
                <button
                  onClick={onOpenContact}
                  className="btn btn-primary btn-anim-arrow"
                  style={{
                    padding: '10px 20px',
                    fontSize: '0.9rem',
                    borderRadius: 'var(--radius-md)',
                  }}
                >
                  <span>Start with Phase 01</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .how-steps-nav {
            grid-column: span 12 !important;
          }
          .how-steps-detail {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </section>
  );
}
