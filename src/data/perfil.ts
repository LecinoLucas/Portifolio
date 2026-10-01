import type { Perfil } from "@/types";

export const perfil: Perfil = {
  nome: "Lecino Lucas",
  titulo: "Analista de Sistemas · Sustentação N2/N3 · SQL · Integrações bancárias",

  headline:
    "Investigo incidentes até a causa raiz em sistemas corporativos, com SQL, TOTVS Protheus e integrações bancárias. Também desenvolvo sistemas reais em produção, o que aproxima usuários, negócio e tecnologia.",

  localizacao: "Goiânia · GO",
  disponibilidade: "Disponível para novas oportunidades",

  bio: [
    {
      rotulo: "Foco",
      texto:
        "Analista de Sistemas formado pela PUC Goiás. Meu foco é investigar problemas: análise de incidentes, troubleshooting e consultas SQL (PostgreSQL e SQL Server) até chegar à causa raiz.",
    },
    {
      rotulo: "ERP e integrações",
      texto:
        "TOTVS Protheus nos processos financeiros, contábeis, fiscais e de compras, e integrações bancárias com APIs REST, CNAB, boletos, DDA, VAN, certificados digitais, OAuth2 e mTLS.",
    },
    {
      rotulo: "Trajetória",
      texto:
        "Comecei em suporte técnico, passei por implantação de sistemas e supervisão de equipe e cheguei à análise de sistemas corporativos. Em paralelo, desenvolvo sistemas reais em produção. Entender a regra de negócio antes de escrever código orienta o meu trabalho.",
    },
  ],

  fatos: [
    { rotulo: "Perfil", valor: "Sustentação N2/N3 · negócio · dados · desenvolvimento" },
    { rotulo: "ERP", valor: "TOTVS Protheus — financeiro, contábil, fiscal, compras" },
    { rotulo: "Dados", valor: "SQL · diagnóstico de inconsistências · modelagem relacional" },
    { rotulo: "Integrações", valor: "APIs REST · CNAB · boletos · DDA · VAN · OAuth2 · mTLS" },
    { rotulo: "Desenvolvimento", valor: "React · TypeScript · Node.js · PostgreSQL · Prisma" },
    { rotulo: "Direção atual", valor: "Engenharia de software + IA aplicada (em evolução)" },
  ],
};
