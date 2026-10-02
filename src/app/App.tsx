import { ProvedorTema } from "@/app/theme-provider";
import { SumarioLateral } from "@/components/layout/sumario-lateral";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/sections/hero";
import { About } from "@/sections/about";
import { Experience } from "@/sections/experience";
import { Investigation } from "@/sections/investigation";
import { Projects } from "@/sections/projects";
import { Les } from "@/sections/les";
import { Principles } from "@/sections/principles";
import { TechStack } from "@/sections/tech-stack";
import { Contact } from "@/sections/contact";

export function App() {
  return (
    <ProvedorTema>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground"
      >
        Pular para o conteúdo
      </a>

      <SumarioLateral />
      <div className="lg:pl-72">
      <Header />

      <main id="conteudo">
        <Hero />
        <About />
        <Investigation />
        <Experience />
        <Projects />
        <Les />
        <Principles />
        <TechStack />
        <Contact />
      </main>

      <Footer />
      </div>
    </ProvedorTema>
  );
}
