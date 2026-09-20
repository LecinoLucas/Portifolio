import { Link } from "react-router-dom";
import { ArrowRight, MessageSquare } from "lucide-react";
import { Container } from "@/components/layout/container";
import { classesBotao } from "@/components/ui/button-variants";
import { WhatsAppInline } from "@/components/shared/whatsapp-button";
import { Reveal } from "@/components/shared/reveal";
import { CurriculoSidebar } from "@/components/layout/curriculo-sidebar";
import { PosicionamentoSection } from "@/sections/posicionamento-section";
import { ResumoProfissionalSection } from "@/sections/resumo-profissional-section";
import { MapaAtuacaoSection } from "@/components/portfolio/mapa-atuacao/mapa-atuacao-section";
import { TrajetoriaCondensadaSection } from "@/sections/trajetoria-condensada-section";
import { EvidenciasDestaqueSection } from "@/sections/evidencias-destaque-section";

export function HomePage() {
  return (
    <div className="relative overflow-hidden pb-16">
      <Container className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6 lg:gap-8 items-start">
          {/* Coluna Esquerda: Cabeçalho Executivo, Radar de Competências e Governança */}
          <CurriculoSidebar />

          {/* Coluna Direita: Conteúdo Editorial em Scroll Fluido */}
          <div className="min-w-0 space-y-4">
            {/* Seção 01: Declaração de Posicionamento */}
            <PosicionamentoSection />

            {/* Seção 02: Resumo Profissional Compacto */}
            <Reveal><ResumoProfissionalSection /></Reveal>

            {/* Seção 03: Mapa de Atuação nos 4 Eixos */}
            <Reveal><MapaAtuacaoSection /></Reveal>

            {/* Seção 04: Trajetória Profissional (Timeline Visual) */}
            <Reveal><TrajetoriaCondensadaSection /></Reveal>

            {/* Seção 05: Projetos Reais em Destaque (4 Casos + LES Secundário) */}
            <Reveal><EvidenciasDestaqueSection /></Reveal>
          </div>
        </div>
      </Container>

      {/* Chamada Final para Contato Profissional */}
      <section className="py-12">
        <Container>
          <div className="dossie-card relative overflow-hidden p-6 sm:p-10">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                <MessageSquare className="size-3.5 text-primary" />
                <span>Comunicação Direta &amp; Transparência</span>
              </div>

              <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
                Vamos conversar sobre oportunidades e desafios da sua empresa?
              </h2>

              <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
                Disponível para atuação como <strong>Analista de Sistemas / TOTVS Protheus</strong> ou{" "}
                <strong>Desenvolvedor de Integrações e Software</strong>. Foco em alinhar processos operacionais a sistemas bem estruturados e confiáveis.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <WhatsAppInline variante="destaque" texto="Conversar no WhatsApp" />
                <Link to="/contato" className={classesBotao({ variante: "contorno" })}>
                  Acessar formulário e contatos
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
