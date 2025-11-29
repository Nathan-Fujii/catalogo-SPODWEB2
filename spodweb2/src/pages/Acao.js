import { useEffect, useState } from "react";
import axios from "axios";
import CardJogo from "../components/CardJogo";
import "../visuals/App.css";

function Acao() {
  const [lista, setLista] = useState([]);

  useEffect(() => {
    axios.get("/api/jogos.json").then((res) =>
      setLista(res.data.filter((j) => j.genero === "Ação"))
    );
  }, []);

  return (
    <main>
      <h1>Jogos de Ação</h1>

      <div className="lista">
        {lista.map((jogo) => (
          <CardJogo key={jogo.id} jogo={jogo} />
        ))}
      </div>
    </main>
  );
}

export default Acao;