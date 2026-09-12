/**
 * DADOS FICTÍCIOS DE DEMONSTRAÇÃO DO PORTAL DE ENGENHARIA — NÃO REAIS
 * 
 * Este arquivo contém estritamente dados mockados para a demonstração interativa
 * do módulo Portal de Engenharia (/projetos/portal-engenharia/demo).
 * Nenhum dado de clientes, empresas reais, obras reais ou valores proprietários é utilizado.
 */

export type StatusObra = "em_andamento" | "planejamento" | "concluida" | "pausada";

export interface SubitemEapDemo {
  id: string;
  codigo: string;
  descricao: string;
  unidade: string;
  quantidade: number;
  valorUnitario: number;
  valorTotal: number;
}

export interface EtapaEapDemo {
  id: string;
  codigo: string;
  descricao: string;
  valorTotal: number;
  statusAprovacao: "aprovada" | "pendente";
  subitens: SubitemEapDemo[];
}

export interface ObraDemo {
  id: string;
  codigo: string;
  nome: string;
  cidade: string;
  status: StatusObra;
  orcado: number;
  realizado: number;
  progresso: number;
  responsavel: string;
  prazo: string;
  descricao: string;
}

export const STATUS_OBRA_CONFIG: Record<
  StatusObra,
  { label: string; corBadge: string }
> = {
  em_andamento: {
    label: "Em andamento",
    corBadge: "text-tech-cyan border-tech-cyan/30 bg-tech-cyan/10",
  },
  planejamento: {
    label: "Planejamento",
    corBadge: "text-tech-violet border-tech-violet/30 bg-tech-violet/10",
  },
  concluida: {
    label: "Concluída",
    corBadge: "text-emerald-500 border-emerald-500/30 bg-emerald-500/10",
  },
  pausada: {
    label: "Pausada",
    corBadge: "text-amber-500 border-amber-500/30 bg-amber-500/10",
  },
};

export const OBRAS_INICIAIS: ObraDemo[] = [
  {
    id: "edificio-horizonte-sul",
    codigo: "OBR-2026-01",
    nome: "Edifício Horizonte Sul",
    cidade: "Goiânia",
    status: "em_andamento",
    orcado: 4850000,
    realizado: 2910000,
    progresso: 60,
    responsavel: "Eng. Carlos Eduardo (Fictício)",
    prazo: "Jan/2026 – Dez/2027",
    descricao: "Torre residencial de médio-alto padrão com 18 pavimentos e garagem no subsolo.",
  },
  {
    id: "residencial-parque-flores",
    codigo: "OBR-2026-02",
    nome: "Residencial Parque das Flores",
    cidade: "Anápolis",
    status: "planejamento",
    orcado: 3200000,
    realizado: 0,
    progresso: 0,
    responsavel: "Eng. Mariana Rios (Fictício)",
    prazo: "Abr/2026 – Nov/2027",
    descricao: "Condomínio horizontal com infraestrutura urbana, saneamento e pavimentação.",
  },
  {
    id: "centro-comercial-buritis",
    codigo: "OBR-2025-08",
    nome: "Centro Comercial Buritis",
    cidade: "Goiânia",
    status: "em_andamento",
    orcado: 6100000,
    realizado: 5185000,
    progresso: 85,
    responsavel: "Eng. Roberto Vasconcelos (Fictício)",
    prazo: "Ago/2025 – Out/2026",
    descricao: "Complexo de salas e lojas corporativas com acabamento comercial e subestação.",
  },
  {
    id: "galpao-logistico-eixo-norte",
    codigo: "OBR-2025-03",
    nome: "Galpão Logístico Eixo Norte",
    cidade: "Rio Verde",
    status: "concluida",
    orcado: 2400000,
    realizado: 2380000,
    progresso: 99,
    responsavel: "Eng. Juliana Silveira (Fictício)",
    prazo: "Mar/2025 – Fev/2026",
    descricao: "Galpão pré-moldado com piso industrial de alta resistência e docas de carga.",
  },
];

export const EAP_HORIZONTE_SUL_INICIAL: EtapaEapDemo[] = [
  {
    id: "etapa-1",
    codigo: "1.0",
    descricao: "Serviços preliminares e canteiro",
    valorTotal: 180000,
    statusAprovacao: "aprovada",
    subitens: [
      {
        id: "sub-1-1",
        codigo: "1.1",
        descricao: "Instalações provisórias, tapumes e ligações",
        unidade: "un",
        quantidade: 1,
        valorUnitario: 60000,
        valorTotal: 60000,
      },
      {
        id: "sub-1-2",
        codigo: "1.2",
        descricao: "Locação da obra e terraplenagem mecanizada",
        unidade: "un",
        quantidade: 1,
        valorUnitario: 120000,
        valorTotal: 120000,
      },
    ],
  },
  {
    id: "etapa-2",
    codigo: "2.0",
    descricao: "Fundações e contenções",
    valorTotal: 920000,
    statusAprovacao: "aprovada",
    subitens: [
      {
        id: "sub-2-1",
        codigo: "2.1",
        descricao: "Estacas escavadas de concreto armado",
        unidade: "m",
        quantidade: 450,
        valorUnitario: 1000,
        valorTotal: 450000,
      },
      {
        id: "sub-2-2",
        codigo: "2.2",
        descricao: "Blocos de coroamento e vigas baldrame",
        unidade: "m³",
        quantidade: 120,
        valorUnitario: 3916.67,
        valorTotal: 470000,
      },
    ],
  },
  {
    id: "etapa-3",
    codigo: "3.0",
    descricao: "Estrutura de concreto armado",
    valorTotal: 2100000,
    statusAprovacao: "aprovada",
    subitens: [
      {
        id: "sub-3-1",
        codigo: "3.1",
        descricao: "Pilares e vigas dos pavimentos tipo",
        unidade: "m³",
        quantidade: 380,
        valorUnitario: 3552.63,
        valorTotal: 1350000,
      },
      {
        id: "sub-3-2",
        codigo: "3.2",
        descricao: "Lajes maciças e protendidas",
        unidade: "m²",
        quantidade: 2200,
        valorUnitario: 340.91,
        valorTotal: 750000,
      },
    ],
  },
  {
    id: "etapa-4",
    codigo: "4.0",
    descricao: "Instalações elétricas e hidráulicas",
    valorTotal: 1650000,
    statusAprovacao: "pendente",
    subitens: [
      {
        id: "sub-4-1",
        codigo: "4.1",
        descricao: "Tubulações e prumadas hidrossanitárias",
        unidade: "un",
        quantidade: 1,
        valorUnitario: 680000,
        valorTotal: 680000,
      },
      {
        id: "sub-4-2",
        codigo: "4.2",
        descricao: "Barramentos, quadros de distribuição e cabos",
        unidade: "un",
        quantidade: 1,
        valorUnitario: 970000,
        valorTotal: 970000,
      },
    ],
  },
];
