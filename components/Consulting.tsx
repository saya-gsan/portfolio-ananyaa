'use client'

import { useState, useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { colors, fonts } from '@/lib/tokens'

gsap.registerPlugin(ScrollTrigger)

const ENGAGEMENTS = [
  {
    eyebrow: 'PGCC · JAN–MAY 2025',
    org: 'Penn Graduate Consulting Club',
    role: 'Business Associate',
    title: 'Market entry strategy for a DNA-LNP gene therapy platform',
    desc: 'A Penn-affiliated biotech lab needed help navigating a crowded $6B+ gene therapy market with a novel DNA-LNP platform and no clear indication focus. The challenge was real ambiguity: strong technology, unclear where to point it. I ran opportunity sizing and competitive analysis across 10+ disease indications, integrating scientific literature, epidemiological data, pipeline intelligence, and payer dynamics to assess clinical and commercial feasibility for each. The output was a data-driven framework identifying three high-potential, underserved indications where the platform could credibly differentiate, used to guide R&D prioritization and investor engagement.',
    outcome: 'Delivered indication shortlist and go-to-market positioning strategy to guide R&D focus and investor narrative.',
    tags: ['Gene Therapy', 'Market Entry', 'Competitive Analysis', 'Indication Selection'],
  },
  {
    eyebrow: 'PBG · JAN–MAY 2024',
    org: 'Penn Biotech Group',
    role: 'Project Member',
    title: 'Commercial viability assessment: Valley Fever animal vaccine',
    desc: 'A biotech client needed to evaluate whether developing a Valley Fever vaccine for animals was worth pursuing, a niche indication in a $10B+ animal health market with limited precedent and high uncertainty. I conducted top-down market sizing using epidemiological data, pricing benchmarks, and regulatory considerations, and built out competitive positioning and development feasibility analyses. The work translated into a go/no-go framework the client used to make an actual product development decision, which is the part that stuck with me. This project was the first time I had to synthesize scientific feasibility and commercial viability in the same document, and it crystallized something: that intersection is where I actually want to spend time.',
    outcome: 'Delivered market opportunity assessment and go/no-go framework used to inform internal investment and product development decisions.',
    tags: ['Animal Health', 'Market Sizing', 'Go/No-Go', 'Vaccine Strategy'],
  },
  {
    eyebrow: 'WIPRO · JAN–JUN 2023',
    org: 'Wipro Limited',
    role: 'Project Intern, Healthcare & AI',
    title: 'AI strategies for clinical trial recruitment',
    desc: 'Contributed research and analytical support to a cross-functional initiative at Wipro focused on improving clinical trial efficiency through AI and automation. Patient recruitment drives more than 30% of trial delays. I mapped clinical trial workflow bottlenecks, benchmarked competitor AI platforms, and researched digital health models that had improved enrollment rates by up to 40%. That research fed directly into strategy decks and investment priority recommendations presented to leadership. My role was research and deck support that gave the material to inform the overall direction, an honest but genuinely useful contribution at the start of a career.',
    outcome: 'Research and analysis supported strategy decks outlining AI-driven recruitment improvements, contributing to digital adoption investment priorities.',
    tags: ['Healthcare AI', 'Clinical Trials', 'Strategy', 'Market Research'],
  },
]

const PROFILE_ROWS = [
  { label: 'Focus areas',      value: 'Cell & Gene Therapy · Biotech Strategy · Healthcare AI · Market Entry' },
  { label: 'Strengths',        value: 'Market sizing · Competitive landscape · Indication selection · Go/No-Go frameworks · Scientific due diligence' },
  { label: 'Engagement model', value: 'Project-based · Open to collaborations · Available alongside research role' },
  { label: 'Location',         value: 'San Francisco, CA · Remote-friendly' },
]

export default function Consulting() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [contactOpen, setContactOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const contactRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!contactOpen) return
    const handler = (e: MouseEvent) => {
      if (contactRef.current && !contactRef.current.contains(e.target as Node)) {
        setContactOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [contactOpen])

  useGSAP(
    () => {
      // Hero text reveal
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })
      tl.from('.con-eyebrow', { opacity: 0, y: 12, duration: 0.5 }, 0.15)
      tl.from('.con-title-word', { yPercent: 110, duration: 0.85, stagger: 0.1 }, 0.2)
      tl.from('.con-bio', { opacity: 0, y: 20, duration: 0.55 }, 0.6)
      tl.from('.con-ctas', { opacity: 0, y: 16, duration: 0.5 }, 0.75)

      // Profile table rows stagger in from left
      gsap.from('.profile-row', {
        opacity: 0, x: -24, stagger: 0.1, duration: 0.55, ease: 'power3.out',
        scrollTrigger: { trigger: '.profile-table', start: 'top 82%' },
      })

      // Penn callout
      gsap.from('.penn-callout', {
        opacity: 0, y: 28, duration: 0.6,
        scrollTrigger: { trigger: '.penn-callout', start: 'top 82%' },
      })

      // Engagement cards stagger
      gsap.from('.engagement-card', {
        opacity: 0, y: 36, stagger: 0.12, duration: 0.65, ease: 'power3.out',
        scrollTrigger: { trigger: '.engagements-section', start: 'top 80%' },
      })
    },
    { scope: containerRef }
  )

  return (
    <div ref={containerRef} style={{ background: '#ffffff', minHeight: '100vh' }}>

      {/* ── Hero ──────────────────────────────────────────────────────────────── */}
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '96px 32px 56px' }}>
        <div className="con-eyebrow" style={{
          fontFamily: fonts.mono, fontSize: '0.6875rem', fontWeight: 500,
          letterSpacing: '0.12em', textTransform: 'uppercase', color: colors.muted, marginBottom: 22,
        }}>
          Consulting profile
        </div>

        <div style={{
          fontFamily: fonts.display, fontWeight: 800,
          fontSize: 'clamp(2.25rem,4vw,3rem)',
          lineHeight: 1.04, letterSpacing: '-0.04em', color: colors.ink, marginBottom: 22,
        }}>
          {["A scientist's lens", 'on strategy.'].map((line, i) => (
            <div key={i} style={{ overflow: 'hidden' }}>
              <div className="con-title-word">{line}</div>
            </div>
          ))}
        </div>

        <div className="con-bio" style={{
          fontFamily: fonts.body, fontSize: '1.0625rem', lineHeight: 1.72,
          color: colors.muted, maxWidth: '56ch', marginBottom: 36,
        }}>
          Consulting experience built at Penn&apos;s biotech and healthcare strategy clubs, working on
          real client engagements at the intersection of science, market dynamics, and decision-making.
          Open to project-based collaborations alongside my research role.
        </div>

        <div className="con-ctas" style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
          {/* Email button — opens popup */}
          <div ref={contactRef} style={{ position: 'relative', display: 'inline-block' }}>
            <button
              onClick={() => setContactOpen((o) => !o)}
              style={{
                fontFamily: fonts.display, fontWeight: 700, fontSize: '0.9375rem',
                padding: '13px 24px', borderRadius: 14,
                border: `1px solid ${colors.border}`,
                cursor: 'pointer', color: colors.ink,
                background: 'transparent', transition: 'background 160ms',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(36,24,19,0.04)' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent' }}
            >
              Email
            </button>
            {contactOpen && (
              <div style={{
                position: 'absolute', top: 'calc(100% + 8px)', left: 0,
                background: '#ffffff', border: `1px solid ${colors.border}`,
                borderRadius: 12, padding: '12px 14px',
                boxShadow: '0 4px 16px rgba(36,24,19,0.08)',
                zIndex: 100,
              }}>
                <div style={{ fontFamily: fonts.mono, fontSize: '0.5rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: colors.muted, marginBottom: 6 }}>
                  Email
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <a
                    href="mailto:sriniananyaa@gmail.com"
                    style={{ fontFamily: fonts.mono, fontSize: '0.8125rem', color: colors.ember, textDecoration: 'none', whiteSpace: 'nowrap' }}
                  >
                    sriniananyaa@gmail.com
                  </a>
                  <button
                    onClick={() => { navigator.clipboard.writeText('sriniananyaa@gmail.com'); setCopied(true); setTimeout(() => setCopied(false), 2000) }}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4px 6px', borderRadius: 6, border: `1px solid ${colors.border}`, background: 'transparent', cursor: 'pointer', color: copied ? colors.ember : colors.muted, flexShrink: 0, transition: 'color 160ms' }}
                  >
                    {copied
                      ? <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                      : <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
                    }
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/ananyaa-srinivasan/"
            target="_blank"
            rel="noopener"
            style={{
              fontFamily: fonts.display, fontWeight: 700, fontSize: '0.9375rem',
              padding: '13px 24px', borderRadius: 14,
              border: `1px solid ${colors.border}`,
              cursor: 'pointer', color: colors.ink,
              background: 'transparent', textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center', gap: 7,
              transition: 'background 160ms',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(36,24,19,0.04)' }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent' }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            LinkedIn
          </a>
        </div>
      </div>

      {/* ── Profile table ─────────────────────────────────────────────────────── */}
      <div className="profile-table" style={{ maxWidth: 820, margin: '0 auto', padding: '0 32px 64px' }}>
        <div style={{ borderTop: `1px solid ${colors.divider}` }}>
          {PROFILE_ROWS.map(({ label, value }) => (
            <div
              key={label}
              className="profile-row"
              style={{
                display: 'flex', gap: 40, padding: '16px 0',
                borderBottom: `1px solid ${colors.divider}`, alignItems: 'flex-start',
              }}
            >
              <div className="profile-label" style={{ fontFamily: fonts.body, fontSize: '0.875rem', color: colors.muted, width: 180, flexShrink: 0 }}>
                {label}
              </div>
              <div style={{ fontFamily: fonts.body, fontSize: '0.9375rem', color: colors.ink, lineHeight: 1.5 }}>
                {value}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Penn callout ──────────────────────────────────────────────────────── */}
      <div style={{ background: '#f5f5f0', padding: '64px 32px' }}>
        <div className="penn-callout" style={{ maxWidth: 820, margin: '0 auto' }}>
          <div style={{
            fontFamily: fonts.mono, fontSize: '0.6875rem', fontWeight: 500,
            letterSpacing: '0.12em', textTransform: 'uppercase', color: colors.muted, marginBottom: 20,
          }}>
            Penn consulting
          </div>
          <div style={{
            fontFamily: fonts.display, fontWeight: 800, fontSize: '1.5rem',
            letterSpacing: '-0.03em', color: colors.ink, marginBottom: 10,
          }}>
            Trained at Penn&apos;s consulting clubs.
          </div>
          <div style={{
            fontFamily: fonts.body, fontSize: '1rem', lineHeight: 1.68,
            color: colors.muted, maxWidth: '60ch',
          }}>
            Penn Graduate Consulting Club and Penn Biotech Group are among the most selective student
            consulting organizations in the country. Both work on real client engagements, not case
            competitions. The clients are actual biotech and healthcare companies making real decisions.
            I worked on two of them.
          </div>
        </div>
      </div>

      {/* ── Engagements ───────────────────────────────────────────────────────── */}
      <div className="engagements-section" style={{ maxWidth: 820, margin: '0 auto', padding: '64px 32px 96px' }}>
        <div style={{
          fontFamily: fonts.display, fontWeight: 800, fontSize: '1.5rem',
          letterSpacing: '-0.03em', color: colors.ink, marginBottom: 8,
        }}>
          Selected engagements
        </div>
        <div style={{ fontFamily: fonts.body, fontSize: '0.9375rem', color: colors.muted, marginBottom: 32 }}>
          Real clients. Real problems. Real outcomes.
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {ENGAGEMENTS.map((p, i) => (
            <div
              key={i}
              className="engagement-card"
              style={{
                border: '1px solid rgba(0,0,0,0.07)', borderRadius: 20,
                padding: '26px 28px', background: '#ffffff',
                transition: 'box-shadow 240ms, transform 240ms',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.08)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.transform = 'none'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8, flexWrap: 'wrap', gap: 6 }}>
                <div style={{ fontFamily: fonts.mono, fontSize: '0.5625rem', fontWeight: 500, letterSpacing: '0.10em', textTransform: 'uppercase', color: colors.muted }}>
                  {p.eyebrow}
                </div>
                <div style={{ fontFamily: fonts.body, fontSize: '0.75rem', color: colors.muted }}>
                  {p.org} · {p.role}
                </div>
              </div>
              <div style={{ fontFamily: fonts.display, fontWeight: 800, fontSize: '1.0625rem', letterSpacing: '-0.02em', color: colors.ink, marginBottom: 10 }}>
                {p.title}
              </div>
              <div style={{ fontFamily: fonts.body, fontSize: '0.9375rem', lineHeight: 1.62, color: colors.muted, marginBottom: 12 }}>
                {p.desc}
              </div>
              <div style={{
                fontFamily: fonts.body, fontSize: '0.875rem', lineHeight: 1.5, color: colors.ink,
                padding: '10px 14px', background: 'rgba(36,24,19,0.04)', borderRadius: 10, marginBottom: 14,
              }}>
                <span style={{ fontFamily: fonts.mono, fontSize: '0.5625rem', letterSpacing: '0.10em', textTransform: 'uppercase', color: colors.muted }}>
                  Outcome ·{' '}
                </span>
                {p.outcome}
              </div>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {p.tags.map((t) => (
                  <span key={t} style={{
                    fontFamily: fonts.mono, fontSize: '0.5625rem', fontWeight: 500,
                    letterSpacing: '0.08em', textTransform: 'uppercase',
                    padding: '3px 8px', background: 'rgba(36,24,19,0.06)',
                    borderRadius: 6, color: colors.muted,
                  }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
