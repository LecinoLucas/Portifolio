# ADR 0002 — Endereço curto com Firebase Hosting (site estático)

- **Status**: Aceita (site `lecinolucas` criado no Firebase; aguardando a primeira publicação)
- **Data**: 2026-10-02

## Contexto
O site roda no Cloud Run com o endereço padrão
`portifolio-475271784563.southamerica-east1.run.app`, longo e pouco profissional
para currículo e LinkedIn. O Cloud Run não oferece mapeamento de domínio em
`southamerica-east1`. Além disso, o projeto do Firebase (`portifolio-509500`) é
diferente do projeto do Cloud Run, e o Hosting só reescreve para Cloud Run do
mesmo projeto.

## Decisão
Como o site é uma SPA estática (ver ADR 0001), publicar o build (`dist`)
diretamente no **Firebase Hosting**, plano Spark (grátis, sem cartão):

- Endereço: `https://lecinolucas.web.app`.
- Depois, opcionalmente, um domínio próprio anexado ao mesmo Hosting.
- O Cloud Run continua com o deploy automático no merge; o `run.app` segue funcionando.

## Como publicar
No Cloud Shell, na raiz do repositório:
```
npm ci && npm run build
npx firebase-tools login --no-localhost
npx firebase-tools use portifolio-509500
npx firebase-tools deploy --only hosting
```
Depois de abrir o novo endereço e conferir, trocar o endereço oficial:
`npm run set-domain -- https://lecinolucas.web.app`, regenerar o PDF do currículo e fazer o merge.

## Consequências
- A publicação no endereço curto é manual (ou futura GitHub Action); não acompanha o merge sozinha.
- Trocar o endereço oficial de SEO só depois de o novo estar no ar.
