import {
  MapPin,
  Phone,
  Mail,
  Download,
  Github,
  Linkedin,
  Clock,
  Code2,
  Database,
  Cpu,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { classesBotao } from "@/components/ui/button-variants";
import { WhatsAppInline } from "@/components/shared/whatsapp-button";
import { perfil } from "@/data/perfil";
import { links } from "@/data/links";

export function CurriculoHeroSection() {
  const iconesCartao = [Clock, Code2, Database, Cpu];

  return (
    <section className="relative pt-8 pb-12 sm:pt-12 sm:pb-16 border-b border-border/80 bg-gradient-to-b from-card/30 to-background">
      <Container className="space-y-8">
        {/* Cabeçalho de Contato e Localização */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 rounded-md border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-bold text-primary tracking-wide">
              <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{perfil.titulo}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground">
              {perfil.nome}
            </h1>

            <p className="text-sm sm:text-base font-semibold text-tech-cyan">
              {perfil.posicionamento}
            </p>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 pt-1 text-xs text-muted-foreground font-medium">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="size-3.5 text-tech-cyan" />
                {perfil.localizacao}
              </span>
              <span>·</span>
              <a
                href={`tel:${perfil.telefone?.replace(/\D/g, "")}`}
                className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
              >
                <Phone className="size-3.5 text-emerald-500" />
                {perfil.telefone}
              </a>
              <span>·</span>
              <a
                href={`mailto:${perfil.email}`}
                className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
              >
                <Mail className="size-3.5 text-primary" />
                {perfil.email}
              </a>
            </div>
          </div>

          {/* Ações Rápidas: Download PDF + WhatsApp + Redes */}
          <div className="flex flex-col sm:flex-row md:flex-col items-stretch sm:items-center md:items-end gap-3 shrink-0">
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <a
                href={links.curriculo}
                download
                className={classesBotao({ tamanho: "sm", className: "w-full sm:w-auto justify-center" })}
                title="Baixar currículo original em PDF"
              >
                <Download className="size-3.5" />
                Baixar Currículo (PDF)
              </a>

              <WhatsAppInline
                variante="destaque"
                texto="WhatsApp"
                className="w-full sm:w-auto justify-center"
              />
            </div>

            <div className="flex items-center gap-3 text-xs text-muted-foreground pt-1">
              <a
                href={links.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 font-medium hover:text-foreground transition-colors"
              >
                <Github className="size-3.5" />
                GitHub
              </a>
              <span>·</span>
              {links.linkedin ? (
                <a
                  href={links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-medium hover:text-foreground transition-colors"
                >
                  <Linkedin className="size-3.5" />
                  LinkedIn
                </a>
              ) : null}
            </div>
          </div>
        </div>

        {/* Resumo Profissional Fiel ao PDF */}
        <div className="rounded-xl border border-border/80 bg-card/60 p-4 sm:p-5 text-xs sm:text-sm text-muted-foreground leading-relaxed shadow-xs backdrop-blur-xs">
          <strong className="text-foreground block mb-1 text-xs uppercase tracking-wider font-bold">
            ◆ Resumo Profissional
          </strong>
          {perfil.resumoProfissional}
        </div>

        {/* Os 4 Cartões Oficiais de Impacto do Currículo */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
          {perfil.cartoesImpacto?.map((cartao, idx) => {
            const Icon = iconesCartao[idx % iconesCartao.length];
            return (
              <div
                key={cartao.rotulo}
                className="rounded-xl border border-border/80 bg-card/60 p-3 sm:p-4 shadow-xs backdrop-blur-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm font-black text-foreground">
                      {cartao.rotulo}
                    </span>
                    <div className="flex size-6 sm:size-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="size-3.5 sm:size-4" />
                    </div>
                  </div>
                  <span className="text-[10px] sm:text-xs font-semibold text-tech-cyan block mt-0.5">
                    {cartao.subtitulo}
                  </span>
                </div>
                <p className="text-[10px] sm:text-[11px] text-muted-foreground mt-2 leading-relaxed">
                  {cartao.descricao}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
