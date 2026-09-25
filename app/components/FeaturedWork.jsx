'use client';

import Link from 'next/link';
import { Sparkles, ArrowRight, Award } from 'lucide-react';

export default function FeaturedWork({ onSelectCaseStudy }) {
  const caseStudies = [
    {
      id: 'habarala',
      title: 'Habarala — Microsoft Imagine Cup SEA Champion & World Finalist',
      tag: 'Global Finalist · AgriTech & UX',
      client: 'Microsoft Imagine Cup / Regional Venture',
      period: '2021–2022',
      summary:
        'A landmark product bringing together design, IoT, and mobile UX to address critical agricultural problems in Sri Lanka, earning Southeast Asia Champion and World Finalist honors at Microsoft Imagine Cup.',
      problem:
        'Smallholder farmers faced severe crop disease outbreaks and unpredictability, lacking accessible diagnostic tools and actionable remediation guidance in local languages.',
      solution:
        'We designed and built Habarala: an intuitive mobile product combining real-world sensor telemetry, computer vision diagnostics, and empathetic local-language UX tailored for low-bandwidth environments.',
      results: [
        'Microsoft Imagine Cup Southeast Asia Champion',
        'Microsoft Imagine Cup Global World Finalist',
        'Empowered real-world diagnostic workflows for farming communities',
        'Marked a defining turning point: technology became about what could be solved',
      ],
      techStack: ['React Native', 'Computer Vision', 'IoT Telemetry', 'Cloud APIs', 'Figma Design System'],
      metrics: 'World Finalist Recognition',
    },
    {
      id: 'norway-ecosystems',
      title: 'Norwegian Enterprise Digital Ecosystems (90+ Projects)',
      tag: 'International · UX Systems & Platforms',
      client: 'Norwegian Businesses & Cross-Border Partners',
      period: '2022–2023',
      summary:
        'Over 90 international digital design, website, and UX engagements delivered for businesses across Norway, establishing a high-trust pipeline between Sri Lankan talent and European standards.',
      problem:
        'Norwegian companies needed fast, reliable, design-led digital transformations with rigorous European UI/UX standards, rapid iterations, and seamless remote collaboration.',
      solution:
        'Delivered complete UX architectures, responsive frontends, bespoke design tokens, and modular digital touchpoints tailored for Nordic markets, adhering to accessibility and crisp Scandinavian design ethics.',
      results: [
        '90+ successful international deliverables completed',
        'High retention and repeat client collaborations',
        'Validated cross-border digital product capability from Sri Lanka',
        'Paved the foundation for establishing Theweb Agency',
      ],
      techStack: ['Next.js', 'React', 'Figma', 'TypeScript', 'WordPress Headless', 'Tailored UI Systems'],
      metrics: '90+ Delivered Projects',
    },
    {
      id: 'digital-products-platforms',
      title: 'Modern Digital Products, Web Apps & AI Automations',
      tag: 'Full-Stack · Next.js & AI Workflow',
      client: 'Global Businesses & Fast-Moving Founders',
      period: '2023–Present',
      summary:
        'End-to-end digital tools, custom dashboards, and intelligent web applications built on Next.js with integrated AI workflows and high-converting interfaces.',
      problem:
        'Businesses outgrowing off-the-shelf tools required bespoke web apps and automated workflows without getting locked into slow, inflexible enterprise software.',
      solution:
        'Engineered lightning-fast Next.js architectures with clean API connectivity, automated data pipelines, and clean user-centered dashboards that make daily operations effortlessly intuitive.',
      results: [
        'Sub-second page loads with 99+ Lighthouse performance scores',
        'Streamlined repetitive tasks into autonomous workflows',
        'Modular component architecture ensuring longevity and maintainability',
        'Built following Theweb\'s pragmatic philosophy: technology should be useful',
      ],
      techStack: ['Next.js App Router', 'React 18', 'AI & Automation APIs', 'Node.js', 'PostgreSQL / Supabase'],
      metrics: '99+ Lighthouse Scores',
    },
  ];

  return (
    <section id="case-studies" className="section" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="n8n-badge">
            <Sparkles size={13} />
            <span>Featured Work & Case Studies</span>
          </div>
          <h2 className="section-title">
            Proven Work, Real-World Purpose
          </h2>
          <p className="section-description">
            From international Microsoft awards to 90+ projects delivered for Norwegian businesses,
            our work proves that thoughtful design and disciplined engineering solve real challenges.
          </p>
        </div>

        {/* 3 Case Study Cards with n8n base styling */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '32px',
          }}
        >
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="card-n8n-base case-study-grid"
            >
              {/* Left Column: Case Overview */}
              <div style={{ gridColumn: 'span 7' }} className="case-content-col">
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '16px',
                    flexWrap: 'wrap',
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      color: 'var(--brand-cyan-neon)',
                      background: 'rgba(0, 245, 212, 0.1)',
                      padding: '4px 12px',
                      borderRadius: 'var(--radius-full)',
                      border: '1px solid rgba(0, 245, 212, 0.25)',
                    }}
                  >
                    {study.tag}
                  </span>
                  <span className="mono" style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                    {study.period}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: '1.85rem',
                    fontWeight: 800,
                    color: '#FFFFFF',
                    marginBottom: '14px',
                    lineHeight: 1.25,
                    letterSpacing: '-0.02em',
                  }}
                >
                  {study.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.96rem',
                    color: 'var(--color-heading-secondary)',
                    lineHeight: 1.65,
                    marginBottom: '24px',
                  }}
                >
                  {study.summary}
                </p>

                {/* Tech Pills */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px',
                    marginBottom: '28px',
                  }}
                >
                  {study.techStack.map((tech, i) => (
                    <span
                      key={i}
                      style={{
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        color: '#FFFFFF',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        padding: '4px 12px',
                        borderRadius: 'var(--radius-full)',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => onSelectCaseStudy(study)}
                  className="btn btn-secondary btn-anim-arrow"
                  style={{
                    padding: '10px 22px',
                    fontSize: '0.88rem',
                    borderRadius: 'var(--radius-full)',
                  }}
                >
                  <span className="btn-label">Read Case Study</span>
                  <span className="btn-icon">
                    <ArrowRight size={14} />
                  </span>
                </button>
              </div>

              {/* Right Column: Key Outcomes Box */}
              <div
                style={{
                  gridColumn: 'span 5',
                  background: 'rgba(15, 24, 44, 0.7)',
                  border: '1px solid rgba(0, 210, 255, 0.25)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '28px 24px',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1), 0 10px 30px rgba(0,0,0,0.5)',
                }}
                className="case-results-col"
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: '16px',
                  }}
                >
                  <Award size={20} color="var(--brand-cyan-neon)" />
                  <span
                    style={{
                      fontSize: '0.84rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      color: '#FFFFFF',
                    }}
                  >
                    Key Outcomes & Impact
                  </span>
                </div>

                <div
                  className="text-gradient"
                  style={{
                    fontSize: '1.45rem',
                    fontWeight: 800,
                    marginBottom: '16px',
                    lineHeight: 1.2,
                  }}
                >
                  {study.metrics}
                </div>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {study.results.map((res, i) => (
                    <li
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px',
                        fontSize: '0.85rem',
                        color: 'var(--color-heading-secondary)',
                        lineHeight: 1.45,
                      }}
                    >
                      <span style={{ color: 'var(--brand-cyan-neon)', marginTop: '2px' }}>✓</span>
                      <span>{res}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
