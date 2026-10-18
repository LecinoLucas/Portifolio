import type { Projeto } from "@/types";

export const bankingprotheus: Projeto = {
  slug: "bankingprotheus",
  titulo: "BankingProtheus",
  categoria: "Integração bancária · Certificados Itaú",
  destaque: true,
  situacao: "producao",
  demo: "banking",
  resumo:
    "Sistema que renova automaticamente os certificados do Itaú (API de extrato e API de boletos) de uma rede de 53 filiais, com job de renovação e painel de vencimento, sobre mTLS.",
  stack: [
    "TypeScript",
    "Node.js",
    "Fastify",
    "PostgreSQL",
    "Zod",
    "React",
    "Tailwind CSS",
    "APIs bancárias",
    "mTLS",
    "Certificados digitais",
    "Protheus",
  ],
  detalhe: {
    contexto:
      "Uma rede de 53 filiais, cada uma com certificados digitais para as APIs do Itaú de extrato e de boletos. Os certificados vencem, e vários vencem em épocas próximas.",
    problema:
      "Renovar os certificados das 53 filiais um por um, de forma manual, chamando a API do banco a cada vez. Um certificado vencido interrompe a integração com o banco daquela filial.",
    participacao:
      "Criei o sistema: o job de renovação automática e o painel de acompanhamento dos certificados.",
    solucao:
      "Um job agendado identifica os certificados próximos do vencimento e os renova automaticamente pela API do Itaú, tanto na API de extrato quanto na de boletos. Um painel mostra quantos dias faltam para cada certificado vencer. A comunicação com o banco usa mTLS.",
    arquitetura:
      "Backend em TypeScript com Fastify e PostgreSQL, dividido em três processos independentes: a API, um worker e um agendador. O worker consome as operações com lease e FOR UPDATE SKIP LOCKED, e o agendador persiste a agenda no banco e roda um planejador diário que materializa as renovações elegíveis (janela padrão de 30 dias), com chave de idempotência. A autenticação com o Itaú é por STS sobre mTLS, e o certificado e a chave ficam cifrados. O isolamento por filial usa RLS no PostgreSQL. O frontend em React mostra visão geral, matriz de prontidão, integrações, certificados, operações, automação e monitoramento.",
    decisoes: [
      "Renovação automática por job agendado, em vez de renovar certificado por certificado de forma manual.",
      "Painel com os dias restantes por filial, para agir antes do vencimento.",
      "Comunicação com o banco por mTLS.",
      "Worker e agendador sem fila externa: o próprio PostgreSQL coordena, com lease e SKIP LOCKED, e vários workers podem rodar em paralelo.",
      "Resultado externo ambíguo de uma renovação vai para atenção e não é reenviado às cegas.",
      "Isolamento por filial com RLS no banco, sem superusuário nem desligar a política.",
    ],
    desafios: [
      "Renovar os certificados das 53 filiais sem intervenção manual.",
      "Comunicação segura com o banco usando mTLS.",
      "Visibilidade: saber quantos dias faltam para cada certificado vencer antes que ele expire.",
    ],
    resultado:
      "O sistema substitui a renovação manual, certificado por certificado, por um processo automático, com um painel para acompanhar os vencimentos.",
  },
};
