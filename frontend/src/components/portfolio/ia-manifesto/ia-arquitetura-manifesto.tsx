import { Cpu, ShieldCheck, FileCheck, Layers, GitFork, AlertOctagon, CheckCircle2 } from "lucide-react";

export function IaArquiteturaManifesto() {
  const pilaresMetodo = [
    {
      passo: "01",
      titulo: "Domínio do Processo & Regra de Negócio",
      subtitulo: "Saber o que pedir à IA",
      icone: FileCheck,
      descricao:
        "A IA não conhece a sua empresa. O desenvolvedor precisa dominar a regra tributária, o formato do CNAB, o fluxo do ERP ou a dor do usuário. Quem não entende o processo gera código inútil mais rápido.",
    },
    {
      passo: "02",
      titulo: "Arquitetura & Contratos Estritos",
      subtitulo: "Delimitar fronteiras sólidas",
      icone: Layers,
      descricao:
        "Definição prévia de fronteiras (Modular Monolith), contratos de tipos estritos com TypeScript e Zod, segurança deny-by-default e separação nítida entre Controller, Service e Repository.",
    },
    {
      passo: "03",
      titulo: "Orquestração com Limites Rígidos",
      subtitulo: "Contexto cirúrgico, zero alucinação",
      icone: Cpu,
      descricao:
        "A IA recebe contexto exato, critérios de aceite e invariantes de negócio. Proibição estrita de criar complexidades prematuras (sem Kafka, Redis ou microsserviços desnecessários).",
    },
    {
      passo: "04",
      titulo: "Auditoria Humana & Testes Reais",
      subtitulo: "Governança pelo padrão LES",
      icone: ShieldCheck,
      descricao:
        "Nenhuma linha vai para produção sem auditoria crítica. Aplicação de regras normativas: arquivos < 300 linhas, zero segredos commitados e suíte determinística de testes automatizados.",
    },
  ];

  return (
    <section id="ia-engenharia" className="space-y-8">
      {/* Cabeçalho da Seção */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-tech-violet/40 bg-tech-violet/10 px-3 py-1 text-xs font-semibold text-tech-violet">
          <Cpu className="size-3.5" />
          <span>Posicionamento de Engenharia</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-foreground">
          Engenharia com IA vs A Ilusão do Low-Code
        </h2>
        <p className="text-xs sm:text-sm text-muted-foreground max-w-3xl leading-relaxed">
          O mercado busca atalhos em ferramentas low-code e geração cega de código. Na prática de sistemas corporativos de missão crítica (bancário, fiscal e ERP), o diferencial insubstituível é <strong>entender a fundo o processo de negócio</strong> e ter <strong>maturidade arquitetural</strong> para governar a inteligência artificial.
        </p>
      </div>

      {/* Comparativo: Low-Code vs Engenharia com IA */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Lado A: O Risco do Low-Code e IA sem Método */}
        <div className="rounded-xl border border-rose-500/30 bg-rose-500/5 p-5 text-xs space-y-3">
          <div className="flex items-center gap-2 text-rose-400 font-bold text-sm">
            <AlertOctagon className="size-4" />
            <span>Low-Code & Uso Amador de IA</span>
          </div>
          <ul className="space-y-2 text-muted-foreground text-[11px] leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-rose-500 font-bold">✕</span>
              <span><strong>Dívida técnica instantânea:</strong> geração de código espaguete sem padrões de manutenção ou testes.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-500 font-bold">✕</span>
              <span><strong>Incapacidade em regras complexas:</strong> travamento quando o sistema exige conciliação bancária, DDA ou regras fiscais não triviais.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-500 font-bold">✕</span>
              <span><strong>Vulnerabilidades críticas:</strong> falhas de segurança OWASP, queries vulneráveis e vazamento de dados sensíveis.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-500 font-bold">✕</span>
              <span><strong>Dependência e custo explosivo:</strong> plataformas proprietárias que cobram caro por usuário e impedem evolução.</span>
            </li>
          </ul>
        </div>

        {/* Lado B: A Prática Lecino Lucas */}
        <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-5 text-xs space-y-3">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
            <CheckCircle2 className="size-4" />
            <span>Engenharia Guiada por Processo & Governança (LES)</span>
          </div>
          <ul className="space-y-2 text-muted-foreground text-[11px] leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-emerald-500 font-bold">✓</span>
              <span><strong>Domínio da regra antes do código:</strong> levantamento de requisitos, modelagem relacional e validação com os usuários.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-500 font-bold">✓</span>
              <span><strong>Arquitetura desacoplada:</strong> código limpo em TypeScript, Modular Monolith, contratos DTO e persistência com Prisma.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-500 font-bold">✓</span>
              <span><strong>Segurança deny-by-default:</strong> menor privilégio, mTLS bancário e proteção estrita de segredos e credenciais.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-500 font-bold">✓</span>
              <span><strong>Aceleração real com controle:</strong> IA utilizada para acelerar tarefas mecânicas sob supervisão e auditoria contínua.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Os 4 Passos do Método */}
      <div className="space-y-3">
        <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
          <GitFork className="size-4 text-tech-cyan" />
          A Esteira de Desenvolvimento Assistido por IA
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {pilaresMetodo.map((pilar) => {
            const Icon = pilar.icone;
            return (
              <div
                key={pilar.passo}
                className="rounded-xl border border-border/80 bg-card/60 p-4 text-xs space-y-2.5 shadow-xs flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex size-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="size-4" />
                    </div>
                    <span className="font-mono text-xs font-black text-muted-foreground">
                      {pilar.passo}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-bold text-foreground text-sm leading-snug">
                      {pilar.titulo}
                    </h4>
                    <span className="text-[10px] font-semibold text-tech-cyan block mt-0.5">
                      {pilar.subtitulo}
                    </span>
                  </div>

                  <p className="text-[11px] text-muted-foreground leading-relaxed">
                    {pilar.descricao}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
