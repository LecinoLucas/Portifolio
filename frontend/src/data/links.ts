/**
 * Links externos centralizados. Ajuste aqui sem tocar em componentes.
 * Os PDFs dos currículos vivem em `public/`.
 */
export const links = {
  github: "https://github.com/LecinoLucas",
  linkedin: "https://linkedin.com/in/lecino-lucas" as string | null,
  email: "lecinolucas5@gmail.com",
  emailHref: "mailto:lecinolucas5@gmail.com",

  // Currículos específicos preparados para os dois posicionamentos
  curriculoAnalista: "/curriculo-analista-sistemas.pdf",
  curriculoFullstack: "/curriculo-fullstack.pdf",
  curriculoGeral: "/curriculo-lecino-lucas.pdf",
  curriculo: "/curriculo-lecino-lucas.pdf",

  les: {
    github: "https://github.com/LecinoLucas/LecinoLucas-engineering-standard",
    npm: "https://www.npmjs.com/package/@lecinolucas/les",
  },
} as const;
