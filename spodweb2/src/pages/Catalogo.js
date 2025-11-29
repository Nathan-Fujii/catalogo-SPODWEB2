import React, { useEffect, useState } from "react";
import axios from "axios";
import MenuTabela from "../components/MenuTabela";
import TabelaJogos from "../components/TabelaJogos";
import CadastroJogo from "../components/CadastroJogo";
import "../visuals/App.css";

function Catalogo() {
  const [jogos, setJogos] = useState([]);

  // load from localStorage if available, otherwise fetch and persist
  useEffect(() => {
    const stored = localStorage.getItem("jogos");
    if (stored) {
      try {
        setJogos(JSON.parse(stored));
        return;
      } catch (e) {
        // fallthrough to fetch
      }
    }

    axios.get("/api/jogos.json").then((res) => {
      setJogos(res.data);
      localStorage.setItem("jogos", JSON.stringify(res.data));
    });
  }, []);

  // helper: persist and set state immutably
  const updateJogos = (next) => {
    setJogos(next);
    try {
      localStorage.setItem("jogos", JSON.stringify(next));
    } catch (e) {
      // ignore storage errors
    }
  };

  const excluir = (id) => {
    const jogo = jogos.find((j) => j.id === id);
    if (!jogo) return;

    if (!window.confirm(`Confirma exclusão do jogo "${jogo.nome}"?`)) return;

    const next = jogos.filter((j) => j.id !== id);
    updateJogos(next);
  };

  // create unique id based on the highest existing id + 1
  const generateId = () => {
    if (!jogos || jogos.length === 0) return 1;
    const maxId = jogos.reduce((max, j) => {
      const idNum = Number(j.id) || 0;
      return idNum > max ? idNum : max;
    }, 0);
    return maxId + 1;
  };

  const makeUniqueSlug = (base) => {
    const baseSlug = base
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-");

    const existing = new Set(jogos.map((j) => j.slug));
    let slug = baseSlug;
    let i = 1;
    while (existing.has(slug)) {
      slug = `${baseSlug}-${i++}`;
    }
    return slug;
  };

  const cadastrar = (novo) => {
    // validation
    if (!novo.nome || !novo.genero || isNaN(Number(novo.preco))) {
      alert("Preencha nome, gênero e preço válidos antes de cadastrar.");
      return;
    }

    const id = generateId();
    const slug = makeUniqueSlug(novo.nome);

    const item = {
      id,
      nome: novo.nome,
      genero: novo.genero,
      preco: Number(novo.preco),
      descricao: novo.descricao || "Jogo cadastrado manualmente.",
      capa: novo.capa || "./imgs/abstract.webp",
      slug,
    };

    const next = [...jogos, item];
    updateJogos(next);
    alert(`Jogo "${item.nome}" cadastrado com sucesso.`);
  };

  return (
    <main>
      <h1>Catálogo de Jogos</h1>
      <MenuTabela />
      <TabelaJogos jogos={jogos} excluir={excluir} />
      <CadastroJogo cadastrar={cadastrar} />
    </main>
  );
}

export default Catalogo;
