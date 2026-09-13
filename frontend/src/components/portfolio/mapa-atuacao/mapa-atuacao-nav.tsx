import { Database, FileCheck2, Network, Code2 } from "lucide-react";
import type { DesafioAtuacaoId } from "@/types/curriculo";
import { cn } from "@/lib/utils";

interface OpcaoDesafio {
  id: DesafioAtuacaoId;
  numero: string;
  titulo: string;
  rotuloCurto: string;
  icone: typeof Database;
}

const OPCOES: OpcaoDesafio[] = [
  {
    id: "protheus",
    numero: "01",
    titulo: "Organizar processos no Protheus e Backoffice",
    rotuloCurto: "Protheus & Backoffice",
    icone: Database,
  },
  {
    id: "integracoes",
    numero: "02",
    titulo: "Integrar bancos, APIs e certificados digitais",
    rotuloCurto: "Integrações & APIs",
    icone: Network,
  },
  {
    id: "fiscal",
    numero: "03",
    titulo: "Automatizar auditoria fiscal e rotinas com IA",
    rotuloCurto: "Automação & IA Aplicada",
    icone: FileCheck2,
  },
  {
    id: "desenvolvimento",
    numero: "04",
    titulo: "Construir software sustentável e arquitetura limpa",
    rotuloCurto: "Engenharia de Software",
    icone: Code2,
  },
];

interface PropsMapaAtuacaoNav {
  desafioAtivo: DesafioAtuacaoId;
  onSelecionar: (id: DesafioAtuacaoId) => void;
}

export function MapaAtuacaoNav({ desafioAtivo, onSelecionar }: PropsMapaAtuacaoNav) {
  return (
    <div
      role="tablist"
      aria-label="Opções de desafios e áreas de atuação"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
    >
      {OPCOES.map((opcao) => {
        const ativo = desafioAtivo === opcao.id;
        const Icone = opcao.icone;

        return (
          <button
            key={opcao.id}
            id={`tab-${opcao.id}`}
            role="tab"
            type="button"
            aria-selected={ativo}
            aria-controls={`painel-${opcao.id}`}
            tabIndex={ativo ? 0 : -1}
            onClick={() => onSelecionar(opcao.id)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onSelecionar(opcao.id);
              }
            }}
            className={cn(
              "group relative flex flex-col text-left p-4 rounded-xl border transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
              ativo
                ? "border-primary bg-card shadow-md ring-1 ring-primary/40"
                : "border-border/80 bg-card/50 hover:bg-card hover:border-border text-muted-foreground"
            )}
          >
            {/* Indicador superior */}
            <div className="flex items-center justify-between w-full mb-2">
              <span
                className={cn(
                  "font-mono text-xs font-bold px-2 py-0.5 rounded",
                  ativo
                    ? "bg-primary/10 text-primary"
                    : "bg-muted text-muted-foreground group-hover:text-foreground"
                )}
              >
                DESAFIO {opcao.numero}
              </span>
              <Icone
                className={cn(
                  "size-4 transition-colors",
                  ativo ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                )}
              />
            </div>

            {/* Título do desafio */}
            <span
              className={cn(
                "block text-sm font-bold leading-snug tracking-tight transition-colors",
                ativo ? "text-foreground" : "text-foreground/80 group-hover:text-foreground"
              )}
            >
              {opcao.titulo}
            </span>

            {/* Barra indicadora inferior quando ativo */}
            {ativo && (
              <span
                aria-hidden="true"
                className="absolute inset-x-4 -bottom-px h-0.5 bg-primary rounded-full"
              />
            )}
          </button>
        );
      })}
    </div>
  );
}
