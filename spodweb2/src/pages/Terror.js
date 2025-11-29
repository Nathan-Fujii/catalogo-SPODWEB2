import React, { useEffect, useState } from "react";
import axios from "axios";
import CardJogo from "../components/CardJogo";
import "../visuals/App.css";

function Terror() {
  const [jogos, setJogos] = useState([]);

  useEffect(() => {
    axios.get("/api/jogos.json").then((res) => {
      setJogos(res.data.filter((j) => j.genero === "Terror"));
    });
  }, []);

  return (
    <main>
      <h1>Jogos de Terror</h1>
      <div className="carrossel">
        {jogos.map((j) => (
          <CardJogo key={j.id} jogo={j} />
        ))}
      </div>
    </main>
  );
}

export default Terror;
