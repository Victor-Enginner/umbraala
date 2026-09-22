/**
 * UMBRAALA — casca da Fase 0.
 *
 * Classes de estado (DECISIONS §7):
 *  - implementado: esta casca + roteamento por estado em memória
 *  - demonstração: portal (marcado como MODO DEMONSTRAÇÃO na Fase 3)
 *  - futuro: missão, consoles (sem botão sem destino — aqui ainda sem navegação)
 */
import './App.css'

type Fase = { id: string; nome: string; status: 'concluida' | 'em-curso' | 'futura' }

const FASES: Fase[] = [
  { id: '0', nome: 'Reconhecimento — inventário + decisões + scaffold', status: 'em-curso' },
  { id: '1', nome: 'Fundação visual — tokens, emblema, paisagem', status: 'futura' },
  { id: '2', nome: 'Entrada — sinal → falha → reconexão → sync', status: 'futura' },
  { id: '3', nome: 'Portal — modo demonstração explícito', status: 'futura' },
  { id: '4', nome: 'Missão — garbage in, garbage out (motor determinístico)', status: 'futura' },
  { id: '5', nome: 'Consoles — Academia, Laboratório, Operações', status: 'futura' },
  { id: '6', nome: 'Infra — persistência, fila, permissões, telemetria', status: 'futura' },
]

const statusLabel: Record<Fase['status'], string> = {
  concluida: '✓ concluída',
  'em-curso': '▸ em curso',
  futura: '○ futura',
}

export default function App() {
  return (
    <main className="casca">
      <header>
        <h1>UMBRAALA</h1>
        <p className="sub">
          Academia operacional de engenharia de IA — <strong>Fase 0</strong> · casca
          TypeScript ativa.
        </p>
      </header>

      <section aria-labelledby="fases-h">
        <h2 id="fases-h">Mapa de fases</h2>
        <ol className="fases">
          {FASES.map((f) => (
            <li key={f.id} data-status={f.status}>
              <span className="fid">Fase {f.id}</span>
              <span className="fnome">{f.nome}</span>
              <span className="fstat">{statusLabel[f.status]}</span>
            </li>
          ))}
        </ol>
      </section>

      <footer>
        <p className="nota">
          Nada aqui finge funcionar: sem auth, sem métricas, sem agentes em
          execução. Ver <code>docs/DECISIONS.md</code> para o inventário completo.
        </p>
      </footer>
    </main>
  )
}
