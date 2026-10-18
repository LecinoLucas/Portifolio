import type { Projeto } from "@/types";

/**
 * Fonte: repositórios Alphamen-barbearia/clinicaFront e clinicaServer (branch dev), lidos em 2026-10.
 * O backend fica em um submódulo que não foi lido; os detalhes dele vêm da documentação do repositório.
 * A situação (em uso) é informada pelo autor.
 */
export const clinica: Projeto = {
  slug: "clinica",
  titulo: "Sistema de Clínica",
  categoria: "Sistema de gestão · Freelance",
  freelance: true,
  destaque: true,
  situacao: "producao",
  situacaoDetalhe: "Freelance em uso real pela clínica.",
  demo: "clinica",
  resumo:
    "Sistema para clínica de atendimento a crianças: agenda dos profissionais, pacientes e responsáveis, atendimento com prontuário protegido por cofre clínico e gravação de áudio com transcrição.",
  stack: ["TypeScript", "React", "Vite", "Tailwind CSS", "shadcn/ui", "Playwright", "Node.js", "Prisma", "PostgreSQL"],
  detalhe: {
    contexto:
      "Freelance de um sistema para uma clínica que atende crianças: agenda, pacientes e responsáveis, atendimentos e prontuário, com dados clínicos sensíveis.",
    problema:
      "Organizar agenda e atendimentos e guardar o prontuário com segurança, com acesso restrito por profissional e respeito à LGPD, sem depender de papel e planilhas.",
    participacao:
      "Desenvolvimento do sistema, com o novo frontend construído do zero a partir dos contratos reais do backend, e auditorias de segurança, LGPD e desempenho.",
    solucao:
      "Agenda real com disponibilidade e bloqueios, cadastro de pacientes e responsáveis, atendimento com prontuário e notas clínicas, cofre clínico que só libera o conteúdo depois de o profissional confirmar a senha, e gravação de áudio do atendimento com transcrição. O sistema é multi-clínica, com isolamento dos dados por clínica.",
    arquitetura:
      "Frontend novo em React 19 com TypeScript, Vite, Tailwind e shadcn/ui, organizado em módulos por domínio (agenda, pacientes, profissionais, atendimentos, prontuário, configurações e autenticação). A API autentica só por cookie httpOnly, e o cliente HTTP usa credenciais, sem token no navegador. O backend é Node.js com Prisma, com escopo por clínica em cada requisição. Os testes de ponta a ponta usam Playwright.",
    decisoes: [
      "Autenticação só por cookie httpOnly, sem token em localStorage.",
      "Cofre clínico: o conteúdo das evoluções vem bloqueado até um desbloqueio temporário, com confirmação de senha, e nunca é liberado só pelo frontend.",
      "Isolamento por clínica (tenant) em toda consulta, com checagem de que o atendimento pertence à clínica.",
      "Frontend reconstruído do zero, em fases pequenas, consumindo apenas contratos reais do backend, em vez de reaproveitar o legado.",
    ],
    desafios: [
      "Proteger dados clínicos de crianças e cumprir a LGPD, com auditoria própria do assunto.",
      "Liberar o prontuário só para quem tem autorização efetiva, sem vazar conteúdo antes do desbloqueio.",
      "Transcrever o áudio dos atendimentos de forma local.",
      "Migrar de um frontend legado, que misturava domínio comercial e clínico, para um novo sem parar o sistema.",
    ],
    resultado:
      "Em uso real pela clínica. O novo frontend foi entregue em fases documentadas, de agenda a cofre clínico, com testes de ponta a ponta do fluxo principal.",
  },
};
