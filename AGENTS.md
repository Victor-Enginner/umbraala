# CLAUDE.md — UMBRAALA

Academia operacional de engenharia de IA (pt-BR). Antes de tocar em qualquer coisa,
leia `docs/DECISIONS.md` — é o inventário e o rastro de decisões da Fase 0.

## Comandos

```bash
pnpm install      # deps (pnpm 11: builds aprovados em pnpm-workspace.yaml)
pnpm dev          # dev server http://localhost:5173
pnpm build        # tsc -b + vite build  (obrigatório passar antes de avançar fase)
pnpm preview      # serve dist/
```

## Regras do projeto (do prompt mestre)

- **Ordem obrigatória:** concluir e verificar as fases 0–4 antes de módulos extras.
- **Toda funcionalidade se declara:** implementada e persistente · simulação
  determinística · futura. Nunca fingir auth, métricas ou agentes em execução.
- **Motor determinístico** (`src/missao/motor/` quando existir): puro, separado
  da UI, testável isolado — `input + versão + config = trace` reproduzível.
- **Identidade original:** emblema = núcleo + 7 partes orgânicas. Nada de
  Umbrella/Resident Evil/Duna. Vermelho só alerta/transição; verde = descoberta.
- **Acessibilidade:** teclado, foco visível, `prefers-reduced-motion`, intro
  pulável, som off por padrão.
- Sem backend ⇒ portal marcado como **MODO DEMONSTRAÇÃO**.

## Convenções

- TypeScript strict, React funcional, CSS por arquivo de componente.
- Pesquisar referências **antes** de codificar UI (registrar em DECISIONS §9).
- A cada incremento: rodar, corrigir erros, build verde, depois avançar.
