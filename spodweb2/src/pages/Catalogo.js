import React, { useEffect, useState } from "react";
import axios from "axios";
import MenuTabela from "../components/MenuTabela";
import TabelaJogos from "../components/TabelaJogos";
import CadastroJogo from "../components/CadastroJogo";
import "../visuals/App.css";

function Catalogo() {
  const [jogos, setJogos] = useState([]);

  useEffect(() => {
    axios.get("/api/jogos.json").then((res) => setJogos(res.data));
  }, []);

  const excluir = (id) => {
    setJogos(jogos.filter((j) => j.id !== id));
  };

  const cadastrar = (novo) => {
    setJogos([...jogos, novo]);
  };

  return (
    <main>
      <h1>Catálogo de Jogos</h1>
      <MenuTabela />
      <TabelaJogos jogos={jogos} excluir={excluir} />
      <CadastroJogo cadastrar={cadastrar} />
    </main>
  );
}

export default Catalogo;
