import Logo from "./Logo";
import Nav from "./Nav";
import "../visuals/App.css"

function Topo() {
  return (
    <header className="App-header">
      <Logo />
      <h1 className="App-name">DIESEL</h1>
      <Nav />
    </header>
  );
}

export default Topo;
