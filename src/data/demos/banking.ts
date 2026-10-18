import type { DefinicaoSistema } from "@/data/demos/sistema-tipos";

/** Dados 100% fictícios: demonstração visual do painel do BankingProtheus. Nada de credencial ou certificado real. */
export const banking: DefinicaoSistema = {
  tema: "banking",
  titulo: "BankingProtheus · demonstração",
  marca: "Banking Protheus",
  submarca: "Integrações bancárias",
  usuario: { nome: "Administrador", papel: "Gestão" },
  telas: [
    {
      id: "visao", rotulo: "Visão geral", titulo: "Visão geral", descricao: "Situação dos certificados e das integrações por filial.",
      blocos: [
        { tipo: "kpis", itens: [
          { rotulo: "Certificados vigentes", valor: "47", tom: "verde", apoio: "de 53 filiais" },
          { rotulo: "Vencem em 30 dias", valor: "4", tom: "laranja", apoio: "renovação elegível" },
          { rotulo: "Vencidos", valor: "0", apoio: "nenhuma integração parada" },
          { rotulo: "Precisam de atenção", valor: "2", tom: "vermelho", apoio: "resultado ambíguo" },
        ] },
        { tipo: "tabela", titulo: "Próximos vencimentos", colunas: ["Filial", "API", "Vence em", "Situação"], linhas: [
          ["Filial 0101", "Extrato", "12 dias", { selo: "Janela de renovação", tom: "laranja" }],
          ["Filial 0107", "Boletos", "19 dias", { selo: "Janela de renovação", tom: "laranja" }],
          ["Filial 0212", "Extrato", "74 dias", { selo: "Vigente", tom: "verde" }],
          ["Filial 0305", "Boletos", "181 dias", { selo: "Vigente", tom: "verde" }],
        ] },
      ],
    },
    {
      id: "prontidao", rotulo: "Matriz de Prontidão", titulo: "Matriz de Prontidão", descricao: "O que falta para cada filial operar com o banco.",
      blocos: [{ tipo: "tabela", colunas: ["Filial", "Conta", "Integração", "Credencial", "Certificado", "Pronta"], linhas: [
        ["Filial 0101", { selo: "OK", tom: "verde" }, { selo: "OK", tom: "verde" }, { selo: "OK", tom: "verde" }, { selo: "OK", tom: "verde" }, { selo: "Sim", tom: "verde" }],
        ["Filial 0108", { selo: "OK", tom: "verde" }, { selo: "OK", tom: "verde" }, { selo: "Pendente", tom: "laranja" }, { selo: "Pendente", tom: "laranja" }, { selo: "Não", tom: "vermelho" }],
        ["Filial 0214", { selo: "OK", tom: "verde" }, { selo: "Pendente", tom: "laranja" }, { selo: "Pendente", tom: "laranja" }, { selo: "Pendente", tom: "laranja" }, { selo: "Não", tom: "vermelho" }],
      ] }],
    },
    {
      id: "integracoes", rotulo: "Integrações", titulo: "Integrações", descricao: "APIs do banco por filial.",
      blocos: [{ tipo: "cartoes", itens: [
        { titulo: "Extrato", texto: "API de extrato bancário", selo: "Ativa", tom: "verde", meta: "mTLS · 53 filiais" },
        { titulo: "Boletos", texto: "API de boletos", selo: "Ativa", tom: "verde", meta: "mTLS · 53 filiais" },
        { titulo: "Homologação", texto: "Ambiente de testes do banco", selo: "Disponível", tom: "azul", meta: "Teste de conectividade" },
      ] }],
    },
    {
      id: "certificados", rotulo: "Certificados", titulo: "Certificados", descricao: "Certificados por filial, com validade e situação.", acao: "Importar certificados",
      blocos: [{ tipo: "tabela", colunas: ["Filial", "Tipo", "Validade", "Dias", "Situação"], linhas: [
        ["Filial 0101", "Extrato", "30/11/2026", "12", { selo: "Em renovação", tom: "azul" }],
        ["Filial 0107", "Boletos", "07/12/2026", "19", { selo: "Elegível", tom: "laranja" }],
        ["Filial 0212", "Extrato", "01/02/2027", "74", { selo: "Vigente", tom: "verde" }],
      ] }],
    },
    {
      id: "operacoes", rotulo: "Operações", titulo: "Operações", descricao: "Histórico de testes e renovações, com tentativas e resultado.",
      blocos: [{ tipo: "tabela", colunas: ["Operação", "Filial", "Tentativa", "Resultado"], linhas: [
        ["Teste de conectividade", "Filial 0101", "1", { selo: "Concluída", tom: "verde" }],
        ["Renovação de certificado", "Filial 0107", "1", { selo: "Em andamento", tom: "azul" }],
        ["Renovação de certificado", "Filial 0214", "1", { selo: "Precisa de atenção", tom: "vermelho" }],
      ] }],
    },
    {
      id: "automacao", rotulo: "Automação", titulo: "Automação bancária", descricao: "Saúde do worker e do agendador, calculada pelo backend.",
      blocos: [
        { tipo: "cartoes", itens: [
          { titulo: "Worker", texto: "Consome as operações em fila, com lease e recuperação.", selo: "Saudável", tom: "verde", meta: "3 instâncias" },
          { titulo: "Agendador", texto: "Planejador de renovação · diário à meia-noite (UTC).", selo: "Saudável", tom: "verde", meta: "Próxima execução: 00:00" },
        ] },
        { tipo: "aviso", tom: "laranja", titulo: "Resultado ambíguo", texto: "Quando o resultado externo de uma renovação é incerto, a operação vai para atenção e não é reenviada automaticamente." },
      ],
    },
    {
      id: "config", rotulo: "Configurações", titulo: "Configurações", descricao: "Política de alertas e de renovação.",
      blocos: [{ tipo: "cartoes", itens: [
        { titulo: "Janela de renovação", texto: "Renovar quando faltarem até 30 dias." },
        { titulo: "Alertas de vencimento", texto: "Níveis de atenção por dias restantes." },
        { titulo: "Usuários e permissões", texto: "Acesso por filial e por papel." },
      ] }],
    },
  ],
};
