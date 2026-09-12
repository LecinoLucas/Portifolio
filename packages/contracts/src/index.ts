/**
 * @portfolio/contracts — Contratos canônicos de comunicação e domínio LES v2.2.0
 */

// ==========================================
// 1. Contrato Canônico de Resposta e Erro LES
// ==========================================

export interface RespostaErroCanonica {
  sucesso: false;
  codigo: string;
  mensagem: string;
  detalhes?: Array<{ campo: string; erro: string }> | null;
  correlationId: string;
}

export interface RespostaSucessoCanonica<T> {
  sucesso: true;
  dados: T;
  mensagem?: string;
  meta?: {
    total?: number;
    pagina?: number;
    limite?: number;
  };
}

export type RespostaCanonica<T> = RespostaSucessoCanonica<T> | RespostaErroCanonica;

// ==========================================
// 2. Contratos de Contato
// ==========================================

export interface CriarContatoDTO {
  nome: string;
  email: string;
  assunto?: string;
  mensagem: string;
  /** Campo oculto anti-spam (Honeypot). Se preenchido, a requisição é descartada como bot. */
  honeypot?: string;
}

export interface ContatoRegistrado {
  id: string;
  nome: string;
  email: string;
  assunto: string;
  mensagem: string;
  criadoEm: string;
}

// ==========================================
// 3. Contratos de Projetos & Estudos de Caso
// ==========================================

export interface DetalheProjetoDTO {
  contexto: string;
  problema: string;
  participacao: string;
  solucao: string;
  arquitetura: string;
  desafios: string[];
  resultado: string;
  seguranca?: string;
  usuariosOuEscala?: string;
}

export type FocoPerfil = "analista" | "fullstack" | "ambos";

export interface ProjetoDTO {
  slug: string;
  titulo: string;
  categoria: string;
  focoPerfil: FocoPerfil;
  destaque?: boolean;
  resumo: string;
  stack: string[];
  detalhe: DetalheProjetoDTO;
  links?: Array<{ rotulo: string; href: string }>;
}

// ==========================================
// 4. Contratos de Perfil e Posicionamento Dual
// ==========================================

export type ModoPerfil = "analista" | "fullstack";

export interface PerfilDualDTO {
  nome: string;
  posicionamento: string;
  localizacao: string;
  disponibilidade: string;
  perfis: {
    analista: {
      titulo: string;
      subtitulo: string;
      headline: string;
      competenciasChave: string[];
      pontosFortes: string[];
    };
    fullstack: {
      titulo: string;
      subtitulo: string;
      headline: string;
      competenciasChave: string[];
      pontosFortes: string[];
    };
  };
}

// ==========================================
// 5. Health Check
// ==========================================

export interface HealthCheckDTO {
  status: "up" | "down";
  servico: string;
  versao: string;
  timestamp: string;
  uptimeSegundos: number;
  ambiente: string;
}
