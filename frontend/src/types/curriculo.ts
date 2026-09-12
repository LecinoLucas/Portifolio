/** Níveis de conhecimento e atuação factual estritos */
export type NivelConhecimento =
  | "experiencia_pratica"
  | "participacao"
  | "conhecimento_inicial";

export interface ItemCompetenciaFactual {
  nome: string;
  nivel: NivelConhecimento;
  evidencia: string;
  moduloOuArea?: string;
}

export type DesafioAtuacaoId = "protheus" | "fiscal" | "integracoes" | "desenvolvimento";

export interface DesafioAtuacao {
  id: DesafioAtuacaoId;
  rotuloCurto: string;
  tituloDesafio: string;
  perguntaOrientadora: string;
  resumoAbordagem: string;
  competencias: ItemCompetenciaFactual[];
  destaquePratico?: {
    titulo: string;
    subtitulo: string;
    descricao: string;
    pontosChave: string[];
    notaSegurancaOuAviso?: string;
  };
}

export interface ExperienciaTrajetoria {
  id: string;
  empresa: string;
  cargo: string;
  periodo?: string; // Opcional para receber datas confirmadas posteriormente
  resumoAtuacao: string;
  atividades: string[];
  competenciasAplicadas: string[];
}

export interface CursoOuCertificacao {
  id: string;
  nome: string;
  instituicao?: string;
  cargaHoraria?: string;
  conclusaoAno?: string;
  linkComprovacao?: string;
}

export interface CurriculoDigitalData {
  perfil: {
    nome: string;
    tituloProfissional: string;
    conceitoPrincipal: string;
    mensagemCentral: string;
    descricaoTrajetoria: string;
    papelDaIA: string;
    localizacao: string;
    email: string;
    telefone: string;
  };
  desafiosAtuacao: Record<DesafioAtuacaoId, DesafioAtuacao>;
  trajetoria: ExperienciaTrajetoria[];
  cursosECertificacoes?: CursoOuCertificacao[];
}
