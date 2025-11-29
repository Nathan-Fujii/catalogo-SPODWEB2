import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import AlterarJogo from "../components/AlterarJogo";

function AlterarPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [jogos, setJogos] = useState([]);
  const [jogo, setJogo] = useState(null);

  useEffect(() => {
    axios.get("/api/jogos.json").then((res) => {
      setJogos(res.data);
      setJogo(res.data.find((j) => j.id === parseInt(id)));
    });
  }, [id]);

  const salvarAlteracoes = (atualizado) => {
    const novaLista = jogos.map((j) =>
      j.id === atualizado.id ? atualizado : j
    );

    setJogos(novaLista);

    alert("Jogo alterado com sucesso!");
    navigate("/catalogo");
  };

  return (
    <main>
      {jogo && <AlterarJogo jogo={jogo} salvarAlteracoes={salvarAlteracoes} />}
    </main>
  );
}

export default AlterarPage;
