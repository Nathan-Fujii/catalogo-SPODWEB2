import { useEffect, useState } from "react";
import axios from "axios";
import CardJogo from "../components/CardJogo";
import "../visuals/App.css";

function Corrida() {
  const [lista, setLista] = useState([]);

  useEffect(() => {
    axios.get("/api/jogos.json").then((res) =>
      setLista(res.data.filter((j) => j.genero === "Corrida"))
    );
  }, []);

  return (
    <main>
      <h1>Jogos de Corrida</h1>

      <div className="lista">
        {lista.map((jogo) => (
          <CardJogo key={jogo.id} jogo={jogo} />
        ))}
      </div>
    </main>
  );
}

export default Corrida;