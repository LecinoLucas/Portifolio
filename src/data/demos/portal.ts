/** Dados 100% fictícios para a demonstração do Portal de Engenharia. */

export const competencias = ["Jan/26", "Fev/26", "Mar/26", "Abr/26", "Mai/26", "Jun/26"];

/** Consumo (%) do orçamento por macro e competência; null = sem dados. */
export const mapaCalor: { macro: string; valores: (number | null)[] }[] = [
  { macro: "1.0 — Infraestrutura", valores: [null, 12, 28, 46, 71, 88] },
  { macro: "1.0 — Estrutura", valores: [null, null, 9, 34, 52, 97] },
  { macro: "2.0 — Superestrutura", valores: [null, null, null, 21, 58, 104] },
  { macro: "3.0 — Instalações Prediais", valores: [0, 0, 0, 15, 31, 49] },
  { macro: "4.0 — Acabamentos", valores: [null, null, null, null, 6, 18] },
  { macro: "5.0 — Área Externa", valores: [null, null, null, null, null, 2] },
];

export type FaixaConsumo = "vazio" | "normal" | "atencao" | "critico" | "estourado";

export function faixaDoConsumo(valor: number | null): FaixaConsumo {
  if (valor === null) return "vazio";
  if (valor > 100) return "estourado";
  if (valor >= 95) return "critico";
  if (valor >= 80) return "atencao";
  return "normal";
}

export const indicadoresCotacoes = [
  { valor: "R$ 148.320,40", rotulo: "Economia líquida", destaque: true },
  { valor: "+12,4%", rotulo: "% líquido de economia" },
  { valor: "18", rotulo: "Itens analisados" },
  { valor: "4", rotulo: "Itens sem referência" },
];

export const economiaPorObra = [
  { nome: "Residencial Alfa", valor: 52000 },
  { nome: "Galpão Beta", valor: 41500 },
  { nome: "Unidade Comercial Gama", valor: 28300 },
  { nome: "Reforma Filial Delta", valor: 14800 },
  { nome: "Ampliação do Depósito", valor: 11700 },
];

export const economiaPorFornecedor = [
  { nome: "Fornecedor A", valor: 61200 },
  { nome: "Fornecedor B", valor: 47900 },
  { nome: "Fornecedor C", valor: 39220 },
];

/** Últimos 12 meses (R$ mil): preço de referência x escolhido. */
export const evolucaoMensal = {
  referencia: [210, 230, 225, 260, 280, 270, 300, 310, 295, 330, 340, 355],
  escolhido: [190, 205, 200, 228, 240, 236, 262, 270, 255, 285, 292, 300],
};

export const obraDemo = {
  nome: "Residencial Alfa",
  codigo: "OBR-DEMO-001",
  local: "Cidade Exemplo - UF",
  periodo: "Jan/26 → Nov/26",
  indicadores: [
    { valor: "R$ 980 mil", rotulo: "Orçamento total", apoio: "OBR-DEMO-001" },
    { valor: "R$ 412 mil", rotulo: "Realizado total", apoio: "42% do orçamento · via Medições" },
    { valor: "R$ 38 mil", rotulo: "Desvio acumulado", apoio: "Economia registrada" },
    { valor: "2", rotulo: "Cotações abertas", apoio: "2 em aberto" },
  ],
  /** R$ mil por mês. */
  fluxo: [
    { mes: "Jan", orcado: 90, realizado: 62 },
    { mes: "Fev", orcado: 110, realizado: 95 },
    { mes: "Mar", orcado: 130, realizado: 118 },
    { mes: "Abr", orcado: 150, realizado: 74 },
    { mes: "Mai", orcado: 160, realizado: 63 },
    { mes: "Jun", orcado: 170, realizado: 0 },
  ],
  orcamento: [
    { item: "1.0 Infraestrutura", orcado: "R$ 210 mil", realizado: "R$ 196 mil" },
    { item: "2.0 Superestrutura", orcado: "R$ 320 mil", realizado: "R$ 148 mil" },
    { item: "3.0 Instalações Prediais", orcado: "R$ 190 mil", realizado: "R$ 54 mil" },
    { item: "4.0 Acabamentos", orcado: "R$ 260 mil", realizado: "R$ 14 mil" },
  ],
  cronograma: [
    { etapa: "Fundação", inicio: "Jan/26", fim: "Mar/26", andamento: 100 },
    { etapa: "Estrutura", inicio: "Mar/26", fim: "Jul/26", andamento: 58 },
    { etapa: "Instalações", inicio: "Mai/26", fim: "Set/26", andamento: 24 },
    { etapa: "Acabamentos", inicio: "Ago/26", fim: "Nov/26", andamento: 5 },
  ],
  medicoes: [
    { numero: "Medição 03", periodo: "Mar/26", valor: "R$ 118 mil", situacao: "Aprovada" },
    { numero: "Medição 04", periodo: "Abr/26", valor: "R$ 74 mil", situacao: "Aprovada" },
    { numero: "Medição 05", periodo: "Mai/26", valor: "R$ 63 mil", situacao: "Em análise" },
  ],
  diario: [
    { data: "12/05", texto: "Concretagem da laje do 2º pavimento concluída." },
    { data: "13/05", texto: "Chuva forte: serviços externos paralisados à tarde." },
    { data: "14/05", texto: "Entrega de aço aprovada na conferência." },
  ],
  documentos: ["Projeto estrutural (rev. 3).pdf", "Contrato de empreitada.pdf", "ART de execução.pdf"],
};

export interface PerguntaIA {
  pergunta: string;
  resposta: string;
  destino: TelaPortal;
  rotuloDestino: string;
  fontes: string[];
}

export type TelaPortal = "analise" | "cotacoes" | "obra";

export const perguntasIA: PerguntaIA[] = [
  {
    pergunta: "Onde vejo obras?",
    resposta: "Para isso, acesse a tela \"Detalhe da Obra\".",
    destino: "obra",
    rotuloDestino: "Abrir Detalhe da Obra",
    fontes: ["Guia do módulo Obras", "Mapa de telas do portal"],
  },
  {
    pergunta: "Onde vejo a economia das cotações?",
    resposta: "O resumo fica na tela \"Cotações\", aba Dashboard.",
    destino: "cotacoes",
    rotuloDestino: "Abrir Cotações",
    fontes: ["Guia do módulo Cotações", "Mapa de telas do portal"],
  },
  {
    pergunta: "Onde acompanho o consumo do orçamento?",
    resposta: "Use a tela \"Análise de Obras\": o mapa de calor mostra o consumo por macro e competência.",
    destino: "analise",
    rotuloDestino: "Abrir Análise de Obras",
    fontes: ["Guia de Análise de Obras", "Mapa de telas do portal"],
  },
];
