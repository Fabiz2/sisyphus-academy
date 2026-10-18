import { Link } from 'react-router-dom'
import './Nav.css'

export default function index() {
    return (
        <nav>
            <ul className='menu'>
                <li>
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/sobre">
                        Sobre
                    </Link>
                </li>
                <li>
                    <Link to="/cadastro">
                        Cadastro
                    </Link>
                </li>
                <li>
                    <Link to="/alunos">
                        Alunos
                    </Link>
                </li>
                <li>
                    <Link to="/maquinas">
                        Maquinas
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
