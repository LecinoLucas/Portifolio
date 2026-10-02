# ADR 0002 — Endereço curto com Firebase Hosting na frente do Cloud Run

- **Status**: Aceita (aguardando publicação)
- **Data**: 2026-10-02

## Contexto
O site roda no Cloud Run, em `southamerica-east1`, com o endereço padrão
`portifolio-475271784563.southamerica-east1.run.app`, longo e pouco profissional
para currículo e LinkedIn. O Cloud Run **não oferece mapeamento de domínio**
nessa região, mas o **Firebase Hosting aceita reescrever para um serviço do
Cloud Run em `southamerica-east1`**.

## Decisão
Colocar o **Firebase Hosting** na frente do serviço `portifolio`:

- Endereço inicial, grátis: `https://lecinolucas.web.app` (nome sujeito a disponibilidade).
- Depois, opcionalmente, um domínio próprio (ex.: `.com.br`) anexado ao mesmo Hosting.
- O pipeline atual (merge na `main` → Cloud Run) **não muda**: o Hosting apenas
  encaminha todas as requisições (`**`) para o Cloud Run, via `firebase.json`.

## Como publicar (uma vez)
1. No Console do Firebase: **Adicionar projeto**, escolhendo o projeto do GCP que já tem o Cloud Run.
2. No Hosting, criar o site com o nome desejado.
3. No Cloud Shell ou no computador, na raiz do repositório:
   ```
   npm install -g firebase-tools
   firebase login
   firebase use --add        # escolha o projeto
   firebase deploy --only hosting
   ```
4. Abrir o novo endereço e conferir que o site carrega.
5. Só então trocar o endereço oficial: `npm run set-domain -- https://lecinolucas.web.app`,
   regenerar o PDF do currículo e fazer o merge.

## Consequências
- **Custo**: o Hosting com reescrita para Cloud Run pode exigir o plano Blaze
  (paga conforme o uso, com cota gratuita). Conferir no Console antes de aceitar.
  Alternativa sem cartão: hospedar o site estático direto no Hosting (plano Spark,
  `public: "dist"`), o que muda o fluxo de publicação.
- O endereço antigo (`run.app`) continua funcionando.
- Trocar o endereço oficial de SEO antes de o novo estar no ar quebraria o
  compartilhamento do link; por isso o passo 5 vem por último.
