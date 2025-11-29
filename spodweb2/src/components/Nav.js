import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="menu">
      <NavLink className="App-link" to="/"> Home /</NavLink>
      <NavLink className="App-link" to="/acao"> Ação /</NavLink>
      <NavLink className="App-link" to="/rpg"> RPG /</NavLink>
      <NavLink className="App-link" to="/terror"> Terror /</NavLink>
      <NavLink className="App-link" to="/corrida"> Corrida /</NavLink>
      <NavLink className="App-link" to="/catalogo"> Catálogo</NavLink>
    </nav>
  );
}

export default Nav;
