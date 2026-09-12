import { Link } from "react-router-dom";
import { ArrowRight, MessageSquare } from "lucide-react";
import { Container } from "@/components/layout/container";
import { classesBotao } from "@/components/ui/button-variants";
import { WhatsAppInline } from "@/components/shared/whatsapp-button";
import { CurriculoHeroSection } from "@/sections/curriculo-hero-section";
import { MapaAtuacaoSection } from "@/components/portfolio/mapa-atuacao/mapa-atuacao-section";
import { CurriculoTrajetoriaSection } from "@/sections/curriculo-trajetoria-section";

export function HomePage() {
  return (
    <div className="relative overflow-hidden pb-16 space-y-4">
      {/* 1. Cabeçalho Executivo e Posicionamento Factual */}
      <CurriculoHeroSection />

      {/* 2. Mapa de Atuação Interativo: “Qual desafio sua empresa precisa resolver?” */}
      <MapaAtuacaoSection />

      {/* 3. Evolução Profissional: Da Operação à Arquitetura */}
      <CurriculoTrajetoriaSection />

      {/* 4. Chamada Final para Contato Profissional */}
      <section className="py-12">
        <Container>
          <div className="rounded-2xl border border-border/80 bg-card/60 relative overflow-hidden p-6 sm:p-10 shadow-xs backdrop-blur-xs">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
                <MessageSquare className="size-3.5" />
                <span>Comunicação Direta &amp; Transparência</span>
              </div>

              <h2 className="text-2xl font-black text-foreground sm:text-3xl">
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
