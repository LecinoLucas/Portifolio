import type { Principio } from "@/types";

export const principios: Principio[] = [
  {
    titulo: "Simplicidade antes de complexidade",
    descricao:
      "A solução mais simples que resolve o problema real vence. Complexidade só entra quando há necessidade comprovada.",
  },
  {
    titulo: "Design for evolution, not for imaginary scale",
    descricao:
      "Arquitetura preparada para crescer sem antecipar a solução de uma escala que ainda não existe.",
  },
  {
    titulo: "Código resolve problemas reais",
    descricao:
      "Entender o negócio antes de escrever a primeira linha. O código é meio, não fim.",
  },
  {
    titulo: "Segurança e performance fazem parte do design",
    descricao:
      "Não são etapas posteriores: entram nas decisões desde o início, por padrão.",
  },
  {
    titulo: "Arquitetura deve permitir evolução",
    descricao:
      "Fronteiras claras e baixo acoplamento para que trocar uma peça não signifique reescrever o sistema.",
  },
];
