'use client';

import { useState } from 'react';
import { Sparkles, Code2, Layers, Cpu, Database, Wrench, Shield, CheckCircle2 } from 'lucide-react';

export default function Technology() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const techCategories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'frontend', label: 'Frontend & Apps' },
    { id: 'ai-automation', label: 'AI & Automation' },
    { id: 'cms', label: 'CMS & Platforms' },
    { id: 'backend', label: 'Backend & APIs' },
  ];

  const technologies = [
    {
      name: 'Next.js',
      category: 'frontend',
      role: 'Full-Stack React Framework',
      desc: 'High performance App Router, SSR, SSG and edge routing for enterprise scale.',
      tag: 'Core Stack',
    },
    {
      name: 'React',
      category: 'frontend',
      role: 'UI Library & Component Systems',
      desc: 'Interactive, reactive state management and modular reusable component architectures.',
      tag: 'Core Stack',
    },
    {
      name: 'AI & Workflows',
      category: 'ai-automation',
      role: 'Intelligent Automations',
      desc: 'LLMs, autonomous workflow pipelines, RAG systems, and AI agent integration.',
      tag: 'Intelligent',
    },
    {
      name: 'WordPress',
      category: 'cms',
      role: 'Tailored CMS & Headless',
      desc: 'Bespoke custom themes, ACF architectures, and headless REST/GraphQL setups.',
      tag: 'Proven CMS',
    },
    {
      name: 'TypeScript',
      category: 'frontend',
      role: 'Type-Safe Systems',
      desc: 'Robust codebases with compile-time type verification and rapid developer velocity.',
      tag: 'Reliability',
    },
    {
      name: 'Node.js',
      category: 'backend',
      role: 'Server Runtime & APIs',
      desc: 'Scalable backend services, webhook handlers, and microservices.',
      tag: 'Backend',
    },
    {
      name: 'Figma',
      category: 'frontend',
      role: 'UX / UI Design Systems',
      desc: 'Pixel-perfect wireframes, design tokens, interactive prototypes, and component libraries.',
      tag: 'Design',
    },
    {
      name: 'Python',
      category: 'ai-automation',
      role: 'Data Science & AI Scripting',
      desc: 'Computer vision, machine learning models, telemetry processing, and automation scripts.',
      tag: 'Data & AI',
    },
    {
      name: 'Automation & APIs',
      category: 'ai-automation',
      role: 'Systems Integration',
      desc: 'Connecting CRM, payment gateways, webhook pipelines, and modern third-party services.',
      tag: 'Integration',
    },
  ];

  const filteredTech =
    selectedCategory === 'all'
      ? technologies
      : technologies.filter((t) => t.category === selectedCategory);

  return (
    <section id="technology" className="section" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Modern Engineering</span>
          </div>
          <h2 className="section-title">
            TECHNOLOGY
          </h2>
          <p className="section-description">
            “There is no favourite technology for the sake of having one. WordPress, React, Next.js, AI, automation
            or something built from scratch, the tools depend on what the project actually needs.”
          </p>
        </div>

        {/* Filter Pills */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '10px',
            marginBottom: '40px',
          }}
        >
          {techCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              style={{
                padding: '8px 18px',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.85rem',
                fontWeight: 600,
                border:
                  selectedCategory === cat.id
                    ? '1px solid var(--cyan-bright)'
                    : '1px solid var(--border-subtle)',
                background:
                  selectedCategory === cat.id
                    ? 'rgba(0, 245, 212, 0.14)'
                    : 'rgba(255, 255, 255, 0.04)',
                color: selectedCategory === cat.id ? '#FFFFFF' : 'var(--text-secondary)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Technologies Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
          }}
        >
          {filteredTech.map((item, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '24px 22px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '12px',
                  }}
                >
                  <h4
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 800,
                      color: 'var(--text-white)',
                    }}
                  >
                    {item.name}
                  </h4>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      color: 'var(--cyan-bright)',
                      background: 'rgba(0, 245, 212, 0.1)',
                      border: '1px solid rgba(0, 245, 212, 0.25)',
                      padding: '3px 8px',
                      borderRadius: 'var(--radius-full)',
                    }}
                  >
                    {item.tag}
                  </span>
                </div>

                <div
                  style={{
                    fontSize: '0.84rem',
                    fontWeight: 600,
                    color: 'var(--cyan-electric)',
                    marginBottom: '8px',
                  }}
                >
                  {item.role}
                </div>

                <p
                  style={{
                    fontSize: '0.88rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.5,
                  }}
                >
                  {item.desc}
                </p>
              </div>

              <div
                style={{
                  marginTop: '18px',
                  paddingTop: '12px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                  fontSize: '0.78rem',
                  color: 'var(--text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <CheckCircle2 size={13} color="var(--cyan-bright)" />
                <span>Production Tested</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
