# ADR 0003 — Portão de qualidade antes do deploy

- **Status**: Aceita (implementada em workflows; ainda não executada no GitHub)
- **Data**: 2026-10-17

## Contexto
Cada merge na `main` publica o site no Firebase Hosting. O workflow de publicação
só rodava `npm run build`: nenhum lint nem teste impedia que uma alteração quebrada
fosse ao ar, e pull requests não tinham validação automática.

## Decisão
Dois workflows em `.github/workflows/`:

- `ci.yml` ("Verificações de qualidade"): ESLint, Vitest e build de produção.
  Dispara em **pull request para a `main`** e também é **chamado** pela publicação.
- `firebase-hosting.yml`: no push para a `main` (ou execução manual), primeiro chama
  `ci.yml`; o job `publicar` usa `needs: verificar`, então **só executa se as
  verificações passarem**. O build testado é guardado como artefato e reaproveitado
  na publicação (o que foi testado é o que vai ao ar, sem compilar duas vezes).

Escolhas para evitar execução duplicada: a CI não roda em push de branch sem PR e
não roda separadamente no push para a `main` (roda uma vez, dentro da publicação).
Publicações usam fila (`cancel-in-progress: false`) e só a `main` publica.

## Consequências
- Nenhuma dependência nova.
- O endereço `run.app` (Cloud Run) é construído por um gatilho do Cloud Build,
  **fora do GitHub Actions**, e não é bloqueado por esses workflows. Para que a CI
  também proteja esse caminho, é preciso exigir o check "Verificações de qualidade"
  em uma regra de proteção da branch `main` (configuração do repositório no GitHub).
- Uma execução manual a partir de outra branch roda as verificações, mas não publica.
