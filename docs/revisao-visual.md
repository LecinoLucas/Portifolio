# Revisão Visual da Aplicação

> **Padrão**: Lucas Engineering Standard (LES) v2.2.0  
> **Status**: Capturas reais da Central Tecnológica, Rotas SPA e Integração WhatsApp

Este documento reúne os registros visuais reais da aplicação após a **segunda passagem visual**, destacando:
- **Hero em 2 colunas na primeira dobra (Desktop)**: apresentação profissional à esquerda e o **Mapa de Sistemas Conectados** interativo à direita sem rolagem.
- **Identidade cromática enriquecida**: integração equilibrada de violeta, ciano, magenta, azul elétrico e laranja, com iluminação ambiente e contraste em dark e light mode.
- **Catálogo Modular de Projetos**: identificadores visuais `MOD-01` a `MOD-04`, bordas coloridas com glow suave temático e botões de ação diferenciados (*Explorar Estudo de Caso* vs *Prévia Rápida* com ícone `Eye`).
- **Responsividade refinada no Tablet (768px)**: breakpoint desktop elevado para `lg` (1024px) e menu compacto/gaveta ativado no tablet, eliminando esmagamento do logo "Lecino Lucas".
- **Eliminação de redundância do WhatsApp**: botão flutuante ocultado automaticamente na rota `/contato`, respeitando o bloco prioritário de atendimento.

---

## 1. Desktop (1440 × 900)

### 1.1 Página Inicial / Hero — Tema Escuro (Padrão)
![Página Inicial — Tema Escuro](screenshots/1440x900-home-dark.png)

### 1.2 Página Inicial / Hero — Tema Claro
![Página Inicial — Tema Claro](screenshots/1440x900-home-light.png)

### 1.3 Seção de Projetos e Estudos de Caso
![Seção de Projetos](screenshots/1440x900-projetos.png)

### 1.4 Detalhes do Estudo de Caso (Drawer / Modal)
![Detalhes do Projeto](screenshots/1440x900-projeto-detalhe.png)

### 1.5 Formulário de Contato Direto
![Formulário de Contato](screenshots/1440x900-contato.png)

---

## 2. Tablet (768 × 1024)

### 2.1 Página Inicial / Hero
![Página Inicial no Tablet](screenshots/768x1024-home.png)

### 2.2 Seção de Projetos
![Projetos no Tablet](screenshots/768x1024-projetos.png)

### 2.3 Formulário de Contato
![Contato no Tablet](screenshots/768x1024-contato.png)

---

## 3. Mobile Real (375 × 812 — Emulado via Chrome DevTools Protocol)

> **Métricas Reais Verificadas**:  
> `window.innerWidth = 375` | `window.innerHeight = 812` | `window.devicePixelRatio = 2`  
> `document.documentElement.scrollWidth = 375` (Zero rolagem horizontal).

### 3.1 Página Inicial / Hero (Mobile Real)
![Página Inicial no Mobile Real](screenshots/375x812-home-real.png)

### 3.2 Menu Mobile Gaveta Aberto (85vw / Ações Roláveis)
![Menu Mobile Real](screenshots/375x812-menu-real.png)

### 3.3 Catálogo de Módulos (Coluna Única / Touch Target 42px)
![Projetos no Mobile Real](screenshots/375x812-projetos-real.png)

### 3.4 Formulário de Contato Direto (Sem Botão Flutuante Sobreposto)
![Contato no Mobile Real](screenshots/375x812-contato-real.png)

---

## 4. Demonstração Interativa Mockada — Portal RH (MOD-03)

> **Métricas Desktop (1440 × 900)**:  
> `window.innerWidth = 1440` | `window.innerHeight = 900` | `devicePixelRatio = 1`  
> `document.documentElement.scrollWidth = 1425` (Zero rolagem horizontal global).  
>
> **Métricas Mobile Real (375 × 812 — CDP Emulation)**:  
> `window.innerWidth = 375` | `window.innerHeight = 812` | `devicePixelRatio = 2`  
> `document.documentElement.scrollWidth = 375` (Zero rolagem horizontal global, viewport nativo 375px).  
>
> **Regras de Isolamento**: 100% dos dados são fictícios e locais (`portal-rh-demo-data.ts`), sem persistência de backend, com aviso permanente em banner e navegação acessível por teclado/touch/drag-and-drop.

### 4.1 Visão da Vaga — Desktop (1440 × 900)
![Portal RH — Visão da Vaga no Desktop](screenshots/1440x900-portal-rh-vaga.png)

### 4.2 Pipeline de Candidatos (Kanban) — Desktop (1440 × 900)
![Portal RH — Pipeline Kanban no Desktop](screenshots/1440x900-portal-rh-pipeline.png)

### 4.3 Visão da Vaga — Mobile Real (375 × 812)
![Portal RH — Visão da Vaga no Mobile](screenshots/375x812-portal-rh-vaga-real.png)

### 4.4 Pipeline de Candidatos (Kanban) — Mobile Real (375 × 812)
![Portal RH — Pipeline Kanban no Mobile](screenshots/375x812-portal-rh-pipeline-real.png)

---

## 5. Demonstração Interativa Mockada — Portal de Engenharia (MOD-01)

> **Métricas Desktop (1440 × 900)**:  
> `window.innerWidth = 1440` | `window.innerHeight = 900` | `devicePixelRatio = 1`  
> `document.documentElement.scrollWidth = 1425` (Zero rolagem horizontal global).  
>
> **Métricas Mobile Real (375 × 812 — CDP Emulation)**:  
> `window.innerWidth = 375` | `window.innerHeight = 812` | `devicePixelRatio = 2`  
> `document.documentElement.scrollWidth = 375` (Zero rolagem horizontal global, viewport nativo 375px).  
>
> **Regras de Isolamento**: 100% dos dados são fictícios e matematicamente consistentes (`portal-engenharia-demo-data.ts`), sem persistência de backend, sem `localStorage`/`sessionStorage`, com aviso permanente em banner de dados fictícios, transição in-memory preservada durante a navegação entre telas e ação de "Reiniciar demonstração".

### 5.1 Painel Executivo de Obras — Desktop (1440 × 900)
![Portal de Engenharia — Painel Executivo no Desktop](screenshots/1440x900-portal-engenharia-painel.png)

### 5.2 Detalhamento da Obra com EAP e Aprovação — Desktop (1440 × 900)
![Portal de Engenharia — Detalhamento da Obra no Desktop](screenshots/1440x900-portal-engenharia-obra.png)

### 5.3 Painel Executivo de Obras — Mobile Real (375 × 812)
![Portal de Engenharia — Painel Executivo no Mobile](screenshots/375x812-portal-engenharia-painel-real.png)

### 5.4 Detalhamento da Obra com EAP e Aprovação — Mobile Real (375 × 812)
![Portal de Engenharia — Detalhamento da Obra no Mobile](screenshots/375x812-portal-engenharia-obra-real.png)

