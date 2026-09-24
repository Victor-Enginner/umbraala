# UMBRAALA — DECISIONS (Fase 0: Reconhecimento)

> Critério de saída da Fase 0: nenhum arquivo existente é sobrescrito por suposição.
> Este repositório nasceu vazio — inventário abaixo regista o estado inicial.

## 1. Inventário do repositório (2026-09-22)

| Item | Estado |
|---|---|
| Pasta `umbraala/` | **criada vazia nesta sessão** — nenhum arquivo pré-existente |
| README / AGENTS.md / package.json | inexistentes (pasta nova) |
| Assets (emblema, paisagem, áudio) | inexistentes — serão autorais (Fase 1) |
| Git | `git init` novo, remote `Victor-Enginner/umbraala` |
| Ambiente disponível | Node + pnpm (gerenciador da vitrine), Python 3, sem Docker |

## 2. Stack escolhida (justificativa)

**Vite + React + TypeScript** (`pnpm create vite` template `react-ts`).

- O prompt mestre exige TypeScript + React + arquitetura de componentes e "preserve a stack existente" — o portfólio já usa Vite/React na vitrine (mesmo toolchain = mesmos comandos, zero curva).
- Vite: dev server rápido, build estático que pode ir para GitHub Pages depois, TS out-of-the-box.
- Sem SSR/Next: a primeira fatia vertical (entrada → portal → missão) é client-side; servidor real só entra na Fase 6 (persistência/fila). Decisão reversível.
- **Não** instalar shadcn/GSAP/React Flow na Fase 0 — o prompt manda pesquisar referências *antes* de codificar UI (Fase 1). Registrar versões aqui quando instaladas.

## 3. Arquitetura prevista (incrementos A–D do prompt)

```
umbraala/
├── docs/DECISIONS.md          ← este arquivo (rastro de decisões)
├── src/
│   ├── main.tsx / App.tsx     ← casca (A)
│   ├── entrada/               ← intro: sinal → falha → reconexão → sync (B)
│   ├── portal/                ← tela de acesso + MODO DEMONSTRAÇÃO (B)
│   ├── missao/                ← grafo ≥4 nós + motor determinístico (C)
│   │   └── motor/             ← puro, sem UI — testável isolado
│   └── consoles/              ← Academia / Lab / Operações (D)
└── tests/                     ← testes do motor (invariância de trace)
```

- **Superfícies:** Academia, Laboratório, Operações — ligadas pela mesma execução.
- **Missão vertical (Fase 4):** fonte → validação → agente → avaliação; `input + versão + config = trace` reproduzível; duração simulada **identificada como tal**.
- **Escopo:** concluir fases 0–4 antes de módulos extras; planejar 70 agentes como *registro*, nunca 70 execuções paralelas.

## 4. Rotas e estados (primeira fatia)

| Rota | Estado |
|---|---|
| `/` | entrada (pulável, 5–8s, `prefers-reduced-motion`, som off) |
| `/portal` | acesso — sem backend ⇒ **MODO DEMONSTRAÇÃO** explícito |
| `/missao/gio` | missão Garbage In, Garbage Out (grafo + trace) |
| `/academia`, `/lab`, `/ops` | roadmap visível, sem botão sem destino |

## 5. Orçamento de desempenho (inicial)

- Nenhum vídeo no bundle; 3D no máximo em 1 cena focal, lazy + fallback estático.
- Intro em motion/code (CSS/RAF), cancelável; nada sequestra scroll/foco.
- LCP < 2.5s no portal; bundle inicial **< 120 kB gzip** (medido Fase 1: ~110 kB gzip; raw 343 kB por React+Base UI — chunks pesados entram lazy a partir da Fase 2).

## 6. Riscos

1. **Referências online indisponíveis** (Refero etc.) → registrar limitação e usar este arquivo + docs do prompt.
2. **Identidade:** proibido reproduzir Umbrella/RE/Duna — emblema = núcleo + 7 partes orgânicas, desenho original.
3. **Falsificação de estado:** nunca apresentar estado local como auth real, métrica inventada ou agente em execução.
4. GitHub Pages é client-only — rotas SPA precisam de fallback (hash router ou 404.html) se publicar.

## 7. O que é demonstração vs implementado (Fase 0)

| Item | Classe |
|---|---|
| Casca Vite/TS + este documento | **implementado** |
| Auth do portal | **demonstração** (marcado na UI) até Fase 6 |
| Motor da missão | **simulação determinística** (Fase 4) |
| Fila, permissões, custos, 70 agentes | **futura** (roadmap) |

## 8. Decisões visuais (adotadas, autorais)

- Canvas preto mineral/graphite · branco técnico · **vermelho só alerta/transição** · **verde orgânico** crescimento/descoberta.
- Títulos expressivos + mono p/ telemetria + fonte de UI legível (definir tokens na Fase 1).
- Emblema original: núcleo + 7 partes conectadas (não segmentado/parasol).

## 9. Log de decisões

| Data | Decisão | Motivo |
|---|---|---|
| 2026-09-22 | Repo novo vazio + Vite/React/TS com pnpm | Prompt manda inicializar TS moderno se vazio; toolchain já usada na vitrine |
| 2026-09-22 | Sem libs de UI/animation na Fase 0 | Pesquisar referências antes de codificar UI (ordem obrigatória do prompt) |
| 2026-09-22 | Sem backend/auth nesta fase | Critério: demo explicitamente marcada até provedor real existir |
| 2026-09-22 | **Fase 1a — pesquisa de referências (antes de codificar UI):** shadcn registry `base-nova` **200** (`/r/styles/base-nova/button.json`, `/r/index.json`); docs shadcn **200**; docs Tailwind **307→ok**; **Componentry/`componentry.dev/r/*` = 404 (indisponível nesta sessão — limitação registrada, usar shadcn como catálogo primário)**; fonte mono local: JetBrains Mono instalada no sistema | Ordem obrigatória do prompt mestre §3; catalogs são peças, não sistemas p/ copiar |
| 2026-09-22 | **Fase 1b — primitivos shadcn `base-nova`** (button/dialog/tooltip) vendidos do registry e adaptados p/ Vite: imports `@base-ui/react` (Base UI 1.8.0 — sucessor do Radix no estilo base-nova), `cn` local, `IconPlaceholder` → `lucide-react`. Tailwind **v4.3** via `@tailwindcss/vite` (sem config JS; tokens em `@theme inline` no `index.css`) | Mesma base de estilo da vitrine; sem npm install de template Next |
| 2026-09-22 | **Fase 1c/d/e — tokens autorais** (`:root` semântico + `@theme inline`), **emblema autoral** (`src/components/emblema.tsx`: núcleo + 7 partes orgânicas em elipses irregulares assimétricas, filamentos em curva Q — não segmentado), **shell Tailwind responsivo** com tooltips explicando status (função real, não cenografia) | Identidade autoral ≠ catálogo; vermelho só alerta, verde = descoberta |
| 2026-09-22 | Budget re-expresso em gzip: `< 120 kB gzip` (medido 110,6 gzip / 343 raw; `chunkSizeWarningLimit` 350) | Raw não é a métrica que o usuário sente; registro transparente |
