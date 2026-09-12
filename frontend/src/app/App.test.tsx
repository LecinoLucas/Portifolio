import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { App, AppContent } from "@/app/App";
import { ProvedorTema } from "@/app/theme-provider";
import { links } from "@/data/links";

function renderComRota(rotaInicial: string) {
  return render(
    <ProvedorTema>
      <MemoryRouter initialEntries={[rotaInicial]}>
        <AppContent />
      </MemoryRouter>
    </ProvedorTema>,
  );
}

describe("<App /> e Navegação por Rotas", () => {
  it("renderiza a Central Profissional na rota inicial com h1", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", { level: 1, name: /lecino\s*lucas/i }),
    ).toBeInTheDocument();
  });

  it("tem link de pular para o conteúdo (acessibilidade)", () => {
    render(<App />);
    expect(
      screen.getByRole("link", { name: /pular para o conteúdo/i }),
    ).toBeInTheDocument();
  });

  it("mostra o Mapa de Atuação e posicionamento central na rota inicial", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", { name: /qual desafio sua empresa precisa resolver\?/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Eu transformo processos reais em sistemas bem estruturados\./i)
    ).toBeInTheDocument();
  });

  it("disponibiliza botão do WhatsApp com link e mensagem codificada", () => {
    render(<App />);
    const linksWhatsApp = screen.getAllByRole("link", {
      name: /whatsapp/i,
    });
    expect(linksWhatsApp.length).toBeGreaterThan(0);
    expect(linksWhatsApp[0]).toHaveAttribute("href", links.whatsapp.href);
  });

  it("renderiza a página /sobre corretamente", () => {
    renderComRota("/sobre");
    expect(
      screen.getByRole("heading", { name: /sobre lecino lucas/i }),
    ).toBeInTheDocument();
  });

  it("renderiza a página /experiencia corretamente", () => {
    renderComRota("/experiencia");
    expect(
      screen.getByRole("heading", { name: /experiência & atuação corporativa/i }),
    ).toBeInTheDocument();
  });

  it("renderiza a página /projetos e lista os projetos", () => {
    renderComRota("/projetos");
    expect(
      screen.getByRole("heading", { name: /(módulos tecnológicos|projetos) & estudos de caso/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/Portal de Engenharia/i)).toBeInTheDocument();
  });

  it("renderiza a página /projetos/:slug com estudo de caso detalhado", () => {
    renderComRota("/projetos/portal-engenharia");
    expect(
      screen.getByRole("heading", { level: 1, name: /portal de engenharia/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/Contexto do Negócio/i)).toBeInTheDocument();
  });

  it("renderiza a página /competencias com os módulos especializados", () => {
    renderComRota("/competencias");
    expect(
      screen.getByRole("heading", { name: /especialidades & stack tecnológica/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/Analista de Sistemas \/ TOTVS Protheus/i)).toBeInTheDocument();
  });

  it("renderiza a página /contato com o canal WhatsApp e formulário, sem botão flutuante duplicado", () => {
    renderComRota("/contato");
    expect(
      screen.getByRole("heading", { name: /contato & propostas/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/WhatsApp Profissional/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Seu nome \*/i)).toBeInTheDocument();
    // O botão flutuante é ocultado na rota /contato para evitar redundância
    expect(
      screen.queryByLabelText(/Conversar via WhatsApp com Lecino Lucas/i),
    ).not.toBeInTheDocument();
  });

  it("renderiza página 404 em rota inexistente", () => {
    renderComRota("/rota-desconhecida-teste");
    expect(
      screen.getByRole("heading", { name: /rota não encontrada/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /voltar para a central profissional/i }),
    ).toBeInTheDocument();
  });
});
