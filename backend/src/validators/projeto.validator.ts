import { z } from "zod";

export const esquemaFiltroProjetos = z.object({
  focoPerfil: z.enum(["analista", "fullstack", "ambos"]).optional(),
  busca: z.string().trim().max(100).optional(),
});

export type FiltroProjetos = z.infer<typeof esquemaFiltroProjetos>;
