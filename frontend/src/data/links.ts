/**
 * Links externos centralizados. Ajuste aqui sem tocar em componentes.
 * Os PDFs dos currículos vivem em `public/`.
 */
export const links = {
  github: "https://github.com/LecinoLucas",
  linkedin: "https://linkedin.com/in/lecino-lucas" as string | null,
  email: "lecinolucas5@gmail.com",
  emailHref: "mailto:lecinolucas5@gmail.com",

  whatsapp: {
    numero: "(62) 99656-4756",
    numeroLimpo: "5562996564756",
    mensagemPadrao: "Olá, Lecino. Conheci seu trabalho pelo portfólio e gostaria de conversar.",
    href: "https://wa.me/5562996564756?text=Ol%C3%A1%2C%20Lecino.%20Conheci%20seu%20trabalho%20pelo%20portf%C3%B3lio%20e%20gostaria%20de%20conversar.",
  },

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
