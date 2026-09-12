/**
 * Dados fictícios e realistas para o Laboratório BankingProtheus
 * Conciliação Bancária, CNAB 240/400, DDA e APIs Itaú mTLS.
 */

export interface TituloProtheus {
  id: string;
  codigoTitulo: string;
  parcela: string;
  fornecedor: string;
  cnpjCpf: string;
  vencimento: string;
  valorOriginal: number;
  categoria: string;
  linhaDigitavel?: string;
  status: "pendente" | "conciliado" | "divergente";
  motivoDivergencia?: string;
}

export interface LancamentoExtrato {
  id: string;
  data: string;
  documento: string;
  descricao: string;
  valor: number; // Negativo para saída/pagamento
  tipo: "debito" | "credito";
  tituloVinculadoId?: string;
  statusConciliacao: "pendente" | "conciliado_exato" | "divergencia_valor" | "orfa_sem_titulo";
  valorDivergencia?: number;
  justificativa?: string;
}

export interface BoletoDDA {
  id: string;
  beneficiario: string;
  cnpjBeneficiario: string;
  vencimento: string;
  valor: number;
  codigoBarras: string;
  tituloProtheusVinculado?: string;
  status: "autorizado" | "pendente_aprovacao" | "sem_pedido";
  dataCaptura: string;
}

export interface ContaBancaria {
  id: string;
  banco: string;
  codigoBanco: string;
  agencia: string;
  conta: string;
  saldoAtual: number;
  tipoConexao: "API_MTLS" | "VAN_CNAB";
  certificadoStatus: "Valido (expira em 280 dias)" | "Alerta";
}

export const CONTAS_BANCARIAS: ContaBancaria[] = [
  {
    id: "itau-01",
    banco: "Itaú Unibanco",
    codigoBanco: "341",
    agencia: "0452",
    conta: "78912-3",
    saldoAtual: 342850.0,
    tipoConexao: "API_MTLS",
    certificadoStatus: "Valido (expira em 280 dias)",
  },
  {
    id: "santander-02",
    banco: "Banco Santander",
    codigoBanco: "033",
    agencia: "1204",
    conta: "130048-9",
    saldoAtual: 115420.0,
    tipoConexao: "VAN_CNAB",
    certificadoStatus: "Valido (expira em 280 dias)",
  },
  {
    id: "sicoob-03",
    banco: "Sicoob Cooperativa",
    codigoBanco: "756",
    agencia: "4321",
    conta: "55421-0",
    saldoAtual: 89150.0,
    tipoConexao: "API_MTLS",
    certificadoStatus: "Valido (expira em 280 dias)",
  },
];

export const TITULOS_PROTHEUS_INICIAIS: TituloProtheus[] = [
  {
    id: "tit-1",
    codigoTitulo: "TIT-08912",
    parcela: "01/01",
    fornecedor: "Ativa Lubrificantes e Peças Ltda",
    cnpjCpf: "04.819.321/0001-88",
    vencimento: "12/09/2026",
    valorOriginal: 14850.0,
    categoria: "Peças e Lubrificantes",
    linhaDigitavel: "34191.79001 01043.510047 91020.150008 5 91120001485000",
    status: "pendente",
  },
  {
    id: "tit-2",
    codigoTitulo: "TIT-08913",
    parcela: "01/02",
    fornecedor: "Transportadora Rápido Centro-Oeste",
    cnpjCpf: "12.445.109/0001-44",
    vencimento: "12/09/2026",
    valorOriginal: 8420.0,
    categoria: "Frete e Logística (TMS)",
    linhaDigitavel: "34191.79001 01043.510047 91020.150009 3 91120000842000",
    status: "pendente",
  },
  {
    id: "tit-3",
    codigoTitulo: "TIT-08914",
    parcela: "01/01",
    fornecedor: "TechPrint Suprimentos Corporativos",
    cnpjCpf: "08.112.980/0001-12",
    vencimento: "11/09/2026",
    valorOriginal: 1250.0,
    categoria: "Material de Escritório",
    linhaDigitavel: "34191.79001 01043.510047 91020.150010 1 91120000125000",
    status: "pendente",
  },
  {
    id: "tit-4",
    codigoTitulo: "TIT-08915",
    parcela: "09/12",
    fornecedor: "Telecomunicações do Brasil S.A.",
    cnpjCpf: "33.000.118/0001-79",
    vencimento: "10/09/2026",
    valorOriginal: 3840.5,
    categoria: "Conectividade & Dados",
    linhaDigitavel: "34191.79001 01043.510047 91020.150011 9 91120000384050",
    status: "pendente",
  },
  {
    id: "tit-5",
    codigoTitulo: "TIT-08916",
    parcela: "01/01",
    fornecedor: "Enel Distribuição Goiás",
    cnpjCpf: "01.543.032/0001-04",
    vencimento: "15/09/2026",
    valorOriginal: 12930.0,
    categoria: "Energia Elétrica",
    linhaDigitavel: "84670.00000 12930.000000 00000.000000 1 00000000000000",
    status: "pendente",
  },
];

