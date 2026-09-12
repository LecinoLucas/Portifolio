import { Download, Github, Linkedin, Mail } from "lucide-react";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { classesBotao } from "@/components/ui/button-variants";
import { links } from "@/data/links";

export function Contact() {
  return (
    <Section id="contato" alternado>
      <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
        <SectionHeading
          rotulo="Contato"
          titulo="Vamos conversar"
          descricao="Aberto a oportunidades como Analista de Sistemas e Desenvolvedor Full Stack. O caminho mais rápido é o e-mail ou o LinkedIn."
        />

        <Reveal className="flex flex-col gap-3">
          <a
            href={links.curriculo}
            download
            className={classesBotao({ tamanho: "lg", className: "w-full justify-between" })}
          >
            Baixar currículo (PDF)
            <Download className="size-4" />
          </a>

          <div className="grid gap-3 sm:grid-cols-2">
            <a
              href={links.emailHref}
              className={classesBotao({
                variante: "contorno",
                className: "w-full justify-start",
              })}
            >
              <Mail className="size-4" />
              {links.email}
            </a>
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
              className={classesBotao({
                variante: "contorno",
                className: "w-full justify-start",
              })}
            >
              <Github className="size-4" />
              github.com/LecinoLucas
            </a>
            {links.linkedin ? (
              <a
                href={links.linkedin}
                target="_blank"
                rel="noreferrer"
                className={classesBotao({
                  variante: "contorno",
                  className: "w-full justify-start sm:col-span-2",
                })}
              >
                <Linkedin className="size-4" />
                LinkedIn
              </a>
            ) : null}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
