import { describe, expect, it, beforeEach, vi } from "vitest";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { MemoryRouter, useLocation } from "react-router-dom";
import { HomePage } from "@/pages/home-page";
import { AppContent } from "@/app/App";
import { ProvedorTema } from "@/app/theme-provider";

function renderHomePage(initialRoute = "/") {
  return render(
    <ProvedorTema>
      <MemoryRouter initialEntries={[initialRoute]}>
        <HomePage />
      </MemoryRouter>
    </ProvedorTema>
  );
}

function renderAppWithRouter(initialRoute = "/") {
  return render(
    <ProvedorTema>
      <MemoryRouter initialEntries={[initialRoute]}>
        <AppContent />
      </MemoryRouter>
    </ProvedorTema>
  );
}

describe("Fase 2: Currículo Digital por Evidências (Home Page)", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("1. Renderiza a Home com títulos factuais, mensagem central e 3 ações principais", () => {
    renderHomePage();

    // Título profissional oficial
    expect(
      screen.getByText(/Analista de Sistemas & Desenvolvedor Full Stack/i)
    ).toBeInTheDocument();

    // Mensagem central
    expect(
      screen.getByText(/Conheço a operação, entendo a regra de negócio e transformo problemas reais/i)
    ).toBeInTheDocument();

    // Conceito principal "Da operação à arquitetura"
    expect(
      screen.getAllByText(/Da operação à arquitetura/i).length
    ).toBeGreaterThan(0);

    // Papel da IA com posicionamento profissional sóbrio
    expect(
      screen.getByText(/A inteligência artificial amplia a produtividade de quem domina arquitetura, engenharia e regras de negócio/i)
    ).toBeInTheDocument();

    // As 3 ações principais obrigatórias
    const linkTrajetoria = screen.getByRole("link", {
      name: /conhecer minha trajetória/i,
    });
    expect(linkTrajetoria).toHaveAttribute("href", "/experiencia");

    const linkProjetos = screen.getByRole("link", {
      name: /ver casos reais/i,
    });
    expect(linkProjetos).toHaveAttribute("href", "/projetos");

    const linkContato = screen.getByRole("link", {
      name: /entrar em contato/i,
    });
    expect(linkContato).toHaveAttribute("href", "/contato");

    // Nota informativa sobre o currículo oficial em PDF (sem botão falso)
    expect(
      screen.getByText(/O currículo oficial em PDF está sendo atualizado para refletir esta nova organização profissional/i)
    ).toBeInTheDocument();

    // Pergunta principal do Mapa de Atuação
    expect(
      screen.getByRole("heading", {
        name: /qual desafio sua empresa precisa resolver\?/i,
      })
    ).toBeInTheDocument();
  });

  it("2. Apresenta o Resumo Profissional Compacto com os 5 pontos-chave", () => {
    renderHomePage();

    expect(screen.getByText(/Sistemas & Suporte Operacional/i)).toBeInTheDocument();
    expect(screen.getByText(/~6 Meses de Desenvolvimento Prático/i)).toBeInTheDocument();
    expect(screen.getByText(/TOTVS Protheus P12 \(Core & TMS\)/i)).toBeInTheDocument();
    expect(screen.getByText(/Filiais, Caixas & Regras Complexas/i)).toBeInTheDocument();
    expect(screen.getByText(/Arquitetura & Engenharia com IA/i)).toBeInTheDocument();
  });

  it("3. Altera o painel pelo Mapa de Atuação nos 4 eixos e sincroniza seleção com a URL", () => {
    function TestLocationDisplay() {
      const location = useLocation();
      return <div data-testid="location-display">{location.search}</div>;
    }

    render(
      <ProvedorTema>
        <MemoryRouter initialEntries={["/"]}>
          <HomePage />
          <TestLocationDisplay />
        </MemoryRouter>
      </ProvedorTema>
    );

    // Eixo 1: Protheus & Backoffice
    expect(
      screen.getByRole("heading", { name: /organizar processos no protheus/i })
    ).toBeInTheDocument();

    // Clica no Eixo 2: Integrações & APIs
    const tabIntegracoes = screen.getByRole("tab", {
      name: /integrar bancos, apis e certificados/i,
    });
    fireEvent.click(tabIntegracoes);

    expect(
      screen.getByRole("heading", { name: /integrar bancos, apis e certificados/i })
    ).toBeInTheDocument();
    expect(
      screen.getByTestId("location-display")
    ).toHaveTextContent("?foco=integracoes");

    // Clica no Eixo 3: Automação & IA Aplicada
    const tabFiscal = screen.getByRole("tab", {
      name: /automatizar auditoria fiscal e rotinas com ia/i,
    });
    fireEvent.click(tabFiscal);

    expect(
      screen.getByRole("heading", { name: /automatizar auditoria fiscal e rotinas com ia/i })
    ).toBeInTheDocument();
    expect(
      screen.getByTestId("location-display")
    ).toHaveTextContent("?foco=fiscal");

    // Clica no Eixo 4: Engenharia de Software
    const tabDev = screen.getByRole("tab", {
      name: /construir software sustentável e arquitetura limpa/i,
    });
    fireEvent.click(tabDev);

    expect(
      screen.getByRole("heading", { name: /transformar requisitos em software/i })
    ).toBeInTheDocument();
    expect(
      screen.getByTestId("location-display")
    ).toHaveTextContent("?foco=desenvolvimento");
  });

  it("4. Apresenta a Visão Curta da Trajetória com evolução dos 5 marcos e botão para completa", () => {
    renderHomePage();

    expect(screen.getByText("Atento")).toBeInTheDocument();
    expect(screen.getByText("I5 Sistemas")).toBeInTheDocument();
    expect(screen.getByText("Pioneira Colchões")).toBeInTheDocument();
    expect(screen.getByText("Rede Marajó")).toBeInTheDocument();
    expect(screen.getByText("Transição para Dev")).toBeInTheDocument();

    const linkTrajetoriaCompleta = screen.getByRole("link", {
      name: /ver trajetória completa/i,
    });
    expect(linkTrajetoriaCompleta).toHaveAttribute("href", "/experiencia");
  });

  it("5. Apresenta as Evidências em Destaque com 4 casos reais e LES secundário", () => {
    renderHomePage();

    expect(screen.getByText(/Central de Integrações Bancárias/i)).toBeInTheDocument();
    expect(screen.getByText(/Analista Fiscal Automatizado/i)).toBeInTheDocument();
    expect(screen.getByText(/Portal RH/i)).toBeInTheDocument();
    expect(screen.getByText(/Portal de Engenharia/i)).toBeInTheDocument();
    expect(screen.getByText(/Lucas Engineering Standard/i)).toBeInTheDocument();
  });

  it("6. Suporta navegação voltar/avançar pela query string da URL", () => {
    renderHomePage("/?foco=fiscal");

    expect(
      screen.getByRole("heading", { name: /automatizar auditoria fiscal e rotinas com ia/i })
    ).toBeInTheDocument();

    const tabFiscal = screen.getByRole("tab", {
      name: /automatizar auditoria fiscal e rotinas com ia/i,
    });
    expect(tabFiscal).toHaveAttribute("aria-selected", "true");
  });

  it("7. Suporta navegação por teclado e semântica acessível (role=tablist/tab)", () => {
    renderHomePage();

    const tablist = screen.getByRole("tablist", {
      name: /opções de desafios e áreas de atuação/i,
    });
    expect(tablist).toBeInTheDocument();

    const tabIntegracoes = screen.getByRole("tab", {
      name: /integrar bancos, apis e certificados/i,
    });

    fireEvent.keyDown(tabIntegracoes, { key: "Enter", code: "Enter" });

    expect(
      screen.getByRole("heading", { name: /integrar bancos, apis e certificados/i })
    ).toBeInTheDocument();
  });

  it("8. Garante ausência total de '500 usuários' na página principal", () => {
    const { container } = renderHomePage();
    expect(container.textContent).not.toMatch(/500\s*usuários/i);
    expect(container.textContent).not.toMatch(/500\s*usuarios/i);
  });

  it("9. Garante ausência total de manifestos agressivos contra low-code", () => {
    const { container } = renderHomePage();
    expect(container.textContent).not.toMatch(/ilusão do low-code/i);
    expect(container.textContent).not.toMatch(/superando o low-code/i);
    expect(container.textContent).not.toMatch(/contra low-code/i);
    expect(container.textContent).not.toMatch(/apaixonado por tecnologia/i);
  });

  it("10. Não exibe dados bancários ou fiscais reais na página principal", () => {
    const { container } = renderHomePage("/?foco=integracoes");
    expect(container.textContent).not.toMatch(/\d{4}\s\d{4}\s\d{4}\s\d{4}\s\d{4}/);
    expect(
      screen.getByText(/Não há simulação de contas, CNPJs, certificados ou movimentações financeiras reais/i)
    ).toBeInTheDocument();
  });

  it("11. Executa 100% no cliente sem chamadas externas de rede", () => {
    const fetchSpy = vi.spyOn(globalThis, "fetch");
    renderHomePage();

    fireEvent.click(screen.getByRole("tab", { name: /automatizar auditoria fiscal/i }));
    fireEvent.click(screen.getByRole("tab", { name: /integrar bancos/i }));
    fireEvent.click(screen.getByRole("tab", { name: /construir software/i }));

    expect(fetchSpy).not.toHaveBeenCalled();
  });

  it("12. Preserva navegação e redirecionamentos das rotas no App", () => {
    renderAppWithRouter("/sobre");
    expect(screen.getByRole("heading", { name: /da operação à arquitetura de software/i })).toBeInTheDocument();

    cleanup();
    renderAppWithRouter("/experiencia");
    expect(screen.getByRole("heading", { name: /da operação à arquitetura de software/i })).toBeInTheDocument();

    cleanup();
    renderAppWithRouter("/projetos");
    expect(screen.getByRole("heading", { name: /casos reais & evidências de software/i })).toBeInTheDocument();

    cleanup();
    renderAppWithRouter("/contato");
    expect(screen.getByRole("heading", { name: /contato & propostas/i })).toBeInTheDocument();
  });
});
