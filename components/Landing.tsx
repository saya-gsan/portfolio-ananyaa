'use client'

import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { colors, gradient, shadows, fonts } from '@/lib/tokens'
import type { Tab } from './App'
import PathogenGame from './PathogenGame'

// ─────────────────────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────────────────────

const NOW_ITEMS = [
  {
    eyebrow: 'BUILDING',
    text: 'Optimizing the PrimeFlow EBER Flow-FISH protocol for clinical use at Stanford — finalizing antibody panels for single-cell resolution on the Cytek Aurora Evo.',
  },
  {
    eyebrow: 'WRITING',
    text: 'Drafting the manuscript for the DHR-based neutrophil oxidative burst assay; validation report submitted to Stanford Hospitals for clinical lab approval.',
  },
  {
    eyebrow: 'TINKERING',
    text: 'Building a flow cytometry panel-builder tool in Python — pulling fluorochrome spectra and flagging spillover before the wet lab even opens.',
  },
  {
    eyebrow: 'READING',
    text: 'Diving into foundational immunology and computational biology — and reading deep on NK cell biology and clinical assay design as we scope the next set of assays in the pipeline.',
  },
]

const INTERESTS = ['Psychology', 'Writing', 'Sketching', 'Puzzles', 'Hiking', 'New cities, new everything']

