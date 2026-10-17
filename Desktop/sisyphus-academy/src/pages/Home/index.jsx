import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"


const diferenciais = [
  { id: 1, titulo: 'Equipamentos modernos', texto: 'Máquinas novas e bem cuidadas.' },
  { id: 2, titulo: 'Orientação', texto: 'Professores acompanhando seu treino.' },
  { id: 3, titulo: 'Persistência', texto: 'Como Sísifo, sem desistir.' },
];

export default function index() {
  return (
    <main>
        <section className="hero">
            <h1>Sisyphus Academy</h1>
            <p>Empurre sua pedra todos os dias.</p>
            <Link>Matricule-se</Link>
        </section>
    </main>
  )
}
