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

  casoReal: null,
};
