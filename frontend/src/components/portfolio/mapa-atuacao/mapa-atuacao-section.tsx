import { useSearchParams } from "react-router-dom";
import { MapaAtuacaoNav } from "./mapa-atuacao-nav";
import { MapaAtuacaoPainel } from "./mapa-atuacao-painel";
import { curriculoDigital } from "@/data/curriculo-digital";
import type { DesafioAtuacaoId } from "@/types/curriculo";

const DESAFIOS_VALIDOS: DesafioAtuacaoId[] = [
  "protheus",
  "fiscal",
  "integracoes",
  "desenvolvimento",
];

export function MapaAtuacaoSection() {
  const [searchParams, setSearchParams] = useSearchParams();

  const paramFoco = searchParams.get("foco");
  const desafioAtivo: DesafioAtuacaoId =
    paramFoco && DESAFIOS_VALIDOS.includes(paramFoco as DesafioAtuacaoId)
      ? (paramFoco as DesafioAtuacaoId)
      : "protheus";

  function handleSelecionar(id: DesafioAtuacaoId) {
    setSearchParams(
      (prev) => {
        const next = new URLSearchParams(prev);
        next.set("foco", id);
        return next;
      },
      { replace: false }
    );
  }

  const desafioSelecionado = curriculoDigital.desafiosAtuacao[desafioAtivo];

  return (
    <section id="mapa-atuacao" className="dossie-card p-5 sm:p-7">
      <div className="space-y-8">
        {/* Pergunta Orientadora do Mapa de Atuação */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            <span className="size-1.5 rounded-full bg-primary" />
            <span>Mapa de Atuação &amp; Competências</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-foreground">
            Qual desafio sua empresa precisa resolver?
          </h2>

          <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl leading-relaxed">
            Selecione uma área abaixo para explorar as competências aplicadas, experiências práticas e evidências técnicas correspondentes.
          </p>
        </div>

        {/* 4 Escolhas / Tabs */}
        <MapaAtuacaoNav
          desafioAtivo={desafioAtivo}
          onSelecionar={handleSelecionar}
        />

        {/* Painel do Desafio Ativo */}
        <MapaAtuacaoPainel desafio={desafioSelecionado} />
      </div>
    </section>
  );
}
