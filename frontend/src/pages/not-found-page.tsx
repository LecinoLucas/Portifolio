import { Link } from "react-router-dom";
import { AlertTriangle, Home, Compass } from "lucide-react";
import { PageContainer } from "@/components/layout/page-container";
import { classesBotao } from "@/components/ui/button-variants";

export function NotFoundPage() {
  const rotasSugeridas = [
    { rotulo: "Central Profissional", path: "/" },
    { rotulo: "Sobre & Perfil", path: "/sobre" },
    { rotulo: "Experiência", path: "/experiencia" },
    { rotulo: "Projetos em Produção", path: "/projetos" },
    { rotulo: "Competências & Stack", path: "/competencias" },
    { rotulo: "Contato & WhatsApp", path: "/contato" },
  ];

  return (
    <PageContainer
      rotulo="Código 404"
      titulo="Rota Não Encontrada"
      subtitulo="O endereço acessado não corresponde a nenhum módulo operacional registrado."
    >
      <div className="tech-card p-8 sm:p-12 text-center max-w-2xl mx-auto space-y-6">
        <div className="flex size-14 items-center justify-center rounded-2xl border border-tech-orange/40 bg-tech-orange/10 text-tech-orange mx-auto">
          <AlertTriangle className="size-7" />
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-bold text-foreground">
            Recurso ou página inexistente
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            A URL solicitada pode ter sido movida para a nova arquitetura baseada em rotas ou digitada incorretamente.
          </p>
        </div>

        <div className="pt-2">
          <Link to="/" className={classesBotao({ variante: "primario", tamanho: "lg" })}>
            <Home className="size-4" />
            Voltar para a Central Profissional
          </Link>
        </div>

        <div className="border-t border-border pt-6 text-left space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
            <Compass className="size-3.5" />
            Rotas principais disponíveis:
          </span>
          <div className="flex flex-wrap gap-2">
            {rotasSugeridas.map((r) => (
              <Link
                key={r.path}
                to={r.path}
                className="rounded-md border border-border bg-background/60 px-3 py-1 text-xs font-medium text-foreground hover:border-primary hover:text-primary transition-colors"
              >
                {r.rotulo}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
