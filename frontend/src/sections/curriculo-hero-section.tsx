import {
  MapPin,
  Phone,
  Mail,
  FileClock,
  Github,
  Linkedin,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "@/components/layout/container";
import { classesBotao } from "@/components/ui/button-variants";
import { WhatsAppInline } from "@/components/shared/whatsapp-button";
import { curriculoDigital } from "@/data/curriculo-digital";
import { links } from "@/data/links";

export function CurriculoHeroSection() {
  const { perfil } = curriculoDigital;

  return (
    <section className="relative pt-8 pb-12 sm:pt-12 sm:pb-16 border-b border-border/80 bg-gradient-to-b from-card/40 to-background">
      <Container className="space-y-8">
        {/* Bloco Superior: Identidade, Contatos e Redes */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            {/* Tag de Posicionamento Oficial */}
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary tracking-wide">
              <span className="size-2 rounded-full bg-emerald-500" />
              <span>{perfil.tituloProfissional}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground">
              {perfil.nome}
            </h1>

            <p className="text-lg sm:text-xl font-bold text-foreground/90 tracking-tight">
              “{perfil.mensagemCentral}”
            </p>

            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pt-1">
              {perfil.descricaoTrajetoria}
            </p>

            {/* Metadados de Contato Rápido */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 pt-2 text-xs text-muted-foreground font-medium">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="size-3.5 text-primary" />
                {perfil.localizacao}
              </span>
              <span>·</span>
              <a
                href={`tel:${perfil.telefone.replace(/\D/g, "")}`}
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

          {/* Ações Rápidas do Cabeçalho */}
          <div className="flex flex-col sm:flex-row lg:flex-col items-stretch sm:items-center lg:items-end gap-3 shrink-0">
            {/* Botão do Currículo PDF desabilitado temporariamente */}
            <button
              type="button"
              disabled
              title="O currículo oficial em PDF está sendo atualizado com as novas informações factuais"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border/80 bg-muted/50 px-4 py-2 text-xs font-semibold text-muted-foreground cursor-not-allowed opacity-75 shadow-2xs"
            >
              <FileClock className="size-4" />
              <span>Currículo atualizado em preparação</span>
            </button>

            <div className="flex items-center gap-2">
              <a
                href={links.github}
                target="_blank"
                rel="noreferrer noopener"
                className={classesBotao({
                  variante: "contorno",
                  tamanho: "sm",
                  className: "gap-1.5 text-xs",
                })}
              >
                <Github className="size-3.5" />
                <span>GitHub</span>
              </a>

              {links.linkedin ? (
                <a
                  href={links.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className={classesBotao({
                    variante: "contorno",
                    tamanho: "sm",
                    className: "gap-1.5 text-xs",
                  })}
                >
                  <Linkedin className="size-3.5 text-blue-500" />
                  <span>LinkedIn</span>
                </a>
              ) : null}
            </div>
          </div>
        </div>

        {/* Bloco de Filosofia de Trabalho: Papel da IA como Competência Técnica */}
        <div className="rounded-xl border border-border/80 bg-card/60 p-4 sm:p-5 shadow-xs backdrop-blur-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
              <Sparkles className="size-3.5 text-primary" />
              <span>Como utilizo Inteligência Artificial na Engenharia</span>
            </div>
            <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed font-medium">
              “{perfil.papelDaIA}”
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 shrink-0">
            <WhatsAppInline variante="destaque" texto="Falar no WhatsApp" />
            <Link to="/contato" className={classesBotao({ variante: "contorno", tamanho: "sm" })}>
              Enviar mensagem
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
