import {
  MapPin,
  Phone,
  Mail,
  Github,
  Linkedin,
  Sparkles,
  ArrowRight,
  Briefcase,
  Layers,
  MessageSquare,
  Info,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "@/components/layout/container";
import { classesBotao } from "@/components/ui/button-variants";
import { curriculoDigital } from "@/data/curriculo-digital";
import { links } from "@/data/links";

export function CurriculoHeroSection() {
  const { perfil } = curriculoDigital;

  return (
    <section className="relative pt-8 pb-12 sm:pt-12 sm:pb-16 border-b border-border/80 bg-gradient-to-b from-card/40 to-background">
      <Container className="space-y-8">
        {/* Bloco Superior: Identidade e Mensagem Central */}
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

            <p className="text-lg sm:text-xl font-bold text-foreground/90 tracking-tight leading-snug">
              “{perfil.mensagemCentral}”
            </p>

            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pt-1 max-w-2xl">
              <strong>Da operação à arquitetura:</strong> {perfil.descricaoTrajetoria}
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

          {/* Links Secundários de Perfis Técnicos */}
          <div className="flex items-center gap-2 lg:pt-2 shrink-0">
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer noopener"
              className={classesBotao({
                variante: "contorno",
                tamanho: "sm",
                className: "gap-1.5 text-xs font-semibold",
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
                  className: "gap-1.5 text-xs font-semibold text-blue-500 hover:text-blue-600",
                })}
              >
                <Linkedin className="size-3.5" />
                <span>LinkedIn</span>
              </a>
            ) : null}
          </div>
        </div>

        {/* 3 Ações Principais Obrigatórias */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
          <Link
            to="/experiencia"
            className={classesBotao({
              variante: "primario",
              className: "gap-2 font-semibold shadow-xs",
            })}
          >
            <Briefcase className="size-4" />
            <span>Conhecer minha trajetória</span>
            <ArrowRight className="size-3.5" />
          </Link>

          <Link
            to="/projetos"
            className={classesBotao({
              variante: "contorno",
              className: "gap-2 font-semibold",
            })}
          >
            <Layers className="size-4 text-primary" />
            <span>Ver casos reais</span>
          </Link>

          <Link
            to="/contato"
            className={classesBotao({
              variante: "contorno",
              className: "gap-2 font-semibold",
            })}
          >
            <MessageSquare className="size-4 text-emerald-500" />
            <span>Entrar em contato</span>
          </Link>
        </div>

        {/* Nota discreta sobre o currículo oficial em PDF */}
        <div className="flex items-start gap-2.5 rounded-lg border border-border/60 bg-muted/30 px-3.5 py-2 text-xs text-muted-foreground max-w-3xl">
          <Info className="size-4 shrink-0 text-primary mt-0.5" />
          <p className="leading-relaxed">
            O currículo em PDF será preparado após a publicação do endereço oficial.
          </p>
        </div>

        {/* Bloco de Filosofia de Trabalho: Papel da IA com Responsabilidade Humana */}
        <div className="rounded-xl border border-border/80 bg-card/60 p-4 sm:p-5 shadow-xs backdrop-blur-xs space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
            <Sparkles className="size-3.5 text-primary" />
            <span>Apoio de Inteligência Artificial com Responsabilidade Técnica</span>
          </div>
          <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed font-medium">
            “{perfil.papelDaIA}”
          </p>
        </div>
      </Container>
    </section>
  );
}
