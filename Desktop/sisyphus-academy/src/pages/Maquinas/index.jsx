import { useState, useEffect } from 'react'
import './Maquinas.css'

export default function Maquinas() {
    const [maquinas, setMaquinas] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/maquinas")
            .then((res) => res.json())
            .then((data) => setMaquinas(data))
    }, [])

    return (
        <main className="maquinas">
            <h1>Nossas máquinas</h1>

            <div className="cards">
                {maquinas.map((m) => (
                    <div key={m.id} className="card-maquina">
                        <img src={m.imagem} alt={m.nome} />
                        <h3>{m.nome}</h3>
                        <p>{m.grupo} · {m.quantidade} un.</p>
                    </div>
                ))}
            </div>
        </main>
    )
}