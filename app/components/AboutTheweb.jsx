'use client';

import { Sparkles, Calendar, Globe, Milestone } from 'lucide-react';

export default function AboutTheweb() {
  const milestones = [
    {
      year: '2019',
      title: 'Starting to explore',
      badge: 'Early Experiments & Hackathons',
      summary:
        'The journey began through university and community projects, experimenting with technology, design and digital media.',
      detail:
        'From building small projects to getting deeply involved in hackathons, workshops and creative communities, each experience opened up something new to explore. It established an insatiable curiosity about how software and human interfaces interact.',
    },
    {
      year: '2021–2022',
      title: 'Building with purpose',
      badge: 'Imagine Cup SEA Champion & World Finalist',
      summary:
        'UX, product design and technology became a bigger part of the journey. Projects such as Habarala brought together design and technology to address real-world problems.',
      detail:
        'Eventually leading to the Microsoft Imagine Cup, where the project became a Southeast Asia Region Champion and World Finalist. It was a turning point: technology became less about what could be built and more about what could be solved.',
    },
    {
      year: '2022',
      title: 'The first step beyond Sri Lanka',
      badge: 'Babette & The Birth of “Theweb”',
      summary:
        'Another important chapter began with an internship under Babette—the first international work experience on real projects for international clients.',
      detail:
        'What started as an internship grew into a long-term professional relationship. Babette became an important part of the journey, introducing new opportunities, supporting new ideas and helping open the door to a much bigger world of international work. And there was one small detail that would eventually become something much bigger: The name “Theweb” came from Babette. At the time, it was simply a name for an idea that was still taking shape.',
    },
    {
      year: '2022–2023',
      title: 'Looking beyond Sri Lanka',
      badge: '90+ Norwegian Enterprise Projects',
      summary:
        'That first international opportunity led to more. The work expanded into UX and digital design for Norwegian businesses across diverse industries.',
      detail:
        'More than 90 projects brought new perspectives on design, collaboration and problem-solving, while showing what was possible from Sri Lanka while working with people around the world.',
    },
    {
      year: '2023',
      title: 'Theweb Agency Was Established',
      badge: 'From Solo Journey to Full Agency Platform',
      summary:
        'After years of projects, experiments and learning, those experiences came together under one name: Theweb Agency was established.',
      detail:
        'What started as an individual journey became a platform for working with businesses, building digital products and turning ideas into something real. The name had existed before the company. The experience came before the business. The story came first. The company grew from it.',
    },
    {
      year: 'Today',
      title: 'Continuing the Mission',
      badge: 'Websites, Digital Products, UX & AI',
      summary:
        'The journey continues through websites, digital products, UX, technology, AI and everything in between.',
      detail:
        'The tools continue to change. The projects continue to evolve. The people and places along the way continue to shape what comes next. But the original idea remains the same: Technology should be useful.',
    },
  ];

  return (
    <section id="about" className="section" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="n8n-badge">
            <Sparkles size={13} />
            <span>Origin Story & Journey</span>
          </div>
          <h2 className="section-title">
            About Theweb
          </h2>
          <p className="section-description">
            Theweb started with a simple idea: <strong style={{ color: '#fff' }}>technology should be useful.</strong><br />
            It didn't begin with a business plan—it grew from years of exploring design, technology,
            and the possibilities that come from bringing the two together.
          </p>
        </div>

        {/* Narrative Callout Banner in n8n Spark style */}
        <div
          className="card-n8n-spark"
          style={{
            padding: '40px 36px',
            marginBottom: '56px',
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px' }}>
            <div>
              <div
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  color: 'var(--brand-cyan-neon)',
                  letterSpacing: '0.08em',
                  marginBottom: '10px',
                }}
              >
                The Evolution
              </div>
              <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.35 }}>
                "The name had existed before the company.<br />
                The experience came before the business.<br />
                The story came first. The company grew from it."
              </h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <p style={{ fontSize: '0.96rem', color: 'var(--color-heading-secondary)', lineHeight: 1.7 }}>
                From student experiments and Microsoft Imagine Cup recognition in Sri Lanka to delivering over 90
                international design and UX projects for Norwegian enterprises, our DNA is grounded in solving real problems
                rather than chasing hollow hype.
              </p>
            </div>
          </div>
        </div>

        {/* Vertical Timeline */}
        <div
          style={{
            position: 'relative',
            maxWidth: '920px',
            margin: '0 auto',
            paddingLeft: '32px',
            borderLeft: '2px solid rgba(0, 210, 255, 0.25)',
          }}
        >
          {milestones.map((item, index) => (
            <div
              key={index}
              style={{
                position: 'relative',
                marginBottom: '48px',
              }}
            >
              {/* Timeline Bullet Node with cyan glow */}
              <div
                style={{
                  position: 'absolute',
                  left: '-43px',
                  top: '6px',
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  background: '#090e1a',
                  border: '3px solid var(--brand-cyan-neon)',
                  boxShadow: '0 0 14px var(--brand-cyan-neon)',
                }}
              />

              {/* Milestone Card in n8n Base style */}
              <div
                className="card-n8n-base"
                style={{
                  padding: '28px 28px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '12px',
                    marginBottom: '14px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span
                      className="mono"
                      style={{
                        fontSize: '1.2rem',
                        fontWeight: 800,
                        color: 'var(--brand-cyan-neon)',
                      }}
                    >
                      {item.year}
                    </span>
                    <span
                      style={{
                        fontSize: '0.76rem',
                        fontWeight: 700,
                        color: 'var(--brand-cyan-electric)',
                        background: 'rgba(0, 210, 255, 0.1)',
                        padding: '4px 12px',
                        borderRadius: 'var(--radius-full)',
                        border: '1px solid rgba(0, 210, 255, 0.25)',
                      }}
                    >
                      {item.badge}
                    </span>
                  </div>
                </div>

                <h3
                  style={{
                    fontSize: '1.4rem',
                    fontWeight: 800,
                    color: '#FFFFFF',
                    marginBottom: '10px',
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    fontSize: '1.02rem',
                    fontWeight: 600,
                    color: '#FFFFFF',
                    marginBottom: '12px',
                    lineHeight: 1.5,
                  }}
                >
                  {item.summary}
                </p>

                <p
                  style={{
                    fontSize: '0.92rem',
                    color: 'var(--color-heading-secondary)',
                    lineHeight: 1.65,
                  }}
                >
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
