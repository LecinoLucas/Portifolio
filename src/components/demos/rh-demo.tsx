import { useState } from "react";
import { Abas } from "@/components/demos/abas";
import { MolduraDemo } from "@/components/demos/moldura-demo";
import { RhAdmissao } from "@/components/demos/rh-admissao";
import { RhAnalise } from "@/components/demos/rh-analise";
import { RhPipeline } from "@/components/demos/rh-pipeline";
import { candidatosIniciais, type EtapaId } from "@/data/demos/rh";

const ABAS = [
  { id: "pipeline", rotulo: "Pipeline" },
  { id: "analise", rotulo: "Análise por IA" },
  { id: "admissao", rotulo: "Pré-admissão → Protheus" },
];

export function RhDemo() {
  const [aba, setAba] = useState("pipeline");
  const [candidatos, setCandidatos] = useState(candidatosIniciais);

  function mover(id: number, etapa: EtapaId) {
    setCandidatos((atuais) => atuais.map((c) => (c.id === id ? { ...c, etapa } : c)));
  }

  return (
    <MolduraDemo titulo="Portal RH · demonstração">
      <Abas rotulo="Telas do Portal RH" abas={ABAS} ativa={aba} aoMudar={setAba}>
        {aba === "pipeline" ? <RhPipeline candidatos={candidatos} aoMover={mover} /> : null}
        {aba === "analise" ? <RhAnalise candidato={candidatos[2]} /> : null}
        {aba === "admissao" ? <RhAdmissao /> : null}
      </Abas>
    </MolduraDemo>
  );
}
