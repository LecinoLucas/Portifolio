import type { Projeto } from "@/types";

/**
 * Fonte: repositório BarbeariaServer (branch dev), lido em 2026-10. Só entra o que o código
 * comprova. NestJS, módulo de WhatsApp e Google Calendar não aparecem nesse código.
 */
export const alphamenBarbearia: Projeto = {
  slug: "alphamen-barbearia",
  titulo: "Alphamen Barbearia",
  categoria: "Sistema de gestão · Projeto freelance",
  destaque: true,
  situacao: "construcao",
  situacaoDetalhe: "Projeto freelance, em fase de entrega.",
  resumo:
    "Sistema de gestão para barbearia: agenda sem conflitos, atendimentos, pagamentos, despesas e portal do cliente, numa API modular.",
  stack: ["Node.js", "Express", "Prisma", "PostgreSQL", "Zod", "JWT", "luxon"],
  detalhe: {
    contexto:
      "Projeto freelance de um sistema de gestão para uma barbearia: agenda dos profissionais, atendimentos, financeiro e relacionamento com os clientes.",
    problema:
      "Organizar agenda, atendimentos, pagamentos e despesas num só sistema, sem horários duplicados e com valores consistentes.",
    participacao: "Desenvolvimento do backend e das regras de negócio.",
    solucao:
      "API com mais de 20 módulos por domínio: agendamentos, bloqueios pontuais e recorrentes, horários dos profissionais, atendimentos, pagamentos, despesas, produtos, clientes, portal do cliente, lembretes e configurações.",
    arquitetura:
      "Node.js com Express e Prisma sobre PostgreSQL, organizado em módulos por domínio (rotas, serviços e repositórios), com validação por Zod e autenticação JWT com segredos separados para acesso e renovação.",
    decisoes: [
      "Datas guardadas em UTC e convertidas do horário comercial (America/Sao_Paulo) com luxon, com testes que cobrem a diferença de fuso.",
      "Conflito de agenda tratado no serviço: a sobreposição parcial de atendimentos e de bloqueios recorrentes é recusada.",
      "Pagamentos e atendimentos gravados em transações do banco, para não ficarem pela metade se algo falhar.",
      "Lembretes com chave de idempotência e estados (pendente, processando, enviado, falhou), processados por um job simples a cada minuto, sem fila externa.",
      "Acesso por papéis: administrador, profissional e cliente.",
    ],
    desafios: [
      "Converter o horário comercial para UTC sem errar a hora em nenhuma data.",
      "Recusar horários que se sobrepõem, inclusive parcialmente, e bloqueios recorrentes.",
      "Manter pagamentos e atendimentos consistentes quando uma operação falha no meio.",
      "Reenviar lembretes sem duplicar a mensagem.",
    ],
    resultado:
      "Em fase de entrega ao cliente. O backend tem 27 arquivos de teste automatizados, incluindo testes de fuso horário e de sobreposição de horários.",
  },
};
