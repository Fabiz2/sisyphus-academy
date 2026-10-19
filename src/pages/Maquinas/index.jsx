import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import CardMaquina from "../../components/Card-Maquina"
import './Maquinas.css'

export default function Maquinas() {
    const [maquinas, setMaquinas] = useState([])
    const [carregando, setCarregando] = useState(true)
    const [erro, setErro] = useState(false)

    useEffect(() => {
        fetch("https://6ad5fb9df71f154ac4864660.mockapi.io/maquinas")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Falha ao buscar máquinas")
                }
                return response.json()
            })
            .then((data) => setMaquinas(data))
            .catch(() => setErro(true))
            .finally(() => setCarregando(false))
    }, [])

    const handleDelete = (id) => {
        if (!window.confirm("Deseja excluir esta máquina?")) {
            return
        }

        fetch(`https://6ad5fb9df71f154ac4864660.mockapi.io/maquinas/${id}`, {
            method: "DELETE"
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Falha ao excluir")
                }
                setMaquinas((prevMaquinas) => prevMaquinas.filter((m) => m.id !== id))
            })
            .catch(() => alert("Erro ao excluir a máquina"))
    }

    return (
        <main className="maquinas">
            <h1>Nossas máquinas</h1>

            {carregando && <p className="maquinas-aviso">Carregando...</p>}

            {erro && (
                <p className="maquinas-aviso">
                    Não foi possível carregar as máquinas. O json-server está rodando?
                </p>
            )}

            {!carregando && !erro && maquinas.length === 0 && (
                <div className="maquinas-aviso">
                    <p>Nenhuma máquina cadastrada ainda.</p>
                    <Link to="/cadastro/maquina" className="maquinas-botao">Cadastrar máquina</Link>
                </div>
            )}

            <div className="maquinas-lista">
                {maquinas.map((m) => (
                    <CardMaquina key={m.id} {...m} onDelete={handleDelete} />
                ))}

            </div>
        </main>
    )
}