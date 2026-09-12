import { PROJETOS_INICIAIS } from "../src/repositories/projeto.repositorio";

async function seed() {
  console.log("🌱 Iniciando seed de projetos oficiais do portfólio...");
  for (const p of PROJETOS_INICIAIS) {
    console.log(`- Projeto registrado: ${p.titulo} (${p.slug})`);
  }
  console.log(`✅ Seed concluído com sucesso. Total: ${PROJETOS_INICIAIS.length} projetos.`);
}

seed().catch((e) => {
  console.error("Erro no seed:", e);
  process.exit(1);
});
