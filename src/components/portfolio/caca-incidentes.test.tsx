import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { CacaIncidentes } from "./caca-incidentes";
import { incidentes } from "@/data/incidentes";

describe("CacaIncidentes", () => {
  it("mostra a causa raiz ao resolver um incidente e conta o progresso", () => {
    render(<CacaIncidentes aoIr={() => {}} />);
    expect(screen.getByText("0/4 resolvidos")).toBeTruthy();
    fireEvent.click(screen.getByRole("button", { name: /Resolver: CNAB rejeitado/ }));
    expect(screen.getByText("1/4 resolvidos")).toBeTruthy();
    expect(screen.getAllByText(/Parâmetro da conta ou do convênio/).length).toBeGreaterThan(0);
  });

  it("ao resolver todos, oferece ir para a experiência e permite reiniciar", () => {
    const aoIr = vi.fn();
    render(<CacaIncidentes aoIr={aoIr} />);
    for (const i of incidentes) fireEvent.click(screen.getByRole("button", { name: `Resolver: ${i.rotulo}` }));
    fireEvent.click(screen.getByRole("button", { name: "Ver minha experiência" }));
    expect(aoIr).toHaveBeenCalledWith("experiencia");
    fireEvent.click(screen.getByRole("button", { name: /Reiniciar/ }));
    expect(screen.getByText("0/4 resolvidos")).toBeTruthy();
  });
});
