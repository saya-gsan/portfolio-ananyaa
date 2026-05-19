'use client'

import { useState, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { colors, fonts } from '@/lib/tokens'
import { POSTS, TAG_META } from '@/lib/posts'
import { useNavigate } from '@/lib/navigationContext'

gsap.registerPlugin(ScrollTrigger)

const ALL_TAGS = ['All', ...Object.keys(TAG_META)]

export default function Blog() {
  const navigate = useNavigate()
  const [activeTag, setActiveTag] = useState('All')
  const [hovPost, setHovPost] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const filteredWithIdx = POSTS
    .map((p, idx) => ({ ...p, idx }))
    .filter((p) => activeTag === 'All' || p.tag === activeTag)

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.from('.blog-eyebrow', { opacity: 0, y: 12, duration: 0.5 }, 0.1)
      tl.from('.blog-title-word', { yPercent: 110, duration: 0.8, stagger: 0.1, ease: 'power4.out' }, 0.2)
      tl.from('.blog-desc', { opacity: 0, y: 18, duration: 0.5 }, 0.55)

      gsap.from('.filter-pill', {
        x: -14, stagger: 0.07, duration: 0.45, ease: 'power3.out', delay: 0.5,
      })
    },
    { scope: containerRef }
  )

  return (
    <div ref={containerRef} style={{ background: colors.canvas, minHeight: '100vh' }}>

      {/* Hero */}
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '80px 32px 52px' }}>
        <div className="blog-eyebrow" style={{
          fontFamily: fonts.mono, fontSize: '0.6875rem', fontWeight: 500,
          letterSpacing: '0.12em', textTransform: 'uppercase', color: colors.muted, marginBottom: 18,
        }}>
          Writing
        </div>
        <div style={{
          fontFamily: fonts.display, fontWeight: 800,
          fontSize: 'clamp(2.25rem,4vw,3.25rem)',
          lineHeight: 1.03, letterSpacing: '-0.04em', color: colors.ink, marginBottom: 18,
        }}>
          {['Things I', 'think about.'].map((line, i) => (
            <div key={i} style={{ overflow: 'hidden', paddingBottom: '0.15em' }}>
              <div className="blog-title-word">{line}</div>
            </div>
          ))}
        </div>
        <div className="blog-desc" style={{
          fontFamily: fonts.body, fontSize: '1.0625rem', lineHeight: 1.65, color: colors.muted,
        }}>
          Science, career, computation, and occasionally things that have nothing to do with any of that.
        </div>
      </div>

      {/* Tag filter */}
      <div className="filter-row" style={{ maxWidth: 800, margin: '0 auto', padding: '0 32px 32px' }}>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {ALL_TAGS.map((t) => (
            <button
              key={t}
              className="filter-pill"
              onClick={() => setActiveTag(t)}
              style={{
                fontFamily: fonts.display, fontWeight: 700, fontSize: '0.8125rem',
                padding: '6px 16px', borderRadius: 9999, cursor: 'pointer',
                transition: 'all 160ms',
                opacity: 1,
                background: activeTag === t ? '#241813' : 'transparent',
                color: activeTag === t ? '#ffffff' : '#241813',
                border: activeTag === t ? 'none' : '1px solid #241813',
              }}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ height: 1, background: colors.divider }} />
      </div>

      {/* Post list */}
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 32px 96px' }}>
        {filteredWithIdx.map((p) => (
          <div
            key={p.idx}
            className="post-item"
            onClick={() => navigate(`/blog/${p.slug}`)}
            onMouseEnter={() => setHovPost(p.idx)}
            onMouseLeave={() => setHovPost(null)}
            style={{
              padding: '32px 0',
              borderBottom: `1px solid ${colors.divider}`,
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
              <div style={{
                fontFamily: fonts.mono, fontSize: '0.5625rem', fontWeight: 500,
                letterSpacing: '0.12em', textTransform: 'uppercase', color: colors.muted,
              }}>
                {p.eyebrow}
              </div>
              <span style={{
                fontFamily: fonts.body, fontWeight: 600, fontSize: '0.6875rem',
                padding: '2px 9px', borderRadius: 9999, flexShrink: 0,
                ...TAG_META[p.tag],
              }}>
                {p.tag}
              </span>
            </div>

            <div style={{
              fontFamily: fonts.display, fontWeight: 800,
              fontSize: 'clamp(1.1rem,2vw,1.3rem)',
              letterSpacing: '-0.025em',
              color: hovPost === p.idx ? colors.ember : colors.ink,
              lineHeight: 1.2, transition: 'color 160ms',
            }}>
              {p.title}
            </div>

            <div style={{
              fontFamily: fonts.body, fontSize: '0.9375rem',
              lineHeight: 1.6, color: colors.muted, maxWidth: '60ch',
            }}>
              {p.desc}
            </div>

            <div style={{
              display: 'flex', alignItems: 'center', gap: 5, color: colors.ember,
              fontFamily: fonts.display, fontWeight: 700, fontSize: '0.875rem',
              marginTop: 2,
              opacity: hovPost === p.idx ? 1 : 0,
              transition: 'opacity 160ms',
            }}>
              Read more
              <svg
                style={{ transform: hovPost === p.idx ? 'translateX(3px)' : 'none', transition: 'transform 200ms ease' }}
                width="13" height="13" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}
