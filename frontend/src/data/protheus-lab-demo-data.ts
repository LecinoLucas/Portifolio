/**
 * Dados fictícios e realistas para o Laboratório Protheus & Processos Corporativos
 * Conferência de Caixa, Compras com NF-e/XML e Impactos da Reforma Tributária.
 */

export interface ItemConferenciaCaixa {
  formaPagamento: string;
  tipo: "dinheiro" | "cartao_credito" | "cartao_debito" | "pix" | "faturado_convenio";
  valorSistema: number;
  valorContado: number;
  diferenca: number;
  status: "exato" | "sobra" | "falta";
}

export interface FechamentoCaixaTurno {
  turno: string;
  caixaId: string;
  operador: string;
  suprimentoInicial: number;
  totalSangrias: number;
  itens: ItemConferenciaCaixa[];
  totalVendasSistema: number;
  saldoGavetaEsperado: number;
  saldoGavetaContado: number;
  diferencaFinal: number;
  statusFechamento: "conferido_com_sucesso" | "divergencia_pendente";
  codigoLancamentoContabil?: string;
}

export interface ItemNotaFiscal {
  numeroItem: number;
  codigoProdutoNFe: string;
  descricaoNFe: string;
  codigoProdutoProtheus: string;
  descricaoProtheus: string;
  ncm: string;
  cfop: string;
  quantidadeNFe: number;
  quantidadePedido: number;
  valorUnitario: number;
  valorTotal: number;
  statusAmaracao: "amarrado_ok" | "divergencia_qtd" | "produto_novo";
}

export interface NotaFiscalEntrada {
  chaveAcesso: string;
  numero: string;
  serie: string;
  emitente: string;
  cnpjEmitente: string;
  dataEmissao: string;
  valorTotal: number;
  pedidoComprasVinculado: string;
  statusManifesto: "Confirmada na SEFAZ (210200)" | "Ciência da Emissão" | "Pendente";
  statusImportacao: "pronta_para_classificacao" | "divergencia_pedido";
  itens: ItemNotaFiscal[];
}

export interface PilarReformaTributaria {
  id: string;
  tributoAntigo: string;
  novoTributo: string;
  esfera: "Federal" | "Estadual / Municipal" | "Seletivo";
  impactoERP: string;
  desafioTecnico: string;
}

export const FECHAMENTO_CAIXA_INICIAL: FechamentoCaixaTurno = {
  turno: "Turno 02 (14:00 às 22:00)",
  caixaId: "CX-01 (Loja BR-153)",
  operador: "Lucas Silva (Fictício)",
  suprimentoInicial: 500.0,
  totalSangrias: 4500.0,
  totalVendasSistema: 45930.0,
  saldoGavetaEsperado: 1820.0, // Suprimento (500) + Vendas Dinheiro (5820) - Sangrias (4500)
  saldoGavetaContado: 1820.0,
  diferencaFinal: 0.0,
  statusFechamento: "conferido_com_sucesso",
  codigoLancamentoContabil: "CT2-2026-0912-0042",
  itens: [
    {
      formaPagamento: "Dinheiro em Espécie",
      tipo: "dinheiro",
      valorSistema: 5820.0,
      valorContado: 5820.0,
      diferenca: 0.0,
      status: "exato",
    },
    {
      formaPagamento: "Cartão de Crédito (TEF)",
      tipo: "cartao_credito",
      valorSistema: 14350.0,
      valorContado: 14350.0,
      diferenca: 0.0,
      status: "exato",
    },
    {
      formaPagamento: "Cartão de Débito (TEF)",
      tipo: "cartao_debito",
      valorSistema: 8920.0,
      valorContado: 8920.0,
      diferenca: 0.0,
      status: "exato",
    },
    {
      formaPagamento: "PIX Estático / Dinâmico",
      tipo: "pix",
      valorSistema: 6140.0,
      valorContado: 6140.0,
      diferenca: 0.0,
      status: "exato",
    },
    {
      formaPagamento: "Faturado / Convênio Frota",
      tipo: "faturado_convenio",
      valorSistema: 10700.0,
      valorContado: 10700.0,
      diferenca: 0.0,
      status: "exato",
    },
  ],
};

