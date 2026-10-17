import { Link } from 'react-router-dom'
import './Cadastro.css'

export default function Cadastro() {
  return (
    <main className="cadastro-escolha">
      <Link to="/cadastro/usuario" className="opcao">
        <h2>Usuário</h2>
        <p>Cadastrar um novo aluno</p>
      </Link>

      <Link to="/cadastro/maquina" className="opcao">
        <h2>Máquina</h2>
        <p>Cadastrar um novo equipamento</p>
      </Link>
    </main>
  )
}