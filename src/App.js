import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import Home from './pages/home';
import Poems from './pages/poems';
import Projects from "./pages/projects";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="poems" element={<Poems />} />
                <Route path="projects/" element={<Projects />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
