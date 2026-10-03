/**
 * Incidentes do "Caça ao incidente" (início). São exemplos ilustrativos do tipo
 * de problema que o dia a dia de suporte e integração apresenta: não são casos
 * reais, não têm dados de clientes e não citam números de ocorrência.
 */
export interface Incidente {
  id: string;
  rotulo: string;
  causaRaiz: string;
  /** Posição do alvo dentro da arena (em %). */
  esquerda: number;
  topo: number;
}

export const incidentes: Incidente[] = [
  {
    id: "cnab",
    rotulo: "CNAB rejeitado",
    causaRaiz: "Parâmetro da conta ou do convênio no Protheus diferente do cadastrado no banco. O retorno traz o código da ocorrência que mostra qual campo divergiu.",
    esquerda: 4,
    topo: 6,
  },
  {
    id: "certificado",
    rotulo: "Certificado vencido",
    causaRaiz: "O certificado digital expirou e a renovação não rodou a tempo, então a conexão mTLS com o banco é recusada. Por isso o BankingProtheus renova sozinho e avisa os vencimentos.",
    esquerda: 28,
    topo: 30,
  },
  {
    id: "duplicado",
    rotulo: "Título duplicado",
    causaRaiz: "A integração gravou o mesmo título duas vezes, sem checar se ele já existia. A correção é uma chave única e uma checagem antes de gravar (idempotência).",
    esquerda: 6,
    topo: 56,
  },
  {
    id: "divergencia",
    rotulo: "Divergência no SE5",
    causaRaiz: "A baixa e o movimento bancário (SE5 e FK5) saíram de sincronia. Um SQL que cruza as duas tabelas mostra exatamente onde o vínculo se perdeu.",
    esquerda: 34,
    topo: 80,
  },
];
