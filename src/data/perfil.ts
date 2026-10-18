import type { Perfil } from "@/types";

export const perfil: Perfil = {
  nome: "Lecino Lucas",

  /** Título do Início. */
  destaque: "Analista de Sistemas ERP e Integrações Corporativas",

  /** Especialidades, logo abaixo do título. */
  titulo: "TOTVS Protheus · SQL · Integração Bancária · Evoluindo para o Desenvolvimento",

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
      titulo: "Desenvolvimento de sistemas",
      texto:
        "Construí sistemas com API e interface: Portal de Engenharia com mais de 500 usuários e ImportNFe em uso por uma distribuidora, com testes automatizados.",
      tags: ["Node.js", "React", "PostgreSQL"],
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
    "Comecei no suporte técnico N1/N2 e fui crescendo para a análise e a implantação de sistemas. Trabalho com o ERP TOTVS Protheus, SQL e integrações bancárias e, em paralelo, construo sistemas e automações com IA. Busco vagas de Analista de Sistemas e de Suporte Especializado, e também oportunidades para desenvolver.",
    "Minha base é a análise de sistemas e as regras de negócio, no ERP TOTVS Protheus e em processos financeiros, fiscais e operacionais. Nos meus projetos construo APIs, bancos de dados e as interfaces que os usam, com testes.",
    "Mais de 4 anos em TI, formado em Análise e Desenvolvimento de Sistemas pela PUC Goiás. Busco oportunidades como Analista de Sistemas ou Suporte Especializado que integra sistemas.",
  ],

  localizacao: "Goiânia · GO",
  disponibilidade: "Disponível para novas oportunidades",
};
