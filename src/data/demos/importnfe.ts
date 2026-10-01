/** Dados 100% fictícios para a demonstração do ImportNFe. */

export type OrigemSugestao = "Normalizador automático" | "Alias da empresa" | "Alias global";

export interface ItemNota {
  id: number;
  original: string;
  sugestao: string;
  origem: OrigemSugestao;
  quantidade: number;
  unidade: string;
  valorUnitario: number;
}

export const itensNota: ItemNota[] = [
  { id: 1, original: "DETERG LIQ BRILHAMAX NEUTRO 500ML", sugestao: "DETERGENTE NEUTRO 500 ML", origem: "Normalizador automático", quantidade: 24, unidade: "UN", valorUnitario: 2.1 },
  { id: 2, original: "AGUA SANIT CLARALUZ 12X1 LT", sugestao: "ÁGUA SANITÁRIA 12X1 LT", origem: "Normalizador automático", quantidade: 10, unidade: "FD", valorUnitario: 14.9 },
  { id: 3, original: "PAP.HIG. ROLAO BRANCO FOLHA DUPLA 8X300M MARCAX", sugestao: "PAPEL HIGIÊNICO ROLÃO FOLHA DUPLA", origem: "Alias da empresa", quantidade: 6, unidade: "FD", valorUnitario: 61.5 },
  { id: 4, original: "LIMP MULTIUSO FLORAL 500 ML MARCAY", sugestao: "MULTIUSO FLORAL 500 ML", origem: "Alias global", quantidade: 36, unidade: "UN", valorUnitario: 3.45 },
  { id: 5, original: "FLANELA LARANJA 30CMX40CM UND MARCAZ", sugestao: "FLANELA LARANJA 30X40CM", origem: "Normalizador automático", quantidade: 50, unidade: "UN", valorUnitario: 1.8 },
];

export interface RegraNormalizacao {
  entrada: string;
  saida: string;
  escopo: "Global" | "Empresa";
}

export const regrasIniciais: RegraNormalizacao[] = [
  { entrada: "PAP.HIG. ROLAO BRANCO FOLHA DUPLA", saida: "PAPEL HIGIÊNICO ROLÃO FOLHA DUPLA", escopo: "Empresa" },
  { entrada: "LIMP MULTIUSO FLORAL", saida: "MULTIUSO FLORAL", escopo: "Global" },
  { entrada: "SAB LIQ ANTIBAC", saida: "SABONETE LÍQUIDO ANTIBACTERIANO", escopo: "Global" },
];

export interface ModeloPlanilha {
  id: string;
  nome: string;
  descricao: string;
  logo: boolean;
}

export const modelosPlanilha: ModeloPlanilha[] = [
  { id: "padrao", nome: "Modelo padrão", descricao: "Cabeçalho simples, sem logo.", logo: false },
  { id: "logo", nome: "Modelo com logo", descricao: "Logo inserida na célula A1.", logo: true },
  { id: "compacto", nome: "Modelo compacto", descricao: "Menos colunas, para conferência rápida.", logo: false },
];

export const contadoresPainel = [
  { rotulo: "Importações", valor: 128 },
  { rotulo: "Pendentes de revisão", valor: 3 },
  { rotulo: "Planilhas geradas", valor: 119 },
  { rotulo: "Modelos ativos", valor: 3 },
];
