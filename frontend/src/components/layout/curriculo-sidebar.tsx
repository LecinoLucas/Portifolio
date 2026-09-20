import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Github,
  Linkedin,
  ArrowRight,
  Briefcase,
  Layers,
  MessageSquare,
  Info,
  Activity,
  FlaskConical,
  ShieldCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { CountUp } from "@/components/shared/count-up";
import { Reveal } from "@/components/shared/reveal";
import { curriculoDigital } from "@/data/curriculo-digital";
import { perfil } from "@/data/perfil";
import { links } from "@/data/links";

const MAX_ITENS_VISIVEIS = 4;

const classeAcaoSobria =
  "flex items-center gap-2 rounded-md border border-border/70 bg-background/40 px-3 py-2 text-xs font-semibold text-foreground/90 transition-colors hover:border-primary/50 hover:text-primary hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

export function CurriculoSidebar() {
  const { perfil: perfilDigital } = curriculoDigital;

  return (
    <Reveal
      as="aside"
      aria-label="Cabeçalho executivo, radar de competências e governança"
      className="lg:sticky lg:top-20 space-y-4 lg:max-h-[calc(100vh-6rem)] lg:overflow-y-auto lg:pr-1"
    >
      {/* Cabeçalho Executivo */}
      <div className="dossie-card p-5 space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2 font-mono text-[10px] tracking-wide text-foreground/70">
            <span className="size-1.5 rounded-full bg-primary shrink-0" />
            <span>{perfilDigital.tituloProfissional}</span>
          </div>

          <h1 className="text-2xl font-semibold tracking-tight text-foreground">
            {perfilDigital.nome}
          </h1>
        </div>

        <div className="space-y-1.5 text-xs text-muted-foreground font-medium border-t border-border/60 pt-3">
          <span className="flex items-center gap-1.5">
            <MapPin className="size-3.5 text-muted-foreground shrink-0" />
            {perfilDigital.localizacao}
          </span>
          <a
            href={`tel:${perfilDigital.telefone.replace(/\D/g, "")}`}
            className="flex items-center gap-1.5 hover:text-primary transition-colors"
          >
            <Phone className="size-3.5 text-muted-foreground shrink-0" />
            {perfilDigital.telefone}
          </a>
          <a
            href={`mailto:${perfilDigital.email}`}
            className="flex items-center gap-1.5 hover:text-primary transition-colors break-all"
          >
            <Mail className="size-3.5 text-muted-foreground shrink-0" />
            {perfilDigital.email}
          </a>
        </div>

        <div className="flex items-center gap-2 border-t border-border/60 pt-3">
          <a
            href={links.github}
            target="_blank"
            rel="noreferrer noopener"
            className={cn(classeAcaoSobria, "flex-1 justify-center")}
          >
            <Github className="size-3.5" />
            <span>GitHub</span>
          </a>
          {links.linkedin ? (
            <a
              href={links.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className={cn(classeAcaoSobria, "flex-1 justify-center")}
            >
              <Linkedin className="size-3.5" />
              <span>LinkedIn</span>
            </a>
          ) : null}
        </div>

        <div className="flex flex-col gap-2 border-t border-border/60 pt-3">
          <Link to="/experiencia" className={classeAcaoSobria}>
            <Briefcase className="size-3.5 text-primary" />
            <span>Conhecer minha trajetória</span>
            <ArrowRight className="size-3.5 ml-auto text-muted-foreground" />
          </Link>
          <Link to="/projetos" className={classeAcaoSobria}>
            <Layers className="size-3.5 text-primary" />
            <span>Ver casos reais</span>
          </Link>
          <Link to="/contato" className={classeAcaoSobria}>
            <MessageSquare className="size-3.5 text-primary" />
            <span>Entrar em contato</span>
          </Link>
        </div>

        <div className="flex items-start gap-2 rounded-md border border-border/60 bg-background/40 px-3 py-2 text-[11px] text-muted-foreground">
          <Info className="size-3.5 shrink-0 text-muted-foreground mt-0.5" />
          <p className="leading-relaxed">
            O currículo em PDF será preparado após a publicação do endereço oficial.
          </p>
        </div>
      </div>

      {/* Radar de Competências */}
      <div className="dossie-card p-5 space-y-3">
        <h2 className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          <Activity className="size-3.5 text-tech-cyan" />
          Radar de Competências
        </h2>

        <div className="space-y-3">
          {perfil.competenciasCategorizadas?.map((cat) => {
            const visiveis = cat.itens.slice(0, MAX_ITENS_VISIVEIS);
            const restantes = cat.itens.length - visiveis.length;
            return (
              <div key={cat.categoria} className="space-y-1.5">
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground/70">
                  {cat.categoria}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {visiveis.map((item) => (
                    <span
                      key={item}
                      className="rounded border border-border bg-muted/40 px-2 py-0.5 font-mono text-[10px] font-medium text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                  {restantes > 0 ? (
                    <span className="rounded px-2 py-0.5 font-mono text-[10px] font-medium text-muted-foreground/60">
                      +{restantes}
                    </span>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Painel de Qualidade e Governança */}
      <div className="dossie-card p-5 space-y-3">
        <h2 className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          <ShieldCheck className="size-3.5 text-primary" />
          Qualidade &amp; Governança
        </h2>

        <div className="grid grid-cols-1 gap-2 font-mono text-[11px]">
          <div className="flex items-center justify-between rounded border border-border/60 bg-background/40 px-3 py-2">
            <span className="flex items-center gap-1.5 text-muted-foreground">
              <FlaskConical className="size-3.5 text-primary" />
              Testes automatizados
            </span>
            <span className="font-semibold text-foreground">
              <CountUp valor={60} sufixo=" aprovados" />
            </span>
          </div>
          <div className="flex items-center justify-between rounded border border-border/60 bg-background/40 px-3 py-2">
            <span className="text-muted-foreground">ESLint</span>
            <span className="font-semibold text-foreground">0 erros</span>
          </div>
          <div className="flex items-center justify-between rounded border border-border/60 bg-background/40 px-3 py-2">
            <span className="text-muted-foreground">Padrão de engenharia</span>
            <span className="font-semibold text-foreground">LES v2.2.0</span>
          </div>
        </div>

        <div className="flex flex-col gap-1 rounded-md border border-border/60 bg-background/40 px-3 py-2">
          <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
            Ambiente auditado · Apoio de IA sob governança técnica
          </span>
          <p className="text-[10px] leading-relaxed text-muted-foreground/70">
            {perfilDigital.papelDaIA}
          </p>
        </div>
      </div>
    </Reveal>
  );
}
