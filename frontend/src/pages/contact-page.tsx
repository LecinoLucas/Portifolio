import { useState, type FormEvent } from "react";
import { Github, Linkedin, Mail, Send, Loader2, MessageCircle } from "lucide-react";
import { PageContainer } from "@/components/layout/page-container";
import { Button } from "@/components/ui/button";
import { classesBotao } from "@/components/ui/button-variants";
import { WhatsAppInline } from "@/components/shared/whatsapp-button";
import { EstadoSucesso, EstadoErro } from "@/components/shared/estados-interface";
import { links } from "@/data/links";
import { api } from "@/services/api";

type EstadoEnvio = "idle" | "carregando" | "sucesso" | "erro";

export function ContactPage() {
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
    <PageContainer
      rotulo="Canais Diretos"
      titulo="Contato &amp; Propostas"
      subtitulo="Aberto para oportunidades como Analista de Sistemas, TOTVS Protheus, Integrações e Desenvolvimento. Fale diretamente pelo WhatsApp ou pelo formulário."
    >
      <div className="grid gap-10 lg:grid-cols-[1.1fr_1.2fr] lg:items-start">
        {/* COLUNA 1: Canais Diretos & WhatsApp */}
        <div className="space-y-6">
          {/* Card Destacado do WhatsApp */}
          <div className="tech-card border-emerald-500/40 bg-emerald-950/10 p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-500">
                <MessageCircle className="size-4" />
                Canal Prioritário
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[11px] font-medium text-emerald-500">
                <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Resposta rápida
              </span>
            </div>

            <div>
              <h2 className="text-lg font-bold text-foreground">WhatsApp Profissional</h2>
              <p className="text-sm font-semibold text-emerald-500 mt-0.5">
                {links.whatsapp.numero}
              </p>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                Mensagem pré-formatada para agilizar seu contato sobre entrevistas, propostas ou projetos.
              </p>
            </div>

            <WhatsAppInline
              variante="destaque"
              texto="Iniciar conversa no WhatsApp"
              className="w-full justify-center"
            />
          </div>

          {/* Currículo Oficial */}
          <div className="tech-card p-6 space-y-2 text-xs text-muted-foreground">
            <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">
              Currículo impresso / PDF
            </h3>
            <p className="leading-relaxed">
              Disponibilizado mediante solicitação ou atualizado para cada processo seletivo.
            </p>
          </div>

          {/* E-mail, LinkedIn, GitHub */}
          <div className="tech-card p-6 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">
              Outros Canais
            </h3>
            <div className="grid gap-2">
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
                    className: "justify-start text-xs",
                  })}
                >
                  <Linkedin className="size-4 shrink-0" />
                  <span>linkedin.com/in/lecino-lucas</span>
                </a>
              ) : null}
            </div>
          </div>
        </div>

        {/* COLUNA 2: Formulário Integrado à API */}
        <div className="tech-card p-6 sm:p-8">
          <h2 className="text-lg font-bold tracking-tight text-foreground">
            Enviar mensagem direta
          </h2>
          <p className="mt-1 text-xs text-muted-foreground">
            Sua mensagem será processada e persistida pela API backend.
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
                <label htmlFor="contato-nome" className="block text-xs font-semibold text-foreground">
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
                  className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>

              <div>
                <label htmlFor="contato-email" className="block text-xs font-semibold text-foreground">
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
                  className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>

              <div>
                <label htmlFor="contato-assunto" className="block text-xs font-semibold text-foreground">
                  Assunto
                </label>
                <input
                  id="contato-assunto"
                  type="text"
                  disabled={estado === "carregando"}
                  value={assunto}
                  onChange={(e) => setAssunto(e.target.value)}
                  placeholder="Ex: Oportunidade Analista / Full Stack"
                  className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>

              <div>
                <label htmlFor="contato-mensagem" className="block text-xs font-semibold text-foreground">
                  Mensagem *
                </label>
                <textarea
                  id="contato-mensagem"
                  required
                  rows={4}
                  disabled={estado === "carregando"}
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                  placeholder="Descreva a vaga ou projeto..."
                  className="mt-1.5 w-full resize-none rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>

              <Button
                type="submit"
                disabled={estado === "carregando"}
                className={classesBotao({ variante: "primario", className: "w-full justify-center" })}
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
        </div>
      </div>
    </PageContainer>
  );
}
