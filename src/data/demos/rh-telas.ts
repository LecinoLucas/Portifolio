import type { DefinicaoSistema } from "@/data/demos/sistema-tipos";

/** Dados 100% fictícios: telas do painel do RH. Nenhum candidato real. */
export const rhTelas: DefinicaoSistema = {
  tema: "rh",
  titulo: "Portal RH · telas",
  marca: "Portal RH",
  submarca: "Recrutamento e admissão",
  usuario: { nome: "Analista de RH", papel: "RH" },
  telas: [
    {
      id: "dashboard", rotulo: "Dashboard", titulo: "Dashboard", descricao: "Vagas, candidatos e admissões em andamento.",
      blocos: [
        { tipo: "kpis", itens: [
          { rotulo: "Vagas abertas", valor: "8", apoio: "2 urgentes", tom: "destaque" },
          { rotulo: "Candidatos no funil", valor: "146", apoio: "23 novos na semana" },
          { rotulo: "Análises por IA", valor: "31", apoio: "4 em processamento", tom: "azul" },
          { rotulo: "Admissões em andamento", valor: "5", apoio: "2 aguardando documentos", tom: "laranja" },
        ] },
        { tipo: "barras", titulo: "Candidatos por etapa", itens: [
          { rotulo: "Entrada", valor: 52, texto: "52" }, { rotulo: "Triagem", valor: 38, texto: "38" },
          { rotulo: "Entrevista RH", valor: 24, texto: "24" }, { rotulo: "Técnica", valor: 15, texto: "15" },
          { rotulo: "Oferta", valor: 6, texto: "6" }, { rotulo: "Contratado", valor: 4, texto: "4" },
        ] },
      ],
    },
    {
      id: "vagas", rotulo: "Vagas", titulo: "Vagas", descricao: "Vagas abertas, com critérios e skills.", acao: "+ Nova vaga",
      blocos: [{ tipo: "cartoes", itens: [
        { titulo: "Analista Fiscal", texto: "Fiscal · Presencial", selo: "Aberta", tom: "verde", meta: "34 candidatos" },
        { titulo: "Auxiliar Financeiro", texto: "Financeiro · Presencial", selo: "Urgente", tom: "laranja", meta: "21 candidatos" },
        { titulo: "Analista de Sistemas", texto: "TI · Híbrido", selo: "Aberta", tom: "verde", meta: "48 candidatos" },
      ] }],
    },
    {
      id: "candidatos", rotulo: "Candidatos", titulo: "Candidatos", descricao: "Banco de candidatos com score por vaga.",
      blocos: [{ tipo: "tabela", colunas: ["Candidato", "Vaga", "Score", "Etapa", "Análise por IA"], linhas: [
        ["Candidato 01", "Analista Fiscal", "86", { selo: "Triagem", tom: "azul" }, { selo: "Concluída", tom: "verde" }],
        ["Candidato 02", "Auxiliar Financeiro", "91", { selo: "Entrevista RH", tom: "azul" }, { selo: "Concluída", tom: "verde" }],
        ["Candidato 03", "Analista Fiscal", "74", { selo: "Entrada", tom: "cinza" }, { selo: "Processando", tom: "laranja" }],
      ] }],
    },
    {
      id: "pipeline", rotulo: "Pipeline", titulo: "Pipeline", descricao: "Etapas da seleção, da entrada à contratação.",
      blocos: [{ tipo: "agenda", colunas: [
        { nome: "Triagem", itens: [
          { hora: "86", titulo: "Candidato 01", detalhe: "Analista Fiscal", selo: "Em análise", tom: "azul" },
          { hora: "68", titulo: "Candidato 04", detalhe: "Analista Fiscal", selo: "Em análise", tom: "azul" },
        ] },
        { nome: "Entrevista RH", itens: [
          { hora: "91", titulo: "Candidato 02", detalhe: "Auxiliar Financeiro", selo: "Agendada", tom: "verde" },
        ] },
        { nome: "Oferta", itens: [
          { hora: "88", titulo: "Candidato 06", detalhe: "Analista Fiscal", selo: "Proposta enviada", tom: "laranja" },
        ] },
      ] }],
    },
    {
      id: "analises", rotulo: "Análises IA", titulo: "Análises por IA", descricao: "Análise do currículo, com justificativa por critério.",
      blocos: [
        { tipo: "tabela", colunas: ["Critério", "Situação", "Justificativa"], linhas: [
          ["Experiência em rotinas fiscais", { selo: "Atende", tom: "verde" }, "3 anos descritos no currículo."],
          ["Conhecimento de ERP", { selo: "Atende", tom: "verde" }, "Cita uso de ERP em contas a pagar."],
          ["Excel avançado", { selo: "Lacuna", tom: "laranja" }, "Sem evidência no currículo; validar em entrevista."],
        ] },
        { tipo: "aviso", tom: "azul", titulo: "A IA apoia, o RH decide", texto: "A análise mostra a evidência por critério. A decisão sobre o candidato continua sendo da equipe de RH." },
      ],
    },
    {
      id: "admissao", rotulo: "Admissão", titulo: "Admissão", descricao: "Pré-admissão com checklist documental e envio ao Protheus.",
      blocos: [
        { tipo: "tabela", colunas: ["Candidato", "Documentos", "Aprovação", "Protheus"], linhas: [
          ["Candidato 06", "4 de 4 recebidos", { selo: "Aprovada", tom: "verde" }, { selo: "Pronto para enviar", tom: "azul" }],
          ["Candidato 07", "2 de 4 recebidos", { selo: "Pendente", tom: "laranja" }, { selo: "Bloqueado", tom: "cinza" }],
        ] },
        { tipo: "aviso", tom: "laranja", titulo: "Ponte com o Protheus em homologação", texto: "O envio usa um contrato validado, com simulação e chave de idempotência. A execução real ainda está em homologação." },
      ],
    },
  ],
};
