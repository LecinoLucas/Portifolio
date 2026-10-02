import type { ReactNode } from "react";
import { useVisao } from "@/hooks/use-visao";
import { ProvedorTema } from "@/app/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/sections/hero";
import { About } from "@/sections/about";
import { Experience } from "@/sections/experience";
import { Projects } from "@/sections/projects";
import { Les } from "@/sections/les";
import { Principles } from "@/sections/principles";
import { TechStack } from "@/sections/tech-stack";
import { Contact } from "@/sections/contact";

/** Uma visão = uma seção da barra de navegação. As demais ficam ocultas, mas no DOM. */
function Visao({ id, ativa, children }: { id: string; ativa: string; children: ReactNode }) {
  return (
    <div data-visao={id} hidden={ativa !== id}>
      {children}
    </div>
  );
}

export function App() {
  const { ativa, ir } = useVisao();

  return (
    <ProvedorTema>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground"
      >
        Pular para o conteúdo
      </a>

      <div className="flex min-h-dvh flex-col">
        <Header ativa={ativa} aoIr={ir} />

        <main id="conteudo" className="flex-1">
          <Visao id="inicio" ativa={ativa}><Hero aoIr={ir} /></Visao>
          <Visao id="sobre" ativa={ativa}><About /></Visao>
          <Visao id="experiencia" ativa={ativa}><Experience aoIr={ir} /></Visao>
          <Visao id="projetos" ativa={ativa}><Projects /></Visao>
          <Visao id="tecnologias" ativa={ativa}><TechStack /></Visao>
          <Visao id="les" ativa={ativa}>
            <Les />
            <Principles />
          </Visao>
          <Visao id="contato" ativa={ativa}><Contact /></Visao>
        </main>

        <Footer />
      </div>
    </ProvedorTema>
  );
}
