import { Link } from 'react-router-dom'
import './Nav.css'

export default function index() {
    return (
        <nav>
            <ul className='menu'>
                <li>
                    Home
                </li>
                <li>
                    Sobre
                </li>
                <li>
                    Cadastro
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
