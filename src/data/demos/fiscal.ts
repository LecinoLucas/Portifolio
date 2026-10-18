/** Dados 100% fictícios para a demonstração visual do Portal Fiscal. */

export type TelaFiscal =
  | "geral" | "certificados" | "conferencia" | "regularidade" | "documentos"
  | "catalogo" | "combustiveis" | "obrigacoes" | "atividades" | "config";

export type TomFiscal = "azul" | "verde" | "laranja" | "vermelho" | "cinza";

/** Célula de tabela: texto simples ou selo colorido. */
export type Celula = string | { selo: string; tom: TomFiscal };

export interface TabelaFiscal {
  colunas: string[];
  linhas: Celula[][];
}

export const menuFiscal: { id: TelaFiscal; rotulo: string; titulo: string; descricao: string }[] = [
  { id: "geral", rotulo: "Visão geral", titulo: "Visão geral", descricao: "Acompanhe documentos, processamentos e pendências do ambiente selecionado." },
  { id: "certificados", rotulo: "Certificados Digitais", titulo: "Certificados Digitais", descricao: "Certificados A1 por escopo e finalidade." },
  { id: "conferencia", rotulo: "Conferência fiscal", titulo: "Conferência fiscal", descricao: "Fila de trabalho do confronto entre XML e lançamentos do Protheus." },
  { id: "regularidade", rotulo: "Regularidade Fiscal", titulo: "Regularidade Fiscal", descricao: "Certidões, consultas automáticas e alertas de vencimento." },
  { id: "documentos", rotulo: "Documentos fiscais", titulo: "Documentos fiscais", descricao: "XMLs e DF-e persistidos, com origem e evidência." },
  { id: "catalogo", rotulo: "Catálogo e Tributação", titulo: "Catálogo e Tributação", descricao: "Produtos por filial, NCM e CFOP." },
  { id: "combustiveis", rotulo: "Controle de Combustíveis", titulo: "Controle de Combustíveis", descricao: "Acompanhamento de estoque e movimentação por filial." },
  { id: "obrigacoes", rotulo: "Obrigações Acessórias", titulo: "Obrigações Acessórias", descricao: "Entregas fiscais por competência e prazo." },
  { id: "atividades", rotulo: "Atividades", titulo: "Atividades", descricao: "Acompanhamento e execução das atividades operacionais do time fiscal." },
  { id: "config", rotulo: "Configurações", titulo: "Configurações", descricao: "Estrutura organizacional, acessos e integrações." },
];

export const kpisGeral = [
  { rotulo: "Pendentes", valor: "14", apoio: "Aguardando triagem" },
  { rotulo: "Em análise", valor: "6", apoio: "Em tratamento" },
  { rotulo: "Com divergência", valor: "3", apoio: "1 de alta severidade" },
  { rotulo: "Conferências aprovadas", valor: "128", apoio: "Validadas e auditadas" },
  { rotulo: "Rejeitadas", valor: "2", apoio: "Ação corretiva exigida" },
];

export const atalhos = ["Importar XMLs", "Fila de trabalho", "Consultar divergências", "Certificados digitais"];

