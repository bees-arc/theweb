'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Laptop, Globe, Palette, CheckCircle2, Sparkles } from 'lucide-react';

export default function WhatWeDo() {
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
          <div className="n8n-badge">
            <Sparkles size={13} />
            <span>Capabilities & Services</span>
          </div>
          <h2 className="section-title">
            WHAT WE DO
          </h2>
          <p className="section-description">
            We partner with businesses to build digital products, websites, and brand experiences
            that solve real challenges with clarity, precision, and purpose.
          </p>
        </div>

        {/* 3 Bento Cards with n8n base card styling */}
        <div className="what-we-do-grid">
          {services.map((service, idx) => {
            const IconComponent = service.icon;
            const isHovered = activeService === idx;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setActiveService(idx)}
                className="card-n8n-base"
                style={{
                  padding: '36px 30px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  border: isHovered
                    ? '1px solid rgba(0, 245, 212, 0.45)'
                    : '1px solid rgba(255, 255, 255, 0.1)',
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
                        border: '1px solid rgba(0, 210, 255, 0.35)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--brand-cyan-neon)',
                        boxShadow: '0 0 20px rgba(0, 210, 255, 0.2)',
                      }}
                    >
                      <IconComponent size={26} />
                    </div>
                    <span
                      style={{
                        fontSize: '0.74rem',
                        fontWeight: 700,
                        padding: '4px 10px',
                        borderRadius: 'var(--radius-full)',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        color: 'var(--brand-cyan-electric)',
                      }}
                    >
                      {service.highlight}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3
                    style={{
                      fontSize: '1.75rem',
                      fontWeight: 800,
                      color: '#FFFFFF',
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
                      color: 'var(--brand-cyan-electric)',
                      marginBottom: '16px',
                    }}
                  >
                    {service.tagline}
                  </div>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: '0.94rem',
                      color: 'var(--color-heading-secondary)',
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
                        fontSize: '0.76rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        color: 'var(--color-text-muted)',
                        marginBottom: '14px',
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
                            color: '#FFFFFF',
                          }}
                        >
                          <CheckCircle2 size={15} color="var(--brand-cyan-neon)" style={{ flexShrink: 0 }} />
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
                  <span style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>
                    Ready to build?
                  </span>
                  <Link
                    href="/contact"
                    className="btn btn-secondary btn-anim-arrow"
                    style={{
                      padding: '8px 16px',
                      fontSize: '0.84rem',
                      borderRadius: 'var(--radius-full)',
                    }}
                  >
                    <span className="btn-label">Discuss Scope</span>
                    <span className="btn-icon">
                      <ArrowRight size={13} />
                    </span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
