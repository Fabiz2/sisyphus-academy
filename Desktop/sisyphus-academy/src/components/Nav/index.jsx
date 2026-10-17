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
                    Alunos
                </li>
                <li>
                    Maquinas
                </li>
            </ul>
        </nav>
    )
}
