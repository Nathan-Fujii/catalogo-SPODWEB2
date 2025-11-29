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
              <Link to={`/alterar/${jogo.id}`} className="btn-editar">
                Alterar
              </Link>
              <button className="btn-excluir" onClick={() => excluir(jogo.id)}>
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
