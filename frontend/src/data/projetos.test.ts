import { describe, expect, it } from "vitest";
import { projetos, projetoPorSlug, projetosDestaque } from "@/data/projetos";
import { experiencias } from "@/data/experiencias";
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

describe("dados de apoio", () => {
  it("experiências têm destaques e tags", () => {
    expect(experiencias.length).toBeGreaterThan(0);
    for (const exp of experiencias) {
      expect(exp.destaques.length).toBeGreaterThan(0);
      expect(exp.tags.length).toBeGreaterThan(0);
    }
  });

  it("experiências reais têm empresa e período com ano (sem placeholders)", () => {
    const cargos = experiencias.filter((e) => e.tipo !== "direcao");
    expect(cargos.some((e) => e.organizacao.includes("Rede Marajó"))).toBe(true);
    for (const exp of cargos) {
      expect(exp.periodo, exp.cargo).toMatch(/\d{4}/);
      expect(/(placeholder|todo|ambiente corporativo)/i.test(exp.periodo + exp.organizacao)).toBe(
        false,
      );
    }
  });

  it("formação está preenchida", () => {
    expect(formacao.length).toBeGreaterThan(0);
    for (const f of formacao) {
      expect(f.curso && f.instituicao && f.periodo && f.status).toBeTruthy();
    }
  });

  it("grupos de tecnologia não são vazios", () => {
    for (const grupo of tecnologias) {
      expect(grupo.itens.length, grupo.dominio).toBeGreaterThan(0);
    }
  });
});
