import { useState, useEffect } from "react";

function AlterarJogo({ jogo, salvarAlteracoes }) {
  const [nome, setNome] = useState("");
  const [genero, setGenero] = useState("");
  const [preco, setPreco] = useState("");

  useEffect(() => {
    if (jogo) {
      setNome(jogo.nome);
      setGenero(jogo.genero);
      setPreco(jogo.preco);
    }
  }, [jogo]);

  const salvar = (e) => {
    e.preventDefault();

    salvarAlteracoes({
      ...jogo,
      nome,
      genero,
      preco: parseFloat(preco),
      slug: nome.toLowerCase().replace(/\s+/g, "-")
    });
  };

  return (
    <form className="formulario" onSubmit={salvar}>
      <h2>Alterar Jogo</h2>

      <input className="text-input" type="text" value={nome} onChange={(e) => setNome(e.target.value)} />

      <input className="text-input" type="text" value={genero} onChange={(e) => setGenero(e.target.value)} />

      <input className="text-input" type="number" value={preco} onChange={(e) => setPreco(e.target.value)} />

      <button className="cadastro-button" type="submit">Salvar alterações</button>
    </form>
  );
}

export default AlterarJogo;