import { useState } from "react";
import {
  Bell, Bot, Building2, CalendarDays, CheckCircle2, ChevronDown, ClipboardCheck, FileText, FolderOpen,
  LayoutGrid, LineChart, Moon, Plus, Settings, Wrench, Zap,
} from "lucide-react";
import { MolduraDemo } from "@/components/demos/moldura-demo";
import { PortalAnalise } from "@/components/demos/portal-analise";
import { PortalAprovacoes } from "@/components/demos/portal-aprovacoes";
import { PortalCotacoes } from "@/components/demos/portal-cotacoes";
import { PortalIA } from "@/components/demos/portal-ia";
import { PortalObra } from "@/components/demos/portal-obra";
import {
  PortalChamados, PortalChecklist, PortalConfiguracoes, PortalDashboard, PortalDiarias,
  PortalDocumentos, PortalImoveis, PortalObras,
} from "@/components/demos/portal-telas";
import type { TelaPortal } from "@/data/demos/portal";
import "@/styles/portal-demo.css";

type Item = { id: TelaPortal; rotulo: string; subtitulo: string; Icone: typeof LineChart; selo?: string };

const GRUPOS: { grupo: string; itens: Item[] }[] = [
  {
    grupo: "VISÃO GERAL",
    itens: [
      { id: "dashboard", rotulo: "Dashboard", subtitulo: "Visão geral das obras e da operação", Icone: LayoutGrid },
      { id: "analise", rotulo: "Análise de Obras", subtitulo: "Orçado x Medido e desvios, todos os blocos obedecem aos mesmos filtros.", Icone: LineChart },
      { id: "obras", rotulo: "Obras", subtitulo: "6 obras no escopo atual", Icone: Building2 },
      { id: "cotacoes", rotulo: "Cotações", subtitulo: "Visão consolidada das cotações", Icone: FileText },
      { id: "diarias", rotulo: "Controle de Diárias", subtitulo: "Planilhas de diárias por obra", Icone: CalendarDays },
      { id: "aprovacoes", rotulo: "Aprovações", subtitulo: "Quem aprova, até qual valor e em qual escopo.", Icone: CheckCircle2, selo: "26" },
    ],
  },
  {
    grupo: "ADMINISTRAÇÃO",
    itens: [
      { id: "imoveis", rotulo: "Imóveis", subtitulo: "Imóveis, contratos e medições de consumo", Icone: Zap },
      { id: "checklist", rotulo: "Checklist", subtitulo: "Inspeções e conferências por obra", Icone: ClipboardCheck },
      { id: "manutencao", rotulo: "Manutenção", subtitulo: "Painel geral dos chamados de manutenção", Icone: Wrench },
      { id: "documentos", rotulo: "Documentos", subtitulo: "Documentos de todas as obras", Icone: FolderOpen },
    ],
  },
  {
    grupo: "SUPRIMENTOS",
    itens: [{ id: "config", rotulo: "Configurações", subtitulo: "Cadastros e administração do sistema", Icone: Settings }],
  },
];

const TODOS = GRUPOS.flatMap((g) => g.itens);
const DETALHE_OBRA = { rotulo: "Obras", subtitulo: "Detalhe da obra" };

/** Réplica visual do Portal de Engenharia, com dados fictícios e telas navegáveis. */
export function PortalDemo() {
  const [tela, setTela] = useState<TelaPortal>("dashboard");
  const [iaAberta, setIaAberta] = useState(false);
  const noMenu = tela === "obra" ? "obras" : tela;
  const atual = tela === "obra" ? DETALHE_OBRA : (TODOS.find((t) => t.id === tela) ?? TODOS[0]);

  return (
    <MolduraDemo titulo="Portal de Engenharia · demonstração">
      <div className="portal" data-testid="portal-demo">
        <nav className="portal-lateral" aria-label="Menu do portal">
          <span className="portal-marca">PORTAL DE ENGENHARIA</span>
          {GRUPOS.map(({ grupo, itens }) => (
            <div key={grupo} style={{ display: "contents" }}>
              <span className="portal-grupo">{grupo}</span>
              {itens.map(({ id, rotulo, Icone, selo }) => (
                <button key={id} type="button" className="portal-item" aria-current={noMenu === id ? "page" : undefined} onClick={() => setTela(id)}>
                  <Icone aria-hidden="true" className="size-4" /> {rotulo}
                  {selo ? <span className="portal-contador">{selo}</span> : null}
                </button>
              ))}
            </div>
          ))}
          <div className="portal-usuario"><span className="portal-avatar">A</span><span><b>admin</b><br /><span className="portal-suave">Administrador</span></span></div>
        </nav>

        <div className="portal-principal">
          <div className="portal-nav-topo" role="tablist" aria-label="Telas da demonstração">
            {TODOS.map(({ id, rotulo }) => (
              <button key={id} type="button" role="tab" aria-selected={noMenu === id} className="portal-item" aria-current={noMenu === id ? "page" : undefined} onClick={() => setTela(id)}>{rotulo}</button>
            ))}
          </div>
          <header className="portal-topo">
            <div>
              <h4>{atual.rotulo}</h4>
              <p>{atual.subtitulo}</p>
            </div>
            <div className="portal-topo-acoes">
              {tela === "cotacoes" ? <span className="portal-botao"><Plus aria-hidden="true" className="size-4" /> Nova Cotação</span> : null}
              <span className="portal-seletor"><Building2 aria-hidden="true" className="size-4" /> GRUPO 01 <ChevronDown aria-hidden="true" className="size-3" /></span>
              <Moon aria-hidden="true" className="size-4 portal-icone-topo" />
              <Bell aria-hidden="true" className="size-4 portal-icone-topo" />
              <button type="button" className="portal-botao portal-botao-ia" aria-pressed={iaAberta} aria-label="Abrir IA de Engenharia" onClick={() => setIaAberta((v) => !v)}>
                <Bot aria-hidden="true" className="size-5" />
              </button>
              <span className="portal-avatar">A</span>
            </div>
          </header>
          <div className="portal-corpo" style={{ flexWrap: "wrap" }}>
            <div className="portal-conteudo">
              {tela === "dashboard" ? <PortalDashboard /> : null}
              {tela === "analise" ? <PortalAnalise /> : null}
              {tela === "obras" ? <PortalObras aoAbrir={() => setTela("obra")} /> : null}
              {tela === "obra" ? <PortalObra /> : null}
              {tela === "cotacoes" ? <PortalCotacoes /> : null}
              {tela === "diarias" ? <PortalDiarias /> : null}
              {tela === "aprovacoes" ? <PortalAprovacoes /> : null}
              {tela === "imoveis" ? <PortalImoveis /> : null}
              {tela === "checklist" ? <PortalChecklist /> : null}
              {tela === "manutencao" ? <PortalChamados /> : null}
              {tela === "documentos" ? <PortalDocumentos /> : null}
              {tela === "config" ? <PortalConfiguracoes /> : null}
            </div>
            {iaAberta ? <PortalIA aoAbrir={setTela} /> : null}
          </div>
        </div>
      </div>
    </MolduraDemo>
  );
}
