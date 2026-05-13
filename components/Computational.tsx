'use client'

import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { fonts } from '@/lib/tokens'

gsap.registerPlugin(ScrollTrigger)

const GREEN = '#4ade80'
const DIM_GREEN = 'rgba(74,222,128,0.45)'
const BG = '#0c0e0c'
const BORDER = 'rgba(74,222,128,0.13)'

const PROJECTS = [
  {
    name: 'nk-cytotox-predictor',
    lang: 'Python · scikit-learn',
    desc: 'AI-based predictive model for NK cell cytotoxicity across feeder cell configurations (ICAM-1, CD58, 41BBL, aCD56) and tumor targets (Raji, U251). Trained on experimental cytotoxicity data from the Carl June Lab; uses ANOVA and paired t-tests on the underlying expansion/cytotoxicity dataset to flag combinations worth running in the wet lab.',
    status: 'complete',
    tags: ['Python', 'scikit-learn', 'NK cells', 'ML', 'Cell therapy'],
  },
  {
    name: 'flow-panel-builder',
    lang: 'Python',
    desc: 'A side project keeping my coding muscle warm: a flow cytometry panel builder for spectral and conventional cytometers. Pulls fluorochrome spectra, scores spillover, and suggests antibody-fluor pairings given the panel context. Built partly to make my own Stanford panel design faster, partly as a sanity check that I can still ship clean Python without copilots.',
    status: 'active',
    tags: ['Python', 'Flow Cytometry', 'Spectral', 'CLI'],
  },
]

const SKILLS = [
  { cat: 'Languages',    items: ['Python', 'Bash', 'Basic R'] },
  { cat: 'Data / Stats', items: ['Design of Experiments', 'JMP', 'GraphPad Prism', 'Pandas', 'numpy'] },
  { cat: 'Flow tooling', items: ['FlowJo', 'FCS Express', 'SpectroFlo'] },
  { cat: 'Lab software', items: ['SnapGene', 'EPIC', 'ELN (Benchling)', 'Buffer Maker', 'PyMOL', 'AutoDock Vina'] },
]

const FULL_TEXT = 'anu@stanford:~$ ls projects/'

