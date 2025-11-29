import { Link } from "react-router-dom";

function CardJogo({ jogo }) {
  // load images from src/assets/imgs at build time
  const images = require.context("../assets/imgs", false, /\.(png|jpe?g|webp)$/);

  const resolveSrc = (capa) => {
    if (!capa) return images("./logo.png");

    // if path is absolute (served from public), prefer resolving from src assets first,
    // falling back to the public path if not available
    if (capa.startsWith("/")) {
      const maybeName = capa.replace(/^\/?imgs\//, "");
      try {
        return images(`./${maybeName}`);
      } catch (e) {
        return capa;
      }
    }

    // normalize strings like './imgs/name.ext' or 'imgs/name.ext'
    const name = capa.replace(/^\.?\/imgs\//, "");

    try {
      return images(`./${name}`);
    } catch (e) {
      // fallback to logo
      return images("./logo.png");
    }
  };

  const src = resolveSrc(jogo.capa);

  return (
    <div className="card">
      <img className="jogo-cover" src={src} alt={jogo.nome} />
      <h3>{jogo.nome}</h3>
      <p>{jogo.genero}</p>
      <p>R$ {jogo.preco.toFixed(2)}</p>
      <Link to={`/jogo/${jogo.slug}`} className="App-link">Ver detalhes</Link>
    </div>
  );
}

export default CardJogo;
