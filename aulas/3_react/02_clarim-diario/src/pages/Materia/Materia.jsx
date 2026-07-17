import "./Materia.css";

import { useParams, Link } from "react-router-dom";
import { noticias } from "../../data/noticias";

function Materia() {
  const { id } = useParams();
  const noticia = noticias.find((n) => n.id === Number(id));

  if (!noticia) {
    return (
      <main className="container">
        <p>
          Matéria não encontrada - Nem o Homem-Aranha Destruiria uma Página tão
          Rápido.
        </p>
        <Link to="/">Voltar à capa</Link>
      </main>
    );
  }

  return (
    <main className="container materia">
      <Link className="materia__voltar" to="/">
        Voltar à capa
      </Link>
      <span className="materia__categoria">{noticia.categoria}</span>
      <h1 className="noticia__titulo">{noticia.titulo}</h1>
      <p className="materia__resumo">{noticia.resumo}</p>
      <div className="materia__texto">
        <p>{noticia.texto}</p>
      </div>
    </main>
  );
}

export default Materia;
