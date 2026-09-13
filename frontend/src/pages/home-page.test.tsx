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

    // Título profissional oficial exato
    expect(
      screen.getByText(/Analista de Sistemas \| TOTVS Protheus \| Processos, Integrações e Desenvolvimento/i)
    ).toBeInTheDocument();

    // Asserção negativa: não deve conter títulos desaprovados
    expect(
      screen.queryByText(/Analista de Sistemas & Desenvolvedor Full Stack/i)
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText(/Desenvolvedor Full Stack Júnior/i)
    ).not.toBeInTheDocument();

    // Mensagem central
    expect(
      screen.getByText(/Conheço a operação, entendo a regra de negócio e transformo problemas reais/i)
    ).toBeInTheDocument();

    // Conceito principal "Da operação à arquitetura"
    expect(
      screen.getAllByText(/Da operação à arquitetura/i).length
    ).toBeGreaterThan(0);

    // Papel da IA com mensagem humana, direta e sem promessa de produtividade por arquitetura
    expect(
      screen.getByText(/Utilizo IA como ferramenta de apoio ao desenvolvimento, à revisão e aos testes\. As decisões sobre requisitos, regras de negócio, arquitetura, segurança e validação continuam sob minha responsabilidade\./i)
    ).toBeInTheDocument();

    // Asserção negativa: frase antiga de IA removida
    expect(
      screen.queryByText(/A inteligência artificial amplia a produtividade de quem domina arquitetura/i)
    ).not.toBeInTheDocument();

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

    // Nota informativa sobre o currículo oficial em PDF (sem botão ativo de download)
    expect(
      screen.getByText(/O documento formatado é disponibilizado mediante solicitação ou atualizado para cada processo seletivo/i)
    ).toBeInTheDocument();

    // Asserção negativa: zero botões ativos de download de PDF
    expect(screen.queryByRole("link", { name: /download|baixar/i })).not.toBeInTheDocument();

    // Pergunta principal do Mapa de Atuação
    expect(
      screen.getByRole("heading", {
        name: /qual desafio sua empresa precisa resolver\?/i,
      })
    ).toBeInTheDocument();
  });

  it("2. Apresenta o Resumo Profissional Compacto com os 5 pontos-chave e linguagem precisa", () => {
    renderHomePage();

    expect(screen.getByText(/Sistemas & Suporte Operacional/i)).toBeInTheDocument();
    expect(screen.getByText(/~6 Meses de Desenvolvimento Prático/i)).toBeInTheDocument();
    expect(screen.getAllByText(/TOTVS Protheus e TMS/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Grupos e Filiais Atendidos/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/Engenharia de Software e Apoio de IA/i)).toBeInTheDocument();

    // Asserções negativas de linguagem artificial
    expect(screen.queryByText(/Core & TMS/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/filiais corporativas/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/rotinas de backoffice/i)).not.toBeInTheDocument();
  });

  it("3. Altera o painel pelo Mapa de Atuação nos 4 eixos canônicos com regras fiscais e bancárias estritas", () => {
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

    // Eixo 1: Protheus e processos
    expect(
      screen.getByRole("heading", { name: /organizar rotinas no totvs protheus/i })
    ).toBeInTheDocument();
    expect(screen.getAllByText(/TOTVS Protheus e TMS/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/Lançamento Padrão — LP/i)).toBeInTheDocument();

    // Clica no Eixo 2: Fiscal
    const tabFiscal = screen.getByRole("tab", {
      name: /rotinas fiscais, notas e auditoria/i,
    });
    fireEvent.click(tabFiscal);

    expect(
      screen.getByRole("heading", { name: /rotinas fiscais, notas e auditoria/i })
    ).toBeInTheDocument();
    expect(screen.getByTestId("location-display")).toHaveTextContent("?foco=fiscal");

    // Competências fiscais solicitadas presentes
    expect(screen.getAllByText(/Emissão de NF-e/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Nota fiscal de entrada/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/^CFOP$/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Nota de devolução/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Remessa para troca/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Análise de inconsistências/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Participação em atividades da reforma tributária/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Conhecimento de CT-e/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/LMC \(Livro de Movimentação de Combustíveis\)/i).length).toBeGreaterThan(0);

    // Asserções negativas obrigatórias do eixo fiscal
    expect(screen.queryByText(/NFC-e/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/MDF-e/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/IBS/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/CBS/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Imposto Seletivo/i)).not.toBeInTheDocument();

    // Clica no Eixo 3: Integrações
    const tabIntegracoes = screen.getByRole("tab", {
      name: /integrar bancos, apis e certificados digitais/i,
    });
    fireEvent.click(tabIntegracoes);

    expect(
      screen.getByRole("heading", { name: /integrar bancos, apis e certificados digitais/i })
    ).toBeInTheDocument();
    expect(screen.getByTestId("location-display")).toHaveTextContent("?foco=integracoes");

    // Asserções do canal bancário
    expect(screen.getAllByText(/Central de Integrações Bancárias/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Canal mTLS e Certificados Digitais/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Autenticação OAuth 2.0/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/API de Consulta de Extratos/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Certificado para Emissão de Boletos/i).length).toBeGreaterThan(0);

    // Asserções negativas da integração bancária: sem A1, PEM, CRT, KEY, webhooks
    expect(screen.queryByText(/certificado a1/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/\.pem/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/\.crt/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/\.key/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/webhooks/i)).not.toBeInTheDocument();

    // Clica no Eixo 4: Desenvolvimento
    const tabDev = screen.getByRole("tab", {
      name: /desenvolvimento de software e automações/i,
    });
    fireEvent.click(tabDev);

    expect(
      screen.getByRole("heading", { name: /desenvolvimento de software e automações/i })
    ).toBeInTheDocument();
    expect(screen.getByTestId("location-display")).toHaveTextContent("?foco=desenvolvimento");
    expect(screen.getAllByText(/Testes Automatizados/i).length).toBeGreaterThan(0);

    // Asserção negativa: sem testes determinísticos
    expect(screen.queryByText(/testes determinísticos/i)).not.toBeInTheDocument();
  });

  it("4. Apresenta a Visão Curta da Trajetória com evolução factual e destaques aprovados", () => {
    renderHomePage();

    expect(screen.getByText("Atento")).toBeInTheDocument();
    expect(screen.getByText("I5 Sistemas")).toBeInTheDocument();
    expect(screen.getByText("Pioneira Colchões")).toBeInTheDocument();
    expect(screen.getByText("Rede Marajó")).toBeInTheDocument();
    expect(screen.getByText("Transição para Dev")).toBeInTheDocument();

    // Asserções negativas: I5 não tem "rotinas comerciais" e Marajó não tem "filiais corporativas"
    const textI5 = screen.getByText(/Implantação de sistemas desktop\/web/i);
    expect(textI5.textContent).not.toMatch(/rotinas comerciais/i);

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
      screen.getByRole("heading", { name: /rotinas fiscais, notas e auditoria/i })
    ).toBeInTheDocument();

    const tabFiscal = screen.getByRole("tab", {
      name: /rotinas fiscais, notas e auditoria/i,
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
      name: /integrar bancos, apis e certificados digitais/i,
    });

    fireEvent.keyDown(tabIntegracoes, { key: "Enter", code: "Enter" });

    expect(
      screen.getByRole("heading", { name: /integrar bancos, apis e certificados digitais/i })
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

    fireEvent.click(screen.getByRole("tab", { name: /rotinas fiscais/i }));
    fireEvent.click(screen.getByRole("tab", { name: /integrar bancos/i }));
    fireEvent.click(screen.getByRole("tab", { name: /desenvolvimento de software/i }));

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
