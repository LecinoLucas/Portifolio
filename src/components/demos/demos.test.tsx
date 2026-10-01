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