export default function Computational() {
  const [typed, setTyped] = useState('')
  const [blink, setBlink] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)
  const scanlineRef = useRef<HTMLDivElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)

  // Typewriter effect
  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i <= FULL_TEXT.length) {
        setTyped(FULL_TEXT.slice(0, i))
        i++
      } else {
        clearInterval(timer)
      }
    }, 52)
    return () => clearInterval(timer)
  }, [])

  // Cursor blink
  useEffect(() => {
    const timer = setInterval(() => setBlink((b) => !b), 530)
    return () => clearInterval(timer)
  }, [])

  useGSAP(
    () => {
      // Terminal window slides up
      gsap.from(terminalRef.current, {
        opacity: 0, y: 30, duration: 0.7, ease: 'power3.out', delay: 0.1,
      })

      // Scanline with GSAP (smooth, controllable)
      gsap.to(scanlineRef.current, {
        yPercent: 500,
        duration: 3.5,
        ease: 'none',
        repeat: -1,
        repeatDelay: 0.8,
      })

      // Headline words
      gsap.from('.comp-eyebrow', { opacity: 0, y: 12, duration: 0.5, delay: 0.4 })
      gsap.from('.comp-title-word', {
        yPercent: 110, duration: 0.8, stagger: 0.1, ease: 'power4.out', delay: 0.5,
      })
      gsap.from('.comp-bio', { opacity: 0, y: 20, duration: 0.55, delay: 0.85 })
      gsap.from('.comp-gh-link', { opacity: 0, y: 12, duration: 0.45, delay: 1.0 })

      // Project cards ScrollTrigger
      gsap.from('.project-card', {
        opacity: 0, y: 28, stagger: 0.14, duration: 0.6, ease: 'power3.out',
        scrollTrigger: { trigger: '.projects-section', start: 'top 82%' },
      })

      // Skill categories stagger
      gsap.from('.skill-cat', {
        opacity: 0, y: 20, stagger: 0.1, duration: 0.5,
        scrollTrigger: { trigger: '.skills-section', start: 'top 82%' },
      })
    },
    { scope: containerRef }
  )

  return (
    <div
      ref={containerRef}
      style={{ background: BG, minHeight: '100vh', color: GREEN, fontFamily: fonts.mono }}
    >

      {/* ── Terminal hero ───────────────────────────────────────────────────── */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '64px 28px 40px' }}>
        <div
          ref={terminalRef}
          style={{
            background: '#090b09', border: `1px solid ${BORDER}`, borderRadius: 14,
            padding: '20px 24px', fontSize: '0.875rem', lineHeight: 1.75,
            position: 'relative', overflow: 'hidden',
          }}
        >
          {/* Scanline */}
          <div
            ref={scanlineRef}
            style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
              background: 'rgba(74,222,128,0.08)', pointerEvents: 'none',
            }}
          />

          {/* Traffic lights */}
          <div style={{ display: 'flex', gap: 7, marginBottom: 16, alignItems: 'center' }}>
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f57' }} />
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#febc2e' }} />
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#28c840' }} />
            <span style={{ marginLeft: 10, fontSize: '0.6875rem', color: DIM_GREEN }}>anu — bash — 100×24</span>
          </div>

          <div style={{ color: DIM_GREEN }}>Last login: Mon May  4 09:14:02 on ttys001</div>
          <div style={{ marginTop: 4 }}>
            <span style={{ color: GREEN }}>{typed}</span>
            <span
              style={{
                opacity: blink ? 1 : 0,
                borderLeft: `2px solid ${GREEN}`,
                marginLeft: 1,
                transition: 'opacity 100ms',
              }}
            >
              &nbsp;
            </span>
          </div>
          <div style={{ marginTop: 8, color: DIM_GREEN }}>
            {'nk-cytotox-predictor/    flow-panel-builder/'}
          </div>
          <div style={{ color: DIM_GREEN, marginTop: 4 }}>
            anu@stanford:~$
            <span style={{ opacity: blink ? 1 : 0, borderLeft: `2px solid ${GREEN}`, marginLeft: 4 }}>
              &nbsp;
            </span>
          </div>
        </div>
      </div>

      {/* ── Headline ──────────────────────────────────────────────────────────── */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 28px 52px' }}>
        <div className="comp-eyebrow" style={{
          fontSize: '0.5625rem', letterSpacing: '0.14em',
          textTransform: 'uppercase', color: DIM_GREEN, marginBottom: 14,
        }}>
          // computational work
        </div>

        <div style={{
          fontFamily: fonts.display, fontWeight: 800,
          fontSize: 'clamp(2rem,4vw,3rem)',
          letterSpacing: '-0.04em', color: '#fffaf2', lineHeight: 1.04, marginBottom: 16,
        }}>
          {["Code that decodes", 'biology.'].map((line, i) => (
            <div key={i} style={{ overflow: 'hidden' }}>
              <div className="comp-title-word">{line}</div>
            </div>
          ))}
        </div>

        <div className="comp-bio" style={{
          fontFamily: fonts.body, fontSize: '1rem', lineHeight: 1.65,
          color: 'rgba(255,250,242,0.5)', maxWidth: '54ch', marginBottom: 24,
        }}>
          I&apos;m a wet-lab biologist first, but the day I stopped fighting Python is the day my
          experiments got better. These are the tools I&apos;ve built to make my own work faster, and
          the data work I&apos;ve layered on top of cell therapy and process development projects.
        </div>

        <a
          className="comp-gh-link"
          href="https://github.com/saya-gsan"
          target="_blank"
          rel="noopener"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            fontFamily: fonts.display, fontWeight: 700, fontSize: '0.875rem',
            padding: '10px 18px', borderRadius: 10, border: `1px solid ${BORDER}`,
            color: GREEN, textDecoration: 'none',
            background: 'rgba(74,222,128,0.05)',
            transition: 'background 160ms, border-color 160ms',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(74,222,128,0.10)'
            e.currentTarget.style.borderColor = 'rgba(74,222,128,0.28)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(74,222,128,0.05)'
            e.currentTarget.style.borderColor = BORDER
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49.99.1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
          </svg>
          View on GitHub
        </a>
      </div>

      {/* ── Projects ──────────────────────────────────────────────────────────── */}
      <div className="projects-section" style={{ maxWidth: 1280, margin: '0 auto', padding: '0 28px 52px' }}>
        <div style={{ fontSize: '0.5625rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: DIM_GREEN, marginBottom: 18 }}>
          // personal projects · built independently
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {PROJECTS.map((p, i) => (
            <div
              key={i}
              className="project-card term-card"
              style={{ border: `1px solid ${BORDER}`, borderRadius: 14, padding: '22px 24px', cursor: 'pointer' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10, flexWrap: 'wrap', gap: 8 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ fontSize: '1rem', fontWeight: 500, color: GREEN }}>{p.name}</span>
                  <span style={{
                    fontSize: '0.5625rem', padding: '2px 8px', borderRadius: 4,
                    border: `1px solid ${p.status === 'active' ? 'rgba(74,222,128,0.3)' : BORDER}`,
                    color: p.status === 'active' ? GREEN : DIM_GREEN,
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                  }}>
                    {p.status === 'active' ? '● in progress' : '✓ shipped'}
                  </span>
                </div>
                <span style={{ fontSize: '0.6875rem', color: DIM_GREEN }}>{p.lang}</span>
              </div>
              <div style={{ fontFamily: fonts.body, fontSize: '0.9375rem', lineHeight: 1.6, color: 'rgba(255,250,242,0.55)', marginBottom: 14 }}>
                {p.desc}
              </div>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {p.tags.map((t) => (
                  <span key={t} style={{
                    fontSize: '0.5625rem', padding: '2px 8px', borderRadius: 4,
                    border: `1px solid ${BORDER}`, color: DIM_GREEN,
                    letterSpacing: '0.08em', textTransform: 'uppercase',
                  }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Skills ───────────────────────────────────────────────────────────── */}
      <div className="skills-section" style={{ maxWidth: 1280, margin: '0 auto', padding: '0 28px 80px' }}>
        <div style={{ fontSize: '0.5625rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: DIM_GREEN, marginBottom: 20 }}>
          // skill stack
        </div>
        <div
          className="skill-grid"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 28 }}
        >
          {SKILLS.map(({ cat, items }) => (
            <div key={cat} className="skill-cat">
              <div style={{ fontSize: '0.5625rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: DIM_GREEN, marginBottom: 12 }}>
                {cat}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {items.map((item) => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ color: '#4ade8066', fontSize: '0.6875rem' }}>›</span>
                    <span style={{ fontFamily: fonts.body, fontSize: '0.875rem', color: 'rgba(255,250,242,0.75)' }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
