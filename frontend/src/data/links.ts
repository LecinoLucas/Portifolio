/**
 * Links externos centralizados. Ajuste aqui sem tocar em componentes.
 * Os PDFs dos currículos vivem em `public/`.
 */
export const links = {
  github: "https://github.com/LecinoLucas",
  linkedin: "https://linkedin.com/in/lecino-lucas" as string | null,
  email: "lecinolucas5@gmail.com",
  emailHref: "mailto:lecinolucas5@gmail.com",

  // Currículo principal existente
  curriculo: "/curriculo-lecino-lucas.pdf",
  curriculoGeral: "/curriculo-lecino-lucas.pdf",

  // Currículos segmentados (em breve - serão produzidos após o portfólio)
  curriculoAnalista: null,
  curriculoFullstack: null,

  les: {
    github: "https://github.com/LecinoLucas/LecinoLucas-engineering-standard",
    npm: "https://www.npmjs.com/package/@lecinolucas/les",
  },
} as const;
