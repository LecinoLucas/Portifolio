import { describe, expect, it, beforeEach, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import BankingDemoPage from "@/pages/banking-demo-page";

function renderBankingDemo() {
  return render(
    <MemoryRouter>
      <BankingDemoPage />
    </MemoryRouter>
  );
}

describe("Laboratório BankingProtheus (/projetos/banking-protheus/demo)", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("renderiza o cabeçalho com aviso de dados simulados e contas conectadas", () => {
    renderBankingDemo();

    expect(
      screen.getByRole("heading", { level: 1, name: /bankingprotheus/i })
    ).toBeInTheDocument();

    expect(
      screen.getByText(/dados financeiros, contas e certificados são simulados/i)
    ).toBeInTheDocument();

    expect(screen.getAllByText(/Itaú Unibanco/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/mTLS Conectado/i)).toBeInTheDocument();
  });

  it("executa a conciliação automática, aponta divergência de juros e permite acatar", () => {
    renderBankingDemo();

    expect(screen.getByText(/TIT-08912/i)).toBeInTheDocument();
    const btnExecutar = screen.getByRole("button", {
      name: /executar conciliação automática/i,
    });
    expect(btnExecutar).toBeInTheDocument();

    // Executa conciliação automática
    fireEvent.click(btnExecutar);

    // Mensagem de feedback exibida
    expect(
      screen.getByText(/conciliação automática processada/i)
    ).toBeInTheDocument();

    // Identificou divergência no título TIT-08914
    expect(
      screen.getByText(/débito bancário com r\$ 28,50 de acréscimo/i)
    ).toBeInTheDocument();

    // Acata os juros
    const btnAcatar = screen.getByRole("button", {
      name: /acatar juros e conciliar título/i,
    });
    fireEvent.click(btnAcatar);

    expect(
      screen.getByText(/divergência de juros do título tit-08914 acatada com sucesso/i)
    ).toBeInTheDocument();

    // Botão restaurar dados restaura estado inicial
    const btnRestaurar = screen.getByRole("button", { name: /restaurar dados/i });
    fireEvent.click(btnRestaurar);

    expect(screen.getByRole("button", { name: /executar conciliação automática/i })).toBeInTheDocument();
  });

  it("navega para a aba DDA e autoriza boleto eletrônico", () => {
    renderBankingDemo();

    const abaDda = screen.getByRole("button", { name: /painel dda \(boletos\)/i });
    fireEvent.click(abaDda);

    expect(
      screen.getByRole("heading", { name: /painel dda — débito direto autorizado/i })
    ).toBeInTheDocument();

    // Localiza um boleto pendente e autoriza
    const btnAutorizar = screen.getAllByRole("button", { name: /autorizar débito/i });
    expect(btnAutorizar.length).toBeGreaterThan(0);

    fireEvent.click(btnAutorizar[0]);

    // Verifica que o status atualizou para Pronto p/ Remessa
    expect(screen.getAllByText(/pronto p\/ remessa/i).length).toBeGreaterThan(0);
  });

  it("navega para a aba de segurança mTLS Itaú e exibe fluxo criptográfico", () => {
    renderBankingDemo();

    const abaSeguranca = screen.getByRole("button", { name: /arquitetura mtls itaú/i });
    fireEvent.click(abaSeguranca);

    expect(
      screen.getByRole("heading", { name: /arquitetura de segurança bancária: itaú mtls \+ oauth 2\.0/i })
    ).toBeInTheDocument();

    expect(screen.getByText(/canal criptografado mtls \(mutual tls\)/i)).toBeInTheDocument();
    expect(screen.getByText(/autenticação oauth 2\.0 \(client credentials\)/i)).toBeInTheDocument();
    expect(screen.getByText(/consumo de apis & normalização protheus/i)).toBeInTheDocument();
  });

  it("executa 100% no cliente sem disparar requisições de rede", () => {
    const fetchSpy = vi.spyOn(globalThis, "fetch");
    renderBankingDemo();

    // Ações de usuário
    fireEvent.click(screen.getByRole("button", { name: /painel dda/i }));
    fireEvent.click(screen.getByRole("button", { name: /arquitetura mtls/i }));
    fireEvent.click(screen.getByRole("button", { name: /conciliação de extrato/i }));

    expect(fetchSpy).not.toHaveBeenCalled();
  });
});
