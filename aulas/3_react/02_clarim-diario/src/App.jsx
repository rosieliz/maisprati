import "./App.css";

import { useState, useEffect } from "react";

import Header from "./components/Header/Header.jsx";
import Home from "./pages/Home/Home.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  const [tema, setTema] = useState(() => {
    const salvo = localStorage.getItem("tema");
    if (salvo) return salvo;

    const preferenciaEscuro = window?.matchMedia(
      "(prefers-color-scheme: dark)",
    )?.matches;
    if (preferenciaEscuro) return "dark";

    return "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", tema);
    localStorage.setItem("tema", tema);
  }, [tema]);

  function alternarTema() {
    setTema((t) => (t === "light" ? "dark" : "light"));
  }

  return (
    <>
      <Header tema={tema} aoAlternarTema={alternarTema} />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
