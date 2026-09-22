# UMBRAALA

Academia operacional de engenharia de IA — experiência de aprendizagem ambientada
em um futuro bioindustrial urbano. Cada efeito visual revela uma relação,
uma consequência ou uma mudança de estado.

> **Status:** Fase 0 (Reconhecimento) — casca TypeScript + decisões registradas.
> Ver [`docs/DECISIONS.md`](docs/DECISIONS.md) para inventário, stack, riscos
> e o que já é implementado vs. demonstração vs. futuro.

## Desenvolvimento

```bash
pnpm install
pnpm dev      # http://localhost:5173
pnpm build    # typecheck + build de produção
```

## Fases

| Fase | Entrega |
|---|---|
| 0 ✅ | Inventário + `docs/DECISIONS.md` + scaffold TS |
| 1 | Tokens, emblema original, paisagem, movimento, responsivo |
| 2 | Entrada: sinal → falha → reconexão → sync (pulável) |
| 3 | Portal com MODO DEMONSTRAÇÃO explícito |
| 4 | Missão "Garbage in, garbage out" — grafo + motor determinístico |
| 5 | Consoles: Academia, Laboratório, Operações |
| 6 | Persistência, fila, permissões, telemetria |

Regra: concluir e verificar as fases 0–4 antes de módulos adicionais.

## Licença

Privado — © Victor. Identidade, emblema e assets autorais.
