import type { Projeto } from "@/types";

export const bankingprotheus: Projeto = {
  slug: "bankingprotheus",
  titulo: "BankingProtheus",
  categoria: "Integração bancária · Certificados Itaú",
  destaque: true,
  situacao: "producao",
  resumo:
    "Sistema que renova automaticamente os certificados do Itaú (API de extrato e API de boletos) de uma rede de 53 filiais, com job de renovação e painel de vencimento, sobre mTLS.",
  stack: ["Node.js", "NestJS", "APIs bancárias", "mTLS", "Certificados digitais", "SQL", "Protheus", "Jobs agendados", "Dashboard"],
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
      "Backend em Node.js com NestJS: job agendado que identifica certificados próximos do vencimento → renovação via API do Itaú sobre mTLS → painel de acompanhamento dos dias para vencer, por filial.",
    decisoes: [
      "Renovação automática por job agendado, em vez de renovar certificado por certificado de forma manual.",
      "Painel com os dias restantes por filial, para agir antes do vencimento.",
      "Comunicação com o banco por mTLS.",
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
