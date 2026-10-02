import { Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { classesBotao } from "@/components/ui/button-variants";
import { links } from "@/data/links";
import { perfil } from "@/data/perfil";

export function Contact() {
  return (
    <Section id="contato">
      <SectionHeading
        rotulo="Contato"
        titulo="Vamos conversar"
        descricao="Disponível para oportunidades como Analista de Sistemas ou Analista de Suporte Especializado (N2/N3), com integração de sistemas e APIs."
      />

      <Reveal className="mt-10 max-w-3xl space-y-4">
        <a href={links.emailHref} className={classesBotao({ tamanho: "lg", className: "h-14 w-full justify-between text-lg" })}>
          <span className="flex items-center gap-3">
            <Mail /> {links.email}
          </span>
          <span className="hidden font-mono text-xs uppercase tracking-[0.14em] sm:inline">o caminho mais rápido</span>
        </a>

        <div className="grid gap-3 sm:grid-cols-2">
          {links.linkedin ? (
            <a href={links.linkedin} target="_blank" rel="noreferrer" className={classesBotao({ variante: "contorno", tamanho: "lg", className: "justify-start" })}>
              <Linkedin /> LinkedIn
            </a>
          ) : null}
          <a href={links.github} target="_blank" rel="noreferrer" className={classesBotao({ variante: "contorno", tamanho: "lg", className: "justify-start" })}>
            <Github /> github.com/LecinoLucas
          </a>
          <a href={links.curriculo} download className={classesBotao({ variante: "contorno", tamanho: "lg", className: "justify-start sm:col-span-2" })}>
            <Download /> Baixar currículo (PDF)
          </a>
        </div>

        <p className="flex items-center gap-2 pt-2 font-mono text-sm text-muted-foreground">
          <MapPin aria-hidden="true" className="size-4 text-primary" />
          {perfil.localizacao} · {perfil.disponibilidade}
        </p>
      </Reveal>
    </Section>
  );
}
