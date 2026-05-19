'use client'

import { useNavigate } from '@/lib/navigationContext'
import type { BlogPost } from '@/lib/posts'
import { TAG_META } from '@/lib/posts'
import { colors, fonts } from '@/lib/tokens'

export default function BlogPostView({ post }: { post: BlogPost }) {
  const navigate = useNavigate()

  return (
    <div style={{ background: colors.canvas, minHeight: '100vh' }}>
      <div style={{ maxWidth: 680, margin: '0 auto', padding: '40px 32px 100px' }}>

        {/* Back */}
        <button
          onClick={() => navigate('/blog')}
          style={{
            fontFamily: fonts.display, fontWeight: 700, fontSize: '0.875rem',
            padding: '8px 0', border: 'none', background: 'transparent',
            cursor: 'pointer', color: colors.muted,
            display: 'inline-flex', alignItems: 'center', gap: 6,
            marginBottom: 48, transition: 'color 160ms',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = colors.ink }}
          onMouseLeave={(e) => { e.currentTarget.style.color = colors.muted }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
          Back to writing
        </button>

        {/* Post header */}
        <div style={{ marginBottom: 40 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <div style={{
              fontFamily: fonts.mono, fontSize: '0.5625rem', fontWeight: 500,
              letterSpacing: '0.12em', textTransform: 'uppercase', color: colors.muted,
            }}>
              {post.eyebrow}
            </div>
            <span style={{
              fontFamily: fonts.body, fontWeight: 600, fontSize: '0.6875rem',
              padding: '2px 9px', borderRadius: 9999, ...TAG_META[post.tag],
            }}>
              {post.tag}
            </span>
          </div>

          <h1 style={{
            fontFamily: fonts.display, fontWeight: 800,
            fontSize: 'clamp(1.75rem,3.5vw,2.375rem)',
            letterSpacing: '-0.04em', color: colors.ink,
            lineHeight: 1.1, marginBottom: 16,
          }}>
            {post.title}
          </h1>

          <p style={{
            fontFamily: fonts.body, fontSize: '1.125rem',
            lineHeight: 1.6, color: colors.muted, marginBottom: 0,
          }}>
            {post.desc}
          </p>
        </div>

        <div style={{ height: 1, background: colors.divider, marginBottom: 40 }} />

        {/* Content */}
        <div>
          {post.content.map((block, i) => {
            if (block.type === 'h2') {
              return (
                <h2 key={i} style={{
                  fontFamily: fonts.display, fontWeight: 800,
                  fontSize: '1.1875rem', letterSpacing: '-0.025em',
                  color: colors.ink, marginTop: 40, marginBottom: 14,
                }}>
                  {block.text}
                </h2>
              )
            }
            if (block.type === 'p') {
              return (
                <p key={i} style={{
                  fontFamily: fonts.body, fontSize: '1.0625rem',
                  lineHeight: 1.72, color: '#4a3f38',
                  marginBottom: 20,
                }}>
                  {block.text}
                </p>
              )
            }
            if (block.type === 'img') {
              return (
                <div key={i} style={{ margin: '36px 0' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={block.src}
                    alt={block.caption}
                    style={{ width: '100%', borderRadius: 8, display: 'block' }}
                  />
                  <p style={{
                    fontFamily: fonts.mono, fontSize: '0.6875rem',
                    letterSpacing: '0.06em', color: '#888',
                    textAlign: 'center', marginTop: 10, marginBottom: 0,
                  }}>
                    {block.caption}
                  </p>
                </div>
              )
            }
            return null
          })}
        </div>

      </div>
    </div>
  )
}
