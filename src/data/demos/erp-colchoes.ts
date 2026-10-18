import type { DefinicaoSistema } from "@/data/demos/sistema-tipos";

/** Dados 100% fictícios: demonstração visual do ERP e CRM com atendimento por IA de uma loja de colchões. */
export const erpDemo: DefinicaoSistema = {
  tema: "erp",
  titulo: "ERP da loja de colchões · demonstração",
  marca: "ERP Loja",
  submarca: "CRM e atendimento com IA",
  usuario: { nome: "Gerente", papel: "Administrador" },
  telas: [
    {
      id: "workspace", rotulo: "Workspace", titulo: "Workspace", descricao: "Caixa de entrada unificada do WhatsApp e do Instagram, com a IA e a equipe.",
      blocos: [
        { tipo: "kpis", itens: [
          { rotulo: "Conversas abertas", valor: "24", apoio: "6 aguardando um vendedor", tom: "destaque" },
          { rotulo: "Respondidas pela IA", valor: "81%", apoio: "hoje", tom: "verde" },
          { rotulo: "Passadas para vendedor", valor: "9", apoio: "cliente pronto para fechar", tom: "laranja" },
          { rotulo: "Tempo de resposta", valor: "18 s", apoio: "média de hoje" },
        ] },
        { tipo: "tabela", colunas: ["Contato", "Canal", "Assunto", "Atendimento"], linhas: [
          ["Contato 01", "WhatsApp", "Colchão queen, quer o preço", { selo: "IA", tom: "azul" }],
          ["Contato 02", "WhatsApp", "Entrega para outra cidade", { selo: "Vendedor", tom: "verde" }],
          ["Contato 03", "Instagram", "Box baú, qual a medida?", { selo: "IA", tom: "azul" }],
          ["Contato 04", "WhatsApp", "Pronto para fechar a compra", { selo: "Passar ao vendedor", tom: "laranja" }],
        ] },
      ],
    },
    {
      id: "comercial", rotulo: "Comercial", titulo: "Pipeline comercial", descricao: "Negócios por etapa, do novo lead ao fechamento.", acao: "+ Novo negócio",
      blocos: [{ tipo: "agenda", colunas: [
        { nome: "Novo lead", itens: [
          { hora: "R$ 1.890", titulo: "Negócio 01", detalhe: "Cama box queen", selo: "WhatsApp", tom: "verde" },
          { hora: "R$ 590", titulo: "Negócio 02", detalhe: "Colchão solteiro", selo: "Instagram", tom: "azul" },
        ] },
        { nome: "Proposta", itens: [
          { hora: "R$ 2.480", titulo: "Negócio 03", detalhe: "Colchão + box casal", selo: "Orçamento enviado", tom: "laranja" },
        ] },
        { nome: "Negociação", itens: [
          { hora: "R$ 3.150", titulo: "Negócio 04", detalhe: "Conjunto king", selo: "Pix a cobrar", tom: "azul" },
        ] },
      ] }],
    },
    {
      id: "vendedores", rotulo: "Vendedores", titulo: "Vendedores", descricao: "Fila de atendimento e desempenho de cada vendedor.",
      blocos: [{ tipo: "tabela", colunas: ["Vendedor", "Na fila", "Negócios abertos", "Ganhos no mês", "Situação"], linhas: [
        ["Vendedor 01", "3", "12", "R$ 18.400", { selo: "Disponível", tom: "verde" }],
        ["Vendedor 02", "5", "9", "R$ 14.250", { selo: "Em atendimento", tom: "laranja" }],
        ["Vendedor 03", "0", "6", "R$ 9.800", { selo: "Ausente", tom: "cinza" }],
      ] }],
    },
    {
      id: "tarefas", rotulo: "Tarefas", titulo: "Tarefas", descricao: "Próximas ações dos negócios: ligar, enviar orçamento, cobrar.",
      blocos: [{ tipo: "tabela", colunas: ["Tarefa", "Negócio", "Prazo", "Situação"], linhas: [
        ["Enviar orçamento", "Negócio 03", "Hoje", { selo: "Hoje", tom: "laranja" }],
        ["Cobrar Pix", "Negócio 04", "Hoje", { selo: "Hoje", tom: "laranja" }],
        ["Confirmar entrega", "Negócio 07", "Ontem", { selo: "Atrasada", tom: "vermelho" }],
      ] }],
    },
    {
      id: "estoque", rotulo: "Estoque & Catálogo", titulo: "Estoque & Catálogo", descricao: "Produtos, medidas, fotos e disponibilidade.",
      blocos: [{ tipo: "tabela", colunas: ["Produto", "Medida", "Preço", "Estoque", "Situação"], linhas: [
        ["Colchão de molas", "Casal 138 cm", "R$ 1.290,00", "9", { selo: "Disponível", tom: "verde" }],
        ["Colchão de espuma", "Solteiro 88 cm", "R$ 590,00", "3", { selo: "Estoque baixo", tom: "laranja" }],
        ["Cama box", "Queen 158 cm", "R$ 1.890,00", "0", { selo: "Indisponível", tom: "vermelho" }],
      ] }],
    },
    {
      id: "gestao", rotulo: "Gestão", titulo: "Gestão", descricao: "Radar gerencial, custos da IA e governança do bot.",
      blocos: [
        { tipo: "kpis", itens: [
          { rotulo: "Leads no mês", valor: "212", tom: "destaque" },
          { rotulo: "Taxa de conversão", valor: "14%", tom: "verde" },
          { rotulo: "Perdidos", valor: "31", apoio: "motivo mais comum: preço", tom: "laranja" },
          { rotulo: "Custo da IA", valor: "R$ 38", apoio: "no mês" },
        ] },
        { tipo: "barras", titulo: "Motivos de perda", itens: [
          { rotulo: "Preço", valor: 12, texto: "12" }, { rotulo: "Comprou em outro lugar", valor: 9, texto: "9" },
          { rotulo: "Prazo de entrega", valor: 6, texto: "6" }, { rotulo: "Sem resposta", valor: 4, texto: "4" },
        ] },
      ],
    },
    {
      id: "config", rotulo: "Configurações", titulo: "Configurações", descricao: "Canais do WhatsApp, comportamento do bot e acessos.",
      blocos: [
        { tipo: "cartoes", itens: [
          { titulo: "Canais do WhatsApp", texto: "Vários números, cada um ligado a um vendedor.", selo: "3 conectados", tom: "verde" },
          { titulo: "Bot", texto: "Rotina, escopo, conhecimento e fluxos de atendimento." },
          { titulo: "Prompts e experimentos", texto: "Versões de prompt com avaliação." },
          { titulo: "Usuários", texto: "Perfis e permissões." },
        ] },
        { tipo: "aviso", tom: "azul", titulo: "A IA apoia, o vendedor fecha", texto: "O bot responde dentro do escopo configurado e passa a conversa para um vendedor quando o cliente está pronto para comprar." },
      ],
    },
  ],
};
