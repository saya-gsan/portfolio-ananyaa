'use client'

import { useRef, useState, useCallback, useEffect } from 'react'
import { colors, fonts } from '@/lib/tokens'

const GW = 580, GH = 155, GROUND = 120, GRAV = 0.45

type Difficulty = 'easy' | 'medium' | 'hard'

const DIFF_CFG: Record<Difficulty, { speed: number; spawnInterval: number; hitPad: number; label: string; sub: string; jumpV: number }> = {
  easy:   { speed: 2.52, spawnInterval: 110, hitPad: 7, label: 'Resting state',     sub: 'slow cells · generous hitbox',      jumpV: -12.5 },
  medium: { speed: 3.6,  spawnInterval: 85,  hitPad: 4, label: 'Immune activation', sub: 'default speed · standard density',  jumpV: -11.2 },
  hard:   { speed: 4.68, spawnInterval: 60,  hitPad: 2, label: 'Cytokine storm',    sub: 'fast · dense · cells track you',    jumpV: -10   },
}

interface Obstacle {
  x: number; type: string
  yOff: number; yVel: number
}

interface GameState {
  py: number; pvy: number; jumping: boolean
  obstacles: Obstacle[]
  frame: number; score: number; speed: number
  spawnCD: number; spawnInterval: number; alive: boolean
  lastHitType: string; difficulty: Difficulty
  newBestFlash: number; lastTimestamp: number
}

// ── Cell radius for collision ────────────────────────────────────────────────
function cellRadius(type: string): number {
  if (type === 'macro')          return 18
if (type === 'tcell_adaptive') return 9
  if (type === 'complement')     return 6
  if (type === 'neutrophil')     return 12
  return 13
}

// ── Draw pathogen (player) ───────────────────────────────────────────────────
function drawPathogen(ctx: CanvasRenderingContext2D, x: number, y: number) {
  const r = 13, cx = x, cy = y - r
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2
    ctx.strokeStyle = '#22c55e'; ctx.lineWidth = 1.5; ctx.lineCap = 'round'
    ctx.beginPath()
    ctx.moveTo(cx + r * Math.cos(a), cy + r * Math.sin(a))
    ctx.lineTo(cx + (r + 6) * Math.cos(a), cy + (r + 6) * Math.sin(a))
    ctx.stroke()
    ctx.fillStyle = '#16a34a'
    ctx.beginPath()
    ctx.arc(cx + (r + 6) * Math.cos(a), cy + (r + 6) * Math.sin(a), 2, 0, Math.PI * 2)
    ctx.fill()
  }
  ctx.fillStyle = '#4ade80'
  ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.fill()
  ctx.strokeStyle = '#22c55e'; ctx.lineWidth = 1; ctx.stroke()
  ctx.fillStyle = '#14532d'
  ctx.beginPath(); ctx.arc(cx - 4, cy - 3, 2.2, 0, Math.PI * 2); ctx.fill()
  ctx.beginPath(); ctx.arc(cx + 3, cy - 3, 2.2, 0, Math.PI * 2); ctx.fill()
  ctx.strokeStyle = '#14532d'; ctx.lineWidth = 1.5
  ctx.beginPath(); ctx.arc(cx, cy + 1, 4, 0.2, Math.PI - 0.2); ctx.stroke()
}

