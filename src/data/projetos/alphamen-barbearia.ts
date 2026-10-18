import type { Projeto } from "@/types";

/**
 * Fonte: repositórios Alphamen-barbearia/backend e Alphamen-barbearia/Frontend (branch dev),
 * lidos em 2026-10. Só entra o que o código comprova. A situação (em uso) é informada pelo autor.
 */
export const alphamenBarbearia: Projeto = {
  slug: "alphamen-barbearia",
  titulo: "Alphamen Barbearia",
  categoria: "Sistema de gestão · Freelance",
  freelance: true,
  destaque: true,
  situacao: "producao",
  situacaoDetalhe: "Freelance em uso real pela barbearia.",
  demo: "barbearia",
  resumo:
    "Sistema de gestão completo para barbearia: agenda sem conflitos, atendimentos, financeiro, estoque, portal do cliente, lembretes por WhatsApp e sincronização com o Google Agenda.",
  stack: [
    "Node.js",
    "Express",
    "Prisma",
    "PostgreSQL",
    "React",
    "Vite",
    "Tailwind CSS",
    "Socket.IO",
    "Zod",
    "JWT",
    "AWS S3",
    "WhatsApp",
    "Google Agenda",
  ],
  detalhe: {
    contexto:
      "Freelance de um sistema de gestão para uma barbearia: agenda dos profissionais, atendimentos, financeiro e relacionamento com os clientes, hoje usado no dia a dia do negócio.",
    problema:
      "Organizar agenda, atendimentos, caixa, contas e estoque num só sistema, sem horários duplicados e com valores consistentes, e avisar os clientes sem trabalho manual.",
    participacao: "Desenvolvimento do backend, do frontend, das regras de negócio e dos testes.",
    solucao:
      "API com mais de 40 módulos por domínio: agenda com bloqueios pontuais e recorrentes, atendimentos com fotos, caixa, contas a pagar e a receber, estoque, pacotes, formas de pagamento, comissões por profissional, portal do cliente com login próprio, lembretes por WhatsApp, sincronização com o Google Agenda, notificações em tempo real, auditoria e permissões por papel. O frontend tem agenda com arrastar e soltar, painel financeiro, relatórios e configurações.",
    arquitetura:
      "Backend em Node.js com Express e Prisma sobre PostgreSQL (cerca de 60 modelos e 50 migrations), organizado em módulos por domínio. Validação com Zod, autenticação JWT com cookies e segredos separados para acesso e renovação, WebSocket com Socket.IO, imagens em S3 com URLs assinadas e PDFs gerados no servidor. O WhatsApp usa a biblioteca Baileys atrás de um adaptador, com sessão cifrada no banco e fila persistente. O frontend é uma SPA em React 19 com Vite e Tailwind, e o portal do cliente é uma área separada.",
    decisoes: [
      "Datas guardadas em UTC e convertidas do horário comercial (America/Sao_Paulo) com luxon, com testes que cobrem a diferença de fuso.",
      "Conflito de agenda tratado no serviço: a sobreposição parcial de atendimentos e de bloqueios recorrentes é recusada.",
      "Criação financeira idempotente e gravada em transações, para não duplicar nem ficar pela metade se algo falhar.",
      "WhatsApp atrás de um adaptador, com a biblioteca isolada e a sessão guardada cifrada no PostgreSQL, para poder trocar pela API oficial sem mexer nas regras.",
      "Lembretes com chave de idempotência e estados (pendente, processando, enviado, falhou), processados por um job, sem fila externa.",
      "Permissões por papel (administrador, profissional e cliente) conferidas no backend.",
    ],
    desafios: [
      "Converter o horário comercial para UTC sem errar a hora em nenhuma data.",
      "Recusar horários que se sobrepõem, inclusive parcialmente, e bloqueios recorrentes.",
      "Manter pagamentos e atendimentos consistentes quando uma operação falha no meio.",
      "Reenviar lembretes sem duplicar a mensagem e lidar com as limitações de uma conexão não oficial do WhatsApp.",
    ],
    resultado:
      "Em uso real pela barbearia. O backend tem cerca de 160 arquivos de teste e o frontend, cerca de 130, além de testes de ponta a ponta com Playwright e testes de mutação com Stryker nos módulos financeiros.",
  },
};
