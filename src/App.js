import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import Home from './pages/home';
import Poems from './pages/poems';
import Projects from "./pages/projects";

function App() {

    // <Route path="me/projects" element={<Projects />} /> - in dev

    return (
        <BrowserRouter>
            <Routes>
                <Route path="poems" element={<Poems />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
