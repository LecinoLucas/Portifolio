import type { Investigacao } from "@/types";

/**
 * Método de investigação de divergências financeiras no TOTVS Protheus.
 * Descreve COMO se investiga; não relata um incidente específico.
 * Para publicar um caso real, preencha `casoReal` com fatos confirmados —
 * enquanto for `null`, a seção não exibe nenhum relato de incidente.
 */
export const investigacao: Investigacao = {
  etapas: [
    {
      titulo: "Contexto",
      descricao: "Entender o processo e o que o usuário percebeu antes de abrir o banco.",
      itens: [
        "Sistema e processo envolvidos",
        "Sintoma apresentado",
        "Impacto para o usuário e para o processo",
      ],
    },
    {
      titulo: "Investigação",
      descricao: "Levantar os fatos e formular hipóteses que possam ser confirmadas ou descartadas.",
      itens: [
        "Levantamento das informações com o usuário",
        "Análise dos registros nas tabelas SE1, SE5, FK1 e FK7",
        "Consultas SQL somente de leitura",
        "Hipóteses levantadas e descartadas",
      ],
    },
    {
      titulo: "Causa identificada",
      descricao: "Localizar o que estava inconsistente a partir da relação entre os registros.",
      itens: [
        "O que estava inconsistente",
        "Como o relacionamento entre as tabelas ajudou a localizar o problema",
      ],
    },
    {
      titulo: "Correção",
      descricao: "Escolher o procedimento mais seguro, priorizando integridade e rastreabilidade.",
      itens: [
        "Procedimento adotado",
        "Estorno ou reprocessamento pelo sistema, ou intervenção na base",
        "Aprovação e cuidados antes de qualquer alteração",
      ],
    },
    {
      titulo: "Validação",
      descricao: "Confirmar que o resultado está correto antes de dar o caso por encerrado.",
      itens: [
        "Conferência dos registros após a correção",
        "Validação no próprio Protheus",
        "Conferência do reflexo financeiro e contábil",
      ],
    },
    {
      titulo: "Resultado",
      descricao: "Registrar o que mudou e o que evita a repetição.",
      itens: [
        "Registros e processos normalizados",
        "Medida preventiva, quando aplicável",
      ],
    },
  ],

  riscos: [
    "Alteração indevida de registros",
    "Quebra de relacionamento entre tabelas",
    "Duplicidade de baixas ou movimentos",
    "Impacto em saldos e títulos",
    "Necessidade de backup e homologação antes de qualquer intervenção",
  ],

  consultaIlustrativa: {
    legenda:
      "Modelo didático com dados fictícios. Não é a consulta de um incidente real; nomes de campos e vínculos devem ser conferidos no dicionário de dados de cada ambiente.",
    sql: `-- Somente leitura: compara o título (SE1) com as baixas (FK1)
-- e com o movimento bancário (SE5), usando o vínculo da FK7.
SELECT
    E1.E1_FILIAL, E1.E1_PREFIXO, E1.E1_NUM, E1.E1_PARCELA, E1.E1_TIPO,
    E1.E1_VALOR, E1.E1_SALDO,
    FK1.FK1_VALOR AS valor_baixa,
    E5.E5_VALOR   AS valor_movimento
FROM SE1010 E1
JOIN FK7010 FK7
  ON  FK7.D_E_L_E_T_ = ''
  AND FK7.FK7_ALIAS  = 'SE1'
  AND FK7.FK7_CHAVE  = E1.E1_FILIAL + '|' + E1.E1_PREFIXO + '|' + E1.E1_NUM
                     + '|' + E1.E1_PARCELA + '|' + E1.E1_TIPO
                     + '|' + E1.E1_CLIENTE + '|' + E1.E1_LOJA
LEFT JOIN FK1010 FK1
  ON  FK1.D_E_L_E_T_ = ''
  AND FK1.FK1_IDDOC  = FK7.FK7_IDDOC
LEFT JOIN SE5010 E5
  ON  E5.D_E_L_E_T_ = ''
  AND E5.E5_IDORIG   = FK1.FK1_IDFK1
WHERE E1.D_E_L_E_T_ = ''
  AND E1.E1_NUM     = '000000'      -- valor fictício
  AND ISNULL(FK1.FK1_VALOR, 0) <> ISNULL(E5.E5_VALOR, 0);`,
  },

  casoReal: {
    titulo: "Investigação de inconsistência financeira no TOTVS Protheus",
    contexto: [
      "Durante a sustentação do TOTVS Protheus, participei da investigação de uma inconsistência no módulo financeiro.",
      "O problema exigia analisar não só a informação apresentada na tela, mas também os registros armazenados nas tabelas financeiras, buscando compreender a relação entre títulos, baixas e movimentos.",
    ],
    problema: {
      texto:
        "Identificar por que certas informações apresentadas pelo sistema não correspondiam ao comportamento esperado no processo financeiro. Antes de qualquer alteração na base, a prioridade foi entender:",
      perguntas: [
        "qual registro representava o título original;",
        "quais movimentos financeiros estavam relacionados;",
        "como a baixa havia sido registrada;",
        "quais registros de integração financeira estavam associados;",
        "se a divergência estava no dado, na rotina ou no relacionamento entre os registros.",
      ],
    },
    investigacao: {
      texto: [
        "A análise foi feita com consultas SQL diretamente na base, comparando registros entre as tabelas.",
        "O processo partiu do registro apresentado pelo usuário e rastreou seus relacionamentos dentro da estrutura do Protheus.",
      ],
      tabelas: [
        { nome: "SE1", descricao: "Análise do título e de sua situação no contas a receber." },
        { nome: "SE5", descricao: "Verificação dos movimentos financeiros relacionados ao título." },
        {
          nome: "FK1 / FK7",
          descricao:
            "Análise dos registros financeiros do processo, buscando inconsistências ou diferenças no relacionamento dos dados.",
        },
      ],
      objetivo:
        "O objetivo não era só encontrar um registro diferente, e sim reconstruir o fluxo do lançamento para entender em qual etapa o comportamento se desviou do esperado.",
    },
    raciocinio:
      "Sintoma → identificação do registro → rastreamento entre tabelas → comparação dos dados → identificação da inconsistência → validação da origem → definição da correção. Isso evitou alterar a base sem entender o impacto nos demais registros relacionados.",
    riscos: {
      texto:
        "Por se tratar de dados financeiros, qualquer alteração direta na base poderia afetar outros processos. A intervenção foi tratada como último recurso, priorizando as próprias rotinas do Protheus sempre que possível. Riscos considerados:",
      itens: [
        "alteração indevida de títulos;",
        "quebra de relacionamento entre registros;",
        "duplicidade de movimentos;",
        "alteração de valores financeiros;",
        "impacto em processos posteriores;",
        "inconsistência entre o que o Protheus apresentava e o que estava armazenado na base.",
      ],
    },
    resultado:
      "A investigação permitiu estruturar o problema a partir dos dados reais do ERP, em vez de tratar a divergência apenas pelo sintoma apresentado pelo usuário.",
    aprendizado: [
      "Em sistemas ERP, uma inconsistência financeira não deve ser analisada isoladamente em uma única tabela.",
      "É preciso compreender o relacionamento entre os registros e o fluxo de negócio que originou aqueles dados.",
    ],
    competencias: [
      "Troubleshooting de ERP",
      "Análise de causa raiz",
      "SQL (PostgreSQL e SQL Server)",
      "TOTVS Protheus",
      "Análise de SE1, SE5, FK1 e FK7",
      "Investigação de inconsistências financeiras",
      "Avaliação de riscos antes de alterar a base",
      "Validação de dados",
    ],
  },
};
