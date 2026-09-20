import { useCountUp } from "@/hooks/use-count-up";

interface PropsCountUp {
  valor: number;
  prefixo?: string;
  sufixo?: string;
  className?: string;
}

/** Número que sobe de 0 até o valor final ao entrar na viewport. */
export function CountUp({ valor, prefixo = "", sufixo = "", className }: PropsCountUp) {
  const { ref, valor: valorAtual } = useCountUp<HTMLSpanElement>(valor);

  return (
    <span ref={ref} className={className}>
      {prefixo}
      {valorAtual}
      {sufixo}
    </span>
  );
}
