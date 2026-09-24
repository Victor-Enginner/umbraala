/**
 * UMBRAALA — Fase 1: fundação visual (shell responsivo).
 *
 * Classes de estado (DECISIONS §7): nada aqui finge funcionar —
 * sem auth, sem métricas, sem agentes em execução. Tooltip = explica o
 * significado de cada status (função real, não cenografia).
 */
import { Emblema } from "@/components/emblema"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

type Status = "concluida" | "em-curso" | "futura"

type Fase = { id: string; nome: string; status: Status }

const FASES: Fase[] = [
  { id: "0", nome: "Reconhecimento — inventário + decisões + scaffold", status: "concluida" },
  { id: "1", nome: "Fundação visual — tokens, emblema, paisagem, movimento", status: "em-curso" },
  { id: "2", nome: "Entrada — sinal → falha → reconexão → sync", status: "futura" },
  { id: "3", nome: "Portal — modo demonstração explícito", status: "futura" },
  { id: "4", nome: "Missão — garbage in, garbage out (motor determinístico)", status: "futura" },
  { id: "5", nome: "Consoles — Academia, Laboratório, Operações", status: "futura" },
  { id: "6", nome: "Infra — persistência, fila, permissões, telemetria", status: "futura" },
]

const STATUS_LABEL: Record<Status, string> = {
  concluida: "✓ concluída",
  "em-curso": "▸ em curso",
  futura: "○ futura",
}

const STATUS_HINT: Record<Status, string> = {
  concluida: "Implementado e verificado — build/testes verdes nesta fase.",
  "em-curso": "Em construção — nada aqui finge estar pronto.",
  futura: "Futura — roadmap visível; sem botão sem destino.",
}

const STATUS_EDGE: Record<Status, string> = {
  concluida: "border-l-primary",
  "em-curso": "border-l-destructive",
  futura: "border-l-border",
}

export default function App() {
  return (
    <TooltipProvider>
      <main className="mx-auto min-h-dvh w-full max-w-2xl px-5 py-10 sm:py-14">
        <header className="mb-10 flex items-center gap-4">
          <Emblema className="size-14 shrink-0 sm:size-16" />
          <div>
            <h1 className="font-mono text-2xl font-semibold tracking-[0.35em] sm:text-3xl">
              UMBRAALA
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Academia operacional de engenharia de IA —{" "}
              <strong className="text-foreground">Fase 1</strong> · fundação visual.
            </p>
          </div>
        </header>

        <section aria-labelledby="fases-h">
          <h2
            id="fases-h"
            className="border-b border-border pb-2 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground"
          >
            Mapa de fases
          </h2>
          <ul className="mt-4 grid gap-2">
            {FASES.map((f) => (
              <li
                key={f.id}
                className={`flex flex-col gap-1 rounded-lg border border-border border-l-2 bg-card px-4 py-3 sm:flex-row sm:items-baseline sm:gap-3 ${STATUS_EDGE[f.status]}`}
              >
                <span className="font-mono text-xs text-muted-foreground sm:w-16 shrink-0">
                  Fase {f.id}
                </span>
                <span className="flex-1 text-sm">{f.nome}</span>
                <Tooltip>
                  <TooltipTrigger
                    aria-label={`Status: ${STATUS_LABEL[f.status]}. ${STATUS_HINT[f.status]}`}
                    className="shrink-0 self-start rounded-sm font-mono text-xs text-muted-foreground underline decoration-dotted underline-offset-4 outline-none focus-visible:ring-2 focus-visible:ring-ring/50 sm:self-auto"
                  >
                    {STATUS_LABEL[f.status]}
                  </TooltipTrigger>
                  <TooltipContent>{STATUS_HINT[f.status]}</TooltipContent>
                </Tooltip>
              </li>
            ))}
          </ul>
        </section>

        <footer className="mt-10 border-t border-border pt-4">
          <p className="font-mono text-xs text-muted-foreground">
            Nada aqui finge funcionar: sem auth, sem métricas, sem agentes em
            execução. Ver <code className="text-primary">docs/DECISIONS.md</code>.
          </p>
        </footer>
      </main>
    </TooltipProvider>
  )
}
