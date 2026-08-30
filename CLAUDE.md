# CLAUDE.md — Instrucoes para Claude Code no Projeto Portifolio

> Inicializado via Lucas Engineering Standard (LES) — v2.2.0

---

## Regra de Ouro
**Leia `AGENTS.md` antes de qualquer alteracao.** Ele e a fonte primaria e viva de verdade deste projeto.

---

## Fluxo de Desenvolvimento
1. **Compreender o Requisito**: Entender as regras de negocio e criterios de aceitacao.
2. **Identificar Modulos**: Mapear quais modulos em `src/modulos/` serao impactados.
3. **Avaliar Fronteiras**: Garantir que nao haja acoplamento indevido entre repositorios de modulos distintos.
4. **Planejar**: Identificar arquivos a serem criados/alterados.
5. **Implementar**: Escrever codigo em portugues de negocio, limpo e com responsabilidade unica (< 300 linhas).
6. **Validar Testes**: Executar a suite de testes automatizados.
7. **Revisar Seguranca e Performance**: Sanitizacao de inputs, consultas parametrizadas e paginacao.
8. **Verificar Definition of Done (DoD)**: Conferir o checklist em `AGENTS.md`.
9. **Relatar**: Explicar com clareza as alteracoes realizadas.

---

## Comandos Rapidos do Projeto
- **Desenvolvimento**: `npm run dev` (ou comando correspondente)
- **Testes**: `npm test`
- **Linter / Typecheck**: `npm run lint`
- **Build**: `npm run build`
