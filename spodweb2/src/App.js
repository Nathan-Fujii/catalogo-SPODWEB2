import React from "react";
import { Routes, Route } from "react-router-dom";

import Topo from "./components/Topo";
import Rodape from "./components/Rodape";

import Home from "./pages/Home";
import Acao from "./pages/Acao";
import RPG from "./pages/RPG";
import Corrida from "./pages/Corrida";
import Catalogo from "./pages/Catalogo";
import JogoDetalhes from "./pages/JogoDetalhes";
import AlterarPage from "./pages/AlterarPage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Topo />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acao" element={<Acao />} />
        <Route path="/rpg" element={<RPG />} />
        <Route path="/corrida" element={<Corrida />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/jogo/:slug" element={<JogoDetalhes />} />
        <Route path="/alterar/:id" element={<AlterarPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Rodape />
    </>
  );
}

export default App;