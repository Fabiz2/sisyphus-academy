import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"
import imgSisifo from "../../assets/images/sisifo-imagem-fundo-hero.png"
import Card from '../../components/Card'
import { useState, useEffect } from 'react'
import CardMaquina from '../../components/Card-Maquina'

const diferenciais = [
  { id: 1, titulo: 'Equipamentos modernos', texto: 'Máquinas novas e bem cuidadas.' },
  { id: 2, titulo: 'Orientação', texto: 'Professores acompanhando seu treino.' },
  { id: 3, titulo: 'Persistência', texto: 'Como Sísifo, sem desistir.' },
];

export default function index() {
  const [maquinas, setMaquinas] = useState([])
  const [alunos, setAlunos] = useState([])

  useEffect(() => {
    fetch("https://6ad5fb9df71f154ac4864660.mockapi.io/maquinas")
      .then((res) => res.json())
      .then((data) => setMaquinas(data))
      .catch(() => setMaquinas([]))

    fetch("https://6ad5fb9df71f154ac4864660.mockapi.io/alunos")
      .then((res) => res.json())
      .then((data) => setAlunos(data))
      .catch(() => setAlunos([]))
  }, [])

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
            Cadastrar
          </Link>
        </div>
      </section>

      <section className="diferenciais">
        <h2>Por que a Sisyphus Academy?</h2>
        <div className="cards">
          {diferenciais.map((item) => (
            <Card key={item.id}>
              <h3>{item.titulo}</h3>
              <p>{item.texto}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="numeros">
        <div className="numero">
          <strong>{alunos.length}</strong>
          <span>Alunos matriculados</span>
        </div>
        <div className="numero">
          <strong>{maquinas.length}</strong>
          <span>Máquinas disponíveis</span>
        </div>
      </section>

      <section className="maquinas-destaque">
        <h2>Nossas máquinas</h2>

        <div className="cards">
          {maquinas.slice(0, 3).map((m) => (
            <CardMaquina key={m.id} {...m} />
          ))}
        </div>

        <Link to="/maquinas" className="link-cadastro">Ver todas</Link>
      </section>

      <section className="chamada-final">
        <span className="chamada-friso"></span>
        <h2>Sua pedra não vai se empurrar sozinha</h2>
        <p>"É preciso imaginar Sísifo feliz." — Albert Camus</p>
      </section>
    </main>
  )
}
