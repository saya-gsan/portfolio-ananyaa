'use client'

import { useState, useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { colors, gradient, shadows, fonts } from '@/lib/tokens'
import { useNavigate } from '@/lib/navigationContext'

gsap.registerPlugin()

const TABS = [
  { id: 'home',          label: 'Home',        path: '/' },
  { id: 'core',          label: 'The Science',  path: '/science' },
  { id: 'consulting',    label: 'Consulting',   path: '/consulting' },
  { id: 'computational', label: 'Comp Bio',     path: '/comp-bio' },
  { id: 'blog',          label: 'Blog',         path: '/blog' },
]

function isActive(tabPath: string, pathname: string): boolean {
  if (tabPath === '/') return pathname === '/'
  return pathname.startsWith(tabPath)
}

export default function Nav({ pathname }: { pathname: string }) {
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)
  const navRef      = useRef<HTMLElement>(null)
  const wordmarkRef = useRef<HTMLButtonElement>(null)
  const resumeRef   = useRef<HTMLAnchorElement>(null)

  useGSAP(
    () => {
      gsap.from(navRef.current, { y: -64, opacity: 0, duration: 0.7, ease: 'power3.out', delay: 0.1 })
    },
    { scope: navRef }
  )

  const handleResumeHover = (enter: boolean) => {
    gsap.to(resumeRef.current, {
      scale: enter ? 1.04 : 1,
      duration: 0.2,
      ease: enter ? 'power2.out' : 'power2.in',
    })
  }

  const handleTabClick = (path: string) => {
    navigate(path)
    setMenuOpen(false)
  }

  return (
    <nav
      ref={navRef}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        width: '100%',
        background: 'rgba(255,250,242,0.94)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        borderBottom: `1px solid ${colors.divider}`,
        boxSizing: 'border-box',
      }}
    >
      {/* ── Main bar ── */}
      <div style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 56,
        padding: '0 2rem',
      }}>

        {/* Left: Wordmark */}
        <button
          ref={wordmarkRef}
          onClick={() => handleTabClick('/')}
          onMouseEnter={() => gsap.to(wordmarkRef.current, { letterSpacing: '-0.01em', duration: 0.2 })}
          onMouseLeave={() => gsap.to(wordmarkRef.current, { letterSpacing: '-0.03em', duration: 0.2 })}
          style={{
            fontFamily: fonts.display,
            fontWeight: 800,
            fontSize: '1rem',
            letterSpacing: '-0.03em',
            color: colors.ink,
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
          }}
        >
          Anu Srinivasan
        </button>

        {/* Center: Nav tabs */}
        <div className="hidden nav:flex" style={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          alignItems: 'stretch',
          height: 56,
          gap: 4,
        }}>
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => handleTabClick(t.path)}
              style={{
                fontFamily: fonts.display,
                fontWeight: 700,
                fontSize: '0.9375rem',
                padding: '0 15px',
                cursor: 'pointer',
                color: isActive(t.path, pathname) ? colors.ember : colors.muted,
                borderBottom: isActive(t.path, pathname) ? `2px solid ${colors.ember}` : '2px solid transparent',
                borderTop: 'none',
                borderLeft: 'none',
                borderRight: 'none',
                background: 'none',
                display: 'flex',
                alignItems: 'center',
                transition: 'color 160ms, border-color 160ms',
                whiteSpace: 'nowrap',
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Right: LinkedIn + Resume (desktop) / hamburger (mobile) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>

          <div className="hidden nav:flex" style={{ alignItems: 'center', gap: 8 }}>
            <a
              href="https://linkedin.com/in/ananyaa-srinivasan/"
              target="_blank"
              rel="noopener"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 34,
                height: 34,
                borderRadius: 10,
                border: `1px solid ${colors.border}`,
                color: colors.ink,
                transition: 'background 160ms',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(36,24,19,0.06)' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>

            <a
              ref={resumeRef}
              href="/Ananyaa_Srinivasan_Resume.pdf"
              download
              onMouseEnter={() => handleResumeHover(true)}
              onMouseLeave={() => handleResumeHover(false)}
              style={{
                fontFamily: fonts.display,
                fontWeight: 800,
                fontSize: '0.8125rem',
                letterSpacing: '-0.01em',
                padding: '8px 16px',
                borderRadius: 12,
                border: 'none',
                cursor: 'pointer',
                color: '#fffaf2',
                background: gradient,
                boxShadow: shadows.button,
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                textDecoration: 'none',
              }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Resume
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="flex nav:hidden"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              gap: 5,
              width: 36,
              height: 36,
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '6px 4px',
            }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: 'block',
                  width: 22,
                  height: 2,
                  borderRadius: 2,
                  background: colors.ink,
                  transition: 'transform 220ms ease, opacity 220ms ease',
                  transformOrigin: 'center',
                  transform:
                    i === 0 ? (menuOpen ? 'translateY(7px) rotate(45deg)' : 'none')
                    : i === 2 ? (menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none')
                    : 'none',
                  opacity: i === 1 ? (menuOpen ? 0 : 1) : 1,
                }}
              />
            ))}
          </button>
        </div>
      </div>

      {/* ── Mobile dropdown ── */}
      {menuOpen && (
        <div style={{
          borderTop: `1px solid ${colors.divider}`,
          background: 'rgba(255,250,242,0.97)',
          padding: '8px 0 12px',
          position: 'relative',
          zIndex: 101,
        }}>
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => handleTabClick(t.path)}
              style={{
                display: 'block',
                width: '100%',
                textAlign: 'left',
                padding: '11px 2rem',
                fontFamily: fonts.display,
                fontWeight: 700,
                fontSize: '0.9375rem',
                color: isActive(t.path, pathname) ? colors.ember : colors.ink,
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                borderLeft: isActive(t.path, pathname) ? `3px solid ${colors.ember}` : '3px solid transparent',
              }}
            >
              {t.label}
            </button>
          ))}

          <div style={{
            display: 'flex',
            gap: 10,
            alignItems: 'center',
            padding: '10px 2rem',
            borderTop: `1px solid ${colors.divider}`,
            marginTop: 4,
          }}>
            <a
              href="https://linkedin.com/in/ananyaa-srinivasan/"
              target="_blank"
              rel="noopener"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 34,
                height: 34,
                borderRadius: 10,
                border: `1px solid ${colors.border}`,
                color: colors.ink,
                textDecoration: 'none',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a
              href="/Ananyaa_Srinivasan_Resume.pdf"
              download
              style={{
                fontFamily: fonts.display,
                fontWeight: 800,
                fontSize: '0.8125rem',
                letterSpacing: '-0.01em',
                padding: '8px 16px',
                borderRadius: 12,
                border: 'none',
                cursor: 'pointer',
                color: '#fffaf2',
                background: gradient,
                boxShadow: shadows.button,
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                textDecoration: 'none',
              }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