const FEATURED: { eyebrow: string; title: string; tags: string[]; tab: Tab }[] = [
  {
    eyebrow: 'STANFORD · 2025',
    title: 'DHR-based neutrophil oxidative burst assay',
    tags: ['CLINICAL', 'FLOW CYTOMETRY', 'STANFORD PATHOLOGY'],
    tab: 'core',
  },
  {
    eyebrow: 'CARL JUNE LAB · 2025',
    title: 'NK cell cytotoxicity predictive model',
    tags: ['PYTHON', 'AI', 'NK CELLS'],
    tab: 'computational',
  },
  {
    eyebrow: 'STANFORD · 2025',
    title: 'Flow cytometry panel builder tool',
    tags: ['PYTHON', 'COMPUTATIONAL', 'TOOL'],
    tab: 'computational',
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

export default function Landing({ onTabChange }: { onTabChange: (t: Tab) => void }) {
  const [hovCard, setHovCard] = useState<number | null>(null)
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

  const handleCardHover = (i: number) => {
    setHovCard(i)
    gsap.to(`.work-card-${i}`, { y: -4, duration: 0.25, ease: 'power2.out', boxShadow: shadows.cardHover })
  }
  const handleCardLeave = (i: number) => {
    setHovCard(null)
    gsap.to(`.work-card-${i}`, { y: 0, duration: 0.25, ease: 'power2.in', boxShadow: shadows.card })
  }

  return (
    <div style={{ background: colors.surface, minHeight: '100vh' }}>

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <div>
        <div style={{ maxWidth: 1280, width: '100%', margin: '0 auto', padding: 'clamp(40px, 6vh, 64px) clamp(20px, 3vw, 48px)', boxSizing: 'border-box' }}>
          <div className="hero-two-col" style={{ display: 'flex', gap: 'clamp(32px, 4.5vw, 72px)', alignItems: 'center', flexWrap: 'wrap' }}>

            {/* Left column */}
            <div style={{ flex: '1 1 360px', display: 'flex', flexDirection: 'column', gap: 22 }}>
              <div
                className="hero-eyebrow"
                style={{
                  fontFamily: fonts.mono, fontSize: '0.6875rem', fontWeight: 500,
                  letterSpacing: '0.12em', textTransform: 'uppercase', color: colors.muted,
                }}
              >
                Cellular Immunologist · Translational Biologist
              </div>

              {/* Name — clip-reveal */}
              <div style={{
                fontFamily: fonts.display, fontWeight: 800,
                fontSize: 'clamp(2.75rem,6vw,5rem)',
                lineHeight: 0.95, letterSpacing: '-0.045em', color: colors.ink,
              }}>
                <div style={{ overflow: 'hidden' }}>
                  <div className="hero-name-word">Ananyaa</div>
                </div>
                <div style={{ overflow: 'hidden' }}>
                  <div className="hero-name-word">Srinivasan</div>
                </div>
              </div>

              <div
                className="hero-bio"
                style={{
                  fontFamily: fonts.body, fontSize: '1.0625rem',
                  lineHeight: 1.62, color: colors.muted, maxWidth: '46ch',
                }}
              >
                Hi, I&apos;m Anu. I work at the intersection of immunology, biological engineering,
                and clinical translation, currently building diagnostic assays at Stanford Pathology.
                Outside the lab, I apply that same thinking to biotech strategy and use computation
                to make the science faster. I&apos;m happiest when an unsolved biological question
                has an answer that actually reaches a patient.
              </div>

              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 4 }}>
                <button
                  className="hero-cta"
                  onClick={() => onTabChange('core')}
                  style={{
                    fontFamily: fonts.display, fontWeight: 800, fontSize: '0.9375rem',
                    letterSpacing: '-0.01em', padding: '13px 24px', borderRadius: 14,
                    border: 'none', cursor: 'pointer', color: '#fffaf2',
                    background: gradient, boxShadow: shadows.button,
                  }}
                >
                  See what I&apos;m working on
                </button>
                <div ref={contactRef} style={{ position: 'relative', display: 'inline-block' }}>
                  <button
                    className="hero-cta"
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
                    Get in touch
                  </button>
                  {contactOpen && (
                    <div style={{
                      position: 'absolute', top: 'calc(100% + 8px)', left: 0,
                      background: colors.surface, border: `1px solid ${colors.border}`,
                      borderRadius: 14, padding: '18px 20px',
                      boxShadow: '0 4px 24px rgba(36,24,19,0.12)',
                      zIndex: 100, minWidth: 280,
                    }}>
                      {/* Email */}
                      <div style={{ marginBottom: 14 }}>
                        <div style={{ fontFamily: fonts.mono, fontSize: '0.5rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: colors.muted, marginBottom: 7 }}>
                          Email
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, marginBottom: 6 }}>
                          <span style={{ fontFamily: fonts.mono, fontSize: '0.8125rem', color: colors.ink, userSelect: 'all' }}>
                            sriniananyaa@gmail.com
                          </span>
                          <button
                            onClick={() => { navigator.clipboard.writeText('sriniananyaa@gmail.com'); setCopied(true); setTimeout(() => setCopied(false), 2000) }}
                            style={{ fontFamily: fonts.mono, fontSize: '0.5625rem', letterSpacing: '0.08em', padding: '3px 8px', borderRadius: 6, border: `1px solid ${colors.border}`, background: 'transparent', cursor: 'pointer', color: colors.muted, whiteSpace: 'nowrap', flexShrink: 0 }}
                          >
                            {copied ? 'Copied!' : 'Copy'}
                          </button>
                        </div>
                        <a href="mailto:sriniananyaa@gmail.com" style={{ fontFamily: fonts.body, fontSize: '0.8125rem', color: colors.ember, textDecoration: 'none' }}>
                          Open in mail client →
                        </a>
                      </div>
                      <div style={{ height: 1, background: colors.divider, marginBottom: 14 }} />
                      {/* LinkedIn */}
                      <div>
                        <div style={{ fontFamily: fonts.mono, fontSize: '0.5rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: colors.muted, marginBottom: 7 }}>
                          LinkedIn
                        </div>
                        <a href="https://linkedin.com/in/ananyaa-srinivasan/" target="_blank" rel="noopener" style={{ fontFamily: fonts.body, fontSize: '0.8125rem', color: colors.ember, textDecoration: 'none' }}>
                          linkedin.com/in/ananyaa-srinivasan →
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Current Focus tile */}
            <div style={{ flex: '0 0 clamp(280px, 27%, 340px)' }}>
              <div
                className="hero-tile"
                style={{
                  borderRadius: 20, padding: '28px 26px', minHeight: 220,
                  background: gradient,
                  display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                }}
              >
                <div style={{
                  fontFamily: fonts.mono, fontSize: '0.5625rem', fontWeight: 500,
                  letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,250,242,0.6)',
                }}>
                  CURRENT FOCUS
                </div>
                <div>
                  <div style={{
                    fontFamily: fonts.display, fontWeight: 800, fontSize: '1.375rem',
                    letterSpacing: '-0.03em', color: '#fffaf2', lineHeight: 1.2, marginBottom: 12,
                  }}>
                    Building a functional immunology lab — bench to bedside
                  </div>
                  <div style={{
                    fontFamily: fonts.mono, fontSize: '0.6875rem',
                    color: 'rgba(255,250,242,0.65)', lineHeight: 1.6,
                  }}>
                    Stanford Pathology · 2025–
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 28px' }}>
        <div style={{ height: 1, background: colors.divider }} />
      </div>

      {/* ── What I'm working on ──────────────────────────────────────────────── */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '56px 28px' }}>
        <div className="now-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 56, alignItems: 'start' }}>
          <div className="now-heading">
            <div style={{
              fontFamily: fonts.mono, fontSize: '0.5625rem', fontWeight: 500,
              letterSpacing: '0.12em', textTransform: 'uppercase',
              color: colors.muted, marginBottom: 10,
            }}>
              Right now
            </div>
            <div style={{
              fontFamily: fonts.display, fontWeight: 800, fontSize: '1.625rem',
              letterSpacing: '-0.03em', color: colors.ink, lineHeight: 1.15,
            }}>
              What I&apos;m<br />working on.
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {NOW_ITEMS.map((item, i) => (
              <div
                key={i}
                className="now-item"
                style={{
                  display: 'flex', gap: 20, padding: '16px 0',
                  borderBottom: i < NOW_ITEMS.length - 1 ? `1px solid ${colors.divider}` : 'none',
                }}
              >
                <div style={{
                  fontFamily: fonts.mono, fontSize: '0.5625rem', fontWeight: 500,
                  letterSpacing: '0.10em', textTransform: 'uppercase', color: colors.ember,
                  width: 90, flexShrink: 0, paddingTop: 3,
                }}>
                  {item.eyebrow}
                </div>
                <div style={{ fontFamily: fonts.body, fontSize: '0.9375rem', lineHeight: 1.62, color: colors.ink }}>
                  {item.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 28px' }}>
        <div style={{ height: 1, background: colors.divider }} />
      </div>

      {/* ── Selected work ────────────────────────────────────────────────────── */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '56px 28px' }}>
        <div style={{
          fontFamily: fonts.display, fontWeight: 800, fontSize: '1.625rem',
          letterSpacing: '-0.03em', color: colors.ink, marginBottom: 28,
        }}>
          Selected work
        </div>
        <div className="work-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
          {FEATURED.map((p, i) => (
            <div
              key={i}
              className={`work-card work-card-${i}`}
              onMouseEnter={() => handleCardHover(i)}
              onMouseLeave={() => handleCardLeave(i)}
              onClick={() => onTabChange(p.tab)}
              style={{
                background: colors.surface, border: `1px solid ${colors.hairline}`,
                borderRadius: 20, padding: '22px 24px',
                display: 'flex', flexDirection: 'column', gap: 10,
                boxShadow: hovCard === i ? shadows.cardHover : shadows.card,
                transition: 'box-shadow 240ms cubic-bezier(0.4,0,0.2,1)',
                cursor: 'pointer',
              }}
            >
              <div style={{
                fontFamily: fonts.mono, fontSize: '0.5625rem', fontWeight: 500,
                letterSpacing: '0.12em', textTransform: 'uppercase', color: colors.muted,
              }}>
                {p.eyebrow}
              </div>
              <div style={{
                fontFamily: fonts.display, fontSize: '1rem', fontWeight: 800,
                letterSpacing: '-0.02em', color: colors.ink, lineHeight: 1.2,
              }}>
                {p.title}
              </div>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 'auto' }}>
                {p.tags.map((t) => (
                  <span key={t} style={{
                    fontFamily: fonts.mono, fontSize: '0.5rem', fontWeight: 500,
                    letterSpacing: '0.08em', textTransform: 'uppercase',
                    padding: '3px 8px', background: 'rgba(36,24,19,0.07)',
                    borderRadius: 6, color: colors.muted,
                  }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Interests + Game ─────────────────────────────────────────────────── */}
      <div style={{ background: colors.canvas }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '56px 28px' }}>
          <div className="interests-game-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 56, alignItems: 'start' }}>

            {/* Interests */}
            <div className="interests-heading">
              <div style={{
                fontFamily: fonts.mono, fontSize: '0.5625rem', fontWeight: 500,
                letterSpacing: '0.12em', textTransform: 'uppercase',
                color: colors.muted, marginBottom: 10,
              }}>
                Outside the lab
              </div>
              <div style={{
                fontFamily: fonts.display, fontWeight: 800, fontSize: '1.375rem',
                letterSpacing: '-0.03em', color: colors.ink, marginBottom: 14,
              }}>
                I collect entry points.
              </div>
              <div style={{
                fontFamily: fonts.body, fontSize: '0.9375rem', lineHeight: 1.6,
                color: colors.muted, marginBottom: 18,
              }}>
                I collect entry points. A new city, a new skill, a concept I don&apos;t fully
                understand yet. I&apos;ll follow it until it makes sense. I sketch, write, spend
                too long on puzzles, and have a quiet obsession with psychology and how people
                think. Anything that makes my brain work a little harder is usually worth my
                time, and anything involving chocolate, matcha, or coconut is usually worth
                the detour.
              </div>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {INTERESTS.map((label) => (
                  <span
                    key={label}
                    className="interest-pill"
                    style={{
                      fontFamily: fonts.display, fontWeight: 700, fontSize: '0.8125rem',
                      padding: '7px 16px', borderRadius: 9999,
                      border: `1px solid ${colors.border}`,
                      color: colors.ink, background: colors.surface,
                    }}
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>

            {/* Game */}
            <div className="game-section">
              <div style={{
                fontFamily: fonts.mono, fontSize: '0.5625rem', fontWeight: 500,
                letterSpacing: '0.12em', textTransform: 'uppercase',
                color: colors.muted, marginBottom: 14,
              }}>
                Need a break?
              </div>
              <PathogenGame />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
