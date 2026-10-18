/** Dados 100% fictícios das telas visuais do Portal de Engenharia (aproximação do layout real). */

export type Tom = "azul" | "verde" | "laranja" | "vinho" | "cinza";

export const dashboardKpis = [
  { rotulo: "Obras ativas", valor: "7", apoio: "2 em planejamento" },
  { rotulo: "Medições pendentes", valor: "12", apoio: "3 acima da alçada" },
  { rotulo: "Cotações abertas", valor: "4", apoio: "R$ 148 mil de economia" },
  { rotulo: "Chamados abertos", valor: "10", apoio: "1 em execução" },
];

export const obrasLista: { nome: string; codigo: string; local: string; status: string; tom: Tom; andamento: number; orcamento: string }[] = [
  { nome: "Residencial Alfa", codigo: "OBR-DEMO-001", local: "Cidade Exemplo - UF", status: "Em andamento", tom: "verde", andamento: 42, orcamento: "R$ 980 mil" },
  { nome: "Galpão Beta", codigo: "OBR-DEMO-002", local: "Cidade Exemplo - UF", status: "Em andamento", tom: "verde", andamento: 67, orcamento: "R$ 1,4 mi" },
  { nome: "Unidade Comercial Gama", codigo: "OBR-DEMO-003", local: "Cidade Exemplo - UF", status: "Planejamento", tom: "azul", andamento: 8, orcamento: "R$ 640 mil" },
  { nome: "Reforma Filial Delta", codigo: "OBR-DEMO-004", local: "Cidade Exemplo - UF", status: "Em andamento", tom: "verde", andamento: 81, orcamento: "R$ 310 mil" },
  { nome: "Ampliação do Depósito", codigo: "OBR-DEMO-005", local: "Cidade Exemplo - UF", status: "Pausada", tom: "laranja", andamento: 30, orcamento: "R$ 520 mil" },
  { nome: "Posto Modelo", codigo: "OBR-DEMO-006", local: "Cidade Exemplo - UF", status: "Concluída", tom: "cinza", andamento: 100, orcamento: "R$ 1,09 mi" },
];

export const atividades = [
  "Medição 05 enviada para aprovação · Residencial Alfa",
  "Cotação “Aço CA-50” recebeu 3 propostas",
  "Chamado de manutenção concluído · Reforma Filial Delta",
  "Documento “ART de execução” anexado · Galpão Beta",
];

export const diariasPlanilhas = [
  { periodo: "Jun/26", obra: "Residencial Alfa", pessoas: 14, total: "R$ 18.620,00", status: "Aprovada", tom: "verde" as Tom },
  { periodo: "Jun/26", obra: "Galpão Beta", pessoas: 22, total: "R$ 31.240,00", status: "Em análise", tom: "laranja" as Tom },
  { periodo: "Mai/26", obra: "Residencial Alfa", pessoas: 13, total: "R$ 17.050,00", status: "Aprovada", tom: "verde" as Tom },
  { periodo: "Mai/26", obra: "Reforma Filial Delta", pessoas: 6, total: "R$ 7.980,00", status: "Rascunho", tom: "cinza" as Tom },
];

export const imoveis = [
  { nome: "Sala Comercial 01", local: "Edifício Exemplo · Filial 0101", situacao: "Locada", tom: "verde" as Tom, contrato: "Vence em 14 meses" },
  { nome: "Sala Comercial 02", local: "Edifício Exemplo · Filial 0101", situacao: "Vaga", tom: "azul" as Tom, contrato: "Sem contrato ativo" },
  { nome: "Galpão Anexo", local: "Zona Industrial · Filial 0102", situacao: "Locada", tom: "verde" as Tom, contrato: "Vence em 3 meses" },
  { nome: "Loja Térrea", local: "Centro · Filial 0103", situacao: "Em reforma", tom: "laranja" as Tom, contrato: "Contrato suspenso" },
];

export const checklists = [
  { nome: "Inspeção de segurança do canteiro", obra: "Residencial Alfa", feitos: 18, total: 20 },
  { nome: "Recebimento de materiais", obra: "Galpão Beta", feitos: 9, total: 12 },
  { nome: "Entrega da unidade", obra: "Posto Modelo", feitos: 24, total: 24 },
  { nome: "Vistoria elétrica", obra: "Reforma Filial Delta", feitos: 4, total: 15 },
];

export const chamadosKpis = [
  { rotulo: "Chamados abertos", valor: "10", tom: "azul" as Tom },
  { rotulo: "Em execução", valor: "1", tom: "laranja" as Tom },
  { rotulo: "Concluídos no mês", valor: "2", tom: "verde" as Tom },
  { rotulo: "Investimento acumulado", valor: "R$ 276 mil", tom: "vinho" as Tom },
];

export const chamados = [
  { codigo: "CH-0142", titulo: "Vazamento na cobertura do galpão", prioridade: "Alta", status: "Em execução", tom: "laranja" as Tom },
  { codigo: "CH-0141", titulo: "Troca de luminárias do corredor", prioridade: "Média", status: "Aberto", tom: "azul" as Tom },
  { codigo: "CH-0139", titulo: "Pintura da fachada lateral", prioridade: "Baixa", status: "Aberto", tom: "azul" as Tom },
  { codigo: "CH-0137", titulo: "Revisão do quadro elétrico", prioridade: "Alta", status: "Concluído", tom: "verde" as Tom },
];

export const documentos = [
  { nome: "Projeto estrutural (rev. 3).pdf", obra: "Residencial Alfa", tipo: "Projeto", data: "12/05/2026" },
  { nome: "Contrato de empreitada.pdf", obra: "Galpão Beta", tipo: "Contrato", data: "03/04/2026" },
  { nome: "ART de execução.pdf", obra: "Galpão Beta", tipo: "ART", data: "28/03/2026" },
  { nome: "Memorial descritivo.docx", obra: "Unidade Comercial Gama", tipo: "Memorial", data: "19/02/2026" },
];

export const cadastros = [
  { titulo: "Grupos", texto: "Empresas ou grupos organizacionais." },
  { titulo: "Filiais", texto: "Locais físicos ou divisões de negócio." },
  { titulo: "Categorias de Produto", texto: "Classificação dos itens de cotação." },
  { titulo: "Unidades de Medida", texto: "Metro, quilo, verba e demais unidades." },
  { titulo: "Fornecedores", texto: "Empresas que enviam propostas." },
  { titulo: "Alçadas de Aprovação", texto: "Quem aprova, até qual valor e escopo." },
];
