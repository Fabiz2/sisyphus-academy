import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import "../Cadastro/Formulario.css"

export default function CadastroMaquina() {
    const [formData, setFormData] = useState({
        nome: "",
        grupo: "",
        descricao: "",
        quantidade: "",
        imagem: ""
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

        if (formData.nome === "" || formData.grupo === "" || formData.quantidade === "" || formData.imagem === "") {
            toast.error("Todos os campos são obrigatórios")
            return
        }

        fetch(" https://6ad5fb9df71f154ac4864660.mockapi.io/maquinas", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        })
            .then((response) => response.json())
            .then(() => {
                toast.success("Máquina cadastrada com sucesso")
                setFormData({ nome: "", grupo: "", quantidade: "", imagem: "" })
            })
            .catch(() => {
                toast.error("Erro ao cadastrar. O json-server está rodando?")
            })
    }

    return (
        <main className="container-cadastro">
            <Link to="/cadastro" className="voltar">← Voltar</Link>
            <h1>Cadastro de máquinas</h1>

            <form onSubmit={handleSubmit}>
                <article className="form-control">
                    <label htmlFor="nome">Nome da máquina</label>
                    <input type="text" id="nome" name="nome" placeholder="Ex.: Leg Press"
                        value={formData.nome} onChange={handleChange} />
                </article>

                <article className="form-control">
                    <label htmlFor="grupo">Grupo muscular</label>
                    <select id="grupo" name="grupo" value={formData.grupo} onChange={handleChange}>
                        <option value="">Selecione</option>
                        <option value="Peito">Peito</option>
                        <option value="Costas">Costas</option>
                        <option value="Pernas">Pernas</option>
                        <option value="Ombros">Ombros</option>
                        <option value="Braços">Braços</option>
                        <option value="Abdômen">Abdômen</option>
                    </select>
                </article>

                <article className="form-control">
                    <label htmlFor="descricao">Descrição</label>
                    <textarea id="descricao" name="descricao" rows="4"
                        placeholder="Como a máquina funciona e quais músculos trabalha"
                        value={formData.descricao} onChange={handleChange} />
                </article>

                <article className="form-control">
                    <label htmlFor="quantidade">Quantidade</label>
                    <input type="number" id="quantidade" name="quantidade" placeholder="Ex.: 2" min="1"
                        value={formData.quantidade} onChange={handleChange} />
                </article>

                <article className="form-control">
                    <label htmlFor="imagem">URL da imagem</label>
                    <input type="url" id="imagem" name="imagem" placeholder="https://..."
                        value={formData.imagem} onChange={handleChange} />

                    {formData.imagem && (
                        <img src={formData.imagem} alt="Prévia da máquina" className="previa" />
                    )}
                </article>

                <button type="submit">Cadastrar</button>
                <ToastContainer />
            </form>
        </main>
    )
}