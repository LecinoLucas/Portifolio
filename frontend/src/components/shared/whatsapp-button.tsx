import { MessageCircle } from "lucide-react";
import { links } from "@/data/links";
import { cn } from "@/lib/utils";

interface PropsWhatsAppInline {
  className?: string;
  variante?: "primario" | "secundario" | "destaque";
  texto?: string;
}

/** Botão inline para chamadas contextuais em páginas (Home e Contato) */
export function WhatsAppInline({
  className,
  variante = "primario",
  texto = "Conversar no WhatsApp",
}: PropsWhatsAppInline) {
  const estilosVariante = {
    primario:
      "bg-emerald-600 text-white hover:bg-emerald-500 shadow-xs border border-emerald-500/30",
    secundario:
      "bg-card border border-emerald-500/30 text-foreground hover:bg-emerald-500/10 hover:border-emerald-500/60",
    destaque:
      "bg-emerald-600 text-white hover:bg-emerald-500 shadow-md font-semibold border border-emerald-400/40",
  };

  return (
    <a
      href={links.whatsapp.href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={`Conversar no WhatsApp com Lecino Lucas - Telefone ${links.whatsapp.numero}`}
      className={cn(
        "inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        estilosVariante[variante],
        className,
      )}
    >
      <MessageCircle className="size-4 shrink-0 text-emerald-300" />
      <span>{texto}</span>
    </a>
  );
}

/**
 * Botão flutuante acessível no canto inferior direito.
 * - Respeita área segura em dispositivos móveis.
 * - Foco visível com teclado.
 * - Sem animação de pulso contínuo (apenas hover sutil).
 * - Sem sobrepor botões ou textos principais.
 */
export function WhatsAppFloatingButton() {
  return (
    <aside
      aria-label="Ação rápida de contato"
      className="fixed bottom-5 right-5 z-40 pb-[env(safe-area-inset-bottom)] sm:bottom-6 sm:right-6"
    >
      <a
        href={links.whatsapp.href}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Conversar via WhatsApp com Lecino Lucas (62) 99656-4756"
        className="group relative flex size-12 items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-600 text-white shadow-lg transition-all duration-200 hover:scale-105 hover:bg-emerald-500 hover:shadow-emerald-950/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        <MessageCircle className="size-6 transition-transform duration-200 group-hover:scale-110" />

        {/* Tooltip acessível em hover/focus no desktop */}
        <span
          role="tooltip"
          className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-md border border-border bg-popover px-2.5 py-1 text-xs font-medium text-popover-foreground shadow-md transition-opacity duration-150 group-hover:block group-focus-visible:block sm:inline-block opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100"
        >
          Conversar no WhatsApp
        </span>
      </a>
    </aside>
  );
}
