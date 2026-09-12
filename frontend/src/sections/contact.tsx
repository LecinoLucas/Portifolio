import { useState, type FormEvent } from "react";
import { Download, Github, Linkedin, Mail, Send, Loader2 } from "lucide-react";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { classesBotao } from "@/components/ui/button-variants";
import { EstadoSucesso, EstadoErro } from "@/components/shared/estados-interface";
import { links } from "@/data/links";
import { api } from "@/services/api";

type EstadoEnvio = "idle" | "carregando" | "sucesso" | "erro";

export function Contact() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [assunto, setAssunto] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const [estado, setEstado] = useState<EstadoEnvio>("idle");
  const [mensagemErro, setMensagemErro] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!nome.trim() || !email.trim() || !mensagem.trim()) {
      setMensagemErro("Por favor, preencha todos os campos obrigatórios.");
      setEstado("erro");
      return;
    }

    setEstado("carregando");
    setMensagemErro("");

    try {
      await api.enviarContato({
        nome: nome.trim(),
        email: email.trim(),
        assunto: assunto.trim() || undefined,
        mensagem: mensagem.trim(),
        honeypot: honeypot || undefined,
      });

      setEstado("sucesso");
      setNome("");
      setEmail("");
      setAssunto("");
      setMensagem("");
    } catch (err) {
      setEstado("erro");
      setMensagemErro(
        err instanceof Error
          ? err.message
          : "Não foi possível enviar a mensagem. Use o link direto de e-mail.",
      );
    }
  };

  return (
    <Section id="contato" alternado>
      <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start">
        <div>
          <SectionHeading
            rotulo="Contato Direto"
            titulo="Vamos conversar sobre seu projeto ou vaga"
            descricao="Aberto a oportunidades como Analista de Sistemas / TOTVS Protheus e Desenvolvedor Full Stack Júnior. Envie uma mensagem pelo formulário ou utilize os canais diretos."
          />

          <Reveal className="mt-8 space-y-4">
            {/* Currículo original preservado e futuros botões desabilitados com Em breve */}
            <div className="flex flex-col gap-2.5 sm:flex-row">
              <a
                href={links.curriculo}
                download
                className={classesBotao({
                  variante: "contorno",
                  className: "flex-1 justify-between",
                })}
              >
                <span>Currículo Geral (PDF)</span>
                <Download className="size-4" />
              </a>
              <button
                type="button"
                disabled
                aria-disabled="true"
                className={classesBotao({
                  variante: "contorno",
                  className: "flex-1 justify-between",
                })}
              >
                <span>Currículo Analista</span>
                <span className="rounded bg-muted px-1.5 py-0.5 text-[10px] font-semibold uppercase text-muted-foreground">
                  Em breve
                </span>
              </button>
              <button
                type="button"
                disabled
                aria-disabled="true"
                className={classesBotao({
                  variante: "contorno",
                  className: "flex-1 justify-between",
                })}
              >
                <span>Currículo Full Stack</span>
                <span className="rounded bg-muted px-1.5 py-0.5 text-[10px] font-semibold uppercase text-muted-foreground">
                  Em breve
                </span>
              </button>
            </div>

            <div className="grid gap-2.5 sm:grid-cols-2">
              <a
                href={links.emailHref}
                className={classesBotao({
                  variante: "secundario",
                  className: "justify-start text-xs",
                })}
              >
                <Mail className="size-4 shrink-0" />
                <span className="truncate">{links.email}</span>
              </a>
              <a
                href={links.github}
                target="_blank"
                rel="noreferrer"
                className={classesBotao({
                  variante: "secundario",
                  className: "justify-start text-xs",
                })}
              >
                <Github className="size-4 shrink-0" />
                <span>github.com/LecinoLucas</span>
              </a>
              {links.linkedin ? (
                <a
                  href={links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className={classesBotao({
                    variante: "secundario",
                    className: "justify-start text-xs sm:col-span-2",
                  })}
                >
                  <Linkedin className="size-4 shrink-0" />
                  <span>linkedin.com/in/lecino-lucas</span>
                </a>
              ) : null}
            </div>
          </Reveal>
        </div>

        {/* Formulário integrado à API do backend */}
        <Reveal atraso={60} className="rounded-xl border border-border bg-card p-6 shadow-xs sm:p-8">
          <h3 className="text-lg font-semibold tracking-tight text-foreground">
            Enviar mensagem direta
          </h3>
          <p className="mt-1 text-xs text-muted-foreground">
            Sua mensagem será processada e persistida com segurança pela API backend.
          </p>

          {estado === "sucesso" ? (
            <div className="mt-6 space-y-4">
              <EstadoSucesso mensagem="Mensagem enviada com sucesso! Em breve entrarei em contato com você." />
              <Button
                variante="contorno"
                className="w-full"
                onClick={() => setEstado("idle")}
              >
                Enviar outra mensagem
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              {estado === "erro" ? (
                <EstadoErro
                  mensagem={mensagemErro}
                  onTentarNovamente={() => setEstado("idle")}
                />
              ) : null}

              {/* Campo Anti-Spam invisível (Honeypot) */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="campo-honeypot">Não preencha este campo</label>
                <input
                  id="campo-honeypot"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="contato-nome" className="block text-xs font-medium text-foreground">
                  Seu nome *
                </label>
                <input
                  id="contato-nome"
                  type="text"
                  required
                  disabled={estado === "carregando"}
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="Ex: Carlos Silva"
                  className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-hidden focus:ring-2 focus:ring-ring/20 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>

              <div>
                <label htmlFor="contato-email" className="block text-xs font-medium text-foreground">
                  Seu e-mail *
                </label>
                <input
                  id="contato-email"
                  type="email"
                  required
                  disabled={estado === "carregando"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Ex: carlos@empresa.com"
                  className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-hidden focus:ring-2 focus:ring-ring/20 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>

              <div>
                <label htmlFor="contato-assunto" className="block text-xs font-medium text-foreground">
                  Assunto
                </label>
                <input
                  id="contato-assunto"
                  type="text"
                  disabled={estado === "carregando"}
                  value={assunto}
                  onChange={(e) => setAssunto(e.target.value)}
                  placeholder="Ex: Oportunidade Analista / Full Stack"
                  className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-hidden focus:ring-2 focus:ring-ring/20 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>

              <div>
                <label htmlFor="contato-mensagem" className="block text-xs font-medium text-foreground">
                  Mensagem *
                </label>
                <textarea
                  id="contato-mensagem"
                  required
                  rows={4}
                  disabled={estado === "carregando"}
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                  placeholder="Descreva a oportunidade ou o projeto que deseja construir..."
                  className="mt-1.5 w-full resize-none rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-hidden focus:ring-2 focus:ring-ring/20 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>

              <Button
                type="submit"
                disabled={estado === "carregando"}
                className="w-full justify-center"
              >
                {estado === "carregando" ? (
                  <>
                    <Loader2 className="mr-2 size-4 animate-spin" />
                    Enviando mensagem...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 size-4" />
                    Enviar mensagem
                  </>
                )}
              </Button>
            </form>
          )}
        </Reveal>
      </div>
    </Section>
  );
}
