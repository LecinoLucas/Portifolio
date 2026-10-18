import { describe, expect, it } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { ImportNfeDemo } from "@/components/demos/importnfe-demo";
import { RhDemo } from "@/components/demos/rh-demo";

describe("<ImportNfeDemo />", () => {
  it("sinaliza dados fictícios e permite editar a sugestão", () => {
    render(<ImportNfeDemo />);
    expect(screen.getByText("Dados fictícios")).toBeInTheDocument();
    const campo = screen.getAllByLabelText("Descrição para a planilha")[0];
    fireEvent.change(campo, { target: { value: "DETERGENTE EDITADO" } });
    expect(campo).toHaveValue("DETERGENTE EDITADO");
  });

  it("adiciona uma regra na aba Normalização", () => {
    render(<ImportNfeDemo />);
    fireEvent.click(screen.getByRole("tab", { name: "Normalização" }));
    fireEvent.change(screen.getByLabelText("Entrada da NF-e"), { target: { value: "ESPONJA X" } });
    fireEvent.change(screen.getByLabelText("Saída para a planilha"), { target: { value: "esponja" } });
    fireEvent.click(screen.getByRole("button", { name: /adicionar/i }));
    expect(screen.getByText(/ESPONJA X/)).toBeInTheDocument();
  });
});

describe("<RhDemo />", () => {
  it("avança um candidato no pipeline", () => {
    render(<RhDemo />);
    fireEvent.click(screen.getByRole("button", { name: /avançar candidato 01 para triagem/i }));
    const triagem = screen.getByRole("region", { name: "Triagem" });
    expect(triagem).toHaveTextContent("Candidato 01");
  });

  it("só permite enviar ao Protheus com ao menos um documento aprovado", () => {
    render(<RhDemo />);
    fireEvent.click(screen.getByRole("tab", { name: /pré-admissão/i }));
    const enviar = screen.getByRole("button", { name: /enviar ao protheus/i });
    expect(enviar).toBeDisabled();
    fireEvent.click(screen.getByLabelText("Documento de identificação"));
    expect(enviar).toBeEnabled();
    fireEvent.click(enviar);
    expect(screen.getByText(/tentativa 1/i)).toBeInTheDocument();
  });
});

describe("<PortalDemo />", () => {
  it("navega entre as telas e abre a IA com resposta que leva à tela certa", async () => {
    const { PortalDemo } = await import("@/components/demos/portal-demo");
    render(<PortalDemo />);
    expect(screen.getByText("Dados fictícios")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("tab", { name: "Análise de Obras" }));
    expect(screen.getAllByText(/Mapa de calor/).length).toBeGreaterThan(0);
    fireEvent.click(screen.getByRole("button", { name: "Abrir IA de Engenharia" }));
    fireEvent.click(screen.getByRole("button", { name: "Onde vejo a economia das cotações?" }));
    fireEvent.click(screen.getByRole("button", { name: "Abrir Cotações" }));
    expect(screen.getByText("Economia líquida por obra")).toBeInTheDocument();
  });

  it("mostra o detalhe da célula do mapa de calor", async () => {
    const { PortalDemo } = await import("@/components/demos/portal-demo");
    render(<PortalDemo />);
    fireEvent.click(screen.getByRole("tab", { name: "Análise de Obras" }));
    fireEvent.click(screen.getByRole("button", { name: /2.0 — Superestrutura, Jun\/26: 104%/ }));
    expect(screen.getByText(/104% do orçamento consumido/)).toBeInTheDocument();
  });
});

describe("<PortalAprovacoes />", () => {
  it("decide a alçada: limite, segregação de funções e ausência de regra", async () => {
    const { decidirAlcada, medicoesParaAprovar, pessoas } = await import("@/data/demos/aprovacoes");
    const [m5] = medicoesParaAprovar;
    const quem = (id: string) => pessoas.find((p) => p.id === id)!;
    expect(decidirAlcada(m5, quem("ana")).motivo).toBe("LIMITE_EXCEDIDO");
    expect(decidirAlcada(m5, quem("bruno")).motivo).toBe("PERMITIDA");
    expect(decidirAlcada(m5, quem("carla")).motivo).toBe("SEGREGACAO_DE_FUNCOES");
    expect(decidirAlcada(m5, quem("diego")).motivo).toBe("ALCADA_NAO_ENCONTRADA");
    expect(decidirAlcada(m5, quem("elisa")).alcada?.limite).toBeNull();
  });

  it("registra a decisão na auditoria e aprova quando elegível", async () => {
    const { PortalDemo } = await import("@/components/demos/portal-demo");
    render(<PortalDemo />);
    fireEvent.click(screen.getByRole("tab", { name: "Aprovações" }));
    fireEvent.change(screen.getByLabelText("Aprovador"), { target: { value: "bruno" } });
    expect(screen.getByRole("status")).toHaveTextContent("Aprovação permitida");
    fireEvent.click(screen.getByRole("button", { name: "Tentar aprovar" }));
    expect(screen.getByRole("button", { name: "Medição já aprovada" })).toBeDisabled();
    expect(screen.getByText(/Bruno Lima · Medição 05.*concedida/)).toBeInTheDocument();
  });
});

describe("<PortalDemo /> telas visuais", () => {
  it("abre cada tela do menu e a obra a partir da lista", async () => {
    const { PortalDemo } = await import("@/components/demos/portal-demo");
    render(<PortalDemo />);
    for (const nome of ["Dashboard", "Obras", "Controle de Diárias", "Imóveis", "Checklist", "Manutenção", "Documentos", "Configurações"]) {
      fireEvent.click(screen.getByRole("tab", { name: nome }));
      expect(screen.getByRole("tab", { name: nome })).toHaveAttribute("aria-selected", "true");
    }
    fireEvent.click(screen.getByRole("tab", { name: "Obras" }));
    fireEvent.click(screen.getByRole("button", { name: "Abrir Residencial Alfa" }));
    expect(screen.getByText("Detalhe da obra", { selector: "p" })).toBeInTheDocument();
  });
});
