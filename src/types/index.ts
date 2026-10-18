/** Tipos de domínio do portfólio. Conteúdo real vive em `src/data/*`. */

export interface Perfil {
  nome: string;
  titulo: string;
  destaque: string;
  /** Frase de apoio, logo abaixo do título e da função. */
  frase: string;
  /** Evidências concretas do Início: cada cartão cita o que foi feito e onde. */
  evidencias: { titulo: string; texto: string; tags: string[] }[];
  /** Apresentação do Início, uma ideia por linha. */
  apresentacao: string[];
  localizacao: string;
  disponibilidade: string;
}

export interface Sobre {
  abertura: string;
  /** Pontos fortes, no card de resumo. */
  resumo: string[];
  principios: { titulo: string; frase: string; texto: string }[];
  /** Trajetória em poucas linhas (a versão completa fica em Experiência). */
  caminho: string;
  alemDoTrabalho: string;
  /** Fecho: trabalho em equipe. */
  equipe: string;
}

export interface LinkExterno {
  rotulo: string;
  href: string;
}

export interface DetalheProjeto {
  contexto: string;
  problema: string;
  participacao: string;
  solucao: string;
  arquitetura?: string;
  /** Decisões de engenharia (por quê), só o que o código ou a documentação comprova. */
  decisoes?: string[];
  desafios?: string[];
  resultado: string;
}

export interface Projeto {
  slug: string;
  titulo: string;
  categoria: string;
  resumo: string;
  stack: string[];
  destaque?: boolean;
  /** Situação real do projeto, exibida como selo no card e no painel. */
  situacao?: "producao" | "entregue" | "construido" | "construcao";
  /** Detalhe da situação (ex.: forma de uso). */
  situacaoDetalhe?: string;
  /** Trabalho freelance para cliente real: aparece numa seção própria. */
  freelance?: boolean;
  /** Projeto principal: ganha o card grande no topo da aba. */
  principal?: boolean;
  /** Números em destaque (só dados reais). */
  numeros?: { valor: string; rotulo: string }[];
  /** Camadas de teste do projeto, para o painel de detalhe. */
  testes?: { nome: string; para: string }[];
  /** Demonstração interativa com dados fictícios. */
  demo?: "importnfe" | "rh" | "portal" | "fiscal" | "barbearia" | "clinica" | "banking";
  detalhe: DetalheProjeto;
  links?: LinkExterno[];
}

export interface EtapaCarreira {
  id: string;
  /** Rótulos da trilha: completo (telas largas) e curto (celular). */
  trilha: string;
  trilhaCurta: string;
  quando: string;
  /** Duração da etapa, em texto ("2 anos e 4 meses"). */
  duracao: string;
  /** Meses exatos (só quando as datas são conhecidas); entra na soma de TI. */
  meses?: number;
  /** Conta como experiência em TI (Pioneira, de vendas, não conta). */
  ti?: boolean;
  cargo: string;
  organizacao: string;
  resumo: string;
  /** Somente números reais, informados pelo autor (pode ficar vazio). */
  numeros: { valor: string; rotulo: string }[];
  destaques: string[];
  ferramentas: string[];
  /** Síntese do que se levou da etapa. NÃO é exibida até o autor aprovar cada frase. */
  levei?: string;
  /** Título do bloco de sistemas (padrão: "sistemas que construí"). */
  tituloSistemas?: string;
  /** Sistemas construídos na etapa. */
  sistemas?: { titulo: string; situacao: string; texto: string }[];
}

export interface Formacao {
  curso: string;
  instituicao: string;
  periodo: string;
  status: string;
}

export interface TecnologiaDiaADia {
  nome: string;
  nota: string;
}

/** Como a competência foi usada. Nada entra como uso profissional só por ser conhecido. */
export type EstadoCompetencia = "profissional" | "entregue" | "desenvolvimento" | "estudo";

export interface Competencia {
  nome: string;
  estado: EstadoCompetencia;
  /** Projetos ou contextos onde foi usada. Competência em estudo não tem projeto. */
  onde?: string;
  /** true quando o código dos repositórios lidos comprova; false quando é declarado pelo autor. */
  comprovada: boolean;
}

export interface GrupoTecnologias {
  titulo: string;
  itens: Competencia[];
}

/** Algo que já entreguei em sistema real, em destaque no topo de Tecnologias. */
export interface EntregaReal {
  titulo: string;
  texto: string;
  estado: EstadoCompetencia;
  /** Onde foi entregue (empresa ou projeto). */
  onde: string;
  tags: string[];
}

export interface OrquestracaoIA {
  titulo: string;
  texto: string;
  itens: { nome: string; texto: string }[];
}

export interface Tecnologias {
  abertura: string;
  /** O que já foi entregue em sistema real: a primeira coisa que o leitor vê. */
  entregas: EntregaReal[];
  /** Como construo com IA: orquestração de LLMs, skills, MCP e CI. */
  orquestracao: OrquestracaoIA;
  grupos: GrupoTecnologias[];
  /** Conhecimentos aplicados em projetos (não são ferramentas). */
  aplicados: Competencia[];
}

export interface Principio {
  titulo: string;
  descricao: string;
}

/** Exemplo de investigação da rotina (não é um incidente único). */
export interface CasoReal {
  titulo: string;
  contexto: string[];
  problema: { texto: string; perguntas: string[] };
  investigacao: { texto: string[]; tabelas: { nome: string; descricao: string }[]; objetivo: string };
  raciocinio: string;
  riscos: { texto: string; itens: string[] };
  /** O que se concluiu e aprendeu; não é um desfecho técnico do incidente. */
  resultado: string;
  aprendizado: string[];
  competencias: string[];
}

export interface Investigacao {
  intro: string;
  tabelas: { nome: string; descricao: string }[];
  frentes: { titulo: string; descricao: string }[];
  /** Exemplo de como uma investigação da rotina é conduzida. */
  exemplo: CasoReal;
}
