import "./Home.css";

import NewsCard from "../../components/NewsCard/NewsCard.jsx";
import { noticias } from "../../data/noticias.js";

function Home() {
  const [manchete, ...demais] = noticias;

  return (
    <main className="container">
      <section className="manchete">
        <NewsCard
          categoria={manchete.categoria}
          titulo={manchete.titulo}
          resumo={manchete.resumo}
        />
      </section>

      <section className="grade">
        {demais.map(({ categoria, titulo, resumo, id }, i) => (
          <div key={i}>
            <NewsCard
              categoria={categoria}
              titulo={titulo}
              resumo={resumo}
              id={id}
            />
          </div>
        ))}
      </section>
    </main>
  );
}

export default Home;
