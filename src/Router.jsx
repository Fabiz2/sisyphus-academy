import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from "./components/Header"
import NotFound from "./pages/NotFound"
import Home from "./pages/Home"
import Cadastro from './pages/Cadastro'
import CadastroUsuario from './pages/Cadastro-Usuarios'
import CadastroMaquina from './pages/Cadastro-Maquinas'
import Maquinas from './pages/Maquinas'
import Alunos from './pages/Alunos'


export default function Router() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/cadastro/aluno" element={<CadastroUsuario />} />
                <Route path="/cadastro/maquina" element={<CadastroMaquina />} />
                <Route path="/maquinas" element={<Maquinas/>}/>
                <Route path="/alunos" element={<Alunos/>}/>
            </Routes>
        </BrowserRouter>
    )
}