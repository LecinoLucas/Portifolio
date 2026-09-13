import type { CurriculoDigitalData, NivelConhecimento } from "@/types/curriculo";
import { TRAJETORIA_PROFISSIONAL, CURSOS_E_CERTIFICACOES } from "./curriculo-trajetoria";

export const ROTULOS_NIVEL: Record<NivelConhecimento, { rotulo: string; classe: string }> = {
  experiencia_pratica: {
    rotulo: "Experiência prática",
    classe: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30",
  },
  participacao: {
    rotulo: "Participação",
    classe: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30",
  },
  conhecimento_inicial: {
    rotulo: "Conhecimento inicial",
    classe: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30",
  },
};

export const curriculoDigital: CurriculoDigitalData = {
  perfil: {
    nome: "Lecino Lucas",
    tituloProfissional: "Analista de Sistemas | TOTVS Protheus | Processos, Integrações e Desenvolvimento",
    conceitoPrincipal: "Da operação à arquitetura",
    mensagemCentral: "Conheço a operação, entendo a regra de negócio e transformo problemas reais em suporte, integrações, automações e sistemas bem estruturados.",
    descricaoTrajetoria:
      "Minha trajetória passou pelo atendimento, implantação de sistemas, rotinas administrativas, gestão de vendas, suporte N1 e N2, TOTVS Protheus e desenvolvimento de soluções corporativas. Essa experiência me ajuda a compreender o processo antes de propor a tecnologia.",
    papelDaIA:
      "Utilizo IA como ferramenta de apoio ao desenvolvimento, à revisão e aos testes. As decisões sobre requisitos, regras de negócio, arquitetura, segurança e validação continuam sob minha responsabilidade.",
    localizacao: "Goiânia - GO, Brasil",
    email: "lecinolucas5@gmail.com",
    telefone: "(62) 98177-3801",
  },

  desafiosAtuacao: {
    protheus: {
      id: "protheus",
      rotuloCurto: "Protheus e processos",
      tituloDesafio: "Organizar rotinas no TOTVS Protheus",
      perguntaOrientadora: "Como alinhar as rotinas corporativas às regras do ERP com governança e controle?",
      resumoAbordagem:
        "Atuação focada nas rotinas operacionais e gerenciais do TOTVS Protheus P12, garantindo consistência entre a movimentação física/financeira e os registros contábeis e fiscais.",
      competencias: [
        {
          nome: "TOTVS Protheus e TMS",
          nivel: "experiencia_pratica",
          evidencia: "Atuação no Financeiro (SIGAFIN), Compras (SIGACOM), Fiscal (SIGAFIS), Contábil (SIGACTB) e TMS.",
          moduloOuArea: "ERP Core",
        },
        {
          nome: "Contas a Pagar e Contas a Receber",
          nivel: "experiencia_pratica",
          evidencia: "Acompanhamento da rotina financeira, conferência de títulos, baixas e conciliação de lançamentos.",
          moduloOuArea: "SIGAFIN",
        },
        {
          nome: "CNAB e DDA",
          nivel: "experiencia_pratica",
          evidencia: "Geração e processamento de arquivos de remessa/retorno e recepção de boletos eletrônicos via DDA.",
          moduloOuArea: "SIGAFIN",
        },
        {
          nome: "Conferência de Caixa (PDV)",
          nivel: "experiencia_pratica",
          evidencia: "Conferência de suprimentos, sangrias para cofre, apuração de sobra/falta e fechamento de turno.",
          moduloOuArea: "Operação / Caixa",
        },
        {
          nome: "Lançamento Padrão — LP",
          nivel: "experiencia_pratica",
          evidencia: "Compreensão da estrutura de LPs e personalização de alguns deles para atendimento de rotinas do sistema.",
          moduloOuArea: "TOTVS Protheus",
        },
        {
          nome: "Investigação com SQL",
          nivel: "experiencia_pratica",
          evidencia: "Consultas estruturadas para diagnóstico analítico de dados, rastreamento de inconsistências e conferência.",
          moduloOuArea: "Banco de Dados",
        },
        {
          nome: "Levantamento de Requisitos e Homologação",
          nivel: "experiencia_pratica",
          evidencia: "Compreensão de gargalos operacionais junto aos usuários, especificação funcional e validação de entregas.",
          moduloOuArea: "Processos",
        },
        {
          nome: "Suporte aos Usuários N1/N2",
          nivel: "experiencia_pratica",
          evidencia: "Atendimento técnico humanizado, resolução de chamados de sistemas e capacitação contínua de operadores.",
          moduloOuArea: "Suporte",
        },
      ],
    },

    fiscal: {
      id: "fiscal",
      rotuloCurto: "Fiscal",
      tituloDesafio: "Rotinas fiscais, notas e auditoria",
      perguntaOrientadora: "Como conferir documentos fiscais e assegurar conformidade com a SEFAZ e o ERP?",
      resumoAbordagem:
        "Conferência de documentos fiscais, análise de inconsistências cadastrais e tributárias, rotina de notas e adequações da reforma tributária.",
      competencias: [
        {
          nome: "Emissão de NF-e",
          nivel: "experiencia_pratica",
          evidencia: "Emissão de notas fiscais eletrônicas de saída e acompanhamento de autorizações.",
          moduloOuArea: "SIGAFIS",
        },
        {
          nome: "Nota fiscal de entrada",
          nivel: "experiencia_pratica",
          evidencia: "Entrada de notas fiscais de fornecedores, amarração com pedidos de compra e conferência de itens.",
          moduloOuArea: "SIGACOM / SIGAFIS",
        },
        {
          nome: "CFOP",
          nivel: "experiencia_pratica",
          evidencia: "Classificação fiscal de operações, validação de regras de entrada, saída e devoluções.",
          moduloOuArea: "Fiscal",
        },
        {
          nome: "Nota de devolução",
          nivel: "experiencia_pratica",
          evidencia: "Emissão e conferência de notas fiscais de devolução de mercadorias e estorno.",
          moduloOuArea: "Fiscal",
        },
        {
          nome: "Remessa para troca",
          nivel: "experiencia_pratica",
          evidencia: "Emissão e controle de notas de remessa para troca, conserto e garantias.",
          moduloOuArea: "Fiscal",
        },
        {
          nome: "Análise de inconsistências",
          nivel: "experiencia_pratica",
          evidencia: "Identificação de divergências cadastrais, tributárias e alíquotas entre XML e ERP.",
          moduloOuArea: "Auditoria Fiscal",
        },
        {
          nome: "Participação em atividades da reforma tributária",
          nivel: "experiencia_pratica",
          evidencia: "Participação em atividades práticas relacionadas aos impactos e adaptações da reforma tributária.",
          moduloOuArea: "Tributário",
        },
        {
          nome: "Conhecimento de CT-e",
          nivel: "conhecimento_inicial",
          evidencia: "Conhecimento inicial sobre Conhecimento de Transporte Eletrônico e regras de frete no TMS.",
          moduloOuArea: "Transporte",
        },
        {
          nome: "LMC (Livro de Movimentação de Combustíveis)",
          nivel: "conhecimento_inicial",
          evidencia: "Conhecimento inicial sobre escrituração diária de combustíveis, controle de estoques e perdas.",
          moduloOuArea: "Controle Operacional",
        },
      ],
      destaquePratico: {
        titulo: "Analista Fiscal Automatizado",
        subtitulo: "Auditoria contínua entre SEFAZ e ERP com apoio de inteligência artificial",
        descricao:
          "Sistema concebido e desenvolvido pelo profissional para realizar o acompanhamento automatizado de documentos fiscais emitidos contra a organização, garantindo que nenhuma nota permaneça desacompanhada de registro no ERP.",
        pontosChave: [
          "Consultas automatizadas à SEFAZ em intervalos programados de hora em hora.",
          "Abrangência focada nas 51 filiais do Grupo 2 da rede corporativa.",
          "Comparação direta entre documentos obtidos na SEFAZ e as tabelas fiscais SF3 (Livros Fiscais) e SFT (Itens de Livros) do Protheus.",
          "Identificação imediata de divergências entre notas emitidas e registros no ERP.",
          "Análise assistida por IA com validação indispensável do profissional fiscal.",
        ],
        notaSegurancaOuAviso:
          "Os dados apresentados são estruturais e conceituais. Chaves de acesso, dados corporativos e números de notas reais são rigorosamente preservados.",
      },
    },

    integracoes: {
      id: "integracoes",
      rotuloCurto: "Integrações",
      tituloDesafio: "Integrar bancos, APIs e certificados digitais",
      perguntaOrientadora: "Como conectar o ERP ao ecossistema bancário com criptografia, mTLS e segurança?",
      resumoAbordagem:
        "Estruturação de canais de comunicação seguros entre aplicações corporativas e instituições financeiras, gerenciando autenticação e tráfego de dados.",
      competencias: [
        {
          nome: "Central de Integrações Bancárias (Itaú e Protheus)",
          nivel: "experiencia_pratica",
          evidencia: "Desenvolvimento de sistema para centralizar integrações e chamadas com APIs bancárias do Itaú.",
          moduloOuArea: "Integrações",
        },
        {
          nome: "Canal mTLS e Certificados Digitais",
          nivel: "experiencia_pratica",
          evidencia: "Testes de autenticação mútua, validação e processo de renovação e gestão de certificados.",
          moduloOuArea: "Segurança",
        },
        {
          nome: "Autenticação OAuth 2.0 (Client Credentials)",
          nivel: "experiencia_pratica",
          evidencia: "Implementação de fluxo com credenciais protegidas e geração de tokens temporários de acesso.",
          moduloOuArea: "Segurança Bancária",
        },
        {
          nome: "API de Consulta de Extratos",
          nivel: "experiencia_pratica",
          evidencia: "Testes e homologação da API de extratos bancários para apoio à conciliação diária.",
          moduloOuArea: "APIs Bancárias",
        },
        {
          nome: "Certificado para Emissão de Boletos",
          nivel: "experiencia_pratica",
          evidencia: "Gestão do certificado digital utilizado na emissão de boletos e comunicação com o banco.",
          moduloOuArea: "Cobrança",
        },
        {
          nome: "Apoio a Processos de CNAB, DDA, Contas a Pagar/Receber e Conciliação",
          nivel: "experiencia_pratica",
          evidencia: "Alinhamento das APIs e arquivos aos fluxos de contas a pagar, contas a receber e tesouraria.",
          moduloOuArea: "Processos Financeiros",
        },
      ],
      destaquePratico: {
        titulo: "Central de Integrações Bancárias — Itaú e Protheus",
        subtitulo: "Segurança de ponta a ponta com mTLS e gestão de credenciais",
        descricao:
          "Projeto desenvolvido para centralizar a comunicação com as APIs abertas do Itaú Unibanco, estabelecendo um canal seguro com certificado digital corporativo e tratando as respostas para sincronização com o ERP.",
        pontosChave: [
          "Conexão mTLS direta com validação de certificados cliente e servidor em conformidade com o padrão bancário.",
          "Tratamento de credenciais e tokens sem exposição de dados sensíveis ou armazenamento inseguro.",
          "Suporte aos fluxos de consulta de extrato, verificação de conciliação e gestão de certificados digitais.",
          "Conexão das respostas bancárias aos processos de Contas a Pagar e Receber do TOTVS Protheus.",
        ],
        notaSegurancaOuAviso:
          "Não há simulação de contas, CNPJs, certificados ou movimentações financeiras reais nesta interface.",
      },
    },

    desenvolvimento: {
      id: "desenvolvimento",
      rotuloCurto: "Desenvolvimento",
      tituloDesafio: "Desenvolvimento de software e automações",
      perguntaOrientadora: "Como traduzir regras de negócio complexas em código limpo, testado e sustentável?",
      resumoAbordagem:
        "Aproximadamente seis meses de experiência prática em desenvolvimento de software, combinando compreensão profunda de processos de negócio com engenharia moderna assistida por IA.",
      competencias: [
        {
          nome: "React & TypeScript",
          nivel: "experiencia_pratica",
          evidencia: "Construção de SPAs modernas, tipagem estrita, modularidade de componentes e acessibilidade.",
          moduloOuArea: "Frontend",
        },
        {
          nome: "Node.js & APIs REST",
          nivel: "experiencia_pratica",
          evidencia: "Arquitetura MVC em camadas, rotas versionadas, tratamento canônico de erros e middlewares.",
          moduloOuArea: "Backend",
        },
        {
          nome: "Python",
          nivel: "experiencia_pratica",
          evidencia: "Scripts de automação, manipulação de arquivos fiscais, parsers de dados e rotinas de apoio.",
          moduloOuArea: "Automação / Backend",
        },
        {
          nome: "PostgreSQL & Modelagem Relacional",
          nivel: "experiencia_pratica",
          evidencia: "Esquemas relacionais estruturados, chaves estrangeiras, consultas analíticas e ORMs (Prisma).",
          moduloOuArea: "Banco de Dados",
        },
        {
          nome: "Testes Automatizados (Vitest / Unitários)",
          nivel: "experiencia_pratica",
          evidencia: "Escrita de testes automatizados para validação de regras de negócio e interfaces.",
          moduloOuArea: "Qualidade",
        },
        {
          nome: "Segurança & Validação de Entrada",
          nivel: "experiencia_pratica",
          evidencia: "Princípio de deny-by-default, sanitização de inputs, validação via esquemas (Zod) e zero secrets.",
          moduloOuArea: "Segurança",
        },
        {
          nome: "Desenvolvimento Assistido por IA Orientado por Requisitos",
          nivel: "experiencia_pratica",
          evidencia: "Definição de especificações rigorosas, levantamento de processos e validação técnica da entrega.",
          moduloOuArea: "Engenharia / IA",
        },
      ],
      destaquePratico: {
        titulo: "Engenharia de Software com Foco em Regras Reais",
        subtitulo: "A união entre visão operacional de negócio e desenvolvimento técnico",
        descricao:
          "O diferencial de atuação não é apenas a sintaxe de código, mas a capacidade de sentar com quem opera o negócio, compreender a necessidade real e transformá-la em uma solução técnica estável.",
        pontosChave: [
          "Aproximadamente 6 meses de experiência prática em desenvolvimento de software e integrações.",
          "Foco em código sustentável, modular e com responsabilidade única.",
          "Adoção de IA como ferramenta de apoio técnico guiada por requisitos e validação contínua.",
          "Documentação clara e padrões de engenharia que facilitam manutenção futura.",
        ],
      },
    },
  },

  trajetoria: TRAJETORIA_PROFISSIONAL,
  cursosECertificacoes: CURSOS_E_CERTIFICACOES,
};

