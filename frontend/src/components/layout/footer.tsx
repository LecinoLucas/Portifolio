import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { Container } from "@/components/layout/container";
import { perfil } from "@/data/perfil";
import { links } from "@/data/links";

export function Footer() {
  const ano = new Date().getFullYear();

  return (
    <footer className="border-t border-border/80 bg-card/40 py-10">
      <Container className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="space-y-1 text-xs text-muted-foreground sm:text-sm">
          <p className="font-semibold text-foreground">
            {perfil.nome} — {perfil.posicionamento}
          </p>
          <p>
            © {ano} · Construído com React 19, TypeScript e Node.js sob o{" "}
            <Link to="/projetos/les" className="underline underline-offset-4 hover:text-primary">
              Lucas Engineering Standard (LES)
            </Link>
            .
          </p>
        </div>

        <div className="flex items-center gap-1.5">
          <a
            href={links.whatsapp.href}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="WhatsApp (62) 99656-4756"
            className="rounded-md p-2 text-emerald-500 transition-colors hover:bg-emerald-500/10"
          >
            <MessageCircle className="size-5" />
          </a>
          <a
            href={links.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub de Lecino Lucas"
            className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          >
            <Github className="size-5" />
          </a>
          {links.linkedin ? (
            <a
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn de Lecino Lucas"
              className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              <Linkedin className="size-5" />
            </a>
          ) : null}
          <a
            href={links.emailHref}
            aria-label="Enviar e-mail para Lecino Lucas"
            className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          >
            <Mail className="size-5" />
          </a>
        </div>
      </Container>
    </footer>
  );
}