export const NOTA_FISCAL_DEMO: NotaFiscalEntrada = {
  chaveAcesso: "5226 0904 8193 2100 0188 5500 1000 0459 1211 2345 6789",
  numero: "000.045.912",
  serie: "1",
  emitente: "Ativa Lubrificantes e Peças Ltda",
  cnpjEmitente: "04.819.321/0001-88",
  dataEmissao: "12/09/2026",
  valorTotal: 13550.0,
  pedidoComprasVinculado: "PC-2026-0881 (SIGACOM)",
  statusManifesto: "Confirmada na SEFAZ (210200)",
  statusImportacao: "pronta_para_classificacao",
  itens: [
    {
      numeroItem: 1,
      codigoProdutoNFe: "LUB-SINT-5W30-20L",
      descricaoNFe: "OLEO MOTOR SINTETICO 5W30 GL 20L ATIVA",
      codigoProdutoProtheus: "PRD-00412",
      descricaoProtheus: "OLEO SINTETICO 5W30 BOMBONA 20L",
      ncm: "2710.19.32",
      cfop: "5102",
      quantidadeNFe: 50,
      quantidadePedido: 50,
      valorUnitario: 220.0,
      valorTotal: 11000.0,
      statusAmaracao: "amarrado_ok",
    },
    {
      numeroItem: 2,
      codigoProdutoNFe: "FLT-COMB-BLIND-HD",
      descricaoNFe: "FILTRO COMBUSTIVEL DIESEL BLINDADO",
      codigoProdutoProtheus: "PRD-00890",
      descricaoProtheus: "FILTRO COMBUSTIVEL DIESEL CAMINHAO",
      ncm: "8421.23.00",
      cfop: "5102",
      quantidadeNFe: 30,
      quantidadePedido: 30,
      valorUnitario: 85.0,
      valorTotal: 2550.0,
      statusAmaracao: "amarrado_ok",
    },
  ],
};

export const PILARES_REFORMA_TRIBUTARIA: PilarReformaTributaria[] = [
  {
    id: "reforma-1",
    tributoAntigo: "PIS e COFINS (Cumulativo e Não-Cumulativo)",
    novoTributo: "CBS (Contribuição sobre Bens e Serviços)",
    esfera: "Federal",
    impactoERP:
      "Substituição das regras de crédito presumido e alíquotas monofásicas por base ampla de cálculo e crédito financeiro integral.",
    desafioTecnico:
      "Ajuste nas regras de TES (Tipos de Entrada e Saída), layout do SPED Fiscal e campos de tributos da NF-e 5.0.",
  },
  {
    id: "reforma-2",
    tributoAntigo: "ICMS (Estadual) e ISS (Municipal)",
    novoTributo: "IBS (Imposto sobre Bens e Serviços)",
    esfera: "Estadual / Municipal",
    impactoERP:
      "Fim da guerra fiscal e do diferencial de alíquota (DIFAL) com tributação no destino da mercadoria ou serviço.",
    desafioTecnico:
      "Adequação das tabelas de alíquotas por município de destino e reformulação da parametrização fiscal no Protheus.",
  },
  {
    id: "reforma-3",
    tributoAntigo: "Retenção na fonte tradicional (IRRF, PIS, COFINS, CSLL)",
    novoTributo: "Split Payment Bancário Automatizado",
    esfera: "Federal",
    impactoERP:
      "O sistema bancário retém a fatia de impostos no momento da liquidação financeira do pagamento (via DDA/PIX/Boleto).",
    desafioTecnico:
      "A conciliação bancária passa a receber o valor líquido do título automaticamente deduzido de IBS/CBS, exigindo baixa com baixa de tributo em tempo real.",
  },
];
