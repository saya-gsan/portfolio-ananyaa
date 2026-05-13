export const colors = {
  surface:  '#fffaf2',
  canvas:   '#f7f1e8',
  ink:      '#241813',
  muted:    '#7a6c63',
  ember:    '#d4451f',
  pumpkin:  '#ff7a2e',
  marigold: '#ffd24a',
  hairline: 'rgba(36,24,19,0.07)',
  divider:  'rgba(36,24,19,0.10)',
  border:   'rgba(36,24,19,0.18)',
} as const

export const gradient =
  `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='320' height='320'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.6 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.6'/></svg>"), radial-gradient(ellipse 80% 65% at 18% 82%, #d4451f 0%, transparent 55%), radial-gradient(ellipse 65% 75% at 85% 18%, #ffd24a 0%, transparent 55%), radial-gradient(ellipse 55% 60% at 62% 55%, #ff8a3d 0%, transparent 55%), linear-gradient(125deg, #b53412 0%, #ff7a2e 50%, #ffc14a 100%)`

export const shadows = {
  card:      'rgba(36,24,19,0.05) 0 1px 2px, rgba(36,24,19,0.07) 0 16px 40px -18px',
  cardHover: 'rgba(15,23,42,0.06) 0 1px 2px, rgba(15,23,42,0.18) 0 12px 28px -12px',
  button:    'rgba(212,69,31,0.32) 0 12px 28px -10px, rgba(255,138,61,0.22) 0 6px 18px -8px',
} as const

export const fonts = {
  display: 'var(--font-inter-tight), sans-serif',
  body:    'var(--font-inter), sans-serif',
  mono:    'var(--font-jetbrains-mono), monospace',
} as const

export const radius = { sm: 8, md: 14, lg: 20 } as const
