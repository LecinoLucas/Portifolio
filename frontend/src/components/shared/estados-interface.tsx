import type { FC } from "react";
import { Button } from "@/components/ui/button";
import { AlertCircle, Inbox, RefreshCw, ShieldAlert, WifiOff, CheckCircle2 } from "lucide-react";

/**
 * 1. Estado de Carregamento (Loading Skeleton) - LES Foundation
 */
export const SkeletonLista: FC = () => (
  <div className="w-full space-y-3 animate-pulse" role="status" aria-label="Carregando conteúdo">
    <div className="h-16 w-full rounded-lg bg-muted" />
    <div className="h-16 w-full rounded-lg bg-muted" />
    <div className="h-16 w-full rounded-lg bg-muted" />
  </div>
);

/**
 * 2. Estado Vazio (Empty State) - LES Foundation
 */
interface EstadoVazioProps {
  titulo: string;
  descricao: string;
  textoAcao?: string;
  onAcao?: () => void;
}

export const EstadoVazio: FC<EstadoVazioProps> = ({
  titulo,
  descricao,
  textoAcao,
  onAcao,
}) => (
  <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border bg-card/50 p-8 text-center">
    <Inbox className="mb-4 size-12 text-muted-foreground" aria-hidden="true" />
    <h3 className="mb-1 text-lg font-semibold">{titulo}</h3>
    <p className="mb-4 max-w-sm text-sm text-muted-foreground">{descricao}</p>
    {textoAcao && onAcao ? (
      <Button onClick={onAcao}>{textoAcao}</Button>
    ) : null}
  </div>
);

/**
 * 3. Estado de Erro (Error State) - LES Foundation
 */
interface EstadoErroProps {
  titulo?: string;
  mensagem: string;
  onTentarNovamente?: () => void;
}

export const EstadoErro: FC<EstadoErroProps> = ({
  titulo = "Não foi possível carregar as informações",
  mensagem,
  onTentarNovamente,
}) => (
  <div className="flex flex-col items-center justify-center rounded-lg border border-destructive/20 bg-destructive/10 p-6 text-center text-destructive">
    <AlertCircle className="mb-2 size-10" aria-hidden="true" />
    <h4 className="mb-1 text-base font-semibold">{titulo}</h4>
    <p className="mb-4 max-w-md text-sm font-medium">{mensagem}</p>
    {onTentarNovamente ? (
      <Button variante="contorno" tamanho="sm" onClick={onTentarNovamente}>
        <RefreshCw className="mr-2 size-4" />
        Tentar novamente
      </Button>
    ) : null}
  </div>
);

/**
 * 4. Estado de Permissão Negada (Permission Denied) - LES Foundation
 */
interface EstadoPermissaoNegadaProps {
  mensagem?: string;
  onVoltar?: () => void;
}

export const EstadoPermissaoNegada: FC<EstadoPermissaoNegadaProps> = ({
  mensagem = "Você não possui permissão para acessar este recurso ou executar esta operação.",
  onVoltar,
}) => (
  <div className="flex flex-col items-center justify-center rounded-lg border border-amber-500/20 bg-amber-500/10 p-8 text-center text-amber-700 dark:text-amber-400">
    <ShieldAlert className="mb-3 size-12" aria-hidden="true" />
    <h3 className="mb-1 text-lg font-semibold">Acesso restrito</h3>
    <p className="mb-4 max-w-md text-sm">{mensagem}</p>
    {onVoltar ? (
      <Button variante="contorno" tamanho="sm" onClick={onVoltar}>
        Voltar ao início
      </Button>
    ) : null}
  </div>
);

/**
 * 5. Estado Offline / Indisponível (Offline / Unavailable) - LES Foundation
 */
interface EstadoOfflineProps {
  mensagem?: string;
  onReconectar?: () => void;
}

export const EstadoOffline: FC<EstadoOfflineProps> = ({
  mensagem = "Conexão com o servidor indisponível. Operando em modo de contingência.",
  onReconectar,
}) => (
  <div className="flex items-center justify-between rounded-lg border border-border bg-muted/60 p-4 text-muted-foreground">
    <div className="flex items-center space-x-3">
      <WifiOff className="size-5 shrink-0" aria-hidden="true" />
      <span className="text-sm">{mensagem}</span>
    </div>
    {onReconectar ? (
      <Button variante="fantasma" tamanho="sm" onClick={onReconectar}>
        Reconectar
      </Button>
    ) : null}
  </div>
);

/**
 * 6. Estado de Sucesso (Success Feedback) - LES Foundation
 */
interface EstadoSucessoProps {
  mensagem: string;
}

export const EstadoSucesso: FC<EstadoSucessoProps> = ({ mensagem }) => (
  <div className="flex items-center space-x-2 rounded-lg border border-emerald-500/20 bg-emerald-500/10 p-3 text-sm font-medium text-emerald-700 dark:text-emerald-400">
    <CheckCircle2 className="size-5 shrink-0" aria-hidden="true" />
    <span>{mensagem}</span>
  </div>
);
