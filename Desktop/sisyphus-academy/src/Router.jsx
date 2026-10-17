import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Nav from "./components/Nav"
import NotFound from "./pages/NotFound"


export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                 <Route path="*" element={<NotFound/>} />
            </Routes>
        </BrowserRouter>
    )
}