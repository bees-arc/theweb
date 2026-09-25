'use client';

import { useState } from 'react';
import { ArrowRight, Laptop, Globe, Palette, CheckCircle2, Code2, Sparkles, Layers } from 'lucide-react';

export default function WhatWeDo({ onOpenContact }) {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 0,
      title: 'Digital Products',
      tagline: 'Web Apps, SaaS & Scalable Tools',
      icon: Laptop,
      description:
        'We turn complex business logic into intuitive, high-performance web applications and digital products. Designed with humans in mind, engineered for resilience and growth.',
      capabilities: [
        'Custom Web Applications & Portals',
        'MVP Development & Rapid Prototyping',
        'AI & Workflow Automation Integration',
        'Interactive User Dashboards',
        'API Architecture & Modern Integrations',
        'User-Centered Product Architecture',
      ],
      deliverable: 'Scalable, battle-tested software people actually use daily.',
      highlight: 'Engineered for Real-World Utility',
    },
    {
      id: 1,
      title: 'Websites',
      tagline: 'High-Impact Digital Flagships',
      icon: Globe,
      description:
        'Fast, responsive, and visually stunning web experiences that communicate your value proposition clearly and turn visitors into loyal advocates.',
      capabilities: [
        'Bespoke Brand & Agency Websites',
        'Next.js & React Jamstack Architecture',
        'Modern WordPress & Headless CMS',
        'Lightning Page Load Speed & Core Web Vitals',
        'Interactive Micro-Animations & 3D Elements',
        'Technical SEO & Conversion Optimization',
      ],
      deliverable: 'A digital storefront that commands credibility and drives results.',
      highlight: 'Next.js, React & Modern CMS',
    },
    {
      id: 2,
      title: 'Brand & Experience',
      tagline: 'UI/UX Design Systems & Identity',
      icon: Palette,
      description:
        'Good design should make complicated things feel simple. We craft coherent visual languages, seamless interfaces, and design systems that build enduring trust.',
      capabilities: [
        'UX Research & User Journey Mapping',
        'Scalable UI Design Systems (Figma)',
        'Visual Identity & Brand Guidelines',
        'Interactive Motion & Prototyping',
        'Information Architecture & Usability Testing',
        'Cross-Platform Design Consistency',
      ],
      deliverable: 'A distinctive identity and friction-free user journeys.',
      highlight: 'Making Complicated Things Simple',
    },
  ];

  return (
    <section id="what-we-do" className="section" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Core Capabilities</span>
          </div>
          <h2 className="section-title">
            WHAT WE DO
          </h2>
          <p className="section-description">
            We partner with businesses to build digital products, websites, and brand experiences
            that solve real challenges with clarity, precision, and purpose.
          </p>
        </div>

        {/* 3 Bento Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
            marginBottom: '40px',
          }}
        >
          {services.map((service, idx) => {
            const IconComponent = service.icon;
            const isHovered = activeService === idx;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setActiveService(idx)}
                className="glass-card"
                style={{
                  padding: '36px 30px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  border: isHovered
                    ? '1px solid rgba(0, 210, 255, 0.45)'
                    : '1px solid var(--border-subtle)',
                  background: isHovered
                    ? 'linear-gradient(180deg, rgba(16, 27, 50, 0.85) 0%, rgba(9, 14, 27, 0.95) 100%)'
                    : 'var(--bg-card)',
                  boxShadow: isHovered ? 'var(--card-shadow-active)' : 'var(--card-shadow)',
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                <div>
                  {/* Top Bar: Icon + Highlight Badge */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '24px',
                    }}
                  >
                    <div
                      style={{
                        width: '52px',
                        height: '52px',
                        borderRadius: 'var(--radius-md)',
                        background: 'linear-gradient(135deg, rgba(0, 245, 212, 0.15) 0%, rgba(0, 132, 255, 0.15) 100%)',
                        border: '1px solid rgba(0, 210, 255, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--cyan-bright)',
                      }}
                    >
                      <IconComponent size={26} />
                    </div>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        padding: '4px 10px',
                        borderRadius: 'var(--radius-full)',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        color: 'var(--cyan-electric)',
                      }}
                    >
                      {service.highlight}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3
                    style={{
                      fontSize: '1.65rem',
                      fontWeight: 800,
                      color: 'var(--text-white)',
                      marginBottom: '6px',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {service.title}
                  </h3>
                  <div
                    style={{
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      color: 'var(--cyan-electric)',
                      marginBottom: '16px',
                    }}
                  >
                    {service.tagline}
                  </div>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: '0.95rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                      marginBottom: '24px',
                    }}
                  >
                    {service.description}
                  </p>

                  {/* Capabilities List */}
                  <div style={{ marginBottom: '28px' }}>
                    <div
                      style={{
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        color: 'var(--text-muted)',
                        marginBottom: '12px',
                      }}
                    >
                      What We Deliver
                    </div>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {service.capabilities.map((cap, i) => (
                        <li
                          key={i}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            fontSize: '0.88rem',
                            color: 'var(--text-primary)',
                          }}
                        >
                          <CheckCircle2 size={15} color="var(--cyan-bright)" style={{ flexShrink: 0 }} />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Action */}
                <div
                  style={{
                    paddingTop: '20px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    Ready to build?
                  </span>
                  <button
                    onClick={onOpenContact}
                    className="btn btn-secondary btn-anim-arrow"
                    style={{
                      padding: '8px 16px',
                      fontSize: '0.85rem',
                      borderRadius: 'var(--radius-sm)',
                    }}
                  >
                    <span>Discuss Scope</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
