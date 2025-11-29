import { Link } from "react-router-dom";

function TabelaJogos({ jogos, excluir }) {
  return (
    <table className="tabela">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Gênero</th>
          <th>Preço</th>
          <th>Ações</th>
        </tr>
      </thead>

      <tbody>
        {jogos.map((jogo) => (
          <tr key={jogo.id}>
            <td>{jogo.id}</td>
            <td>{jogo.nome}</td>
            <td>{jogo.genero}</td>
            <td>R$ {jogo.preco.toFixed(2)}</td>
            <td>
              <button className="alterar-button">
                <Link to={`/alterar/${jogo.id}`} style={{color: "white"}}>
                  Alterar
                </Link>
              </button>
              <button className="excluir-button" onClick={() => excluir(jogo.id)}>
                Excluir
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TabelaJogos;
