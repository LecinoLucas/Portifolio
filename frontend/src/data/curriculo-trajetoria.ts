import type { ExperienciaTrajetoria, CursoCertificacao } from "@/types/curriculo";

export const TRAJETORIA_PROFISSIONAL: ExperienciaTrajetoria[] = [
  {
    id: "atento",
    empresa: "Atento S.A.",
    cargo: "Suporte Técnico",
    resumoAtuacao: "Atendimento e diagnóstico de conectividade, redes e suporte a clientes corporativos.",
    atividades: [
      "Diagnóstico de conectividade, configuração de roteadores e resolução de incidentes de rede.",
      "Comunicação clara com clientes para identificação e solução rápida de falhas técnicas.",
      "Registro estruturado de chamados e cumprimento rigoroso de SLAs de atendimento.",
    ],
    competenciasAplicadas: ["Suporte Técnico", "Diagnóstico de Redes", "Comunicação Humanizada", "SLA"],
  },
  {
    id: "i5",
    empresa: "I5 Sistemas",
    cargo: "Suporte N1 & Implantação",
    resumoAtuacao: "Atendimento N1, implantação de sistemas de gestão e treinamento presencial e remoto de usuários.",
    atividades: [
      "Implantação de sistemas comerciais e treinamento operacional de usuários-chave.",
      "Suporte diário a dúvidas de processos de vendas, estoque e movimentação de caixa.",
      "Acompanhamento presencial no go-live para garantir transição suave de sistemas.",
    ],
    competenciasAplicadas: ["Implantação de Sistemas", "Treinamento de Usuários", "Suporte N1", "Processos Comerciais"],
  },
  {
    id: "pioneira",
    empresa: "Pioneira Colchões",
    cargo: "Auxiliar Administrativo → Gerente de Vendas",
    resumoAtuacao:
      "Evolução profissional interna: início no suporte administrativo e financeiro, avançando para liderança de equipe de vendas, negociação e operação de loja.",
    atividades: [
      "Início com rotinas administrativas, conferência de movimentação de caixa e controle de documentos.",
      "Promoção a Gerente de Vendas, coordenando atendimento, fechamento de metas e rotinas operacionais.",
      "Negociação direta com clientes e fornecedores, desenvolvendo profunda visão de pessoas e comércio.",
    ],
    competenciasAplicadas: ["Gestão de Pessoas", "Liderança de Vendas", "Conferência Financeira", "Operação de Varejo"],
  },
  {
    id: "marajo",
    empresa: "Rede Marajó",
    cargo: "Analista de Sistemas / Suporte N1 e N2",
    resumoAtuacao:
      "Atendimento a 51 filiais em processos de TOTVS Protheus P12, rotinas financeiras, contábeis, fiscais, compras e integrações de dados.",
    atividades: [
      "Suporte aos módulos SIGAFIN, SIGACOM, SIGAFIS e SIGACTB do TOTVS Protheus P12.",
      "Investigação analítica com SQL para rastreamento de divergências de caixa, estoques e lançamentos.",
      "Apoio operacional em conciliação bancária, fechamentos de caixa, remessas CNAB e rotinas de DDA.",
      "Parametrização e personalização de lançamentos padrão (LP) contábeis e homologação junto aos usuários.",
    ],
    competenciasAplicadas: ["TOTVS Protheus P12", "SQL", "SIGAFIN", "SIGAFIS", "SIGACTB", "Suporte N1/N2", "51 Filiais"],
  },
  {
    id: "dev-sistemas",
    empresa: "Desenvolvimento de Sistemas & Automações",
    cargo: "Desenvolvedor de Software & Integrações",
    resumoAtuacao:
      "Aplicação prática de ~6 meses no desenvolvimento de sistemas web, integrações bancárias (Itaú mTLS) e automações fiscais com apoio de IA.",
    atividades: [
      "Desenvolvimento da Central de Integrações Bancárias com APIs Itaú, canal mTLS e OAuth2.",
      "Criação do Analista Fiscal Automatizado para consulta periódica à SEFAZ e conferência com o Protheus.",
      "Desenvolvimento web com React, TypeScript, Node.js, Python, PostgreSQL e testes automatizados.",
      "Uso de IA guiado por levantamento prévio de processos, arquitetura em camadas e validação técnica.",
    ],
    competenciasAplicadas: ["React", "TypeScript", "Node.js", "Python", "PostgreSQL", "mTLS", "APIs REST", "IA Aplicada"],
  },
];

export const CURSOS_E_CERTIFICACOES: CursoCertificacao[] = [
  {
    id: "graduacao",
    nome: "Análise e Desenvolvimento de Sistemas",
    instituicao: "Ensino Superior",
  },
];
