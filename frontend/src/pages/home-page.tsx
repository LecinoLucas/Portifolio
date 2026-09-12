import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/layout/container";
import { classesBotao } from "@/components/ui/button-variants";
import { WhatsAppInline } from "@/components/shared/whatsapp-button";
import { CurriculoHeroSection } from "@/sections/curriculo-hero-section";
import { LabsShowcaseSection } from "@/sections/labs-showcase-section";
import { SystemsDiagram } from "@/components/shared/systems-diagram";
import { IaArquiteturaManifesto } from "@/components/portfolio/ia-manifesto/ia-arquitetura-manifesto";
import { CurriculoCompetenciasExperiencia } from "@/sections/curriculo-competencias-experiencia";

export function HomePage() {
  return (
    <div className="relative overflow-hidden pb-16 space-y-12 sm:space-y-16">
      {/* 1. Cabeçalho Executivo e Resumo Profissional do Currículo */}
      <CurriculoHeroSection />

      {/* 2. Laboratórios Práticos Interativos (Inovação que Ninguém Faz) */}
      <LabsShowcaseSection />

      {/* 3. Mapa de Sistemas Conectados & Arquitetura */}
      <Container>
        <SystemsDiagram />
      </Container>

      {/* 4. O Manifesto de Engenharia: IA com Arquitetura vs A Ilusão do Low-Code */}
      <Container>
        <IaArquiteturaManifesto />
      </Container>

      {/* 4. Competências Principais, Experiência Corporativa e Formação */}
      <CurriculoCompetenciasExperiencia />

      {/* 5. Chamada Final para Contato e Atendimento */}
      <section className="py-8">
        <Container>
          <div className="rounded-xl border border-border/80 bg-card/60 relative overflow-hidden p-6 sm:p-10 shadow-xs backdrop-blur-xs">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-500">
                <Sparkles className="size-3.5" />
                <span>Comunicação Direta &amp; Resposta Rápida</span>
              </div>

              <h2 className="text-2xl font-black text-foreground sm:text-3xl">
                Vamos conversar sobre sua vaga ou projeto?
              </h2>

              <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
                Disponível para contratação como <strong>Analista de Sistemas / TOTVS Protheus</strong> ou{" "}
                <strong>Desenvolvedor Full Stack</strong>. Atuação com forte visão de negócio, domínio de processos corporativos e engenharia de software com IA.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <WhatsAppInline variante="destaque" texto="Chamar no WhatsApp" />
                <Link to="/contato" className={classesBotao({ variante: "contorno" })}>
                  Acessar formulário e canais
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
