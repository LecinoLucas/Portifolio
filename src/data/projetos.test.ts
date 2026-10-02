import { describe, expect, it } from "vitest";
import { projetos, projetoPorSlug, projetosDestaque } from "@/data/projetos";
import { carreira } from "@/data/experiencias";
import { formacao } from "@/data/formacao";
import { tecnologias } from "@/data/tecnologias";

describe("dados de projetos", () => {
  it("todo projeto tem os campos essenciais preenchidos", () => {
    for (const projeto of projetos) {
      expect(projeto.slug, "slug").toBeTruthy();
      expect(projeto.titulo, `titulo de ${projeto.slug}`).toBeTruthy();
      expect(projeto.resumo.length, `resumo de ${projeto.slug}`).toBeGreaterThan(20);
      expect(projeto.stack.length, `stack de ${projeto.slug}`).toBeGreaterThan(0);
    }
  });

  it("todo projeto tem o detalhamento completo (contrato do drawer)", () => {
    for (const { slug, detalhe } of projetos) {
      expect(detalhe.contexto, `contexto de ${slug}`).toBeTruthy();
      expect(detalhe.problema, `problema de ${slug}`).toBeTruthy();
      expect(detalhe.participacao, `participacao de ${slug}`).toBeTruthy();
      expect(detalhe.solucao, `solucao de ${slug}`).toBeTruthy();
      expect(detalhe.arquitetura, `arquitetura de ${slug}`).toBeTruthy();
      expect(detalhe.resultado, `resultado de ${slug}`).toBeTruthy();
      expect(detalhe.desafios.length, `desafios de ${slug}`).toBeGreaterThan(0);
    }
  });

  it("não há slugs duplicados", () => {
    const slugs = projetos.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("projetoPorSlug resolve e projetosDestaque é subconjunto", () => {
    expect(projetoPorSlug("les")?.titulo).toContain("Engineering Standard");
    expect(projetoPorSlug("inexistente")).toBeUndefined();
    expect(projetosDestaque.every((p) => p.destaque)).toBe(true);
  });
});

describe("situação e demonstrações", () => {
  it("ImportNFe está em produção e o Portal RH está entregue, ambos com demonstração", () => {
    expect(projetoPorSlug("importnfe")).toMatchObject({ situacao: "producao", demo: "importnfe" });
    expect(projetoPorSlug("portal-rh")).toMatchObject({ situacao: "entregue", demo: "rh" });
  });

  it("não cita o nome de clientes nem regras de acréscimo de preço", () => {
    const texto = JSON.stringify(projetos).toLowerCase();
    expect(texto).not.toContain("bc distribuidora");
    expect(texto).not.toContain("acréscimo");
  });
});

describe("dados de apoio", () => {
  it("cada etapa da carreira tem destaques, ferramentas e números", () => {
    expect(carreira.length).toBeGreaterThan(0);
    for (const etapa of carreira) {
      expect(etapa.destaques.length, etapa.id).toBeGreaterThan(0);
      expect(etapa.ferramentas.length, etapa.id).toBeGreaterThan(0);
      expect(etapa.numeros.length, etapa.id).toBeGreaterThan(0);
      expect(etapa.levei, etapa.id).toBeTruthy();
    }
  });

  it("a carreira termina em desenvolvimento e inclui a Rede Marajó", () => {
    expect(carreira[carreira.length - 1].id).toBe("desenvolvimento");
    expect(carreira.some((e) => e.organizacao.includes("Rede Marajó"))).toBe(true);
    expect(carreira.some((e) => e.id === "desenvolvimento" && (e.sistemas?.length ?? 0) > 0)).toBe(true);
  });

  it("etapas têm período com ano ou marcador de hoje (sem placeholders)", () => {
    for (const etapa of carreira) {
      expect(etapa.quando, etapa.id).toMatch(/\d{4}|Hoje/);
      expect(/(placeholder|todo|ambiente corporativo)/i.test(etapa.quando + etapa.organizacao)).toBe(false);
    }
  });

  it("formação está preenchida", () => {
    expect(formacao.length).toBeGreaterThan(0);
    for (const f of formacao) {
      expect(f.curso && f.instituicao && f.periodo && f.status).toBeTruthy();
    }
  });

  it("tecnologias têm domínio do dia a dia e evolução, sem nível exagerado", () => {
    expect(tecnologias.diaADia.length).toBeGreaterThan(0);
    expect(tecnologias.emEvolucao.length).toBeGreaterThan(0);
    const nomes = tecnologias.diaADia.map((t) => t.nome);
    for (const base of ["Node.js", "React", "JavaScript"]) expect(nomes).toContain(base);
    // não deve listar como domínio o que está em evolução
    for (const nome of tecnologias.emEvolucao) expect(nomes).not.toContain(nome);
  });
});
