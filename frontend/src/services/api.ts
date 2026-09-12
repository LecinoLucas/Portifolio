import type {
  CriarContatoDTO,
  ContatoRegistrado,
  ProjetoDTO,
  FocoPerfil,
  RespostaSucessoCanonica,
  RespostaErroCanonica,
} from "@portfolio/contracts";
import { projetos as projetosLocais, projetoPorSlug } from "@/data/projetos";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

export class ApiCliente {
  private async requisitar<T>(caminho: string, options?: RequestInit): Promise<T> {
    const url = `${API_BASE_URL}${caminho}`;
    const headers = {
      "Content-Type": "application/json",
      ...(options?.headers || {}),
    };

    const res = await fetch(url, { ...options, headers });

    if (!res.ok) {
      let erroCanonica: RespostaErroCanonica;
      try {
        erroCanonica = await res.json();
      } catch {
        throw new Error(`Falha na requisição HTTP: ${res.status} ${res.statusText}`);
      }
      throw new Error(erroCanonica.mensagem || "Erro na comunicação com a API.");
    }

    return res.json();
  }

  async obterProjetos(focoPerfil?: FocoPerfil): Promise<ProjetoDTO[]> {
    try {
      const query = focoPerfil && focoPerfil !== "ambos" ? `?focoPerfil=${focoPerfil}` : "";
      const resposta = await this.requisitar<RespostaSucessoCanonica<ProjetoDTO[]>>(
        `/api/v1/projects${query}`,
      );
      return resposta.dados;
    } catch {
      // Fallback de contingência / offline caso a API esteja em repouso
      let resultado = projetosLocais as unknown as ProjetoDTO[];
      if (focoPerfil && focoPerfil !== "ambos") {
        resultado = resultado.filter(
          (p) => p.focoPerfil === focoPerfil || p.focoPerfil === "ambos",
        );
      }
      return resultado;
    }
  }

  async obterProjetoPorSlug(slug: string): Promise<ProjetoDTO | undefined> {
    try {
      const resposta = await this.requisitar<RespostaSucessoCanonica<ProjetoDTO>>(
        `/api/v1/projects/${slug}`,
      );
      return resposta.dados;
    } catch {
      return projetoPorSlug(slug) as unknown as ProjetoDTO | undefined;
    }
  }

  async enviarContato(dados: CriarContatoDTO): Promise<ContatoRegistrado> {
    const resposta = await this.requisitar<RespostaSucessoCanonica<ContatoRegistrado>>(
      "/api/v1/contact",
      {
        method: "POST",
        body: JSON.stringify(dados),
      },
    );
    return resposta.dados;
  }

  async verificarConexao(): Promise<boolean> {
    try {
      const res = await fetch(`${API_BASE_URL}/health`, { method: "GET", signal: AbortSignal.timeout(2000) });
      return res.ok;
    } catch {
      return false;
    }
  }
}

export const api = new ApiCliente();
