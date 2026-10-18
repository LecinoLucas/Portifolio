import type { DefinicaoSistema } from "@/data/demos/sistema-tipos";

/** Dados 100% fictícios: demonstração visual do sistema da barbearia. */
export const barbearia: DefinicaoSistema = {
  tema: "barbearia",
  titulo: "Sistema da barbearia · demonstração",
  marca: "BARBEARIA",
  submarca: "Exemplo",
  usuario: { nome: "Administrador", papel: "Administrador" },
  telas: [
    {
      id: "dashboard", rotulo: "Dashboard", titulo: "Dashboard", descricao: "Resumo do dia e do mês.",
      blocos: [
        { tipo: "kpis", itens: [
          { rotulo: "Atendimentos hoje", valor: "18", apoio: "3 em andamento" },
          { rotulo: "Faturamento do dia", valor: "R$ 1.940", apoio: "meta de R$ 2.200", tom: "destaque" },
          { rotulo: "Agendamentos amanhã", valor: "22", apoio: "2 horários livres" },
          { rotulo: "Clientes novos", valor: "6", apoio: "neste mês", tom: "verde" },
        ] },
        { tipo: "barras", titulo: "Faturamento da semana", itens: [
          { rotulo: "Segunda", valor: 1450, texto: "R$ 1.450" }, { rotulo: "Terça", valor: 1620, texto: "R$ 1.620" },
          { rotulo: "Quarta", valor: 1780, texto: "R$ 1.780" }, { rotulo: "Quinta", valor: 1940, texto: "R$ 1.940" },
          { rotulo: "Sexta", valor: 2310, texto: "R$ 2.310" }, { rotulo: "Sábado", valor: 2780, texto: "R$ 2.780" },
        ] },
      ],
    },
    {
      id: "agenda", rotulo: "Agenda", titulo: "Agenda", descricao: "Horários por profissional, sem conflitos.", acao: "+ Novo agendamento",
      blocos: [
        { tipo: "agenda", colunas: [
          { nome: "Profissional A", itens: [
            { hora: "09:00", titulo: "Cliente 01", detalhe: "Corte + barba · 60 min", selo: "Confirmado", tom: "verde" },
            { hora: "10:00", titulo: "Cliente 02", detalhe: "Corte · 30 min", selo: "Agendado", tom: "azul" },
            { hora: "11:00", titulo: "Bloqueio", detalhe: "Intervalo recorrente", selo: "Bloqueado", tom: "cinza" },
          ] },
          { nome: "Profissional B", itens: [
            { hora: "09:30", titulo: "Cliente 03", detalhe: "Barba · 30 min", selo: "Em atendimento", tom: "laranja" },
            { hora: "10:30", titulo: "Cliente 04", detalhe: "Corte · 30 min", selo: "Agendado", tom: "azul" },
          ] },
          { nome: "Profissional C", itens: [
            { hora: "14:00", titulo: "Cliente 05", detalhe: "Pacote mensal · 45 min", selo: "Confirmado", tom: "verde" },
          ] },
        ] },
      ],
    },
    {
      id: "atendimentos", rotulo: "Atendimentos", titulo: "Atendimentos", descricao: "Execução do serviço e pagamento.",
      blocos: [{ tipo: "tabela", colunas: ["Cliente", "Serviço", "Profissional", "Valor", "Situação"], linhas: [
        ["Cliente 01", "Corte + barba", "Profissional A", "R$ 80,00", { selo: "Pago", tom: "verde" }],
        ["Cliente 03", "Barba", "Profissional B", "R$ 40,00", { selo: "Em andamento", tom: "laranja" }],
        ["Cliente 06", "Corte", "Profissional C", "R$ 45,00", { selo: "Aguardando pagamento", tom: "azul" }],
      ] }],
    },
    {
      id: "cadastros", rotulo: "Cadastros", titulo: "Cadastros", descricao: "Clientes, profissionais, serviços e produtos.",
      blocos: [{ tipo: "cartoes", itens: [
        { titulo: "Clientes", texto: "248 cadastrados", meta: "6 novos no mês" },
        { titulo: "Profissionais", texto: "3 ativos", meta: "Horários e bloqueios" },
        { titulo: "Serviços", texto: "12 serviços", meta: "Duração e preço" },
        { titulo: "Pacotes", texto: "4 pacotes ativos", meta: "Mensais e avulsos" },
      ] }],
    },
    {
      id: "estoque", rotulo: "Estoque", titulo: "Estoque", descricao: "Produtos, entradas e saídas.",
      blocos: [{ tipo: "tabela", colunas: ["Produto", "Grupo", "Quantidade", "Situação"], linhas: [
        ["Pomada modeladora", "Finalizadores", "14", { selo: "Em estoque", tom: "verde" }],
        ["Óleo para barba", "Barba", "3", { selo: "Estoque baixo", tom: "laranja" }],
        ["Shampoo", "Cabelo", "0", { selo: "Sem estoque", tom: "vermelho" }],
      ] }],
    },
    {
      id: "financeiro", rotulo: "Financeiro", titulo: "Financeiro", descricao: "Caixa, contas a pagar e a receber.",
      blocos: [
        { tipo: "kpis", itens: [
          { rotulo: "Entradas do mês", valor: "R$ 41.380", tom: "verde" }, { rotulo: "Saídas do mês", valor: "R$ 17.920", tom: "vermelho" },
          { rotulo: "A receber", valor: "R$ 3.250" }, { rotulo: "A pagar", valor: "R$ 5.640", tom: "laranja" },
        ] },
        { tipo: "tabela", titulo: "Últimos lançamentos", colunas: ["Descrição", "Tipo", "Valor", "Situação"], linhas: [
          ["Atendimento · Cliente 01", "Receita", "R$ 80,00", { selo: "Pago", tom: "verde" }],
          ["Aluguel do espaço", "Despesa", "R$ 2.800,00", { selo: "A pagar", tom: "laranja" }],
          ["Comissão · Profissional A", "Despesa", "R$ 640,00", { selo: "Pago", tom: "verde" }],
        ] },
      ],
    },
    {
      id: "integracoes", rotulo: "Integrações", titulo: "Integrações", descricao: "WhatsApp e Google Agenda.",
      blocos: [
        { tipo: "cartoes", itens: [
          { titulo: "WhatsApp", texto: "Lembretes de agendamento enviados automaticamente.", selo: "Conectado", tom: "verde", meta: "Conexão por QR code" },
          { titulo: "Google Agenda", texto: "Agenda dos profissionais sincronizada.", selo: "Sincronizado", tom: "verde", meta: "Última sincronização: hoje" },
        ] },
        { tipo: "aviso", tom: "laranja", titulo: "Atenção", texto: "A conexão do WhatsApp não é oficial e pode ser interrompida. O sistema mostra esse aviso na tela." },
      ],
    },
  ],
};
