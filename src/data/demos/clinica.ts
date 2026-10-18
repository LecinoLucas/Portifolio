import type { DefinicaoSistema } from "@/data/demos/sistema-tipos";

/** Dados 100% fictícios: demonstração visual do sistema da clínica. Nenhum dado clínico real. */
export const clinica: DefinicaoSistema = {
  tema: "clinica",
  titulo: "Sistema da clínica · demonstração",
  marca: "Clínica",
  submarca: "Exemplo",
  usuario: { nome: "Profissional", papel: "Terapeuta" },
  telas: [
    {
      id: "dashboard", rotulo: "Dashboard", titulo: "Dashboard", descricao: "Visão do dia da clínica.",
      blocos: [
        { tipo: "kpis", itens: [
          { rotulo: "Atendimentos hoje", valor: "12", apoio: "2 em andamento" },
          { rotulo: "Agendados esta semana", valor: "58", apoio: "4 horários livres" },
          { rotulo: "Pacientes ativos", valor: "73", tom: "destaque" },
          { rotulo: "Evoluções pendentes", valor: "3", apoio: "aguardando registro", tom: "laranja" },
        ] },
        { tipo: "aviso", tom: "roxo", titulo: "Cofre clínico", texto: "O conteúdo clínico só é liberado depois que o profissional confirma a senha, por tempo limitado." },
      ],
    },
    {
      id: "agenda", rotulo: "Agenda", titulo: "Agenda", descricao: "Disponibilidade, bloqueios e agendamentos.", acao: "+ Novo agendamento",
      blocos: [{ tipo: "agenda", colunas: [
        { nome: "Profissional A", itens: [
          { hora: "08:00", titulo: "Paciente 01", detalhe: "Sessão · 50 min", selo: "Confirmado", tom: "verde" },
          { hora: "09:00", titulo: "Paciente 02", detalhe: "Sessão · 50 min", selo: "Agendado", tom: "azul" },
        ] },
        { nome: "Profissional B", itens: [
          { hora: "08:30", titulo: "Paciente 03", detalhe: "Avaliação · 60 min", selo: "Em atendimento", tom: "laranja" },
          { hora: "10:00", titulo: "Bloqueio", detalhe: "Reunião de equipe", selo: "Bloqueado", tom: "cinza" },
        ] },
        { nome: "Profissional C", itens: [
          { hora: "14:00", titulo: "Paciente 04", detalhe: "Sessão · 50 min", selo: "Agendado", tom: "azul" },
        ] },
      ] }],
    },
    {
      id: "pacientes", rotulo: "Pacientes", titulo: "Pacientes", descricao: "Pacientes e responsáveis.", acao: "+ Novo paciente",
      blocos: [{ tipo: "tabela", colunas: ["Paciente", "Responsável", "Profissional", "Última consulta", "Situação"], linhas: [
        ["Paciente 01", "Responsável 01", "Profissional A", "12/08/2026", { selo: "Ativo", tom: "verde" }],
        ["Paciente 02", "Responsável 02", "Profissional A", "10/08/2026", { selo: "Ativo", tom: "verde" }],
        ["Paciente 03", "Responsável 03", "Profissional B", "02/07/2026", { selo: "Inativo", tom: "cinza" }],
      ] }],
    },
    {
      id: "profissionais", rotulo: "Profissionais", titulo: "Profissionais", descricao: "Equipe, especialidades e disponibilidade.",
      blocos: [{ tipo: "cartoes", itens: [
        { titulo: "Profissional A", texto: "Psicologia infantil", meta: "Seg a sex · 08h às 17h", selo: "Ativo", tom: "verde" },
        { titulo: "Profissional B", texto: "Fonoaudiologia", meta: "Ter a qui · 08h às 14h", selo: "Ativo", tom: "verde" },
        { titulo: "Profissional C", texto: "Terapia ocupacional", meta: "Seg, qua e sex · 13h às 18h", selo: "Ativo", tom: "verde" },
      ] }],
    },
    {
      id: "atendimentos", rotulo: "Atendimentos", titulo: "Atendimentos", descricao: "Atendimentos do dia e histórico.",
      blocos: [{ tipo: "tabela", colunas: ["Hora", "Paciente", "Profissional", "Situação"], linhas: [
        ["08:00", "Paciente 01", "Profissional A", { selo: "Concluído", tom: "verde" }],
        ["08:30", "Paciente 03", "Profissional B", { selo: "Em andamento", tom: "laranja" }],
        ["09:00", "Paciente 02", "Profissional A", { selo: "Aguardando", tom: "azul" }],
      ] }],
    },
    {
      id: "prontuario", rotulo: "Prontuário", titulo: "Prontuário", descricao: "Notas clínicas protegidas pelo cofre clínico.",
      blocos: [
        { tipo: "aviso", tom: "roxo", titulo: "Conteúdo bloqueado", texto: "As evoluções deste paciente estão protegidas. Confirme sua senha para liberar o acesso por tempo limitado." },
        { tipo: "tabela", colunas: ["Data", "Tipo", "Profissional", "Conteúdo"], linhas: [
          ["12/08/2026", "Evolução", "Profissional A", { selo: "Bloqueado", tom: "roxo" }],
          ["05/08/2026", "Evolução", "Profissional A", { selo: "Bloqueado", tom: "roxo" }],
          ["29/07/2026", "Avaliação", "Profissional B", { selo: "Bloqueado", tom: "roxo" }],
        ] },
      ],
    },
    {
      id: "configuracoes", rotulo: "Configurações", titulo: "Configurações", descricao: "Dados da clínica e acessos.",
      blocos: [{ tipo: "cartoes", itens: [
        { titulo: "Dados da clínica", texto: "Nome, endereço e contatos." },
        { titulo: "Usuários e papéis", texto: "Quem pode ver e editar cada informação." },
        { titulo: "Consentimentos", texto: "Registro de consentimento do responsável." },
      ] }],
    },
  ],
};