export const tabelas: Partial<Record<TelaFiscal, TabelaFiscal>> = {
  certificados: {
    colunas: ["Filial", "Finalidade", "Titular", "Validade", "Situação"],
    linhas: [
      ["0101 · Filial Exemplo A", "Distribuição DF-e", "Empresa Exemplo A", "14/03/2027", { selo: "Vigente", tom: "verde" }],
      ["0102 · Filial Exemplo B", "Distribuição DF-e", "Empresa Exemplo B", "02/12/2026", { selo: "Vence em 38 dias", tom: "laranja" }],
      ["0103 · Filial Exemplo C", "Assinatura", "Empresa Exemplo C", "20/09/2026", { selo: "Vencido", tom: "vermelho" }],
    ],
  },
  conferencia: {
    colunas: ["Nota", "Filial", "Fornecedor", "Divergência", "Severidade", "Situação"],
    linhas: [
      ["NF 000.145 · série 1", "0101", "Fornecedor Alfa", "Valor do ICMS difere do SFT", { selo: "Alta", tom: "vermelho" }, { selo: "Em análise", tom: "azul" }],
      ["NF 000.146 · série 1", "0101", "Fornecedor Beta", "NCM divergente do cadastro", { selo: "Média", tom: "laranja" }, { selo: "Pendente", tom: "cinza" }],
      ["NF 000.201 · série 2", "0102", "Fornecedor Gama", "Sem divergências", { selo: "Nenhuma", tom: "verde" }, { selo: "Aprovada", tom: "verde" }],
      ["NF 000.202 · série 2", "0102", "Fornecedor Delta", "CFOP incompatível com o produto", { selo: "Média", tom: "laranja" }, { selo: "Pendente", tom: "cinza" }],
    ],
  },
  documentos: {
    colunas: ["Número", "Emitente", "Valor", "Origem", "Data"],
    linhas: [
      ["000.145", "Fornecedor Alfa", "R$ 12.480,00", { selo: "SEFAZ", tom: "azul" }, "12/08/2026"],
      ["000.146", "Fornecedor Beta", "R$ 3.205,90", { selo: "Upload", tom: "cinza" }, "12/08/2026"],
      ["000.201", "Fornecedor Gama", "R$ 58.900,00", { selo: "SEFAZ", tom: "azul" }, "11/08/2026"],
      ["000.202", "Fornecedor Delta", "R$ 940,00", { selo: "Protheus", tom: "verde" }, "10/08/2026"],
    ],
  },
  catalogo: {
    colunas: ["Código", "Produto", "NCM", "CFOP", "Situação"],
    linhas: [
      ["PRD-0001", "Produto de exemplo A", "2710.12.51", "5.102", { selo: "Validado", tom: "verde" }],
      ["PRD-0002", "Produto de exemplo B", "3403.19.90", "5.102", { selo: "Em análise de NCM", tom: "azul" }],
      ["PRD-0003", "Produto de exemplo C", "8421.23.00", "5.405", { selo: "Divergente", tom: "vermelho" }],
    ],
  },
  obrigacoes: {
    colunas: ["Obrigação", "Competência", "Prazo", "Responsável", "Situação"],
    linhas: [
      ["EFD ICMS/IPI", "07/2026", "20/08/2026", "Equipe Fiscal", { selo: "Em andamento", tom: "azul" }],
      ["EFD Contribuições", "07/2026", "10/08/2026", "Equipe Fiscal", { selo: "Entregue", tom: "verde" }],
      ["DCTF", "06/2026", "15/08/2026", "Analista Fiscal", { selo: "Atrasada", tom: "vermelho" }],
    ],
  },
};

export const certidoes = [
  { nome: "CND Federal", validade: "Vence em 62 dias", situacao: "Regular", tom: "verde" as TomFiscal },
  { nome: "CRF · FGTS", validade: "Vence em 9 dias", situacao: "Atenção", tom: "laranja" as TomFiscal },
  { nome: "CND Trabalhista", validade: "Vence em 120 dias", situacao: "Regular", tom: "verde" as TomFiscal },
  { nome: "CND Estadual", validade: "Vencida há 3 dias", situacao: "Irregular", tom: "vermelho" as TomFiscal },
];

export const tanques = [
  { nome: "Tanque 01 · Diesel S10", nivel: 72, litros: "21.600 L" },
  { nome: "Tanque 02 · Gasolina comum", nivel: 38, litros: "11.400 L" },
  { nome: "Tanque 03 · Etanol", nivel: 91, litros: "27.300 L" },
];

export const colunasKanban = [
  { titulo: "Em aberto", cartoes: [
    { codigo: "ATV-2026-000201", titulo: "Atividade operacional da fila de entrada #002", filial: "0101 · FILIAL EXEMPLO A", prazo: "11/08/2026", selo: "Sem responsável", tom: "laranja" as TomFiscal },
    { codigo: "ATV-2026-000202", titulo: "Atividade operacional da fila de entrada #003", filial: "0101 · FILIAL EXEMPLO A", prazo: "12/08/2026", selo: "Sem responsável", tom: "laranja" as TomFiscal },
  ] },
  { titulo: "Em andamento", cartoes: [
    { codigo: "ATV-2026-000101", titulo: "Apuração de ICMS do período 07/2026 com validação urgente", filial: "0102 · FILIAL EXEMPLO B", prazo: "Atrasada", selo: "Crítica", tom: "vermelho" as TomFiscal },
  ] },
  { titulo: "Aguardando", cartoes: [
    { codigo: "ATV-2026-000102", titulo: "Revisão das retenções de ISS da filial matriz", filial: "0103 · FILIAL EXEMPLO C", prazo: "10/08/2026", selo: "Alta", tom: "laranja" as TomFiscal },
  ] },
];

export const cadastrosFiscal = [
  { titulo: "Grupos e Filiais", texto: "Estrutura organizacional do ambiente." },
  { titulo: "Usuários e acessos", texto: "Papéis, permissões e escopos." },
  { titulo: "Certificados digitais", texto: "Certificados A1 por escopo e finalidade." },
  { titulo: "Sincronização SEFAZ", texto: "Distribuição DF-e por ultNSU, certificado e filial." },
  { titulo: "Cadastros Protheus", texto: "Importar e consultar SB1 e CFOP." },
  { titulo: "Regras do confronto", texto: "Tolerância por filial e regra produto × CFOP." },
];