// ── Draw immune cell ─────────────────────────────────────────────────────────
function drawCell(ctx: CanvasRenderingContext2D, x: number, groundY: number, type: string, yOff = 0) {
  const baseY = groundY + yOff

  if (type === 'tcell') {
    // NK cell — red, 3 arms
    const r = 13, cx = x, cy = baseY - r
    ctx.strokeStyle = '#d4451f'; ctx.lineWidth = 2.5; ctx.lineCap = 'round'
    for (let i = 0; i < 3; i++) {
      const a = (i / 3) * Math.PI * 2 - Math.PI / 2
      const ex = cx + (r + 13) * Math.cos(a), ey = cy + (r + 13) * Math.sin(a)
      ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(ex, ey); ctx.stroke()
      ;[0.42, -0.42].forEach(da => {
        ctx.beginPath(); ctx.moveTo(ex, ey)
        ctx.lineTo(ex + 6 * Math.cos(a + da), ey + 6 * Math.sin(a + da)); ctx.stroke()
      })
    }
    ctx.fillStyle = '#d4451f'
    ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.fill()
    ctx.fillStyle = 'rgba(255,250,242,0.9)'
    ctx.font = "bold 7px 'JetBrains Mono', monospace"
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle'
    ctx.fillText('NK', cx, cy)
  }

  else if (type === 'antibody') {
    // B cell — dark, Y-shape antibody
    const r = 13, cx = x, cy = baseY - r
    ctx.strokeStyle = '#241813'; ctx.lineWidth = 2.5; ctx.lineCap = 'round'
    for (let i = 0; i < 2; i++) {
      const a = (i / 2) * Math.PI * 2 - Math.PI / 2
      const ex = cx + (r + 13) * Math.cos(a), ey = cy + (r + 13) * Math.sin(a)
      ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(ex, ey); ctx.stroke()
      ;[0.42, -0.42].forEach(da => {
        ctx.beginPath(); ctx.moveTo(ex, ey)
        ctx.lineTo(ex + 6 * Math.cos(a + da), ey + 6 * Math.sin(a + da)); ctx.stroke()
      })
    }
    ctx.fillStyle = '#241813'
    ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.fill()
    ctx.fillStyle = 'rgba(255,250,242,0.9)'
    ctx.font = "bold 7px 'JetBrains Mono', monospace"
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle'
    ctx.fillText('Ab', cx, cy)
  }

  else if (type === 'macro') {
    // Macrophage — large grey, pseudopod arms
    const r = 18, cx = x, cy = baseY - r
    ctx.strokeStyle = '#7a6c63'; ctx.lineWidth = 2.5; ctx.lineCap = 'round'
    for (let i = 0; i < 4; i++) {
      const a = (i / 4) * Math.PI * 2 - Math.PI / 4
      ctx.beginPath(); ctx.moveTo(cx, cy)
      ctx.lineTo(cx + (r + 10) * Math.cos(a), cy + (r + 10) * Math.sin(a)); ctx.stroke()
    }
    ctx.fillStyle = '#7a6c63'
    ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.fill()
    ctx.fillStyle = 'rgba(255,250,242,0.9)'
    ctx.font = "bold 8px 'JetBrains Mono', monospace"
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle'
    ctx.fillText('M', cx, cy)
  }

  else if (type === 'neutrophil') {
    // Multi-lobed nucleus — amber, 5 lobes arranged in rough cluster
    const cx = x, cy = baseY - 14
    const lobes = [{ dx: -7, dy: 4 }, { dx: 0, dy: -3 }, { dx: 7, dy: 4 }, { dx: -4, dy: 10 }, { dx: 4, dy: 10 }]
    ctx.fillStyle = '#f59e0b'
    lobes.forEach(({ dx, dy }) => {
      ctx.beginPath(); ctx.arc(cx + dx, cy + dy, 7, 0, Math.PI * 2); ctx.fill()
    })
    ctx.strokeStyle = '#d97706'; ctx.lineWidth = 1.2
    lobes.forEach(({ dx, dy }) => {
      ctx.beginPath(); ctx.arc(cx + dx, cy + dy, 7, 0, Math.PI * 2); ctx.stroke()
    })
    ctx.fillStyle = '#92400e'
    ctx.font = "bold 6px 'JetBrains Mono', monospace"
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle'
    ctx.fillText('N', cx, cy + 3)
  }

  else if (type === 'tcell_adaptive') {
    // T cell — small sky-blue, forked TCR receptors
    const r = 9, cx = x, cy = baseY - r
    ctx.strokeStyle = '#0ea5e9'; ctx.lineWidth = 2; ctx.lineCap = 'round'
    ;[-0.45, 0.45].forEach(offset => {
      const a = -Math.PI / 2 + offset
      const ex = cx + (r + 8) * Math.cos(a), ey = cy + (r + 8) * Math.sin(a)
      ctx.beginPath(); ctx.moveTo(cx + r * Math.cos(a), cy + r * Math.sin(a))
      ctx.lineTo(ex, ey); ctx.stroke()
      ;[0.4, -0.4].forEach(da => {
        ctx.beginPath(); ctx.moveTo(ex, ey)
        ctx.lineTo(ex + 6 * Math.cos(a + da), ey + 6 * Math.sin(a + da)); ctx.stroke()
      })
    })
    ctx.fillStyle = '#0ea5e9'
    ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.fill()
    ctx.fillStyle = 'rgba(255,250,242,0.9)'
    ctx.font = "bold 6px 'JetBrains Mono', monospace"
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle'
    ctx.fillText('T', cx, cy)
  }

  else if (type === 'complement') {
    // Tiny hexagon — pink, hard to see until close
    const r = 6, cx = x, cy = baseY - r - 2
    ctx.fillStyle = '#ec4899'
    ctx.beginPath()
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2 - Math.PI / 6
      i === 0 ? ctx.moveTo(cx + r * Math.cos(a), cy + r * Math.sin(a))
               : ctx.lineTo(cx + r * Math.cos(a), cy + r * Math.sin(a))
    }
    ctx.closePath(); ctx.fill()
    ctx.strokeStyle = '#be185d'; ctx.lineWidth = 1; ctx.stroke()
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2
      ctx.strokeStyle = '#f9a8d4'; ctx.lineWidth = 0.8
      ctx.beginPath()
      ctx.moveTo(cx + r * 0.6 * Math.cos(a), cy + r * 0.6 * Math.sin(a))
      ctx.lineTo(cx + (r + 4) * Math.cos(a), cy + (r + 4) * Math.sin(a))
      ctx.stroke()
    }
  }
}

