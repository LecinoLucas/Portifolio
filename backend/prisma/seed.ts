import { PROJETOS_INICIAIS } from "../src/repositories/projeto.repositorio.js";
import { ProjetoRepositorioPrisma } from "../src/repositories/projeto.repositorio.prisma.js";
import { obterPrisma } from "../src/repositories/prisma.cliente.js";

async function seed() {
  console.log("🌱 Iniciando seed de projetos oficiais do portfólio no PostgreSQL...");
  const repo = new ProjetoRepositorioPrisma();
  await repo.salvarEmLote(PROJETOS_INICIAIS);
  console.log(
    `✅ Seed concluído com sucesso. Total: ${PROJETOS_INICIAIS.length} projetos persistidos no banco.`,
  );
  const prisma = obterPrisma();
  await prisma.$disconnect();
}

seed().catch(async (e) => {
  console.error("Erro no seed:", e);
  const prisma = obterPrisma();
  await prisma.$disconnect();
  process.exit(1);
});

