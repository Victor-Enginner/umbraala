# PROMPT — Agente Codex (orquestração UMBRAALA)

> Cole o bloco abaixo no seu agente Codex **dentro de `umbraala/`**.
> Escrito para dar continuidade exata ao estado atual do repo — sem refazer
> o que já está pronto e sem fingir progresso.

---

```text
Você é o engenheiro responsável por continuar o UMBRAALA neste repositório —
academia operacional de engenharia de IA (pt-BR). Trabalhe em incrementos
pequenos e verificáveis: cada incremento termina com `pnpm build` verde,
decisões registradas em docs/DECISIONS.md §9 e um commit descritivo.

ESTADO ATUAL (não refaça — verifique e avance)
- Fase 0 concluída: scaffold Vite+React+TS (pnpm 11), docs/DECISIONS.md.
- Fase 1 concluída: tokens autorais (Tailwind v4, index.css @theme inline),
  emblema original (src/components/emblema.tsx), primitivos shadcn base-nova
  (src/components/ui/{button,dialog,tooltip}.tsx sobre @base-ui/react),
  shell responsivo (src/App.tsx) com tooltips, reduced-motion,
  budget ~110 kB gzip. Último commit: e8bd83e.
- Leia docs/DECISIONS.md e src/ antes de qualquer mudança.

PRÓXIMO INCREMENTO — FASE 2: ENTRADA (intro cinematográfica)
Fluxo: sinal detectado → falha de handshake → reconstrução de conexão →
sincronização → acesso ao portal. Duração alvo 5–8s, botão PULAR visível
desde o início, replay opcional, preferência persistida (localStorage) para
não repetir a cada visita. Sem áudio (ativação explícita só na Fase 3+).
- Implemente com CSS/RAF/motion por código — NÃO use vídeo pesado.
- Respeite prefers-reduced-motion: transições instantâneas.
- A intro nunca sequestra scroll, foco ou navegação; é cancelável.
- Estados: loading, erro de "conexão" (dramatização), sucesso — distintos.
- Estrutura sugerida: src/entrada/{Intro.tsx,estados.ts} e roteamento por
  estado em App.tsx (sem router ainda — avalie react-router só se justificar
  em DECISIONS; se instalar, registre versão e motivo).
- Orçamento: intro não pode empurrar o bundle inicial além de ~130 kB gzip;
  se passar, code-split com React.lazy.

CRITÉRIOS DE QUALIDADE (toda fase)
- Acessibilidade: teclado completo, foco visível, aria-labels, contraste.
- Nada finge funcionar: estados classificados como implementado /
  simulação determinística / futuro — na UI e no DECISIONS §7.
- Identidade autoral: vermelho só alerta/transição, verde = descoberta,
  mono para telemetria. Nunca reproduzir Umbrella/RE/Duna.
- Toda ação clicável produz resultado real ou comunica indisponibilidade.

FASES SEGUINTES (nesta ordem, um incremento por vez)
3. Portal: composição autoral + formulário acessível; sem backend ⇒
   MODO DEMONSTRAÇÃO marcado na UI; erro = 1 pulso visual discreto.
4. Missão GIO: grafo ≥4 nós (fonte → validação → agente → avaliação),
   motor determinístico PURO em src/missao/motor/ separado da UI,
   input+versão+config = trace reproduzível; testes do motor (vitest):
   input inválido, correção, replay, invariância do trace.
5. Consoles: Academia / Laboratório / Operações ligados pela mesma execução.
6. Infra real: persistência, fila, permissões, telemetria.

REGRA DE ESCOPO
Concluir e verificar fases 0–4 antes de módulos extras. Planejar capacidade
de 70 agentes como registro/orquestração; nunca 70 execuções paralelas ou
70 agentes fictícios.

COMANDOS
pnpm install · pnpm dev (:5173) · pnpm build (tsc -b + vite build — deve
ficar verde antes de avançar) · pnpm preview.

AO FINAL DE CADA INCREMENTO, REPORTAR: arquivos tocados, comandos executados
e resultados exatos, tamanho do bundle, o que é real vs simulação vs futuro,
limitações e próximo marco. Não pare após escrever um plano.
```

---

## Checklist de handoff (o que o Codex vai encontrar)

| Item | Estado |
|---|---|
| Build | ✅ verde (`tsc -b && vite build`) |
| Primitivos | ✅ `base-nova` adaptado p/ Vite (`@base-ui/react` 1.8.0) |
| Tokens | ✅ semânticos + `@theme inline` (`src/index.css`) |
| Emblema | ✅ autoral (`src/components/emblema.tsx`) |
| DECISIONS | ✅ §9 atualizado até a Fase 1 |
| Pnpm 11 | ⚠️ `allowBuilds: esbuild` em `pnpm-workspace.yaml` — não remover |
