import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function JogoDetalhes() {
  const { slug } = useParams();
  const [jogo, setJogo] = useState(null);

  useEffect(() => {
    axios.get("/api/jogos.json").then((res) => {
      setJogo(res.data.find((j) => j.slug === slug));
    });
  }, [slug]);

  if (!jogo) return <p>Carregando...</p>;

  return (
    <main>
      <h1>{jogo.nome}</h1>
      <img src={jogo.capa} alt={jogo.nome} />
      <p>{jogo.descricao}</p>
      <p>Gênero: {jogo.genero}</p>
      <p>Preço: R$ {jogo.preco.toFixed(2)}</p>
    </main>
  );
}

export default JogoDetalhes;
