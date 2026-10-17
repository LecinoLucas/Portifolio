import type { Perfil } from "@/types";

export const perfil: Perfil = {
  nome: "Lecino Lucas",

  /** Título do Início. */
  destaque: "Desenvolvedor Backend e Analista de Sistemas",

  /** Especialidades, logo abaixo do título. */
  titulo: "Node.js · Integrações Empresariais · Automação e IA",

  /** Frase de apoio, logo abaixo das especialidades. */
  frase: "Entendo a regra de negócio. Integro sistemas.",

  /** Trajetória em evidências concretas (nada aqui é só nome de ferramenta). */
  evidencias: [
    {
      titulo: "Do suporte ao ERP",
      texto:
        "Suporte técnico N1/N2 e implantação de sistemas. No TOTVS Protheus, parametrização de CNAB, DDA e boletos e investigação de incidentes com SQL.",
      tags: ["Suporte N1/N2", "Protheus", "SQL"],
    },
    {
      titulo: "Integrações empresariais",
      texto:
        "Bancos via VAN e API de extrato, certificados com mTLS renovados sozinhos em 53 filiais e uma ponte de admissão entre o RH e o Protheus, em homologação.",
      tags: ["CNAB", "mTLS", "ExecAuto"],
    },
    {
      titulo: "Backend em produção",
      texto:
        "Portal de Engenharia com mais de 500 usuários e ImportNFe em uso por uma distribuidora, com testes unitários, de ponta a ponta, de carga e de mutação.",
      tags: ["Node.js", "PostgreSQL", "Prisma"],
    },
    {
      titulo: "IA e automação",
      texto:
        "Portal de RH com análise de currículos por IA em workers assíncronos e um assistente comercial de WhatsApp com agentes de IA, em desenvolvimento.",
      tags: ["Python", "Celery", "LangChain"],
    },
  ],

  /** Apresentação do Início: objetiva, uma ideia por parágrafo. */
  apresentacao: [
    "Comecei no suporte técnico N1/N2, evoluí para análise de sistemas e desenvolvimento e hoje construo soluções backend, integrações empresariais, automações e aplicações com IA.",
    "Minha base é a análise de sistemas e as regras de negócio, no ERP TOTVS Protheus e em processos financeiros, fiscais e operacionais. Desenvolvo backends, APIs e sistemas de gestão, com testes e entrega em produção.",
    "Mais de 4 anos em TI, formado em Análise e Desenvolvimento de Sistemas pela PUC Goiás. Busco oportunidades como Desenvolvedor Backend, Analista de Sistemas ou Suporte Especializado que integra sistemas.",
  ],

  localizacao: "Goiânia · GO",
  disponibilidade: "Disponível para novas oportunidades",
};
