import "./NewsCard.css";

function NewsCard({ categoria, titulo, resumo }) {
  return (
    <article className="card">
      <span className="card__categoria">{categoria}</span>
      <h2 className="card__titulo">{titulo}</h2>

      {resumo && <p className="card__resumo">{resumo}</p>}
    </article>
  );
}

export default NewsCard;
