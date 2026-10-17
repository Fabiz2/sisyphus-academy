import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from "./components/Header"
import NotFound from "./pages/NotFound"
import Home from "./pages/Home"


export default function Router(){
    return(
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                 <Route path="*" element={<NotFound/>} />
            </Routes>
        </BrowserRouter>
    )
}