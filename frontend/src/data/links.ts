/**
 * Links externos centralizados. Ajuste aqui sem tocar em componentes.
 * O PDF do currículo vive em `public/curriculo-lecino-lucas.pdf`.
 */
export const links = {
  github: "https://github.com/LecinoLucas",
  linkedin: "https://linkedin.com/in/lecino-lucas" as string | null,
  email: "lecinolucas5@gmail.com",
  emailHref: "mailto:lecinolucas5@gmail.com",

  curriculo: "/curriculo-lecino-lucas.pdf",

  les: {
    github: "https://github.com/LecinoLucas/LecinoLucas-engineering-standard",
    npm: "https://www.npmjs.com/package/@lecinolucas/les",
  },
} as const;
