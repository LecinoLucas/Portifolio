import type { Perfil } from "@/types";

export const perfil: Perfil = {
  nome: "Lecino Lucas",

  /** Título do Início. */
  destaque: "Analista de Sistemas ERP e Integrações Corporativas",

  /** Especialidades, logo abaixo do título. */
  titulo: "Do suporte N1/N2 ao ERP · TOTVS Protheus · SQL · Integração Bancária",

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
    "Mais de 4 anos em TI, do suporte técnico N1/N2 à implantação e aos sistemas corporativos. Atuo no ERP TOTVS Protheus (faturamento, financeiro, GPE, livros fiscais e eSocial, nos chamados que atendo), investigo incidentes com SQL até a causa raiz e integro bancos por VAN, API de extrato e mTLS. Também desenvolvo sistemas e automações com IA, alguns já em produção. Busco vagas de Analista de Sistemas ou de Suporte Especializado (N1/N2) que integra sistemas.",
    "Minha base é a análise de sistemas e as regras de negócio, no ERP TOTVS Protheus e em processos financeiros, fiscais e operacionais. Nos meus projetos construo APIs, bancos de dados e as interfaces que os usam, com testes.",
    "Mais de 4 anos em TI, formado em Análise e Desenvolvimento de Sistemas pela PUC Goiás. Busco oportunidades como Analista de Sistemas ou Suporte Especializado que integra sistemas.",
  ],

  localizacao: "Goiânia · GO",
  disponibilidade: "Disponível para novas oportunidades",
};