export const LANCAMENTOS_EXTRATO_INICIAIS: LancamentoExtrato[] = [
  {
    id: "ext-1",
    data: "12/09/2026",
    documento: "104351",
    descricao: "PAGTO ELETRÔNICO FORNECEDOR - ATIVA LUBRIF",
    valor: -14850.0,
    tipo: "debito",
    tituloVinculadoId: "tit-1",
    statusConciliacao: "pendente",
  },
  {
    id: "ext-2",
    data: "12/09/2026",
    documento: "104352",
    descricao: "LIQ BOLETO ITAÚ - TRANS RAPIDO CO",
    valor: -8420.0,
    tipo: "debito",
    tituloVinculadoId: "tit-2",
    statusConciliacao: "pendente",
  },
  {
    id: "ext-3",
    data: "12/09/2026",
    documento: "104353",
    descricao: "PAGTO TITULO INTERNET - TECHPRINT SUPRIM",
    valor: -1278.5, // R$ 28,50 a mais de juros/multa
    tipo: "debito",
    tituloVinculadoId: "tit-3",
    statusConciliacao: "pendente",
    valorDivergencia: 28.5,
    justificativa: "Divergência detectada: acréscimo de R$ 28,50 de juros/multa não provisionados no Protheus.",
  },
  {
    id: "ext-4",
    data: "12/09/2026",
    documento: "994012",
    descricao: "TARIFA DE COBRANÇA BANCÁRIA - CONTRATO 8892",
    valor: -48.0,
    tipo: "debito",
    statusConciliacao: "orfa_sem_titulo",
    justificativa: "Débito automático de tarifa bancária sem título correspondente no contas a pagar do Protheus.",
  },
];

export const BOLETOS_DDA_INICIAIS: BoletoDDA[] = [
  {
    id: "dda-1",
    beneficiario: "Enel Distribuição Goiás",
    cnpjBeneficiario: "01.543.032/0001-04",
    vencimento: "15/09/2026",
    valor: 12930.0,
    codigoBarras: "84670000001293000000000000000000000000000000",
    tituloProtheusVinculado: "TIT-08916 (Enel)",
    status: "pendente_aprovacao",
    dataCaptura: "11/09/2026 08:30",
  },
  {
    id: "dda-2",
    beneficiario: "Serviços Cloud AWS Brasil Tecnologia",
    cnpjBeneficiario: "23.412.890/0001-99",
    vencimento: "18/09/2026",
    valor: 6450.0,
    codigoBarras: "3419179001010435100479102015001279118000645000",
    status: "sem_pedido",
    dataCaptura: "12/09/2026 09:15",
  },
  {
    id: "dda-3",
    beneficiario: "Posto e Conveniência Rota 153 Ltda",
    cnpjBeneficiario: "08.922.311/0001-05",
    vencimento: "20/09/2026",
    valor: 2180.4,
    codigoBarras: "2379179001010435100479102015001359120000218040",
    tituloProtheusVinculado: "TIT-08920 (Combustível Frotas)",
    status: "autorizado",
    dataCaptura: "10/09/2026 14:20",
  },
];
