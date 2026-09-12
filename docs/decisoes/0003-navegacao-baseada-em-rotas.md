# ADR 0003 — Navegação Baseada em Rotas Reais (SPA Multi-Route) e Central Tecnológica

- **Status**: Aceita
- **Data**: 2026-09-12
- **Contexto LES**: Horizonte H2 (Experiência de Produto SaaS & Arquitetura Frontend)
- **Referências**: LES v2.2.0, ADR 0001, ADR 0002, Biblioteca_PadraoIA

---

## Contexto

Anteriormente, o portfólio operava como uma página única contínua com rolagem baseada em âncoras de seção (`#atuacao`, `#projetos`, `#contato`). Embora funcional para uma visualização linear inicial, essa abordagem apresentava limitações claras para avaliação técnica por recrutadores e líderes de engenharia:

1. **Sensação de "site institucional estático"**: As seções empilhadas passavam a percepção de uma página tradicional, distanciando-se da experiência de um produto de software SaaS ou de uma central de sistemas moderna.
2. **Compartilhamento de links diretos prejudicado**: Não era possível compartilhar URLs limpas e específicas para um estudo de caso individual, página de experiência ou canais de contato.
3. **Gestão de histórico e foco**: O botão "Voltar" do navegador não refletia as mudanças de contexto e os leitores de tela não recebiam reposicionamento de foco estruturado.
4. **Ausência de páginas de erro**: Não havia tratamento semântico de rotas inexistentes (404).

---

## Decisão

1. **Adoção do `react-router-dom` para Roteamento Declarativo**:
   - Transição de single-page scroll para SPA multi-rota com URLs limpas no HTML5 History API.
   - Rotas principais implementadas:
     - `/` — Central Profissional (Hero de alto impacto, composição de sistemas conectados, caminhos unificados, projetos em destaque e atalhos rápidos).
     - `/sobre` — Trajetória, evolução profissional detalhada e princípios de engenharia.
     - `/experiencia` — Linha do tempo corporativa com atuações em ERP, suporte, implantação e desenvolvimento.
     - `/projetos` — Visão geral e catálogo com filtros dinâmicos por foco de atuação.
     - `/projetos/:slug` — Estudo de caso dedicado com análise profunda de problema, arquitetura, mTLS/segurança e resultados.
     - `/competencias` — Matriz completa de especialidades (TOTVS Protheus, React, Node.js, PostgreSQL, LES).
     - `/contato` — Canais diretos (WhatsApp destacado, e-mail, redes) e formulário integrado à API.
     - `*` — Página 404 personalizada de sistema com link de retorno à Central.

2. **Acessibilidade e Usabilidade de Navegação**:
   - Criação do componente `<ScrollToTopAndFocus />` para restaurar a rolagem ao topo e reposicionar o foco no elemento `<main id="conteudo">` a cada mudança de rota.
   - Atualização dinâmica de `document.title` com títulos semânticos e descritivos por rota.
   - Menu desktop e mobile (`Sheet`) com indicação clara da rota ativa via `<NavLink>` e fechamento automático do menu mobile ao selecionar uma opção.

3. **Inclusão do Canal Oficial WhatsApp**:
   - Integração do contato `(62) 99656-4756` com URL oficial codificada (`https://wa.me/5562996564756?text=...`).
   - Disponibilização em botão flutuante acessível (sem pulso contínuo, respeitando safe area e foco visível) e botões contextuais nas páginas Home e Contato.

---

## Consequências

- **Positivas**:
  - Aparência imediata de central de tecnologia e produto de software profissional.
  - Cada área agora possui uma URL compartilhável, facilitando o envio de links específicos para recrutadores (ex: enviar direto `/projetos/conciliacao-bancaria-itau` ou `/competencias`).
  - Navegação fluida com suporte completo aos botões voltar/avançar do navegador e foco acessível.
- **Mitigações**:
  - Para builds estáticos em produção (Cloudflare Pages), o Vite garante o fallback de roteamento para `index.html`.
  - Links antigos com âncora continuam utilizáveis e os testes automatizados foram atualizados para cobrir todas as rotas.
