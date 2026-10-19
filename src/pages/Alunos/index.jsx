import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Alunos.css'
import Card from '../../components/Card'

export default function Alunos() {
    const [alunos, setAlunos] = useState([])
    const [carregando, setCarregando] = useState(true)
    const [erro, setErro] = useState(false)

    useEffect(() => {
        fetch("https://6ad5fb9df71f154ac4864660.mockapi.io/alunos")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Falha ao buscar alunos")
                }
                return response.json()
            })
            .then((data) => setAlunos(data))
            .catch(() => setErro(true))
            .finally(() => setCarregando(false))
    }, [])

    const handleDelete = (id) => {
        if (!window.confirm("Deseja excluir este aluno?")) {
            return
        }

        fetch(`https://6ad5fb9df71f154ac4864660.mockapi.io/alunos/${id}`, {
            method: "DELETE"
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Falha ao excluir")
                }
                setAlunos((prevAlunos) => prevAlunos.filter((aluno) => aluno.id !== id))
            })
            .catch(() => alert("Erro ao excluir o aluno"))
    }

    return (
        <main className="alunos">
            <h1>Nossos alunos</h1>

            {carregando && <p className="alunos-aviso">Carregando...</p>}

            {erro && (
                <p className="alunos-aviso">
                    Não foi possível carregar os alunos. O json-server está rodando?
                </p>
            )}

            {!carregando && !erro && alunos.length === 0 && (
                <div className="alunos-aviso">
                    <p>Nenhum aluno cadastrado ainda.</p>
                    <Link to="/cadastro/aluno" className="alunos-botao">Cadastrar aluno</Link>
                </div>
            )}

            <div className="alunos-lista">
                {alunos.map((aluno) => (
                    <Card key={aluno.id}>
                        <h3>{aluno.nome}</h3>
                        <p>{aluno.telefone}</p>
                        <p>{aluno.email}</p>
                        <button onClick={() => handleDelete(aluno.id)} className="alunos-botao">Excluir</button>
                    </Card>
                ))}
            </div>
        </main>
    )
}