import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import "../Cadastro/Formulario.css"

export default function CadastroUsuario() {
    const [formData, setFormData] = useState({
        nome: "",
        telefone: "",
        email: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (formData.nome === "" || formData.telefone === "" || formData.email === "") {
            toast.error("Todos os campos são obrigatórios")
            return
        }

        fetch("http://localhost:3000/alunos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        })
            .then((response) => response.json())
            .then(() => {
                toast.success("Usuário cadastrado com sucesso")
                setFormData({ nome: "", telefone: "", email: "" })
            })
            .catch(() => {
                toast.error("Erro ao cadastrar. O json-server está rodando?")
            })
    }

    return (
        <main className="container-cadastro">
            <Link to="/cadastro" className="voltar">← Voltar</Link>
            <h1>Cadastro de usuários</h1>

            <form onSubmit={handleSubmit}>
                <article className="form-control">
                    <label htmlFor="nome">Nome</label>
                    <input type="text" id="nome" name="nome" placeholder="Nome"
                        value={formData.nome} onChange={handleChange} />
                </article>

                <article className="form-control">
                    <label htmlFor="telefone">Telefone</label>
                    <input type="text" id="telefone" name="telefone" placeholder="Telefone"
                        value={formData.telefone} onChange={handleChange} />
                </article>

                <article className="form-control">
                    <label htmlFor="email">E-mail</label>
                    <input type="text" id="email" name="email" placeholder="E-mail"
                        value={formData.email} onChange={handleChange} />
                </article>

                <button type="submit">Cadastrar</button>
                <ToastContainer />
            </form>
        </main>
    )
}