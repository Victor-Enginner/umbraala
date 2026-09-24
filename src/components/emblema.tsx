/**
 * Emblema UMBRAALA — original (Fase 1d).
 * Núcleo + sete partes orgânicas conectadas por filamentos.
 * Desenho autoral: assimétrico, orgânico — deliberadamente NÃO segmentado/
 * parasol (decisão DECISIONS §8/§9). Cores via tokens CSS (herdam o tema).
 */

/** Raios/perturbações por nó — valores autoriais fixos (determinístico). */
const NODES = [
  { ang: -90, r: 33, rx: 5.2, ry: 3.4, tilt: 12 },
  { ang: -38, r: 37, rx: 4.2, ry: 5.6, tilt: -24 },
  { ang: 14, r: 31, rx: 5.8, ry: 4.0, tilt: 40 },
  { ang: 66, r: 36, rx: 3.8, ry: 5.2, tilt: -8 },
  { ang: 118, r: 32, rx: 5.4, ry: 3.6, tilt: 30 },
  { ang: 170, r: 38, rx: 4.6, ry: 5.0, tilt: -18 },
  { ang: 222, r: 34, rx: 5.0, ry: 4.2, tilt: 22 },
] as const

const CX = 60
const CY = 60

function nodePoint({ ang, r }: { ang: number; r: number }) {
  const a = (ang * Math.PI) / 180
  return { x: CX + r * Math.cos(a), y: CY + r * Math.sin(a) }
}

export function Emblema({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      role="img"
      aria-label="Emblema UMBRAALA: núcleo e sete partes orgânicas conectadas"
      className={className}
    >
      {/* filamentos orgânicos: curvas do núcleo até cada parte */}
      <g fill="none" stroke="var(--color-border)" strokeWidth="1.1">
        {NODES.map((n, i) => {
          const p = nodePoint(n)
          const mx = (CX + p.x) / 2
          const my = (CY + p.y) / 2
          // desvio perpendicular fixo por nó — filamento curvado, não reto
          const dx = -(p.y - CY) / n.r
          const dy = (p.x - CX) / n.r
          const off = i % 2 === 0 ? 5 : -4
          return (
            <path
              key={`f${i}`}
              d={`M ${CX} ${CY} Q ${mx + dx * off} ${my + dy * off} ${p.x} ${p.y}`}
            />
          )
        })}
      </g>

      {/* sete partes orgânicas — elipses irregulares rotacionadas */}
      <g fill="var(--color-card)" stroke="var(--color-muted-foreground)" strokeWidth="1.4">
        {NODES.map((n, i) => {
          const p = nodePoint(n)
          return (
            <ellipse
              key={`n${i}`}
              cx={p.x}
              cy={p.y}
              rx={n.rx}
              ry={n.ry}
              transform={`rotate(${n.tilt} ${p.x} ${p.y})`}
            />
          )
        })}
      </g>

      {/* núcleo: anel + núcleo interno vivo (verde = descoberta) */}
      <circle cx={CX} cy={CY} r="11" fill="none" stroke="var(--color-primary)" strokeWidth="1.6" />
      <circle cx={CX} cy={CY} r="5" fill="var(--color-primary)" />
    </svg>
  )
}
