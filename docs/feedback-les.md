# Feedback para o repositório oficial do LES

> Observação técnica registrada durante a construção deste portfólio.
> **Este documento não altera o LES.** Ele deve ser levado posteriormente ao
> repositório oficial do padrão (`@lecinolucas/les` / `LecinoLucas-engineering-standard`)
> e tratado lá. Nada aqui deve ser aplicado a partir deste projeto.

---

## Título

`les init` em greenfield assume arquitetura de ERP sem evidência suficiente.

## 1. Cenário observado

Projeto **greenfield**, diretório vazio, objetivo: um **portfólio estático** (SPA).
Comando executado:

```bash
npx @lecinolucas/les init --yes
```

## 2. Comportamento esperado

Sem sinais no diretório, o bootstrap deveria:

- perguntar o tipo de projeto (site / app / API / CLI / lib); ou
- em modo `--yes` (não interativo), partir de um **perfil mínimo neutro** — sem
  backend, sem banco, sem módulos de domínio — deixando o operador promover para
  Modular Monolith quando houver necessidade real.

## 3. Comportamento atual

O `init` gerou um contrato de **sistema empresarial / ERP**:

- stack imposta: Next.js + Fastify/Express + PostgreSQL + Prisma/Kysely;
- módulos de negócio criados: `autenticacao`, `usuarios`, `faturamento`, `notificacoes`;
- `docs/arquitetura.md` descrevendo um Modular Monolith com load balancer e DB.

Nada disso se aplicava a uma SPA estática de conteúdo.

## 4. Risco

- Contrato inicial descreve um sistema que não existe → `AGENTS.md` deixa de ser
  "fonte de verdade" já no primeiro commit.
- Exige reescrita manual de `AGENTS.md`, `docs/arquitetura.md` e
  `.les/manifest.json` logo após o `init`, aumentando a chance de divergência.
- Um agente de IA que confie no contrato gerado pode introduzir backend,
  migrations e camadas de autorização desnecessárias.

## 5. Mitigação aplicada neste projeto

Adaptação manual dos arquivos e registro da decisão em
`docs/decisoes/0001-spa-estatica-sem-backend.md`. `les check` (8/8) e
`les audit` (7/7 automatizados) voltaram a passar.

## 6. Sugestão de melhoria

> Greenfield bootstrap should not assume ERP/domain architecture without evidence.

- Inferir a stack a partir de arquivos presentes (`vite.config.*`, `next.config.*`,
  `astro.config.*`, `package.json` scripts, ausência de `src/`) antes de aplicar defaults.
- Em `--yes` sem evidência: perfil mínimo (frontend estático), com os blocos de
  backend/DB/módulos marcados como "N/A — promover quando necessário (H2)".
- Opcional: flag `--profile=static|spa|api|monolith|cli|lib` para bootstrap explícito.

## 7. Encaminhamento

Abrir issue no repositório oficial do LES com o conteúdo acima. Não corrigir o
padrão a partir deste repositório de portfólio.
