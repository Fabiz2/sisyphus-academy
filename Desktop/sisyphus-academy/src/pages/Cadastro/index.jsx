import { Link } from 'react-router-dom'
import './Cadastro.css'

export default function Cadastro() {
  return (
    <main className="cadastro-escolha">
      <Link to="/cadastro/aluno" className="opcao">
        <h2>Aluno</h2>
        <p>Cadastrar um novo aluno</p>
      </Link>

      <Link to="/cadastro/maquina" className="opcao">
        <h2>Máquina</h2>
        <p>Cadastrar um novo equipamento</p>
      </Link>
    </main>
  )
}