import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import Home from './pages/home';
import Poems from './pages/poems';
import { poems } from "./pages/data";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="poems" element={<Poems />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
