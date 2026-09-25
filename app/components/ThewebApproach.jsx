'use client';

import { Sparkles, HelpCircle, Compass, Eye, Wrench, RefreshCw, Quote } from 'lucide-react';

export default function ThewebApproach() {
  const principles = [
    {
      num: '01',
      title: 'Start with the why.',
      icon: HelpCircle,
      description:
        'Before thinking about screens, features or technology, the reason behind the project needs to be clear.',
      questions: [
        'What is the problem?',
        'Who is it for?',
        'What should it achieve?',
      ],
      insight: 'Clarity on purpose saves months of redundant development.',
    },
    {
      num: '02',
      title: 'Explore before deciding.',
      icon: Compass,
      description:
        'The first idea is rarely the final one. Different directions are explored, tested and challenged before settling on something worth building.',
      questions: [
        'Are there alternative ways to solve this?',
        'Does this hypothesis hold under scrutiny?',
        'Can we validate the assumption with real users first?',
      ],
      insight: 'Divergent thinking leads to convergent confidence.',
    },
    {
      num: '03',
      title: 'Make it understandable.',
      icon: Eye,
      description:
        'Good design should make complicated things feel simple. From a website to a digital product, every interaction should have a reason to exist.',
      questions: [
        'Is the cognitive load minimal?',
        'Does every element serve a clear purpose?',
        'Can a first-time user succeed without guidance?',
      ],
      insight: 'Simplicity is the ultimate sophistication in UX.',
    },
    {
      num: '04',
      title: 'Use the right tools.',
      icon: Wrench,
      description:
        'There is no favourite technology for the sake of having one. WordPress, React, Next.js, AI, automation or something built from scratch, the tools depend on what the project actually needs.',
      questions: [
        'What allows the team to ship fastest with stability?',
        'Does the architecture fit the project’s scale?',
        'Will this stack remain maintainable tomorrow?',
      ],
      insight: 'Pragmatism over dogma. Utility over hype.',
    },
    {
      num: '05',
      title: 'Build, learn, improve.',
      icon: RefreshCw,
      description:
        'The first version doesn\'t have to be perfect. Launch something useful. See how people respond. Learn from it. Make it better.',
      questions: [
        'What is the smallest useful release?',
        'How will we measure user adoption?',
        'What do the live interactions teach us?',
      ],
      insight: 'Real-world feedback always beats theoretical debate.',
    },
  ];

  return (
    <section id="approach" className="section" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Core Philosophy</span>
          </div>
          <h2 className="section-title">
            Theweb Approach
          </h2>
          <p className="section-description">
            There is no single way to build something. We stay flexible, curious, and focused on finding the right way forward.
          </p>
        </div>

        {/* Narrative Manifesto Card */}
        <div
          className="glass-card"
          style={{
            padding: '40px 36px',
            marginBottom: '48px',
            background: 'linear-gradient(180deg, rgba(14, 23, 45, 0.9) 0%, rgba(8, 14, 27, 0.95) 100%)',
            border: '1px solid rgba(0, 210, 255, 0.3)',
            borderRadius: 'var(--radius-xl)',
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '24px',
              right: '28px',
              opacity: 0.12,
              color: 'var(--cyan-bright)',
            }}
          >
            <Quote size={64} />
          </div>

          <div style={{ maxWidth: '820px' }}>
            <h3
              style={{
                fontSize: '1.45rem',
                fontWeight: 700,
                color: 'var(--text-white)',
                marginBottom: '16px',
                lineHeight: 1.4,
              }}
            >
              "Some projects start with a clear idea. Some start with a problem. Some start with a rough sketch, a conversation, or simply a question: <span className="text-gradient">‘Could this work?’</span>"
            </h3>
            <p
              style={{
                fontSize: '1.05rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
              }}
            >
              The approach stays flexible. The goal is not to force every project through the same rigid template,
              but to find the right way forward. That mindset has shaped the work from the beginning, from early experiments
              and student projects to international digital products and businesses.
            </p>
          </div>
        </div>

        {/* 5 Principles Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
            marginBottom: '40px',
          }}
        >
          {principles.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                className="glass-card"
                style={{
                  padding: '32px 28px',
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
                      marginBottom: '20px',
                    }}
                  >
                    <span
                      className="mono"
                      style={{
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        color: 'var(--cyan-bright)',
                      }}
                    >
                      PRINCIPLE {item.num}
                    </span>
                    <div
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: 'var(--radius-sm)',
                        background: 'rgba(0, 210, 255, 0.1)',
                        border: '1px solid rgba(0, 210, 255, 0.25)',
                        color: 'var(--cyan-electric)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Icon size={18} />
                    </div>
                  </div>

                  <h4
                    style={{
                      fontSize: '1.35rem',
                      fontWeight: 700,
                      color: 'var(--text-white)',
                      marginBottom: '12px',
                    }}
                  >
                    {item.title}
                  </h4>

                  <p
                    style={{
                      fontSize: '0.92rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                      marginBottom: '20px',
                    }}
                  >
                    {item.description}
                  </p>

                  <div
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '14px 16px',
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                      marginBottom: '20px',
                    }}
                  >
                    <div
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        color: 'var(--text-muted)',
                        marginBottom: '8px',
                      }}
                    >
                      Guiding Questions
                    </div>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {item.questions.map((q, i) => (
                        <li
                          key={i}
                          style={{
                            fontSize: '0.84rem',
                            color: 'var(--cyan-electric)',
                            display: 'flex',
                            alignItems: 'baseline',
                            gap: '8px',
                          }}
                        >
                          <span style={{ color: 'var(--cyan-bright)' }}>•</span>
                          <span>{q}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div
                  style={{
                    paddingTop: '16px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                    fontSize: '0.8rem',
                    color: 'var(--text-muted)',
                    fontStyle: 'italic',
                  }}
                >
                  💡 {item.insight}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Conclusion Callout */}
        <div
          style={{
            textAlign: 'center',
            padding: '24px',
            background: 'rgba(0, 210, 255, 0.04)',
            borderRadius: 'var(--radius-lg)',
            border: '1px dashed rgba(0, 210, 255, 0.3)',
          }}
        >
          <p
            style={{
              fontSize: '1.05rem',
              fontWeight: 600,
              color: 'var(--text-white)',
            }}
          >
            "The process changes with every project.{' '}
            <span className="text-gradient">The curiosity stays the same.</span>"
          </p>
        </div>
      </div>
    </section>
  );
}
