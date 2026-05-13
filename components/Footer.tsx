'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { colors, fonts } from '@/lib/tokens'
import type { Tab } from './App'

gsap.registerPlugin(ScrollTrigger)

export default function Footer({ onTabChange }: { onTabChange: (t: Tab) => void }) {
  const ref = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      gsap.from(ref.current, {
        opacity: 0,
        y: 24,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 95%',
        },
      })
    },
    { scope: ref }
  )

  return (
    <footer
      ref={ref}
      style={{
        borderTop: `1px solid ${colors.divider}`,
        padding: '28px 2rem',
        background: colors.surface,
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      <div
        className="footer-grid"
        style={{
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
          alignItems: 'center',
          gap: 12,
        }}
      >
        {/* Left — name */}
        <div>
          <button
            onClick={() => onTabChange('home')}
            style={{
              fontFamily: fonts.display,
              fontWeight: 800,
              fontSize: '0.875rem',
              letterSpacing: '-0.02em',
              color: colors.ink,
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
            }}
          >
            Anu Srinivasan
          </button>
        </div>

        {/* Center — location (truly centered via grid) */}
        <div
          className="footer-center"
          style={{
            fontFamily: fonts.mono,
            fontSize: '0.875rem',
            color: colors.muted,
            letterSpacing: '0.08em',
            whiteSpace: 'nowrap',
          }}
        >
          Bay Area, CA · Open to collaborations · Exploring what&apos;s next
        </div>

        {/* Right — links */}
        <div
          className="footer-right"
          style={{ display: 'flex', gap: 16, alignItems: 'center', justifyContent: 'flex-end' }}
        >
          <a
            href="https://linkedin.com/in/ananyaa-srinivasan/"
            target="_blank"
            rel="noopener"
            style={{
              fontFamily: fonts.body,
              fontSize: '0.875rem',
              color: colors.muted,
              textDecoration: 'none',
              transition: 'color 160ms',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = colors.ink }}
            onMouseLeave={(e) => { e.currentTarget.style.color = colors.muted }}
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/saya-gsan"
            target="_blank"
            rel="noopener"
            style={{
              fontFamily: fonts.body,
              fontSize: '0.875rem',
              color: colors.muted,
              textDecoration: 'none',
              transition: 'color 160ms',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = colors.ink }}
            onMouseLeave={(e) => { e.currentTarget.style.color = colors.muted }}
          >
            GitHub
          </a>
          <span style={{ fontFamily: fonts.mono, fontSize: '0.75rem', color: colors.muted }}>
            2025
          </span>
        </div>
      </div>
    </footer>
  )
}
