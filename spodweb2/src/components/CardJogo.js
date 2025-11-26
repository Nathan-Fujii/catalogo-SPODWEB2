import { Link } from "react-router-dom";

function CardJogo({ jogo }) {
  return (
    <div className="card">
      <img src={jogo.capa} alt={jogo.nome} />
      <h3>{jogo.nome}</h3>
      <p>{jogo.genero}</p>
      <p>R$ {jogo.preco.toFixed(2)}</p>
      <Link to={`/jogo/${jogo.slug}`}>Ver detalhes</Link>
    </div>
  );
}

export default CardJogo;
