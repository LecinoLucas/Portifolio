import { Github, Linkedin, Mail } from "lucide-react";
import { Container } from "@/components/layout/container";
import { perfil } from "@/data/perfil";
import { links } from "@/data/links";

export function Footer() {
  const ano = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-10">
      <Container className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="text-sm text-muted-foreground">
          <p className="font-medium text-foreground">{perfil.nome}</p>
          <p>
            © {ano} · Construído com React, Vite e Tailwind, seguindo o{" "}
            <a href="#les" className="underline underline-offset-4 hover:text-foreground">
              Lecino Lucas Engineering Standard
            </a>
            .
          </p>
        </div>

        <div className="flex items-center gap-1">
          <a
            href={links.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          >
            <Github className="size-5" />
          </a>
          {links.linkedin ? (
            <a
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              <Linkedin className="size-5" />
            </a>
          ) : null}
          <a
            href={links.emailHref}
            aria-label="Enviar e-mail"
            className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          >
            <Mail className="size-5" />
          </a>
        </div>
      </Container>
    </footer>
  );
}
