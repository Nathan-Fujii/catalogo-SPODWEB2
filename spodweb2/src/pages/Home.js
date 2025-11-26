import { useEffect, useState } from "react";
import axios from "axios";
import CardJogo from "../components/CardJogo";

function Home() {
  const [jogos, setJogos] = useState([]);

  useEffect(() => {
    axios.get("/api/jogos.json").then((res) => setJogos(res.data));
  }, []);

  return (
    <main>
      <h1>Jogos em Destaque</h1>

      <div className="lista">
        {jogos.map((j) => (
          <CardJogo key={j.id} jogo={j} />
        ))}
      </div>
    </main>
  );
}

export default Home;
