# Guia de Validação e Execução do Ambiente Local

> **Padrão**: Lucas Engineering Standard (LES) v2.2.0  
> **Status**: Ativo e Validado

Este documento detalha os procedimentos normativos para inicialização, validação de banco de dados, simulação de serviços e testes automatizados do portfólio no ambiente de desenvolvimento local.

---

## 1. Segurança e Variáveis de Ambiente

O repositório opera sob o princípio **Secure by Design / Zero Secrets**:
- Todos os arquivos `.env` e variações (`.env.local`, `.env.production`) são ignorados pelo `.gitignore`.
- Somente arquivos de modelo sem segredos (`.env.example` e `backend/.env.example`) são versionados.
- Nenhuma chave, credencial ou token privado deve ser adicionado ao histórico do Git.

### Configuração Inicial
```bash
cp .env.example .env
cp backend/.env.example backend/.env
```

---

## 2. Banco de Dados e Migrations Reproduzíveis

O schema do banco de dados é gerenciado exclusivamente via **Prisma Migrate** com migrations SQL versionadas em `backend/prisma/migrations/`.

### Estrutura da Migration Inicial
- Diretório: `backend/prisma/migrations/20260912000000_init/`
- Arquivo: `migration.sql`
- Tabelas criadas:
  - `projetos`: Armazena os estudos de caso oficiais com slugs únicos e campos de detalhamento arquitetural.
  - `contatos`: Armazena mensagens recebidas via formulário de contato com hash de IP para controle de taxa de envio.

### Comandos de Gestão do Banco
1. **Executar migrations pendentes (ambiente limpo ou produção)**:
   ```bash
   npm run prisma:migrate --workspace=@portfolio/backend
   # ou
   npx prisma migrate deploy --schema=backend/prisma/schema.prisma
   ```

2. **Popular os projetos oficiais (Seed idempotente)**:
   ```bash
   npm run prisma:seed --workspace=@portfolio/backend
   ```
   > O script de seed limpa registros de testes manuais da tabela `contatos` e persiste os 4 estudos de caso oficiais de produção.

3. **Verificar status das migrations**:
   ```bash
   npx prisma migrate status --schema=backend/prisma/schema.prisma
   ```

---

## 3. Notificações por E-mail: Simulador SMTP Local e Docker

Para inspecionar os e-mails disparados pelo formulário de contato, estão disponíveis duas abordagens:

### Opção A: Simulador SMTP Local (Padrão sem dependências externas)
Script puro em Node.js (`scripts/local-smtp-simulador.mjs`) que não requer Docker ou serviços externos instalados:
- **Porta SMTP**: `localhost:1025`
- **Interface Web**: `http://localhost:8025`
- **Comando**:
  ```bash
  npm run smtp:simulador
  ```

### Opção B: Mailpit Oficial via Docker Compose
Caso o desenvolvedor tenha Docker instalado e prefira o container oficial do Mailpit:
- **Comando**:
  ```bash
  docker compose up -d mailpit
  ```
- **Porta SMTP**: `localhost:1025`
- **Interface Web**: `http://localhost:8025`

Ambas as opções utilizam os mesmos endpoints, portanto a aplicação backend (`backend/.env`) não precisa de nenhuma alteração de configuração entre elas.

---

## 4. Execução Integrada do Ecossistema

Para iniciar Frontend, Backend e o Simulador SMTP com um único comando:
```bash
npm run dev:all
```

Endereços:
- Frontend (React 19 + Vite): `http://localhost:5173`
- Backend API (Express + Prisma): `http://localhost:3001`
- Verificação de saúde: `http://localhost:3001/health`
- Simulador SMTP Web: `http://localhost:8025`

---

## 5. Testes Automatizados e Isolamento

Os testes automatizados foram construídos para garantir isolamento estrito da camada de dados:
- O conjunto de testes em `backend/tests/api.test.ts` utiliza instâncias de `ProjetoRepositorioMemoria`, `ContatoRepositorioMemoria` e `EmailServicoMock`.
- Os testes **nunca poluem nem dependem do banco de dados de desenvolvimento** PostgreSQL.

### Comandos de Teste e Validação
```bash
# Verificação estrita de tipos
npm run typecheck

# Validação de regras e linter
npm run lint

# Execução de todos os testes unitários e de integração
npm run test

# Build de produção de todos os workspaces
npm run build
```
