import { describe, expect, it, beforeEach, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ProtheusLabPage from "@/pages/protheus-lab-page";

function renderProtheusLab() {
  return render(
    <MemoryRouter>
      <ProtheusLabPage />
    </MemoryRouter>
  );
}

describe("Laboratório Protheus & Processos Corporativos (/processos-erp)", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("renderiza cabeçalho com aviso de dados corporativos simulados e módulos SIGA", () => {
    renderProtheusLab();

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /laboratório protheus & processos de negócio/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText(/rotinas reais de caixa, compras e documentos fiscais simuladas/i)
    ).toBeInTheDocument();

    expect(screen.getByText(/SIGAFIN · SIGACOM · SIGAFIS/i)).toBeInTheDocument();
  });

  it("permite digitar contagem física e homologar fechamento de caixa com CT2 contábil", () => {
    renderProtheusLab();

    const inputContagem = screen.getByLabelText(/contagem física/i);
    expect(inputContagem).toBeInTheDocument();

    // Altera o valor para conferência com sobra
    fireEvent.change(inputContagem, { target: { value: "3200" } });

    const btnHomologar = screen.getByRole("button", {
      name: /homologar fechamento \(ct2\)/i,
    });
    fireEvent.click(btnHomologar);

    // Verifica feedback de sobra e lote contábil
    expect(
      screen.getByText(/fechamento de caixa concluído com sobra/i)
    ).toBeInTheDocument();

    // Reinicia conferência
    const btnReiniciar = screen.getByRole("button", { name: /reiniciar simulação/i });
    fireEvent.click(btnReiniciar);

    expect(screen.getByRole("button", { name: /homologar fechamento \(ct2\)/i })).toBeInTheDocument();
  });

  it("navega para a aba de Compras & Entrada de NF-e e exibe de-para com pedidos SC7", () => {
    renderProtheusLab();

    const abaFiscal = screen.getByRole("button", {
      name: /compras & entrada de nf-e \(xml\)/i,
    });
    fireEvent.click(abaFiscal);

    expect(
      screen.getByRole("heading", {
        name: /entrada de nf-e & integração com compras/i,
      })
    ).toBeInTheDocument();

    expect(screen.getByText(/OLEO MOTOR SINTETICO 5W30/i)).toBeInTheDocument();
    expect(screen.getByText(/FILTRO COMBUSTIVEL DIESEL BLINDADO/i)).toBeInTheDocument();
    expect(screen.getByText(/PC-2026-0881 \(SIGACOM\)/i)).toBeInTheDocument();
  });

  it("navega para a aba da Reforma Tributária e exibe análise de IBS/CBS e Split Payment", () => {
    renderProtheusLab();

    const abaReforma = screen.getByRole("button", {
      name: /reforma tributária \(ibs\/cbs\)/i,
    });
    fireEvent.click(abaReforma);

    expect(
      screen.getByRole("heading", {
        name: /impactos da reforma tributária \(ec 132\/2023\) nos sistemas corporativos/i,
      })
    ).toBeInTheDocument();

    expect(screen.getByText(/CBS \(Contribuição sobre Bens e Serviços\)/i)).toBeInTheDocument();
    expect(screen.getByText(/IBS \(Imposto sobre Bens e Serviços\)/i)).toBeInTheDocument();
    expect(screen.getByText(/Split Payment Bancário Automatizado/i)).toBeInTheDocument();
  });

  it("executa 100% no cliente sem chamadas externas", () => {
    const fetchSpy = vi.spyOn(globalThis, "fetch");
    renderProtheusLab();

    fireEvent.click(screen.getByRole("button", { name: /compras & entrada/i }));
    fireEvent.click(screen.getByRole("button", { name: /reforma tributária/i }));
    fireEvent.click(screen.getByRole("button", { name: /conferência de caixa/i }));

    expect(fetchSpy).not.toHaveBeenCalled();
  });
});
