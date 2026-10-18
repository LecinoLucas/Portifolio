import { useState } from "react";
import { Bell, Menu } from "lucide-react";
import { Bloco } from "@/components/demos/sistema-blocos";
import { MolduraDemo } from "@/components/demos/moldura-demo";
import type { DefinicaoSistema } from "@/data/demos/sistema-tipos";
import "@/styles/sistema-demo.css";

/** Demonstração visual de um sistema: menu, barra superior e telas aproximadas, com dados fictícios. */
export function SistemaDemo({ definicao }: { definicao: DefinicaoSistema }) {
  const [id, setId] = useState(definicao.telas[0].id);
  const tela = definicao.telas.find((t) => t.id === id) ?? definicao.telas[0];

  return (
    <MolduraDemo titulo={definicao.titulo}>
      <div className="sis" data-tema={definicao.tema} data-testid="sistema-demo">
        <nav className="sis-lateral" aria-label={`Menu de ${definicao.marca}`}>
          <div className="sis-marca"><b>{definicao.marca}</b><small>{definicao.submarca}</small></div>
          {definicao.telas.map((t) => (
            <button key={t.id} type="button" className="sis-item" aria-current={t.id === id ? "page" : undefined} onClick={() => setId(t.id)}>{t.rotulo}</button>
          ))}
          <div className="sis-usuario"><span className="sis-avatar">{definicao.usuario.nome.slice(0, 1)}</span><span><b>{definicao.usuario.nome}</b><br /><small>{definicao.usuario.papel}</small></span></div>
        </nav>
        <div className="sis-principal">
          <div className="sis-nav-topo" role="tablist" aria-label="Telas da demonstração">
            {definicao.telas.map((t) => (
              <button key={t.id} type="button" role="tab" aria-selected={t.id === id} className="sis-item" aria-current={t.id === id ? "page" : undefined} onClick={() => setId(t.id)}>{t.rotulo}</button>
            ))}
          </div>
          <header className="sis-topo">
            <span className="sis-topo-esq"><Menu aria-hidden="true" className="size-4" /> <b>{tela.rotulo}</b></span>
            <span className="sis-topo-dir"><Bell aria-hidden="true" className="size-4" /><span className="sis-avatar">{definicao.usuario.nome.slice(0, 1)}</span></span>
          </header>
          <div className="sis-conteudo">
            <div className="sis-cabecalho">
              <div><h4 className="sis-titulo">{tela.titulo}</h4><p className="sis-suave sis-p">{tela.descricao}</p></div>
              {tela.acao ? <span className="sis-botao">{tela.acao}</span> : null}
            </div>
            <div className="sis-corpo">{tela.blocos.map((b, i) => <Bloco key={i} bloco={b} />)}</div>
          </div>
        </div>
      </div>
    </MolduraDemo>
  );
}
