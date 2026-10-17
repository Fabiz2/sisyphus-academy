import React from 'react'
import "./NotFound.css"
import { Link } from 'react-router-dom'

export default function index() {
  return (
    <section className='notfound-container'>
        <h1 className='notfound-title'>404 - Página não encontrada</h1>
        <p className='notfound-text'>
            A página que você está procurando não existe.
        </p>
        <Link to="/" className="notfound-link">
            Voltar para Home
        </Link>
    </section>
  )
}