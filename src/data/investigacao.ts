import type { Investigacao } from "@/types";

/**
 * Investigações da rotina de sustentação do TOTVS Protheus. O `exemplo`
 * descreve COMO uma investigação é conduzida; não é um incidente único.
 */
export const investigacao: Investigacao = {
  intro:
    "Investigar divergências financeiras e de integração bancária é o que faço no dia a dia da sustentação. O sintoma aparece na tela, e a causa está nos registros e nas regras por trás dela.",

  tabelas: [
    { nome: "SE1", descricao: "Títulos a receber" },
    { nome: "SE5", descricao: "Movimentação bancária" },
    { nome: "FK1", descricao: "Baixas" },
    { nome: "FK5", descricao: "Movimentos financeiros" },
    { nome: "FK7", descricao: "Vínculo entre documentos e registros" },
  ],

  frentes: [
    { titulo: "Títulos, baixas e movimentos", descricao: "Divergências entre o que o Protheus mostra e o que está nas tabelas SE1, SE5, FK1, FK5 e FK7." },
    { titulo: "Remessa e retorno bancário", descricao: "CNAB, boletos e DDA com Itaú, Santander, Sicoob e Votorantim: o que foi enviado, o que o banco devolveu e o que o ERP registrou." },
    { titulo: "Certificados e comunicação", descricao: "Certificados digitais, VAN bancária e APIs: falhas de autenticação e de comunicação com o banco." },
    { titulo: "Extratos e conciliação", descricao: "Consulta e integração de extratos bancários e a conferência contra os lançamentos do ERP." },
    { titulo: "Parametrização e regra de negócio", descricao: "Quando o sistema não se comporta como o esperado: parâmetros, regras e rotinas, validados em homologação." },
  ],

  exemplo: {
    titulo: "Divergência entre título, baixa e movimento financeiro no TOTVS Protheus",
    contexto: [
      "Investigar inconsistências no módulo financeiro do TOTVS Protheus fazia parte da rotina da sustentação. Este exemplo mostra como eu conduzo uma delas.",
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
          nome: "FK1 / FK5 / FK7",
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
      "Análise de SE1, SE5, FK1, FK5 e FK7",
      "Investigação de inconsistências financeiras",
      "Avaliação de riscos antes de alterar a base",
      "Validação de dados",
    ],
  },
};
