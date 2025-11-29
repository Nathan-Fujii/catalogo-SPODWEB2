import { useEffect, useState } from "react";
import axios from "axios";
import CardJogo from "../components/CardJogo";
import "../visuals/App.css";

function Home() {
  const [jogos, setJogos] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("jogos");
    if (stored) {
      try {
        setJogos(JSON.parse(stored));
        return;
      } catch (e) {
        // ignore and fall back to fetch
      }
    }

    axios.get("/api/jogos.json").then((res) => setJogos(res.data));
  }, []);

  return (
    <main className="App-body">
      <h1>Jogos em Destaque</h1>

      <div className="carrossel">
        {jogos.map((j) => (
          <CardJogo capa={j.capa} key={j.id} jogo={j} />
        ))}
      </div>
    </main>
  );
}

export default Home;
