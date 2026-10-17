import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"
import imgSisifo from "../../assets/images/sisifo-imagem-fundo-hero.png"

const diferenciais = [
  { id: 1, titulo: 'Equipamentos modernos', texto: 'Máquinas novas e bem cuidadas.' },
  { id: 2, titulo: 'Orientação', texto: 'Professores acompanhando seu treino.' },
  { id: 3, titulo: 'Persistência', texto: 'Como Sísifo, sem desistir.' },
];

export default function index() {
  return (
    <main>
      <section className="hero">
        <div className="hero-title">
          <h1>Sisyphus Academy</h1>
          <p>Empurre sua pedra todos os dias.</p>
        </div>

        <img
          src={imgSisifo}
          alt="Sísifo empurrando uma pedra montanha acima"
          className="hero-img"
        />

        <div className="hero-button">
          <Link to="/cadastro" className="link-cadastro">
            Matricule-se
          </Link>
        </div>
      </section>

      <section className="diferenciais">
        <h2>Por que a Sisyphus Academy?</h2>
        <div className="cards">
          {diferenciais.map((item) => (
            <div key={item.id} className="card">
              <h3>{item.titulo}</h3>
              <p>{item.texto}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
