import type { DefinicaoSistema } from "@/data/demos/sistema-tipos";

/** Dados 100% fictícios: demonstração visual do sistema de aluguel de motos. */
export const aluguel: DefinicaoSistema = {
  tema: "aluguel",
  titulo: "Aluguel de motos · demonstração",
  marca: "Aluguel de Motos",
  submarca: "Gestão da frota",
  usuario: { nome: "Locador", papel: "Administrador" },
  telas: [
    {
      id: "dashboard", rotulo: "Dashboard", titulo: "Dashboard", descricao: "Situação da frota e do financeiro.",
      blocos: [
        { tipo: "kpis", itens: [
          { rotulo: "Motos alugadas", valor: "14", apoio: "de 20 na frota", tom: "destaque" },
          { rotulo: "Disponíveis", valor: "4", tom: "verde" },
          { rotulo: "Em manutenção", valor: "2", tom: "laranja" },
          { rotulo: "Multas pendentes", valor: "3", tom: "vermelho" },
        ] },
        { tipo: "barras", titulo: "Receita dos últimos meses", itens: [
          { rotulo: "Maio", valor: 18400, texto: "R$ 18.400" }, { rotulo: "Junho", valor: 19650, texto: "R$ 19.650" },
          { rotulo: "Julho", valor: 21200, texto: "R$ 21.200" }, { rotulo: "Agosto", valor: 22780, texto: "R$ 22.780" },
        ] },
      ],
    },
    {
      id: "cadastros", rotulo: "Cadastros", titulo: "Cadastros", descricao: "Motos, locatários e locadores.", acao: "+ Novo cadastro",
      blocos: [
        { tipo: "cartoes", itens: [
          { titulo: "Motos", texto: "20 motos cadastradas", meta: "Placa, modelo e situação" },
          { titulo: "Locatários", texto: "31 clientes", meta: "Documentos e contatos" },
          { titulo: "Locadores", texto: "2 locadores", meta: "Dados para o contrato" },
        ] },
        { tipo: "tabela", titulo: "Motos", colunas: ["Placa", "Modelo", "Ano", "Situação"], linhas: [
          ["ABC-1D23", "Moto 150 cc", "2023", { selo: "Alugada", tom: "azul" }],
          ["DEF-4G56", "Moto 160 cc", "2024", { selo: "Disponível", tom: "verde" }],
          ["GHI-7J89", "Moto 150 cc", "2022", { selo: "Em manutenção", tom: "laranja" }],
        ] },
      ],
    },
    {
      id: "contratos", rotulo: "Contratos", titulo: "Contratos", descricao: "Contratos de locação e geração do documento.", acao: "Gerar contrato",
      blocos: [{ tipo: "tabela", colunas: ["Contrato", "Locatário", "Moto", "Valor semanal", "Situação"], linhas: [
        ["CT-0012", "Locatário 01", "ABC-1D23", "R$ 280,00", { selo: "Ativo", tom: "verde" }],
        ["CT-0011", "Locatário 02", "JKL-0M12", "R$ 300,00", { selo: "Ativo", tom: "verde" }],
        ["CT-0007", "Locatário 03", "NOP-3Q45", "R$ 260,00", { selo: "Encerrado", tom: "cinza" }],
      ] }],
    },
    {
      id: "manutencoes", rotulo: "Manutenções", titulo: "Manutenções", descricao: "Serviços e peças por moto.",
      blocos: [{ tipo: "tabela", colunas: ["Moto", "Serviço", "Peças", "Custo", "Situação"], linhas: [
        ["GHI-7J89", "Troca de corrente", "Kit de transmissão", "R$ 320,00", { selo: "Em andamento", tom: "laranja" }],
        ["ABC-1D23", "Revisão geral", "Óleo e filtro", "R$ 180,00", { selo: "Concluída", tom: "verde" }],
      ] }],
    },
    {
      id: "pagamentos", rotulo: "Pagamentos", titulo: "Pagamentos", descricao: "Cobranças e recebimentos dos contratos.",
      blocos: [{ tipo: "tabela", colunas: ["Contrato", "Vencimento", "Valor", "Situação"], linhas: [
        ["CT-0012", "20/08/2026", "R$ 280,00", { selo: "Pago", tom: "verde" }],
        ["CT-0011", "21/08/2026", "R$ 300,00", { selo: "Pendente", tom: "azul" }],
        ["CT-0009", "14/08/2026", "R$ 280,00", { selo: "Atrasado", tom: "vermelho" }],
      ] }],
    },
    {
      id: "multas", rotulo: "Multas", titulo: "Multas", descricao: "Infrações vinculadas a moto e locatário.",
      blocos: [{ tipo: "tabela", colunas: ["Moto", "Locatário", "Infração", "Valor", "Situação"], linhas: [
        ["ABC-1D23", "Locatário 01", "Excesso de velocidade", "R$ 130,16", { selo: "Pendente", tom: "laranja" }],
        ["JKL-0M12", "Locatário 02", "Estacionamento irregular", "R$ 88,38", { selo: "Repassada", tom: "azul" }],
      ] }],
    },
  ],
};