// ── Loss messages ────────────────────────────────────────────────────────────
const CELL_MESSAGES: Record<string, { name: string; blurb: string }> = {
  tcell:          { name: 'NK cell',           blurb: 'NK cells punch holes in infected cells using toxic proteins called perforins — no mercy, no escape.' },
  antibody:       { name: 'B cell',            blurb: 'B cells tag pathogens with antibodies so the rest of the immune system knows exactly what to destroy.' },
  macro:          { name: 'macrophage',         blurb: 'Macrophages engulf and digest pathogens whole — you just became lunch.' },
  neutrophil:     { name: 'neutrophil',         blurb: 'Neutrophils are the first responders of the immune system. They swarm infection sites and release enzymes that destroy anything foreign. Fast, aggressive, no mercy.' },
tcell_adaptive: { name: 'T cell',             blurb: 'T cells are the assassins of the adaptive immune system, trained to recognize and destroy specific targets. Once they know what you are, there\'s no hiding.' },
  complement:     { name: 'complement protein', blurb: 'Complement proteins coat pathogens and punch holes in their membranes. You were tagged, coated, and dissolved. Classic.' },
}

// ── Component ────────────────────────────────────────────────────────────────
export default function PathogenGame() {
  const canvasRef  = useRef<HTMLCanvasElement>(null)
  const stateRef   = useRef<GameState | null>(null)
  const rafRef     = useRef<number>(0)
  const bestRef    = useRef(0)

  const [gameState,  setGameState]  = useState<'idle' | 'playing' | 'dead'>('idle')
  const [difficulty, setDifficulty] = useState<Difficulty | null>(null)
  const [score,      setScore]      = useState(0)
  const [isNewBest,  setIsNewBest]  = useState(false)
  const [mounted,    setMounted]    = useState(false)
  const [best,       setBest]       = useState(0)
  const [hitType,    setHitType]    = useState<string>('tcell')

  // Hydration-safe: read localStorage only after mount so SSR and client agree on 0
  useEffect(() => {
    setMounted(true)
    setBest(parseInt(localStorage.getItem('pg-best') || '0'))
  }, [])

  // Keep bestRef in sync so tick closure can read latest value
  useEffect(() => { bestRef.current = best }, [best])

  const initState = (diff: Difficulty): GameState => {
    const cfg = DIFF_CFG[diff]
    return {
      py: GROUND, pvy: 0, jumping: false,
      obstacles: [], frame: 0, score: 0,
      speed: cfg.speed, spawnCD: 50, spawnInterval: cfg.spawnInterval,
      alive: true, lastHitType: 'tcell', difficulty: diff,
      newBestFlash: 0, lastTimestamp: 0,
    }
  }

  const tick = useCallback((timestamp: number) => {
    const s = stateRef.current
    if (!s || !s.alive) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!

    // Delta time: normalize to 60fps baseline, cap at 3 frames (~50ms) to prevent jumps after tab switch
    const rawDt = s.lastTimestamp === 0 ? 16.667 : timestamp - s.lastTimestamp
    const dt = Math.min(rawDt / 16.667, 3)
    s.lastTimestamp = timestamp

    s.frame += dt; s.score += dt
    const scoreVal = Math.floor(s.score / 6)
    const cfg = DIFF_CFG[s.difficulty]

    // ── Escalating speed/density ───────────────────────────────────────────
    const targetSpeed = scoreVal < 200 ? cfg.speed
      : scoreVal < 500 ? cfg.speed + 0.9
      : cfg.speed + 1.8
    const targetInterval = scoreVal < 200 ? cfg.spawnInterval
      : scoreVal < 500 ? Math.max(cfg.spawnInterval - 15, 42)
      : Math.max(cfg.spawnInterval - 28, 35)
    s.speed         += (targetSpeed    - s.speed)         * 0.008 * dt
    s.spawnInterval += (targetInterval - s.spawnInterval) * 0.008 * dt

    // ── Physics ────────────────────────────────────────────────────────────
    if (s.jumping || s.py < GROUND) {
      s.pvy += GRAV * dt
      s.py = Math.min(s.py + s.pvy * dt, GROUND)

      if (s.py >= GROUND) { s.py = GROUND; s.pvy = 0; s.jumping = false }
    }

    // ── Spawn ──────────────────────────────────────────────────────────────
    s.spawnCD -= dt
    if (s.spawnCD <= 0) {
      const pool = ['tcell', 'tcell', 'antibody', 'macro', 'neutrophil', 'neutrophil', 'complement']
if (scoreVal >= 300) pool.push('tcell_adaptive', 'tcell_adaptive')

      const chosen = pool[Math.floor(Math.random() * pool.length)]

      if (chosen === 'complement') {
        // Cluster of 3 staggered
        for (let i = 0; i < 3; i++) {
          s.obstacles.push({ x: GW + 40 + i * 24, type: 'complement', yOff: 0, yVel: 0 })
        }
      } else {
        s.obstacles.push({ x: GW + 40, type: chosen, yOff: 0, yVel: 0 })
      }

      // Extra cells at higher scores
      if (scoreVal >= 200 && Math.random() < 0.35) {
        s.obstacles.push({ x: GW + 110, type: 'complement', yOff: 0, yVel: 0 })
      }
      if (scoreVal >= 500 && Math.random() < 0.4) {
        s.obstacles.push({ x: GW + 80, type: pool[Math.floor(Math.random() * pool.length)], yOff: 0, yVel: 0 })
      }

      s.spawnCD = Math.floor(s.spawnInterval) + Math.floor(Math.random() * 28)
    }

    // ── Move obstacles ─────────────────────────────────────────────────────
    s.obstacles = s.obstacles.filter(o => o.x > -80)
    s.obstacles.forEach(o => {
      let spd = s.speed

      if (o.type === 'neutrophil') {
        // Erratic y-bob
        o.yVel += (Math.random() - 0.5) * 1.0
        o.yVel  = Math.max(-3.5, Math.min(3.5, o.yVel))
        o.yOff += o.yVel * dt
        o.yOff  = Math.max(-18, Math.min(8, o.yOff))
        spd *= 1.15  // naturally faster
      }
if (o.type === 'tcell_adaptive') spd *= 1.45 // fast T cell

      // Hard mode / score 500+: periodic burst toward player
      const isBurstMode = s.difficulty === 'hard' || scoreVal >= 500
      if (isBurstMode && o.x > 80 && Math.floor(s.frame) % 160 < 18) spd *= 1.9

      o.x -= spd * dt
    })

    // ── Collision ──────────────────────────────────────────────────────────
    const PR = 11, px = 70
    const hitPad = cfg.hitPad
    for (const o of s.obstacles) {
      const or = cellRadius(o.type)
      const oy = GROUND + o.yOff
      const dx = px - o.x, dy = (s.py - PR) - (oy - or)
      if (Math.sqrt(dx * dx + dy * dy) < PR + or - hitPad) {
        s.alive = false
        s.lastHitType = o.type
        const finalScore = Math.floor(s.score / 6)
        const newBestVal = Math.max(bestRef.current, finalScore)
        const beaten = finalScore > bestRef.current
        setBest(newBestVal)
        localStorage.setItem('pg-best', String(newBestVal))
        setScore(finalScore)
        setIsNewBest(beaten)
        setHitType(o.type)
        setGameState('dead')
        return
      }
    }

    // ── New best flash during play ─────────────────────────────────────────
    if (s.newBestFlash > 0) s.newBestFlash -= dt
    if (scoreVal > 0 && scoreVal > bestRef.current && s.newBestFlash <= 0) {
      s.newBestFlash = 100
    }

    setScore(scoreVal)

    // ── Draw ───────────────────────────────────────────────────────────────
    ctx.clearRect(0, 0, GW, GH)
    ctx.fillStyle = 'rgba(247,241,232,0.4)'; ctx.fillRect(0, 0, GW, GH)
    ctx.strokeStyle = 'rgba(36,24,19,0.12)'; ctx.lineWidth = 1; ctx.setLineDash([4, 6])
    ctx.beginPath(); ctx.moveTo(0, GROUND + 2); ctx.lineTo(GW, GROUND + 2); ctx.stroke()
    ctx.setLineDash([])

    s.obstacles.forEach(o => drawCell(ctx, o.x, GROUND, o.type, o.yOff))
    drawPathogen(ctx, 70, s.py)

    if (s.newBestFlash > 0) {
      const alpha = Math.min(s.newBestFlash / 30, 1) * 0.9
      ctx.fillStyle = `rgba(212,69,31,${alpha})`
      ctx.font = "700 10px 'JetBrains Mono', monospace"
      ctx.textAlign = 'right'; ctx.textBaseline = 'top'
      ctx.fillText('NEW BEST', GW - 14, 12)
    }

    rafRef.current = requestAnimationFrame(tick)
  }, [])

  const start = useCallback((diff: Difficulty) => {
    stateRef.current = initState(diff)
    setGameState('playing')
    setScore(0)
    setIsNewBest(false)
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    rafRef.current = requestAnimationFrame(tick)
  }, [tick])

  const jump = useCallback(() => {
    if (gameState === 'dead' && difficulty) { start(difficulty); return }
    if (gameState === 'idle') return  // wait for difficulty selection
    const s = stateRef.current
    if (s && !s.jumping && s.py >= GROUND) { s.pvy = DIFF_CFG[s.difficulty].jumpV; s.jumping = true }
  }, [gameState, difficulty, start])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.code === 'Space' || e.key === 'ArrowUp') { e.preventDefault(); jump() }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [jump])

  useEffect(() => () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }, [])

  // ── Canvas for idle / dead screens ────────────────────────────────────────
  useEffect(() => {
    if (gameState !== 'idle' && gameState !== 'dead') return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    ctx.clearRect(0, 0, GW, GH)
    ctx.fillStyle = 'rgba(247,241,232,0.4)'; ctx.fillRect(0, 0, GW, GH)
    ctx.strokeStyle = 'rgba(36,24,19,0.12)'; ctx.lineWidth = 1; ctx.setLineDash([4, 6])
    ctx.beginPath(); ctx.moveTo(0, GROUND + 2); ctx.lineTo(GW, GROUND + 2); ctx.stroke()
    ctx.setLineDash([])
    drawPathogen(ctx, 70, GROUND)
    if (gameState === 'dead') {
      drawCell(ctx, GW - 45, GROUND, hitType, 0)
      if (isNewBest) {
        ctx.fillStyle = '#d4451f'
        ctx.font = "700 11px 'JetBrains Mono', monospace"
        ctx.textAlign = 'right'; ctx.textBaseline = 'top'
        ctx.fillText('NEW BEST', GW - 14, 10)
      }
    }
  }, [gameState, hitType, isNewBest])

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>

      {/* Score bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{
          fontFamily: fonts.mono, fontSize: '0.5625rem', fontWeight: 500,
          letterSpacing: '0.12em', textTransform: 'uppercase', color: colors.muted,
        }}>
          Pathogen Escape
        </div>
        <div style={{ display: 'flex', gap: 16 }}>
          <div style={{ fontFamily: fonts.mono, fontSize: '0.6875rem', color: colors.muted }}>
            BEST <span style={{ color: colors.ink, fontWeight: 500 }}>{mounted ? String(best).padStart(5, '0') : '00000'}</span>
          </div>
          <div style={{ fontFamily: fonts.mono, fontSize: '0.6875rem', color: colors.muted }}>
            SCORE <span style={{ color: colors.ember, fontWeight: 500 }}>{String(score).padStart(5, '0')}</span>
          </div>
        </div>
      </div>

      {/* Canvas */}
      <canvas
        ref={canvasRef}
        width={GW}
        height={GH}
        onClick={jump}
        onTouchStart={(e) => { e.preventDefault(); jump() }}
        style={{
          width: '100%', height: 'auto', borderRadius: 14,
          border: `1px solid ${colors.hairline}`,
          cursor: gameState === 'idle' ? 'default' : 'pointer',
          background: colors.canvas, display: 'block',
          touchAction: 'manipulation',
        }}
      />

      {/* Difficulty selector — shown on idle and dead screens */}
      {(gameState === 'idle' || gameState === 'dead') && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          {gameState === 'dead' && (
            <div style={{
              fontFamily: fonts.mono, fontSize: '0.5625rem', fontWeight: 500,
              letterSpacing: '0.12em', textTransform: 'uppercase', color: colors.muted,
            }}>
              Play again?
            </div>
          )}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center' }}>
          {(['easy', 'medium', 'hard'] as Difficulty[]).map((d) => (
            <button
              key={d}
              onClick={() => {
                setDifficulty(d)
                start(d)
              }}
              style={{
                fontFamily: fonts.display, fontWeight: 700, fontSize: '0.8125rem',
                padding: '7px 16px', borderRadius: 10, cursor: 'pointer',
                border: `1px solid ${difficulty === d ? colors.ember : colors.border}`,
                background: difficulty === d ? 'rgba(212,69,31,0.08)' : 'transparent',
                color: difficulty === d ? colors.ember : colors.ink,
                transition: 'all 160ms',
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2,
              }}
              onMouseEnter={(e) => {
                if (difficulty !== d) e.currentTarget.style.background = 'rgba(36,24,19,0.04)'
              }}
              onMouseLeave={(e) => {
                if (difficulty !== d) e.currentTarget.style.background = 'transparent'
              }}
            >
              {DIFF_CFG[d].label}
              <span style={{ fontFamily: fonts.mono, fontSize: '0.5rem', color: colors.muted, letterSpacing: '0.06em' }}>
                {DIFF_CFG[d].sub}
              </span>
            </button>
          ))}
        </div>
        </div>
      )}

      {/* Game message — rendered as HTML so it scales on all screen sizes */}
      {gameState === 'idle' && (
        <div style={{ fontFamily: fonts.mono, fontSize: '0.6875rem', color: colors.muted, textAlign: 'center', letterSpacing: '0.04em' }}>
          {difficulty
            ? 'Tap the canvas or press Space to start'
            : "You're a pathogen — evade the immune system. Choose a difficulty to begin."}
        </div>
      )}
      {gameState === 'dead' && (() => {
        const hit = CELL_MESSAGES[hitType] ?? CELL_MESSAGES['tcell']
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <div style={{ fontFamily: fonts.display, fontWeight: 800, fontSize: '0.9375rem', color: colors.ink }}>
              Caught by a {hit.name}.
            </div>
            <div style={{ fontFamily: fonts.body, fontSize: '0.8125rem', lineHeight: 1.6, color: colors.muted }}>
              {hit.blurb}
            </div>
            <div style={{ fontFamily: fonts.mono, fontSize: '0.5625rem', color: colors.muted, letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: 2 }}>
              Tap the canvas or press Space to replay
            </div>
          </div>
        )
      })()}
      {gameState === 'playing' && (
        <div style={{ fontFamily: fonts.body, fontSize: '0.75rem', color: colors.muted, textAlign: 'center' }}>
          You&apos;re a pathogen evading the immune system. How long can you last?
        </div>
      )}

    </div>
  )
}
