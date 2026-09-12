import { createContext, useContext, useState, useMemo, type ReactNode } from "react";
import {
  OBRAS_INICIAIS,
  EAP_HORIZONTE_SUL_INICIAL,
  type ObraDemo,
  type EtapaEapDemo,
  type StatusObra,
} from "@/data/portal-engenharia-demo-data";

interface PortalEngenhariaDemoContextValue {
  obras: ObraDemo[];
  eapMap: Record<string, EtapaEapDemo[]>;
  busca: string;
  setBusca: (busca: string) => void;
  statusFiltro: "todos" | StatusObra;
  setStatusFiltro: (status: "todos" | StatusObra) => void;
  obrasFiltradas: ObraDemo[];
  kpis: {
    totalObras: number;
    obrasEmAndamento: number;
    totalOrcado: number;
    totalRealizado: number;
  };
  getObra: (id: string) => ObraDemo | undefined;
  getEap: (obraId: string) => EtapaEapDemo[];
  aprovarEtapa: (obraId: string, etapaId: string) => void;
  reiniciarDemo: () => void;
  resetFiltros: () => void;
}

const PortalEngenhariaDemoContext = createContext<PortalEngenhariaDemoContextValue | null>(null);

function cloneEap(eap: EtapaEapDemo[]): EtapaEapDemo[] {
  return eap.map((etapa) => ({
    ...etapa,
    subitens: etapa.subitens.map((sub) => ({ ...sub })),
  }));
}

export function PortalEngenhariaDemoProvider({ children }: { children: ReactNode }) {
  const [obras, setObras] = useState<ObraDemo[]>(OBRAS_INICIAIS);
  const [eapMap, setEapMap] = useState<Record<string, EtapaEapDemo[]>>(() => ({
    "edificio-horizonte-sul": cloneEap(EAP_HORIZONTE_SUL_INICIAL),
  }));
  const [busca, setBusca] = useState("");
  const [statusFiltro, setStatusFiltro] = useState<"todos" | StatusObra>("todos");

  // KPIs dinâmicos calculados a partir da lista atual de obras
  const kpis = useMemo(() => {
    return {
      totalObras: obras.length,
      obrasEmAndamento: obras.filter((o) => o.status === "em_andamento").length,
      totalOrcado: obras.reduce((acc, o) => acc + o.orcado, 0),
      totalRealizado: obras.reduce((acc, o) => acc + o.realizado, 0),
    };
  }, [obras]);

  // Filtro dinâmico por texto e por status
  const obrasFiltradas = useMemo(() => {
    const termo = busca.trim().toLowerCase();
    return obras.filter((obra) => {
      const matchStatus = statusFiltro === "todos" || obra.status === statusFiltro;
      if (!matchStatus) return false;
      if (!termo) return true;
      return (
        obra.nome.toLowerCase().includes(termo) ||
        obra.codigo.toLowerCase().includes(termo) ||
        obra.cidade.toLowerCase().includes(termo)
      );
    });
  }, [obras, busca, statusFiltro]);

  const getObra = (id: string) => obras.find((o) => o.id === id || o.codigo === id);

  const getEap = (obraId: string) => {
    if (eapMap[obraId]) return eapMap[obraId];
    return cloneEap(EAP_HORIZONTE_SUL_INICIAL);
  };

  const aprovarEtapa = (obraId: string, etapaId: string) => {
    setEapMap((prev) => {
      const currentEap = prev[obraId] ? cloneEap(prev[obraId]) : cloneEap(EAP_HORIZONTE_SUL_INICIAL);
      const updated = currentEap.map((etapa) =>
        etapa.id === etapaId ? { ...etapa, statusAprovacao: "aprovada" as const } : etapa
      );
      return { ...prev, [obraId]: updated };
    });
  };

  const reiniciarDemo = () => {
    setObras(OBRAS_INICIAIS);
    setEapMap({
      "edificio-horizonte-sul": cloneEap(EAP_HORIZONTE_SUL_INICIAL),
    });
    setBusca("");
    setStatusFiltro("todos");
  };

  const resetFiltros = () => {
    setBusca("");
    setStatusFiltro("todos");
  };

  return (
    <PortalEngenhariaDemoContext.Provider
      value={{
        obras,
        eapMap,
        busca,
        setBusca,
        statusFiltro,
        setStatusFiltro,
        obrasFiltradas,
        kpis,
        getObra,
        getEap,
        aprovarEtapa,
        reiniciarDemo,
        resetFiltros,
      }}
    >
      {children}
    </PortalEngenhariaDemoContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function usePortalEngenhariaDemo() {
  const ctx = useContext(PortalEngenhariaDemoContext);
  if (!ctx) {
    throw new Error(
      "usePortalEngenhariaDemo deve ser utilizado dentro de um PortalEngenhariaDemoProvider"
    );
  }
  return ctx;
}
