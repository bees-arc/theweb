'use client';

import { Sparkles, ArrowRight, BookOpen, Clock, Calendar } from 'lucide-react';

export default function Insights({ onSelectInsight }) {
  const articles = [
    {
      id: 'start-with-why',
      title: 'Start with the Why: The Foundation of Every Useful Digital Product',
      date: 'Insights · Design Strategy',
      readTime: '4 min read',
      tag: 'Product Philosophy',
      summary:
        'Before thinking about screens, features or technology, the reason behind the project needs to be clear. What is the problem? Who is it for? What should it achieve?',
      content: `Before opening Figma or selecting a tech stack, the core motivation behind any software endeavor must be rigorously examined.
      
Too often, teams jump straight to questions of UI gradients, API endpoints, or database structures without pausing to answer three fundamental questions:
1. What is the real-world problem?
2. Who is experiencing this pain point, and in what context?
3. What measurable outcome should this digital product achieve?

When the "why" is crystal clear, every subsequent decision—from wireframe layouts to micro-interactions—has a clear justification. Good design should make complicated things feel simple, and that simplicity starts with ruthless clarity of purpose.`,
    },
    {
      id: 'pragmatic-tools',
      title: 'Use the Right Tools: Why Pragmatism Beats Technology Dogma',
      date: 'Insights · Engineering',
      readTime: '5 min read',
      tag: 'Engineering Ethics',
      summary:
        'There is no favourite technology for the sake of having one. WordPress, React, Next.js, AI, automation or something built from scratch—the tools depend on what the project actually needs.',
      content: `In the modern software ecosystem, it is easy to get caught up in hype cycles. New frameworks and libraries emerge every week, each claiming to be the panacea for all digital problems.
      
At Theweb, our stance is uncompromisingly pragmatic:
• If a marketing team needs rapid editorial freedom and SEO agility, a well-architected WordPress or headless CMS is often the superior choice.
• If a product demands intricate client-side state, reactive dashboards, or edge rendering, Next.js and React shine.
• If a workflow can be automated with smart AI connectors and deterministic logic, we build autonomous pipelines.

The goal is not to impress other developers with unnecessary complexity; the goal is to build something people can actually use reliably.`,
    },
    {
      id: 'build-learn-improve',
      title: 'Build, Learn, Improve: The Evolution of Theweb from 2019 to Today',
      date: 'Insights · Agency Journey',
      readTime: '6 min read',
      tag: 'Origin Story',
      summary:
        'The first version doesn\'t have to be perfect. Launch something useful. See how people respond. Learn from it. Make it better.',
      content: `Theweb didn't begin with a corporate business plan; it grew from years of exploring design, technology, and the intersection where both create utility.
      
From student hackathons and Microsoft Imagine Cup recognition with Habarala to an international mentorship under Babette—who gave Theweb its name—and over 90 digital design deliveries for Norwegian businesses, one principle has guided every chapter:
Technology should be useful.

The process changes with every project. The tools continue to evolve. But the fundamental curiosity and commitment to real-world problem solving remain untouched.`,
    },
  ];

  return (
    <section id="insights" className="section" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Perspectives & Thoughts</span>
          </div>
          <h2 className="section-title">
            INSIGHTS
          </h2>
          <p className="section-description">
            Reflections on product design, pragmatic engineering, and lessons learned building digital solutions for global teams.
          </p>
        </div>

        {/* 3 Articles Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
          }}
        >
          {articles.map((item) => (
            <div
              key={item.id}
              className="glass-card"
              style={{
                padding: '36px 30px',
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
                    marginBottom: '16px',
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.74rem',
                      fontWeight: 700,
                      color: 'var(--cyan-bright)',
                      background: 'rgba(0, 245, 212, 0.1)',
                      border: '1px solid rgba(0, 245, 212, 0.25)',
                      padding: '3px 10px',
                      borderRadius: 'var(--radius-full)',
                    }}
                  >
                    {item.tag}
                  </span>
                  <div
                    style={{
                      fontSize: '0.76rem',
                      color: 'var(--text-muted)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    <Clock size={12} />
                    <span>{item.readTime}</span>
                  </div>
                </div>

                <h3
                  style={{
                    fontSize: '1.35rem',
                    fontWeight: 800,
                    color: 'var(--text-white)',
                    marginBottom: '14px',
                    lineHeight: 1.35,
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.9rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                    marginBottom: '24px',
                  }}
                >
                  {item.summary}
                </p>
              </div>

              <div
                style={{
                  paddingTop: '18px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                  {item.date}
                </span>
                <button
                  onClick={() => onSelectInsight(item)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--cyan-bright)',
                    fontSize: '0.86rem',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    cursor: 'pointer',
                  }}
                >
                  <span>Read Article</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
