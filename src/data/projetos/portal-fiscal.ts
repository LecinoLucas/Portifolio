import type { Projeto } from "@/types";

/**
 * Fonte: informado pelo autor. O repositório PortalFiscal só tem um README, então os detalhes
 * técnicos ficam mínimos até o código estar acessível para conferência.
 */
export const portalFiscal: Projeto = {
  slug: "portal-fiscal",
  titulo: "Portal Fiscal",
  categoria: "Processamento fiscal · SEFAZ",
  destaque: true,
  situacao: "construido",
  situacaoDetalhe: "Pronto, ainda sem uso em produção.",
  resumo: "Sistema fiscal que busca notas fiscais na SEFAZ em lote.",
  stack: ["Node.js", "NestJS", "SEFAZ"],
  detalhe: {
    contexto: "As notas fiscais de uma empresa precisam ser obtidas da SEFAZ para alimentar o processo fiscal.",
    problema: "Buscar as notas fiscais direto na SEFAZ, em lote, de forma automática.",
    participacao: "Desenvolvimento do sistema, incluindo a busca de notas na SEFAZ.",
    solucao: "Consulta de notas fiscais na SEFAZ em lote.",
    resultado: "Sistema pronto, ainda sem uso em produção.",
  },
};
