import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from "./components/Header"
import NotFound from "./pages/NotFound"
import Home from "./pages/Home"
import Cadastro from './pages/Cadastro'


export default function Router() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/cadastro" element={<Cadastro />} />
            </Routes>
        </BrowserRouter>
    )
}