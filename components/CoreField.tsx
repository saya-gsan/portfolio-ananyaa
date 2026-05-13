'use client'

import { useState, useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { colors, shadows, fonts } from '@/lib/tokens'

gsap.registerPlugin(ScrollTrigger)

type CellType = 'tcr' | 'bcr' | 'nk' | 'macro' | 'dc' | 'rbc' | 'treg' | 'plasma'

const CELL_DEFS: { type: CellType; xFrac: number; size: number; color: string; phase: number; speed: number }[] = [
  { type: 'tcr',    xFrac: 0.05, size: 58, color: '#d4451f', phase: 0.0, speed: 0.55 },
  { type: 'bcr',    xFrac: 0.82, size: 40, color: '#ff7a2e', phase: 1.2, speed: 0.47 },
  { type: 'plasma', xFrac: 0.45, size: 36, color: '#ffd24a', phase: 2.1, speed: 0.38 },
  { type: 'rbc',    xFrac: 0.15, size: 30, color: '#b53412', phase: 0.8, speed: 0.62 },
  { type: 'dc',     xFrac: 0.72, size: 34, color: '#ff8a3d', phase: 3.0, speed: 0.42 },
  { type: 'treg',   xFrac: 0.92, size: 44, color: '#ff7a2e', phase: 1.7, speed: 0.50 },
  { type: 'nk',     xFrac: 0.35, size: 50, color: '#ffd24a', phase: 4.0, speed: 0.44 },
  { type: 'macro',  xFrac: 0.58, size: 60, color: '#d4451f', phase: 0.5, speed: 0.36 },
  { type: 'tcr',    xFrac: 0.08, size: 42, color: '#ff7a2e', phase: 2.5, speed: 0.52 },
  { type: 'bcr',    xFrac: 0.65, size: 38, color: '#d4451f', phase: 1.4, speed: 0.48 },
  { type: 'dc',     xFrac: 0.25, size: 36, color: '#ff8a3d', phase: 3.6, speed: 0.40 },
  { type: 'nk',     xFrac: 0.88, size: 48, color: '#ffd24a', phase: 0.9, speed: 0.56 },
  { type: 'plasma', xFrac: 0.50, size: 40, color: '#ffd24a', phase: 4.8, speed: 0.34 },
  { type: 'rbc',    xFrac: 0.78, size: 32, color: '#b53412', phase: 2.2, speed: 0.60 },
  { type: 'treg',   xFrac: 0.12, size: 34, color: '#ff7a2e', phase: 1.1, speed: 0.46 },
  { type: 'macro',  xFrac: 0.42, size: 56, color: '#d4451f', phase: 5.2, speed: 0.38 },
  { type: 'tcr',    xFrac: 0.70, size: 44, color: '#ff7a2e', phase: 0.3, speed: 0.54 },
  { type: 'bcr',    xFrac: 0.18, size: 46, color: '#d4451f', phase: 3.4, speed: 0.43 },
  { type: 'dc',     xFrac: 0.85, size: 38, color: '#ff8a3d', phase: 1.9, speed: 0.49 },
  { type: 'nk',     xFrac: 0.55, size: 52, color: '#ffd24a', phase: 2.7, speed: 0.41 },
  { type: 'rbc',    xFrac: 0.08, size: 30, color: '#b53412', phase: 4.3, speed: 0.57 },
  { type: 'treg',   xFrac: 0.62, size: 44, color: '#ff7a2e', phase: 0.7, speed: 0.51 },
  { type: 'macro',  xFrac: 0.30, size: 58, color: '#d4451f', phase: 3.9, speed: 0.37 },
  { type: 'plasma', xFrac: 0.90, size: 36, color: '#ffd24a', phase: 1.5, speed: 0.45 },
  { type: 'bcr',    xFrac: 0.48, size: 40, color: '#ff7a2e', phase: 5.5, speed: 0.42 },
  { type: 'dc',     xFrac: 0.75, size: 34, color: '#ff8a3d', phase: 2.0, speed: 0.53 },
  { type: 'tcr',    xFrac: 0.20, size: 54, color: '#d4451f', phase: 0.6, speed: 0.39 },
  { type: 'nk',     xFrac: 0.38, size: 48, color: '#ffd24a', phase: 4.1, speed: 0.47 },
  { type: 'rbc',    xFrac: 0.68, size: 34, color: '#b53412', phase: 1.3, speed: 0.61 },
  { type: 'macro',  xFrac: 0.15, size: 60, color: '#d4451f', phase: 3.2, speed: 0.35 },
  { type: 'treg',   xFrac: 0.52, size: 42, color: '#ff7a2e', phase: 2.4, speed: 0.50 },
  { type: 'plasma', xFrac: 0.85, size: 38, color: '#ffd24a', phase: 0.2, speed: 0.44 },
  { type: 'dc',     xFrac: 0.28, size: 36, color: '#ff8a3d', phase: 5.0, speed: 0.46 },
  { type: 'bcr',    xFrac: 0.72, size: 44, color: '#ff7a2e', phase: 1.8, speed: 0.52 },
  { type: 'tcr',    xFrac: 0.42, size: 50, color: '#d4451f', phase: 3.7, speed: 0.40 },
]

const NK_GRANULES: Array<[number, number]> = [[35, 40], [60, 38], [42, 58], [65, 60], [50, 50]]
const DC_ANGLES = [15, 75, 145, 215, 285, 340]

function hexRgba(hex: string, a: number): string {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `rgba(${r},${g},${b},${a})`
}

function drawCell(
  ctx: CanvasRenderingContext2D,
  type: CellType,
  color: string,
  cx: number,
  cy: number,
  r: number
) {
  ctx.save()
  ctx.lineCap = 'round'

  if (type === 'rbc') {
    ctx.beginPath()
    ctx.arc(cx, cy, r * 0.44, 0, Math.PI * 2)
    ctx.fillStyle = hexRgba(color, 0x10 / 255)
    ctx.fill()
    ctx.strokeStyle = hexRgba(color, 0x55 / 255)
    ctx.lineWidth = 1
    ctx.stroke()
    ctx.restore()
    return
  }

  ctx.beginPath()
  ctx.arc(cx, cy, r, 0, Math.PI * 2)
  ctx.fillStyle = hexRgba(color, 0x18 / 255)
  ctx.fill()
  ctx.strokeStyle = hexRgba(color, 0x30 / 255)
  ctx.lineWidth = 1.5
  ctx.stroke()

  const ds = hexRgba(color, 0x55 / 255)

  if (type === 'tcr' || type === 'treg') {
    for (const deg of [20, 90, 200, 290]) {
      const a = (deg * Math.PI) / 180
      ctx.beginPath()
      ctx.moveTo(cx + r * 0.8 * Math.cos(a), cy + r * 0.8 * Math.sin(a))
      ctx.lineTo(cx + r * Math.cos(a), cy + r * Math.sin(a))
      ctx.strokeStyle = ds
      ctx.lineWidth = 1.4
      ctx.stroke()
    }
    if (type === 'treg') {
      ctx.beginPath()
      ctx.arc(cx, cy, r * 0.28, 0, Math.PI * 2)
      ctx.strokeStyle = ds
      ctx.lineWidth = 1
      ctx.setLineDash([2, 2])
      ctx.stroke()
      ctx.setLineDash([])
    }
  } else if (type === 'bcr' || type === 'plasma') {
    for (const deg of [40, 130, 220, 310]) {
      const a = (deg * Math.PI) / 180
      const x1 = cx + r * 0.76 * Math.cos(a)
      const y1 = cy + r * 0.76 * Math.sin(a)
      const x2 = cx + r * 0.96 * Math.cos(a)
      const y2 = cy + r * 0.96 * Math.sin(a)
      ctx.beginPath()
      ctx.moveTo(x1, y1)
      ctx.lineTo(x2, y2)
      ctx.moveTo(x2, y2)
      ctx.lineTo(x2 + r * 0.08 * Math.cos(a + 0.6), y2 + r * 0.08 * Math.sin(a + 0.6))
      ctx.moveTo(x2, y2)
      ctx.lineTo(x2 + r * 0.08 * Math.cos(a - 0.6), y2 + r * 0.08 * Math.sin(a - 0.6))
      ctx.strokeStyle = ds
      ctx.lineWidth = 1.2
      ctx.stroke()
    }
  } else if (type === 'nk') {
    for (const [px, py] of NK_GRANULES) {
      ctx.beginPath()
      ctx.arc(cx + ((px - 50) / 50) * r, cy + ((py - 50) / 50) * r, r * 0.05, 0, Math.PI * 2)
      ctx.fillStyle = hexRgba(color, 0x40 / 255)
      ctx.fill()
    }
  } else if (type === 'macro') {
    ctx.beginPath()
    ctx.arc(cx, cy, r * 0.8, 0, Math.PI * 2)
    ctx.strokeStyle = ds
    ctx.lineWidth = 1
    ctx.setLineDash([3, 2])
    ctx.stroke()
    ctx.setLineDash([])
    for (const deg of [30, 110, 200, 280]) {
      const a = (deg * Math.PI) / 180
      ctx.beginPath()
      ctx.arc(cx + r * 0.84 * Math.cos(a), cy + r * 0.84 * Math.sin(a), r * 0.06, 0, Math.PI * 2)
      ctx.fillStyle = hexRgba(color, 0x30 / 255)
      ctx.fill()
    }
  } else if (type === 'dc') {
    for (let i = 0; i < DC_ANGLES.length; i++) {
      const a = (DC_ANGLES[i] * Math.PI) / 180
      const outerR = r * (1.2 + (i % 2) * 0.12)
      ctx.beginPath()
      ctx.moveTo(cx, cy)
      ctx.lineTo(cx + outerR * Math.cos(a), cy + outerR * Math.sin(a))
      ctx.strokeStyle = ds
      ctx.lineWidth = 1.2
      ctx.stroke()
    }
  }

  ctx.restore()
}

const SKILLS = [
  'Multi-color Flow', 'Spectral Flow', 'Cytek Aurora', 'PrimeFlow / Flow-FISH',
  'Mammalian Cell Culture', 'Molecular Cloning', 'Lentiviral Packaging',
  'Transduction', 'ELISA', 'DLS', 'TFF / UF / DF', 'FlowJo · FCS Express · SpectroFlo',
]

const STANFORD_PROJECTS = [
  {
    eyebrow: 'STANFORD · IN PROGRESS',
    title: 'EBER Flow-FISH for clinical EBV detection',
    desc: 'Building the first validated Flow-FISH assay for EBV detection in a clinical setting, designed to diagnose EBV+ lymphoproliferative disorders at single-cell resolution. The assay uses ThermoFisher\'s PrimeFlow platform, which amplifies signal via branched nucleic acids and requires a strict 40°C hybridization, a technically demanding 2-day protocol that has never been validated in a clinical laboratory setting before. Designing the antibody panel to simultaneously gate B, T, and NK populations alongside kappa/lambda light chain and TRBC clonality readouts on the Cytek Aurora Evo. Currently finalizing antibody selection and FCS Express analysis templates before optimizing and locking the protocol in terms of time and ease of use for clinical validation.',
    tags: ['PrimeFlow', 'EBV', 'Cytek Aurora', 'FCS Express', 'Clinical', 'Lymphoproliferative'],
  },
  {
    eyebrow: 'STANFORD · MANUSCRIPT IN PREP',
    title: 'DHR-based neutrophil oxidative burst assay',
    desc: 'Developed and validated a flow cytometry assay for neutrophil oxidative burst using dihydrorhodamine 123, a functional readout for chronic granulomatous disease (CGD), a rare inherited immune disorder where neutrophils fail to produce reactive oxygen species. The core innovation is a mature neutrophil gating strategy using an 8-marker antibody panel (CD13, CD10, PDL-1, CD64, CD45, CD16, 7-AAD, DHR) that separates mature from immature granulocytes, resolving the signal dilution problem that causes standard DHR assays to return indeterminate results. Validated across 120+ patients. Manuscript in preparation. What made this project particularly meaningful: the assay has been cross-validated against the current diagnostic standard, and in several cases resolved genuine clinical ambiguity: specimens previously suspected as CGD were ruled out, and others flagged as carriers were confirmed as CGD. In one case, we ran the assay on a stem cell transplant patient being treated for CGD and saw, in real time, both the patient\'s older non-functional neutrophil population and the newly engrafted functional donor cells — within a week post-transplant. The transplant had worked. We knew before the patient and their care team did. That moment is why I do this work.',
    tags: ['DHR', 'Neutrophils', 'CGD', 'Clinical Validation', 'Spectral Flow', 'Panel Design'],
  },
]

const PAST_PROJECTS = [
  {
    eyebrow: 'CARL JUNE LAB · 2023–2025',
    title: 'NK cell engineering via feeder cell systems',
    desc: 'Investigated how ICAM-1, CD58, 41BBL, and aCD56 feeder configurations shape NK cell expansion, viability, and cytotoxicity against Raji and U251 tumor lines. Engineered the feeder systems via molecular cloning and lentiviral transduction; achieved a 300-fold NK expansion and 92% tumor cell lysis.',
    tags: ['NK cells', 'Cell Engineering', 'Lentivirus', 'Cytotoxicity'],
  },
  {
    eyebrow: 'MODERNA · 2024',
    title: 'mRNA-LNP scale-up and stability optimization',
    desc: 'Joined Moderna\'s LNP Process Development team as a co-op, working across 7+ formulation projects focused on improving the scalability and manufacturability of mRNA-LNP therapeutics. Led an independent mixer scalability assessment, comparing particle size and PDI across flow rates to identify a mixer that maintained consistent nanoparticle characteristics from small-scale to large-scale production, supporting future GMP alignment. Ran end-to-end LNP production, systematically varying ingredient ratios, process flow, and neutralization buffers to improve encapsulation efficiency, reduce particle size, and stabilize pH. Worked with TFF, ultrafiltration, and diafiltration; characterized particles by DLS and flow cytometry; used automated liquid handlers for high-throughput sample prep. (The specific results? Can\'t say more. NDA signed, lips sealed.)',
    tags: ['mRNA-LNP', 'TFF', 'DLS', 'Process Development', 'Scalability', 'GMP'],
  },
  {
    eyebrow: 'PENN · 2023',
    title: 'mRNA Zika virus vaccine design',
    desc: 'Designed an mRNA Zika vaccine with human codon optimization, E-DII-FL mutations, and mosquito salivary protein incorporation. Proposed pre-clinical animal studies and a pipeline-driven development approach.',
    tags: ['mRNA', 'Vaccine Design', 'Zika'],
  },
  {
    eyebrow: 'IIT MADRAS · 2022',
    title: 'Intervertebral disc biomaterial: protein-ligand docking',
    desc: 'Computational summer research project focused on identifying biomaterial-based treatments for intervertebral disc degeneration. Conducted literature review to identify candidate protein and ligand sequences, modeled 3D structures in PyMOL, and performed in-silico docking using AutoDock Vina. Analyzed binding interactions in Biovia Discovery Studio, assessing bond types, lengths, and binding energies to identify stable protein-ligand configurations for downstream experimental validation.',
    tags: ['PyMOL', 'AutoDock', 'Molecular Docking', 'Biomaterials', 'Computational'],
  },
]

const EXPERIENCES = [
  {
    eyebrow: 'STANFORD · SEP 2025–PRESENT',
    title: 'Life Science Research Professional',
    where: 'Department of Pathology, Stanford School of Medicine',
    summary: 'Stood up a brand-new functional immunology lab from the ground up: workflows, equipment onboarding, assay development, and clinical translation. Developing diagnostic assays for functional immune disorders and pathogen-driven disease, and transferring them into routine use at Stanford Hospitals.',
    takeaways: [
      'Building a lab from scratch is a totally different skillset from running experiments in one. Every workflow, SOP, and reagent is a decision you have to defend.',
      'Working directly with clinical lab scientists has been the best education in writing protocols that survive contact with reality. Research-grade clarity isn\'t enough.',
      'The most rewarding moment of my career so far was seeing our DHR assay data show a stem cell transplant working in real time — before the clinical team knew. That\'s what translational work is supposed to feel like.',
      'Onboarding the Cytek Aurora has made me appreciate how much spectral flow cytometry really means panel design done right. The instrument is unforgiving of shortcuts.',
    ],
  },
  {
    eyebrow: 'CARL JUNE LAB · 2023–2025',
    title: 'Research Assistant, Carl June Lab, Center for Cellular Immunotherapies',
    where: 'University of Pennsylvania',
    summary: 'My first proper wet lab role, and the one that taught me almost everything I know at the bench. The June Lab, led by Carl June whose CAR-T cell therapy work is foundational to the entire field of cellular immunotherapy, was where I went from knowing biology in theory to doing it with my hands. The pandemic had made wet lab access nearly impossible during my undergrad in India, so arriving here felt like finally getting to work. I started from the basics (mammalian cell culture, aseptic technique, primary cell isolation) and progressively took on more complex workflows: engineering new cell lines from scratch, lentiviral packaging and transduction, molecular cloning, cytotoxicity assay design. By the end, I was leading an independent project engineering feeder cell systems for NK cell expansion and building an AI-based predictive model for cytotoxicity. The range of what I learned here is hard to overstate.',
    takeaways: [
      'This is where I learned that good science is mostly good habits: sterile technique, careful labeling, knowing when your controls are lying to you.',
      'Cell therapy is humbling. The variability between donors, between days, between technicians is enormous. That\'s where the real engineering problems live.',
      'Being in the June Lab taught me that good experiment design is half the work. The other half is owning your assays end-to-end so you actually trust the readout.',
      'The most useful thing I learned was how to talk to PIs and post-docs across very different sub-fields without losing the thread. Translational work demands that.',
    ],
  },
  {
    eyebrow: 'MODERNA · JUL–DEC 2024',
    title: 'Co-op, LNP Process Development',
    where: 'Moderna Therapeutics, Norwood, MA',
    summary: 'My first corporate experience, and a real education in what it means to do science inside an organization that ships products. I moved to a new city knowing nobody, joined a team mid-project, and had to figure out both the science and the unspoken rules of a fast-moving biotech at the same time. The people I met here were some of the best I\'ve worked with, and the experience of navigating a new city alone while doing demanding technical work taught me things no lab ever could. The work itself was LNP process development: formulation, scalability, characterization. What surprised me most was how much small, careful changes to process parameters cascaded into meaningful differences in the final product. Industry runs on that discipline. Every variable is documented, every deviation has a reason, and the difference between a good batch and a suboptimal one is often one decision made six steps earlier.',
    takeaways: [
      'Industry runs on data discipline I didn\'t fully appreciate in academia. Every decision has a paper trail and a reason.',
      'Process development is design. The variables you choose to control vs. let float are how you ship a product, not just run an experiment.',
      'Moving somewhere new alone and figuring it out (professionally and personally) is its own kind of education. I\'m glad I did it.',
      'I learned to love DOE here. It\'s the most efficient way to think about a multi-factor system, and it changed how I plan experiments now.',
    ],
  },
  {
    eyebrow: 'IIT MADRAS · SUMMER 2022',
    title: 'Summer Research Intern',
    where: 'Indian Institute of Technology, Madras, Chennai, India',
    summary: 'Summer research internship focused on rational biomaterial design for intervertebral disc degeneration. First real exposure to computational structural biology, modeling protein structures in PyMOL and evaluating molecular docking interactions using AutoDock Vina entirely in silico.',
    takeaways: [
      'Working computationally taught me to think about molecules as three-dimensional objects with geometry and binding constraints, something wet lab work alone doesn\'t give you.',
      'This is where I first got curious about the intersection of computation and biology, before I had the vocabulary to call it computational biology.',
    ],
  },
  {
    eyebrow: 'NEUBERG DIAGNOSTICS · NOV–DEC 2021',
    title: 'Molecular Biology Intern',
    where: 'Neuberg Diagnostics, Chennai, India',
    summary: 'Volunteered as a molecular biology intern at Neuberg Diagnostics during the height of the COVID-19 pandemic, helping process and test patient samples at a time when diagnostic labs were overwhelmed. Worked with high-throughput RT-PCR assays (RNA and DNA extraction, amplification, and result interpretation), contributing directly to COVID-19 patient testing workflows under high-volume, high-pressure conditions.',
    takeaways: [
      'Seeing diagnostics under pandemic pressure was formative. When assays fail at scale, it\'s not an experiment that goes wrong, it\'s a patient who waits.',
      'This planted the seed for why I later gravitated toward clinical translation work. I wanted to build things that actually get used.',
    ],
  },
]

const LEGEND = [
  { label: 'T cell (TCR)', color: '#d4451f' }, { label: 'B cell (BCR)', color: '#ff7a2e' },
  { label: 'NK (granules)', color: '#ffd24a' }, { label: 'Macrophage', color: '#d4451f' },
  { label: 'Dendritic cell', color: '#ff8a3d' }, { label: 'RBC', color: '#b53412' },
  { label: 'Treg', color: '#ff7a2e' }, { label: 'Plasma cell', color: '#ffd24a' },
]

export default function CoreField() {
  const [openExp, setOpenExp] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const canvas = canvasRef.current
    if (!container || !canvas) return

    let rafId = 0
    let t = 0

    const init = () => {
      cancelAnimationFrame(rafId)
      const w = container.clientWidth
      const h = container.scrollHeight
      if (!w || !h) return
      canvas.width = w
      canvas.height = h
      const ctx = canvas.getContext('2d')
      if (!ctx) return

      const draw = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        CELL_DEFS.forEach((def, i) => {
          const baseX = def.xFrac * canvas.width
          const baseY = ((i + 0.5) / CELL_DEFS.length) * canvas.height
          const xAmp = 8 + (i % 4) * 4
          const yAmp = 6 + (i % 3) * 4
          const cx = baseX + Math.sin(t * def.speed + def.phase) * xAmp
          const cy = baseY + Math.cos(t * def.speed * 0.7 + def.phase + 1) * yAmp
          drawCell(ctx, def.type, def.color, cx, cy, def.size / 2)
        })
        t += 0.016
        rafId = requestAnimationFrame(draw)
      }
      draw()
    }

    init()
    const ro = new ResizeObserver(init)
    ro.observe(container)

    return () => {
      cancelAnimationFrame(rafId)
      ro.disconnect()
    }
  }, [])

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.from('.cf-eyebrow', { opacity: 0, y: 14, duration: 0.5 }, 0.1)
      tl.from('.cf-title-word', { yPercent: 110, duration: 0.8, stagger: 0.1, ease: 'power4.out' }, 0.2)
      tl.from('.cf-bio', { opacity: 0, y: 20, duration: 0.55 }, 0.55)

      gsap.from('.skill-chip', {
        opacity: 0, x: -16, stagger: 0.04, duration: 0.45, ease: 'power3.out',
        scrollTrigger: { trigger: '.cf-skills', start: 'top 85%' },
      })
      gsap.from('.cf-legend-item', {
        opacity: 0, x: -10, stagger: 0.05, duration: 0.4,
        scrollTrigger: { trigger: '.cf-legend', start: 'top 90%' },
      })
      gsap.from('.stanford-card', {
        opacity: 0, y: 32, stagger: 0.12, duration: 0.6, ease: 'power3.out',
        scrollTrigger: { trigger: '.stanford-section', start: 'top 80%' },
      })
      gsap.from('.past-card', {
        opacity: 0, y: 32, stagger: 0.1, duration: 0.6, ease: 'power3.out',
        scrollTrigger: { trigger: '.past-section', start: 'top 80%' },
      })
      gsap.from('.pub-card', {
        opacity: 0, y: 24, stagger: 0.1, duration: 0.5,
        scrollTrigger: { trigger: '.pub-section', start: 'top 82%' },
      })
      gsap.from('.exp-card', {
        opacity: 0, y: 28, stagger: 0.12, duration: 0.6, ease: 'power3.out',
        scrollTrigger: { trigger: '.exp-section', start: 'top 80%' },
      })
    },
    { scope: containerRef }
  )

  const ProjectCard = ({
    p, className,
  }: {
    p: { eyebrow: string; title: string; desc: string; tags: string[] }
    className: string
  }) => (
    <div
      className={`${className} project-card-grid`}
      style={{
        background: colors.surface, border: `1px solid ${colors.hairline}`,
        borderRadius: 20, padding: '24px 28px',
        display: 'grid', gridTemplateColumns: '180px 1fr', gap: 28,
        boxShadow: shadows.card,
      }}
    >
      <div style={{
        fontFamily: fonts.mono, fontSize: '0.5625rem', fontWeight: 500,
        letterSpacing: '0.10em', textTransform: 'uppercase',
        color: colors.muted, paddingTop: 3,
      }}>
        {p.eyebrow}
      </div>
      <div>
        <div style={{
          fontFamily: fonts.display, fontWeight: 800, fontSize: '1.0625rem',
          letterSpacing: '-0.02em', color: colors.ink, marginBottom: 8,
        }}>
          {p.title}
        </div>
        <div style={{
          fontFamily: fonts.body, fontSize: '0.9375rem', lineHeight: 1.6,
          color: colors.muted, marginBottom: 14,
        }}>
          {p.desc}
        </div>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          {p.tags.map((tag) => (
            <span key={tag} style={{
              fontFamily: fonts.mono, fontSize: '0.5625rem', fontWeight: 500,
              letterSpacing: '0.08em', textTransform: 'uppercase',
              padding: '3px 8px', background: 'rgba(36,24,19,0.07)',
              borderRadius: 6, color: colors.muted,
            }}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <div ref={containerRef} style={{ background: '#fffaf2', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>

      {/* ── Canvas background cells ─────────────────────────────────────────── */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* ── Hero ────────────────────────────────────────────────────────────── */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '72px 28px 40px', position: 'relative', zIndex: 1 }}>
        <div className="cf-eyebrow" style={{
          fontFamily: fonts.mono, fontSize: '0.6875rem', fontWeight: 500,
          letterSpacing: '0.12em', textTransform: 'uppercase', color: colors.muted, marginBottom: 16,
        }}>
          Core Field · Cellular Immunology &amp; Translational Biology
        </div>

        <div style={{
          fontFamily: fonts.display, fontWeight: 800,
          fontSize: 'clamp(2.2rem,4.5vw,3.75rem)',
          lineHeight: 0.98, letterSpacing: '-0.04em', color: colors.ink,
          marginBottom: 22, maxWidth: '18ch',
        }}>
          {['Building the tools', 'that make immune', 'cells work for us.'].map((line, i) => (
            <div key={i} style={{ overflow: 'hidden' }}>
              <div className="cf-title-word">{line}</div>
            </div>
          ))}
        </div>

        <div className="cf-bio" style={{
          fontFamily: fonts.body, fontSize: '1.0625rem',
          lineHeight: 1.62, color: colors.muted, maxWidth: '54ch', marginBottom: 32,
        }}>
          From engineered NK cell feeders at the Carl June Lab, to mRNA-LNP process development at Moderna,
          to flow-cytometric diagnostics at Stanford Pathology — my work bridges wet-lab cell biology with
          the rigour of clinical and process translation.
        </div>

        <div className="cf-skills" style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {SKILLS.map((s) => (
            <span key={s} className="skill-chip" style={{
              fontFamily: fonts.display, fontWeight: 700, fontSize: '0.8125rem',
              padding: '6px 14px', borderRadius: 9999,
              background: 'rgba(212,69,31,0.08)', color: colors.ember,
              border: '1px solid rgba(212,69,31,0.18)', cursor: 'default',
            }}>{s}</span>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="cf-legend" style={{ maxWidth: 1280, margin: '0 auto', padding: '0 28px 48px', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
          {LEGEND.map(({ label, color }) => (
            <div key={label} className="cf-legend-item" style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
              <div style={{ width: 9, height: 9, borderRadius: '50%', background: color, flexShrink: 0, opacity: 0.7 }} />
              <span style={{ fontFamily: fonts.body, fontSize: '0.75rem', color: colors.muted }}>{label}</span>
            </div>
          ))}
          <span style={{ fontFamily: fonts.mono, fontSize: '0.5625rem', color: colors.muted, letterSpacing: '0.06em' }}>↑ floating in background</span>
        </div>
      </div>

      {/* ── Stanford — current ────────────────────────────────────────────── */}
      <div className="stanford-section" style={{ maxWidth: 1280, margin: '0 auto', padding: '0 28px 64px', position: 'relative', zIndex: 1 }}>
        <div style={{ height: 1, background: colors.divider, marginBottom: 40 }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 8, flexWrap: 'wrap', gap: 8 }}>
          <div style={{ fontFamily: fonts.display, fontWeight: 800, fontSize: '1.625rem', letterSpacing: '-0.03em', color: colors.ink }}>
            At Stanford right now
          </div>
          <div style={{ fontFamily: fonts.mono, fontSize: '0.5625rem', letterSpacing: '0.10em', textTransform: 'uppercase', color: colors.ember }}>
            ● Active
          </div>
        </div>
        <div style={{ fontFamily: fonts.body, fontSize: '0.9375rem', color: colors.muted, marginBottom: 28 }}>
          Functional immunology assays, built for the clinic.
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {STANFORD_PROJECTS.map((p, i) => <ProjectCard key={i} p={p} className="stanford-card" />)}
        </div>
      </div>

      {/* ── Past projects ─────────────────────────────────────────────────── */}
      <div className="past-section" style={{ maxWidth: 1280, margin: '0 auto', padding: '0 28px 64px', position: 'relative', zIndex: 1 }}>
        <div style={{ fontFamily: fonts.display, fontWeight: 800, fontSize: '1.625rem', letterSpacing: '-0.03em', color: colors.ink, marginBottom: 8 }}>
          Past projects
        </div>
        <div style={{ fontFamily: fonts.body, fontSize: '0.9375rem', color: colors.muted, marginBottom: 28 }}>
          What I built before Stanford.
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {PAST_PROJECTS.map((p, i) => <ProjectCard key={i} p={p} className="past-card" />)}
        </div>
      </div>

      {/* ── Publications ──────────────────────────────────────────────────── */}
      <div className="pub-section" style={{ maxWidth: 1280, margin: '0 auto', padding: '0 28px 64px', position: 'relative', zIndex: 1 }}>
        <div style={{ fontFamily: fonts.display, fontWeight: 800, fontSize: '1.625rem', letterSpacing: '-0.03em', color: colors.ink, marginBottom: 8 }}>
          Publications
        </div>
        <div style={{ fontFamily: fonts.body, fontSize: '0.9375rem', color: colors.muted, marginBottom: 28 }}>
          And one more in the pipeline.
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div className="pub-card" style={{
            background: colors.surface, border: `1px solid ${colors.hairline}`,
            borderRadius: 20, padding: '22px 26px', boxShadow: shadows.card,
          }}>
            <div style={{ fontFamily: fonts.display, fontWeight: 800, fontSize: '1rem', letterSpacing: '-0.02em', color: colors.ink, marginBottom: 4 }}>
              Immunization against COVID-19: A Comprehensive Review on the Leading Vaccines
            </div>
            <div style={{ fontFamily: fonts.mono, fontSize: '0.625rem', letterSpacing: '0.08em', color: colors.muted, marginBottom: 8 }}>
              Coronaviruses · January 2024
            </div>
            <div style={{ fontFamily: fonts.body, fontSize: '0.9375rem', lineHeight: 1.6, color: colors.muted, marginBottom: 8 }}>
              Co-authored review of leading COVID-19 vaccines: production methods, trial outcomes, efficacy, and safety profiles.
            </div>
            <div style={{ fontFamily: fonts.mono, fontSize: '0.6875rem', color: colors.ember }}>
              doi.org/10.2174/0126667975285709231219080802
            </div>
          </div>
          <div className="pub-card" style={{
            background: 'rgba(212,69,31,0.06)', border: '1px dashed rgba(212,69,31,0.25)',
            borderRadius: 20, padding: '18px 26px',
          }}>
            <div style={{ fontFamily: fonts.mono, fontSize: '0.5625rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: colors.ember, marginBottom: 4 }}>
              In preparation
            </div>
            <div style={{ fontFamily: fonts.body, fontSize: '0.9375rem', color: colors.ink }}>
              Manuscript on the DHR-based neutrophil oxidative burst assay · Stanford Pathology · 2025
            </div>
          </div>
        </div>
      </div>

      {/* ── Experiences ───────────────────────────────────────────────────── */}
      <div style={{ background: colors.canvas }}>
        <div className="exp-section" style={{ maxWidth: 1280, margin: '0 auto', padding: '64px 28px 40px', position: 'relative', zIndex: 1 }}>
          <div style={{ fontFamily: fonts.display, fontWeight: 800, fontSize: '1.625rem', letterSpacing: '-0.03em', color: colors.ink, marginBottom: 8 }}>
            The path here
          </div>
          <div style={{ fontFamily: fonts.body, fontSize: '0.9375rem', color: colors.muted, marginBottom: 32 }}>
            What I learned along the way: the technical, and the personal.
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {EXPERIENCES.map((e, i) => (
              <div key={i} className="exp-card" style={{
                background: colors.surface, border: `1px solid ${colors.hairline}`,
                borderRadius: 20, boxShadow: shadows.card, overflow: 'hidden',
              }}>
                <button
                  onClick={() => setOpenExp(openExp === i ? null : i)}
                  style={{
                    width: '100%', background: 'none', border: 'none', cursor: 'pointer',
                    padding: '22px 28px', display: 'flex', alignItems: 'flex-start', gap: 28, textAlign: 'left',
                  }}
                >
                  <div className="exp-label" style={{
                    fontFamily: fonts.mono, fontSize: '0.5625rem', fontWeight: 500,
                    letterSpacing: '0.10em', textTransform: 'uppercase',
                    color: colors.muted, paddingTop: 4, width: 180, flexShrink: 0,
                  }}>{e.eyebrow}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: fonts.display, fontWeight: 800, fontSize: '1rem', letterSpacing: '-0.02em', color: colors.ink }}>
                      {e.title}
                    </div>
                    <div style={{ fontFamily: fonts.body, fontSize: '0.8125rem', color: colors.muted, marginTop: 3 }}>
                      {e.where}
                    </div>
                    <div style={{ fontFamily: fonts.body, fontSize: '0.9375rem', lineHeight: 1.6, color: colors.muted, marginTop: 8 }}>
                      {e.summary}
                    </div>
                  </div>
                  <div style={{
                    color: colors.muted, transition: 'transform 240ms',
                    transform: openExp === i ? 'rotate(180deg)' : 'none',
                    flexShrink: 0, paddingTop: 3,
                  }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </button>
                {openExp === i && (
                  <div className="exp-takeaways" style={{ padding: '0 28px 24px 236px', borderTop: `1px solid ${colors.divider}`, paddingTop: 20 }}>
                    <div style={{ fontFamily: fonts.mono, fontSize: '0.5625rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: colors.muted, marginBottom: 12 }}>
                      Key takeaways
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                      {e.takeaways.map((tk, j) => (
                        <div key={j} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                          <div style={{ width: 5, height: 5, borderRadius: '50%', background: colors.ember, marginTop: 7, flexShrink: 0 }} />
                          <div style={{ fontFamily: fonts.body, fontSize: '0.9375rem', lineHeight: 1.6, color: colors.ink }}>{tk}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── Education ─────────────────────────────────────────────────────── */}
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 28px 80px', position: 'relative', zIndex: 1 }}>
          <div style={{ height: 1, background: colors.divider, marginBottom: 40 }} />
          <div style={{ fontFamily: fonts.display, fontWeight: 800, fontSize: '1.625rem', letterSpacing: '-0.03em', color: colors.ink, marginBottom: 8 }}>
            Where it started
          </div>
          <div style={{ fontFamily: fonts.body, fontSize: '0.9375rem', color: colors.muted, marginBottom: 28 }}>
            The degrees behind the work.
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { years: '2023–2025', degree: 'Masters in Biotechnology (Molecular Biology)', school: 'University of Pennsylvania', gpa: 'GPA 3.95' },
              { years: '2019–2023', degree: 'B.Tech Biotechnology', school: 'Vellore Institute of Technology', gpa: 'GPA 3.96' },
            ].map((ed) => (
              <div key={ed.years} className="edu-grid" style={{
                background: colors.surface, border: `1px solid ${colors.hairline}`,
                borderRadius: 20, padding: '24px 28px', boxShadow: shadows.card,
                display: 'grid', gridTemplateColumns: '180px 1fr', gap: 28,
              }}>
                <div style={{
                  fontFamily: fonts.mono, fontSize: '0.5625rem', fontWeight: 500,
                  letterSpacing: '0.10em', textTransform: 'uppercase',
                  color: colors.muted, paddingTop: 3,
                }}>{ed.years}</div>
                <div>
                  <div style={{ fontFamily: fonts.display, fontWeight: 800, fontSize: '1.0625rem', letterSpacing: '-0.02em', color: colors.ink, marginBottom: 4 }}>
                    {ed.degree}
                  </div>
                  <div style={{ fontFamily: fonts.body, fontSize: '0.9375rem', color: colors.muted, marginBottom: 6 }}>
                    {ed.school}
                  </div>
                  <div style={{ fontFamily: fonts.mono, fontSize: '0.5625rem', letterSpacing: '0.08em', color: colors.ember }}>
                    {ed.gpa}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
