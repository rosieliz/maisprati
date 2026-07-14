import "./App.css";

import Header from "./components/Header/Header.jsx";
import NewsCard from "./components/NewsCard/NewsCard.jsx";
import { noticias } from "./data/noticias.js";

function App() {
  const [manchete, ...demais] = noticias;

  return (
    <>
      <Header />

      <main className="container">
        <section className="manchete">
          <NewsCard
            categoria={manchete.categoria}
            titulo={manchete.titulo}
            resumo={manchete.resumo}
          />
        </section>

        <section className="grade">
          {demais.map(({ categoria, titulo, resumo }, i) => (
            <div key={i}>
              <NewsCard categoria={categoria} titulo={titulo} resumo={resumo} />
            </div>
          ))}
        </section>
      </main>
    </>
  );
}

export default App;
