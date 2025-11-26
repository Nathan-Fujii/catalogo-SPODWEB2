import React, { useEffect, useState } from "react";
import axios from "axios";
import CardJogo from "../components/CardJogo";

function RPG() {
  const [jogos, setJogos] = useState([]);

  useEffect(() => {
    axios.get("/api/jogos.json").then((res) => {
      setJogos(res.data.filter((j) => j.genero === "RPG"));
    });
  }, []);

  return (
    <main>
      <h1>Jogos de RPG</h1>
      <div className="lista">
        {jogos.map((j) => (
          <CardJogo key={j.id} jogo={j} />
        ))}
      </div>
    </main>
  );
}

export default RPG;
