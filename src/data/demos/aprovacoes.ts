/** Dados 100% fictícios para a demonstração das Alçadas de Aprovação do Portal de Engenharia. */

export type SujeitoTipo = "PERFIL" | "USUARIO";
export type EscopoTipo = "GLOBAL" | "GRUPO" | "FILIAL";

export interface Alcada {
  id: string;
  sujeitoTipo: SujeitoTipo;
  /** Id do perfil ou do usuário, conforme `sujeitoTipo`. */
  sujeitoId: string;
  sujeitoRotulo: string;
  escopoTipo: EscopoTipo;
  escopoRotulo: string;
  /** Teto em reais; null = alçada ilimitada (concedida de forma explícita). */
  limite: number | null;
  ativa: boolean;
  vigencia: string;
}

export interface Pessoa {
  id: string;
  nome: string;
  perfil: string;
  filial: string;
  grupo: string;
}

export interface MedicaoAprovacao {
  id: string;
  rotulo: string;
  obra: string;
  valor: number;
  criadaPor: string;
}

export const pessoas: Pessoa[] = [
  { id: "ana", nome: "Ana Souza", perfil: "Engenheiro de obra", filial: "Filial 0101", grupo: "Grupo 01" },
  { id: "bruno", nome: "Bruno Lima", perfil: "Engenheiro de obra", filial: "Filial 0101", grupo: "Grupo 01" },
  { id: "carla", nome: "Carla Mendes", perfil: "Gerente de engenharia", filial: "Filial 0101", grupo: "Grupo 01" },
  { id: "diego", nome: "Diego Rocha", perfil: "Analista de obras", filial: "Filial 0101", grupo: "Grupo 01" },
  { id: "elisa", nome: "Elisa Prado", perfil: "Diretoria", filial: "Filial 0101", grupo: "Grupo 01" },
];

export const alcadas: Alcada[] = [
  { id: "a1", sujeitoTipo: "PERFIL", sujeitoId: "Engenheiro de obra", sujeitoRotulo: "Engenheiro de obra", escopoTipo: "FILIAL", escopoRotulo: "Filial 0101", limite: 50000, ativa: true, vigencia: "01/03/2026 · sem término" },
  { id: "a2", sujeitoTipo: "PERFIL", sujeitoId: "Engenheiro de obra", sujeitoRotulo: "Engenheiro de obra", escopoTipo: "GRUPO", escopoRotulo: "Grupo 01", limite: 20000, ativa: true, vigencia: "01/03/2026 · sem término" },
  { id: "a3", sujeitoTipo: "PERFIL", sujeitoId: "Gerente de engenharia", sujeitoRotulo: "Gerente de engenharia", escopoTipo: "GLOBAL", escopoRotulo: "Toda a organização", limite: 250000, ativa: true, vigencia: "01/03/2026 · sem término" },
  { id: "a4", sujeitoTipo: "USUARIO", sujeitoId: "bruno", sujeitoRotulo: "Bruno Lima", escopoTipo: "FILIAL", escopoRotulo: "Filial 0101", limite: 120000, ativa: true, vigencia: "15/05/2026 · sem término" },
  { id: "a5", sujeitoTipo: "PERFIL", sujeitoId: "Diretoria", sujeitoRotulo: "Diretoria", escopoTipo: "GLOBAL", escopoRotulo: "Toda a organização", limite: null, ativa: true, vigencia: "01/03/2026 · sem término" },
  { id: "a6", sujeitoTipo: "PERFIL", sujeitoId: "Analista de obras", sujeitoRotulo: "Analista de obras", escopoTipo: "FILIAL", escopoRotulo: "Filial 0101", limite: 10000, ativa: false, vigencia: "01/03/2026 · encerrada" },
];

export const medicoesParaAprovar: MedicaoAprovacao[] = [
  { id: "m5", rotulo: "Medição 05", obra: "Residencial Alfa", valor: 63000, criadaPor: "carla" },
  { id: "m6", rotulo: "Medição 06", obra: "Galpão Beta", valor: 180000, criadaPor: "diego" },
  { id: "m7", rotulo: "Medição 07", obra: "Residencial Alfa", valor: 18400, criadaPor: "ana" },
];

export type MotivoDecisao =
  | "PERMITIDA"
  | "SEGREGACAO_DE_FUNCOES"
  | "ALCADA_NAO_ENCONTRADA"
  | "LIMITE_EXCEDIDO";

export interface DecisaoAlcada {
  permitida: boolean;
  motivo: MotivoDecisao;
  alcada: Alcada | null;
  texto: string;
}

const prioridadeSujeito = (a: Alcada) => (a.sujeitoTipo === "USUARIO" ? 2 : 1);
const prioridadeEscopo = (a: Alcada) => (a.escopoTipo === "FILIAL" ? 3 : a.escopoTipo === "GRUPO" ? 2 : 1);

function seAplica(a: Alcada, p: Pessoa): boolean {
  const sujeito = a.sujeitoTipo === "USUARIO" ? a.sujeitoId === p.id : a.sujeitoId === p.perfil;
  const escopo = a.escopoTipo === "GLOBAL" || a.escopoRotulo === (a.escopoTipo === "GRUPO" ? p.grupo : p.filial);
  return a.ativa && sujeito && escopo;
}

export const formatarReais = (v: number) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

/**
 * Mesma regra do backend: segregação de funções, exceção por usuário sobre perfil,
 * escopo mais específico (Filial > Grupo > Global) e limite sobre o valor da medição.
 * Ausência de alçada válida bloqueia, inclusive administradores.
 */
export function decidirAlcada(medicao: MedicaoAprovacao, pessoa: Pessoa, lista: Alcada[] = alcadas): DecisaoAlcada {
  if (medicao.criadaPor === pessoa.id) {
    return { permitida: false, motivo: "SEGREGACAO_DE_FUNCOES", alcada: null, texto: "Quem criou a medição não pode aprová-la." };
  }
  const candidatas = lista.filter((a) => seAplica(a, pessoa));
  if (candidatas.length === 0) {
    return { permitida: false, motivo: "ALCADA_NAO_ENCONTRADA", alcada: null, texto: "Nenhuma alçada ativa para este usuário. Sem alçada, a aprovação é bloqueada." };
  }
  const melhorSujeito = Math.max(...candidatas.map(prioridadeSujeito));
  const porSujeito = candidatas.filter((a) => prioridadeSujeito(a) === melhorSujeito);
  const melhorEscopo = Math.max(...porSujeito.map(prioridadeEscopo));
  const alcada = porSujeito.find((a) => prioridadeEscopo(a) === melhorEscopo) ?? null;
  if (alcada && alcada.limite !== null && medicao.valor > alcada.limite) {
    return { permitida: false, motivo: "LIMITE_EXCEDIDO", alcada, texto: `Valor acima do limite de ${formatarReais(alcada.limite)}. Fica pendente para um aprovador de nível superior.` };
  }
  return { permitida: true, motivo: "PERMITIDA", alcada, texto: alcada?.limite === null ? "Alçada ilimitada concedida de forma explícita." : `Dentro do limite de ${formatarReais(alcada?.limite ?? 0)}.` };
}
